import React from "react";
import {
  withStyles,
  FormControl,
  InputBase,
  InputLabel,
  makeStyles,
  FormHelperText,
} from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.common.white,
    border: "1px solid #ced4da",
    fontSize: 16,
    width: "100%",
    // color: "black",
    padding: "10px 12px",
    fontWeight: "500",
    fontFamily: "var(--body-font)",
    color: "var(--primary-color-3)",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:focus": {
      // boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: "var(--color-darker)",
      borderRadius: 4,
    },
  },
}))(InputBase);
const useStyle = makeStyles((them) => ({
  inputLabel: {
    // color: 'lightgray',
    fontFamily: "var(--body-font) !important",
    fontSize: "1.2rem !important",
    fontWeight: "600 !important",
    letterSpacing: "1px !important",
    "&.Mui-focused": {
      color: "var(--color-darker)",
    },
  },
  bootstrapinput: {
    borderColor: "red !important",
  },
  select: {
    fontFamily: "var(--body-font) !important",
    "&:hover": {
      color: "var(--color-darker) !important",
    },
  },
}));
const SelectField = ({
  data,
  // options,
  labelText,
  option,
  trimText,
  nextdata,
  // error,
  emptyText,
  field,
  touched,
  errors,
  ...args
}) => {
  const classes = useStyle();
  // console.log(args.value,"data",option)
  return (
    <FormControl fullWidth>
      {labelText && (
        <InputLabel
          shrink
          htmlFor="demo-customized-select"
          className={classes.inputLabel}
        >
          {labelText}
        </InputLabel>
      )}
      <Select
        fullWidth
        labelId="demo-customized-select-label"
        id="demo-customized-select"
        {...args}
        inputProps={{
          className:
            touched[args.name] && errors[args.name] && classes.bootstrapinput,
        }}
        input={<BootstrapInput />}
        defaultValue=""
        displayEmpty
      >
        <MenuItem value="" disabled>
          <em>{emptyText}</em>
        </MenuItem>
        {data &&
          data.map((item) => (
            <MenuItem value={item._id} key={item._id} className="select">
              {item.subBrand ? item.subBrand : item.brand}
            </MenuItem>
          ))}
        <MenuItem value="" disabled>
          <em>{trimText}</em>
        </MenuItem>
        {nextdata &&
          nextdata.map((item) => (
            <MenuItem value={item._id} key={item._id} className="select">
              {item.name ? item.name : item.subBrand}
            </MenuItem>
          ))}
        {option &&
          option.map((item) => (
            <MenuItem value={item} key={item} className="select">
              {item}
            </MenuItem>
          ))}
      </Select>
      {touched[args.name] && errors[args.name] && (
        <FormHelperText style={{ color: "red" }}>
          {errors[args.name]}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default SelectField;
