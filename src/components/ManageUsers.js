import React from 'react'
import Header from './Header'
import SideBar from './Sidebar';
import { useHistory} from 'react-router-dom';

function ManageUsers() {
    const UsersList = () =>{
            alert("Email: hafsa@gmail.com , Password: 123456")
    }
    const history = useHistory();
    return (

        
        <div className="home">
            <Header />
            <SideBar />
            <br></br>
            <button className="homebtn" onClick={UsersList}>Display List of Users</button><br></br><br></br>
            <button className="homebtn"onClick={() => {
                      history.push("deleteuser")
                    }} >Delete User</button><br></br><br></br>
            <button className="homebtn">Update User</button>
            
        </div>
    )
}

export default ManageUsers
