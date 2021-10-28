import React from 'react'
import Header from './Header';
import SideBar from './Sidebar'

function Welcome() {
    const token = () =>{
        alert("Currently there is no any token in Queue!!")
    }
    return (
        <div className="home">
            <Header />
            <SideBar />
            <h1>Welcome To your Panel</h1> <br></br>
            <button className="homebtn" onClick={token}> Check Token Number</button>
            
        </div>
    )
}

export default Welcome