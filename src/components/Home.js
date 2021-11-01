import React from 'react';
import { useHistory} from 'react-router-dom';

function Home() {
    const history = useHistory();
    return (
        <div className="home"><br></br>
            <h1 >Welcome To Smart Q System</h1><br></br>
            <h2 >SmartQ-Ease your Life and Manage your Time</h2>
            <h2>Click on button to SignUp/SignIn</h2><br></br><br></br><br></br><br></br>
            <button className="homebtn" onClick={() => {
                      history.push("/login")
                    }}>Login</button>
                    <h5><br></br></h5>
            <button className="homebtn" onClick={() => {
                      history.push("/register")
                    }}>Register</button>        
            </div>
      
    )
}

export default Home;