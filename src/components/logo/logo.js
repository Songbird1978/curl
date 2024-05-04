import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import '../../index.css'
import Logoasset from '../../assets/Asset 1.png';


function Logo() {
  return (
    <div className="logo">
      <Link to="/" className="logoLink">
       <img src={Logoasset} alt="logoimage" height="50px"/>
      </Link>
    </div>
  );
}

export default Logo;