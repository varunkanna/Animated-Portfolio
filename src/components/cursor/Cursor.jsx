import React, { useState, useEffect } from 'react'
import './Cursor.scss';
import { motion } from "framer-motion";

const Cursor = () => {
    const [position, setposition] = useState({x:0, y:0});

    useEffect(() => {
      const mouseMovement = (e) => {
        setposition({x: e.clientX, y: e.clientY})
      }
      window.addEventListener("mousemove", mouseMovement);
      return () => {
        window.removeEventListener("mousemove", mouseMovement);
      }
    })
    
    console.log(position)
  return (
    <motion.div className='cursor' animate={{x:position.x+10, y:position.y+10}}></motion.div>
  )
}

export default Cursor