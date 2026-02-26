import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Database, 
  BarChart3, 
  LineChart, 
  Code2, 
  Building2,
  Zap,
  ExternalLink,
  Menu,
  X,
  Download
} from 'lucide-react';

export default function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const personalInfo = {
    name: "Nur ALTAY",
    title: "Data Analyst",
    email: "nisanuraltay07@gmail.com", 
    linkedin: "https://www.linkedin.com/in/nisanuraltay", 
    github: "https://github.com/Nisanuraltay/nurportfolio",
    cvPath: "/cv.pdf",
    logoPath: "/logo.png" //logo
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const brandColor = "text-[#00ced1]";
  const brandBg = "bg-[#00ced1]";

  return (
    <div className="bg-[#020617] min-h-screen text-white selection:bg-cyan-500/30 font-['Inter',_sans-serif] scroll-smooth">
      
      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-[#020617]/90 backdrop-blur-lg border-b border-slate-800/50">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* LOGO ALANI */}
          <div 
            className="flex items-center gap-3 cursor-pointer group" 
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          >
            <img 
              src={personalInfo.logoPath} 
              alt="Logo" 
              className="h-12 w-auto object-contain group-hover:scale-105 transition-transform"
            />
            <div className="hidden sm:block">
              <div className={`text-sm font-black ${brandColor} tracking-tighter uppercase leading-none`}>
                {personalInfo.name}
              </div>
              <div className="text-[8px] text-slate-500 font-bold uppercase tracking-[0.2em] mt-1">
                {personalInfo.title}
              </div>
            </div>
          </div>
          
          {/* MENU ALANI (Görsel 1'deki gibi sadece 3 ana başlık) */}
          <div className="hidden md:flex items-center gap-10">
            <a href="#about" className="text-slate-400 hover:text-[#00ced1] transition-colors text-xs font-bold uppercase tracking-[0.2em]">Pathway</a>
            <a href="#skills" className="text-slate-400 hover:text-[#00ced1] transition-colors text-xs font-bold uppercase tracking-[0.2em]">Skills</a>
            <a href="#projects" className="text-slate-400 hover:text-[#00ced1] transition-colors text-xs font-bold uppercase tracking-[0.2em]">Projects</a>
          </div>

          {/* MOBİL BUTON */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-300 hover:text-[#00ced1] transition-colors">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* MOBİL MENÜ OVERLAY */}
        <div className={`fixed inset-0 bg-[#020617] z-40 flex flex-col items-center justify-center gap-10 transition-all duration-500 md:hidden ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-xl font-bold uppercase tracking-[0.3em] hover:text-[#00ced1]">Pathway</a>
          <a href="#skills" onClick={() => setIsMenuOpen(false)} className="text-xl font-bold uppercase tracking-[0.3em] hover:text-[#00ced1]">Skills</a>
          <a href="#projects" onClick={() => setIsMenuOpen(false)} className="text-xl font-bold uppercase tracking-[0.3em] hover:text-[#00ced1]">Projects</a>
          <button onClick={() => { setIsMenuOpen(false); window.location.href='#contact'; }} className={`${brandBg} text-slate-900 px-8 py-3 rounded-full font-black text-xs uppercase`}>Contact Me</button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-52 pb-32 px-6 text-center overflow-hidden">
        <div 
          className="pointer-events-none absolute inset-0 z-0"
          style={{ background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(0, 206, 209, 0.1), transparent 80%)` }}
        />
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter leading-[1.1] uppercase">
            Designing spaces was my past; <br /> 
            <span className={brandColor}>decoding data</span> is my future.
          </h1>
          <p className="text-slate-400 text-base md:text-xl max-w-2xl mx-auto leading-relaxed mb-12 font-medium border-l-2 border-cyan-500/30 pl-6">
            Architectural thinking meets data analytics. I focus on uncovering hidden stories in industrial and financial datasets to produce tangible results.
          </p>
          
          <div className="flex flex-wrap justify-center gap-5">
            <a href="#contact" className={`${brandBg} text-slate-900 px-10 py-5 rounded-2xl font-black text-sm transition-all shadow-xl shadow-cyan-500/20 hover:scale-105 active:scale-95 uppercase tracking-widest`}>
              Get In Touch
            </a>
            <a 
              href={personalInfo.cvPath} 
              download 
              className="w-full md:w-auto bg-slate-900/50 border-2 border-slate-800 hover:border-[#00ced1]/50 text-slate-300 px-10 py-5 rounded-2xl font-black text-sm transition-all active:scale-95 uppercase flex items-center justify-center gap-2 tracking-widest"
            >
              <Download size={20} /> Download CV
            </a>
          </div>
        </div>
      </section>
      
    </div>
  );
}
