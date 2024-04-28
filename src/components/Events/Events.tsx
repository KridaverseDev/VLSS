import React from "react";
import EventCardGrid from "./EventsCardGrid";
// import eventsData from "./EventData";
import eventsData from "./shivakumar_event_data.json";
import { Box, Typography } from "@mui/material";

const Events: React.FC = () => {
  const events = eventsData.events;
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
      <EventCardGrid events={events} />
    </Box>
  );
};

export default Events;
