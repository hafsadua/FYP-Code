import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { useHistory} from 'react-router-dom';

const SidebarVendor = (props) => {
  const history = useHistory();
  return (

    <Menu>
      <button className="menu-item , sidebarButtons" 
      onClick={() => {
                      history.push("/")
                    }}>Home</button>
    
    <button className="menu-item , sidebarButtons" onClick={() => {
                      history.push("/")
                    }}>Profile</button>
    

    <button className="menu-item , sidebarButtons" onClick={() => {
                      history.push("/aboutus")
                    }}>About Us</button>

    <button className="menu-item , sidebarButtons" onClick={() => {
                      history.push("/login")
                    }}>Logout</button>

    </Menu>
  );
                  };
export default SidebarVendor;