import React from 'react';
import {Box, Button, CardMedia, Divider, styled, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";

const ColorButton = styled(Button)(({ theme }) => ({
    backgroundColor: "#5865F2",
    color: "#fff",
    width: "260px",
    height: "50px",
    borderRadius: "20px",
    marginLeft: "620px",
    marginTop: "20px",

    '&:hover': {
        backgroundColor: '#4c58cf',
        borderColor: '#0062cc',
        boxShadow: 'none',
    }
}));


const Deposit = ({ logo, title, price, id }) => {
  return (
      <Box sx={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
          <Box
              sx={{ width: "900px", height: "250px",
                  marginTop: "15px", bgcolor: "#36393F", borderRadius: "20px", }}>
              <Box sx={{ display: "flex", gap: "30px", flexDirection: "row" }}>
                  <CardMedia
                      component="img"
                      height="35"
                      image={logo}
                      alt="logo"
                      sx={{ width: "35px" }}
                  />
                  <Typography variant="body1" sx={{ color: "#fff", fontFamily: "Nunito", fontWeight: "500", paddingTop: "10px" }}>
                       {title} Pool
                  </Typography>
              </Box>

              <Box
                  sx={{ display: "flex", alignItems: "center",
                      justifyContent: "center", color: "#fff", paddingTop: "30px", paddingRight: "200px"  }}>
                  <Typography variant='h3' sx={{ textAlign: "center", fontFamily: "Nunito", }}>
                      $ {price}
                  </Typography>

              </Box>
              <Typography variant='subtitle1'
                          sx={{ alignItems: "center", textAlign: "center",
                              fontFamily: "Nunito", fontWeight: "500", color: "#fff", paddingRight: "200px"   }}>
                  In weekly prizes
              </Typography>

              <Divider flexItem
                       sx={{ width: "130px", border: "2px solid #2F3136",
                           transform: "rotate(90.33deg)", marginLeft: "500px", marginTop: "-30px"}} />



              <Typography variant="h4" sx={{ color: "#fff", alignItems: "center", textAlign: "center", marginLeft: "560px", marginTop: "-60px" }}>
                  00 : 01 : 33 : 07

                  <Box sx={{ display: "flex" }}>
                      <Typography variant="subtitle2" sx={{ display: "flex", paddingLeft: "65px", fontSize: "12px"  }}>
                          DAY
                      </Typography>
                      <Typography variant="subtitle2" sx={{ display: "flex", paddingLeft: "45px", fontSize: "12px"  }}>
                          HR
                      </Typography>
                      <Typography variant="subtitle2" sx={{ display: "flex", paddingLeft: "40px", fontSize: "12px"  }}>
                          MIN
                      </Typography>
                      <Typography variant="subtitle2" sx={{ display: "flex", paddingLeft: "40px", fontSize: "12px"  }}>
                          SEC
                      </Typography>
                  </Box>
              </Typography>
              <NavLink to={`${id}`} style={{ textDecoration: "none" }}>
                  <ColorButton>
                      Deposit
                  </ColorButton>
              </NavLink>

          </Box>
      </Box>

  )
};

export default Deposit;