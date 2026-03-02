import React, { Suspense, useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { a } from "@react-spring/three";
import { OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";
import { BsGithub, BsLinkedin } from "react-icons/bs";

// 3D Floating background card
const FloatingCard = () => {
  const mesh = useRef();
  useFrame(({ clock }) => {
    mesh.current.rotation.y = Math.sin(clock.getElapsedTime() / 2) * 0.3;
    mesh.current.position.y = Math.sin(clock.getElapsedTime()) * 0.2;
  });
  return (
    <a.mesh ref={mesh} position={[0, 0, 0]}>
      <boxGeometry args={[12, 7, 0.1]} />
      <meshStandardMaterial
        color="#3b82f6"
        roughness={0.1}
        metalness={0.8}
        transparent
        opacity={0.03}
      />
    </a.mesh>
  );
};

// Twinkling stars background
const TwinklingStars = ({ count = 400 }) => {
  const stars = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        position: [(Math.random() - 0.5) * 100, (Math.random() - 0.5) * 100, (Math.random() - 0.5) * 100],
        scale: Math.random() * 0.2 + 0.05,
      });
    }
    return temp;
  }, [count]);

  return (
    <>
      {stars.map((star, i) => (
        <mesh key={i} position={star.position} scale={[star.scale, star.scale, star.scale]}>
          <sphereGeometry args={[0.2, 8, 8]} />
          <meshStandardMaterial color="#60a5fa" emissive="#3b82f6" emissiveIntensity={2} />
        </mesh>
      ))}
    </>
  );
};

const Home = () => {
  const [show, setShow] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const fullText = "I'm a student at NYU Tandon building full-stack applications and exploring machine learning. I love turning complex data into real-world solutions and I'm always ready to learn whatever is needed to get the job done.";

  // Automatic Dark Mode Detection Logic
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const applyTheme = (e) => {
      if (e.matches) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };

    applyTheme(mediaQuery); // Initial check
    mediaQuery.addEventListener('change', applyTheme);
    
    setShow(true);
    let i = 0;
    const typingInterval = setInterval(() => {
      setDisplayText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(typingInterval);
    }, 25);

    return () => {
      mediaQuery.removeEventListener('change', applyTheme);
      clearInterval(typingInterval);
    };
  }, []);

  return (
    <section className="relative w-screen h-screen flex items-center justify-center bg-white dark:bg-[#020617] overflow-hidden font-['Space_Grotesk'] transition-colors duration-700">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;700&display=swap');
        
        .glitch-hover:hover {
          animation: glitch 0.4s cubic-bezier(.25,.46,.45,.94) both infinite;
        }

        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-3px, 2px); filter: hue-rotate(90deg) contrast(1.2); }
          40% { transform: translate(-2px, -2px); filter: hue-rotate(180deg) brightness(1.1); }
          60% { transform: translate(3px, 2px); filter: hue-rotate(270deg) contrast(1.2); }
          80% { transform: translate(2px, -3px); filter: hue-rotate(360deg) brightness(1.1); }
          100% { transform: translate(0); }
        }

        .glass-box {
          background: rgba(0, 0, 0, 0.02);
          backdrop-filter: blur(25px);
          -webkit-backdrop-filter: blur(25px);
          border: 1px solid rgba(0, 0, 0, 0.08);
        }
        
        .dark .glass-box {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }
      `}</style>

      {/* 3D Scene Background */}
      <div className="absolute inset-0 z-0 opacity-40 dark:opacity-100 transition-opacity duration-700">
        <Canvas camera={{ position: [0, 0, 20], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1.5} color="#3b82f6" />
          <Suspense fallback={null}>
            <TwinklingStars />
            <FloatingCard />
          </Suspense>
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.4} />
        </Canvas>
      </div>

      {/* Main Container - Perfectly Centered */}
      <div className="relative z-10 w-full flex justify-center items-center px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-5xl w-full glass-box rounded-[4rem] p-10 md:p-16 flex flex-col md:flex-row items-center gap-12 md:gap-20 shadow-2xl shadow-black/50"
        >
          {/* Left Side: Staggered Content */}
          <div className="flex-1 text-center md:text-left">
            <div className={`inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-600 dark:text-blue-400 text-[10px] font-bold tracking-widest uppercase mb-8 transition-all duration-700 delay-[200ms] ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              Engineering @ NYU
            </div>
            
            <h1 className={`text-6xl md:text-[100px] font-black text-gray-900 dark:text-white mb-6 tracking-tighter uppercase leading-none transition-all duration-700 delay-[400ms] ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              ARUNA
            </h1>
            
            <p className="text-base md:text-xl text-gray-600 dark:text-slate-300 mb-10 leading-relaxed font-light max-w-lg min-h-[80px]">
              {displayText}<span className="animate-pulse text-blue-500 ml-1">|</span>
            </p>

            <div className={`flex flex-wrap gap-5 justify-center md:justify-start items-center transition-all duration-700 delay-[800ms] ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              <a 
                href="https://drive.google.com/file/d/1TrAcsxRsBdSZ34Y6ts_PMVXFAPCQjitJ/view?usp=sharing"
                className="px-10 py-4 bg-blue-600 text-white dark:bg-white dark:text-black rounded-full font-bold hover:bg-blue-700 dark:hover:bg-blue-500 dark:hover:text-white transition-all transform active:scale-95 shadow-xl"
                target="_blank" rel="noreferrer"
              >
                View Resume
              </a>
              
              <div className="flex gap-4">
                <a 
                  href="https://github.com/giriaruna" 
                  target="_blank" rel="noreferrer"
                  className="p-4 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-all flex items-center justify-center group"
                >
                  <BsGithub size={24} className="group-hover:rotate-12 transition-transform" />
                </a>
                <a 
                  href="https://linkedin.com/in/giriaruna" 
                  target="_blank" rel="noreferrer"
                  className="p-4 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-all flex items-center justify-center group"
                >
                  <BsLinkedin size={24} className="group-hover:-rotate-12 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Profile Photo with Hover Glitch */}
          <div className={`flex-shrink-0 relative transition-all duration-700 delay-[600ms] ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <div className="relative w-64 h-80 md:w-80 md:h-[26rem] group">
              <div className="absolute inset-[-20px] bg-blue-500/10 blur-[60px] rounded-full group-hover:bg-blue-500/30 transition-all duration-1000" />
              
              <div className="relative w-full h-full overflow-hidden rounded-[3rem] border border-gray-200 dark:border-white/10 shadow-2xl transition-all duration-500 group-hover:scale-[1.03] glitch-hover">
                <img
                  src="/headshot.jpg"
                  alt="Aruna"
                  className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
