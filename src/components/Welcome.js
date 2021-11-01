import React from 'react'
import Header from './Header';
import SidebarVendor from './SidebarVendor';

function Welcome() {
    const token = () =>{
        alert("Currently there is no any token in Queue!!")
    }
    const TokenNumbers =() =>{

    }
    return (
        <div className="home">
            <Header />
            <SidebarVendor />
            <h1>Welcome To your Panel</h1> <br></br>
            <button className="homebtn" onClick={token}> Check Token Number</button><br></br><br></br>
            <button className="homebtn" onClick={TokenNumbers}> Define no of Tokens</button>
        </div>
    )
}

export default Welcome