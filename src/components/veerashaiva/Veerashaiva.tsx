import React, { useEffect, useState } from "react";
import {
  Typography,
  Grid,
  Box,
  Card,
  CardContent,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { QuestionData } from "./VeerashaivaQuesData";

const Veershaiva: React.FC = () => {
  const { breakpoints } = useTheme();
  const matchMobileView = useMediaQuery(breakpoints.down("md"));
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);

    return () => {
      setIsOpen(false);
    };
  }, []);

  return (
    <div className="px-5">
      <Grid
        container
        spacing={2}
        sx={{ padding: matchMobileView ? "10px" : "0 20px" }}
      >
        <Grid
          item
          xs={12}
          md={5}
          sx={{
            backgroundColor: "#F5F5F5",
            padding: "20px",
            // borderBottomLeftRadius: "20px",
            // borderBottomRightRadius: "20px",
            borderRadius: "20px",
            transform: isOpen ? "translateX(0)" : "translateX(-100%)",
            transition: "transform 0.5s ease-in-out",
          }}
        >
          <div className="">
            <h2
              className="text-center text-2xl font-bold my-6"
              // style={{
              //   textAlign: "left",
              //   fontSize: "28px",
              //   fontWeight: "500",
              //   margin: "50px 0px 40px 50px",
              // }}
            >
              Introduction
            </h2>
            <p
              className="px-5 text-lg"
              // style={{
              //   marginLeft: "50px",
              //   marginRight: "30px",
              // }}
            >
              Lingayatism, also known as Lingayat religion, is a distinct and
              influential religious and philosophical movement that originated
              in the 12th century in Karnataka, India, under the leadership and
              inspiration of Basavanna, a progressive thinker, philosopher, and
              statesman. This movement arose as a form of protest against the
              rigid hierarchical structures of Hindu society at the time,
              particularly challenging the caste system and the supremacy of
              Brahminical rituals.
              <br />
              <br />
              At the core of Lingayatism is the worship of Lord Shiva in the
              form of the Linga, specifically the Ishtalinga, which is a small,
              personal Shiva lingam worn on the body. This practice symbolizes a
              direct and intimate relationship between the individual and the
              divine, bypassing the need for priestly intermediaries and
              elaborate rituals. Lingayatism espouses a spiritual path that
              values personal experience and devotion over ritualistic
              practices, emphasizing moral living, community service (Dasoha),
              and the dignity of labor (Kayaka).
              <br />
            </p>
          </div>
        </Grid>
        <Grid item xs={12} md={7}>
          <Box
            sx={{
              maxHeight: "600px",
              overflowY: "auto",
            }}
          >
            {QuestionData.map((question) => (
              <Card
                key={question.id}
                sx={{
                  maxWidth: "800px",
                  margin: "20px",
                  borderRadius: "35px",
                  backgroundColor: "#F5F5F5",
                  padding: "0px 20px",
                  transform: isOpen ? "translateX(0)" : "translateX(100%)", // Move from left to right if open
                  transition: "transform 0.5s ease-in-out",
                }}
              >
                <CardContent>
                  <h2 className="text-xl font-bold mb-2">
                    {question.Question}
                  </h2>
                  <Typography variant="body1">{question.Answer}</Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Grid>
      </Grid>
      <Box
        sx={{
          maxHeight: "600px",
        }}
      ></Box>
    </div>
  );
};

export default Veershaiva;
