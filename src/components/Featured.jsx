import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdMoreVert,
} from "react-icons/md";

const Featured = () => {
  return (
    <div className="flex-[2] p-2 rounded shadow-md dark:border dark:border-darkText">
      <div className="flex items-center justify-between text-gray-500">
        <h1 className="font-medium">Total revenue</h1>
        <MdMoreVert fontSize="medium" />
      </div>
      <div className="flex flex-col items-center justify-center gap-3 p-5">
        <div className="w-24 h-24">
          <CircularProgressbar value={70} text="70%" strokeWidth={5} />
        </div>
        <p className="font-medium text-gray-500">Total sales made today</p>
        <p className="text-3xl">$420</p>
        <p className="text-sm font-light text-center text-gray-500">
          Previous transactions processing. Last payments may not be included .
        </p>
        <div className="flex items-center justify-between w-full">
          <div className="text-center">
            <div className="text-sm text-gray-400">Target</div>
            <div className="flex items-center m-2 text-base text-red-400">
              <MdKeyboardArrowDown fontSize={"small"} />
              <div className="resultAmount">$ 12.4k</div>
            </div>
          </div>
          <div className="text-center">
            <div className="text-sm text-gray-400">Last Week</div>
            <div className="flex items-center m-2 text-base text-green-500">
              <MdKeyboardArrowUp fontSize={"small"} />
              <div className="resultAmount">$ 12.4k</div>
            </div>
          </div>
          <div className="text-center">
            <div className="text-sm text-gray-400">Last Month</div>
            <div className="flex items-center m-2 text-base text-red-400">
              <MdKeyboardArrowDown fontSize={"small"} />
              <div className="resultAmount">$ 12.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
