import React from "react";
import { Typography, Grid, Box, Card, CardContent, useMediaQuery, useTheme } from "@mui/material";
import { QuestionData } from "./VeerashaivaQuesData";

const Veershaiva: React.FC = () => {
  const { breakpoints } = useTheme();
  const matchMobileView = useMediaQuery(breakpoints.down("md"));

  return (
    <Box sx={{ marginTop: "10px" }}>
      <Grid container spacing={2} sx={{ padding: matchMobileView ? "0px" : "0 20px" }}>
        <Grid item xs={12} md={5} sx={{ backgroundColor: "black", padding: "20px", borderBottomLeftRadius: "20px", borderBottomRightRadius: "20px" }}>
          <Box
            sx={{
              alignItems: "center",
              minHeight: "500px",
              padding: "20px", 
              borderRadius: "20px 20px 20px 20px", 
              backgroundColor: "black",
            }}
          >
            <Typography
              gutterBottom
              style={{
                color: "white",
                textAlign: "left",
                fontSize: "28px",
                fontWeight: "500",
                margin: "50px 0px 40px 50px",
              }}
            >
              Introduction
            </Typography>
            <Typography
              variant="body1"
              style={{
                color: "#EEEFF0",
                marginLeft: "50px",
                marginRight: "30px",
              }}
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

            </Typography>
          </Box>
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
                }}
              >
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {question.Question}
                  </Typography>
                  <Typography variant="body1">{question.Answer}</Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Grid>
      </Grid>
      <Box sx={{
        maxHeight: "600px",
      }}>

      </Box>
    </Box>
  );
};

export default Veershaiva;
