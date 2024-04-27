import React from "react";
import EventCardGrid from "./EventsCardGrid";
import eventsData from "./EventData";
import { Box, Typography } from "@mui/material";

const Events: React.FC = () => {
  return (
    <Box
      sx={{
        margin: "30px 50px 0px 60px",
      }}
    >
      <Typography
        sx={{
          fontSize: "28px",
          fontWeight: "bold",
          marginBottom: "10px",
          marginLeft: "10px",
        }}
      >
        Latest
      </Typography>
      <EventCardGrid events={eventsData} />
    </Box>
  );
};

export default Events;
