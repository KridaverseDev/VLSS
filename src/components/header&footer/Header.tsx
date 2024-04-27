import React, { useEffect, useState } from "react";
import {
  Toolbar,
  Typography,
  Button,
  Paper,
  Box,
  useMediaQuery,
  useTheme,
  IconButton,
  Slide
} from "@mui/material";

import { Link, useLocation } from "react-router-dom";
import logo from "./logo_header.png";
import MenuIcon from "@mui/icons-material/Menu";
import SideNavigation from "./SideNavigation";
import DehazeIcon from '@mui/icons-material/Dehaze';

const Header: React.FC = () => {
  const location = useLocation();
  const [isEnglish, setIsEnglish] = useState<boolean>(true);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const { breakpoints } = useTheme();
  const matchMobileView = useMediaQuery(breakpoints.down("md"));
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        setIsEnglish((prevIsEnglish) => !prevIsEnglish);
        setIsVisible(true);
      }, 500);
    }, 10000);

    return () => clearTimeout(timer);
  }, [isEnglish]);

  const isActive = (pathname: string) => {
    return location.pathname === pathname
      ? { fontWeight: "550", color: "#7D0B03", fontSize: "20px" }
      : { fontSize: "18px", color: "#464646" };
  };

  const renderDivider = (isActive: boolean, pathname: string) => (
    <div
      style={{
        borderBottom: isActive ? "4px solid #7D0B03" : "none",
        marginLeft: pathname === "/" ? "20px" : "0px",
        borderTopLeftRadius: isActive ? "20px" : "0px",
        borderTopRightRadius: isActive ? "20px" : "0px",
      }}
    />
  );

  return (
    <>
      <>
        {!matchMobileView && (
          <Slide direction="down" in={true} mountOnEnter unmountOnExit>

            <Toolbar>
              <img
                alt="logo"
                src={logo}
                style={{ width: matchMobileView ? 40 : 100, marginLeft: matchMobileView ? "20px" : "60px", animation: 'fadeIn 2s ease-out' }}

              />
              <Typography
                component="div"
                sx={{
                  flexGrow: 1,
                  fontStyle: "inherit",
                  fontSize: "18px",
                  fontWeight: "600",
                  margin: "0px 100px",
                  animation: isVisible ? "fadeIn 1s linear" : "fadeOut 1s linear",
                }}
              >
                {isEnglish ? (
                  <>
                    <span>VEERASHAIVA</span>
                    <br />
                    <span style={{ color: "#de2a1b" }}>LINGAYATHA</span>
                    <br />
                    <span style={{ color: "#de2a1b" }}>SAMRAKSHANA</span>
                    <br />
                    <span>SAMITHI(R.)</span>
                  </>
                ) : (
                  <>
                    <span>ವೀರಶೈವ</span>
                    <br />
                    <span style={{ color: "#de2a1b" }}>ಲಿಂಗಾಯತ</span>
                    <br />
                    <span style={{ color: "#de2a1b" }}>ಸಂರಕ್ಷಣಾ</span>
                    <br />
                    <span>ಸಮಿತಿ(ರಿ.)</span>
                  </>
                )}
              </Typography>
              <Paper
                sx={{
                  padding: "15px",
                  borderRadius: "35px",
                  backgroundColor: "#ECE1E2",
                  width: "900px",
                  display: "flex",
                  justifyContent: "space-between",
                  marginRight: "40px",
                  height: "36px",
                }}
              >
                <Box>
                  <Button
                    color="inherit"
                    component={Link}
                    to="/"
                    sx={{
                      textTransform: "none",
                      marginLeft: "20px",
                      ...isActive("/"),
                    }}
                  >
                    Home
                  </Button>
                  {renderDivider(location.pathname === "/", location.pathname)}
                </Box>
                <Box>
                  <Button
                    color="inherit"
                    component={Link}
                    to="/veerashaiva"
                    sx={{ textTransform: "none", ...isActive("/veerashaiva") }}
                  >
                  Veerashaiva Lingayatha
                  </Button>
                  {renderDivider(
                    location.pathname === "/veerashaiva",
                    location.pathname
                  )}
                </Box>
                <Box>
                  <Button
                    color="inherit"
                    component={Link}
                    to="/about"
                    sx={{ textTransform: "none", ...isActive("/about") }}
                  >
                    About
                  </Button>
                  {renderDivider(
                    location.pathname === "/about",
                    location.pathname
                  )}
                </Box>
                <Box>
                  <Button
                    color="inherit"
                    component={Link}
                    to="/organization"
                    sx={{ textTransform: "none", ...isActive("/organization") }}
                  >
                    Events
                  </Button>
                  {renderDivider(
                    location.pathname === "/organization",
                    location.pathname
                  )}
                </Box>
                <Box>
                  <Button
                    color="inherit"
                    component={Link}
                    to="/leaders"
                    sx={{ textTransform: "none", ...isActive("/leaders") }}
                  >
                    Leaders
                  </Button>
                  {renderDivider(
                    location.pathname === "/leaders",
                    location.pathname
                  )}
                </Box>
                <Box>
                  <Button
                    color="inherit"
                    component={Link}
                    to="/contact"
                    sx={{ textTransform: "none", ...isActive("/contact") }}
                  >
                    Contact
                  </Button>
                  {renderDivider(
                    location.pathname === "/contact",
                    location.pathname
                  )}
                </Box>
                <Box>
                  <Button
                    color="inherit"
                    component={Link}
                    to="/form"
                    sx={{
                      textTransform: "none",
                      marginRight: "20px",
                      fontSize: "18px",
                    }}
                  >
                    Form
                  </Button>
                </Box>
              </Paper>
            </Toolbar>
          </Slide>
        )}
      </>

      {matchMobileView && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            margin: "15px 0px",
            animation: 'slideInFromRight 1s ease-out',
          }}
        >
          <Box>
            <img
              alt="logo"
              src={logo}
              style={{ width: 40, marginLeft: "20px" }}
            />
          </Box>
          <Box>
            <Typography
              component="div"
              sx={{
                flexGrow: 1,
                fontStyle: "inherit",
                fontSize: "16px",
                fontWeight: "600",
                animation: isVisible ? "fadeIn 1s linear" : "fadeOut 1s linear",
              }}
            >
              {isEnglish ? (
                <>
                  <span>VEERASHAIVA</span>
                  <span style={{ color: "#BD2424" }}>LINGAYATHA</span>
                  <br />
                  <span style={{ color: "#BD2424" }}>SAMRAKSHANA</span>
                  <span>SAMITHI(R.)</span>
                </>
              ) : (
                <>
                  <span>ವೀರಶೈವ</span>
                  <span style={{ color: "#BD2424" }}>ಲಿಂಗಾಯತ</span>
                  <br />
                  <span style={{ color: "#BD2424" }}>ಸಂರಕ್ಷಣಾ</span>
                  <span>ಸಮಿತಿ(ರಿ.)</span>
                </>
              )}
            </Typography>
          </Box>
          <Box>
            <IconButton
              edge="start"
              color="inherit"
              onClick={toggleNav}
              className="menu-icon"
              sx={{ display: "flex", margin: "auto 0px" }}
            >
              <DehazeIcon /> 
            </IconButton>
            <SideNavigation isOpen={isNavOpen} onClose={toggleNav} />
          </Box>
        </Box>
      )}
    </>
  );
};

export default Header;
