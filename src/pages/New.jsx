import { MdOutlineDriveFolderUpload } from "react-icons/md";
import { FormInput } from "../components";
import { useEffect, useState } from "react";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { auth, db, storage } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";

const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  const [data, setData] = useState({});
  const [perc, setPerc] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setPerc(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.error(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData((prev) => ({ ...prev, img: downloadURL }));
          });
        }
      );
    };
    file && uploadFile();
  }, [file]);

  function handleInput(e) {
    const id = e.target.id;
    const value = e.target.value;

    setData((prev) => ({ ...prev, [id]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      await setDoc(doc(db, "users", res.user.uid), {
        ...data,
        timeStamp: serverTimestamp(),
      });

      navigate(-1);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return (
    <>
      <div className="flex p-2 m-5 shadow-md">
        <h1 className="text-gray-400">{title}</h1>
      </div>
      <div className="flex p-2 m-5 shadow-md">
        <div className="flex justify-center flex-1">
          <img
            src={
              file
                ? URL.createObjectURL(file)
                : `https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg`
            }
            alt=""
            className="object-cover w-24 h-24 rounded-full"
          />
        </div>
        <div className="flex-[2]">
          <form onSubmit={handleSubmit} className="flex flex-wrap gap-5">
            <div className="flex flex-col w-full md:w-[48%]">
              <label
                htmlFor="file"
                className="mb-2 font-semibold text-gray-600 cursor-pointer"
              >
                Image: <MdOutlineDriveFolderUpload size={"2em"} />
              </label>
              <input
                onChange={(e) => setFile(e.target.files[0])}
                type="file"
                id="file"
                className="hidden"
              />
            </div>
            {inputs.map((input) => (
              <FormInput
                key={input.id}
                label={input.label}
                type={input.type}
                placeholder={input.placeholder}
                handleInput={handleInput}
                id={input.id}
              />
            ))}

            <button
              type="submit"
              disabled={perc !== null && perc < 100}
              className="px-4 py-2 font-semibold text-white bg-blue-500 rounded-md disabled:cursor-not-allowed disabled:bg-gray-300 hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default New;
