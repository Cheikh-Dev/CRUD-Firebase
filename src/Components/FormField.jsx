import React from "react";
import { HiOutlineMail } from "react-icons/hi";

export default function FormField() {
  return (
    <>
      <div className="flex items-center border-2 mb-8 py-1 px-3 rounded-2xl">
        <HiOutlineMail className="h-5 w-5 text-gray-400" />
        <input
          id="prenom"
          className="pl-2 w-full outline-none border-none"
          type="prenom"
          name="prenom"
          placeholder="Prenom"
        />
      </div>
      <div className="flex items-center border-2 mb-8 py-1 px-3 rounded-2xl">
        <HiOutlineMail className="h-5 w-5 text-gray-400" />
        <input
          id="email"
          className="pl-2 w-full outline-none border-none"
          type="email"
          name="email"
          placeholder="Email Address"
        />
      </div>
      <div className="flex items-center border-2 mb-8 py-1 px-3 rounded-2xl">
        <HiOutlineMail className="h-5 w-5 text-gray-400" />
        <input
          id="email"
          className="pl-2 w-full outline-none border-none"
          type="email"
          name="email"
          placeholder="Email Address"
        />
      </div>
      <div className="flex items-center border-2 mb-8 py-1 px-3 rounded-2xl">
        <HiOutlineMail className="h-5 w-5 text-gray-400" />
        <input
          id="email"
          className="pl-2 w-full outline-none border-none"
          type="email"
          name="email"
          placeholder="Email Address"
        />
      </div>
      <div className="flex items-center border-2 mb-8 py-1 px-3 rounded-2xl">
        <HiOutlineMail className="h-5 w-5 text-gray-400" />
        <input
          id="email"
          className="pl-2 w-full outline-none border-none"
          type="email"
          name="email"
          placeholder="Email Address"
        />
      </div>
      <div className="flex items-center border-2 mb-8 py-1 px-3 rounded-2xl">
        <HiOutlineMail className="h-5 w-5 text-gray-400" />
        <input
          id="email"
          className="pl-2 w-full outline-none border-none"
          type="email"
          name="email"
          placeholder="Email Address"
        />
      </div>
    </>
  );
}
