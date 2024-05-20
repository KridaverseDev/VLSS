import React, { useState, useEffect } from "react";

import {
  Typography,
  // Paper,
  // Container,
  // Grid,
  Box,
  Card,
  CardContent,
  CardMedia,
  useMediaQuery,
  useTheme,
  IconButton,
  Grid,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import faqData from "./faqData";
import image1 from "./about2.png";
import image2 from "./kudala.jpg";

const About: React.FC = () => {
  const { breakpoints } = useTheme();
  const matchMobileView = useMediaQuery(breakpoints.down("md"));
  const [showAnswers, setShowAnswers] = useState(
    new Array(faqData.length).fill(false)
  );
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);

    return () => {
      setIsOpen(false);
    };
  }, []);

  return (
    <Box>
      <Card
        sx={{
          display: "flex",
          margin: matchMobileView ? "0px" : "40px 200px 50px 100px",
          backgroundColor: "#F5F5F5",
          borderRadius: "30px",
          padding: "15px",
          height: "100%",
          transform: isOpen ? "translateX(0)" : "translateX(-100%)", // Move from left to right if open
          transition: "transform 0.5s ease-in-out", // Add transition for transform
        }}
      >
        <CardContent
          sx={{
            padding: matchMobileView ? "15px" : "50px",
            maxHeight: "2000px",
            backgroundColor: "#f7f7f7",
            border: "2px solid #ddd", // Add border
            borderRadius: "15px", // Add border radius
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Add box shadow
          }}
        >
          <Typography
            variant="h5"
            sx={{
              textAlign: matchMobileView ? "center" : "left",
              marginBottom: "20px",
              color: "#de2a1b",
              textTransform: "uppercase",
            }}
          >
            Introduction
          </Typography>
          {matchMobileView && (
            <CardMedia
              component="img"
              sx={{
                maxWidth: "600px",
                margin: "auto",
                width: "100%",
                maxHeight: "300px",
                height: "100%",
                borderRadius: "15px", // Add border radius
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Add box shadow
              }}
              image={image1}
              alt="Live from space album cover"
            />
          )}
          <Typography
            variant="subtitle1"
            color="text.secondary"
            sx={{
              textAlign: "justify",
              lineHeight: "1.6", // Adjust line height for better readability
              color: "#555", // Change text color
            }}
          >
            Veera Shaiva Lingayatism, initiated in the 12th century by Basavanna
            in Karnataka, India, stands as a reformist Shaivite tradition
            advocating for egalitarianism and accessibility in worship,
            irrespective of caste or gender. At its heart, it champions personal
            devotion to Lord Shiva through the Ishtalinga, fostering a unique,
            intimate bond with the divine. The philosophy encourages ethical
            living, community service ("Dasoha"), and equality, rejecting
            orthodox Hindu rituals for a more personal spiritual experience. Its
            foundational texts, the Vachanas, encapsulate the teachings of
            Basavanna and his contemporaries, emphasizing a life of moral
            integrity and social responsibility. This movement has not only
            enriched Karnataka's socio-religious landscape but also continues to
            influence and inspire a global community with its progressive and
            inclusive ideals.
          </Typography>
        </CardContent>
        {!matchMobileView && (
          <CardMedia
            component="img"
            sx={{
              width: "600px",
              margin: "auto",
              height: "100%",
              maxHeight: "400px",
              borderRadius: "15px", // Add border radius
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Add box shadow
            }}
            image={image1}
            alt="Live from space album cover"
          />
        )}
      </Card>
      <Card
        sx={{
          display: "flex",
          margin: matchMobileView ? "0px" : "40px 200px 50px 100px",
          backgroundColor: "#F5F5F5",
          borderRadius: "30px",
          padding: "15px",
          height: "100%",
          marginTop: matchMobileView ? "30px" : "40px",
          transform: isOpen ? "translateX(0)" : "translateX(100%)", // Move from left to right if open
          transition: "transform 0.5s ease-in-out",
        }}
      >
        {!matchMobileView && (
          <CardMedia
            component="img"
            sx={{ width: "500px", margin: "auto", minHeight: "250px" }}
            image={image2}
            alt="Live from space album cover"
          />
        )}
        <CardContent
          sx={{
            padding: matchMobileView ? "15px" : "50px",
            textAlign: "justify",
          }}
        >
          <Typography component="div" variant="h5" style={{ color: "#de2a1b" }}>
            Location and homeland
          </Typography>
          {matchMobileView && (
            <CardMedia
              component="img"
              sx={{
                maxWidth: "600px",
                margin: "auto",
                width: "100%",
                maxHeight: "250px",
                height: "100%",
              }}
              image={image2}
              alt="Live from space album cover"
            />
          )}
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Kudalasangama is a popular pilgrimage destination for Lingayats and
            Veerashaivas. It is located in the Bagalkot district of Karnataka
            about 15 km from the Almatti Dam. It was originally known as Kappadi
            sangama, where Basaveshwara’s teacher Ishanaguru lived, and was
            later renamed Kudalasangama. Sangama is the confluence of the
            Krishna and Malaprabha rivers. The main deity of Kudala Sangama is
            Sangameshwara. It also houses Aikya Mantapa or Basavanna’s samadhi.
            The Kudala Sangama development board oversees this temple
          </Typography>
        </CardContent>
      </Card>

      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          margin: matchMobileView ? "0px" : "40px 200px 50px 100px",
          backgroundColor: "#F5F5F5",
          borderRadius: "30px",
          padding: "15px",
          height: "100%",
          marginTop: matchMobileView ? "30px" : "40px",
          transition: "transform 0.3s ease-in-out", // Add transition for transform
          "&:hover": {
            transform: "scale(1.05)", // Apply scale transformation on hover
          },
        }}
      >
        <CardContent
          sx={{
            padding: matchMobileView ? "15px" : "50px",
            textAlign: "justify",
          }}
        >
          <Typography
            component="div"
            variant="h5"
            sx={{
              marginBottom: "20px",
              fontFamily: "Arial, sans-serif",
              fontWeight: "bold",
              fontSize: "20px",
              color: "#de2a1b",
            }}
          >
            Objectives
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            component="div"
            sx={{ fontFamily: "Arial, sans-serif", fontSize: "16px" }}
          >
            <ul style={{ paddingLeft: "20px", listStyleType: "none" }}>
              {" "}
              {/* Adjust list style */}
              <li style={{ marginBottom: "20px" }}>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bold", color: "#555" }}
                >
                  The homeland of Veera Shaiva Lingayatism is the region of
                  Karnataka, located in the southwestern part of India.
                </Typography>
              </li>
              <li style={{ marginBottom: "20px" }}>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bold", color: "#555" }}
                >
                  This tradition emerged in the 12th century under the guidance
                  and inspiration of Basavanna, a philosopher, statesman, and
                  social reformer.
                </Typography>
              </li>
              <li style={{ marginBottom: "20px" }}>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bold", color: "#555" }}
                >
                  Karnataka's rich cultural and historical landscape provided a
                  fertile ground for the development and spread of Lingayatism.
                </Typography>
              </li>
              <li style={{ marginBottom: "20px" }}>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bold", color: "#555" }}
                >
                  Lingayatism advocates social equality, personal devotion, and
                  community service, resonating deeply among the people of the
                  region.
                </Typography>
              </li>
              <li>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bold", color: "#555" }}
                >
                  Basavanna's teachings emphasize moral integrity, ethical
                  living, and social responsibility, shaping the ethos of the
                  Lingayat community.
                </Typography>
              </li>
            </ul>
          </Typography>
        </CardContent>
      </Card>

      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          margin: matchMobileView ? "0px" : "40px 200px 50px 100px",
          backgroundColor: "#F5F5F5",
          borderRadius: "30px",
          padding: "15px",
          height: "100%",
          marginTop: matchMobileView ? "30px" : "40px",
          transition: "transform 0.3s ease-in-out", // Add transition for transform
          "&:hover": {
            transform: "scale(1.05)", // Apply scale transformation on hover
          },
        }}
      >
        <CardContent
          sx={{
            padding: matchMobileView ? "15px" : "50px",
          }}
        >
          <Typography
            component="div"
            variant="h5"
            sx={{
              marginBottom: "20px",
              fontFamily: "Arial, sans-serif",
              fontWeight: "bold",
              fontSize: "20px",
              color: "#333",
            }}
          >
            Frequently Asked Questions
          </Typography>

          {faqData.map((faq, index) => (
            <Grid
              container
              key={index}
              alignItems="center"
              justifyContent="space-between"
              spacing={2} // Add spacing between items
              sx={{
                marginBottom: "20px",
                borderBottom: "1px solid #ccc",
                paddingBottom: "10px",
              }}
            >
              <Grid item xs={matchMobileView ? 9 : 10}>
                {" "}
                {/* Adjust grid item width for mobile view */}
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                  sx={{
                    fontFamily: "Arial, sans-serif",
                    fontWeight: "bold",
                    fontSize: "14px",
                    color: "#333",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    const updatedAnswers = [...showAnswers];
                    updatedAnswers[index] = !updatedAnswers[index];
                    setShowAnswers(updatedAnswers);
                  }}
                >
                  <strong>Q: {faq.question}</strong>
                </Typography>
              </Grid>
              <Grid item>
                <IconButton
                  onClick={() => {
                    const updatedAnswers = [...showAnswers];
                    updatedAnswers[index] = !updatedAnswers[index];
                    setShowAnswers(updatedAnswers);
                  }}
                  sx={{ transition: "transform 0.3s ease-in-out" }}
                >
                  {showAnswers[index] ? <RemoveIcon /> : <AddIcon />}
                </IconButton>
              </Grid>
              <Grid item xs={12}>
                {" "}
                {/* Adjust grid item width for mobile view */}
                {showAnswers[index] && (
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    component="div"
                    sx={{
                      fontFamily: "Arial, sans-serif",
                      fontSize: "14px",
                      color: "#666",
                    }}
                  >
                    A: {faq.answer}
                  </Typography>
                )}
              </Grid>
            </Grid>
          ))}
        </CardContent>
      </Card>
    </Box>
  );
};

export default About;
