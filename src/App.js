import logo from './logo.svg';
import React, { useEffect, useState } from 'react'
import fire from './fire';
import './App.css';
import Login from './Login';
import SideBar from './components/Sidebar';
import Header from './components/Header';
import AboutUs from './components/Aboutus';
import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";
import Home from './components/Home';
import ManageUsers from './components/ManageUsers'
import Welcome from './components/Welcome'
import DeleteUser from './components/Deleteuser'
import Register from './components/Register';
import Verify from './components/Verify';

function App() {

  const [data,setData]= React.useState({
    phone:''
  })

  const handleChange=(e)=> {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  // const [user, setUser] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [emailError, setEmailError] = useState('');
  // const [passwordError, setPasswordError] = useState('');



  // const clearInputs = () => {
  //   setEmail('');
  //   setPassword('');
  // }
  // const clearErrors = () => {
  //   setEmailError('');
  //   setPasswordError('');
  // }



  // const handleLogin = () => {
  //   // clearErrors();
  //   // fire
  //   //   .auth()
  //   //   .signInWithEmailAndPassword(email, password)
  //   //   // alert("Login Successfull!!")
  //   //   .catch(err => {
  //   //     switch (err.code) {
  //   //       case "auth/Invalid Email":
  //   //       case "auth/user-diabled":
  //   //       case "auth/user not found":
  //   //         setEmailError(err.message);
  //   //         break;
  //   //       case "auth/wrong password":
  //   //         setPasswordError(err.message);
  //   //         break;

  //   //     }
  //   //   })
     
  // }

  // const handleSignUp = () => {
  //   console.log("working")
  //   clearErrors();
  //   fire
  //     .auth()
  //     .createUserWithEmailAndPassword(email, password)
      
  //     .catch(err => {
  //       switch (err.code) {
  //         case "auth/email-already-in-use":
  //         case "auth/Invalid-email":

  //           setEmailError(err.message);
  //           break;
  //         case "auth/weak password":
  //           setPasswordError(err.message);
  //           break;

  //       }
  //     })
  // }

  // const handleLogout = () => {
  //   fire.auth().signOut();
  // }

  // const authListener = () => {
  //   fire.auth().onAuthStateChanged(user => {
  //     if (user) {
  //       clearInputs();
  //       setUser(user);
  //     }
  //     else
  //       setUser("");
  //   })
  // }
  // useEffect(() => {
  //   authListener();
  // }, []);
  return (
    <div className="App">





      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <SideBar />
            <Header />
            <Home />
          </Route>
          <Route path="/aboutus" exact>
            <AboutUs />
          </Route>
          <Route path="/manageusers" exact>
            <ManageUsers />
          </Route>
          <Route path="/welcome" exact>
            <Welcome />
          </Route>
          <Route path="/deleteuser" exact>
            <DeleteUser />
          </Route>
          <Route path="/register" exact>
            <Register data={data} change={handleChange} />
          </Route>
          <Route path="/verify" exact>
            <Verify data={data} change={handleChange} />
          </Route>
        <Route path= "/login" exact>
          <Login 
            // email={email}
            // setEmail={setEmail}
            // password={password}
            // setPassword={setPassword}
            // handleLogin={handleLogin}
            // handleSignUp={handleSignUp}
            // emailError={emailError}
            // passwordError={passwordError}
    
            />
            </Route>

        </Switch>
      </BrowserRouter>








      {/* <Login
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleLogin={handleLogin}
        handleSignUp={handleSignUp}
        emailError={emailError}
        passwordError={passwordError}
      /> */}


    </div>
  );
}

export default App;
