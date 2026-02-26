import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Database, 
  BarChart3, 
  LineChart, 
  Code2, 
  TrendingUp,
  Globe,
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
          <div className="cursor-pointer group" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className={`text-base md:text-lg font-bold ${brandColor} tracking-tighter uppercase leading-none`}>
              {personalInfo.name}
            </div>
            <div className="text-[8px] md:text-[9px] text-slate-500 font-bold uppercase tracking-[0.2em] mt-1">
              {personalInfo.title}
            </div>
          </div>
          
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

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-slate-300">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

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

      {/* HERO SECTION - Daha Genel ve Vizyoner */}
      <section className="relative pt-32 md:pt-44 pb-20 md:pb-32 px-6 text-center overflow-hidden">
        <div 
          className="hidden md:block pointer-events-none absolute inset-0 z-0 opacity-50"
          style={{ background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(0, 206, 209, 0.15), transparent 80%)` }}
        />
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-3xl md:text-5xl font-black mb-6 md:mb-8 tracking-tight leading-tight uppercase">
            Transforming complex data <br className="hidden md:block" /> 
            into <span className={brandColor}>actionable insights.</span>
          </h1>
          <p className="text-slate-400 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed mb-10 md:mb-12 font-medium">
            Bridging the gap between operational processes and strategic data analytics. Specialist in uncovering hidden patterns across diverse datasets to drive growth and efficiency.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
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

      {/* PATHWAY - Sektör Bağımsız Yetkinlikler */}
      <section id="pathway" className="py-20 md:py-24 px-6 relative bg-[#020617] scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className={`text-[10px] font-bold uppercase tracking-[0.3em] ${brandColor}`}>PATHWAY</span>
            <h2 className="text-2xl md:text-4xl font-extrabold mt-2 tracking-tight uppercase">Strategic Evolution</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { id: "01", title: "Operational Foundations", desc: "Developing a keen eye for process optimization and complex project management in fast-paced environments.", icon: <Globe size={20} /> },
              { id: "02", title: "Data-Driven Shift", desc: "Leveraging Python, SQL, and Power BI to transition traditional workflows into automated, intelligent reporting systems.", icon: <LineChart size={20} /> },
              { id: "03", title: "Strategic Intelligence", desc: "Synthesizing cross-industry data to identify trends, optimize performance, and support high-level decision making.", icon: <TrendingUp size={20} /> }
            ].map((step, i) => (
              <div key={i} className="bg-[#0f172a]/50 p-8 rounded-[1.5rem] md:rounded-[2rem] border border-slate-800 hover:border-cyan-500/30 transition-all group shadow-xl">
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

      {/* SKILLS - Modern ve Esnek Araçlar */}
      <section id="skills" className="py-20 md:py-24 px-6 bg-[#030a1c]/30 scroll-mt-20">
        <div className="max-w-5xl mx-auto text-center">
          <span className={`text-[10px] font-bold uppercase tracking-[0.3em] ${brandColor}`}>SKILLS</span>
          <h2 className="text-2xl md:text-4xl font-extrabold mb-12 tracking-tight mt-2 uppercase">Expertise & Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-left">
            {[
              { title: "Advanced Analytics", icon: <BarChart3 size={20} />, skills: ["Power BI", "Tableau", "Looker Studio", "Exploratory Data Analysis"] },
              { title: "Data Architecture", icon: <Database size={20} />, skills: ["SQL", "BigQuery", "PostgreSQL", "Data Modeling"] },
              { title: "Statistical Programming", icon: <Code2 size={20} />, skills: ["Python", "Pandas", "NumPy", "Scikit-Learn"] },
              { title: "Business Strategy", icon: <TrendingUp size={20} />, skills: ["Process Optimization", "KPI Tracking", "Stakeholder Communication"] }
            ].map((cat, i) => (
              <div key={i} className="bg-[#0f172a]/40 p-6 rounded-[1.5rem] border border-slate-800/50 hover:border-cyan-500/30 transition-all group">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`${brandColor} bg-cyan-500/10 p-2.5 rounded-xl`}>{cat.icon}</div>
                  <h3 className="text-base font-bold text-slate-100">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-slate-800/60 text-slate-400 text-[10px] font-bold rounded-full border border-slate-700/30 uppercase tracking-tight">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION - Reddit Görseli Güncellendi */}
      <section id="projects" className="py-20 md:py-24 px-6 bg-[#020617] scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <span className={`text-[10px] font-bold uppercase tracking-[0.3em] ${brandColor}`}>SELECTED WORK</span>
            <h2 className="text-2xl md:text-4xl font-extrabold mt-2 tracking-tight uppercase">Featured Analysis</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { 
                title: "Efficiency & Performance Analysis", 
                desc: "Analyzing complex consumption patterns and operational bottlenecks to optimize resource allocation and sustainability.", 
                tags: ["Python", "Optimization"], 
                img: "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=800",
                github: "https://github.com/Nisanuraltay/manufacturing-energy-efficiency",
                demo: "#"
              },
              { 
                title: "Supply Chain & Logistics Optimization", 
                desc: "End-to-end analysis of lead times, inventory levels, and logistics costs to improve overall supply chain health.", 
                tags: ["SQL", "Power BI"], 
                img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800",
                github: "https://github.com/Nisanuraltay/supply-chain-performance-analysis",
                demo: "#"
              },
              { 
                title: "Reddit Finance & ML Prediction", 
                desc: "Utilizing ML to predict sentiment and engagement in financial communities, visualized via Looker Studio.", 
                tags: ["Machine Learning", "BigQuery", "EDA"], 
                img: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=800", // Reddit/Finance için çalışan yeni görsel
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
        <p className="text-slate-600 text-[9px] uppercase tracking-[0.4em] font-bold">© 2026 {personalInfo.name} • DATA DRIVEN STRATEGIES</p>
      </footer>
    </div>
  );
}
