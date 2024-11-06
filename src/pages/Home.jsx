import { Chart, Featured, Table, Widgets } from "../components";

const Home = () => {
  return (
    <>
      <div className="flex gap-5 p-5 dark:text-darkText dark:bg-darkBg">
        <Widgets type="user" />
        <Widgets type="product" />
        <Widgets type="order" />
        <Widgets type="earning" />
      </div>
      <div className="flex gap-5 px-5 py-2 dark:bg-darkBg dark:text-darkText">
        <Featured />
        <Chart />
      </div>
      <div className="p-5 m-5 shadow-md dark:bg-darkBg dark:text-darkText">
        <div className="mb-4 font-medium text-gray-500 dark:bg-darkBg dark:text-darkText">
          Latest transaction
        </div>
        <Table />
      </div>
    </>
  );
};

export default Home;
