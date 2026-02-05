import React, { Suspense, useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { a } from "@react-spring/three";
import { OrbitControls } from "@react-three/drei";

// Floating card animation in the background
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
        color="#1e40af"
        roughness={0.1}
        metalness={0.8}
        transparent
        opacity={0.5}
      />
    </a.mesh>
  );
};

// Twinkling stars background
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
  return (
    <section className="relative w-screen h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* 3D Star Background */}
      <Canvas className="absolute inset-0" camera={{ position: [0, 0, 20], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <Suspense fallback={null}>
          <TwinklingStars />
          <FloatingCard />
        </Suspense>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>

      {/* Glassmorphism Info Box */}
      <div className="absolute z-10 max-w-5xl w-[90%] flex flex-col md:flex-row items-center bg-white bg-opacity-5 border border-white border-opacity-10 backdrop-blur-xl shadow-2xl rounded-3xl p-8 md:p-12 gap-10">
        
        {/* Left side: Professional Intro */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-2">
            Aruna Giri
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-blue-400 mb-6 uppercase tracking-widest">
            Computer Engineering | Class of 2026
          </h2>
          
          <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
            I am a student at <span className="text-white font-semibold">NYU Tandon</span> currently 
            <span className="text-blue-400 font-bold"> seeking internship and full-time opportunities.</span> 
            I love building full-stack web applications and using machine learning to turn complex data into real-world solutions.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a 
              href="https://drive.google.com/file/d/1fA7f8__7bgjuR5XgDbKna8YtXpS2zO3h/view?usp=drive_link" 
              className="px-8 py-3 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-500 transition-all transform hover:scale-105 shadow-lg"
              target="_blank" rel="noreferrer"
            >
              View Resume
            </a>
            <div className="flex gap-4">
              <a 
                href="https://github.com/giriaruna" 
                className="p-3 border border-slate-500 text-slate-300 rounded-full hover:bg-white hover:text-black transition-all"
                target="_blank" rel="noreferrer"
              >
                GitHub
              </a>
              <a 
                href="https://linkedin.com/in/giriaruna" 
                className="p-3 border border-slate-500 text-slate-300 rounded-full hover:bg-white hover:text-black transition-all"
                target="_blank" rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Right side: Clean Headshot */}
        <div className="flex-shrink-0">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-teal-400 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative w-48 h-48 md:w-64 md:h-64 overflow-hidden rounded-full border-4 border-white border-opacity-10">
              <img
                src="/headshot.jpg"
                alt="Aruna Giri"
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
