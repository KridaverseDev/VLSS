import React, { useState } from "react";
import {
  Typography,
  Grid,
  TextField,
  Button,
  IconButton,
  useMediaQuery,
  Box,
  Stack,
  useTheme,
} from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit";
import axios from "axios";

const Footer: React.FC = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const [email, setEmail] = useState("");
  console.log(email);

  const handleSubscribe = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://vlssrbackend-483fdd4e7516.herokuapp.com/subscribe",
        {
          email,
        }
      );
      const responseData = response.data;
      console.log(responseData);
      alert(responseData.message);
      setEmail("");
    } catch (error: any) {
      console.error(error);
      if (error.response && error.response.status === 400) {
        alert("You have already subscribed!");
      } else {
        alert("Failed to subscribe. Please try again later.");
      }
      setEmail("");
    }
  };

  return (
    <footer
      className="bg-gray-100"
      style={{
        // backgroundColor: "#3f51b5",
        // color: "#ffffff",
        padding: "60px 40px", // Increased padding
        // textAlign: "center",
        // boxShadow: "0 -5px 10px rgba(0,0,0,0.2)", // Added shadow effect
      }}
    >
      <Grid container spacing={3} justifyContent="space-around">
        <Grid item xs={12} md={4}>
          <h2 className="mb-4 text-2xl tracking-tight font-bold text-black">
            About Us
          </h2>
          <p className="">
            Our website serves as a dedicated platform to the Lingayat religion,
            inspired by the 12th-century visionary, Guru Basavanna...
          </p>
        </Grid>
        <Grid item xs={12} md={4}>
          <div className=" max-w-screen-md">
            <h2 className="mb-4 text-2xl tracking-tight font-bold text-black">
              Subscribe to Our Newsletter
            </h2>
            <form onSubmit={handleSubscribe}>
              {" "}
              <div className="items-center mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                <div className="relative w-full">
                  <label
                    htmlFor="email"
                    className="hidden mb-2 text-sm font-medium text-gray-900 "
                  >
                    Email address
                  </label>
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-500 "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                  </div>
                  <input
                    className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Enter your email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-blue-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <h2 className="mb-4 text-2xl tracking-tight font-bold text-black">
            Contact & Follow Us
          </h2>
          <p className="">
            <span className="font-medium">Email:</span> vlssr@gmail.com <br />
            <span className="font-medium">Phone:</span> +91 9886722060, +91
            991688789, +91 9972216512
            <br />
            <span className="font-medium">Address:</span> #205, Sri subramanya
            driving school, Bagalur Main Rd, Dwaraka Nagara, Bengaluru,
            Karnataka 560063
          </p>
          <div className="mt-2">
            <IconButton
              color="inherit"
              aria-label="Twitter"
              component="a"
              href="https://twitter.com/home"
              target="_blank"
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              color="inherit"
              aria-label="Facebook"
              component="a"
              href="https://www.facebook.com"
              target="_blank"
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              color="inherit"
              aria-label="Instagram"
              component="a"
              href="https://www.instagram.com"
              target="_blank"
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              color="inherit"
              aria-label="Email"
              component="a"
              href="mailto:vlssr@gmail.com"
              target="_blank"
            >
              <EmailIcon />
            </IconButton>
          </div>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" className="my-5">
        <p
          // variant="body2"
          // sx={{ fontStyle: "italic" }}
          className="text-sm sm:text-base font-medium"
        >
          &copy; {new Date().getFullYear()} VLSS. All rights reserved.
        </p>
      </Grid>
      <Grid container justifyContent="center" className="my-5">
        <p className="text-sm sm:text-base font-medium">+909090909090 </p>
      </Grid>
      <Grid container justifyContent="center" className="my-5">
        <p className="text-sm sm:text-base font-medium">
          Design and Managed by{" "}
          <a href="https://www.kridaverse.com">
            {" "}
            <span className="hover:text-blue-700">Kridaverse</span>
          </a>
        </p>
      </Grid>
      <div className="counter float-right flex gap-1">
        <span className="font-medium">Total Visits :</span>
        <img
          src="https://hitwebcounter.com/counter/counter.php?page=12954542&style=0006&nbdigits=6&type=page&initCount=0"
          title="Counter Widget"
          alt="Visit counter For Websites"
        />
      </div>
    </footer>
  );
};

export default Footer;
