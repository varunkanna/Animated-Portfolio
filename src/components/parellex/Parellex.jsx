import React, { useRef } from 'react';
import './Parellex.scss';
import { motion, useScroll, useTransform } from 'framer-motion'; 

const Parellex = ({type}) => {
    // console.log(type)
    const ref = useRef();
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start start", "end start"]
      // offset: ["start", "center start"]
    })
    const yTxt = useTransform(scrollYProgress, [0, 1], ["0%", "500%"])
    const ybg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  return (
    <div ref={ref} className='parellex' style={{ background: type == "Portfolio" ? "linear-gradient(180deg, #111132, #505064)" : "linear-gradient(180deg, #111132, #0c0c1d)" }}>
        <motion.h1 style={{y : yTxt}}>{type == "Portfolio" ? "Portfolio" : "What We Do ?"}</motion.h1>
        <motion.div  className="mountains"></motion.div>
        <motion.div style={{y : ybg, backgroundImage: `url(${type == "Portfolio" ? '/sun.png' : '/planets.png'})`}} className="planets"></motion.div>
        <motion.div style={{x : ybg}} className="stars"></motion.div>
    </div>
  )
}

export default Parellex