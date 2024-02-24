import React, { useRef, useState, useEffect } from "react";
import "./Services.scss";
import { motion, useInView } from "framer-motion";

const Services = () => {
  const ref = useRef();
  const varients = {
    inital: {
      x: -500,
      y: 100,
      opacity: 0,
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };
  const isInView = useInView(ref, { margin: "-100px" });

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // console.log(width)

  return (
    <motion.div
      className="services"
      ref={ref}
      variants={varients}
      initial="inital"
      animate={width > 738 ? (isInView && "animate") : ("animate")}
    //   animate={isInView && "animate"}
    >
      <motion.div className="textContainer" variants={varients}>
        <p>
          I focus on Career growth <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={varients}>
            <div className="title">
                <img src='/people.webp' alt='' />
                <h1>
                    <motion.b whileHover={{color: "orange"}}>Unique</motion.b> Ideas
                </h1>
            </div>
            <div className="title">
                <h1>
                    <motion.b whileHover={{color: "orange"}}>For Our</motion.b> Developement
                </h1>
                <button>WHAT CAN DO ?</button>
            </div>
        </motion.div>
      <motion.div className="listContainer" variants={varients}>
            <motion.div className="box" whileHover={{background: "lightgray", color: "black"}}>
                <h1>Branding</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse possimus repellat quam tempora, cum dignissimos quis nobis similique delectus hic sapiente qui nostrum. Reiciendis similique quas deleniti excepturi reprehenderit! Quae?</p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{background: "lightgray", color: "black"}}>
                <h1>Branding</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse possimus repellat quam tempora, cum dignissimos quis nobis similique delectus hic sapiente qui nostrum. Reiciendis similique quas deleniti excepturi reprehenderit! Quae?</p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{background: "lightgray", color: "black"}}>
                <h1>Branding</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse possimus repellat quam tempora, cum dignissimos quis nobis similique delectus hic sapiente qui nostrum. Reiciendis similique quas deleniti excepturi reprehenderit! Quae?</p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{background: "lightgray", color: "black"}}>
                <h1>Branding</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse possimus repellat quam tempora, cum dignissimos quis nobis similique delectus hic sapiente qui nostrum. Reiciendis similique quas deleniti excepturi reprehenderit! Quae?</p>
                <button>Go</button>
            </motion.div>
        </motion.div>
    </motion.div>
  );
};

export default Services;
