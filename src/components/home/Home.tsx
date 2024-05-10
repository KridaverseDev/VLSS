import React, { useRef, useEffect } from "react";
import {
  Typography,
  Paper,
  Box,
  Grid,
  useMediaQuery,
  useTheme,
  Fade,
} from "@mui/material";
import basavanna from "./basavanna.png";
import pancha from "./image.png";
import { motion } from "framer-motion";
import panc from "./IMG20240417121655.jpg";
import ImageSlider from "./ImageSlider";
import akka from "./akka.jpg";

const demoImages = [basavanna, akka, pancha, panc];

const Home: React.FC = () => {
  const { breakpoints } = useTheme();
  const matchMobileView = useMediaQuery(breakpoints.down("md"));
  const scrollRef = useRef<HTMLDivElement>(null); // Specify the element type

  useEffect(() => {
    const animate = () => {
      if (scrollRef.current) {
        const currentScroll = scrollRef.current.scrollLeft;
        const maxScroll =
          scrollRef.current.scrollWidth - scrollRef.current.clientWidth;

        if (currentScroll >= maxScroll) {
          scrollRef.current.scrollLeft = 0;
        } else {
          scrollRef.current.scrollLeft += 1;
        }
      }

      requestID = requestAnimationFrame(animate);
    };

    let requestID = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(requestID);
  }, []);

  return (
    <div>
      {matchMobileView && (
        <img
          src={basavanna}
          alt="basavanna"
          style={{
            maxWidth: "250px",
            maxHeight: "300px",
            display: "flex",
            margin: "auto",
          }}
        />
      )}
      <Grid container spacing={2}>
        <Grid item xs={12} sm={matchMobileView ? 12 : 8}>
          <Paper
            elevation={24}
            sx={{
              backgroundImage:
                "linear-gradient(to bottom right, #FFFFFF 10%, #FF9A93)",
              width: "100%",
              maxWidth: "1000px",
              minHeight: "270px",
              borderRadius: matchMobileView ? "20px" : "0 30px 30px 0px",
              margin: "auto 0",
              marginTop: matchMobileView ? "0px" : "100px",
              animation: "slideRight 0.5s forwards",
            }}
          >
            <Box
              sx={{
                alignItems: "center",
                marginBottom: "10px",
                marginTop: "30px",
                marginLeft: matchMobileView ? "10px" : "70px",
              }}
            >
              <Typography
                variant="h1"
                gutterBottom
                style={{
                  fontSize: "48px",
                  fontWeight: "700",
                  fontFamily: "Ubuntu",
                  padding: matchMobileView
                    ? "15px 10px 5px 5px"
                    : "30px 0px 0px 0px",
                  textAlign: matchMobileView ? "center" : "left",
                }}
              >
                About Guru Basaveshwara
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`, // System font stack
                  fontWeight: "bold",
                  textAlign: "justify",
                  padding: matchMobileView ? "5px 10px" : "0px 30px 0px 0px",
                }}
              >
                Basava, a 12th-century Indian philosopher and poet, led the
                Lingayat social reform movement during the reign of King Bijjala
                II in Karnataka. Through his Vachana poetry, he advocated
                against social discrimination, superstitions, and rituals,
                promoting devotion to Shiva. Basava introduced the Ishtalinga
                necklace to symbolize devotion to Shiva for all, regardless of
                birth. He condemned violence and established inclusive
                institutions like the Anubhava Mantapa for spiritual discourse.
                While traditionally hailed as the founder of Lingayatism, modern
                scholarship suggests he revitalized an existing tradition.
              </Typography>
            </Box>
          </Paper>
        </Grid>
        {!matchMobileView && (
          <Fade in={true} timeout={500}>
            <Grid item xs={12} sm={4}>
              <img
                src={basavanna}
                alt="basavanna"
                style={{
                  maxWidth: "500px",
                  maxHeight: "700px",
                }}
              />
            </Grid>
          </Fade>
        )}
        <div
          ref={scrollRef}
          style={{
            width: "100%",
            overflow: "hidden",
            whiteSpace: "nowrap",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            height: "50px",
            backgroundColor: "#f0f0f0",
            boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Garamond, serif",
              fontWeight: "bold",
              fontSize: "20px",
              color: "#000000", 
              textShadow: "1px 1px 5px rgba(0,0,0,0.2)",
              display: "inline-block",
            }}
          >
            Welcome to the Veerashaiva Lingayatha Religion... This is non-profitable organization....  Welcome to the Veerashaiva Lingayatha Religion... This is non-profitable organization ... Welcome to the Veerashaiva Lingayatha Religion... This is non-profitable organization
          </Typography>
        </div>
      </Grid>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Paper
          elevation={matchMobileView ? 3 : 24}
          sx={{
            borderRadius: matchMobileView ? "30px" : "60px 30px 0px 0px",
            minHeight: "350px",
            width: "100%",
            margin: matchMobileView ? "25px 0px" : "0px",
          }}
        >
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              textAlign: "center",
              fontWeight: "500",
              fontSize: "28px",
              padding: "10px",
            }}
          >
            Greeting !
          </Typography>

          <Typography
            gutterBottom
            sx={{ textAlign: "center", fontWeight: "800", fontSize: "32px" }}
          >
            Welcome to the
            <span style={{ color: "#7D0B03" }}>
              {" "}
              Veerashaiva Lingayatha Religion{" "}
            </span>{" "}
            <br />
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: "justify",
              padding: matchMobileView ? "10px" : "20px 200px",
              fontSize: matchMobileView ? "16px" : "18px",
              lineHeight: "1.6",
              letterSpacing: "0.00938em",
              color: "rgba(0, 0, 0, 0.87)",
              fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
            }}
          >
            Lingayatism, a Shaivite Hindu denomination, evolved from
            Veerashaivism in the 12th century, emphasizing Ishtalinga worship
            and rejecting caste divisions. Advocating social equality, it
            promotes Vachanas as philosophical guides, highlighting Kayaka
            (work) and Dasoha (service) as acts of worship. Lingayatism diverges
            from mainstream Hinduism by eschewing vedic authority, rituals, and
            the concept of rebirth, focusing on direct divine experience. While
            considered a Hindu sect due to shared beliefs, it emphasizes Shiva
            worship and qualified monism akin to Ramanuja's philosophy.
            Predominant in Karnataka, Lingayats celebrate sect leaders'
            anniversaries and Hindu festivals, maintaining their own pilgrimage
            sites and religious practices within the broader Shaivite tradition.
          </Typography>
        </Paper>
      </motion.div>

      <Paper
        elevation={12}
        sx={{
          backgroundImage:
            "linear-gradient(to top right, #FFFFFF 50%, #FF9A93)",
          minHeight: "0px",
          margin: "auto 0",
          width: "100%",
          borderRadius: matchMobileView ? "15px" : "0",
        }}
      >
        {/* image slider */}
        <ImageSlider images={demoImages} />
      </Paper>
    </div>
  );
};

export default Home;
