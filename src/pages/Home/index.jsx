import React from 'react';
import {Box, Button, Card, CardContent, Link, styled, Typography} from "@mui/material";
import Header from "../../components/Header";
import redditLogo from "../../assets/images/reddit.png";
import twitterLogo from "../../assets/images/twitter.png";
import discordLogo from "../../assets/images/discord.png";
import {NavLink} from "react-router-dom";

const ColorButton = styled(Button)(({ theme }) => ({
    backgroundColor: "#5865F2",
    color: "#fff",
    width: "300px",
    height: "35px",
    borderRadius: "20px",

    '&:hover': {
        backgroundColor: '#4c58cf',
        borderColor: '#0062cc',
        boxShadow: 'none',
    }
}));

const Home = () => {
    return (
            <Box sx={{ backgroundColor: "#202225",}}>

                <Box sx={{
                    display: 'flex', alignItems: "center", justifyContent: "center", alignContent: "center",
                    width: "100%", height: "57vh", paddingTop: "160px"
                }}>

                    <Box sx={{  marginLeft: "auto" }}>
                        <Typography variant="h2" sx={{ color: "#fff" }}>
                            WIN BY SAVING
                        </Typography>
                        <Typography variant="body1" gutterBottom
                                    sx={
                                        { color: "#fff", marginTop: "10px", fontSize: "18px", lineHeight: "39px", fontWeight: "500",}}>
                            PoolTogether is a crypto-powered savings
                            <Typography variant="body1" sx={{ fontSize: "18px", lineHeight: "39px", fontWeight: "500",}}>
                                protocol based on Premium Bonds. Save
                            </Typography>
                            money and have a chance to win every day.
                        </Typography>

                        <NavLink to='/main'>
                            <ColorButton>
                                Start saving and winning!
                            </ColorButton>
                        </NavLink>
                    </Box>

                    <Box sx={{ marginLeft: "auto", marginRight: "10em", width: "30%"}}>
                        <Card
                              sx={{ display: "flex", textAlign: "center",
                                  backgroundColor: "#36393F", borderRadius: "50px", }}>
                            <CardContent sx={{ height: "100%", width: "100%" }}>
                                <Typography variant="h4" sx={{ color: "#fff" }}>
                                    Currently
                                </Typography>

                                <Typography variant="h2" sx={{ color: "#fff" }}>
                                    $29,400
                                </Typography>

                                <Typography variant="h4" sx={{ color: "#fff" }}>
                                    In weekly prizes
                                </Typography>

                                <Typography variant="subtitle1" sx={{ color: "#fff" }}>
                                    Across all v3 and v4 pools.
                                </Typography>
                            </CardContent>
                        </Card>
                        <Box sx={{ display: "flex", paddingTop: "10px" }}>
                            <Link href="https://www.reddit.com/">
                                <img src={redditLogo} alt="reddit Link"/>
                            </Link>

                            <Link href="https://www.twitter.com/">
                                <img src={twitterLogo} alt="twitter Link"/>
                            </Link>

                            <Link href="https://www.discord.com/">
                                <img src={discordLogo} alt="discord Link"/>
                            </Link>
                        </Box>
                    </Box>
                </Box>

                <Box sx={{ backgroundColor: "#36393F", color: "#fff", minHeight: "140px", textAlign: "center", paddingTop: "20px" }}>
                    <Typography variant="h3">
                        HAPPIEST WINNERS!
                    </Typography>
                </Box>

                <Box sx={{ height: "77px" }} />
            </Box>

    )
}

export default Home;