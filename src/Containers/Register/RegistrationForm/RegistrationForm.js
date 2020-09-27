import React, { useState, useEffect } from "react";
import {
  Grid,
  makeStyles,
  TextField,
  Checkbox,
  FormControlLabel,
} from "@material-ui/core";
import Aux from "../../Hoc/Auxilary";
const useStyle = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "40%",
      marginTop: "6%",
      marginRight: "3%",
      marginLeft: "3%",
      ["@media(max-width:600px)"]: {
        width: "80%",
        marginTop: "10%",
      },
    },
    "& .MuiFormControlLabel-root": {
      color: "black",
      fontWeight: "300",
      fontSize: "0.7rem",
      marginTop: "6%",
    },
  },
}));

const initialValues = {
  companyName: "",
  systemid: "",
  password: "",
  email: "",
  contactNumber: "",
  address: "",
  state: "Karnataka",
  city: "Bangalore",
  pin: "",
  date: "new Date()",
  checked: false,
};
const RegistrationForm = () => {
  const [values, setValues] = useState(initialValues);
  const [checked, setChecked] = React.useState(true);
  const classes = useStyle();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <form className={classes.root}>
      <Grid container>
        <Grid>
          <TextField
            name="companyName"
            label="Company name"
            variant="outlined"
            value={values.companyName}
            onChange={handleInputChange}
            type=""
          />

          <TextField
            name="email"
            label="E-mail"
            variant="outlined"
            value={values.email}
            onChange={handleInputChange}
            type="email"
          />
          <TextField
            name="systemid"
            label="Password"
            variant="outlined"
            value={values.systemid}
            onChange={handleInputChange}
            type="password"
          />
          <TextField
            name="contactNumber"
            label="Contact Number"
            variant="outlined"
            value={values.contactNumber}
            onChange={handleInputChange}
            type="number"
          />
          <TextField
            name="address"
            label="Address line 1"
            variant="outlined"
            value={values.address}
            onChange={handleInputChange}
            type="text"
          />
          <TextField
            name="state"
            label="State"
            variant="outlined"
            value={values.state}
            onChange={handleInputChange}
            select
          />
          <TextField
            name="city"
            label="city"
            variant="outlined"
            value={values.city}
            onChange={handleInputChange}
            select
          />
          <TextField
            name="pin"
            label="Pincode"
            variant="outlined"
            value={values.pin}
            onChange={handleInputChange}
            type="text"
          />
        </Grid>
      </Grid>
      <FormControlLabel
        control={
          <Checkbox
            checked={values.checked}
            onChange={handleChange}
            name="checked"
            color="primary"
          />
        }
        label="I agree to the Agreement and Terms."
      />
    </form>
  );
};

export default RegistrationForm;
