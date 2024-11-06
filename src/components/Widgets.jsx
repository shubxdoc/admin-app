import { useEffect, useState } from "react";
import { BiError } from "react-icons/bi";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { HiOutlineUser } from "react-icons/hi";
import {
  MdAccountBalanceWallet,
  MdOutlineMonetizationOn,
  MdOutlineShoppingCartCheckout,
} from "react-icons/md";
import { db } from "../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

const Widgets = ({ type }) => {
  const [amount, setAmount] = useState(null);
  const [diff, setDiff] = useState(null);
  let data;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See All Users",
        query: "users",
        icon: (
          <span className="p-2 text-lg text-red-400 bg-red-300/30 rounded-xl w-max">
            <HiOutlineUser />
          </span>
        ),
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View All Orders",
        query: "orders",
        icon: (
          <span className="p-2 text-lg text-orange-400 rounded-xl w-max bg-orange-300/30">
            <MdOutlineShoppingCartCheckout />
          </span>
        ),
      };
      break;
    case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View Net Earnings",
        query: "earnings",
        icon: (
          <span className="p-2 text-lg text-green-600 rounded-xl w-max bg-green-300/30">
            <MdOutlineMonetizationOn />
          </span>
        ),
      };
      break;
    case "product":
      data = {
        title: "PRODUCTS",
        query: "products",
        isMoney: true,
        link: "See Details",
        icon: (
          <span className="p-2 text-lg text-blue-400 rounded-xl w-max bg-blue-300/30">
            <MdAccountBalanceWallet />
          </span>
        ),
      };
      break;
    default:
      data = {
        title: "user not found",
        isMoney: false,
        link: "none",
        icon: (
          <span className="p-2 text-lg text-red-400 rounded-xl w-max bg-red-300/30">
            <BiError />
          </span>
        ),
      };
  }

  useEffect(() => {
    const fetchData = async () => {
      const today = new Date();
      const lastMonth = new Date(new Date().setMonth(today.getMonth() - 1));
      const prevMonth = new Date(new Date().setMonth(today.getMonth() - 2));

      const lastMonthQuery = query(
        collection(db, data.query),
        where("timeStamp", "<=", today),
        where("timeStamp", ">", lastMonth)
      );
      const prevMonthQuery = query(
        collection(db, data.query),
        where("timeStamp", "<=", lastMonth),
        where("timeStamp", ">", prevMonth)
      );

      const lastMonthData = await getDocs(lastMonthQuery);
      const prevMonthData = await getDocs(prevMonthQuery);

      setAmount(lastMonthData.docs.length);

      const prevMonthCount = prevMonthData.docs.length;
      const diffPercentage =
        prevMonthCount > 0
          ? ((lastMonthData.docs.length - prevMonthCount) / prevMonthCount) *
            100
          : 0;

      setDiff(diffPercentage);
    };
    fetchData();
  }, []);

  return (
    <div className="flex justify-between flex-1 h-32 p-2 rounded-md shadow-md dark:border dark:border-darkText">
      <div className="flex flex-col justify-between">
        <span className="font-semibold text-gray-400">{data.title}</span>
        <span className="text-3xl font-light">
          {data.isMoney && "$"} {amount}
        </span>
        <span className="text-xs border-b border-gray-400 cursor-pointer w-max">
          {data.link}
        </span>
      </div>
      <div className="flex flex-col items-end justify-between">
        <div
          className={`flex items-center gap-1 text-sm ${
            diff >= 0 ? "text-green-500" : "text-red-500"
          }`}
        >
          {diff >= 0 ? <FaChevronUp /> : <FaChevronDown />}
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widgets;
