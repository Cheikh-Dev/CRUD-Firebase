import React from "react";
import FormInput from "../Utils/FormInput";
import { fields } from "../Utils/Utils";

export default function FormField({ formValues, handleChange }) {
  return (
    <>
      {fields.map((field) => (
        <FormInput
          key={field.id}
          {...field}
          value={formValues[field.name]}
          onChange={handleChange}
        />
      ))}
    </>
  );
}
