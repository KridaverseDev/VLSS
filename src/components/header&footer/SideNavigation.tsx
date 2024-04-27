import React from "react";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {
  signedInSideNavigationItems,
} from "./SideNavigationRoutes";
import { Link as RouterLink } from "react-router-dom";

interface SideNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideNavigation: React.FC<SideNavigationProps> = ({ isOpen, onClose }) => {

  const navigationItems = signedInSideNavigationItems;

  return (
    <Drawer anchor="left" open={isOpen} onClose={onClose}>
      <List sx={{ width: "250px" }}>
        <Box
          sx={{
            padding: "5px 20px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <IconButton onClick={onClose}>
            <Close />
          </IconButton>
        </Box>
        <Divider sx={{ backgroundColor: "black" }} />
        {navigationItems.map((item, index) => (
          <React.Fragment key={index}>
            <ListItem>
              <Typography
                component={RouterLink}
                to={item.path || ""}
                onClick={onClose}
                sx={{
                  textDecoration: "none",
                  color: "black",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
                className={
                  item.path === "/BrowseJobs"
                    ? "BrowseGigs-mobile"
                    : item.path === "/task/gigHistory"
                    ? "dashboard-mobile"
                    : ""
                }
              >
                <ListItemText primary={item.label} />
                <KeyboardArrowRightIcon sx={{ fontSize: "20px", right: "0" }} />
              </Typography>
            </ListItem>
            <Divider sx={{ margin: "0px 6px" }} />
          </React.Fragment>
        ))}
      </List>
    </Drawer>
  );
};

export default SideNavigation;
