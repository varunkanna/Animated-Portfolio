import React from "react";
import "./Navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";

const Navberr = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span initial={{opacity: 0, scale: .5}} animate={{opacity: 1, scale: 1}} transition={{duration: .5}}>Dev</motion.span>
        <div className="social">
          <a href="https://www.linkedin.com/in/gangeswaran-k-965575216?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
            <img src="/linkedin.png" alt="fb-icon" />
          </a>
          <a href="https://github.com/varunkanna" target="_blank">
            <img src="/github.png" alt="fb-icon" />
          </a>
          <a href="https://api.whatsapp.com/send/?phone=919944128060&text=Hi&type=phone_number&app_absent=0" target="_blank">
            <img src="/whatsapp.png" alt="fb-icon" />
          </a>
          <a href="/" target="_blank">
            <img src="/instagram.png" alt="fb-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navberr;
