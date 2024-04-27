import React from "react";
import { useState } from 'react';

import {
  Typography,
  Paper,
  Grid,
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import president from "./photos/president.jpeg";
import vicepresident from "./photos/vicepresident.jpeg";
import chief from "./photos/Amaresh.jpeg";
import joint from "./photos/harini.jpeg";
import orgsec from "./photos/indudhara.jpeg";
import treasurer from "./photos/nagappa.jpeg";
import nagabhishan from "./photos/Nagabhushan.jpeg";
import mallikarjuna from "./photos/Mallikarjuna Biradar.jpeg";
import niranjan from "./photos/Niranjan.jpeg";
import manjunatha from "./photos/manjunatha.jpeg";
import kiran from "./photos/kiran.jpeg";
import basappa from "./photos/basappa.jpeg";
import nataraj from "./photos/nataraj.jpeg";
import onkarappa from "./photos/onkarappa.jpeg";

  

const Leaders: React.FC = () => {
  const { breakpoints } = useTheme();
  const matchMobileView = useMediaQuery(breakpoints.down("md"));
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      sx={{
        diaply: "flex",
        justifyContent: "space-between",
        margin: matchMobileView ? "0px" : "0 100px",
      }}
    >
      <Grid container spacing={2}>

        <Grid item xs={12} sm={matchMobileView ? 12 : 11}>
          <Paper
            elevation={12}
            sx={{
              backgroundSize: "cover",
              backgroundPosition: "center",
              padding: matchMobileView ? "5px" : "30px",
              minHeight: "1000px",
              marginLeft: matchMobileView ? "0px" : "55px",
              marginTop: matchMobileView ? "0px" : "50px",
              borderRadius: matchMobileView ? "10px" : "30px 30px 30px 30px",
              paddingRight: matchMobileView ? "0" : "60px",
            }}
          >


            <Box
              sx={{
                margin: matchMobileView ? "auto" : "0 0 0 120px",
                transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                transform: isHovered ? "scale(1.05)" : "scale(1)",
                boxShadow: isHovered ? "0 4px 8px rgba(0, 0, 0, 0.2)" : "none",
                borderRadius: "10px",
                cursor: "pointer",
                overflow: "hidden",
                animation: "fadeInFromBottom 0.5s ease-out",
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Card
                sx={{
                  maxWidth: 320,
                  borderRadius: "15px",
                  border: "none",
                  margin: "auto",
                  transition: "transform 0.3s ease-in-out",
                  transform: isHovered ? "scale(1.1)" : "scale(1)",
                }}
              >
                <Typography sx={{ textAlign: "center", padding: "15px", fontSize: "24px", color: "#ffffff", background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)", borderRadius: "10px 10px 0 0", fontFamily: "Arial, sans-serif", fontWeight: "bold" }}>
                  PRESIDENT
                </Typography>
                <CardMedia
                  component="img"
                  height="194"
                  image={president}
                  alt="President"
                  sx={{
                    maxWidth: "300px",
                    maxHeight: "300px",
                    width: "100%",
                    height: "100%",
                    margin: "auto",
                    borderRadius: "0 0 15px 15px",
                    transition: "transform 0.3s ease-in-out",
                    '&:hover': {
                      transform: "scale(1.1)"
                    }
                  }}
                />
                <CardContent sx={{ background: "#f0f0f0", borderRadius: "0 0 15px 15px" }}>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ textAlign: "center", fontSize: "16px", fontFamily: "Arial, sans-serif", fontWeight: "normal", fontStyle: "italic" }}
                  >
                    Mr Suresh G S
                  </Typography>
                </CardContent>
              </Card>
            </Box>
            <Divider sx={{ marginTop: "30px" }} />
            <Grid
              container
              spacing={2}
              sx={{
                marginTop: "30px",
                marginLeft: matchMobileView ? "0px" : "50px",
              }}
            >
              {/* vice president */}
              <Grid
                item
                xs={12}
                md={matchMobileView ? 12 : 3}
                sx={{
                  animation: "slideInFromTop 0.5s ease-out",
                }}
              >
                <Card
                  sx={{
                    maxWidth: "200px",
                    borderRadius: "15px",
                    border: "2px solid black",
                    margin: "auto",
                    width: "100%",
                    maxHeight: "320px",
                    height: "100%",
                    animation: "scaleIn 0.5s ease-out",
                  }}
                >
                  <Typography
                    sx={{
                      textAlign: "center",
                      padding: "15px",
                      fontSize: "18px",
                      fontFamily: "Arial, sans-serif",
                      fontWeight: "bold",
                    }}
                  >
                    VICE-PRESIDENT
                  </Typography>
                  <CardMedia
                    component="img"
                    height="194"
                    image={vicepresident}
                    alt="Vice President"
                    sx={{
                      maxWidth: "180px",
                      maxHeight: "200px",
                      width: "100%",
                      height: "100%",
                      margin: "auto",
                    }}
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ textAlign: "center", fontSize: "16px", fontFamily: "Arial, sans-serif" }}
                    >
                      Sri Sunil C M
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12}
                sx={{
                  animation: "slideInFromTop 0.5s ease-out",
                }}
                md={matchMobileView ? 12 : 3}>
                <Card
                  sx={{
                    maxWidth: "200px",
                    borderRadius: "15px",
                    border: "2px solid black",
                    margin: "auto",
                    width: "100%",
                    maxHeight: "320px",
                    height: "100%",
                    animation: "scaleIn 0.5s ease-out",

                  }}
                >
                  <Typography
                    sx={{
                      textAlign: "center",
                      padding: "15px",
                      fontSize: "18px",
                      fontFamily: "Arial, sans-serif",
                      fontWeight: "bold",
                    }}
                  >
                    General Secretary
                  </Typography>
                  <CardMedia
                    component="img"
                    height="194"
                    image={chief}
                    alt="Paella dish"
                    sx={{
                      maxWidth: "180px",
                      maxHeight: "200px",
                      width: "100%",
                      height: "100%",
                      margin: "auto",
                    }}
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ textAlign: "center", fontSize: "16px", fontFamily: "Arial, sans-serif" }}
                    >
                      Sri Amaresh
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12}
                sx={{
                  animation: "slideInFromTop 0.5s ease-out",
                }}
                md={matchMobileView ? 12 : 3}>
                <Card
                  sx={{
                    maxWidth: "200px",
                    borderRadius: "15px",
                    border: "2px solid black",
                    margin: "auto",
                    width: "100%",
                    maxHeight: "320px",
                    height: "100%",
                    animation: "scaleIn 0.5s ease-out",

                  }}
                >
                  <Typography
                    sx={{
                      textAlign: "center",
                      padding: "15px",
                      fontSize: "18px",
                      fontFamily: "Arial, sans-serif",
                      fontWeight: "bold",
                    }}
                  >
                    Joint Secretary
                  </Typography>
                  <CardMedia
                    component="img"
                    height="194"
                    image={joint}
                    alt="Paella dish"
                    sx={{
                      maxWidth: "180px",
                      maxHeight: "200px",
                      width: "100%",
                      height: "100%",
                      margin: "auto",
                    }}
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ textAlign: "center", fontSize: "16px", fontFamily: "Arial, sans-serif" }}
                    >
                      Smt.Harini S.C.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} 
               sx={{
                animation: "slideInFromTop 0.5s ease-out",
              }}
              md={matchMobileView ? 12 : 3}>
                <Card
                 sx={{
                  maxWidth: "200px",
                  borderRadius: "15px",
                  border: "2px solid black",
                  margin: "auto",
                  width: "100%",
                  maxHeight: "320px",
                  height: "100%",
                  animation: "scaleIn 0.5s ease-out",

                }}
                >
                  <Typography
                     sx={{
                      textAlign: "center",
                      padding: "15px",
                      fontSize: "16px",
                      fontFamily: "Arial, sans-serif",
                      fontWeight: "bold",
                    }}

                  >
                    Organising Secretary
                  </Typography>
                  <CardMedia
                    component="img"
                    height="194"
                    image={orgsec}
                    alt="Paella dish"
                    sx={{
                      maxWidth: "180px",
                      maxHeight: "200px",
                      width: "100%",
                      height: "100%",
                      margin: "auto",
                    }}
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ textAlign: "center", fontSize: "16px", fontFamily: "Arial, sans-serif" }}
                    >
                      Sri G.M. Indudhara
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12}
                              sx={{
                                animation: "slideInFromTop 0.5s ease-out",
                              }}
              
              md={matchMobileView ? 12 : 3}>
                <Card
                  sx={{
                    maxWidth: "200px",
                    borderRadius: "15px",
                    border: "2px solid black",
                    margin: "auto",
                    width: "100%",
                    maxHeight: "320px",
                    height: "100%",
                    animation: "scaleIn 0.5s ease-out",

                  }}

                >
                  <Typography
                    sx={{
                      textAlign: "center",
                      padding: "15px",
                      fontSize: "18px",
                      fontFamily: "Arial, sans-serif",
                      fontWeight: "bold",
                    }}

                  >
                    Treasurer
                  </Typography>
                  <CardMedia
                    component="img"
                    height="194"
                    image={treasurer}
                    alt="Paella dish"
                    sx={{
                      maxWidth: "180px",
                      maxHeight: "200px",
                      width: "100%",
                      height: "100%",
                      margin: "auto",
                    }}
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ textAlign: "center", fontSize: "16px", fontFamily: "Arial, sans-serif" }}
                    >
                      Sri Nagappa B L
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12}
                sx={{
                  animation: "slideInFromTop 0.5s ease-out",
                }}

              md={matchMobileView ? 12 : 3}>
                <Card
                  sx={{
                    maxWidth: "200px",
                    borderRadius: "15px",
                    border: "2px solid black",
                    margin: "auto",
                    width: "100%",
                    maxHeight: "320px",
                    height: "100%",
                    animation: "scaleIn 0.5s ease-out",

                  }}

                >
                  <Typography
                   sx={{
                    textAlign: "center",
                    padding: "15px",
                    fontSize: "18px",
                    fontFamily: "Arial, sans-serif",
                    fontWeight: "bold",
                  }}

                  >
                    Legal Advisor
                  </Typography>
                  <CardMedia
                    component="img"
                    height="194"
                    image={nataraj}
                    alt="Paella dish"
                    sx={{
                      maxWidth: "180px",
                      maxHeight: "200px",
                      width: "100%",
                      height: "100%",
                      margin: "auto",
                    }}
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ textAlign: "center", fontSize: "16px", fontFamily: "Arial, sans-serif" }}
                    >
                      CA Natraj B.C.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            <Grid item xs={12} 
               sx={{
                animation: "slideInFromTop 0.5s ease-out",
              }}

              md={matchMobileView ? 12 : 3}>
                <Card
                   sx={{
                    maxWidth: "200px",
                    borderRadius: "15px",
                    border: "2px solid black",
                    margin: "auto",
                    width: "100%",
                    maxHeight: "320px",
                    height: "100%",
                    animation: "scaleIn 0.5s ease-out",

                  }}

                >
                  <Typography
                    sx={{
                      textAlign: "center",
                      padding: "15px",
                      fontSize: "18px",
                      fontFamily: "Arial, sans-serif",
                      fontWeight: "bold",
                    }}

                  >
                    Commitee Member
                  </Typography>
                  <CardMedia
                    component="img"
                    height="194"
                    image={onkarappa}
                    alt="Paella dish"
                    sx={{
                      maxWidth: "180px",
                      maxHeight: "200px",
                      width: "100%",
                      height: "100%",
                      margin: "auto",
                    }}
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ textAlign: "center", fontSize: "16px", fontFamily: "Arial, sans-serif" }}
                    >
                      Sri S.R. Onkarappa
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12}
               sx={{
                animation: "slideInFromTop 0.5s ease-out",
              }}

               md={matchMobileView ? 12 : 3}>
                <Card
                  sx={{
                    maxWidth: "200px",
                    borderRadius: "15px",
                    border: "2px solid black",
                    margin: "auto",
                    width: "100%",
                    maxHeight: "320px",
                    height: "100%",
                    animation: "scaleIn 0.5s ease-out",

                  }}

                >
                  <Typography
                    sx={{
                      textAlign: "center",
                      padding: "15px",
                      fontSize: "18px",
                      fontFamily: "Arial, sans-serif",
                      fontWeight: "bold",
                    }}

                  >
                    Commitee Member
                  </Typography>
                  <CardMedia
                    component="img"
                    height="194"
                    image={nagabhishan}
                    alt="Paella dish"
                    sx={{
                      maxWidth: "180px",
                      maxHeight: "200px",
                      width: "100%",
                      height: "100%",
                      margin: "auto",
                    }}
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ textAlign: "center", fontSize: "16px", fontFamily: "Arial, sans-serif" }}                    >
                      Sri K. Nagabhushan
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12}
                sx={{
                  animation: "slideInFromTop 0.5s ease-out",
                }}

              md={matchMobileView ? 12 : 3}>
                <Card
  sx={{
    maxWidth: "200px",
    borderRadius: "15px",
    border: "2px solid black",
    margin: "auto",
    width: "100%",
    maxHeight: "320px",
    height: "100%",
    animation: "scaleIn 0.5s ease-out",

  }}
                >
                  <Typography
                   sx={{
                    textAlign: "center",
                    padding: "15px",
                    fontSize: "18px",
                    fontFamily: "Arial, sans-serif",
                    fontWeight: "bold",
                  }}

                  >
                    Commitee Member
                  </Typography>
                  <CardMedia
                    component="img"
                    height="194"
                    image={kiran}
                    alt="Paella dish"
                    sx={{
                      maxWidth: "180px",
                      maxHeight: "200px",
                      width: "100%",
                      height: "100%",
                      margin: "auto",
                    }}
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ textAlign: "center", fontSize: "16px", fontFamily: "Arial, sans-serif" }}                    >
                      Sri Dr Kiran Kumar
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            <Grid item xs={12} 
              sx={{
                animation: "slideInFromTop 0.5s ease-out",
              }}
              md={matchMobileView ? 12 : 3}>
                <Card
                 sx={{
                  maxWidth: "200px",
                  borderRadius: "15px",
                  border: "2px solid black",
                  margin: "auto",
                  width: "100%",
                  maxHeight: "320px",
                  height: "100%",
                  animation: "scaleIn 0.5s ease-out",

                }}

                >
                  <Typography
                     sx={{
                      textAlign: "center",
                      padding: "15px",
                      fontSize: "18px",
                      fontFamily: "Arial, sans-serif",
                      fontWeight: "bold",
                    }}

                  >
                    Commitee Member
                  </Typography>
                  <CardMedia
                    component="img"
                    height="194"
                    image={mallikarjuna}
                    alt="Paella dish"
                    sx={{
                      maxWidth: "180px",
                      maxHeight: "200px",
                      width: "100%",
                      height: "100%",
                      margin: "auto",
                    }}
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ textAlign: "center", fontSize: "16px", fontFamily: "Arial, sans-serif" }}                    >
                      Sri Dr. Mallikarjuna Biradar
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item 
               sx={{
                animation: "slideInFromTop 0.5s ease-out",
              }}

              xs={12} md={matchMobileView ? 12 : 3}>
                <Card
                   sx={{
                    maxWidth: "200px",
                    borderRadius: "15px",
                    border: "2px solid black",
                    margin: "auto",
                    width: "100%",
                    maxHeight: "320px",
                    height: "100%",
                    animation: "scaleIn 0.5s ease-out",

                  }}

                >
                  <Typography
                    sx={{
                      textAlign: "center",
                      padding: "15px",
                      fontSize: "18px",
                      fontFamily: "Arial, sans-serif",
                      fontWeight: "bold",
                    }}

                  >
                    Commitee Member
                  </Typography>
                  <CardMedia
                    component="img"
                    height="194"
                    image={manjunatha}
                    alt="Paella dish"
                    sx={{
                      maxWidth: "180px",
                      maxHeight: "200px",
                      width: "100%",
                      height: "100%",
                      margin: "auto",
                    }}
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ textAlign: "center", fontSize: "16px", fontFamily: "Arial, sans-serif" }}
                    >
                      Sri Dr Manjunatha L H
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12}
              sx={{
                animation: "slideInFromTop 0.5s ease-out",
              }}

              md={matchMobileView ? 12 : 3}>
                <Card
                  sx={{
                    maxWidth: "200px",
                    borderRadius: "15px",
                    border: "2px solid black",
                    margin: "auto",
                    width: "100%",
                    maxHeight: "320px",
                    height: "100%",
                    animation: "scaleIn 0.5s ease-out",

                  }}

                >
                  <Typography
                     sx={{
                      textAlign: "center",
                      padding: "15px",
                      fontSize: "18px",
                      fontFamily: "Arial, sans-serif",
                      fontWeight: "bold",
                    }}

                  >
                    Commitee Member
                  </Typography>
                  <CardMedia
                    component="img"
                    height="194"
                    image={basappa}
                    alt="Paella dish"
                    sx={{
                      maxWidth: "180px",
                      maxHeight: "200px",
                      width: "100%",
                      height: "100%",
                      margin: "auto",
                    }}
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ textAlign: "center", fontSize: "16px", fontFamily: "Arial, sans-serif" }}                    >
                      Sri Basappa
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12}
                sx={{
                  animation: "slideInFromTop 0.5s ease-out",
                }}

              md={matchMobileView ? 12 : 3}>
                <Card
                 sx={{
                  maxWidth: "200px",
                  borderRadius: "15px",
                  border: "2px solid black",
                  margin: "auto",
                  width: "100%",
                  maxHeight: "320px",
                  height: "100%",
                  animation: "scaleIn 0.5s ease-out",

                }}

                >
                  <Typography
                    sx={{
                      textAlign: "center",
                      padding: "15px",
                      fontSize: "18px",
                      fontFamily: "Arial, sans-serif",
                      fontWeight: "bold",
                    }}
                  >
                    Commitee Member
                  </Typography>
                  <CardMedia
                    component="img"
                    height="194"
                    image={niranjan}
                    alt="Paella dish"
                    sx={{
                      maxWidth: "180px",
                      maxHeight: "200px",
                      width: "100%",
                      height: "100%",
                      margin: "auto",
                    }}
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ textAlign: "center", fontSize: "16px", fontFamily: "Arial, sans-serif" }}                    >
                      Sri Niranjan A M
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>


            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Leaders;
