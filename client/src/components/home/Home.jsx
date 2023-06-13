import React, { useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import "./Home.css";
import moonImage from "../../image/moon.jpg"
import venusImage from "../../image/venus.jpg"

const Home = () => {
  useEffect(() => {

    const textureLoader = new THREE.TextureLoader()
    const moonTexture = textureLoader.load(moonImage)
    const venusTexture = textureLoader.load(venusImage)


    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const canvas = document.querySelector(".homeCanvas");
    const renderer = new THREE.WebGLRenderer({
      canvas,
    });

    const moonGeometery = new THREE.SphereGeometry(2, 64, 64);
    const moonMaterial = new THREE.MeshStandardMaterial({ map : moonTexture });
    const moon = new THREE.Mesh(moonGeometery, moonMaterial);

    const venusGeometery = new THREE.SphereGeometry(4, 64, 64);
    const venusMaterial = new THREE.MeshBasicMaterial({ map : venusTexture });
    const venus = new THREE.Mesh(venusGeometery,venusMaterial );

    const pointLight = new THREE.PointLight(0xfffffff, 1);
    pointLight.position.set(8, 5, 5)


    const controls = new OrbitControls(camera, renderer.domElement)
    scene.add(moon);
    scene.add(pointLight);
    scene.add(venus)

    venus.position.set(8, 5, 5)

    camera.position.set (4,4,8)
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return (
    <div className="home">
      <canvas className="homeCanvas"></canvas>
    </div>
  );
};

export default Home;
