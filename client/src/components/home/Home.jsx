import React, { useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import "./Home.css";

const Home = () => {
  useEffect(() => {
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

    const moonGeometery = new THREE.SphereGeometry(3, 64, 64);
    const moonMaterial = new THREE.MeshStandardMaterial({ color: 0xffffffff });

    const pointLight = new THREE.PointLight(0xfffffff, 1);
    pointLight.position.z = 10;

    const moon = new THREE.Mesh(moonGeometery, moonMaterial);

    const controls = new OrbitControls(camera, renderer.domElement)
    scene.add(moon);
    scene.add(pointLight);

    camera.position.z = 10;
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
