import React, { useState, useEffect } from "react";
import EventCardGrid from "./EventsCardGrid";
import { Box, Typography, CircularProgress, Alert } from "@mui/material";
import axios from "axios";
import { Event } from "./EventsType";

const Events: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          "https://vlssrbackend-483fdd4e7516.herokuapp.com/events"
        );
        setEvents(response.data.events);
        console.log(response.data.events);
      } catch (error) {
        console.log(error);
      }
    };

    fetchEvents();
  }, []);

  console.log("eventsss", events);

  return (
    <Box sx={{ margin: "30px 50px 0px 60px" }}>
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
