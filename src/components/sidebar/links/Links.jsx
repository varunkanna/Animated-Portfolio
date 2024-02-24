import React from 'react';
import { motion } from 'framer-motion';

const Links = () => {
  const items = ["Home Page", "Services","Portfolio", "Contact Me",];

  const varients = {
    open: {
      transition: {
        staggerChildren: 0.1
      }
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection:-1
      }
    }
  }

  const ItemVarients = {
    open: {
      y:0,
      opacity:1
    },
    closed: {
      y:0,
      opacity: 0,
    }
  }
  return (
    <motion.div className='links' variants={varients}>
      {items.map((item) => {
        return (
          <motion.a href={`#${item}`} key={item} variants={ItemVarients} whileHover={{scale:1.1}} whileTap={{scale:.95}}>{item}</motion.a>
        )
      })}
    </motion.div>
  )
}

export default Links