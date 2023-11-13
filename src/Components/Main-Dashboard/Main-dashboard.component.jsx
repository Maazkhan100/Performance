import React, { useState } from 'react';

import './Main-dashboard.styles.css';

const MainDashboard = () => {

    const [ selectedBlockchain, setSelectedBlockchain ] = useState('');
    const [ endPoint, setEndPoint ] = useState('');
    const [ metric, setSelectedMetric ] = useState('');
    const [ selectedSmartContract, setSelectedSmartContract ] = useState('');
    const [ transactions, setTransactions ] = useState('');

    const handleBlockchainChange = (e) => {
        setSelectedBlockchain(e.target.value);
    };

    const handleMetricChange = (e) => {
        setSelectedMetric(e.target.value);
    };

    const handleContractChange = (e) => {
        setSelectedSmartContract(e.target.value);
    };

    const handleChange = (e) => {
        setEndPoint(e.target.value)
    };

    const handleTransactionsChange = (e) => {
        setTransactions(e.target.value);
    };

    return (
        <div className="card-main">
            <label>Select a Blockchain: </label>
            <select value={ selectedBlockchain } onChange={ handleBlockchainChange }>
                <option value="polygon">Polygon-Mumbai</option>
                <option value="arbitum">Arbitum-Goerli</option>
                <option value="optimism">Optimism-Goerli</option>
                <option value="linea">Linea-Goerli</option>
                <option value="sepolia">Sepolia</option>
            </select><br></br><br></br>
            <div className="row">
                <div className="col-25">
                    <label>Enter end point API key</label>
                </div>
                <div className="col-75">
                    <input
                        type = "text"
                        name = "endPoint"
                        value = { endPoint }
                        onChange = { handleChange }
                        placeholder="Type Endpoint API key"
                        required
                    />
                </div>
            </div><br></br><br></br>
            <label>Select a Performance metric: </label>
            <select value={ metric } onChange={ handleMetricChange }>
                <option value="latency">Latency</option>
                <option value="throughput">Throughput</option>
                <option value="both">All</option>
            </select><br></br><br></br>
            {(metric === "throughput" || metric === "both") && (
                <div>
                    <label>No. of transactions: </label>
                    <select value={ transactions } onChange={ handleTransactionsChange }>
                        <option value="ten">10</option>
                        <option value="hundred">100</option>
                        <option value="five">500</option>
                    </select><br></br><br></br>
                </div>
            )}
            <label>Default smart contracts: </label>
            <select value={ selectedSmartContract } onChange={ handleContractChange }>
                <option value="create">Create User</option>
                <option value="issue">Issue money</option>
                <option value="transfer">Transfer Money</option>
                <option value="get">Get user</option>
            </select><br></br><br></br>
        </div>
    )
}

export default MainDashboard;
