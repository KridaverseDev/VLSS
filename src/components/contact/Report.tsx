import React from "react";
import {
  Typography,
  Paper,
  Container,
  Grid,
  Card,
  CardContent,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import reportData from "./ReportData";

const cardSx = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: 300,
  backgroundSize: "cover",
  borderRadius: 2,
  boxShadow: 3,
  overflow: "hidden",
  width: 270,
  "&:hover": {
    boxShadow: 6,
  },
};

const contentSx = {
  p: 2,
  borderRadius: "0 0 10px 10px",
  backgroundImage:
    "linear-gradient(rgba(217, 217, 217, 0.57), rgba(217, 217, 217, 0.57))",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "100%",
};

const titleSx = {
  mt: 2,
  fontSize: "24px",
};

const descriptionSx = {
  my: "auto",
  textAlign: "left",
  fontSize: "16px",
};

const ReportCardGrid = () => {
  const { breakpoints } = useTheme();
  const matchMobileView = useMediaQuery(breakpoints.down("md"));

  return (
    <Container sx={{ display: "flex", justifyContent: "space-between" }}>
      <Grid container spacing={2}>
        {!matchMobileView && (
          <Grid item xs={12} sm={1}>
            <Paper
              elevation={24}
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: "2px 2px 30px 30px",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  writingMode: "vertical-rl",
                  textOrientation: "mixed",
                  letterSpacing: "5px",
                  fontWeight: "bold",
                  transform: "rotate(180deg)",
                  paddingRight: "20px",
                  paddingBottom: "300px",
                  paddingTop: "100px",
                }}
              >
                Report
              </Typography>
            </Paper>
          </Grid>
        )}
        <Grid item xs={12} sm={matchMobileView ? 12 : 11}>
          <Paper
            elevation={12}
            sx={{
              backgroundSize: "cover",
              backgroundPosition: "center",
              padding: "20px",
              marginLeft: "-15px",
              borderRadius: "0px 30px 30px 30px",
              width: "100%",
            }}
          >
            <Card>
              <Typography
                variant="h4"
                gutterBottom
                sx={{ textAlign: "center" }}
              >
                Report Information
              </Typography>
              <Grid container spacing={2} style={{ margin: "10px" }}>
                {reportData.map((report, index) => (
                  <Grid
                    key={index}
                    item
                    xs={12}
                    sm={3}
                    sx={{ display: "flex", margin: "20px" }}
                  >
                    <a
                      href={report.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none" }}
                    >
                      <Card
                        sx={{
                          ...cardSx,
                          animation: `cardEntrance ${
                            index * 0.3
                          }s ease-out forwards`,
                        }}
                      >
                        <CardContent sx={contentSx}>
                          <Typography
                            variant="h5"
                            sx={titleSx}
                            color="text.secondary"
                          >
                            {report.reportName}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={descriptionSx}
                            color="text.secondary"
                          >
                            {report.reportDescription}
                          </Typography>
                        </CardContent>
                      </Card>
                    </a>
                  </Grid>
                ))}
              </Grid>
            </Card>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ReportCardGrid;
