/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { 
  Smartphone, 
  Database, 
  Layout, 
  Cloud, 
  Wrench, 
  ArrowRight, 
  ExternalLink, 
  Mail, 
  MapPin, 
  ChevronRight,
  Menu,
  X,
  Layers,
  Repeat,
  History,
  Briefcase,
  DraftingCompass
} from 'lucide-react';
import { useState, useEffect } from 'react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-surface/80 backdrop-blur-xl border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-display text-2xl md:text-3xl font-bold tracking-tighter text-on-surface"
        >
          Kuntal Nandi
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-on-surface-variant font-medium hover:text-primary-accent transition-colors font-sans text-base"
            >
              {link.name}
            </a>
          ))}
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary-container text-on-primary-container px-6 py-2 rounded-full font-medium shadow-lg shadow-primary-container/20"
          >
            Resume
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-on-surface"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-surface border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-on-surface-variant text-lg font-medium"
                >
                  {link.name}
                </a>
              ))}
              <button className="bg-primary-container text-on-primary-container p-3 rounded-xl font-medium">
                Resume
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      <div className="absolute inset-0 hero-grid opacity-20 -z-10" />
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-accent/20 blur-[120px] rounded-full -z-20" 
      />
      
      <div className="max-w-4xl space-y-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block px-4 py-1.5 rounded-full border border-primary-accent/20 bg-primary-accent/5 text-primary-accent font-mono text-xs uppercase tracking-widest"
        >
          Senior Flutter Developer
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-display text-5xl md:text-7xl leading-tight font-bold"
        >
          Building Scalable <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-accent to-secondary-accent">Flutter Applications</span> with Clean Architecture
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-sans text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed"
        >
          3+ years of engineering exceptional user experiences using Domain Driven Design (DDD) and MVVM patterns. Transforming complex business logic into high-performance cross-platform interfaces.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary-container text-on-primary-container px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:shadow-[0_0_20px_rgba(0,112,243,0.4)] transition-all"
          >
            View Projects <ArrowRight size={20} />
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-outline-variant bg-white/5 backdrop-blur-md px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors"
          >
            Download Resume
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

const Stats = () => {
  const stats = [
    { label: 'Years Experience', value: '3+' },
    { label: 'Production Apps', value: '12+' },
    { label: 'Code Reliability', value: '100%' },
    { label: 'Platform Expertise', value: 'Cross' },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 border-y border-outline-variant/20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
        {stats.map((stat, idx) => (
          <motion.div 
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="space-y-2"
          >
            <div className="font-display text-3xl md:text-4xl text-primary-accent font-bold">{stat.value}</div>
            <div className="font-mono text-[10px] md:text-xs text-on-surface-variant uppercase tracking-wider">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const TechStack = () => {
  const stacks = [
    { name: 'Mobile', icon: Smartphone, color: 'text-primary-accent', tags: ['FLUTTER', 'DART', 'KOTLIN'] },
    { name: 'State', icon: Database, color: 'text-secondary-accent', tags: ['BLOC/CUBIT', 'RIVERPOD'] },
    { name: 'Arch', icon: DraftingCompass, color: 'text-primary-accent', tags: ['CLEAN ARCH', 'DDD'] },
    { name: 'Backend', icon: Cloud, color: 'text-secondary-accent', tags: ['FIREBASE', 'NODE.JS'] },
    { name: 'Tools', icon: Wrench, color: 'text-primary-accent', tags: ['GIT/CD', 'JIRA'] },
  ];

  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="font-display text-4xl mb-4 font-bold">Core Technology Stack</h2>
        <div className="w-20 h-1 bg-primary-accent" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {stacks.map((stack, idx) => (
          <motion.div 
            key={stack.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="glass-card p-6 rounded-xl space-y-4 group cursor-default"
          >
            <stack.icon className={`${stack.color} w-10 h-10 group-hover:scale-110 transition-transform`} />
            <h3 className="font-display text-xl font-semibold">{stack.name}</h3>
            <div className="flex flex-wrap gap-2">
              {stack.tags.map(tag => (
                <span key={tag} className="px-2 py-1 bg-surface-container-high rounded text-[10px] font-mono font-medium tracking-tight">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const EngineeringShowcase = () => {
  return (
    <section className="py-32 bg-surface-container-lowest" id="projects">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl mb-4 font-bold"
          >
            Engineering Showcase
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-on-surface-variant text-lg max-w-xl mx-auto"
          >
            Featured production-grade applications across health, finance, and enterprise sectors.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          {/* Featured: eZRx+ */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-4 glass-card rounded-2xl p-8 flex flex-col md:flex-row gap-8 overflow-hidden group relative"
          >
            <div className="flex-1 space-y-6 relative z-10">
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-primary-accent/20 text-primary-accent text-xs font-mono rounded-full">HEALTHCARE</span>
                <span className="px-3 py-1 bg-white/5 text-on-surface-variant text-xs font-mono rounded-full">PRODUCTION</span>
              </div>
              <h3 className="font-display text-3xl font-bold">eZRx+ Pharma Distribution</h3>
              <p className="text-on-surface-variant leading-relaxed">Architected a complex distribution system for pharmaceuticals, optimizing order flow and tracking across multiple Asian markets.</p>
              <div className="flex gap-3">
                <Smartphone className="text-primary-accent" size={24} />
                <Cloud className="text-secondary-accent" size={24} />
              </div>
            </div>
            <div className="flex-1 relative min-h-[300px] md:min-h-0">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMqaHS_q1VhRG24fTNPRuRmmophss-Xjht8zFzSUL3Ov6x9LQ9ihPx8HfIaNpNjbyZujAs_qcuDmPLqSjIyc9ZTBGOxleywR0MfsQ-0nJFJelYhSEXj6yR06fCBlSEljP94pQU--UmPOw2fSKWun6dp9wLBn5ZZHF12JKvMAnAqFUL7ozmzPutgzQVZmT6eEZiNFUoI5sFOyruxWaqmxUEUNzL6WzO_i4Q6HRgM59pSvOIq2wkhplGiqElg53s0MQJg8TTZURgP_A"
                alt="eZRx+ Pharma Distribution"
                className="absolute inset-0 w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>

          {/* ConnectBud */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-2 glass-card rounded-2xl p-8 flex flex-col space-y-6 group"
          >
            <div className="flex justify-between items-start">
              <div className="px-3 py-1 bg-secondary-accent/20 text-secondary-accent text-xs font-mono rounded-full">EDTECH</div>
              <ExternalLink className="text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer" size={20} />
            </div>
            <h3 className="font-display text-2xl font-bold">ConnectBud</h3>
            <p className="text-on-surface-variant text-sm flex-grow">Interactive peer-to-peer learning platform with real-time video features.</p>
            <div className="pt-4 border-t border-white/5 flex gap-4 text-[10px] font-mono opacity-60">
              <span>WEBRTC</span>
              <span>RIVERPOD</span>
            </div>
          </motion.div>

          {/* NiyoX */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-3 glass-card rounded-2xl p-8 flex flex-col space-y-6 group"
          >
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-primary-accent/20 text-primary-accent text-xs font-mono rounded-full">FINTECH</span>
            </div>
            <h3 className="font-display text-2xl font-bold">NiyoX Neo Banking</h3>
            <p className="text-on-surface-variant text-sm">Enhanced the digital banking experience for millions of users with highly secure clean architecture modules.</p>
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXIYpmS2v6Vuj4_3S5-5dFgoNbh6oxhWpwYV4qUXhY2geclW2knOBXeWiKXo2XWqCW9yKWWB0kQa5Ew7h5O5tfBwbhpEDw8PKrWexPx1ahWO1pWx4HhjM6W6Jjf6iMppiL8_Z8k-t02W5lHtF7g4rB6MS_ImPQpddiO4md0SQcSo4jyvR-wm3bsOFVkZ8ylid0z7esWVC-60dR2ilab_5kL70ClDo4MaCv5DVNcfIRGGZQETVmiNhU5YPPIMFgGi7Iuz0SmFXSqMw"
              alt="NiyoX Neo Banking"
              className="w-full h-48 object-cover rounded-xl mt-4 group-hover:scale-[1.02] transition-transform duration-500"
            />
          </motion.div>

          {/* Grid of Others */}
          <div className="md:col-span-3 grid grid-cols-2 gap-4">
            {[
              { name: 'eZConsult', desc: 'Tele-health consultation engine.' },
              { name: 'TotalHer', desc: "Women's wellness and health app.", border: 'border-primary-accent/20' },
              { name: 'PlanIt', desc: 'Enterprise project planning.' },
              { name: 'V4P', desc: 'Social progress & community.' },
            ].map((proj, idx) => (
              <motion.div 
                key={proj.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`glass-card rounded-2xl p-6 flex flex-col justify-between ${proj.border || ''}`}
              >
                <h4 className="font-display text-lg font-bold">{proj.name}</h4>
                <p className="text-[10px] text-on-surface-variant leading-relaxed">{proj.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Philosophy = () => {
  return (
    <section className="py-32 px-6" id="philosophy">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        <div className="space-y-8">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl font-bold"
          >
            Architecture & Engineering Philosophy
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-on-surface-variant text-lg leading-relaxed"
          >
            I believe in building software that doesn't just work, but thrives under scale. My approach centers on modularity, testability, and the strict separation of concerns.
          </motion.p>
          
          <ul className="space-y-8">
            {[
              { 
                icon: Layout, 
                title: 'Domain Driven Design (DDD)', 
                desc: 'Mapping complex business domains into clear code abstractions.',
                color: 'text-primary-accent',
                bg: 'bg-primary-accent/10'
              },
              { 
                icon: Layers, 
                title: 'Clean Architecture', 
                desc: 'Independent of UI, DB, or external agencies. Solid foundational layers.',
                color: 'text-secondary-accent',
                bg: 'bg-secondary-accent/10'
              },
              { 
                icon: Repeat, 
                title: 'CI/CD & Automated Testing', 
                desc: 'Unit, Widget, and Integration tests as a mandatory part of the dev cycle.',
                color: 'text-primary-accent',
                bg: 'bg-primary-accent/10'
              },
            ].map((item, idx) => (
              <motion.li 
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + idx * 0.1 }}
                className="flex gap-4 items-start"
              >
                <div className={`p-3 ${item.bg} rounded-xl`}>
                  <item.icon className={`${item.color}`} size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-on-surface text-lg">{item.title}</h4>
                  <p className="text-sm text-on-surface-variant leading-relaxed">{item.desc}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 rounded-3xl relative overflow-hidden group border-white/5"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-primary-accent/5 to-secondary-accent/5 -z-10" />
          <div className="space-y-6">
            <div className="flex justify-between items-center mb-8">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/40" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/40" />
                <div className="w-3 h-3 rounded-full bg-green-500/40" />
              </div>
              <span className="text-[10px] font-mono opacity-40">lib/core/architecture.dart</span>
            </div>
            <div className="font-mono text-sm space-y-3 opacity-90 leading-relaxed">
              <p className="text-secondary-accent">class <span className="text-on-surface">FlutterExpert</span> &#123;</p>
              <p className="pl-4 text-primary-accent"><span className="text-on-surface-variant">final</span> CleanArchitecture _arch;</p>
              <p className="pl-4 text-primary-accent"><span className="text-on-surface-variant">final</span> StateManagement _state;</p>
              <p className="pl-4 mt-6"><span className="text-secondary-accent">void</span> build(<span className="text-on-surface">App</span> idea) &#123;</p>
              <p className="pl-8 text-on-surface-variant">_arch.applyCleanPrinciples();</p>
              <p className="pl-8 text-on-surface-variant">_state.manageGlobalLogic();</p>
              <p className="pl-8 text-primary-accent"><span className="text-on-surface-variant">return</span> ExceptionUserExperience();</p>
              <p className="pl-4">&#125;</p>
              <p className="text-secondary-accent">&#125;</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Experience = () => {
  const experiences = [
    {
      company: 'NextZen Minds',
      role: 'Software Engineer',
      period: '2026 — PRESENT',
      desc: 'Leading high-impact mobile development initiatives, focusing on cutting-edge cross-platform solutions and technical mentoring.',
      icon: Briefcase,
      current: true
    },
    {
      company: 'CBNITS',
      role: 'Flutter Developer',
      period: '2022 — 2026',
      desc: 'Delivered 10+ production applications. Focused on UI/UX precision, performance optimization, and integrating complex 3rd party APIs.',
      icon: History,
      current: false
    }
  ];

  return (
    <section className="py-32 bg-surface-container-lowest" id="experience">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl font-bold"
          >
            Professional Journey
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-on-surface-variant mt-2 text-lg"
          >
            Evolution of engineering skills across industry leaders.
          </motion.p>
        </div>

        <div className="relative space-y-12">
          <div className="absolute left-[23px] top-0 bottom-0 w-[2px] timeline-dash hidden md:block" />
          
          {experiences.map((exp, idx) => (
            <motion.div 
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative md:pl-20 group"
            >
              <div className={`hidden md:flex absolute left-0 top-0 w-12 h-12 bg-surface border-2 ${exp.current ? 'border-primary-accent shadow-[0_0_15px_rgba(174,198,255,0.4)]' : 'border-outline-variant'} rounded-full items-center justify-center z-10 group-hover:scale-110 transition-transform duration-300`}>
                <exp.icon className={exp.current ? 'text-primary-accent fill-primary-accent' : 'text-outline-variant'} size={20} />
              </div>
              
              <div className="glass-card p-8 rounded-2xl max-w-2xl group-hover:border-primary-accent/30">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                  <div>
                    <h3 className="font-display text-2xl font-bold">{exp.company}</h3>
                    <p className="text-primary-accent font-semibold tracking-wide uppercase text-sm mt-1">{exp.role}</p>
                  </div>
                  <span className="font-mono text-[10px] md:text-xs opacity-60 bg-white/5 px-2 py-1 rounded inline-block">{exp.period}</span>
                </div>
                <p className="text-on-surface-variant leading-relaxed">{exp.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto" id="contact">
      <div className="grid md:grid-cols-2 gap-20">
        <div className="space-y-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-5xl md:text-7xl leading-none font-bold"
          >
            Let's Build Something <span className="text-primary-accent">Exceptional</span>.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-on-surface-variant text-lg leading-relaxed"
          >
            Open for collaboration on high-growth projects, mobile architecture consulting, and senior engineering roles.
          </motion.p>
          
          <div className="space-y-6 pt-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 text-on-surface hover:text-primary-accent transition-colors group cursor-pointer"
            >
              <div className="p-3 bg-primary-accent/10 rounded-xl group-hover:bg-primary-accent/20 transition-colors">
                <Mail className="text-primary-accent" size={24} />
              </div>
              <span className="text-lg font-medium">kuntal.nandi@dev.io</span>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-4 text-on-surface"
            >
              <div className="p-3 bg-primary-accent/10 rounded-xl">
                <MapPin className="text-primary-accent" size={24} />
              </div>
              <span className="text-lg font-medium">West Bengal, India</span>
            </motion.div>
          </div>

          <div className="flex gap-4 pt-8">
            {[
              { name: 'Github', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPnpY6qkOPt-renV0RmPKp0_nxG8EOjNADUvLm3AjxPyaBeHt7gIQ1TbKEobRImpPj4ae4Wf1ICu9AuEcQJ-byhRXJ5IvoO-XclWOxoygiTetnpE3pOqe5gJ-iOA4w-hZ0o1IJ6ivvJb1GOZlM72Zlxdnw943kEGCqzRE4NcMqKnckXQHfcas7akqb-TdtJObGVuPgw9gUkIvyNroIfErMmQPVMC5VFnKv2H6mw73SUn32NSrP0FK1A6BUkYxg2fjA-j3HmuN87B4' },
              { name: 'LinkedIn', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1xyaWUjSgrWxRg6VnUrkRDjcclvXXw7BYyIILxtV7a-nLyrhzVLlE3yfXNBUZbZVVVLlAzJ1Th_4xKNTqGZsSp2pWSC0pQ6aKgohTJIw2LwAqDvwNH7iMWaRtNbSSZE8AQh6--1b78TeUGSVDopkJtnMW7VKgLmK0ljAozyYDfo91i7aY3EktcizCrvzmcjVshbgCXV7BB7YuE5J6C7RG9nCk_nzx4ue-_uqhHMzEdafVn3zZTyeLHMdYNUFvkRWVcD4iVhyvpuo' },
              { name: 'Twitter', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDbKaSmUv6jn8ZVV2Eq0MMxg87GmELt6bC_IZWTFDBVqxN6Ol6_X2IE0XP7kov624nWfl46srdW9WDQi4-7WsIM5KnZ9n4GpwGEVrziPpHX5jOBdeCdxNPhdG5xincWl1BLLcZ7GY0C_93cGpbzdGU8QwndhiiVKNtU7BuNCwDMLfEiNKyZM7W26FUQvogWNgtWPM2HGc9NiwQ13QlTGzKdeX-MPOayTFRjFxbow48zWvmTBD7rg42IjQ_cY5sdfMgVZC5cInzZ4vM' },
            ].map((social, idx) => (
              <motion.a 
                key={social.name}
                href="#"
                whileHover={{ y: -5, backgroundColor: 'rgba(174,198,255,0.15)' }}
                className="w-14 h-14 glass-card rounded-2xl flex items-center justify-center p-3"
              >
                <img src={social.icon} alt={social.name} className="w-full h-full object-contain filter invert opacity-80" />
              </motion.a>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card p-10 rounded-3xl"
        >
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-3">
              <label className="font-mono text-[10px] uppercase opacity-60 tracking-wider">Name</label>
              <input 
                type="text" 
                placeholder="John Doe" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-primary-accent focus:ring-1 focus:ring-primary-accent/50 outline-none transition-all duration-300"
              />
            </div>
            <div className="space-y-3">
              <label className="font-mono text-[10px] uppercase opacity-60 tracking-wider">Email</label>
              <input 
                type="email" 
                placeholder="john@example.com" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-primary-accent focus:ring-1 focus:ring-primary-accent/50 outline-none transition-all duration-300"
              />
            </div>
            <div className="space-y-3">
              <label className="font-mono text-[10px] uppercase opacity-60 tracking-wider">Message</label>
              <textarea 
                rows={4} 
                placeholder="Describe your project..." 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-primary-accent focus:ring-1 focus:ring-primary-accent/50 outline-none transition-all duration-300 resize-none"
              />
            </div>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-primary-container text-on-primary-container py-5 rounded-2xl font-bold text-lg hover:shadow-[0_0_30px_rgba(0,112,243,0.3)] transition-all flex items-center justify-center gap-2"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="w-full py-16 border-t border-outline-variant/30 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="font-display text-2xl font-bold text-on-surface">Kuntal Nandi</div>
        
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-secondary-accent text-center">
          © 2024 Kuntal Nandi. Built with Flutter & Precision.
        </p>

        <div className="flex gap-8">
          {['Github', 'LinkedIn', 'Email'].map(item => (
            <a 
              key={item}
              href="#" 
              className="font-mono text-[10px] uppercase tracking-[0.1em] text-outline hover:text-on-surface transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <TechStack />
      <EngineeringShowcase />
      <Philosophy />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

