import React, { useEffect, useState } from "react";
import axios from "axios";
import { Leader } from "./Leader";
import {
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const Leaders: React.FC = () => {
  const { breakpoints } = useTheme();
  const matchMobileView = useMediaQuery(breakpoints.down("md"));
  const [isHovered, setIsHovered] = useState(false);
  const [leaders, setLeaders] = useState<Leader[]>([]);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    axios
      .get("https://vlssrbackend-483fdd4e7516.herokuapp.com/leaders")
      .then((response) => {
        const enabledLeaders = response.data.leaders.filter(
          (leader: Leader) => leader.enable
        );
        setLeaders(enabledLeaders);

        const imageLoadPromises: Promise<void>[] = enabledLeaders.map(
          (leader: Leader) => {
            return new Promise<void>((resolve) => {
              const img = new Image();
              img.onload = () => {
                resolve();
              };
              img.src = leader.link;
            });
          }
        );

        Promise.all(imageLoadPromises).then(() => {
          setImageLoaded(true);
        });
      })
      .catch((error) => {
        console.error("Error fetching leaders:", error);
      });
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: matchMobileView ? "center" : "space-between",
        margin: matchMobileView ? "0px 20px" : "0 100px",
      }}
    >
      <div
        className="flex flex-wrap gap-8 text-center"
        style={{
          justifyContent: matchMobileView ? "center" : "flex-start",
          width: "100%",
        }}
      >
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
              animation: "fadeInScale 2s ease-in-out",
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
                objectFit: "contain",
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
