import React from 'react';
import {AppBar, Box, Button, styled, Toolbar, Typography} from "@mui/material";

const ColorButton = styled(Button)(({ theme }) => ({
    backgroundColor: "#5865F2",
    color: "#fff",
    width: "170px",
    height: "35px",
    borderRadius: "20px",

    '&:hover': {
        backgroundColor: '#4c58cf',
        borderColor: '#0062cc',
        boxShadow: 'none',
    }
}));

const Header = () => {
    const [isConnect, setIsConnect] = React.useState(false);

    return (
        <AppBar sx={{ bgcolor: "#2C2F33", width: "100%", position: "static" }}>
            <Toolbar>
                <Typography variant="h2">
                    POOL
                </Typography>


                {isConnect ? (<Box sx={{ display: "flex", gap: "20px", paddingLeft: "1350px" }}>
                    <Typography variant="h6">
                        English
                    </Typography>

                    <Typography variant="h6">
                        Help
                    </Typography>

                    <ColorButton>
                        App
                    </ColorButton>
                </Box>) : (
                    <Box sx={{ marginLeft: "auto", textTransform: "lowercase" }}>
                        <ColorButton>
                            Connect wallet
                        </ColorButton>
                    </Box>
                )}


            </Toolbar>
        </AppBar>
    )
};

export default Header;