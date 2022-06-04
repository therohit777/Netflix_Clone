import React, { useEffect,useState } from 'react';
import '../Css/nav.css';

function Nav() {
  
    const [show, handleshow] = useState(false)

    useEffect(() => {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
          handleshow(true)
        } else handleshow(false);
      });
    }, []);
  
    
  
  return (
    <div className={`nav ${show && "nav_black"}`}>
    <img className="nav_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png" alt="Netflix Logo"/>
    <img className="nav_avatar" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png" alt="Netflix Logo"/>
   
    </div>
  )
}

export default Nav