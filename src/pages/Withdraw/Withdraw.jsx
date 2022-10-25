import React from 'react';
import {useParams} from "react-router-dom";
import Layout from "../../components/Layout";
import { Pools } from "../../assets/pools";
import WithdrawWindow from '../../components/WithdrawWindow/WithdrawWindow'

const Withdraw = () => {
    const params = useParams();
    const prop = Pools[params.id];

    return (
        <Layout>
            <WithdrawWindow deposite={prop.deposite} amount={prop.amount} logo={prop.logo} />
        </Layout>

    )
}

export default Withdraw;