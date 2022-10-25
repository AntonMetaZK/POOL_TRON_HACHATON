import React from 'react';
import {useParams} from "react-router-dom";
import DepositWindow from "../../components/DepositeWindow";
import Layout from "../../components/Layout";
import { Pools } from "../../assets/pools";
import {Box, Button, styled, Typography} from "@mui/material";


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

const DepositWindowPage = () => {
    const params = useParams();
    const prop = Pools[params.id];

    return (
        <Layout>
            <DepositWindow title={prop.title} price={prop.prize} logo={prop.logo}/>
        </Layout>

    )
}

export default DepositWindowPage;