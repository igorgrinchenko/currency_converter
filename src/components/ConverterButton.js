import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
// Styles
import "../style/style.scss";

const ConverterButton = ({ convertCurrency }) => {
  return (
    <div className="container">
      <Stack sx={{ marginTop: "100px" }} direction="row" spacing={2}>
        <Button
          sx={{
            height: "100px",
            outline: "1px solid white",
            color: "white",
            fontSize: "30px",
          }}
          variant="outlined"
          onClick={convertCurrency}
        >
          Convert currencies
        </Button>
      </Stack>
    </div>
  );
};

export default ConverterButton;
