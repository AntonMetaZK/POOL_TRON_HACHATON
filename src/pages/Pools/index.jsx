import React from 'react';
import Layout from "../../components/Layout";
import Deposit from "../../components/Deposite";
import { Pools } from "../../assets/pools";
import BitcoinLogo from "../../assets/images/Bitcoin 1.png";
import usddLogo from "../../assets/images/usdd-usdd-logo 1.png";
import usdLogo from "../../assets/images/usd-coin-usdc-logo 1.png";



const Pool = () => {
    return (
        <Layout>
            {Pools.map((item, i) => (
                <Deposit key={i} title={item.title} price={item.prize} logo={item.logo} id={i} />
            ))}
        </Layout>
    )
}

export default Pool;