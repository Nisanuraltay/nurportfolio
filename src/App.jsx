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
  Download,
  Terminal 
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
    <div className="bg-[#020617] min-h-screen text-white selection:bg-cyan-500/30 font-['Inter',_sans-serif] scroll-smooth overflow-x-hidden">
      
      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#020617]/90 backdrop-blur-md border-b border-slate-800/50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="cursor-pointer group flex items-center gap-2" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className={`${brandBg} p-1.5 rounded-lg text-slate-900`}>
              <Terminal size={18} strokeWidth={3} />
            </div>
            <div>
              <div className={`text-base md:text-lg font-bold ${brandColor} tracking-tighter uppercase leading-none`}>
                {personalInfo.name}
              </div>
              <div className="text-[8px] md:text-[9px] text-slate-500 font-bold uppercase tracking-[0.2em] mt-1">
                {personalInfo.title}
              </div>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-slate-400 hover:text-white transition-colors text-xs font-bold uppercase tracking-wider">Pathway</a>
            <a href="#skills" className="text-slate-400 hover:text-white transition-colors text-xs font-bold uppercase tracking-wider">Skills</a>
            <a href="#projects" className="text-slate-400 hover:text-white transition-colors text-xs font-bold uppercase tracking-wider">Projects</a>
            <a href="#contact" className={`${brandBg} text-slate-900 px-5 py-2 rounded-xl font-bold text-xs transition-all active:scale-95 uppercase`}>Get In Touch</a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-300 hover:text-white p-2">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-[#020617] border-b border-slate-800 p-6 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-sm font-bold uppercase tracking-widest text-slate-300">Pathway</a>
            <a href="#skills" onClick={() => setIsMenuOpen(false)} className="text-sm font-bold uppercase tracking-widest text-slate-300">Skills</a>
            <a href="#projects" onClick={() => setIsMenuOpen(false)} className="text-sm font-bold uppercase tracking-widest text-slate-300">Projects</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className={`${brandColor} text-sm font-bold uppercase tracking-widest`}>Contact</a>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-32 md:pt-44 pb-20 md:pb-32 px-6 text-center overflow-hidden">
        <div 
          className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300 hidden md:block"
          style={{ background: `radial-gradient(500px at ${mousePos.x}px ${mousePos.y}px, rgba(0, 206, 209, 0.15), transparent 80%)` }}
        />
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-2xl md:text-5xl font-black mb-6 md:mb-8 tracking-tight leading-tight uppercase px-2">
            Designing spaces was my past; <br className="hidden md:block" /> 
            <span className={brandColor}>decoding data</span> is my future.
          </h1>
          <p className="text-slate-400 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed mb-10 md:12 font-medium">
            Architectural thinking meets data analytics. I focus on uncovering hidden stories in industrial and financial datasets to produce tangible results.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <a href="#contact" className={`${brandBg} w-full md:w-auto text-slate-900 px-8 py-4 rounded-2xl font-bold text-sm transition-all shadow-lg shadow-cyan-500/20 active:scale-95 uppercase text-center`}>
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

      {/* CAREER JOURNEY */}
      <section id="about" className="py-20 md:py-24 px-6 relative bg-[#020617] scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:16">
            <span className={`text-[10px] font-bold uppercase tracking-[0.3em] ${brandColor}`}>PATHWAY</span>
            <h2 className="text-2xl md:text-3xl font-extrabold mt-2 tracking-tight uppercase">Career Journey</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { id: "01", title: "Industrial Foundation", desc: "4 years of technical field and project management experience in the aluminum facade systems industry.", icon: <Building2 size={20} /> },
              { id: "02", title: "Data Transformation", desc: "Merging sector expertise with Python, SQL, and Power BI to transition manual processes into digital reporting systems.", icon: <LineChart size={20} /> },
              { id: "03", title: "Sustainability & Insight", desc: "Focusing on driving strategic decision-making through energy efficiency analysis and cross-functional data coordination.", icon: <Zap size={20} /> }
            ].map((step, i) => (
              <div key={i} className="bg-[#0f172a]/50 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border border-slate-800 hover:border-cyan-500/30 transition-all group">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-xl font-black ${brandColor}`}>{step.id}</span>
                  <div className="bg-cyan-500/10 p-2 rounded-lg text-[#00ced1] group-hover:scale-110 transition-transform">{step.icon}</div>
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-slate-400 text-xs md:text-sm leading-relaxed font-medium">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-20 md:py-24 px-6 bg-[#030a1c]/30 scroll-mt-20">
        <div className="max-w-5xl mx-auto text-center">
          <span className={`text-[10px] font-bold uppercase tracking-[0.3em] ${brandColor}`}>SKILLS</span>
          <h2 className="text-2xl md:text-4xl font-extrabold mb-4 tracking-tight mt-2 uppercase">Tools & Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 text-left mt-12">
            {[
              { title: "Data Visualization", icon: <BarChart3 size={20} />, skills: ["Power BI", "Tableau", "Looker Studio"] },
              { title: "SQL & Databases", icon: <Database size={20} />, skills: ["PostgreSQL", "BigQuery", "MySQL"] },
              { title: "Programming", icon: <Code2 size={20} />, skills: ["Python", "Pandas", "NumPy", "Streamlit"] },
              { title: "Domain Expertise", icon: <Building2 size={20} />, skills: ["AEC Industry", "Manufacturing", "Supply Chain"] }
            ].map((cat, i) => (
              <div key={i} className="bg-[#0f172a]/40 p-6 rounded-[1.5rem] md:rounded-[1.8rem] border border-slate-800/50 hover:border-cyan-500/30 transition-all group">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`${brandColor} bg-cyan-500/10 p-2.5 rounded-xl`}>{cat.icon}</div>
                  <h3 className="text-sm md:text-base font-bold text-slate-100">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-slate-800/60 text-slate-400 text-[9px] md:text-[10px] font-bold rounded-full border border-slate-700/30 uppercase tracking-tight">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-20 md:py-24 px-6 bg-[#020617] scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:16">
            <span className={`text-[10px] font-bold uppercase tracking-[0.3em] ${brandColor}`}>PORTFOLIO</span>
            <h2 className="text-2xl md:text-4xl font-extrabold mt-2 tracking-tight uppercase">Featured Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { 
                title: "Manufacturing Energy Efficiency", 
                desc: "Analysis of energy consumption trends in production lines to support sustainability reporting and efficiency goals.", 
                tags: ["Python", "Sustainability", "ETL"], 
                img: "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=800",
                github: "https://github.com/Nisanuraltay/manufacturing-energy-efficiency",
                demo: "#"
              },
              { 
                title: "Supply Chain Performance", 
                desc: "A comprehensive analysis of supply chain dynamics including inventory alignment, lead times, and logistics cost optimization.", 
                tags: ["SQL", "Power BI", "Python"], 
                img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800",
                github: "https://github.com/Nisanuraltay/supply-chain-performance-analysis",
                demo: "#"
              },
              { 
                title: "Reddit Finance & ML Prediction", 
                desc: "Data mining and EDA of investment communities. Built ML models to predict post engagement and visualized strategic insights via Looker Studio.", 
                tags: ["BigQuery","ML","Streamlit"], 
                img: "reddit-cover.png",
                github: "https://github.com/Nisanuraltay/reddit_finance_post_analyzer",
                demo: "https://redditfinancepostanalyzer-5mfm2rzneimsv8pwaa9rpt.streamlit.app/"
              }
            ].map((proj, i) => (
              <div key={i} className="bg-[#0f172a]/50 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border border-slate-800 hover:border-cyan-500/30 transition-all group flex flex-col">
                <div className="h-40 md:h-48 overflow-hidden relative">
                  <img src={proj.img} alt={proj.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 md:p-7 flex flex-col flex-grow">
                  <h3 className="text-base md:text-lg font-bold mb-3 group-hover:text-[#00ced1] transition-colors">{proj.title}</h3>
                  <p className="text-slate-400 text-[11px] md:text-xs leading-relaxed mb-6 font-medium flex-grow">{proj.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {proj.tags.map(t => <span key={t} className="px-2 py-1 bg-cyan-500/10 text-[#00ced1] text-[8px] md:text-[9px] font-bold rounded-lg uppercase tracking-widest">{t}</span>)}
                  </div>
                  <div className="flex gap-4 pt-4 border-t border-slate-800/30">
                    <a href={proj.github} target="_blank" rel="noopener noreferrer" className="text-[9px] md:text-[10px] font-bold text-slate-400 hover:text-white flex items-center gap-1.5 uppercase tracking-widest"><Github size={14} /> Code</a>
                    {proj.demo !== "#" && (
                      <a href={proj.demo} target="_blank" rel="noopener noreferrer" className="text-[9px] md:text-[10px] font-bold text-slate-400 hover:text-white flex items-center gap-1.5 uppercase tracking-widest"><ExternalLink size={14} /> Demo</a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 md:py-32 px-6 text-center scroll-mt-20">
        <div className="max-w-3xl mx-auto relative">
          {copied && (
            <div className="fixed top-20 left-1/2 -translate-x-1/2 z-[60] bg-[#00ced1] text-slate-900 px-4 py-2 rounded-xl text-xs font-bold shadow-lg animate-bounce">
              Email Address Copied!
            </div>
          )}
          <span className={`text-[10px] font-bold uppercase tracking-[0.4em] ${brandColor} mb-4 block`}>CONTACT</span>
          <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tight uppercase">Let's Work Together</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
            <button onClick={copyToClipboard} className="w-full md:w-64 h-16 bg-[#00ced1] text-slate-900 rounded-2xl flex items-center justify-center gap-3 font-bold text-lg hover:shadow-lg hover:shadow-cyan-500/20 transition-all active:scale-95 shadow-xl">
              <Mail size={22} strokeWidth={2.5} /> Email Me
            </button>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="w-full md:w-64 h-16 bg-transparent border-2 border-slate-700 hover:border-cyan-500/50 rounded-2xl flex items-center justify-center gap-3 font-bold text-lg transition-all active:scale-95 text-white">
              <Linkedin size={22} strokeWidth={2.5} /> LinkedIn ↗
            </a>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-slate-900 px-6 text-center">
        <p className="text-slate-600 text-[9px] md:text-[10px] uppercase tracking-[0.4em] font-bold">© 2026 {personalInfo.name} • BASED IN TURKEY</p>
      </footer>
    </div>
  );
}
