import React, { useState, useEffect, useRef } from 'react';
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
  Download,
  MapPin,
  ChevronRight,
  Activity
} from 'lucide-react';

export default function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeSection, setActiveSection] = useState('');

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

  const copyToClipboard = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const brandColor = "text-[#00ced1]";
  const brandBg = "bg-[#00ced1]";

  // ─── PROJECTS DATA ──────────────────────────────────────────────
  const projects = [
    { 
      id: "01",
      title: "Supply Chain & Lojistik Performans Analizi", 
      desc: "Tedarik zincirinin uçtan uca analizi: temin süresi varyasyonları, stok devir hızı ve lojistik maliyet dağılımı incelendi. Tespit edilen darboğazlar için iyileştirme önerileri sunuldu.",
      impact: "Lead time'da %18 iyileştirme potansiyeli tespit edildi · Fill rate ve OTIF metrikleri dashboard'a entegre edildi",
      tags: ["SQL", "Power BI", "EDA", "Process Optimization"], 
      img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800",
      github: "https://github.com/Nisanuraltay/supply-chain-performance-analysis",
      demo: null,
      highlight: true,
      sector: "Supply Chain · Lojistik"
    },
    { 
      id: "02",
      title: "Üretim Enerji Verimliliği & Sürdürülebilirlik Analizi", 
      desc: "Üretim sürecindeki enerji tüketim verilerinin Python ile analizi. Operasyonel verimsizlik kaynakları tespit edildi, sürdürülebilirlik hedeflerine yönelik veri setleri oluşturuldu ve raporlandı.",
      impact: "3 temel verimsizlik faktörü belirlendi · %15 maliyet azaltım potansiyeli önerildi · Otomatik raporlama pipeline kuruldu",
      tags: ["Python", "Pandas", "Sürdürülebilirlik", "Raporlama"], 
      img: "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=800",
      github: "https://github.com/Nisanuraltay/manufacturing-energy-efficiency",
      demo: null,
      highlight: true,
      sector: "Üretim · Enerji · Sürdürülebilirlik"
    },
    { 
      id: "03",
      title: "Reddit Finans Topluluğu — ML ile Duygu & Etkileşim Tahmini", 
      desc: "Reddit'in r/finance topluluğundaki gönderilerin NLP ve makine öğrenimi ile duygu analizi ve etkileşim tahmini. BigQuery üzerinde EDA, Scikit-learn ile model geliştirme, Looker Studio ile görselleştirme.",
      impact: "Sınıflandırma modelinde %82 doğruluk · 50.000+ gönderi işlendi · Streamlit ile canlı demo sunuldu",
      tags: ["Python", "Machine Learning", "BigQuery", "Looker Studio", "NLP"], 
      img: "/reddit-cover.png",
      github: "https://github.com/Nisanuraltay/reddit_finance_post_analyzer",
      demo: "https://redditfinancepostanalyzer-5mfm2rzneimsv8pwaa9rpt.streamlit.app/",
      highlight: false,
      sector: "Fintech · Sosyal Medya Analitiği"
    }
  ];

  // ─── EXPERIENCE / ABOUT ──────────────────────────────────────────
  const experiences = [
    {
      role: "Veri Analizi & Raporlama",
      company: "Proje Bazlı / Freelance",
      period: "2023 – Günümüz",
      desc: "Python, SQL ve Power BI kullanarak supply chain, enerji verimliliği ve kullanıcı davranışı alanlarında veri analizi projeleri yürüttüm. Otomatik raporlama sistemleri ve interaktif dashboard'lar geliştirdim."
    },
    {
      role: "Operasyonel Süreç Yönetimi",
      company: "Önceki Deneyim",
      period: "2020 – 2023",
      desc: "Operasyonel süreçlerin takibi ve koordinasyonu. Çok departmanlı projelerde iletişim köprüsü görevi; süreç iyileştirme ve veri odaklı karar alma altyapısının kurulması."
    }
  ];

  // ─── SKILLS ──────────────────────────────────────────────────────
  const skillCategories = [
    { 
      title: "Analitik Raporlama & BI", 
      icon: <BarChart3 size={20} />, 
      skills: ["Power BI", "Tableau", "Looker Studio", "Dashboard Tasarımı", "KPI Takibi"] 
    },
    { 
      title: "Veri Mimarisi & Veritabanı", 
      icon: <Database size={20} />, 
      skills: ["SQL", "BigQuery", "PostgreSQL", "Veri Modelleme", "Veri Kalitesi"] 
    },
    { 
      title: "Programlama & Analiz", 
      icon: <Code2 size={20} />, 
      skills: ["Python", "Pandas", "NumPy", "Scikit-Learn", "EDA", "NLP"] 
    },
    { 
      title: "Süreç & Strateji", 
      icon: <TrendingUp size={20} />, 
      skills: ["Süreç İyileştirme", "Sürdürülebilirlik Raporlama", "Cross-Dept Koordinasyon", "Paydaş İletişimi"] 
    }
  ];

  return (
    <div className="bg-[#020617] min-h-screen text-white selection:bg-cyan-500/30 scroll-smooth overflow-x-hidden" style={{fontFamily: "'DM Sans', 'Segoe UI', sans-serif"}}>
      
      {/* ─── NAV ─────────────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-[#020617]/90 backdrop-blur-md border-b border-slate-800/50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="cursor-pointer group" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="text-base md:text-lg font-black text-[#00ced1] tracking-tighter uppercase leading-none">
              {personalInfo.name}
            </div>
            <div className="text-[8px] md:text-[9px] text-slate-500 font-bold uppercase tracking-[0.2em] mt-0.5">
              {personalInfo.title}
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            {['About', 'Skills', 'Projects'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-slate-400 hover:text-white transition-colors text-xs font-bold uppercase tracking-wider">
                {item}
              </a>
            ))}
            <a href="#contact" className="bg-[#00ced1] text-slate-900 px-5 py-2 rounded-xl font-bold text-xs transition-all hover:bg-cyan-400 active:scale-95 uppercase">
              Contact
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-slate-300">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-[#020617] border-b border-slate-800 px-6 py-8 flex flex-col gap-6 shadow-2xl">
            {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
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

      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="relative pt-32 md:pt-44 pb-20 md:pb-32 px-6 overflow-hidden">
        <div 
          className="hidden md:block pointer-events-none absolute inset-0 z-0"
          style={{ background: `radial-gradient(900px at ${mousePos.x}px ${mousePos.y}px, rgba(0, 206, 209, 0.25), transparent 70%)` }}
        />
        {/* Subtle grid bg */}
        <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]" style={{backgroundImage: 'linear-gradient(rgba(0,206,209,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,206,209,1) 1px, transparent 1px)', backgroundSize: '60px 60px'}} />

        <div className="max-w-4xl mx-auto relative z-10 text-center">

          <h1 className="text-3xl md:text-6xl font-black mb-6 tracking-tight leading-tight">
            From raw data to <span className="text-[#00ced1]">strategic decisions.</span>
          </h1>

          <p className="text-slate-400 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed mb-10 font-medium">
            Data Analyst with a background in architecture and technical project management. I leverage Python, SQL, and Power BI to turn complex datasets into actionable insights — across supply chain, manufacturing, and sustainability domains.
          </p>


          
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <a href="#contact" className="bg-[#00ced1] w-full md:w-auto text-slate-900 px-8 py-4 rounded-2xl font-bold text-sm transition-all hover:bg-cyan-400 shadow-lg shadow-cyan-500/20 active:scale-95 uppercase">
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

      {/* ─── HAKKIMDA / DENEYİM ──────────────────────────────────── */}
      <section id="about" className="py-20 md:py-24 px-6 bg-[#030a1c]/40 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#00ced1]">ABOUT</span>
            <h2 className="text-2xl md:text-4xl font-extrabold mt-2 tracking-tight">Career Journey</h2>
          </div>

          {/* About text */}
          <div className="max-w-3xl mx-auto mb-14 text-center">
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              My career began in architecture — managing complex technical projects, coordinating cross-functional teams, 
              and optimizing production processes in aluminum facade and construction systems. 
              Over the years I developed a sharp eye for process inefficiency and a habit of working with structured data: 
              production plans, ERP systems, cost analysis, and technical documentation. 
              That foundation naturally led me into data analytics, where I now apply Python, SQL, and Power BI 
              to turn operational complexity into clear, actionable insight.
            </p>
          </div>

          {/* Timeline */}
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                role: "Data Analysis & Reporting",
                company: "Project-Based / Self-Directed",
                period: "2025 – Present",
                desc: "Building data analytics projects using Python, SQL, and Power BI across supply chain, energy efficiency, and user behavior domains. Developing automated reporting pipelines and interactive dashboards."
              },
              {
                role: "Technical Project & Production Planning",
                company: "VAlüminyum & TİAlüminyum ve Cephe Sistemleri",
                period: "09.2022 – 11.2025",
                desc: "Led end-to-end technical project management for aluminum facade and joinery manufacturing across two companies. Used Orgadata Logikal for system design and profile optimization; prepared CNC machining files and integrated them into the production workflow. Managed production planning, scheduling, and progress tracking through Excel-based systems — building structured workbooks for job tracking, revision control, and periodic reporting. Coordinated cross-functional communication between design, production, and on-site teams. Handled tender documentation, cost analysis support, and pre-production technical control. Delivered projects including Gaziantep Mövenpick Hotel, Famm Urla, Luna Vista Hotel, AYT T2 Airport Renovation, CW Enerji Fabrikası, Ben-Tour, Remax Aqua, and Tatsan Tarım."
              }
            ].map((exp, i) => (
              <div key={i} className="flex gap-5 bg-[#0f172a]/50 p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/20 transition-all">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-3 h-3 rounded-full bg-[#00ced1] mt-1 ring-4 ring-cyan-500/10"></div>
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="font-bold text-white text-sm">{exp.role}</h3>
                    <span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded-full font-bold uppercase">{exp.period}</span>
                  </div>
                  <p className="text-[#00ced1] text-[11px] font-bold uppercase tracking-wide mb-2">{exp.company}</p>
                  <p className="text-slate-400 text-xs leading-relaxed">{exp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SKILLS ──────────────────────────────────────────────── */}
      <section id="skills" className="py-20 md:py-24 px-6 scroll-mt-20">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#00ced1]">SKILLS</span>
          <h2 className="text-2xl md:text-4xl font-extrabold mb-12 tracking-tight mt-2">Expertise & Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-left">
            {[
              { 
                title: "Analytics & Reporting", 
                icon: <BarChart3 size={20} />, 
                skills: ["Power BI", "Tableau", "Looker Studio", "Dashboard Design", "KPI Tracking"] 
              },
              { 
                title: "Data Architecture & Databases", 
                icon: <Database size={20} />, 
                skills: ["SQL", "BigQuery", "PostgreSQL", "Data Modeling", "Data Quality"] 
              },
              { 
                title: "Programming & Analysis", 
                icon: <Code2 size={20} />, 
                skills: ["Python", "Pandas", "NumPy", "Scikit-Learn", "EDA", "NLP"] 
              },
              { 
                title: "Process & Strategy", 
                icon: <TrendingUp size={20} />, 
                skills: ["Process Optimization", "Sustainability Reporting", "Cross-Dept Coordination", "Stakeholder Communication", "ERP Systems"] 
              }
            ].map((cat, i) => (
              <div key={i} className="bg-[#0f172a]/40 p-6 rounded-[1.5rem] border border-slate-800/50 hover:border-cyan-500/30 transition-all group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-[#00ced1] bg-cyan-500/10 p-2.5 rounded-xl group-hover:scale-110 transition-transform">{cat.icon}</div>
                  <h3 className="text-base font-bold text-slate-100">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-slate-800/60 text-slate-400 text-[10px] font-bold rounded-full border border-slate-700/30 uppercase tracking-tight hover:border-cyan-500/30 hover:text-slate-300 transition-all cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-[#0f172a]/30 border border-slate-800/50 rounded-2xl p-6 text-left">
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#00ced1] mb-3">Sectors & Domains</p>
            <div className="flex flex-wrap gap-3">
              {["Supply Chain & Logistics", "Manufacturing & Industry", "Energy & Sustainability", "Fintech & E-commerce", "Architecture & Construction"].map(s => (
                <span key={s} className="px-3 py-1.5 bg-cyan-500/10 text-[#00ced1] text-[10px] font-bold rounded-lg border border-cyan-500/20 uppercase tracking-wide">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROJECTS ─────────────────────────────────────────────── */}
      <section id="projects" className="py-20 md:py-24 px-6 bg-[#020617] scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#00ced1]">PORTFOLIO</span>
            <h2 className="text-2xl md:text-4xl font-extrabold mt-2 tracking-tight">Featured Projects</h2>
            <p className="text-slate-500 text-xs mt-3 font-medium">Analysis work conducted on real-world datasets</p>
          </div>

          <div className="space-y-8">
            {projects.map((proj, i) => (
              <div 
                key={i} 
                className={`bg-[#0f172a]/50 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border transition-all group
                  ${proj.highlight 
                    ? 'border-cyan-500/30 hover:border-cyan-500/60 shadow-lg shadow-cyan-500/5' 
                    : 'border-slate-800 hover:border-slate-700'
                  }`}
              >
                {/* Highlight badge */}
                {proj.highlight && (
                  <div className="bg-gradient-to-r from-cyan-500/10 to-transparent px-6 py-2 border-b border-cyan-500/10">
                    <span className="text-[#00ced1] text-[9px] font-black uppercase tracking-widest flex items-center gap-1.5">
                      <Activity size={10} /> Featured Project
                    </span>
                  </div>
                )}

                <div className="flex flex-col md:flex-row">
                  {/* Image */}
                  <div className="md:w-64 lg:w-72 flex-shrink-0 overflow-hidden">
                    <div className="aspect-video md:aspect-auto md:h-full overflow-hidden">
                      <img src={proj.img} alt={proj.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
                    <div>
                      <div className="flex items-start justify-between gap-3 mb-3 flex-wrap">
                        <div>
                          <p className="text-[10px] font-bold text-[#00ced1] uppercase tracking-widest mb-1">{proj.sector}</p>
                          <h3 className="text-lg md:text-xl font-bold text-white leading-tight">{proj.title}</h3>
                        </div>
                        <span className="text-3xl font-black text-slate-800 flex-shrink-0">{proj.id}</span>
                      </div>
                      
                      <p className="text-slate-400 text-xs md:text-sm leading-relaxed mb-4">{proj.desc}</p>

                      {/* Impact box */}
                      <div className="bg-slate-900/60 border border-slate-700/50 rounded-xl px-4 py-3 mb-4">
                        <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">Project Output / Impact</p>
                        <p className="text-slate-300 text-[11px] font-semibold leading-relaxed">{proj.impact}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between flex-wrap gap-3">
                      <div className="flex flex-wrap gap-2">
                        {proj.tags.map(t => (
                          <span key={t} className="px-2.5 py-1 bg-cyan-500/10 text-[#00ced1] text-[9px] font-black rounded-lg border border-cyan-500/20 uppercase tracking-widest">{t}</span>
                        ))}
                      </div>
                      <div className="flex gap-4">
                        <a href={proj.github} target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold text-slate-400 hover:text-white flex items-center gap-1.5 uppercase transition-colors">
                          <Github size={14} /> Source Code
                        </a>
                        {proj.demo && (
                          <a href={proj.demo} target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold text-[#00ced1] hover:text-white flex items-center gap-1.5 uppercase transition-colors">
                            <ExternalLink size={14} /> Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#030a1c]/40">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#00ced1]">VALUE PROPOSITION</span>
          <h2 className="text-2xl md:text-3xl font-extrabold mt-2 mb-10 tracking-tight">What I Bring to the Table</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { 
                icon: <Database size={22} />, 
                title: "Data Sets & Digitalization", 
                desc: "Transforming raw data from multiple departments into structured, traceable, and up-to-date datasets. Building data infrastructure for sustainability and operational reporting." 
              },
              { 
                icon: <BarChart3 size={22} />, 
                title: "Reporting & Decision Support", 
                desc: "Power BI dashboards and periodic reports for senior management. KPI tracking, trend analysis, and visualization of process performance." 
              },
              { 
                icon: <Globe size={22} />, 
                title: "Cross-Department Coordination", 
                desc: "Bridging technical teams and business units. Establishing process standards and tracking mechanisms to ensure data accuracy, consistency, and reliability." 
              }
            ].map((item, i) => (
              <div key={i} className="bg-[#0f172a]/50 p-7 rounded-[1.5rem] border border-slate-800 hover:border-cyan-500/30 transition-all group text-left">
                <div className="bg-cyan-500/10 p-3 rounded-xl text-[#00ced1] w-fit mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="font-bold text-white text-sm mb-2">{item.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FOOTER / CONTACT ─────────────────────────────────────── */}
      <footer id="contact" className="py-20 border-t border-slate-900 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#00ced1]">CONTACT</span>
          <h2 className="text-2xl md:text-3xl font-black mb-3 mt-2 tracking-tight">Let's Work Together</h2>
          <p className="text-slate-500 text-sm mb-8">If you've reviewed my projects and would like to collaborate, feel free to reach out through any of the channels below.</p>

          <button 
            onClick={copyToClipboard}
            className="w-full md:w-auto mx-auto flex items-center justify-center gap-3 bg-slate-900 border border-slate-800 hover:border-cyan-500/40 rounded-2xl px-6 py-4 mb-6 transition-all group"
          >
            <Mail size={18} className="text-[#00ced1]" />
            <span className="text-slate-300 text-sm font-semibold">{personalInfo.email}</span>
            <span className="text-[10px] text-slate-600 group-hover:text-cyan-500 font-bold uppercase tracking-wide transition-colors ml-1">
              {copied ? '✓ Copied!' : 'Copy'}
            </span>
          </button>
          
          <div className="flex justify-center gap-4 mb-10">
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-3 bg-slate-900 border border-slate-800 hover:border-cyan-500/40 rounded-xl text-[#00ced1] text-xs font-bold uppercase tracking-wide transition-all">
              <Linkedin size={16} /> LinkedIn
            </a>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-3 bg-slate-900 border border-slate-800 hover:border-cyan-500/40 rounded-xl text-[#00ced1] text-xs font-bold uppercase tracking-wide transition-all">
              <Github size={16} /> GitHub
            </a>
            <a href={personalInfo.cvPath} download className="flex items-center gap-2 px-5 py-3 bg-slate-900 border border-slate-800 hover:border-cyan-500/40 rounded-xl text-[#00ced1] text-xs font-bold uppercase tracking-wide transition-all">
              <Download size={16} /> CV
            </a>
          </div>

          <p className="text-slate-700 text-[9px] uppercase tracking-[0.4em] font-bold">© 2026 {personalInfo.name} · Data-Driven Solutions</p>
        </div>
      </footer>
    </div>
  );
}
