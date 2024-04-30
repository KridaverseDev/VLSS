import React, { useState } from "react";
import {
  Grid,
  TextField,
  FormHelperText,
  Button,
  Box,
  // Snackbar,
  MenuItem,
  Paper,
  // Alert,
  Container,
  Typography,
  Divider,
  useMediaQuery,
  useTheme,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import initialFormData, { FormData } from "./FormData";
import PDFDocument from "./pdfcreation";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import axios from "axios";
import qrCodeImage from "../contact/QR.png";

const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const { breakpoints } = useTheme();
  const matchMobileView = useMediaQuery(breakpoints.down("md"));
  // const [open, setOpen] = React.useState(false);
  // const [snackbarMessage, setSnackbarMessage] = useState("");
  // const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  // const handleClose = (
  //   event?: React.SyntheticEvent | Event,
  //   reason?: string
  // ) => {
  //   if (reason === "clickaway") {
  //     return;
  //   }
  //   setOpen(false);
  // };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const district = [
    {
      value: "district1",
      label: "district1",
    },
    {
      value: "district2",
      label: "district 2",
    },
    {
      value: "district3",
      label: "district 3",
    },
  ];

  const taluk = [
    {
      value: "taluk1",
      label: "Taluk 1",
    },
    {
      value: "taluk2",
      label: "Taluk 2",
    },
    {
      value: "taluk3",
      label: "Taluk 3",
    },
  ];

  const amount = [
    {
      value: "cash",
      label: "Cash",
    },
    {
      value: "upi",
      label: "UPI",
    },
    {
      value: "cheque",
      label: "Cheque",
    },
  ];

  const blood = [
    {
      value: "A+",
      label: "A+",
    },
    {
      value: "A-",
      label: "A-",
    },
    {
      value: "B+",
      label: "B+",
    },
    {
      value: "B-",
      label: "B-",
    },
    {
      value: "AB+",
      label: "AB+",
    },
    {
      value: "AB-",
      label: "AB-",
    },
    {
      value: "O+",
      label: "O+",
    },
    {
      value: "O-",
      label: "O-",
    },
  ];

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/formDetails",
        formData,
        {
          responseType: "blob",
        }
      );

      const blob = new Blob([response.data], { type: "application/pdf" });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "form.pdf");

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      setFormData(initialFormData);
    } catch (error) {
      console.error(error);
    }
  };

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
                  paddingBottom: "150px",
                }}
              >
                Form
              </Typography>
            </Paper>
          </Grid>
        )}
        <Grid item xs={12} sm={matchMobileView ? 12 : 11}>
          <Paper
            elevation={24}
            sx={{
              borderRadius: matchMobileView ? "15px" : "0px 30px 30px 30px",
              marginLeft: matchMobileView ? "0" : "-15px",
            }}
          >
            <Box p={3}>
              <Typography variant="h4" align="center" gutterBottom>
                Membership Application Form
              </Typography>
              <Typography variant="body2" align="center" gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <br /> Curabitur eleifend suscipit semper. Nunc suscipit
                <br /> augue sed suscipit volutpat.
              </Typography>
              <Divider
                sx={{ margin: "10px 0px", borderTop: "1px solid #9C9C9C" }}
              />
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      required
                      label="Applicant’s Name"
                      name="applicationName"
                      value={formData.applicationName}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      required
                      label="Occupation"
                      name="occupation"
                      value={formData.occupation}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      required
                      label="Father/ Husband name"
                      name="fatherOrHusbandName"
                      value={formData.fatherOrHusbandName}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      required
                      label="DOB(Date of birth)"
                      name="dob"
                      type="date"
                      value={formData.dob}
                      onChange={handleInputChange}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      required
                      label="Education"
                      name="education"
                      value={formData.education}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="bloodGroup"
                      sx={{ display: "flex" }}
                      select
                      label="Blood Group"
                      onChange={handleInputChange}
                      name="bloodGroup"
                      value={formData.bloodGroup}
                    >
                      {blood.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      required
                      label="Introducer name and membership number"
                      name="introducerDetails"
                      value={formData.introducerDetails}
                      onChange={handleInputChange}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      required
                      label="Member Residential Address"
                      name="memberResAddress"
                      value={formData.memberResAddress}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="resTaluk"
                      sx={{ display: "flex" }}
                      select
                      label="Taluk"
                      onChange={handleInputChange}
                      name="resTaluk"
                      value={formData.resTaluk}
                    >
                      {taluk.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="resDistrict"
                      sx={{ display: "flex" }}
                      select
                      label="District"
                      onChange={handleInputChange}
                      name="resDistrict"
                      value={formData.resDistrict}
                    >
                      {district.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      required
                      label="Pincode"
                      name="resPincode"
                      value={formData.resPincode}
                      onChange={handleInputChange}
                    />
                  </Grid>
                </Grid>

                <Divider
                  sx={{ margin: "10px 0px", borderTop: "1px solid #9C9C9C" }}
                />
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      fullWidth
                      required
                      label="Member Permanent Address"
                      name="memberPerAddress"
                      value={formData.memberPerAddress}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="perTaluk"
                      sx={{ display: "flex" }}
                      select
                      label="Taluk"
                      onChange={handleInputChange}
                      name="perTaluk"
                      value={formData.perTaluk}
                    >
                      {taluk.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="perDistrict"
                      sx={{ display: "flex" }}
                      select
                      label="District"
                      onChange={handleInputChange}
                      name="perDistrict"
                      value={formData.perDistrict}
                    >
                      {district.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      required
                      label="Pincode"
                      name="perPincode"
                      value={formData.perPincode}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      required
                      label="Family Details"
                      name="familyDetails"
                      value={formData.familyDetails}
                      onChange={handleInputChange}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      required
                      label="Phone number"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      required
                      label="Aadhar Number"
                      name="aadharNumber"
                      value={formData.aadharNumber}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      required
                      label="Email Id"
                      name="emailId"
                      value={formData.emailId}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      required
                      label="Membership  Fee"
                      name="membershipFee"
                      value={1000}
                      // onChange={handleInputChange}
                      disabled
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="perDistrict"
                      sx={{ display: "flex" }}
                      select
                      label="Amount Paid In"
                      onChange={handleInputChange}
                      name="amountPaidInCash"
                      value={formData.amountPaidInCash}
                    >
                      {amount.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      required
                      label="Enter UTR Number"
                      name="utrNumber"
                      value={formData.utrNumber}
                      onChange={handleInputChange}
                    />
                  </Grid>
                </Grid>
                <Grid
                  sx={{
                    padding: "10px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {/* <Button
                  variant="outlined"
                  size="small"
                  style={{
                    alignItems: "center",
                    textTransform: "none",
                    margin: "20px",
                    color: "#9C9C9C",
                    borderColor: "#9C9C9C",
                  }}
                >
                  Save In Draft
                </Button> */}

                  <Button
                    type="submit"
                    variant="contained"
                    color="success"
                    style={{
                      alignItems: "center",
                      textTransform: "none",
                      margin: "20px",
                      padding: "6px 20px",
                      // backgroundColor: "#7D0B03",
                    }}
                  >
                    Submit
                  </Button>
                  {/* <Snackbar
                  open={open}
                  autoHideDuration={6000}
                  onClose={handleClose}
                >
                  <Alert severity={snackbarSeverity as "success" | "error"}>
                    {snackbarMessage}
                  </Alert>
                </Snackbar> */}
                </Grid>
              </form>
            </Box>
          </Paper>
        </Grid>
      </Grid>
      <Paper
        elevation={12}
        sx={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "20px",
          marginTop: "20px",
          borderRadius: "30px 30px 30px 30px",
          width: "100%",
        }}
      >
        <Card>
          <Typography variant="h4" gutterBottom sx={{ textAlign: "center" }}>
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
                  Scan here to pay using UPI.
                </Typography>
              </CardContent>
            </Grid>
            <Grid item xs={12} sm={6}>
              <CardContent>
                <Typography variant="h4" gutterBottom>
                  Bank Information
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong>Bank Name:</strong> Example Bank
                  <br />
                  <strong>Account Holder:</strong> Your Name
                  <br />
                  <strong>Account Number:</strong> 1234567890123
                  <br />
                  <strong>IFSC Code:</strong> ABCD0123456
                  <br />
                  <strong>UPI ID/VPA:</strong> 9876543210@ybl
                </Typography>
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      </Paper>
    </Container>
  );
};

export default Form;
