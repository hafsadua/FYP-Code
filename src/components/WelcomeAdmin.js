import React from 'react'
import Header from './Header';
import Sidebar from './Sidebar';
import { useHistory } from 'react-router-dom';

function Welcome() {
    const token = () =>{
        alert("Currently there is no any token in Queue!!")
    }
    
    const history = useHistory();
    return (
        <div className="home">
            <Header />
            <Sidebar/>
            <h1>Welcome To Admin Panel</h1> <br></br>
            <button className="homebtn" onClick={()=>{history.push("./displayusers")}}> Display Vendors</button><br></br><br></br>
            
        </div>
    )
}

export default Welcome