import React from 'react';
import {useParams} from "react-router-dom";
import DepositWindow from "../../components/DepositeWindow";
import Layout from "../../components/Layout";
import { Pools } from "../../assets/pools";

const DepositWindowPage = () => {
    const params = useParams();
    const prop = Pools[params.id];

    return (
        <Layout>
            <DepositWindow title={prop.title} price={prop.prize} logo={prop.logo} />
        </Layout>

    )
}

export default DepositWindowPage;