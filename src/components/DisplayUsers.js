import React from 'react'
import Header from './Header';
import SideBar from './Sidebar'

function DisplayUsers() {
    const token = () =>{
        alert("Currently there is no any token in Queue!!")
    }
    return (
        <div className="home">
            <Header />
            <SideBar />
            <h1>Retrieve all the vendors</h1> <br></br>
           
        </div>
    )
}

export default DisplayUsers