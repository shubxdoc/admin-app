import { BiEdit } from "react-icons/bi";
import { Chart, Table } from "../components";

const Single = () => {
  return (
    <>
      <div className="dark:text-darkText flex gap-5 p-5">
        <div className="relative flex-1 p-5 rounded shadow-md">
          <div className="absolute top-0 right-0 cursor-pointer">
            <BiEdit size="1.5em" />
          </div>
          <div className="mb-5 text-lg font-medium text-gray-300">
            Information
          </div>
          <div className="flex gap-5">
            <img
              src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
              alt=""
              className="w-[100px] h-[100px] rounded-full object-cover"
            />
            <div>
              <h1 className="mb-2 font-medium text-gray-500">Jane Doe</h1>
              <div className="mb-2 text-sm">
                <span className="mr-2 font-bold text-gray-500">Email:</span>
                <span>janedoe@gmail.com</span>
              </div>
              <div className="mb-2 text-sm">
                <span className="mr-2 font-bold text-gray-500">Phone:</span>
                <span>+1 2345 67 89</span>
              </div>
              <div className="mb-2 text-sm">
                <span className="mr-2 font-bold text-gray-500">Address:</span>
                <span>Elton St. 234 Garden Yd. NewYork</span>
              </div>
              <div className="mb-2 text-sm">
                <span className="mr-2 font-bold text-gray-500">Country:</span>
                <span>USA</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-[2]">
          <Chart aspect={3 / 1} title="User Spending (Last 6 Months)" />
        </div>
      </div>
      <div className="p-5 mx-5 my-2 shadow-md">
        <h1 className="mb-5 text-lg font-medium text-gray-300">
          Last transactions
        </h1>
        <Table />
      </div>
    </>
  );
};

export default Single;
