import React, { Suspense, useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { a } from "@react-spring/three";
import { OrbitControls } from "@react-three/drei";
import { Link } from "react-router-dom";

// Floating card animation
const FloatingCard = () => {
  const mesh = useRef();
  useFrame(({ clock }) => {
    mesh.current.rotation.y = Math.sin(clock.getElapsedTime() / 2) * 0.3;
    mesh.current.position.y = Math.sin(clock.getElapsedTime()) * 0.2;
  });
  return (
    <a.mesh ref={mesh} position={[0, 0, 0]}>
      <boxGeometry args={[4, 2.5, 0.2]} />
      <meshStandardMaterial
        color="#1e3a8a"
        roughness={0.2}
        metalness={0.7}
        transparent
        opacity={0.7}
      />
    </a.mesh>
  );
};

// Twinkling stars
const TwinklingStars = ({ count = 500 }) => {
  const stars = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 100,
          (Math.random() - 0.5) * 100,
          (Math.random() - 0.5) * 100,
        ],
        scale: Math.random() * 0.3 + 0.1,
      });
    }
    return temp;
  }, [count]);

  return (
    <>
      {stars.map((star, i) => (
        <a.mesh
          key={i}
          position={star.position}
          scale={[star.scale, star.scale, star.scale]}
        >
          <coneGeometry args={[0.15, 0.4, 5]} />
          <meshStandardMaterial color="#60a5fa" emissive="#60a5fa" />
        </a.mesh>
      ))}
    </>
  );
};

const Home = () => {
  // Typewriter effect
  const fullText = "to know me click here!!";
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-screen h-screen flex items-center justify-center bg-black">
      {/* 3D Star Background */}
      <Canvas className="absolute inset-0" camera={{ position: [0, 0, 20], fov: 60 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Suspense fallback={null}>
          <TwinklingStars />
          <FloatingCard />
        </Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>

      {/* Foreground Info Box */}
      <div className="absolute z-10 max-w-4xl w-full flex flex-col md:flex-row items-center md:items-start bg-white bg-opacity-20 backdrop-blur-md shadow-lg rounded-xl p-8 gap-6 md:gap-10">
        {/* Left side: text */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl font-bold text-blue-400 mb-4">Hi, I'm Aruna Giri</h1>
          <p className="text-lg md:text-xl text-slate-200 mb-4">
            Hi, my name is Aruna Giri. I’m a Computer Engineering student at NYU Tandon School of Engineering with interests in machine learning, data science, and full-stack development.
          </p>
          <p className="text-slate-200 mb-6">Welcome to my portfolio!</p>

          {/* Links */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-4">
            <a href="https://drive.google.com/file/d/1fA7f8__7bgjuR5XgDbKna8YtXpS2zO3h/view?usp=drive_link" className="text-blue-400 underline hover:text-blue-200">Resume</a>
            <a href="https://github.com/giriaruna" className="text-blue-400 underline hover:text-blue-200">GitHub</a>
            <a href="https://linkedin.com/in/giriaruna" className="text-blue-400 underline hover:text-blue-200">LinkedIn</a>
          </div>

          {/* Typewriter "know more" button to About page */}
          <Link
          to="/about"
          className="i4 text-white font-semibold bg-gradient-to-r hover:to-blue-900 shadow-lg underline"
          style={{ fontFamily: "'Dancing Script', cursive", fontSize: '0.5' }}
          >
            {typedText}
            </Link>
        </div>

        {/* Right side: headshot */}
        <div className="flex-shrink-0 ml-0 md:ml-10 mt-8 md:mt-0 md:self-start">
          <div className="w-90 h-80 md:w-50 md:h-100 overflow-hidden rounded-full bg-transparent">
            <img
              src="/headshot.jpg"
              alt="Aruna Giri"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
