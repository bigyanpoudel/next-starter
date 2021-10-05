import React from "react";
import {
  TextField,
  withStyles,
  makeStyles,
  FormControl,
  InputBase,
  InputLabel,
  InputAdornment,
  FormHelperText,
} from "@material-ui/core";
// const BootstrapInput = withStyles((theme) => ({
//   root: {
//     "label + &": {
//       marginTop: theme.spacing(3),
//     },
//   },
//   input: {
//     borderRadius: 4,
//     position: "relative",
//     backgroundColor: "white !important",
//     border: "1px solid #ced4da",
//     fontSize: 17,
//     width: "100%",
//     marginTop: "0",
//     color: "var(--primary-color-3)",
//     padding: "10px 12px",
//     transition: theme.transitions.create(["border-color", "box-shadow"]),
//     // Use the system font instead of the default Roboto font.
//     fontFamily: "var(--body-font)",
//     "&:focus": {
//       // boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
//       borderColor: "var(--color-dark)",
//       fontFamily: "var(--body-font)",
//     },
//   },
// }))(InputBase);

const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {},
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: "white !important",
    border: "1px solid #ced4da",
    fontSize: 17,
    width: "100%",
    marginTop: "0",
    color: "var(--primary-color-3)",
    padding: "10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    // fontFamily: [
    //   "-apple-system",
    //   "BlinkMacSystemFont",
    //   '"Segoe UI"',
    //   "Roboto",
    //   '"Helvetica Neue"',
    //   "Arial",
    //   "sans-serif",
    //   '"Apple Color Emoji"',
    //   '"Segoe UI Emoji"',
    //   '"Segoe UI Symbol"',
    // ].join(","),
    fontFamily: "var(--body-font) !important",
    "&:focus": {
      // boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: "var(--color-darker)",
      fontFamily: "var(--body-font) !important",
    },
  },
}))(InputBase);

const useStyle = makeStyles((them) => ({
  inputLabel: {
    // color: 'black !important',
    fontFamily: "var(--body-font) !important",
    fontSize: "1.2rem !important",
    fontWeight: "600 !important",
    letterSpacing: "1px !important",
    "&.Mui-focused": {
      color: "var(--color-darker)",
    },
  },
  // outlineInputStyle: {
  //   border: "1px solid #ced4da !important",
  //   fontFamily:"var(--body-font) !important",

  // },
  input: {
    color: "var(--primary-color-3) !important",
    "& .MuiOutlinedInput-root": {
      // - The Input-root, inside the TextField-root
      "& fieldset": {
        // - The <fieldset> inside the Input-root
        borderColor: "#ced4da ",
        color: "var(--primary-color-3) !important", // - Set the Input border
      },
      "&:hover fieldset": {
        borderColor: "var(--color-darker)",
        "&.inputLabel": {
          color: "red !important ",
        },
      },
      "&.Mui-focused fieldset": {
        // - Set the Input border when parent is focused
        borderColor: "var(--color-darker)",
      },
    },
  },
  bootstrapinput: {
    borderColor: "red !important",
  },
  inputError: {
    marginTop: "0.3rem",
    fontSize: "0.7rem",
    color: "rgba(255, 0, 0, 0.856)",
  },
}));

const InputField = ({
  labelText,
  value,
  field,
  touched,
  errors,
  InputProps,
  endAdornment,
  textField,
  ...args
}) => {
  const classes = useStyle();
  // console.log(field.name,"erorr",touched[field.name] &&
  // errors[field.name] )
  console.log("inpuLabel", value);
  return (
    <FormControl fullWidth size="small" style={{ width: "100%" }}>
      {labelText && (
        <>
          {" "}
          <InputLabel
            shrink
            htmlFor="bootstrap-input"
            className={classes.inputLabel}
          >
            {labelText}
          </InputLabel>
          <br />
        </>
      )}
      {/* {/* {inputLabel ? (
      !textField ?  */}
      <BootstrapInput
        id="bootstrap-input"
        {...args}
        value={value}
        style={{ fontFamily: "var(--body-font) !important" }}
        autoComplete="off"
        inputProps={{
          form: {
            autocomplete: "off",
          },
          // className: Boolean(error) && classes.bootstrapinput,
        }}
      />
      {/* : */}
      {/* <TextField

        id="bootstrap-input"
        variant="outlined"
      
        placeholder="Enter your location"
        size="small"
       label={inputLabel}
       {...args}
        fullWidth
        className={classes.input}
        InputLabelProps={{
          className: classes.inputLabel 
        }}
        InputProps={{
          classes: {
            notchedOutline: classes.outlineInputStyle,
          },
          endAdornment: endAdornment
        }}
      />
      ) : ( 
        <BootstrapInput
          id="demo-customized-select"
          {...args}
          autoComplete="off"
          style={{ fontFamily: "var(--body-font) !important" }}
          inputProps={{
            form: {
              autocomplete: "off",
            },

            className: `${touched[args.name] &&
              errors[args.name] && classes.bootstrapinput} input`,
          }}
        />
      )} */}
      {touched[args.name] && errors[args.name] && (
        <FormHelperText style={{ color: "red" }}>
          {errors[args.name]}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default InputField;
