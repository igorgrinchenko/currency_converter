// MUI
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
// Styles
import "../style/style.scss";

const ariaLabel = { "aria-label": "description" };

const CurrencyInput = () => {
  return (
    <div className="container">
      <Box
        component="form"
        sx={{
          "& > :not(style)": {
            marginTop: 10,
            borderBottom: "2px solid white",
            color: "white",
            width: "500px",
          },
        }}
        noValidate
        autoComplete="off"
      >
        <Input
          sx={{ color: "white", fontSize: "20px" }}
          placeholder="Enter currency value"
          inputProps={ariaLabel}
        />
      </Box>
    </div>
  );
};

export default CurrencyInput;
