import React, { useRef, useState } from "react";
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
  Dialog,
  DialogContent,
  IconButton,
  InputAdornment,
} from "@mui/material";
import initialFormData, { FormData } from "./FormData";
import PDFDocument from "./pdfcreation";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import axios from "axios";
import qrCodeImage from "../contact/QR.png";
import { districtsAndTaluks } from "./taluk";
import InfoIcon from "@mui/icons-material/Info";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";
import googlePay from "../contact/GooglePay.png";
import phonePay from "../contact/phonepe-icon.png";
import paytm from "../contact/Paytm.png";
import hdfc from "../contact/HDFC.png";

const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const { breakpoints } = useTheme();
  const matchMobileView = useMediaQuery(breakpoints.down("md"));
  const [error, setError] = useState("");
  const [file, setFile] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [uploadMessage, setUploadMessage] = useState("");
  const [profileUrl, setProfileUrl] = useState("");
  const [isPhotoUploaded, setIsPhotoUploaded] = useState(false);

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const selectedFile = files[0];
      if (selectedFile.type.startsWith("image/")) {
        try {
          const storageRef = ref(storage, `images/${selectedFile.name}`);

          await uploadBytes(storageRef, selectedFile);

          const downloadURL = await getDownloadURL(storageRef);

          setFormData((prevData) => ({ ...prevData, profileUrl: downloadURL }));
          // setProfileUrl(downloadURL);
          setIsPhotoUploaded(true);

          setUploadMessage("Profile photo has been uploaded successfully.");
        } catch (error) {
          console.error("Error uploading photo:", error);
          setUploadMessage("Error uploading photo. Please try again.");
        }
      } else {
        setUploadMessage("Please upload a valid photo file.");
      }
    }
  };

  const handleTextFieldClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === "resDistrict") {
      setSelectedDistrict(value);
    } else if (name === "perDistrict") {
      setSelectedPerDistrict(value);
    }
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [selectedDistrict, setSelectedDistrict] = useState<string>("");
  const [selectedTaluk, setSelectedTaluk] = useState<string>("");

  const [selectedPerDistrict, setSelectedPerDistrict] = useState<string>("");
  const [selectedPerTaluk, setSelectedPerTaluk] = useState<string>("");

  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<string>("");

  const [showInfoPopup, setShowInfoPopup] = useState(false);

  const handleInfoButtonClick = () => {
    setShowInfoPopup(true);
  };

  const handleCloseInfoPopup = () => {
    setShowInfoPopup(false);
  };

  React.useEffect(() => {
    setSelectedTaluk("");
  }, [selectedDistrict]);
  const amount = [
    {
      value: "UPI",
      label: "UPI",
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

  const handlePaymentMethodChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    const paymentMethod = event.target.value as string;
    setSelectedPaymentMethod(paymentMethod);
    setFormData((prevData) => ({
      ...prevData,
      amountPaidInCash: paymentMethod,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://vlssrbackend-483fdd4e7516.herokuapp.com/formDetails",
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

  // console.log(formData);
  // console.log("Profile Photo Url", profileUrl);

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
                      inputProps={{
                        pattern: "[A-Za-z\\s]+",
                        title: "Please Enter a Valid Name",
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      required={!isPhotoUploaded}
                      label="Upload Profile Photo"
                      name="uploadImage"
                      onClick={handleTextFieldClick}
                      value={
                        isPhotoUploaded
                          ? "Click here to Change Profile Photo"
                          : ""
                      }
                    />
                    <input
                      type="file"
                      ref={fileInputRef}
                      style={{ display: "none" }}
                      onChange={handleFileChange}
                      accept="image/*"
                      hidden
                    />
                    {uploadMessage && (
                      <Typography variant="body2" style={{ color: "green" }}>
                        {uploadMessage}
                      </Typography>
                    )}
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      required
                      label="Occupation"
                      name="occupation"
                      value={formData.occupation}
                      onChange={handleInputChange}
                      inputProps={{
                        pattern: "[A-Za-z\\s]+",
                        title: "Please Enter a Valid Occupation",
                      }}
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
                      inputProps={{
                        pattern: "[A-Za-z\\s]+",
                        title: "Please Enter a Valid Name",
                      }}
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
                      inputProps={{
                        pattern: "[A-Za-z\\s]+",
                        title: "Please Enter a Education",
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="bloodGroup"
                      sx={{ display: "flex" }}
                      select
                      required
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
                      id="resDistrict"
                      sx={{ display: "flex" }}
                      select
                      required
                      label="District"
                      onChange={handleInputChange}
                      name="resDistrict"
                      value={formData.resDistrict}
                    >
                      {districtsAndTaluks["Karnataka"].districts.map(
                        (district, index) => (
                          <MenuItem key={index} value={district.name}>
                            {district.name}
                          </MenuItem>
                        )
                      )}
                    </TextField>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="resTaluk"
                      sx={{ display: "flex" }}
                      select
                      required
                      label="Taluk"
                      onChange={handleInputChange}
                      name="resTaluk"
                      value={formData.resTaluk}
                    >
                      {districtsAndTaluks["Karnataka"].districts
                        .find((district) => district.name === selectedDistrict)
                        ?.taluks.map((taluk, index) => (
                          <MenuItem key={index} value={taluk}>
                            {taluk}
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
                      inputProps={{
                        pattern: "^[0-9]{6}$",
                        title: "Please Enter a 6-Digit Pincode",
                      }}
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
                      id="perDistrict"
                      sx={{ display: "flex" }}
                      select
                      required
                      label="District"
                      onChange={handleInputChange}
                      name="perDistrict"
                      value={formData.perDistrict}
                    >
                      {districtsAndTaluks["Karnataka"].districts.map(
                        (district, index) => (
                          <MenuItem key={index} value={district.name}>
                            {district.name}
                          </MenuItem>
                        )
                      )}
                    </TextField>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="perTaluk"
                      sx={{ display: "flex" }}
                      select
                      required
                      label="Taluk"
                      onChange={handleInputChange}
                      name="perTaluk"
                      value={formData.perTaluk}
                    >
                      {districtsAndTaluks["Karnataka"].districts
                        .find(
                          (district) => district.name === selectedPerDistrict
                        )
                        ?.taluks.map((taluk, index) => (
                          <MenuItem key={index} value={taluk}>
                            {taluk}
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
                      inputProps={{
                        pattern: "^[0-9]{6}$",
                        title: "Please Enter a 6-Digit Pincode",
                      }}
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
                      inputProps={{
                        pattern: "[0-9]{10}",
                        title: "Please enter a 10-digit phone number",
                        maxLength: 10,
                      }}
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
                      inputProps={{
                        pattern: "[0-9]{12}",
                        title: "Please enter a 12-digit Aadhar number",
                        maxLength: 12,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      required
                      label="Email Id"
                      name="emailId"
                      type="email"
                      value={formData.emailId}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="membershipFee"
                      fullWidth
                      required
                      label="Membership Fee"
                      name="membershipFee"
                      value={1150}
                      disabled
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton onClick={handleInfoButtonClick}>
                              <InfoIcon />
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={selectedPaymentMethod === "UPI" ? 6 : 12}
                  >
                    <TextField
                      id="amountPaidInCash"
                      sx={{ display: "flex" }}
                      select
                      required
                      label="Amount Paid In"
                      onChange={handlePaymentMethodChange}
                      name="amountPaidInCash"
                      value={selectedPaymentMethod}
                    >
                      {amount.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  {selectedPaymentMethod === "UPI" && (
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        required
                        label="Enter UTR Number"
                        name="utrNumber"
                        value={formData.utrNumber}
                        onChange={handleInputChange}
                        inputProps={{
                          pattern: "\\d{12}",
                          title: "Please enter a valid UTR number.",
                        }}
                      />
                    </Grid>
                  )}
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
                  {error && <p style={{ color: "red" }}>{error}</p>}

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
      <Dialog open={showInfoPopup} onClose={handleCloseInfoPopup}>
        <DialogContent>
          <Typography variant="body1">
            ₹1000 For Application Fee, ₹150 for ID Card
          </Typography>
        </DialogContent>
      </Dialog>
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
      </Paper>
    </Container>
  );
};

export default Form;
