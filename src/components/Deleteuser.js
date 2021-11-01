import React from 'react'
import Header from './Header';
import SideBar from './Sidebar'

function Deleteuser() {
    const Delete = () =>{
alert("User Deleted!")
    }
    return (
        <div>
            <Header></Header>
            <SideBar></SideBar>
            <h1 className="home">
                Delete User<br></br>
                <label>Email:  </label>
                <input></input><br></br>
                <label>Mobile Number:
                      </label>
                <input type="password"></input><br></br><br></br>
                <button className="homebtn" onClick={Delete}>Delete</button>
            </h1>
            
        </div>
    )
}

export default Deleteuser
