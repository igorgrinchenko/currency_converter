import { useState } from "react";
// MUI
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
// Styles
import "../style/style.scss";

const SelectCurrency = () => {
  const [currency, setCurrency] = useState("");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <div className="container">
      <FormControl
        variant="standard"
        sx={{
          marginTop: 5,
          borderBottom: "2px solid white",
          color: "white",
          width: "500px",
        }}
      >
        <InputLabel
          sx={{ color: "white", fontSize: "20px" }}
          id="demo-simple-select-standard-label"
        >
          Currency
        </InputLabel>
        <Select
          sx={{ color: "white", fontSize: "25px" }}
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={currency}
          onChange={handleChange}
          label="Currency"
        >
          <MenuItem value="UAH">UAH</MenuItem>
          <MenuItem value="USD">USD</MenuItem>
          <MenuItem value="EUR">EUR</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectCurrency;
