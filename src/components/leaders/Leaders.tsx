import React, { useEffect } from "react";
import { useState } from "react";
import leadersData from "./leaders.json";
import { Leader } from "./Leader";
import { Blurhash } from "react-blurhash";

import {
  Typography,
  Paper,
  Grid,
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import president from "./photos/president.jpeg";
import vicepresident from "./photos/vicepresident.jpeg";
import chief from "./photos/Amaresh.jpeg";
import joint from "./photos/harini.jpeg";
import orgsec from "./photos/indudhara.jpeg";
import treasurer from "./photos/nagappa.jpeg";
import nagabhishan from "./photos/Nagabhushan.jpeg";
import mallikarjuna from "./photos/Mallikarjuna Biradar.jpeg";
import niranjan from "./photos/Niranjan.jpeg";
import manjunatha from "./photos/manjunatha.jpeg";
import kiran from "./photos/kiran.jpeg";
import basappa from "./photos/basappa.jpeg";
import nataraj from "./photos/nataraj.jpeg";
import onkarappa from "./photos/onkarappa.jpeg";

const Leaders: React.FC = () => {
  const { breakpoints } = useTheme();
  const matchMobileView = useMediaQuery(breakpoints.down("md"));
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  // console.log(leaders);

  const leaders: Leader[] = leadersData.leaders;

  useEffect(() => {
    const imageLoadPromises: Promise<void>[] = leaders.map((leader) => {
      return new Promise<void>((resolve) => {
        const img = new Image();
        img.onload = () => {
          resolve();
        };
        img.src = leader.link;
      });
    });

    Promise.all(imageLoadPromises).then(() => {
      setImageLoaded(true);
    });
  }, [leaders]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        margin: matchMobileView ? "0px" : "0 100px",
      }}
    >
      <div className="flex flex-wrap gap-8 text-center">
        {leaders.map((leader, index) => (
          <Card
            key={index}
            sx={{
              width: matchMobileView ? "100%" : "calc(25% - 20px)",
              maxWidth: "200px",
              border: "2px solid black",
              borderRadius: "15px",
              boxShadow: isHovered ? "0 4px 8px rgba(0, 0, 0, 0.2)" : "none",
              transition:
                "transform 0.5s ease-in-out, box-shadow 0.5s ease-in-out",
              cursor: "pointer",
              overflow: "hidden",
              animation: "fadeInFromBottom 0.5s ease-out",
              "&:hover": {
                transform: isHovered ? "scale(1.05)" : "scale(1.1)",
              },
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Typography
              sx={{
                textAlign: "center",
                padding: "15px",
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              {leader.leader_name}
            </Typography>
            <div style={{ display: imageLoaded ? "none" : "inline" }}>
              <Blurhash
                hash={leader.blur_image}
                width="180px"
                height="200px"
                resolutionX={32}
                resolutionY={32}
                punch={0}
              />
            </div>

            <CardMedia
              component="img"
              height="194"
              image={leader.link}
              alt={leader.leader_name}
              sx={{
                maxWidth: "180px",
                maxHeight: "200px",
                width: "100%",
                margin: "auto",
                display: !imageLoaded ? "none" : "inline",
                opacity: imageLoaded ? 1 : 0,
                transition: "opacity 0.5s ease-in-out",
              }}
            />
            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  textAlign: "center",
                  fontSize: "16px",
                }}
              >
                {leader.name}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </Box>
  );
};

export default Leaders;
