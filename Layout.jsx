import { Outlet } from "react-router-dom";
import { Navbar, Sidebar } from "./src/components";

const Layout = () => {
  return (
    <>
      <div className="flex w-full">
        <Sidebar />
        <div className="flex-[6]">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
