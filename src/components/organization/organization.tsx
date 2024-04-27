import React from "react";
import {
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import image1 from "./image1.png";
import image2 from "./image2.png";

const Organization: React.FC = () => {
  const { breakpoints } = useTheme();
  const matchMobileView = useMediaQuery(breakpoints.down("md"));

  return (
    <Box>
      
    
    </Box>
  );
};

export default Organization;
