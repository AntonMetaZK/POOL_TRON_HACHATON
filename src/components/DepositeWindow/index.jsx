import React from 'react';
import {Box, Button, CardMedia, Input, InputBase, styled, TextField, Typography} from "@mui/material";


const ColorButton = styled(Button)(({ theme }) => ({
    backgroundColor: "#5865F2",
    color: "#fff",
    width: "220px",
    height: "30px",
    borderRadius: "20px",
    marginLeft: "100px",
    marginTop: "20px",

    '&:hover': {
        backgroundColor: '#4c58cf',
        borderColor: '#0062cc',
        boxShadow: 'none',
    }
}));



const DepositWindow = ({ logo, title, price, titleCr }) => {
    return (
        <Box sx={{ width: "1100px", height: "770px",
            marginTop: "50px", bgcolor: "#36393F", borderRadius: "20px",}}>



            <Box sx={{ display: "flex", gap: "35px", flexDirection: "row" }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={logo}
                    alt="Paella dish"
                    sx={{ width: "140px", marginTop: "-40px", marginLeft: "-60px" }}
                />

                <Typography variant="h4" sx={{ color: "#fff", fontFamily: "Nunito", fontWeight: "500", paddingTop: "10px" }}>
                    {title}
                </Typography>
            </Box>

            <Box
                sx={{ display: "flex", alignItems: "center",
                    justifyContent: "center", color: "#fff", paddingTop: "30px", paddingRight: "30px"  }}>
                <Typography variant='h3' sx={{ textAlign: "center", fontFamily: "Nunito", }}>
                    $ {price}
                </Typography>

            </Box>
            <Typography variant="h5" sx={{ color: "#fff", alignItems: "center", textAlign: "center", paddingRight: "30px" }}>
                00 : 01 : 33 : 07

                <Box sx={{ display: "flex" }}>
                    <Typography variant="subtitle2" sx={{ display: "flex", paddingLeft: "460px", fontSize: "11px"  }}>
                        DAY
                    </Typography>
                    <Typography variant="subtitle2" sx={{ display: "flex", paddingLeft: "25px", fontSize: "11px"  }}>
                        HR
                    </Typography>
                    <Typography variant="subtitle2" sx={{ display: "flex", paddingLeft: "25px", fontSize: "11px"  }}>
                        MIN
                    </Typography>
                    <Typography variant="subtitle2" sx={{ display: "flex", paddingLeft: "25px", fontSize: "11px"  }}>
                        SEC
                    </Typography>
                </Box>
            </Typography>

            <Typography variant="subtitle2"
                        sx={{ alignItems: "center", textAlign: "center", color: "#fff", paddingRight: "780px", paddingTop: "50px" }}>
                Ammount BTC
            </Typography>

            <Box sx={{ textAlign: "center"  }}>
                <Box placeholder="0.0"  component="Input"
                           sx={{ width: "900px", height: "130px",
                               borderRadius: "50px",
                               backgroundColor: "#40444B", border: "10px",
                               fontSize: "38px", color: "#fff"}} />
                <Box
                           sx={{ width: "900px", height: "60px",
                               borderRadius: "50px",
                               backgroundColor: "#40444B", border: "10px",
                               color: "#fff", marginTop: "20px", marginLeft: "100px"}}>
                    <Typography sx={{ paddingTop: "20px", marginRight: "700px" }}>
                        Daily winning odds:
                    </Typography>

                    <Typography sx={{ marginLeft: "750px", marginTop: "-25px" }}>
                        0.00%
                    </Typography>
                </Box>




            </Box>

            <ColorButton>
                Deposit {titleCr}
            </ColorButton>

        </Box>
    )
};

export default DepositWindow;