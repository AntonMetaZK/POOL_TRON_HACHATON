import React from 'react';
import Layout from '../../components/Layout';
import AccountWindow from '../../components/AccountWindow/AccountWindow';
import  { winnings } from "../../assets/pools";
import { Typography, Button, styled, Box } from '@mui/material';

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

function Prize() {
  return (
    <Layout
    >
      <AccountWindow 
        title='My Winnings'
        subtitle='Your prizes are collected here'
        summaryName='Winnigs'
        summary={winnings}
      >
        { winnings !== 0 ? 
          <ColorButton sx={{m: "40px auto 58px "}}>
            Claim!
          </ColorButton>
        :
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
          <Typography variant="subtitle1" sx={{ fontSize: "32px", color: "#fff", fontFamily: "Nunito", fontWeight: "500" }}>
            You have yet to win
          </Typography>
          <Typography variant="subtitle1" sx={{ fontSize: "32px", color: "#fff", fontFamily: "Nunito", fontWeight: "500", mb: "54px"}}>
            Keep your deposits in the pools to win!
          </Typography>
        </Box>
      }
      </AccountWindow>
    </Layout>
  )
}
export default Prize;