import React, { useState } from 'react'
import Links from './links/Links'
import ToggleBtn from './toggle/ToggleBtn'
import './Sidebar.scss';
import { motion } from 'framer-motion';

const Sidebar = () => {
    const [open, setOpen] = useState(false);
    const varients = {
        open:{
            clipPath: "circle(1200px at 50px 50px)",
            transition:{
                type: "spring",
                stiffness: 20,
            }
        },
        closed:{
            clipPath: "circle(30px at 50px 50px)",
            transition:{
                delay: .5,
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        }
    }
  return (
    <motion.div className='sidebar' animate={open ? "open" : "closed"}>
        <motion.div className='bg' variants={varients} >
            <Links />
        </motion.div>
        <ToggleBtn setOpen={setOpen} />
    </motion.div>
  )
}

export default Sidebar