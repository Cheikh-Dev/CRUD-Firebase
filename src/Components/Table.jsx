// Table.jsx
import React, { useState, useEffect } from "react";
import { db } from "../Config/firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { MdAddCircle } from "react-icons/md";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import Modal from "./Modal";
import { columns } from "../Utils/Utils";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";

export default function Table() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "Utilisateurs"));
      const users = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setData(users);
    };
    fetchData();
  }, []);

  const openModal = () => {
    setSelectedUser(null);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAddUser = async (newUser) => {
    const existingUser = data.find((user) => user.email === newUser.email);

    if (existingUser) {
      alert("Cet utilisateur existe déjà !");
      return;
    }

    if (selectedUser !== null) {
      const userDoc = doc(db, "Utilisateurs", newUser.id);
      await updateDoc(userDoc, {
        name: newUser.name,
        age: newUser.age,
        adresse: newUser.adresse,
        ville: newUser.ville,
        email: newUser.email,
      });
      const updatedData = data.map((user) =>
        user.id === newUser.id ? newUser : user
      );
      setData(updatedData);
    } else {
      const docRef = await addDoc(collection(db, "Utilisateurs"), {
        name: newUser.name,
        age: newUser.age,
        adresse: newUser.adresse,
        ville: newUser.ville,
        email: newUser.email,
      });
      setData([...data, { ...newUser, id: docRef.id }]);
    }
    closeModal();
  };

  const handleEditUser = (index) => {
    setSelectedUser(index);
    setIsModalOpen(true);
  };

  const handleDeleteUser = async (index) => {
    const userToDelete = data[index];
    await deleteDoc(doc(db, "Utilisateurs", userToDelete.id));
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
