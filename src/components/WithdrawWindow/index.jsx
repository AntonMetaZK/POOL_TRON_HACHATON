import React from 'react';
import {Box, Typography} from "@mui/material";

const Withdraw = ({ logo }) => {

    return (
        <Box sx={{ width: "50%", height: "40vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
            marginTop: "50px", bgcolor: "#36393F", borderRadius: "20px",}}>

            <Typography variant="subtitle1"
                        sx={{ alignItems: "center", color: "#fff", marginRight: "auto", marginLeft: "8em" }}>
                Ammount
            </Typography>

            <Box sx={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center"  }}>
                <Box placeholder="0.0"  component="Input"
                     sx={{ width: "100%", height: "10vh",
                         borderRadius: "20px",
                         backgroundColor: "#40444B", border: "30px",
                         fontSize: "38px", color: "#fff", outline: "none", paddingLeft: "50px"}} />
                <Box
                    sx={{ width: "100%", height: "5vh",
                        borderRadius: "20px", textAlign: "center",
                        backgroundColor: "#40444B", border: "10px",
                        color: "#fff", marginTop: "15px", paddingLeft: "50px"}}>
                    <Typography sx={{ marginTop: "10px", marginRight: "80%" }}>
                        Your Deposit:
                    </Typography>

                    <Typography sx={{ marginLeft: "80%", marginTop: "-25px" }}>
                        0.00
                    </Typography>
                </Box>

                <Box>
                    <ColorButton sx={{ marginRight: "90px" }}>
                        Withdraw
                    </ColorButton>
                </Box>
            </Box>
        </Box>
    )
}

export default Withdraw;