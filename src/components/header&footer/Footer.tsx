import React from "react";
import { Typography, Grid, TextField, Button, IconButton, useMediaQuery,Box,Stack, useTheme } from "@mui/material";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';

const Footer: React.FC = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  return  (
    <footer style={{
      backgroundColor: "#3f51b5",
      color: "#ffffff",
      padding: "60px 40px", // Increased padding
      textAlign: "center",
      boxShadow: "0 -5px 10px rgba(0,0,0,0.2)" // Added shadow effect
    }}>
      <Grid container spacing={3} justifyContent="space-around">
        <Grid item xs={12} md={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 600 }}>
            About Us
          </Typography>
          <Typography variant="body1" style={{ maxWidth: "400px", margin: "auto", lineHeight: '1.5' }}>
            Our website serves as a dedicated platform to the Lingayat religion, inspired by the 12th-century visionary, Guru Basavanna...
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 600 }}>
            Subscribe to Our Newsletter
          </Typography>
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <TextField
              fullWidth={!matches}
              variant="filled"
              size="medium"
              label="Enter your email"
              sx={{
                backgroundColor: "#fff",
                borderRadius: 1,
                '.MuiFilledInput-input': { padding: '10px' },
                '.MuiFilledInput-root': { borderRadius: '4px' }
              }}
            />
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#4caf50",
                '&:hover': { backgroundColor: "#66bb6a" },
                width: matches ? 'auto' : '100%',
                marginTop: matches ? 0 : 2,
              }}
            >
              Subscribe
            </Button>
          </Stack>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 600 }}>
            Contact & Follow Us
          </Typography>
          <Typography variant="body1">
            Email: info@lingayatfaith.org <br />
            Phone: +123 456 7890 <br />
            Address: 108 Divine Path,Enlightenment City, Peaceful State, 43210
          </Typography>
          <Box mt={2}>
            <IconButton color="inherit" aria-label="Twitter">
              <TwitterIcon />
            </IconButton>
            <IconButton color="inherit" aria-label="Facebook">
              <FacebookIcon />
            </IconButton>
            <IconButton color="inherit" aria-label="Instagram">
              <InstagramIcon />
            </IconButton>
            <IconButton color="inherit" aria-label="Email">
              <EmailIcon />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" sx={{ mt: 5 }}>
        <Typography variant="body2" sx={{ mt: 3, fontStyle: 'italic' }}>
          &copy; {new Date().getFullYear()} VLSS. All rights reserved.
        </Typography>
      </Grid>
    </footer>
  );
};

export default Footer;
