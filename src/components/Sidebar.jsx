import { CgProfile } from "react-icons/cg";
import { FaRegCreditCard, FaShop } from "react-icons/fa6";
import { HiOutlineUser } from "react-icons/hi";
import { IoIosStats } from "react-icons/io";
import {
  MdDashboard,
  MdLogout,
  MdNotificationsNone,
  MdOutlineSettings,
  MdOutlineSettingsSystemDaydream,
  MdPsychology,
} from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex-1 border-r border-gray-200 dark:bg-darkBg dark:text-darkText">
      <div className="flex items-center justify-center h-12">
        <Link to={"/"}>
          <span className="text-xl font-bold text-indigo-500">SHUB</span>
        </Link>
      </div>
      <hr className="h-0 border-[0.5] border-gray-200" />
      <div className="pl-3">
        <ul>
          <p className="mt-4 mb-1 text-xs font-bold text-gray-400">MAIN</p>
          <Link to={"/"}>
            <li className="flex items-center gap-1 p-1 cursor-pointer hover:bg-indigo-100">
              <MdDashboard className="text-lg text-indigo-600" />
              <span className="ml-2 text-xs font-medium text-gray-400">
                Dashboard
              </span>
            </li>
          </Link>
          <p className="mt-4 mb-1 text-xs font-bold text-gray-400">LISTS</p>
          <Link to={"/users"}>
            <li className="flex items-center gap-1 p-1 cursor-pointer hover:bg-indigo-100">
              <HiOutlineUser className="text-lg text-indigo-600" />
              <span className="ml-2 text-xs font-medium text-gray-400">
                Users
              </span>
            </li>
          </Link>
          <Link to={"/products"}>
            <li className="flex items-center gap-1 p-1 cursor-pointer hover:bg-indigo-100">
              <FaShop className="text-lg text-indigo-600" />
              <span className="ml-2 text-xs font-medium text-gray-400">
                Products
              </span>
            </li>
          </Link>
          <li className="flex items-center gap-1 p-1 cursor-pointer hover:bg-indigo-100">
            <FaRegCreditCard className="text-lg text-indigo-600" />
            <span className="ml-2 text-xs font-medium text-gray-400">
              Orders
            </span>
          </li>
          <li className="flex items-center gap-1 p-1 cursor-pointer hover:bg-indigo-100">
            <TbTruckDelivery className="text-lg text-indigo-600" />
            <span className="ml-2 text-xs font-medium text-gray-400">
              Delivery
            </span>
          </li>
          <p className="mt-4 mb-1 text-xs font-bold text-gray-400">USEFUL</p>
          <li className="flex items-center gap-1 p-1 cursor-pointer hover:bg-indigo-100">
            <IoIosStats className="text-lg text-indigo-600" />
            <span className="ml-2 text-xs font-medium text-gray-400">
              Stats
            </span>
          </li>
          <li className="flex items-center gap-1 p-1 cursor-pointer hover:bg-indigo-100">
            <MdNotificationsNone className="text-lg text-indigo-600" />
            <span className="ml-2 text-xs font-medium text-gray-400">
              Notification
            </span>
          </li>
          <p className="mt-4 mb-1 text-xs font-bold text-gray-400">SERVICE</p>
          <li className="flex items-center gap-1 p-1 cursor-pointer hover:bg-indigo-100">
            <MdOutlineSettingsSystemDaydream className="text-lg text-indigo-600" />
            <span className="ml-2 text-xs font-medium text-gray-400">
              System Health
            </span>
          </li>
          <li className="flex items-center gap-1 p-1 cursor-pointer hover:bg-indigo-100">
            <MdPsychology className="text-lg text-indigo-600" />
            <span className="ml-2 text-xs font-medium text-gray-400">Logs</span>
          </li>
          <li className="flex items-center gap-1 p-1 cursor-pointer hover:bg-indigo-100">
            <MdOutlineSettings className="text-lg text-indigo-600" />
            <span className="ml-2 text-xs font-medium text-gray-400">
              Settings
            </span>
          </li>
          <p className="mt-4 mb-1 text-xs font-bold text-gray-400">USER</p>
          <li className="flex items-center gap-1 p-1 cursor-pointer hover:bg-indigo-100">
            <CgProfile className="text-lg text-indigo-600" />
            <span className="ml-2 text-xs font-medium text-gray-400">
              Profile
            </span>
          </li>
          <li className="flex items-center gap-1 p-1 cursor-pointer hover:bg-indigo-100">
            <MdLogout className="text-lg text-indigo-600" />
            <span className="ml-2 text-xs font-medium text-gray-400">
              Logout
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
