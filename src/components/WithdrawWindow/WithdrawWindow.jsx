import React from 'react';
import {Box, Typography, Button, styled, CardMedia} from "@mui/material";
import Layout from '../Layout';

const ColorButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#5865F2",
  color: "#fff",
  width: "364px",
  height: "65px",
  borderRadius: "20px",
  textTransform: "none",
  fontSize: "32px",

  '&:hover': {
    backgroundColor: '#4c58cf',
    borderColor: '#0062cc',
    boxShadow: 'none',
  }
}));

function WithdrawWindow({deposite, amount, logo}) {
  return (
      <Box sx={{ display: 'flex', flexDirection: "column", width: "76.7%", minHeight: "560px", margin: "102px auto 0", bgcolor: "#36393F", borderRadius: "20px",}}>
        <Typography variant="subtitle1" sx={{ color: "#fff", fontSize: "20px", fontFamily: "Nunito", fontWeight: "500", mt: "103px", ml: "182px" }}>
          Amount
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between", width: "73.8%", height: "128px",
              borderRadius: "20px",
              backgroundColor: "#40444B", 
              mt: "12px", ml: "159px", padding: "32px 91px 32px 70px", boxSizing: "border-box"}}>
          <CardMedia
            component="img"
            height="64px"
            image={logo}
            alt="Crypto logo"
            sx={{width: "64px", height: "64px"}}
          />
          <Typography variant="subtitle1" sx={{ fontSize: "48px", color: "#fff", fontFamily: "Nunito", fontWeight: "500"}}>
            {amount}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", width: "73.8%", height: "64px",
              borderRadius: "20px",
              backgroundColor: "#40444B", 
              mt: "12px", ml: "159px", padding: "13px 91px 13px 70px", boxSizing: "border-box"}}>
          <Typography variant="subtitle1" sx={{ fontSize: "24px", color: "#fff", fontFamily: "Nunito", fontWeight: "500"}}>
            Your Deposite:
          </Typography>
          <Typography variant="subtitle1" sx={{ fontSize: "24px", color: "#fff", fontFamily: "Nunito", fontWeight: "500"}}>
            {deposite}
          </Typography>
        </Box>
        <ColorButton sx={{ alignSelf: "center", mt: "75px"}}>
          Withdraw
        </ColorButton>
      </Box> 
  )
}
export default WithdrawWindow;