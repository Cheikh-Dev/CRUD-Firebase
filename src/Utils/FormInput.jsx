import React from "react";
import {
  HiOutlineMail,
  HiOutlineUser,
  HiOutlineLocationMarker,
  HiOutlineCalendar,
  HiOutlineOfficeBuilding,
} from "react-icons/hi";

const icons = {
  prenom: HiOutlineUser,
  nom: HiOutlineUser,
  age: HiOutlineCalendar,
  adresse: HiOutlineLocationMarker,
  ville: HiOutlineOfficeBuilding,
  email: HiOutlineMail,
};

const FormInput = ({ id, type, name, placeholder }) => {
  const Icon = icons[name] || HiOutlineMail;
  return (
    <div className="flex items-center border-2 mb-8 py-1 px-3 rounded-2xl">
      <Icon className="h-5 w-5 text-gray-400" />
      <input
        id={id}
        className="pl-2 w-full outline-none border-none"
        type={type}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default FormInput;