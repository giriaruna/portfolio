import React, { Suspense, useRef, useMemo, useState, useEffect } from "react";
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
        opacity={0.1}
      />
    </a.mesh>
  );
};

// Twinkling stars background
const TwinklingStars = ({ count = 600 }) => {
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
  const [show, setShow] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const fullText = "I am a student at NYU Tandon currently seeking internship and full-time opportunities. I love building full-stack web applications and using machine learning to turn complex data into real-world solutions.";

  useEffect(() => {
    setShow(true);
    
    // Initial Flip Effect on Load (Delayed until after image appears)
    setTimeout(() => {
        setIsFlipped(true);
        setTimeout(() => setIsFlipped(false), 1200);
    }, 1800);

    // Delayed Typing Effect Logic
    let i = 0;
    setTimeout(() => {
      const typingInterval = setInterval(() => {
        setDisplayText(fullText.slice(0, i));
        i++;
        if (i > fullText.length) clearInterval(typingInterval);
      }, 20);
    }, 1200);

  }, []);

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
      <div 
        className={`absolute z-10 max-w-6xl w-[92%] flex flex-col md:flex-row items-center 
        bg-white bg-opacity-[0.02] border border-white border-opacity-10 backdrop-blur-md shadow-2xl rounded-[3rem] p-6 md:p-10 lg:p-14 gap-8 md:gap-12
        transition-all duration-1000 ease-out transform
        ${show ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}
      >
        
        {/* Left side: Intro */}
        <div className="flex-1 text-center md:text-left">
          {/* Staggered Name */}
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-2 leading-tight transition-all duration-700 delay-[300ms] transform ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Aruna Giri
          </h1>
          
          {/* Staggered Major */}
          <h2 className={`text-lg md:text-xl font-medium text-blue-400 mb-6 uppercase tracking-widest transition-all duration-700 delay-[600ms] transform ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Computer Engineering | Class of 2026
          </h2>
          
          {/* Typing Effect Paragraph */}
          <p className="text-base md:text-lg lg:text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl min-h-[100px]">
            {displayText}
            <span className="animate-pulse">|</span>
          </p>

          {/* Staggered Action Buttons */}
          <div className={`flex flex-wrap gap-4 justify-center md:justify-start transition-all duration-700 delay-[1500ms] transform ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <a 
              href="https://drive.google.com/file/d/1TrAcsxRsBdSZ34Y6ts_PMVXFAPCQjitJ/view?usp=sharing" 
              className="px-8 py-3 bg-blue-600 text-white rounded-full font-bold transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 active:scale-95 shadow-lg whitespace-nowrap"
              target="_blank" rel="noreferrer"
            >
              View Resume
            </a>
            <div className="flex gap-3 lg:gap-4">
              <a 
                href="https://github.com/giriaruna" 
                className="p-3 border border-slate-500 text-slate-300 rounded-full transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 hover:bg-white hover:text-black"
                target="_blank" rel="noreferrer"
              >
                GitHub
              </a>
              <a 
                href="https://linkedin.com/in/giriaruna" 
                className="p-3 border border-slate-500 text-slate-300 rounded-full transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 hover:bg-white hover:text-black"
                target="_blank" rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Right side: Staggered Image Container */}
        <div className={`flex-shrink-0 group perspective-1000 transition-all duration-700 delay-[900ms] transform ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <div className={`relative w-56 h-64 md:w-72 md:h-80 lg:w-80 lg:h-96 transition-transform duration-700 transform-style-3d ${isFlipped ? "rotate-y-180" : "group-hover:rotate-y-180"}`}>
            
            {/* Front Side */}
            <div className="absolute inset-0 backface-hidden">
              <div className="relative w-full h-full overflow-hidden rounded-[3rem] border border-white/10 shadow-2xl bg-gray-900">
                <img
                  src="/headshot.jpg"
                  alt="Aruna Giri"
                  className="w-full h-full object-cover object-center scale-105" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
