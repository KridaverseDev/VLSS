import React, { useState, useEffect } from "react";
import EventCardGrid from "./EventsCardGrid";
import { CircularProgress, useMediaQuery, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import axios from "axios";
import { Event } from "./EventsType";

const Events: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Add loading state
  const [value, setValue] = useState("1");
  const { breakpoints } = useTheme();
  const matchMobileView = useMediaQuery(breakpoints.down("md"));

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true); // Set loading to true before starting fetch
        const response = await axios.get(
          "https://vlssrbackend-483fdd4e7516.herokuapp.com/events"
        );
        setEvents(response.data.events);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.log(error);
        setLoading(false); // Ensure loading is set to false in case of an error
      }
    };

    fetchEvents();
  }, []);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const latestEvents = events.filter((event) => event.status === "latest");
  const upcomingEvents = events.filter((event) => event.status === "upcoming");

  console.log(latestEvents);
  console.log(upcomingEvents);

  return (
    <TabContext value={value}>
      <Box
        sx={{
          margin: matchMobileView ? "10px" : "0 50px",
        }}
      >
        <TabList
          onChange={handleChange}
          aria-label="lab API tabs example"
          TabIndicatorProps={{
            sx: { backgroundColor: "#BD2424" },
          }}
          sx={{
            "& .MuiTab-root": {
              color: "text.secondary",
              "&.Mui-selected": {
                color: "#BD2424",
              },
            },
          }}
        >
          <Tab
            label={
              matchMobileView ? (
                <>
                  Latest
                  <br />
                  Events
                </>
              ) : (
                "Latest Events"
              )
            }
            value="1"
            style={{ fontSize: matchMobileView ? "14px" : "18px" }}
          />
          <Tab
            label={
              matchMobileView ? (
                <>
                  Upcoming
                  <br />
                  Events
                </>
              ) : (
                "Upcoming Events"
              )
            }
            style={{ fontSize: matchMobileView ? "14px" : "18px" }}
            value="2"
          />
        </TabList>
        <TabPanel value="1">
          {loading ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <CircularProgress
                size={80}
                thickness={2}
                sx={{ animationDuration: "3s" }}
              />{" "}
            </Box>
          ) : (
            <EventCardGrid events={latestEvents} />
          )}
        </TabPanel>
        <TabPanel value="2">
          {loading ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <CircularProgress
                size={80}
                thickness={2}
                sx={{ animationDuration: "3s" }}
              />{" "}
            </Box>
          ) : (
            <EventCardGrid events={upcomingEvents} />
          )}
        </TabPanel>
      </Box>
    </TabContext>
  );
};

export default Events;
