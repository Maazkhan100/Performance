import React, { useState } from "react";

import Ethereum from "../../Assets/Ethereum.png";
import './Custom-button.styles.css';

const CustomButton = ({ children }) => {

    const [walletAddress, setWalletAddress] = useState('');

    async function requestAccount() {
        if (window.ethereum) {
            try {
                const accounts = await window.ethereum.request({
                    method: 'eth_requestAccounts',
                });
                setWalletAddress(accounts[0]);
            } catch (error) {
                console.log('Error connecting to MetaMask:', error);
            }
        } else {
            alert('MetaMask not detected');
        }
    }

    return (
        <div className="card">
            <img src={Ethereum} alt="Ethereum" className="image"/> <br></br><br></br>
            <button className="custom-button" onClick={requestAccount}> {children} </button>
            <p>Connected account: { walletAddress }</p>
        </div>
    )
}

export default CustomButton;
