import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { useHistory} from 'react-router-dom';

const Sidebar = (props) => {
  const history = useHistory();
  return (

    <Menu>
      <button className="menu-item , sidebarButtons" 
      onClick={() => {
                      history.push("/")
                    }}>Home</button>
    
    <button className="menu-item , sidebarButtons" onClick={() => {
                      history.push("/manageusers")
                    }}>Manage Users</button>
    

    <button className="menu-item , sidebarButtons" onClick={() => {
                      history.push("/aboutus")
                    }}>About Us</button>
    

    </Menu>
  );
                  };
export default Sidebar;