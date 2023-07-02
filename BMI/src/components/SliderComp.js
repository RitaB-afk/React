import React, { useState, useMemo } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function SliderComp() {
  const [calculationDetails, setCalculationDetails] = useState({
    height: 150,
    weight: 50,
  });
  const bmi = useMemo(() => {
    const calculatedHeight = calculationDetails.height / 100;
    return (
      calculationDetails.weight /
      (calculatedHeight * calculatedHeight)
    ).toFixed(2);
  }, [calculationDetails.weight, calculationDetails.height]);
  const PrettoSlider = styled(Slider)({
    color: "#52af77",
    height: 8,
    "& .MuiSlider-track": {
      border: "none",
    },
    "& .MuiSlider-thumb": {
      height: 24,
      width: 24,
      backgroundColor: "#fff",
      border: "2px solid currentColor",
      "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
        boxShadow: "inherit",
      },
      "&:before": {
        display: "none",
      },
    },
    "& .MuiSlider-valueLabel": {
      lineHeight: 1.2,
      fontSize: 12,
      background: "unset",
      padding: 0,
      width: 32,
      height: 32,
      borderRadius: "50% 50% 50% 0",
      backgroundColor: "#52af77",
      transformOrigin: "bottom left",
      transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
      "&:before": { display: "none" },
      "&.MuiSlider-valueLabelOpen": {
        transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
      },
      "& > *": {
        transform: "rotate(45deg)",
      },
    },
  });
  const handleHeightChange = (e, newValue) => {
    setCalculationDetails({ ...calculationDetails, height: newValue });
  };

  const handleWeightChange = (e, newValue) => {
    setCalculationDetails({ ...calculationDetails, weight: newValue });
  };

  return (
    <Box
      sx={{
        width: 300,
        height: 300,
        backgroundColor: "primary.dark",
      }}
    >
      <Card sx={{ maxWidth: 245 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            BMI Calculator
          </Typography>
          <Typography id="input-slider" gutterBottom>
            Weight : {calculationDetails.weight} Kg
          </Typography>
          <PrettoSlider
            valueLabelDisplay="auto"
            aria-label="pretto slider"
            value={calculationDetails.weight}
            min={40}
            max={200}
            onChange={handleWeightChange}
          />
          <Typography id="input-slider" gutterBottom>
            Height : {calculationDetails.height} cm
          </Typography>
          <PrettoSlider
            valueLabelDisplay="auto"
            aria-label="pretto slider"
            value={calculationDetails.height}
            onChange={handleHeightChange}
            min={150}
            max={200}
          />
          <Typography gutterBottom variant="p" component="div">
            Your BMI is: {bmi}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
