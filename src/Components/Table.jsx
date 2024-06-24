import React, { useState } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { columns } from "../Utils/Utils";
import { MdAddCircle } from "react-icons/md";
import Modal from "./Modal";

export default function Table() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState([]);

  const table = useMaterialReactTable({
    columns,
    data,
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAddUser = (newUser) => {
    console.log("Adding user:", newUser); // Debugging line
    setData([...data, newUser]);
    closeModal();
  };

  return (
    <>
      <div className="Ajouter w-full text-center py-5">
        <button
          onClick={openModal}
          className="px-3 md:px-4 py-1 md:py-2 bg-teal-400 border border-teal-400 text-white rounded-lg hover:bg-teal-400"
        >
          <span className="flex justify-center items-center">
            <MdAddCircle className="me-2" />
            <p>New User</p>
          </span>
        </button>
      </div>
      <div className="w-full p-5">
        <MaterialReactTable table={table} />
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          onAddUser={handleAddUser}
        />
      </div>
    </>
  );
}
