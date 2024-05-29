import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import axios from "axios";
import { useEffect, useState } from "react";
import { Leader } from "./Leader";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  useMediaQuery,
  useTheme,
  CircularProgress,
} from "@mui/material";

interface CommitteeMember {
  _id: string;
  applicationName: string;
  resDistrict: string;
  dob: string;
}

const Leaders: React.FC = () => {
  const { breakpoints } = useTheme();
  const matchMobileView = useMediaQuery(breakpoints.down("md"));
  const [isHovered, setIsHovered] = React.useState(false);
  const [leaders, setLeaders] = useState<Leader[]>([]);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [committeeMembers, setCommitteeMembers] = useState<CommitteeMember[]>(
    []
  );
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    axios
      .get("https://vlssrbackend-483fdd4e7516.herokuapp.com/leaders")
      .then((response) => {
        const enabledLeaders = response.data.leaders.filter(
          (leader: Leader) => leader.enable
        );
        setLeaders(enabledLeaders);

        const imageLoadPromises: Promise<void>[] = enabledLeaders.map(
          (leader: Leader) => {
            return new Promise<void>((resolve) => {
              const img = new Image();
              img.onload = () => {
                resolve();
              };
              img.src = leader.link;
            });
          }
        );

        Promise.all(imageLoadPromises).then(() => {
          setImageLoaded(true);
          setIsLoading(false);
        });
      })
      .catch((error) => {
        console.error("Error fetching leaders:", error);
        setIsLoading(false);
      });

    axios
      .get("https://vlssrbackend-483fdd4e7516.herokuapp.com/formDetails")
      .then((response) => {
        setCommitteeMembers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching committee members:", error);
      });
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: matchMobileView ? "center" : "space-between",
        margin: matchMobileView ? "10px" : "0 50px",
      }}
    >
      <div
        style={{
          width: "100%",
          marginBottom: "25px",
        }}
      >
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
                TabIndicatorProps={{
                  sx: { backgroundColor: "#BD2424" },
                }}
                sx={{
                  "& .MuiTab-root": {
                    color: "text.secondary",
                    "&.Mui-selected": {
                      color: "#BD2424",
                    },
                  },
                }}
              >
                <Tab
                  label={
                    matchMobileView ? (
                      <>
                        PRESENT
                        <br />
                        MEMBERS
                      </>
                    ) : (
                      "Present Members"
                    )
                  }
                  value="1"
                  style={{ fontSize: matchMobileView ? "14px" : "18px" }}
                />
                <Tab
                  label={
                    matchMobileView ? (
                      <>
                        PAST
                        <br />
                        MEMBERS
                      </>
                    ) : (
                      "Past Members"
                    )
                  }
                  value="2"
                  style={{
                    fontSize: matchMobileView ? "14px" : "18px",
                    display: "none",
                  }}
                />

                <Tab
                  label={
                    matchMobileView ? (
                      <>
                        Committee
                        <br />
                        members
                      </>
                    ) : (
                      "Committee Members"
                    )
                  }
                  value="3"
                  style={{ fontSize: matchMobileView ? "14px" : "18px" }}
                />
              </TabList>
            </Box>
            <TabPanel value="1">
              {isLoading ? (
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <CircularProgress
                    size={80}
                    thickness={2}
                    sx={{ animationDuration: "3s" }}
                  />
                </Box>
              ) : (
                <div
                  className="flex flex-wrap gap-8 text-center"
                  style={{
                    justifyContent: matchMobileView ? "center" : "flex-start",
                    width: "100%",
                  }}
                >
                  {leaders.map((leader, index) => (
                    <Card
                      key={index}
                      sx={{
                        width: matchMobileView ? "100%" : "calc(25% - 20px)",
                        maxWidth: "200px",
                        border: "2px solid black",
                        borderRadius: "15px",
                        boxShadow: isHovered
                          ? "0 4px 8px rgba(0, 0, 0, 0.2)"
                          : "none",
                        transition:
                          "transform 0.5s ease-in-out, box-shadow 0.5s ease-in-out",
                        cursor: "pointer",
                        overflow: "hidden",
                        animation: "fadeInScale 2s ease-in-out",
                        "&:hover": {
                          transform: isHovered ? "scale(1.05)" : "scale(1.1)",
                        },
                      }}
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                    >
                      <Typography
                        sx={{
                          textAlign: "center",
                          padding: "15px",
                          fontSize: "18px",
                          fontWeight: "bold",
                        }}
                      >
                        {leader.leader_name}
                      </Typography>
                      <CardMedia
                        component="img"
                        height="194"
                        image={leader.link}
                        alt={leader.leader_name}
                        sx={{
                          maxWidth: "180px",
                          maxHeight: "200px",
                          width: "100%",
                          margin: "auto",
                          display: !imageLoaded ? "none" : "inline",
                          opacity: imageLoaded ? 1 : 0,
                          transition: "opacity 0.5s ease-in-out",
                          objectFit: "contain",
                        }}
                      />
                      <CardContent>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{
                            textAlign: "center",
                            fontSize: "16px",
                          }}
                        >
                          {leader.name}
                        </Typography>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </TabPanel>
            <TabPanel value="2">
              {" "}
              {/* {isLoading ? (
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <CircularProgress
                    size={80}
                    thickness={2}
                    sx={{ animationDuration: "3s" }}
                  />
                </Box>
              ) : (
                <div
                  className="flex flex-wrap gap-8 text-center"
                  style={{
                    justifyContent: matchMobileView ? "center" : "flex-start",
                    width: "100%",
                  }}
                >
                  {leaders.map((leader, index) => (
                    <Card
                      key={index}
                      sx={{
                        width: matchMobileView ? "100%" : "calc(25% - 20px)",
                        maxWidth: "200px",
                        border: "2px solid black",
                        borderRadius: "15px",
                        boxShadow: isHovered
                          ? "0 4px 8px rgba(0, 0, 0, 0.2)"
                          : "none",
                        transition:
                          "transform 0.5s ease-in-out, box-shadow 0.5s ease-in-out",
                        cursor: "pointer",
                        overflow: "hidden",
                        animation: "fadeInScale 2s ease-in-out",
                        "&:hover": {
                          transform: isHovered ? "scale(1.05)" : "scale(1.1)",
                        },
                      }}
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                    >
                      <Typography
                        sx={{
                          textAlign: "center",
                          padding: "15px",
                          fontSize: "18px",
                          fontWeight: "bold",
                        }}
                      >
                        {leader.leader_name}
                      </Typography>
                      <CardMedia
                        component="img"
                        height="194"
                        image={leader.link}
                        alt={leader.leader_name}
                        sx={{
                          maxWidth: "180px",
                          maxHeight: "200px",
                          width: "100%",
                          margin: "auto",
                          display: !imageLoaded ? "none" : "inline",
                          opacity: imageLoaded ? 1 : 0,
                          transition: "opacity 0.5s ease-in-out",
                          objectFit: "contain",
                        }}
                      />
                      <CardContent>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{
                            textAlign: "center",
                            fontSize: "16px",
                          }}
                        >
                          {leader.name}
                        </Typography>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )} */}
            </TabPanel>
            <TabPanel value="3">
              <Box>
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "0.5fr 2fr 1fr",
                    gap: "10px",
                    padding: "10px",
                    borderBottom: "1px solid #ccc",
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      fontSize: matchMobileView ? "14px" : "20px",
                    }}
                  >
                    Sl no
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      fontSize: matchMobileView ? "14px" : "20px",
                    }}
                  >
                    Name
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      fontSize: matchMobileView ? "14px" : "20px",
                    }}
                  >
                    Location
                  </Typography>
                </Box>
                {committeeMembers.map((member, index) => {
                  const creationYear = new Date(
                    parseInt(member._id.toString().substring(0, 8), 16) * 1000
                  ).getFullYear();
                  return (
                    <Box
                      key={index}
                      sx={{
                        display: "grid",
                        gridTemplateColumns: "0.5fr 2fr 1fr",
                        gap: "10px",
                        padding: "10px",
                        borderBottom: "1px solid #ccc",
                      }}
                    >
                      <Typography
                        sx={{ fontSize: matchMobileView ? "12px" : "16px" }}
                      >
                        {index + 1}
                      </Typography>
                      <Typography
                        sx={{ fontSize: matchMobileView ? "12px" : "16px" }}
                      >
                        {member.applicationName}
                      </Typography>
                      <Typography
                        sx={{ fontSize: matchMobileView ? "12px" : "16px" }}
                      >
                        {member.resDistrict}
                      </Typography>
                    </Box>
                  );
                })}
              </Box>
            </TabPanel>
          </TabContext>
        </Box>
      </div>
    </Box>
  );
};

export default Leaders;
