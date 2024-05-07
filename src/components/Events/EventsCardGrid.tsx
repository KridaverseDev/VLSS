import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import image1 from "./image1.png";
import { Event } from "./EventsType";
import { Link } from "react-router-dom";

const cardStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  height: 300, // Adjust height as needed
  backgroundSize: "cover",
  borderRadius: 10,
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  overflow: "hidden",
  width: 270,
};

const contentStyle: React.CSSProperties = {
  padding: 16,
  borderRadius: "0 0 10px 10px",
};

const titleStyle: React.CSSProperties = {
  color: "#fff",
  marginBottom: 8,
};

const subtitleStyle: React.CSSProperties = {
  color: "#fff",
};

// interface Event {
//   eventId: string;
//   // date: string;
//   // location: string;
//   // eventName: string;
//   bgImageUrl: string;
//   imageUrl: string;
//   eventTimings: string;
//   price: string;
//   eventName: string;
//   location: string;
//   date: string;
//   images: string[];
// }

interface EventCardGridProps {
  events: Event[];
}

const EventCardGrid: React.FC<EventCardGridProps> = ({ events }) => {
  console.log(events);
  return (
    <Grid container spacing={2}>
      {events.map((event, index) => (
        <Grid key={index} item xs={12} sm={3} sx={{ display: "flex" }}>
          <Link to={`/events/${index}`} style={{ textDecoration: "none" }}>
            <Card
              style={{
                ...cardStyle,
                backgroundImage: `url(${event.images[0]})`,
                animation: `cardEntrance ${index * 0.3}s ease-out, in forwards`,
              }}
            >
              <CardContent style={contentStyle}>
                <Typography variant="h5" style={titleStyle}>
                  {event.eventName}
                </Typography>
                <Typography variant="subtitle1" style={subtitleStyle}>
                  {/* {event.location} | {event.date} | {event.eventTimings} | $
                  {event.price} */}
                  {event.location} | {event.date}
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
      ))}
      {}
    </Grid>
  );
};

export default EventCardGrid;
