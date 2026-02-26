import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Database, 
  BarChart3, 
  LineChart, 
  Code2, 
  Layers, 
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
    cvPath: "/cv.pdf" 
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    if (window.innerWidth > 768) {
      window.addEventListener('mousemove', handleMouseMove);
    }
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
    <div className="bg-[#020617] min-h-screen text-white selection:bg-cyan-500/30 font-['Inter',_sans-serif] scroll-smooth overflow-x-hidden">
      
      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-[#020617]/90 backdrop-blur-md border-b border-slate-800/50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* LOGO - AS REQUESTED: NO ICON, ORIGINAL TEXT STYLE */}
          <div className="cursor-pointer group" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className={`text-base md:text-lg font-bold ${brandColor} tracking-tighter uppercase leading-none`}>
              {personalInfo.name}
            </div>
            <div className="text-[8px] md:text-[9px] text-slate-500 font-bold uppercase tracking-[0.2em] mt-1">
              {personalInfo.title}
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {['Pathway', 'Skills', 'Projects'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-slate-400 hover:text-white transition-colors text-xs font-bold uppercase tracking-wider">
                {item}
              </a>
            ))}
            <a href="#contact" className={`${brandBg} text-slate-900 px-5 py-2 rounded-xl font-bold text-xs transition-all active:scale-95 uppercase`}>
              Get In Touch
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-slate-300">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-[#020617] border-b border-slate-800 px-6 py-8 flex flex-col gap-6 animate-in slide-in-from-top duration-300 shadow-2xl">
            {['Pathway', 'Skills', 'Projects', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-bold uppercase tracking-widest text-slate-200"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-32 md:pt-44 pb-20 md:pb-32 px-6 text-center overflow-hidden">
        <div 
          className="hidden md:block pointer-events-none absolute inset-0 z-0 opacity-50"
          style={{ background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(0, 206, 209, 0.15), transparent 80%)` }}
        />
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-2xl md:text-5xl font-black mb-6 md:mb-8 tracking-tight leading-tight uppercase px-2">
            Designing spaces was my past; <br className="hidden md:block" /> 
            <span className={brandColor}>decoding data</span> is my future.
          </h1>
          <p className="text-slate-400 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed mb-10 md:mb-12 font-medium px-4">
            Architectural thinking meets data analytics. I focus on uncovering hidden stories in industrial and financial datasets to produce tangible results.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 px-6 md:px-0">
            <a href="#contact" className={`${brandBg} w-full md:w-auto text-slate-900 px-8 py-4 rounded-2xl font-bold text-sm transition-all shadow-lg shadow-cyan-500/20 active:scale-95 uppercase`}>
              Get In Touch
            </a>
            <a 
              href={personalInfo.cvPath} 
              download 
              className="w-full md:w-auto bg-slate-900/50 border-2 border-slate-800 hover:border-slate-600 text-slate-300 px-8 py-4 rounded-2xl font-bold text-sm transition-all active:scale-95 uppercase flex items-center justify-center gap-2"
            >
              <Download size={18} /> Download CV
            </a>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-20 md:py-24 px-6 bg-[#020617] scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <span className={`text-[10px] font-bold uppercase tracking-[0.3em] ${brandColor}`}>PORTFOLIO</span>
            <h2 className="text-2xl md:text-4xl font-extrabold mt-2 tracking-tight uppercase">Featured Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { 
                title: "Manufacturing Energy Efficiency", 
                desc: "Analysis of energy consumption trends in production lines to support sustainability reporting and efficiency goals.", 
                tags: ["Python", "Sustainability"], 
                img: "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=800",
                github: "https://github.com/Nisanuraltay/manufacturing-energy-efficiency",
                demo: "#"
              },
              { 
                title: "Supply Chain Performance", 
                desc: "A comprehensive analysis of supply chain dynamics including inventory alignment, lead times, and logistics cost optimization.", 
                tags: ["SQL", "Power BI"], 
                img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800",
                github: "https://github.com/Nisanuraltay/supply-chain-performance-analysis",
                demo: "#"
              },
              { 
                title: "Reddit Finance & ML Prediction", 
                desc: "Data mining and EDA of investment communities. Built ML models to predict post engagement and visualized strategic insights via Looker Studio.", 
                tags: ["ML", "BigQuery", "Streamlit"], 
                img: "reddit-cover.png", 
                github: "https://github.com/Nisanuraltay/reddit_finance_post_analyzer",
                demo: "https://redditfinancepostanalyzer-5mfm2rzneimsv8pwaa9rpt.streamlit.app/"
              }
            ].map((proj, i) => (
              <div key={i} className="bg-[#0f172a]/50 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border border-slate-800 hover:border-cyan-500/30 transition-all flex flex-col group">
                <div className="aspect-video overflow-hidden relative">
                  <img src={proj.img} alt={proj.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 md:p-7 flex flex-col flex-grow">
                  <h3 className="text-base md:text-lg font-bold mb-2 text-white group-hover:text-[#00ced1] transition-colors">{proj.title}</h3>
                  <p className="text-slate-400 text-[11px] md:text-xs leading-relaxed mb-4 flex-grow">{proj.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {proj.tags.map(t => <span key={t} className="px-2 py-0.5 bg-cyan-500/10 text-[#00ced1] text-[9px] font-bold rounded uppercase tracking-widest">{t}</span>)}
                  </div>
                  <div className="flex gap-4 pt-4 border-t border-slate-800/30">
                    <a href={proj.github} target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold text-slate-400 hover:text-white flex items-center gap-1.5 uppercase"><Github size={14} /> Code</a>
                    {proj.demo !== "#" && (
                      <a href={proj.demo} target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold text-slate-400 hover:text-white flex items-center gap-1.5 uppercase"><ExternalLink size={14} /> Demo</a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER & CONTACT */}
      <footer id="contact" className="py-20 border-t border-slate-900 px-6 text-center">
        <h2 className="text-2xl font-black mb-8 uppercase tracking-tighter">Let's Connect</h2>
        <div className="flex justify-center gap-6 mb-10">
          <a href={`mailto:${personalInfo.email}`} onClick={copyToClipboard} className="p-4 bg-slate-900 rounded-full text-[#00ced1] hover:scale-110 transition-transform shadow-lg"><Mail size={24} /></a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-900 rounded-full text-[#00ced1] hover:scale-110 transition-transform shadow-lg"><Linkedin size={24} /></a>
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-900 rounded-full text-[#00ced1] hover:scale-110 transition-transform shadow-lg"><Github size={24} /></a>
        </div>
        {copied && <p className="text-[#00ced1] text-[10px] font-bold mb-4 animate-pulse uppercase">Email Copied to Clipboard!</p>}
        <p className="text-slate-600 text-[9px] uppercase tracking-[0.4em] font-bold">© 2026 {personalInfo.name} • BASED IN TURKEY</p>
      </footer>
    </div>
  );
}
