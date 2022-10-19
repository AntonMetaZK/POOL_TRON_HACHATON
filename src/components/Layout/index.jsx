import React from 'react';
import Header from "../Header";
import {Box, styled, Tab, Tabs, Typography} from "@mui/material";
import Deposit from "../../components/Deposite/index";
import BitcoinLogo from "../../assets/images/Bitcoin 1.png";
import usddLogo from "../../assets/images/usdd-usdd-logo 1.png";
import usdLogo from "../../assets/images/usd-coin-usdc-logo 1.png";
import DepositWindow from "../DepositeWindow";



function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const StyledTabs = styled((props) => (
    <Tabs
        {...props}
        TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
))({
    '& .MuiTabs-indicator': {
        display: 'hidden',
        justifyContent: 'top',
        backgroundColor: 'transparent',
    },
    '& .MuiTabs-indicatorSpan': {
        borderRadius: "0px 60px 60px 0px",
        height: "50px",
        width: '10px',
        backgroundColor: '#D9D9D9',
    },
});



const Layout = () => {
    const [value, setValue] = React.useState(2);
    const handleChange = (event, value) => {
        setValue(value);
    }

    return (
        <Box>
            <Header />
            <Box sx={{ bgcolor: "#2C2F33",
                display: 'flex', height: "100%", paddingLeft: "100px" }} >
                <StyledTabs
                    orientation="vertical"
                    variant="standard"
                    textColor="contrastText"
                    value={value}
                    onChange={handleChange}
                    sx={{ marginRight: "50px", paddingTop: "140px", }}
                >


                    <Tab label="POOL"  sx={{ color: "#fff", fontSize: "22px" }} {...a11yProps(0)}/>
                    <Tab label="Account" sx={{ color: "#fff", fontSize: "22px" }} {...a11yProps(1)}/>
                    <Tab label="prizes" sx={{ color: "#fff", fontSize: "22px" }}{...a11yProps(2)}/>
                </StyledTabs>

                <Box
                    sx={{ width: "2040px", height: "897px",
                        bgcolor: "#202225", borderRadius: "60px 0px 0px 0px", marginLeft: "130px",
                        display: "flex", justifyContent: "center"}}>

                    <TabPanel value={value} index={0}>
                            <Deposit logo={BitcoinLogo} title={"BTC Pool"} price={"228,000"}/>
                             <Deposit logo={usddLogo} title={"USDD Pool"} price={"420,690"} />
                             <Deposit logo={usdLogo} title={"USD Pool"} price={"1,337"} />

                        { // <DepositWindow logo={BigBitcoin} title={"BTC Pool"} price={"228,000"} titleCr="BTC" />
                             }


                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        Item Two
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        Item Three
                    </TabPanel>
                </Box>
            </Box>
        </Box>
    )
}

export default Layout;