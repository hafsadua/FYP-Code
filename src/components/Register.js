import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import Header from './Header'
import SideBar from './Sidebar'

const Register = (props) => {
    const [hasAccount, setHasAccount] = useState(false);
    const { 
        vendorname,
        SetVendorName,
        mobilenum,
        SetMobileNum,
        email, 
        setEmail, 
        password, 
        setPassword, 
        handleLogin, 
        handleSignUp, 
        emailError, 
        passwordError } = props;  

        const history = useHistory();
       

    return (
        <section >  
        <Header />
        <SideBar />
        <div className='login'>
        <div className='loginContainer'>
        <label>Vendor Name</label>
        <input type= 'text' autoFocus required value={vendorname}
        onChange={(e)=> SetVendorName(e.target.value)}></input>
        {/* <p className='errorMsg'>{emailError}</p> */}
        <label>Email</label>
        <input type= 'text' autoFocus required value={email}
        onChange={(e)=> setEmail(e.target.value)}></input>
        {/* <p className='errorMsg'>{emailError}</p> */}
        <label>Password</label>
        <input type='password' required value={password}
        onChange={(e)=> setPassword(e.target.value)}></input>
        <p className='errorMsg'>{passwordError}</p>
        <label>Mobile Number</label>
        <input type= 'text' name='phone' autoFocus required
        onChange={props.change}></input>
        {/* <p className='errorMsg'>{emailError}</p> */}
        <div className="btnContainer">
        {hasAccount ? <div>

            {/* <button onClick={()=>{history.push('/welcome')}}> Sign In</button>
            <p>Don't Have an account?
            <span >Sign up</span></p> */}
            </div> : <div>
            <button onClick={()=>{history.push("/verify")}}>Register</button>
            <p>Already Have an account? 
            <span onClick={()=>{history.push('/login')}}>Login</span></p>
            </div>
            } 
            </div>

        

        </div>
        </div>
        
    </section>
      
    )
}

export default Register;