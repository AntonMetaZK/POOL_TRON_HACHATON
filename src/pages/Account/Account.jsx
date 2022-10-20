import React from 'react';
import Layout from '../../components/Layout';
import AccountWindow from '../../components/AccountWindow/AccountWindow';
import { assets, winnigs, Pools } from "../../assets/pools";
import {Box, Typography, CardMedia, Button, styled} from '@mui/material';

const ColorButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#5865F2",
  color: "#fff",
  width: "177px",
  height: "33px",
  borderRadius: "20px",

  '&:hover': {
    backgroundColor: '#4c58cf',
    borderColor: '#0062cc',
    boxShadow: 'none',
  }
}));


function Account() {
  return (
    <Layout>
      <AccountWindow 
        title='My Account'
        subtitle='account overview'
        summaryName='Assets'
        summary={assets}
      >
        <Typography variant="subtitle2"
          sx={{ color: "#fff", ml: "192px", mt: "40px" }}>
          Deposits
        </Typography>
        <Box sx={{ width: "900px", height: "300px",
          boxSizing: "border-box",
          borderRadius: "20px",
          backgroundColor: "#40444B", 
          mt: "9px", ml: "159px",
          padding: "55px 53px 55px 101px"
          }}>
          {Pools.map((item, i) => (        
            <Box key={i} sx={{ width: "100%",
              display: "flex", justifyContent: "space-between",
              }}>
              <Box sx={{ display: "flex"}}>
                <CardMedia
                  component="img"
                  height="40px"
                  image={item.logo}
                  alt="Crypto logo"
                  sx={{width: "40px", height: "40px", alignSelf: "center"}}
                />
                <Typography variant="subtitle1" sx={{ fontSize: "32px", color: "#fff", fontFamily: "Nunito", fontWeight: "500", ml: "30px", verticalAlign : "center"}}>
                  {item.title} Pool
                </Typography>
              </Box>
              <Box sx={{ display: "flex"}}>
                <Typography variant="subtitle1" sx={{ fontSize: "32px", color: "#fff", fontFamily: "Nunito", fontWeight: "500", mr: "36px"}}>
                  ${item.deposite}
                </Typography>
                <ColorButton sx={{alignSelf: "center"}}>
                  Withdraw
                </ColorButton>
              </Box>
            </Box>
          ))}
          <Box></Box>
          <Box></Box>
        </Box>
      </AccountWindow>
    </Layout>
  )
}

export default Account;