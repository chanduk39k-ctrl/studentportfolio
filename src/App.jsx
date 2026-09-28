import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { InteractiveBackground } from './components/InteractiveBackground';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutEducation } from './components/AboutEducation';
import { SkillsShowcase } from './components/SkillsShowcase';
import { InternshipAndProjects } from './components/InternshipAndProjects';
import { ContactFooter } from './components/ContactFooter';
import { TerminalView } from './components/TerminalView';
import { ArrowLeft } from 'lucide-react';

export function App() {
  const [viewMode, setViewMode] = useState('gui'); // 'gui' | 'terminal'

  return (
    <div className="min-h-screen bg-[#060911] text-slate-100 relative selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Dynamic Background Effect */}
      <InteractiveBackground />

      {/* Main Top Navigation */}
      <Navbar viewMode={viewMode} setViewMode={setViewMode} />

      {/* Main Container */}
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          {viewMode === 'terminal' ? (
            <motion.div
              key="terminal-mode"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
            >
              <div className="mb-6 flex items-center justify-between">
                <button
                  onClick={() => setViewMode('gui')}
                  className="flex items-center gap-2 text-xs font-mono text-indigo-400 hover:text-indigo-300 transition"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Return to Standard GUI Portfolio</span>
                </button>
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Terminal Emulation Active</span>
                </div>
              </div>

              {/* Developer Terminal View */}
              <TerminalView onClose={() => setViewMode('gui')} />
            </motion.div>
          ) : (
            <motion.div
              key="gui-mode"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* 1. Hero Section */}
              <HeroSection setViewMode={setViewMode} />

              {/* 2. About & Education Timeline */}
              <AboutEducation />

              {/* 3. Categorized Skills Showcase */}
              <SkillsShowcase />

              {/* 4. Internship & Advanced Projects (with simulator widget) */}
              <InternshipAndProjects />

              {/* 5. Contact & Footer */}
              <ContactFooter />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
