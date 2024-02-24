import React from 'react';
import './Hero.scss';
import { motion } from 'framer-motion'; 

const Hero = () => {
  const textvarients = {
    inital: {
      x: -500,
      opactiy: 0
    },
    animate:{
      x:0,
      opactiy: 1,
      transition:{
        duration: 1,
        staggerChildren: 0.1
      }
    },
    scrollButton:{
      opactiy:0,
      y:10,
      transition:{
        duration: 2,
        repeat:Infinity
      }
    }
  }

  const scrollVarients = {
    initial:{
      opactiy: 0
    },
    animate:{
      x:"-220%",
      transition:{
        repeat: Infinity,
        repeatType:"mirror",
        duration: 20,
      }
    }
  }
  return (
    <div className='hero'>
        <div className="wrapper">

        <motion.div className="textContainer" variants={textvarients} initial="inital" animate="animate">
          <motion.h2 variants={textvarients}>Gangeswaran K</motion.h2>
          <motion.h1 variants={textvarients}>React & Full Stack Developer</motion.h1>
          <motion.div className="buttons" variants={textvarients}>
            <motion.button variants={textvarients}><a href='#Portfolio'>See latest works</a></motion.button>
            <motion.button variants={textvarients}><a href='#Contact Me'>Contact Me</a></motion.button>
          </motion.div>
          <motion.img src='/scroll.png' alt='' variants={textvarients} animate="scrollButton" />
        </motion.div>
        <motion.div className="slidingTextContainer" variants={scrollVarients} initial="initial" animate="animate">
          Writer Content Creator Influencer
        </motion.div>
        </div>
        <div className="imageContainer">
            <img src='/hero.png' alt='' />
        </div>
    </div>
  )
}

export default Hero