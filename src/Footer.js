import React from "react";
import "./css/ApiCall.css";



function Footer () {
  return(
    <div id="media-section">
      <div id="media-container">
        <div>
            <a className="media-link"  href="https://www.youtube.com/results?search_query=products+of+dress"><i style={{fontSize:"25px",color:"white"}} className="youtube icon"></i></a>
        </div>
        <div>
            <a className="media-link"  href="https://mail.google.com/"><i style={{fontSize:"25px",color:"white"}} className="mail icon"></i></a>
        </div>
        <div>
            <a className="media-link"  href="https://www.facebook.com/"><i style={{fontSize:"25px",color:"white"}} className="facebook icon"></i></a>
        </div>
        <div>
            <a className="media-link"  href="https://twitter.com/i/flow/login"><i style={{fontSize:"25px",color:"white"}}  className="twitter icon "></i></a>
        </div>  
      </div>
    </div>
  )
}
export default Footer;