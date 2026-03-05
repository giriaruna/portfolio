import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import { motion, AnimatePresence } from "framer-motion";
import { BsGithub, BsLinkedin, BsPlayFill, BsCpu } from "react-icons/bs";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for default marker icons in React
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

const Home = () => {
  const [showHUD, setShowHUD] = useState(false);
  const center = [40.6942, -73.9866]; // NYU Tandon / Brooklyn

  useEffect(() => {
    const timer = setTimeout(() => setShowHUD(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-screen h-screen bg-[#020617] overflow-hidden font-['Space_Grotesk']">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;700;900&display=swap');
        
        /* Cinematic Effects */
        .video-grain {
          position: fixed;
          top: 0; left: 0; width: 100%; height: 100%;
          background: url('https://grainy-gradients.vercel.app/noise.svg');
          opacity: 0.06;
          pointer-events: none;
          z-index: 40;
        }

        .hud-border {
          border: 1px solid rgba(59, 130, 246, 0.3);
          background: rgba(2, 6, 23, 0.8);
          backdrop-filter: blur(12px);
        }

        .scanline {
          width: 100%; height: 2px;
          background: rgba(59, 130, 246, 0.2);
          position: absolute;
          z-index: 10;
          animation: scan 6s linear infinite;
        }

        @keyframes scan {
          0% { top: 0%; }
          100% { top: 100%; }
        }

        /* Make the free map look dark and high-contrast */
        .leaflet-container {
          background: #020617 !important;
          filter: invert(100%) hue-rotate(180deg) brightness(95%) contrast(90%);
        }
      `}</style>

      <div className="video-grain" />
      <div className="scanline" />

      {/* 100% Free Leaflet Map */}
      <div className="absolute inset-0 z-0">
        <MapContainer 
          center={center} 
          zoom={13} 
          zoomControl={false} 
          scrollWheelZoom={false}
          dragging={false}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
          />
          <Marker position={center} />
        </MapContainer>
      </div>

      {/* HUD Interface Overlay */}
      <AnimatePresence>
        {showHUD && (
          <div className="relative z-50 w-full h-full p-8 pointer-events-none flex flex-col justify-between">
            
            {/* Top HUD */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-between items-start"
            >
              <div className="hud-border p-4 rounded-lg flex items-center gap-4 pointer-events-auto">
                <div className="w-12 h-12 rounded-full border-2 border-blue-500 p-1 overflow-hidden bg-slate-800">
                  <img src="/headshot.jpg" alt="Aruna" className="w-full h-full object-cover rounded-full" />
                </div>
                <div>
                  <h2 className="text-white font-bold text-sm tracking-widest uppercase">Aruna // Engineering</h2>
                  <p className="text-blue-400 text-[10px] font-mono flex items-center gap-1">
                    <span className="w-2 h-2 bg-blue-500 rounded-full animate-ping" /> FREE_NODE_LIVE
                  </p>
                </div>
              </div>

              <div className="hud-border p-4 rounded-lg pointer-events-auto text-right font-mono">
                <div className="text-blue-400 text-[10px] mb-1">LOCATION_DATA</div>
                <div className="text-white text-xs tracking-tighter">40.6942° N, 73.9866° W</div>
              </div>
            </motion.div>

            {/* Bottom HUD */}
            <div className="flex flex-col md:flex-row justify-between items-end gap-6">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="hud-border p-6 rounded-2xl max-w-sm pointer-events-auto"
              >
                <BsCpu className="text-blue-500 mb-4" size={24} />
                <h3 className="text-white font-bold text-xl mb-2">NYU Tandon Student</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  20-year-old engineering student building the future of full-stack and machine learning.
                </p>
                <div className="flex gap-4">
                  <a href="https://github.com/giriaruna" target="_blank" rel="noreferrer" className="text-white hover:text-blue-400 transition-colors"><BsGithub size={20}/></a>
                  <a href="https://linkedin.com/in/giriaruna" target="_blank" rel="noreferrer" className="text-white hover:text-blue-400 transition-colors"><BsLinkedin size={20}/></a>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="pointer-events-auto"
              >
                <a 
                  href="https://drive.google.com/file/d/1TrAcsxRsBdSZ34Y6ts_PMVXFAPCQjitJ/view?usp=sharing"
                  target="_blank" rel="noreferrer"
                  className="group flex items-center gap-4 bg-white text-black px-10 py-5 rounded-full font-black tracking-tighter hover:bg-blue-600 hover:text-white transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                >
                  VIEW RESUME <BsPlayFill size={24} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>

      {/* Cinematic Frame */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-[60] border-[15px] border-[#020617]" />
    </section>
  );
};

export default Home;
