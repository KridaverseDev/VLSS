import React from "react";
import { useParams } from "react-router-dom";
import { Event } from "./EventsType";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
// import eventsData from "./EventData";
import eventsData from "./shivakumar_event_data.json";
import image1 from "./image1.png";

// interface Event {
//   eventId: string;
//   date: string;
//   location: string;
//   eventName: string;
//   bgImageUrl: string;
//   imageUrl: string;
//   eventTimings: string;
//   price: string;
// }

const EventDetailsPage: React.FC = () => {
  const { eventId } = useParams<{ eventId: any }>();

  // const event: Event | undefined = eventsData.events.find(
  //   (event) => event.eventId === eventId
  // );
  const event: Event | undefined = eventsData?.events.find(
    (event, index) => index.toString() === eventId
  );

  if (!event) {
    return <Typography variant="h6">Event not found.</Typography>;
  }

  const cardStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
    borderRadius: 5,
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    width: "100%",
    height: "100%",
    minWidth: "250px",
    minHeight: "200px",
  };

  return (
    <Box
      sx={{
        backgroundImage: "linear-gradient(to bottom, #FFFFFF 20%, #FF9A93)",
        padding: "30px",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={8}>
          <Card
            sx={{ ...cardStyle, backgroundImage: `url(${event?.images[0]})` }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ margin: "20px", padding: "15px" }}>
            <CardContent sx={{}}>
              <Typography
                sx={{
                  fontSize: "20px",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "600",
                }}
              >
                {event.eventName}
              </Typography>
              <Typography
                sx={{
                  fontSize: "17px",
                  color: "#808080",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                {event.date}
              </Typography>
              <Typography
                sx={{
                  fontSize: "17px",
                  color: "#808080",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                {/* {event.eventTimings} */}
              </Typography>
              <Typography
                sx={{
                  fontSize: "17px",
                  color: "#808080",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                {event.location}
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ margin: "20px", padding: "15px" }}>
            <CardContent sx={{}}>
              <Typography
                sx={{
                  fontSize: "20px",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "600",
                }}
              >
                Price
              </Typography>
              <Typography
                sx={{
                  fontSize: "17px",
                  color: "#808080",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                {/* Rs. {event.price} Onwards */}
              </Typography>
              <CardActions
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "0 30px",
                  marginTop: "20px",
                }}
              >
                <Button variant="contained" disabled>
                  CTA
                </Button>
                <Button variant="contained" sx={{ backgroundColor: "#BD2424" }}>
                  CTA
                </Button>
              </CardActions>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EventDetailsPage;
