import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import InputField from './InputField';
const FormikField = ({name,placeholder,labelText,...args}) => {
    return (
      <div style={{width:"100%"}}>
        <Field
        // placeholder="PostTittle"
        // name="postTitle"
        // className="titleinput"
        // render=
      >
        {({ field ,form: { touched, errors } ,meta}) => {
          // <input {...field} type="text" placeholder="firstName" />
          // console.log("field",field);
          console.log("value",field.value[`${name}`])
         return <InputField
         placeholder={placeholder}
         labelText={labelText}
         {...field} 
         {...args}
         value={field.value[`${name}`]}

          name={name}
          touched={touched}
          errors={errors}
          field={field}
           />
        }}
</Field>
      </div>
    )
}

export default FormikField
