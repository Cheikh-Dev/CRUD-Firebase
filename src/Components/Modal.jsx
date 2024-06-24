import React, { useState, useEffect } from "react";
import { FaEye, FaEdit, FaTrash, FaTimes } from "react-icons/fa";
import FormField from "./FormField";

export default function Modal({ isOpen, onClose, onAddUser }) {
  const [formValues, setFormValues] = useState({
    prenom: "",
    nom: "",
    age: "",
    adresse: "",
    ville: "",
    email: "",
  });

  useEffect(() => {
    if (isOpen) {
      setFormValues({
        prenom: "",
        nom: "",
        age: "",
        adresse: "",
        ville: "",
        email: "",
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    console.log("Form values:", formValues);
    const newUser = {
      name: {
        prenom: formValues.prenom,
        nom: formValues.nom,
      },
      age: [`${formValues.age} ans`],
      adresse: formValues.adresse,
      ville: formValues.ville,
      email: formValues.email,
      action: (
        <div className="flex items-center">
          <button className="pe-9">
            <FaEye className="text-B" />
          </button>
          <button className="pe-9">
            <FaEdit className="text-O" />
          </button>
          <button className="pe-9">
            <FaTrash className="text-R" />
          </button>
        </div>
      ),
    };

    onAddUser(newUser);

    // Réinitialisez les valeurs du formulaire
    setFormValues({
      prenom: "",
      nom: "",
      age: "",
      adresse: "",
      ville: "",
      email: "",
    });

    // Fermez le modal
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster bg-black bg-opacity-70">
      <div className="border border-teal-500 shadow-lg modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <div className="modal-content py-4 text-left px-6">
          <div className="flex justify-between items-center pb-3">
            <p className="text-2xl font-bold">Ajout d'utilisateur</p>
            <div className="modal-close cursor-pointer z-50" onClick={onClose}>
              <FaTimes className="text-black" />
            </div>
          </div>
          <div className="my-5">
            <FormField formValues={formValues} handleChange={handleChange} />
          </div>
          <div className="flex justify-end pt-2">
            <button
              className="focus:outline-none px-4 bg-teal-500 p-1 ml-3 rounded-lg text-white hover:bg-teal-400"
              onClick={handleSubmit}
            >
              Ajouter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
