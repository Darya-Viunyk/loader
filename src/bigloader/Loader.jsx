import React from "react-dom";
import { Box, BoxWave, Wave } from "./Loaderr.styled";
export const Loader = () => {
  const waveElements = Array.from({ length: 20 }, (_, index) => (
    <Wave key={index} />
  ));

  return (
    <Box>
      <BoxWave>{waveElements}</BoxWave>
    </Box>
  );
};
