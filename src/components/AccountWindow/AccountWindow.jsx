import React from 'react';
import {Box, Typography} from "@mui/material";

function AccountWindow (props) {
    return (
        <Box sx={{ width: "1220px", height: "810px", marginTop: "102px", bgcolor: "#36393F", borderRadius: "20px",}}>
          <Typography variant="h2" sx={{ color: "#fff", fontSize: "64px", fontFamily: "Nunito", fontWeight: "500", paddingTop: "10px", marginLeft: "33px" }}>
            {props.title}
          </Typography>
          <Typography variant="h3" sx={{ color: "#fff", fontSize: "24px", fontFamily: "Nunito", fontWeight: "500", paddingTop: "21px", marginLeft: "33px", textTransform: "uppercase" }}>
            {props.subtitle}
          </Typography>
          <Typography variant="subtitle2"
            sx={{ color: "#fff", ml: "192px", mt: "40px", mb: '9px' }}>
              {props.summaryName}
          </Typography>    
          <Box
            sx={{ display: "flex", flexDirection: "column", justifyContent: "center", width: "900px", height: "120px",
              borderRadius: "20px",
              backgroundColor: "#40444B", 
              mt: "9px", ml: "159px"}}>
            <Typography variant='subtitle1' sx={{ fontSize: "48px", color: "#FFFFFF", ml: "74px"}}>
              $ {props.summary}
            </Typography>
          </Box>
          {props.children}
        </Box>
    )
};

export default AccountWindow;