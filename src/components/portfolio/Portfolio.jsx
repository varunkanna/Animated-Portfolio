import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import "./Portfolio.scss";
// import '../../app.scss'

const items = [
  
  {
    id: 2,
    title: "Movie App",
    desc: "Such apps as Soundcloud, Spotify, and Apple Music are the most widely used music streaming apps. The primary purpose of the music streaming application is to play music available in the databases of the service, compose custom playlists and suggest similar songs.",
    img: "/movieProject.png",
    link:"https://vsmovieapp.netlify.app/"
  },
  {
    id: 3,
    title: "Youtube Clone",
    desc: "Such apps as Soundcloud, Spotify, and Apple Music are the most widely used music streaming apps. The primary purpose of the music streaming application is to play music available in the databases of the service, compose custom playlists and suggest similar songs.",
    img: "/YtProject.png",
    link:"https://youtube-clone-react-gs.netlify.app/auth"
  },
  {
    id: 4,
    title: "Code Pen Clone",
    desc: "Such apps as Soundcloud, Spotify, and Apple Music are the most widely used music streaming apps. The primary purpose of the music streaming application is to play music available in the databases of the service, compose custom playlists and suggest similar songs.",
    img: "/CodeProject.png",
    link:"https://code-pen-clone-react.netlify.app/"
  },
  {
    id: 1,
    title: "Ecom",
    desc: "Such apps as Soundcloud, Spotify, and Apple Music are the most widely used music streaming apps. The primary purpose of the music streaming application is to play music available in the databases of the service, compose custom playlists and suggest similar songs.",
    img: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bXVzaWMlMjBhcHB8ZW58MHx8MHx8fDA%3D",
    link:"https://vsmovieapp.netlify.app/"
  },
];

const SinglePlate = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset:["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section id={item.id}>
      <div className="container">
        <div className="wrapper">
          <div className="imgContainer" ref={ref}>
            <img src={item.img} alt="" /> 
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h1>{item.title}</h1>
            <p>{item.desc}</p>
            <a href={item.link} target="_blank"><button>Preview</button></a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Work</h1>
        <motion.div className="progress-bar" style={{ scaleX }}></motion.div>
      </div>
      {items.map((val) => {
        return <SinglePlate key={val.id} item={val} />;
      })}
    </div>
  );
};

export default Portfolio;
