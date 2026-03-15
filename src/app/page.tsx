"use client"

import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { Github, Twitter, Linkedin, Mail, ExternalLink, ChevronDown, Briefcase, GraduationCap, Code, FileText, Download, Calendar } from 'lucide-react'
import { Typewriter } from 'react-simple-typewriter'
import { SiReact, SiNextdotjs, SiTailwindcss, SiHtml5, SiCss, SiBootstrap, SiSpringboot, SiNodedotjs, SiExpress, SiJsonwebtokens, SiSolidity, SiJavascript, SiPython, SiPostgresql, SiMongodb, SiMysql, SiGit, SiGooglecloud, SiVercel, SiCplusplus, SiGithub, SiDocker, SiPostman } from 'react-icons/si'
import { FaJava, FaAws, FaDatabase, FaMobileAlt, FaNetworkWired, FaLock, FaServer, FaBolt, FaLinux, FaTerminal } from 'react-icons/fa'
import { VscVscode } from 'react-icons/vsc'

// Dynamically import the ProfileCard component so it only renders on client
const ProfileCard = dynamic(() => import('@/components/ProfileCard'), { ssr: false })

export default function Home() {
  return (
    <main className="bg-[#050505] text-white min-h-screen font-sans selection:bg-[#FF3366] selection:text-white pb-20">

      {/* Sticky Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 glass border-b border-white/10 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="font-bold text-xl tracking-tighter">P.V.</div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#education" className="hover:text-white transition-colors">Education</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          </div>
          <a href="/Resume_Prabath_Vemulakonda.pdf" download className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-xs font-semibold border border-white/10">Download CV</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="relative min-h-screen flex flex-col justify-center items-center px-6 overflow-hidden pt-20">

        {/* Advanced Background Gradients & Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,51,102,0.05)_0,rgba(0,0,0,1)_100%)] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#FF3366] rounded-full mix-blend-screen filter blur-[150px] opacity-20 animate-blob pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#00F0FF] rounded-full mix-blend-screen filter blur-[150px] opacity-20 animate-blob animation-delay-2000 pointer-events-none"></div>

        <div className="z-20 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between mt-20 relative px-6">

          {/* Left Side: Text Content */}
          <div className="w-full md:w-1/2 text-left pr-0 md:pr-10 relative z-30 pointer-events-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block mb-6 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-xs font-semibold tracking-[0.2em] text-gray-300 uppercase"
            >
              Available for new opportunities
            </motion.div>

            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[100px] font-black tracking-tighter mb-4 leading-[0.9]">
              <span className="text-white">Prabath</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF3366] to-[#00F0FF]">
                Vemulakonda
              </span>
            </h1>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-300 mb-10 h-[40px] md:h-[50px]">
              <Typewriter
                words={['Full Stack Developer.', 'Competitive Programmer.', 'Problem Solver.']}
                loop={true}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <a href="#projects" className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors w-full sm:w-auto relative group overflow-hidden pointer-events-auto inline-flex items-center justify-center gap-2">
                View Work <ChevronDown size={18} />
              </a>
              <a href="mailto:prabhathvsv@gmail.com" className="px-8 py-4 rounded-full glass text-white font-semibold hover:bg-white/10 transition-colors w-full sm:w-auto flex items-center justify-center gap-2 border border-white/20 pointer-events-auto">
                <Mail size={18} /> Contact Me
              </a>
            </motion.div>
          </div>

          {/* Right Side: Profile Card */}
          <div className="w-full md:w-1/2 flex justify-center items-center relative z-30 pointer-events-auto h-auto min-h-[400px] mt-10 md:mt-0">
            <ProfileCard
              name=""
              title=""
              handle="prabath"
              status="Available"
              contactText="Hire Me"
              avatarUrl="/images/prabath.jpg"
              iconUrl="/assets/demo/iconpattern.png"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={true}
              behindGlowEnabled={false}
              innerGradient="linear-gradient(145deg, rgba(255, 51, 102, 0.1) 0%, rgba(0, 240, 255, 0.05) 100%)"
            />
          </div>
        </div>
      </section>

      {/* Skills Section (Bento Grid) */}
      <section id="skills" className="py-24 px-6 relative z-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Code className="text-[#00F0FF]" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold">Tech Arsenal</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Programming Languages */}
            <div className="glass rounded-3xl p-8 border border-white/5 hover:border-white/20 transition-colors">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 text-white">
                <span className="w-2 h-2 rounded-full bg-[#E34F26]"></span> Programming Languages
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  { icon: FaJava, name: 'Java', color: '#007396' },
                  { icon: SiPython, name: 'Python', color: '#3776AB' },
                  { icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
                  { icon: FaDatabase, name: 'SQL', color: '#336791' },
                  { icon: SiCplusplus, name: 'C++', color: '#00599C' }
                ].map((skill, i) => (
                  <div key={i} className="flex flex-col items-center justify-center p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-center w-full">
                    <skill.icon size={28} className="mb-2" style={{ color: skill.color }} />
                    <span className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Frontend */}
            <div className="glass rounded-3xl p-8 border border-white/5 hover:border-white/20 transition-colors">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 text-white">
                <span className="w-2 h-2 rounded-full bg-[#FF3366]"></span> Frontend
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  { icon: SiHtml5, name: 'HTML5', color: '#E34F26' },
                  { icon: SiCss, name: 'CSS3', color: '#1572B6' },
                  { icon: SiJavascript, name: 'JS (ES6+)', color: '#F7DF1E' },
                  { icon: SiReact, name: 'React.js', color: '#61DAFB' },
                  { icon: FaMobileAlt, name: 'Responsive Design', color: '#FFFFFF' }
                ].map((skill, i) => (
                  <div key={i} className="flex flex-col items-center justify-center p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-center w-full">
                    <skill.icon size={28} className="mb-2" style={{ color: skill.color }} />
                    <span className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="glass rounded-3xl p-8 border border-white/5 hover:border-white/20 transition-colors">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 text-white">
                <span className="w-2 h-2 rounded-full bg-[#00F0FF]"></span> Backend
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  { icon: SiNodedotjs, name: 'Node.js', color: '#339933' },
                  { icon: SiExpress, name: 'Express.js', color: '#FFFFFF' },
                  { icon: FaNetworkWired, name: 'REST APIs', color: '#FF3366' },
                  { icon: FaLock, name: 'Auth (JWT)', color: '#FFD700' },
                  { icon: FaServer, name: 'API Design', color: '#00F0FF' }
                ].map((skill, i) => (
                  <div key={i} className="flex flex-col items-center justify-center p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-center w-full">
                    <skill.icon size={28} className="mb-2" style={{ color: skill.color }} />
                    <span className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold leading-tight">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Databases */}
            <div className="glass rounded-3xl p-8 border border-white/5 hover:border-white/20 transition-colors">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 text-white">
                <span className="w-2 h-2 rounded-full bg-purple-500"></span> Databases
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  { icon: SiMysql, name: 'MySQL', color: '#4479A1' },
                  { icon: SiPostgresql, name: 'PostgreSQL', color: '#336791' },
                  { icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
                  { icon: FaDatabase, name: 'DB Design', color: '#FFFFFF' },
                  { icon: FaBolt, name: 'Optimization', color: '#FFEB3B' }
                ].map((skill, i) => (
                  <div key={i} className="flex flex-col items-center justify-center p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-center w-full">
                    <skill.icon size={24} className="mb-2" style={{ color: skill.color }} />
                    <span className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold leading-tight">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Technologies */}
            <div className="glass rounded-3xl p-8 border border-white/5 hover:border-white/20 transition-colors md:col-span-2 lg:col-span-2">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 text-white">
                <span className="w-2 h-2 rounded-full bg-yellow-500"></span> Tools & Technologies
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4">
                {[
                  { icon: SiGit, name: 'Git', color: '#F05032' },
                  { icon: SiGithub, name: 'GitHub', color: '#FFFFFF' },
                  { icon: SiDocker, name: 'Docker', color: '#2496ED' },
                  { icon: SiPostman, name: 'Postman', color: '#FF6C37' },
                  { icon: FaTerminal, name: 'Linux / CLI', color: '#FCC624' },
                  { icon: VscVscode, name: 'VS Code', color: '#007ACC' }
                ].map((skill, i) => (
                  <div key={i} className="flex flex-col items-center justify-center p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-center w-full">
                    <skill.icon size={28} className="mb-2" style={{ color: skill.color }} />
                    <span className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 relative z-20 bg-black/20">
        <div className="max-w-4xl mx-auto">

          <div>
            <div className="flex items-center gap-3 mb-12">
              <Briefcase className="text-[#FF3366]" size={32} />
              <h2 className="text-4xl font-bold">Experience</h2>
            </div>

            <div className="relative pl-8 border-l border-white/10 space-y-12">
              <div className="relative">
                <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-[#FF3366] border-4 border-black"></div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                  <h3 className="text-2xl font-bold">Web Development Intern</h3>
                  <span className="flex items-center gap-2 text-gray-400 text-sm"><Calendar size={14} /> July – Oct 2025</span>
                </div>
                <h4 className="text-lg text-[#FF3366] mb-4">Gul Mahal • Remote</h4>
                <ul className="space-y-3 text-gray-400 leading-relaxed">
                  <li className="flex gap-2"><span className="text-[#00F0FF] mt-1">▹</span> Engineered responsive interfaces enhancing load performance by 40% using React and HTML/CSS.</li>
                  <li className="flex gap-2"><span className="text-[#00F0FF] mt-1">▹</span> Built modular components accelerating feature development by 30% in agile sprint cycles.</li>
                  <li className="flex gap-2"><span className="text-[#00F0FF] mt-1">▹</span> Integrated Google Authentication using Firebase.</li>
                </ul>
              </div>

              <div className="relative">
                <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-gray-500 border-4 border-black"></div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                  <h3 className="text-2xl font-bold">Open-Source Contributor</h3>
                  <span className="flex items-center gap-2 text-gray-400 text-sm"><Calendar size={14} /> Sept – Nov 2024</span>
                </div>
                <h4 className="text-lg text-gray-300 mb-4">GirlScript Summer of Code</h4>
                <ul className="space-y-3 text-gray-400 leading-relaxed">
                  <li className="flex gap-2"><span className="text-[#00F0FF] mt-1">▹</span> Contributed to full-stack open-source projects using React.js and Node.js.</li>
                  <li className="flex gap-2"><span className="text-[#00F0FF] mt-1">▹</span> Fixed bugs, optimized performance, and enhanced accessibility across repositories.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 px-6 relative z-20">
        <div className="max-w-4xl mx-auto">
          <div>
            <div className="flex items-center gap-3 mb-12">
              <GraduationCap className="text-[#00F0FF]" size={32} />
              <h2 className="text-4xl font-bold">Education & Achievements</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass rounded-3xl p-8 border border-white/5">
                <div className="flex flex-col justify-between items-start mb-4 h-full">
                  <div>
                    <h3 className="text-xl font-bold">B.Tech in Computer Science</h3>
                    <p className="text-[#00F0FF] mt-2 mb-4">CVR College of Engineering</p>
                    <span className="px-3 py-1 bg-white/10 rounded-full text-sm font-medium border border-white/10">CGPA: 9.33</span>
                  </div>
                  <p className="text-gray-400 text-sm flex items-center gap-2 mt-6"><Calendar size={14} /> 2023 – Present</p>
                </div>
              </div>

              <div className="glass rounded-3xl p-8 border border-white/5 border-l-4 border-l-[#FF3366]">
                <h3 className="text-xl font-bold mb-6">Milestones</h3>
                <ul className="space-y-6 text-gray-300">
                  <li className="flex gap-4 items-start">
                    <div className="p-3 rounded-xl bg-white/5 inline-flex mt-1 border border-white/10"><Code size={20} className="text-[#FF3366]" /></div>
                    <div>
                      <p className="font-semibold text-lg mb-1">Competitive Programming</p>
                      <p className="text-sm text-gray-400 leading-relaxed">LeetCode Knight (Top 3%, Rating 1942). Codeforces Specialist (Rating 1593).</p>
                    </div>
                  </li>
                  <li className="flex gap-4 items-start">
                    <div className="p-3 rounded-xl bg-white/5 inline-flex mt-1 border border-white/10"><GraduationCap size={20} className="text-[#00F0FF]" /></div>
                    <div>
                      <p className="font-semibold text-lg mb-1">Ideathon 2025 Finalist</p>
                      <p className="text-sm text-gray-400 leading-relaxed">Prototyped a real-time women's safety application with live tracking.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-24 px-6 relative z-20 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <a href="https://github.com/Prabathvsv/Sepolia-Wallet" target="_blank" rel="noopener noreferrer" className="group relative rounded-3xl overflow-hidden glass border border-white/5 bg-white/5 aspect-[4/3] flex flex-col justify-end p-8 transition-transform hover:-translate-y-2 duration-500">
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10"></div>
              <img
                src="/ethereum-wallet-logo.jpg"
                alt="Decentralized Ethereum Wallet"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="relative z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 rounded-full border border-white/20 text-xs font-medium backdrop-blur-md bg-black/30">React.js</span>
                  <span className="px-3 py-1 rounded-full border border-white/20 text-xs font-medium backdrop-blur-md bg-black/30">Solidity</span>
                  <span className="px-3 py-1 rounded-full border border-white/20 text-xs font-medium backdrop-blur-md bg-black/30">Hardhat</span>
                </div>
                <h3 className="text-3xl font-bold mb-2 flex items-center justify-between">
                  Decentralized Ethereum Wallet
                  <ExternalLink size={24} className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 duration-500" />
                </h3>
                <p className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-2">A Web3 non-custodial wallet enabling secure transactions via MetaMask with a responsive tracking dashboard.</p>
              </div>
            </a>

            {/* Project Card 2 */}
            <a href="https://guardian-x-delta.vercel.app" target="_blank" rel="noopener noreferrer" className="group relative rounded-3xl overflow-hidden glass border border-white/5 bg-white/5 aspect-[4/3] flex flex-col justify-end p-8 transition-transform hover:-translate-y-2 duration-500 md:translate-y-12">
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10"></div>
              <img
                src="/guardianx-logo.jpg"
                alt="Women's Safety PWA"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="relative z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full border border-white/20 text-xs font-medium backdrop-blur-md bg-black/30">Firebase</span>
                  <span className="px-3 py-1 rounded-full border border-white/20 text-xs font-medium backdrop-blur-md bg-black/30">JavaScript</span>
                  <span className="px-3 py-1 rounded-full border border-white/20 text-xs font-medium backdrop-blur-md bg-black/30">Google Maps API</span>
                </div>
                <h3 className="text-3xl font-bold mb-2 flex items-center justify-between">
                  Women’s Safety PWA
                  <ExternalLink size={24} className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 duration-500" />
                </h3>
                <p className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-2">Mobile-first PWA featuring SOS alerts, live location tracking, and auto-recording using mapped API data.</p>
              </div>
            </a>

            {/* Project Card 3 */}
            <a href="https://github.com/Prabathvsv/fullstack-chat-app" target="_blank" rel="noopener noreferrer" className="group relative rounded-3xl overflow-hidden glass border border-white/5 bg-white/5 aspect-[4/3] flex flex-col justify-end p-8 transition-transform hover:-translate-y-2 duration-500 lg:translate-y-24">
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10"></div>
              <img
                src="/chat-app-logo.jpg"
                alt="Full Stack Chat App"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="relative z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full border border-white/20 text-xs font-medium backdrop-blur-md bg-black/30">React.js</span>
                  <span className="px-3 py-1 rounded-full border border-white/20 text-xs font-medium backdrop-blur-md bg-black/30">Node.js</span>
                  <span className="px-3 py-1 rounded-full border border-white/20 text-xs font-medium backdrop-blur-md bg-black/30">Web Sockets</span>
                  <span className="px-3 py-1 rounded-full border border-white/20 text-xs font-medium backdrop-blur-md bg-black/30">MongoDB</span>
                </div>
                <h3 className="text-3xl font-bold mb-2 flex items-center justify-between">
                  Real-Time Chat App
                  <ExternalLink size={24} className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 duration-500" />
                </h3>
                <p className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-2">Built a secure, real-time platform with group/private messaging. Features JWT auth, read receipts, and live socket updates.</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Resume Download Section */}
      <section className="py-32 px-6 relative z-20">
        <div className="max-w-4xl mx-auto text-center glass rounded-3xl p-12 border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FF3366] to-[#00F0FF]"></div>
          <FileText size={48} className="mx-auto mb-6 text-gray-400" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Want the full details?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Download my complete resume to see my full work history, technical skills, and academic achievements in a succinct format.
          </p>
          <a href="/Resume_Prabath_Vemulakonda.pdf" download className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#FF3366] to-[#00F0FF] text-white font-bold hover:opacity-90 transition-opacity shadow-[0_0_30px_rgba(255,51,102,0.3)]">
            <Download size={20} /> Download Resume
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10 relative z-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">© 2026 Prabath Vemulakonda. Crafted with precision.</p>
          <div className="flex items-center gap-6">
            <a href="https://github.com/Prabathvsv" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors"><Github size={20} /></a>
            <a href="https://leetcode.com/u/this_is_prabath/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114l5.313-5.694c.54-.58.54-1.502.003-2.042A1.375 1.375 0 0 0 13.483 0zm5.111 11.238L15.908 13.916c-.53.52-.53 1.36.002 1.871a1.282 1.282 0 0 0 1.84.004l2.686-2.678c.532-.52.532-1.362 0-1.882l-2.686-2.677a1.282 1.282 0 0 0-1.84.004c-.532.511-.532 1.352 0 1.872l2.684 2.678v.13z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/meet-prabhath-vemulakonda/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
          </div>
        </div>
      </footer>
    </main>
  )
}
