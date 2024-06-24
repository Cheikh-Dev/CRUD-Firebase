import React from 'react'
import { FaTimes } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import FormField from './FormField';

export default function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster bg-black bg-opacity-70">
      <div className="border border-teal-500 shadow-lg modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <div className="modal-content py-4 text-left px-6">
          {/* Title */}
          <div className="flex justify-between items-center pb-3">
            <p className="text-2xl font-bold">Ajout d'utilisateur</p>
            <div className="modal-close cursor-pointer z-50" onClick={onClose}>
              <FaTimes className="text-black" />
            </div>
          </div>
          {/* Body */}
          <div className="my-5">
            <FormField/>
          </div>
          {/* Footer */}
          <div className="flex justify-end pt-2">
            <button className="focus:outline-none px-4 bg-teal-500 p-1 ml-3 rounded-lg text-white hover:bg-teal-400">
              Ajouter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
