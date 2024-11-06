import { useEffect, useState } from "react";
import { CiGlobe } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import {
  IoChatboxOutline,
  IoListOutline,
  IoSearchOutline,
} from "react-icons/io5";
import { MdDarkMode, MdFullscreen, MdLightMode } from "react-icons/md";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const htmlElement = document.documentElement;
    if (darkMode) {
      htmlElement.classList.add("dark");
    } else {
      htmlElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="flex items-center h-12 text-sm text-gray-500 border-b border-gray-200 dark:text-darkText dark:bg-darkBg">
      <div className="flex items-center justify-between w-full p-4">
        <div className="flex items-center px-3 py-1 text-sm border-2 border-gray-300 rounded-lg">
          <input
            type="text"
            placeholder="search..."
            className="bg-transparent outline-none placeholder:text-xs"
          />
          <IoSearchOutline className="font-bold" />
        </div>
        <div className="flex items-center text-base font-medium text-gray-700">
          <div className="flex items-center gap-1 mr-5 text-xs dark:text-darkText">
            <CiGlobe className="text-base font-semibold" />
            English
          </div>
          <div className="flex items-center mr-5 dark:text-darkText">
            <div
              onClick={() => setDarkMode((prev) => !prev)}
              className={`p-1 border rounded-full uppercase text-xs cursor-pointer flex items-center justify-center${
                darkMode ? "bg-slate-300" : "bg-darkBg"
              }`}
            >
              {darkMode ? <MdDarkMode /> : <MdLightMode />}
            </div>
          </div>
          <div className="flex items-center mr-5 dark:text-darkText">
            <MdFullscreen />
          </div>
          <div className="relative flex items-center mr-5 dark:text-darkText">
            <IoMdNotificationsOutline />
            <div className="flex items-center justify-center ml-1 font-bold w-3 h-3 text-[8px] text-white bg-red-400 rounded-lg absolute -top-1 -right-2">
              1
            </div>
          </div>
          <div className="relative flex items-center mr-5 dark:text-darkText">
            <IoChatboxOutline />
            <div className="flex items-center justify-center ml-1 font-bold w-3 h-3 text-[8px] text-white bg-red-400 rounded-lg absolute -top-1 -right-2">
              2
            </div>
          </div>
          <div className="flex items-center mr-5 dark:text-darkText">
            <IoListOutline />
          </div>
          <div className="flex items-center mr-5 dark:text-darkText">
            <img
              src="https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-855.jpg?t=st=1729687073~exp=1729690673~hmac=bf7010bc75b5cde6b739cd0ed53ac416bee447e36e5b7fe17de767a272d1ed55&w=740"
              alt=""
              className="w-10 h-10 rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
