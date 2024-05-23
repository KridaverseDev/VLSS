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
  CardMedia,
  Box,
} from "@mui/material";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import qrCodeImage from "./QR.png";
import googlePay from "./GooglePay.png";
import phonePay from "./phonepe-icon.png";
import paytm from "./Paytm.png";
import hdfc from "./HDFC.png";

const Contact: React.FC = () => {
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
                  paddingBottom: "40px",
                }}
              >
                Contact Information
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
                Payment Information
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <CardContent>
                    <CardMedia
                      component="img"
                      image={qrCodeImage}
                      alt="QR Code"
                      sx={{
                        width: "100%",
                        height: "100%",
                        maxWidth: "300px",
                        maxHeight: "300px",
                      }}
                    />
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mt: 2, fontSize: "22px", fontWeight: "500" }}
                    >
                      Pay using any UPI Apps
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        mt: 2,
                        gap: 2,
                      }}
                    >
                      <img
                        src={googlePay}
                        alt="Google Pay"
                        style={{ width: "60px", height: "40px" }}
                      />
                      <img
                        src={phonePay}
                        alt="PhonePe"
                        style={{ width: "40px", height: "40px" }}
                      />
                      <img
                        src={paytm}
                        alt="Paytm"
                        style={{ width: "45px", height: "40px" }}
                      />
                      <img
                        src={hdfc}
                        alt="HDFC"
                        style={{
                          width: "45px",
                          height: "45px",
                        }}
                      />
                    </Box>
                  </CardContent>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CardContent>
                    <Typography variant="h4" gutterBottom>
                      Bank Information
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <strong>Bank Name:</strong> HDFC Bank
                      <br />
                      <strong>Account Holder:</strong> VEERASHAIVA LINGAYATHA
                      SAMRAKSHANA SAMIT
                      <br />
                      <strong>Account Number:</strong> 50200087185679
                      <br />
                      <strong>IFSC Code:</strong> HDFC0004082
                      <br />
                      <strong>UPI ID/VPA:</strong> Vyapar.169048627480@hdfcbank
                    </Typography>
                  </CardContent>
                </Grid>
              </Grid>
            </Card>
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                paddingRight: "20px",
              }}
            >
              Contact Information
            </Typography>
            <Card
              sx={{
                borderRadius: "20px",
                width: "100%",
                maxWidth: "900px",
                margin: matchMobileView ? "20px 0px" : "40px",
                backgroundImage:
                  "linear-gradient(rgba(217, 217, 217, 0.57), rgba(217, 217, 217, 0.57))",
              }}
            >
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={1}>
                    <LocalPhoneOutlinedIcon
                      sx={{
                        display: "flex",
                        margin: "auto",
                        fontSize: "40px",
                        paddingTop: "10px",
                      }}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={10}
                    sx={{ borderLeft: "2px solid grey", marginTop: "15px" }}
                  >
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ textAlign: "left" }}
                    >
                      <span style={{ fontSize: "18px", fontWeight: "700" }}>
                        Call:
                      </span>
                      <br />
                      +91 9972216512
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
            <Card
              sx={{
                borderRadius: "20px",
                width: "100%",
                maxWidth: "900px",
                margin: matchMobileView ? "20px 0px" : "40px",
                backgroundImage:
                  "linear-gradient(rgba(217, 217, 217, 0.57), rgba(217, 217, 217, 0.57))",
              }}
            >
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={1}>
                    <EmailOutlinedIcon
                      sx={{
                        display: "flex",
                        margin: "auto",
                        fontSize: "40px",
                        paddingTop: "10px",
                      }}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={10}
                    sx={{ borderLeft: "2px solid grey", marginTop: "15px" }}
                  >
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ textAlign: "left" }}
                    >
                      <span style={{ fontSize: "18px", fontWeight: "700" }}>
                        Mail:
                      </span>
                      <br />
                      vlssr@gmail.com
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
            <Card
              sx={{
                borderRadius: "20px",
                width: "100%",
                maxWidth: "900px",
                margin: matchMobileView ? "20px 0px" : "40px",
                backgroundImage:
                  "linear-gradient(rgba(217, 217, 217, 0.57), rgba(217, 217, 217, 0.57))",
              }}
            >
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={1}>
                    <LocationOnOutlinedIcon
                      sx={{
                        display: "flex",
                        margin: "auto",
                        fontSize: "40px",
                        paddingTop: "10px",
                      }}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={10}
                    sx={{ borderLeft: "2px solid grey", marginTop: "15px" }}
                  >
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ textAlign: "left" }}
                    >
                      <span style={{ fontSize: "18px", fontWeight: "700" }}>
                        Address:
                      </span>
                      <br />
                      #205, Sri subramanya driving school, Bagalur Main Rd,
                      Dwaraka Nagara, Bengaluru, Karnataka 560063
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
