import React from "react";
import {
  Grid,
  FormControlLabel,
  Checkbox,
  Divider,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Field } from "formik";
const useStyles = makeStyles((theme) => ({
  root: {
    height: "6px",
    transform: "scale(.85)",
    "&$checked": {
      color: "var(--color-darker)",
    },
  },
  checked: {
    color: "var(--color-darker)",
  },
}));
const FormikCheckbox = ({ name, title }) => {
  const classes = useStyles();
  return (
    <FormControlLabel

      control={
        <Field
          type="checkbox"
          style={{
            color: "var(--secondary-color) !important",
          }}
          name={name}
            value={title}
      
        >
          {({ field, form: { touched, errors },meta }) => {
            
            
            const value = field.value;
            
          console.log(errors,"checkbox",meta);
            return (
              <Checkbox
             
                name={title}
                {...field}
                // {...field}
                // onChange={()=>field.onChange()}
                value={title}
                size="small"
                classes={{
                  root: classes.root,
                  checked: classes.checked,
                }}
              />
            );
          }}
        </Field>

        // onChange={(e) => changeHandler(e, ele.store_name)
      }
      label={
        <p
          style={{
            fontSize: ".9rem",
            fontFamily: "var(--body-font)",
            fontWeight: "600",
          }}
        >
          {title}
        </p>
      }
    />
  );
};

export default FormikCheckbox;
