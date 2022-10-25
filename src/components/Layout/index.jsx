import React from 'react';
import {Box, Typography} from "@mui/material";
import {Link, NavLink} from "react-router-dom";



const Layout = ({children}) => {



    return (
            <Box sx={{ bgcolor: "#2C2F33",
                display: 'flex', height: "100%", width: "100%" }}>

                <Box sx={{ display: "flex", flexDirection: "column", paddingTop: "175px", marginLeft: "60px", width: "10%"}}>
                    <nav>
                        <NavLink to='/pools' style={{ textDecoration: "none" }}>
                            <Typography variant='h5' sx={{ marginTop: "10px", fontSize: "30px", color: "#fff"}}>
                                POOLS
                            </Typography>
                        </NavLink>


                        <NavLink to='/account' style={{ textDecoration: "none" }}>
                            <Typography variant='h5' sx={{ marginTop: "10px", fontSize: "30px", color: "#fff"}}>
                                ACCOUNT
                            </Typography>
                        </NavLink>

                        <NavLink to='/prize' style={{ textDecoration: "none" }}>
                            <Typography variant='h5' sx={{ marginTop: "10px", fontSize: "30px", color: "#fff"}}>
                                PRIZE
                            </Typography>
                        </NavLink>
                    </nav>
                </Box>

                <Box
                    sx={{ width: "100%", minHeight: "897px", height: "100%",
                        bgcolor: "#202225", borderRadius: "60px 0px 0px 0px", marginLeft: "110px",
                        display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
                    {children}

                </Box>
            </Box>

    )
}

export default Layout;