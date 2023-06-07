import React, { useEffect } from "react";
import THREE from "three"
import "./Home.css"

const Home = () => {

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.Prespective(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new 

  }, [])

  return <div className="home">
    <canvas className="homeCanvas">

    </canvas>
  </div>;
};

export default Home;
