import React from "react";
import FormInput from "../Utils/FormInput";
import { fields } from "../Utils/Utils"

export default function FormField() {
  return (
    <>
      {fields.map((field) => (
        <FormInput key={field.id} {...field} />
      ))}
    </>
  );
}
