import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import Header from './components/Header';




const Login = (props) => {
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
           
            <div className='login'>
            <div className='loginContainer'>
            <label>User name</label>
            <input type= 'text' autoFocus required value={email}
            onChange={(e)=> setEmail(e.target.value)}></input>
            <p className='errorMsg'>{emailError}</p>
            <label>Password</label>
            <input type='password' required value={password}
            onChange={(e)=> setPassword(e.target.value)}></input>
            <p className='errorMsg'>{passwordError}</p>
            <div className="btnContainer">
            {hasAccount ? <div>

                {/* <button onClick={()=>{history.push('/welcome')}}> Sign In</button>
                <p>Don't Have an account?
                <span >Sign up</span></p> */}
                </div> : <div>
                <button onClick={()=>{history.push('/welcome')}}>Login</button>
                {/* <button onClick={()=>{history.push('/welcomeadmin')}}>Login</button> */}
                <p>Don't Have an account 
                <span onClick={()=>{history.push('/register')}}>Register</span></p>
                </div>
                } 
                </div>

            

            </div>
            </div>
            
        </section>
    )
}

export default Login;