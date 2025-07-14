import { useState } from 'react';
import {Link } from 'react-router-dom';
import './navbar.scss';
function Navbar() {
  const[open,setOpen]=useState(false);
  const isUser = true;
  return (
    <nav className="nav">
        <div className="left">
     <a href="/" className='logo'>
      <img src="./logo.png" alt=""/>
      <span>RealEstate</span>
     </a>
<a href="/">Home</a>
<a href="/">About</a>
<a href="/">Contact</a>
<a href="/">Agents</a>
      </div>


<div className="right">
        {isUser ? (
          <div className="useDiv">
            <img
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
            <span>John Doe</span>
            <Link to="/userprofile" className="profile">
              <div className="notification">3</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <a href="/">Sign in</a>
            <a href="/" className="register">
              Sign up
            </a>
          </>
        )}

<div className="menuIcon">
  <img src="/menu.png" alt="" onClick={()=>setOpen(!open)}/>
</div>
{/* initially add beyond screen and on small screen put on the screen */}
<div className={open ? "menu active" : "menu"}>
<a href="/">Home</a>
<a href="/">About</a>
<a href="/">Contact</a>
<a href="/">Agents</a>
<a href="/">Sign in</a>
<a href="/">Sign up</a>
</div>
</div>
      
    </nav>
  )
}

export default Navbar

