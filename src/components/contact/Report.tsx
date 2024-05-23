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

const Report: React.FC = () => {
  const { breakpoints } = useTheme();
  const matchMobileView = useMediaQuery(breakpoints.down("md"));

  return (
    <Container sx={{ diaply: "flex", justifyContent: "space-between" }}>
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
              <CardContent>
                <Typography variant="body1" color="text.secondary">
                  <a
                    href="https://firebasestorage.googleapis.com/v0/b/talentoapp-98736.appspot.com/o/resumes_sRube577odZeLwdKNto0r96QRNu1_1716357244588%20(1).pdf?alt=media&token=ae6168f6-983e-44e3-bb16-1beef51bd726"
                    style={{ color: "inherit", textDecoration: "none" }}
                    onMouseOver={(e) => (e.currentTarget.style.color = "red")}
                    onMouseOut={(e) =>
                      (e.currentTarget.style.color = "inherit")
                    }
                  >
                    Click here to view the Report
                  </a>
                </Typography>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Report;
