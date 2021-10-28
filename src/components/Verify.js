import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';



const Verify = (props) => {
    const [hasAccount, setHasAccount] = useState(false);
    const { 
        email, 
        setEmail, 
        password, 
        setPassword, 
        handleLogin, 
        handleSignUp, 
        emailError, 
        passwordError } = props;  

        const history = useHistory();
        function handleClick() {    
           
         }
    return (
        
        <section >  
            <Header />
            <Sidebar/>
            <div className='login'>
            <div className='loginContainer'>
            <label>Mobile Number:{props.data.phone} </label> <br></br>
            <label>Insert Code: </label>
            <input type= 'text' autoFocus required value={email}
            onChange={(e)=> setEmail(e.target.value)}></input><br></br>
            <p className='errorMsg'>{emailError}</p>
            
            {hasAccount ? <div>

                {/* <button onClick={()=>{history.push('/welcome')}}> Sign In</button>
                <p>Don't Have an account?
                <span >Sign up</span></p> */}
                </div> : <div>
                <button onClick={()=>{history.push('/login')}}>Submit</button> <br></br>
                <p>Already Have an account 
                <span onClick={()=>{history.push('/login')}}>Login</span></p>
                </div>
                } 
                </div>

            

            </div>
            
            
            
        </section>
    )
}

export default Verify;