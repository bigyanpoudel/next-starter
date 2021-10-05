import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import SelectField from "./SelectField";
const FormikField = ({
  name,
  emptyText,
  trimText,
  data,
  option,
  labelText,
  onChange,
  value,
  nextdata,
}) => {
  {
    console.log(name, "name");
  }
  return (
    <Field
      name={name}
      // render=
    >
      {({ field, form: { touched, errors } }) => {
        field = onChange ? { ...field, onChange: onChange } : field;

        return (
          <SelectField
            labelText={labelText}
            emptyText={emptyText}
            trimText={trimText}
            {...field}
            name={name}
            value={value ? value : field.value}
            data={data}
            nextdata={nextdata}
            touched={touched}
            errors={errors}
            field={field}
            option={option}
          />
        );
      }}
    </Field>
  );
};

export default FormikField;
