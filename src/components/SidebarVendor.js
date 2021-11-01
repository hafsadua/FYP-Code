import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { useHistory} from 'react-router-dom';

const SidebarVendor = (props) => {
  const history = useHistory();
  return (

    <Menu>
      <button className="menu-item , sidebarButtons" 
      onClick={() => {
                      history.push("/welcome")
                    }}>Home</button>
    
    <button className="menu-item , sidebarButtons" onClick={() => {
                      history.push("/profileIBA")
                    }}>Profile</button>
    

    <button className="menu-item , sidebarButtons" onClick={() => {
                      history.push("/login")
                    }}>Logout</button>

    </Menu>
  );
                  };
export default SidebarVendor;