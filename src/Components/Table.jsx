import React, { useState } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { columns } from "../Utils/Utils";
import { MdAddCircle } from "react-icons/md";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import Modal from "./Modal";

export default function Table() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const openModal = () => {
    setSelectedUser(null); 
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAddUser = (newUser) => {
    if (selectedUser !== null) {
      // Update user
      const updatedData = data.map((user, index) =>
        index === selectedUser ? newUser : user
      );
      setData(updatedData);
    } else {
      // Add new user
      setData([...data, newUser]);
    }
    closeModal();
  };

  const handleEditUser = (index) => {
    setSelectedUser(index);
    setIsModalOpen(true);
  };

  const handleDeleteUser = (index) => {
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData);
  };


  data.forEach((user, index) => {
    user.action = (
      <div className="flex items-center">
        <button className="pe-9">
          <FaEye className="text-B" />
        </button>
        <button className="pe-9" onClick={() => handleEditUser(index)}>
          <FaEdit className="text-O" />
        </button>
        <button className="pe-9" onClick={() => handleDeleteUser(index)}>
          <FaTrash className="text-R" />
        </button>
      </div>
    );
  });

  const table = useMaterialReactTable({
    columns,
    data,
  });

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
          selectedUser={selectedUser !== null ? data[selectedUser] : null}
        />
      </div>
    </>
  );
}
