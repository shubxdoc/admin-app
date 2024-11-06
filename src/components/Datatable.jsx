import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Link } from "react-router-dom";
import {
  collection,
  getDocs,
  doc,
  deleteDoc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../firebase";

const Datatable = () => {
  const [data, setData] = useState([]);
  const [selectedRows, setSelectedRows] = useState(null);
  const [loading, setLoading] = useState(true);
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(8);

  useEffect(() => {
    // const fetchData = async () => {
    //   let list = [];
    //   try {
    //     const querySnapshot = await getDocs(collection(db, "users"));
    //     querySnapshot.forEach((doc) => {
    //       list.push({ id: doc.id, ...doc.data() }); //since doc doesn't have id we had to  include id
    //     });
    //     console.log(list);

    //     setData(list);
    //     setLoading(false);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };

    // fetchData();

    //listen (realtime)
    const unsub = onSnapshot(
      collection(db, "users"),
      (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);
        setLoading(false);
      },
      (error) => {
        console.error(error);
      }
    );

    return () => {
      unsub();
    };
  }, []);

  const onSelectionChange = (e) => {
    setSelectedRows(e.value);
  };

  const avatarBodyTemplate = (rowData) => {
    return (
      <div className="flex items-center">
        <img
          src={rowData.img}
          alt={rowData.name}
          className="w-8 h-8 mr-2 rounded-full"
        />
        <span>{rowData.name}</span>
      </div>
    );
  };
  const statusBodyTemplate = (rowData) => {
    return (
      <span
        className={`px-2 py-1 rounded-full text-xs ${
          rowData.status === "Active"
            ? "text-green-600 bg-green-200"
            : rowData.status === "Passive"
            ? "text-red-600 bg-red-200"
            : "text-yellow-600 bg-yellow-200"
        }`}
      >
        {rowData.status}
      </span>
    );
  };

  const deleteRow = async (id) => {
    try {
      await deleteDoc(doc(db, "users", id));
      setData((prevData) => prevData.filter((row) => row.id !== id));
    } catch (error) {}
  };

  const actionColumn = (rowData) => {
    return (
      <div>
        <Link to={"/users/id"}>
          <span className="p-1 mr-1 border border-gray-300 rounded hover:bg-indigo-100">
            View
          </span>
        </Link>
        <span
          onClick={() => deleteRow(rowData.id)}
          className="p-1 ml-1 border border-gray-300 rounded hover:bg-red-100"
        >
          Delete
        </span>
      </div>
    );
  };

  return (
    <div className="datatable-crud-demo dark:bg-darkBg">
      <Link to={"/users/new"}>
        <button className="px-2 py-1 mx-1 my-2 text-xs font-bold border hover:bg-slate-200 dark:hover:text-black">
          Add New User
        </button>
      </Link>
      <div className="card dark:bg-darkBg">
        <DataTable
          value={data}
          paginator
          rows={rows}
          totalRecords={data.length}
          first={first}
          onPage={(e) => {
            setFirst(e.first);
            setRows(e.rows);
          }}
          loading={loading}
          selection={selectedRows}
          onSelectionChange={onSelectionChange}
          dataKey="id"
          responsiveLayout="scroll"
          selectionMode="multiple"
          sortMode="multiple"
          className="text-xs dark:bg-darkBg"
        >
          {/* Enable row selection via checkboxes automatically */}
          <Column
            selectionMode="multiple"
            headerStyle={{ width: "3em" }}
            className="dark:bg-darkBg"
          ></Column>

          {/* Define columns with sorting */}
          <Column
            body={avatarBodyTemplate}
            header="Name"
            className="text-xs dark:bg-darkBg dark:text-darkText"
          ></Column>
          <Column
            field="email"
            header="Email"
            sortable
            className="text-xs dark:bg-darkBg dark:text-darkText"
          ></Column>
          <Column
            field="address"
            header="Address"
            sortable
            className="text-xs dark:bg-darkBg dark:text-darkText"
          ></Column>
          <Column
            body={statusBodyTemplate}
            header="Status"
            className="text-xs dark:bg-darkBg dark:text-darkText"
          ></Column>
          <Column
            body={actionColumn}
            header="Action"
            className="text-xs dark:bg-darkBg dark:text-darkText"
          ></Column>
        </DataTable>
      </div>
    </div>
  );
};

export default Datatable;
