import React, { useState, useEffect } from "react";
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
  CircularProgress,
  Alert,
} from "@mui/material";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface SliderImage {
  imageUrl: string;
}

const EventDetailsPage: React.FC = () => {
  const { eventId } = useParams<{ eventId: string }>();
  // console.log(eventId);

  const [event, setEvent] = useState<Event | null>(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/events/${eventId}`
        );
        setEvent(response.data);
        // console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchEvent();
  }, [eventId]);

  // console.log(event);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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
          <Card sx={{}}>
            <Slider {...sliderSettings}>
              {event?.images.map((image, index) => (
                <div key={index}>
                  <Card
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                      backgroundSize: "100% 100%",
                      backgroundRepeat: "no-repeat",
                      borderRadius: 5,
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                      overflow: "hidden",
                      objectFit: "cover",
                      width: "100%",
                      height: "500px",
                      minWidth: "250px",
                      minHeight: "200px",
                    }}
                  >
                    <img
                      src={image}
                      alt={`Event ${index}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Card>
                </div>
              ))}
            </Slider>
          </Card>
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
                {event?.eventName}
              </Typography>
              <Typography
                sx={{
                  fontSize: "17px",
                  color: "#808080",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                {event?.date}
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
                {event?.location}
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
                Description
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
                  padding: "8px 8px",
                  marginTop: "20px",
                }}
              >
                {event?.description}
              </CardActions>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      style={{
        position: "absolute",
        right: "0px",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 999,
        cursor: "pointer",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        fill="currentColor"
        className="bi bi-arrow-right-circle"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zm2.646 7.646a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L9.293 7.5 6.646 9.146a.5.5 0 1 0 .708.708l3-3z"
        />
      </svg>
    </div>
  );
};

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      style={{
        position: "absolute",
        left: "0px",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 999,
        cursor: "pointer",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        fill="currentColor"
        className="bi bi-arrow-left-circle"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zM5.354 7.646a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L6.707 7.5l2.353 2.354a.5.5 0 1 1-.708.708l-3-3z"
        />
      </svg>
    </div>
  );
};

export default EventDetailsPage;
