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
    title: "Data Analyst & Architect",
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
    setTimeout(() => setCopied(false), 2000); // 2 saniye sonra bildirim kaybolur
  };

  const brandColor = "text-[#00ced1]";
  const brandBg = "bg-[#00ced1]";


  return (
    <div className="bg-[#020617] min-h-screen text-white selection:bg-cyan-500/30 font-['Inter',_sans-serif] scroll-smooth">
      
      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#020617]/80 backdrop-blur-md border-b border-slate-800/50">
        <div clgitassName="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="cursor-pointer group" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className={`text-lg font-bold ${brandColor} tracking-tighter uppercase leading-none`}>
              {personalInfo.name}
            </div>
            <div className="text-[9px] text-slate-500 font-bold uppercase tracking-[0.2em] mt-1">
              {personalInfo.title}
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-slate-400 hover:text-white transition-colors text-xs font-semibold uppercase tracking-wider font-bold">About Me</a>
            <a href="#skills" className="text-slate-400 hover:text-white transition-colors text-xs font-semibold uppercase tracking-wider font-bold">Skills</a>
            <a href="#projects" className="text-slate-400 hover:text-white transition-colors text-xs font-semibold uppercase tracking-wider font-bold">Projects</a>
            <a href="#contact" className={`${brandBg} text-slate-900 px-5 py-2 rounded-xl font-bold text-xs transition-all active:scale-95 uppercase`}>Get In Touch</a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-300 hover:text-white">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-44 pb-32 px-6 text-center overflow-hidden">
        <div 
          className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
          style={{ background: `radial-gradient(500px at ${mousePos.x}px ${mousePos.y}px, rgba(0, 206, 209, 0.15), transparent 80%)` }}
        />
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-3xl md:text-5xl font-black mb-8 tracking-tight leading-tight uppercase">
            Designing spaces was my past; <br /> 
            <span className={brandColor}>decoding data</span> is my future.
          </h1>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-12 font-medium">
            Architectural thinking meets data analytics. I focus on uncovering hidden stories in datasets to produce tangible results.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#contact" className={`${brandBg} text-slate-900 px-8 py-4 rounded-2xl font-bold text-sm transition-all shadow-lg shadow-cyan-500/20 active:scale-95 uppercase`}>
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
      <section id="about" className="py-24 px-6 relative bg-[#020617] scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className={`text-[10px] font-bold uppercase tracking-[0.3em] ${brandColor}`}>PATHWAY</span>
            <h2 className="text-3xl font-extrabold mt-2 tracking-tight uppercase">Career Journey</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { id: "01", title: "Architectural Foundation", desc: "4 years in facade engineering, focusing on project management and technical analysis.", icon: <Building2 size={20} /> },
              { id: "02", title: "Data Analytics Training", desc: "Specialized in Python, SQL, and statistical analysis to bridge domain knowledge.", icon: <LineChart size={20} /> },
              { id: "03", title: "Career Transition", desc: "Merging architectural expertise with data science to drive AEC industry innovation.", icon: <Zap size={20} /> }
            ].map((step, i) => (
              <div key={i} className="bg-[#0f172a]/50 p-8 rounded-[2rem] border border-slate-800 hover:border-cyan-500/30 transition-all group">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-xl font-black ${brandColor}`}>{step.id}</span>
                  <div className="bg-cyan-500/10 p-2 rounded-lg text-[#00ced1] group-hover:scale-110 transition-transform">{step.icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-medium">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOOLS & TECHNOLOGIES */}
      <section id="skills" className="py-24 px-6 bg-[#030a1c]/30 scroll-mt-20">
        <div className="max-w-5xl mx-auto text-center">
          <span className={`text-[10px] font-bold uppercase tracking-[0.3em] ${brandColor}`}>SKILLS</span>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight mt-2 uppercase">Tools & Technologies</h2>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto mb-16 font-medium leading-relaxed">
            My background in architecture has given me problem-solving and analytical thinking skills. 
            Now I am applying these skills to the field of data analysis.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-left">
            {[
              { title: "Data Visualization", icon: <BarChart3 size={20} />, skills: ["Power BI", "Tableau", "Matplotlib"] },
              { title: "SQL & Databases", icon: <Database size={20} />, skills: ["PostgreSQL", "MySQL", "BigQuery"] },
              { title: "Statistical Analysis", icon: <LineChart size={20} />, skills: ["Regression", "A/B Testing", "Forecasting"] },
              { title: "Programming", icon: <Code2 size={20} />, skills: ["Python", "R", "Excel VBA"] },
              { title: "ETL & Pipelines", icon: <Layers size={20} />, skills: ["Pandas", "Airflow", "dbt"] },
              { title: "Domain Expertise", icon: <Building2 size={20} />, skills: ["Construction", "Facade Systems", "Project Analysis"] }
            ].map((cat, i) => (
              <div key={i} className="bg-[#0f172a]/40 p-6 rounded-[1.8rem] border border-slate-800/50 hover:border-cyan-500/30 transition-all flex flex-col items-start gap-3 group">
                <div className="flex items-center gap-3">
                  <div className={`${brandColor} bg-cyan-500/10 p-2.5 rounded-xl`}>{cat.icon}</div>
                  <h3 className="text-base font-bold text-slate-100">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-1">
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

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-24 px-6 bg-[#020617] scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className={`text-[10px] font-bold uppercase tracking-[0.3em] ${brandColor}`}>PORTFOLIO</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2 tracking-tight uppercase">Featured Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Facade Cost Analysis", desc: "Data visualization dashboard for AEC cost optimization.", tags: ["Power BI", "Python"], img: "https://images.unsplash.com/photo-1551288049-bbbda536ad80?q=80&w=800" },
              { title: "Timeline Prediction", desc: "ML model predicting construction completion times.", tags: ["Python", "ML"], img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800" },
              { title: "Material Inventory", desc: "SQL-based inventory optimization for AEC projects.", tags: ["SQL", "Tableau"], img: "https://images.unsplash.com/photo-1586769852044-692d6e3703f0?q=80&w=800" }
            ].map((proj, i) => (
              <div key={i} className="bg-[#0f172a]/50 rounded-[2rem] overflow-hidden border border-slate-800 hover:border-cyan-500/30 transition-all group">
                <div className="h-48 overflow-hidden relative">
                  <img src={proj.img} alt={proj.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-7">
                  <h3 className="text-lg font-bold mb-3 group-hover:text-[#00ced1] transition-colors">{proj.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-6 font-medium">{proj.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {proj.tags.map(t => <span key={t} className="px-3 py-1 bg-cyan-500/10 text-[#00ced1] text-[9px] font-bold rounded-lg uppercase tracking-widest">{t}</span>)}
                  </div>
                  <div className="flex gap-4 pt-4 border-t border-slate-800/30">
                    <button className="text-[10px] font-bold text-slate-400 hover:text-white flex items-center gap-1.5 uppercase tracking-widest"><Github size={14} /> Code</button>
                    <button className="text-[10px] font-bold text-slate-400 hover:text-white flex items-center gap-1.5 uppercase tracking-widest"><ExternalLink size={14} /> Demo</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LET'S WORK TOGETHER (Contact Section) */}
<section id="contact" className="py-32 px-6 text-center scroll-mt-20">
  <div className="max-w-3xl mx-auto relative">
    
    {/* Kopyalandı Bildirimi - Butonun hemen üzerinde çıkar */}
    {copied && (
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-[#00ced1] text-slate-900 px-4 py-2 rounded-xl text-xs font-bold shadow-lg animate-in fade-in zoom-in duration-300">
        Email Address Copied!
      </div>
    )}

    <span className={`text-[10px] font-bold uppercase tracking-[0.4em] ${brandColor} mb-4 block`}>CONTACT</span>
    <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight uppercase">Let's Work Together</h2>
    
    <p className="text-slate-400 text-base md:text-lg mb-12 leading-relaxed max-w-2xl mx-auto font-medium">
      Ready to bring data-driven clarity to your next project. Let's discuss how I can help.
    </p>
    
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
      {/* Email Butonu - Hem mail açar hem kopyalar */}
      <a 
        href={`mailto:${personalInfo.email}`}
        onClick={(e) => {
          // Eğer mail uygulaması açılmazsa diye kopyalama fonksiyonunu çalıştırıyoruz
          copyToClipboard();
        }}
        className="w-full md:w-64 h-16 bg-[#00ced1] text-slate-900 rounded-2xl flex items-center justify-center gap-3 font-bold text-lg hover:shadow-lg hover:shadow-cyan-500/20 transition-all active:scale-95 shadow-xl"
      >
        <Mail size={22} strokeWidth={2.5} /> Email Me
      </a>
      
      <a 
        href={personalInfo.linkedin} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="w-full md:w-64 h-16 bg-transparent border-2 border-slate-700 hover:border-cyan-500/50 rounded-2xl flex items-center justify-center gap-3 font-bold text-lg transition-all active:scale-95"
      >
        <Linkedin size={22} strokeWidth={2.5} /> LinkedIn ↗
      </a>
    </div>

    {/* Alt taraftaki küçük ikonlar */}
    <div className="flex items-center justify-center gap-4 pt-8 border-t border-slate-900">
      <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-slate-900/50 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-600 transition-all">
        <Github size={20} />
      </a>
      <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-slate-900/50 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-600 transition-all">
        <Linkedin size={20} />
      </a>
      {/* Küçük mail ikonu da kopyalama yapsın */}
      <button onClick={copyToClipboard} className="w-12 h-12 rounded-full bg-slate-900/50 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-600 transition-all">
        <Mail size={20} />
      </button>
    </div>
  </div>
</section>

<footer className="py-12 border-t border-slate-900 px-6 text-center">
        <p className="text-slate-600 text-[10px] uppercase tracking-[0.4em] font-bold">© 2026 {personalInfo.name} • BASED IN TURKEY</p>
      </footer>
    </div>
  );
}