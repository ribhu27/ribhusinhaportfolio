
import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, ExternalLink, Menu, X, Code, Palette, Database, Globe, GraduationCap, Briefcase, Award, Calendar, MapPin, Sun, Moon } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'education', 'experience', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const projects = [
    {
      title: "Video Management System",
      description: "A full-stack application for streaming live feed through EyeNor Cameras with features like user authentication , live stream cameras with replays, logging user activities and many more features.",
      tech: ["React", "Node.js", "Django", "Tailwind CSS", "db browser Sqlite"],
    },
    {
      title: "Remote Condition And Asset Monitoring Management System",
      description: "A collaborative condition and asset monitoring  management full stack application with real-time updates of roads, highways, and bridges with features like user authentication, real-time updates, displaying roads and asset management.",
      tech: ["React", "Django", "SQL"]
    },
    {
      title: "Integrated Public Transport Management System",
      description: "A responsive full stack web application for managing public transport systems, including bus schedules, routes, and ticketing.",
      tech: ["Angular", "C#", "Highcharts", "SQL Server"],
    }
  ];

  const skills = [
    { icon: <Code className="w-8 h-8" />, title: "Frontend Development", items: ["React Js", "TypeScript", "Angular"] },
    { icon: <Database className="w-8 h-8" />, title: "Backend Development", items: ["Node.js", "Python", "SQL"] },
    { icon: <Palette className="w-8 h-8" />, title: "Design & Tools", items: ["Figma", "Git", "Docker"] },
    { icon: <Globe className="w-8 h-8" />, title: "Cloud & DevOps", items: ["AWS", "Netlify", "Vercel"] }
  ];

  const themeClasses = {
    bg: isDarkMode 
      ? "bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" 
      : "bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50",
    nav: isDarkMode 
      ? "bg-slate-900/90 backdrop-blur-sm border-purple-500/20" 
      : "bg-white/90 backdrop-blur-sm border-purple-200/50 shadow-lg",
    navText: isDarkMode ? "text-white" : "text-gray-800",
    card: isDarkMode 
      ? "bg-slate-800/50 backdrop-blur-sm" 
      : "bg-white/70 backdrop-blur-sm shadow-xl border border-gray-200/50",
    text: {
      primary: isDarkMode ? "text-white" : "text-gray-900",
      secondary: isDarkMode ? "text-gray-300" : "text-gray-600",
      accent: isDarkMode ? "text-purple-400" : "text-purple-600"
    },
    button: {
      primary: isDarkMode 
        ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600" 
        : "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700",
      secondary: isDarkMode 
        ? "border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white" 
        : "border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white"
    }
  };

  return (
    <div className={`min-h-screen transition-all duration-500 ${themeClasses.bg}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${themeClasses.nav} border-b`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Welcome to My Portfolio
            </div>
            
            <div className="flex items-center gap-4">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-all duration-300 ${isDarkMode ? 'bg-yellow-400/10 text-yellow-400 hover:bg-yellow-400/20' : 'bg-slate-700/10 text-slate-700 hover:bg-slate-700/20'}`}
                aria-label="Toggle theme"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              {/* Desktop Menu */}
              <div className="hidden md:flex space-x-8">
                {['home', 'about', 'projects', 'skills', 'education', 'experience', 'certifications', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`capitalize transition-all duration-300 relative overflow-hidden group ${
                      activeSection === item 
                        ? isDarkMode ? 'text-purple-400' : 'text-purple-600' 
                        : isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {item === 'experience' ? 'Work' : item}
                    <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                      isDarkMode ? 'bg-purple-400' : 'bg-purple-600'
                    }`}></span>
                  </button>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <button
                className={`md:hidden transition-colors duration-200 ${themeClasses.navText}`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              {['home', 'about', 'projects', 'skills', 'education', 'experience', 'certifications', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`block w-full text-left py-3 px-4 rounded-lg transition-all duration-200 capitalize ${
                    isDarkMode 
                      ? 'text-gray-300 hover:text-white hover:bg-slate-700/50' 
                      : 'text-gray-600 hover:text-gray-900 hover:bg-purple-50'
                  }`}
                >
                  {item === 'experience' ? 'Work' : item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-4xl font-bold text-white shadow-2xl transform hover:scale-105 transition-transform duration-300">
              RS
            </div>
          </div>
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 ${themeClasses.text.primary}`}>
            Rishav <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Sinha</span>
          </h1>
          <p className={`text-xl md:text-2xl mb-8 leading-relaxed ${themeClasses.text.secondary}`}>
            Full-Stack Developer & UI/UX Enthusiast creating beautiful digital experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('projects')}
              className={`px-8 py-3 text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg ${themeClasses.button.primary}`}
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${themeClasses.button.secondary}`}
            >
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-4xl font-bold mb-12 text-center ${themeClasses.text.primary}`}>About Me</h2>
          <div className={`rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl ${themeClasses.card}`}>
            <p className={`text-lg leading-relaxed mb-6 ${themeClasses.text.secondary}`}>
              Hi, I'm <span className="text-cyan-400 font-bold">Rishav Sinha</span>, B.tech Graduate in Computer Science from Maharashtra Institute of Technology, Pune.
              I am a <span className="text-orange-400 font-bold">passionate Full-Stack Developer</span> with a keen interest in building scalable web applications and creating <span className="text-pink-400 font-semibold">intuitive user interfaces</span>.
              With a strong foundation in both <span className="text-indigo-400 font-semibold">frontend</span> and  <span className="text-red-400 font-semibold">backend</span> technologies, I enjoy tackling complex problems and delivering <span className="text-emerald-400 font-semibold">high-quality solutions</span>.
            </p>
            <p className={`text-lg leading-relaxed mb-6 ${themeClasses.text.secondary}`}>
              Currently, I am placed as a <span className="text-violet-400 font-bold">Full Stack Developer</span> at <span className="text-teal-400 font-bold">Vaaan Infra Pvt.Ltd</span>, where I work as a Full Stack Developer mainly using <span className="text-blue-300 font-semibold">React JS</span>, <span className="text-red-300 font-semibold">Angular</span>, <span className="text-green-300 font-semibold">Django</span>, <span className="text-purple-300 font-semibold">C#</span> and <span className="text-orange-300 font-semibold">SQL Server</span>.
              I thrive in collaborative environments and love learning new technologies to stay ahead in the ever-evolving tech landscape.
              In my free time, I enjoy exploring new frameworks, and enhancing my skills through continuous learning.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className={`px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 ${isDarkMode ? 'bg-purple-500/20 text-purple-300' : 'bg-purple-100 text-purple-700'}`}>Vaaan Infra Pvt.Ltd</span>
              <span className={`px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 ${isDarkMode ? 'bg-pink-500/20 text-pink-300' : 'bg-pink-100 text-pink-700'}`}>Full Stack Developer</span>
              <span className={`px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 ${isDarkMode ? 'bg-blue-500/20 text-blue-300' : 'bg-blue-100 text-blue-700'}`}>Continuous Learner</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl font-bold mb-12 text-center ${themeClasses.text.primary}`}>Recent Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className={`rounded-2xl p-6 hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl ${themeClasses.card}`}>
                <h3 className={`text-xl font-bold mb-4 ${themeClasses.text.primary}`}>{project.title}</h3>
                <p className={`mb-4 ${themeClasses.text.secondary}`}>{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span key={i} className={`px-3 py-1 rounded-full text-sm transition-all duration-300 hover:scale-105 ${
                      isDarkMode ? 'bg-purple-500/20 text-purple-300' : 'bg-purple-100 text-purple-700'
                    }`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl font-bold mb-12 text-center ${themeClasses.text.primary}`}>Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className={`rounded-2xl p-6 text-center transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl ${themeClasses.card}`}>
                <div className={`mb-4 flex justify-center transition-transform duration-300 hover:scale-110 ${themeClasses.text.accent}`}>
                  {skill.icon}
                </div>
                <h3 className={`text-lg font-semibold mb-4 ${themeClasses.text.primary}`}>{skill.title}</h3>
                <ul className="space-y-2">
                  {skill.items.map((item, i) => (
                    <li key={i} className={themeClasses.text.secondary}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className={`py-20 px-4 ${isDarkMode ? 'bg-slate-800/20' : 'bg-white/30'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl font-bold mb-12 text-center ${themeClasses.text.primary}`}>Education</h2>
          <div className="space-y-8">
            <div className={`rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl ${themeClasses.card}`}>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div className="flex items-center gap-3 mb-2 md:mb-0">
                  <GraduationCap className={`w-6 h-6 ${themeClasses.text.accent}`} />
                  <h3 className={`text-xl font-bold ${themeClasses.text.primary}`}>Bachelor of Technology in Computer Science</h3>
                </div>
                <div className={`flex items-center gap-2 ${themeClasses.text.secondary}`}>
                  <Calendar className="w-4 h-4" />
                  <span>2019 - 2023</span>
                </div>
              </div>
              <div className={`flex items-center gap-2 mb-3 ${themeClasses.text.accent}`}>
                <MapPin className="w-4 h-4" />
                <span>Maharashtra Institute Of Technology (MIT) Pune</span>
              </div>
              <p className={`mb-4 ${themeClasses.text.secondary}`}>
                Focused on software engineering, data structures, algorithms, AWS Cloud Computing and web development. 
                Graduated with CGPA: 8.63/10.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Data Structures", "Algorithms", "Web Development", "Database Systems", "AWS Cloud Computing", "Android Development"].map((tag, index) => (
                  <span key={index} className={`px-3 py-1 rounded-full text-sm transition-all duration-300 hover:scale-105 ${
                    isDarkMode ? 'bg-purple-500/20 text-purple-300' : 'bg-purple-100 text-purple-700'
                  }`}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl font-bold mb-12 text-center ${themeClasses.text.primary}`}>Work Experience</h2>
          <div className="space-y-8">
            {[
              {
                title: "Full Stack Developer",
                company: "VaaaN Infra Pvt.Ltd",
                period: "June 2024 - Present",
                location: "Faridabad, Haryana",
                points: [
                  "Developed and maintained 3+ web applications using React, Django, Angular, MySql, C#",
                  "Collaborated with cross-functional teams to deliver projects 20% ahead of schedule",
                  "Implemented responsive design principles resulting in 40% improvement in mobile user experience",
                  "Optimized database queries leading to 30% faster page load times"
                ],
                tags: ["React", "Angular", "Django", "MySql"]
              },
              {
                title: "Full Stack Developer Developer",
                company: "Worqhat (Winlysis Pvt.Ltd)",
                period: "Dec 2022 - May 2023",
                location: "Pune, Maharashtra",
                points: [
                  "Worked on building the Drag and Drop Component Based Editor that can be used to build all kinds of dynamic Applications.",
                  "Built multiple Frontend Components for Complex Applications.",
                  "Worked on the Tech Stack of EJS, CSS, Javascript, NodeJS, Express, TailwindCSS and Firebase Firestore as a NoSQL database."
                ],
                tags: ["EJS", "CSS", "NodeJS", "Firebase Firestore"]
              },
              {
                title: "Web Development Intern",
                company: "UinSports Canadian Sports Startup Company",
                period: "May 2020 - Aug 2022",
                location: "Canada",
                points: [
                  "Developed responsive websites using HTML, CSS, and JavaScript",
                  "Assisted in maintaining and updating client websites",
                  "Implemented Audio And Video merged and compressed using FFMpeg",
                  "Developed their websites as per requirements using Python as backend."
                ],
                tags: ["HTML/CSS", "JavaScript", "WordPress", "Git"]
              }
            ].map((job, index) => (
              <div key={index} className={`rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl ${themeClasses.card}`}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div className="flex items-center gap-3 mb-2 md:mb-0">
                    <Briefcase className={`w-6 h-6 ${themeClasses.text.accent}`} />
                    <div>
                      <h3 className={`text-xl font-bold ${themeClasses.text.primary}`}>{job.title}</h3>
                      <p className={themeClasses.text.accent}>{job.company}</p>
                    </div>
                  </div>
                  <div className={`flex items-center gap-2 ${themeClasses.text.secondary}`}>
                    <Calendar className="w-4 h-4" />
                    <span>{job.period}</span>
                  </div>
                </div>
                <div className={`flex items-center gap-2 mb-4 ${themeClasses.text.secondary}`}>
                  <MapPin className="w-4 h-4" />
                  <span>{job.location}</span>
                </div>
                <ul className={`space-y-2 mb-4 ${themeClasses.text.secondary}`}>
                  {job.points.map((point, i) => (
                    <li key={i}>• {point}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {job.tags.map((tag, i) => (
                    <span key={i} className={`px-3 py-1 rounded-full text-sm transition-all duration-300 hover:scale-105 ${
                      index === 0 ? (isDarkMode ? 'bg-purple-500/20 text-purple-300' : 'bg-purple-100 text-purple-700') :
                      index === 1 ? (isDarkMode ? 'bg-blue-500/20 text-blue-300' : 'bg-blue-100 text-blue-700') :
                      (isDarkMode ? 'bg-green-500/20 text-green-300' : 'bg-green-100 text-green-700')
                    }`}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className={`py-20 px-4 ${isDarkMode ? 'bg-slate-800/20' : 'bg-white/30'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl font-bold mb-12 text-center ${themeClasses.text.primary}`}>Certifications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Python Data Structures",
                issuer: "University Of Michigan",
                date: "17 May 2020",
                description: "Demonstrates expertise in developing skills using Python in Data Structures.",
                tags: ["Python"],
                color: "orange"
              },
              {
                title: "Cloud Engineering Track and Data Science & Machine Learning Track",
                issuer: "Google Cloud Program 2021 (Google)",
                date: "May 2021",
                description: "Completed Cloud Engineering Track and Data Science & Machine Learning Track in 30 Days of Google Cloud Program 2021",
                tags: ["Data Science", "Machine Learning"],
                color: "blue"
              },
              {
                title: "Cybersecurity Virtual Internship",
                issuer: "Paloalto, AICTE Eduskills",
                date: "March - May 2022",
                description: "Completed 10 weeks of Cybersecurity Virtual Internship with Paloalto, AICTE Eduskills, covering topics like network security, threat analysis, and incident response.",
                tags: ["Network Security", "Threat Analysis"],
                color: "green"
              },
              {
                title: "Oracle Cloud Infrastructure Foundations",
                issuer: "Oracle",
                date: "5th March 2022",
                description: "Certification covering exam about foundational knowledge of Oracle Cloud Infrastructure, including core services, security, and architecture best practices.",
                tags: ["Cloud Infrastructure", "Core Services"],
                color: "red"
              },
              {
                title: "Machine Learning: Regression",
                issuer: "University Of Washington",
                date: "11 June 2020",
                description: "Certification demonstrating proficiency in Algorithms, Data Analysis, Mathematics, Human Learning, Regression, Applied Machine Learning, Machine Learning Algorithms.",
                tags: ["Data Analysis", "Applied Machine Learning"],
                color: "yellow"
              },
              {
                title: "Industry 4.0 And Industrial Internet Of Things",
                issuer: "NPTEL",
                date: "Jul-Oct 2022",
                description: "Successfully completed the NPTEL course on Industry 4.0 and Industrial Internet of Things, covering topics like IoT architecture, protocols, and applications in industry with a consolidated score of 73%.",
                tags: ["IoT architecture", "Protocols"],
                color: "pink"
              }
            ].map((cert, index) => (
              <div key={index} className={`rounded-2xl p-6 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl ${themeClasses.card}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg ${
                    isDarkMode 
                      ? `bg-${cert.color}-500/20` 
                      : `bg-${cert.color}-100`
                  }`}>
                    <Award className={`w-6 h-6 ${
                      isDarkMode 
                        ? `text-${cert.color}-400` 
                        : `text-${cert.color}-600`
                    }`} />
                  </div>
                  <div>
                    <h3 className={`text-lg font-bold ${themeClasses.text.primary}`}>{cert.title}</h3>
                    <p className={`text-sm ${
                      isDarkMode 
                        ? `text-${cert.color}-300` 
                        : `text-${cert.color}-600`
                    }`}>{cert.issuer}</p>
                  </div>
                </div>
                <div className={`flex items-center gap-2 mb-3 ${themeClasses.text.secondary}`}>
                  <Calendar className="w-4 h-4" />
                  <span>Issued: {cert.date}</span>
                </div>
                <p className={`text-sm mb-4 ${themeClasses.text.secondary}`}>
                  {cert.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {cert.tags.map((tag, i) => (
                    <span key={i} className={`px-2 py-1 rounded text-xs transition-all duration-300 hover:scale-105 ${
                      isDarkMode 
                        ? `bg-${cert.color}-500/20 text-${cert.color}-300` 
                        : `bg-${cert.color}-100 text-${cert.color}-700`
                    }`}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-4xl font-bold mb-12 ${themeClasses.text.primary}`}>Let's Work Together</h2>
          <p className={`text-xl mb-8 ${themeClasses.text.secondary}`}>
            Have a project in mind? I'd love to hear about it and discuss how we can bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <a
              href="mailto:rishavsinha57@gmail.com"
              className={`flex items-center gap-3 px-6 py-3 text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg ${themeClasses.button.primary}`}
            >
              <Mail className="w-5 h-5" />
              Send Email
            </a>
            <a
              href="https://github.com/ribhu27"
              className="flex items-center gap-3 px-6 py-3 border-2 border-purple-400 text-purple-400 rounded-full font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/rishav-sinha-717a4320a"
              className="flex items-center gap-3 px-6 py-3 border-2 border-purple-400 text-purple-400 rounded-full font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-purple-500/20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Rishav Sinha. Built And Designed By Rishav.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;