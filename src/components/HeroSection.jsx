import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  BrainCircuit,
  Mail
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const HeroSection = ({ setViewMode }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background glow radial accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-indigo-600/15 via-emerald-500/10 to-transparent blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Hero Text & Information */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-indigo-500/30 text-xs font-mono text-indigo-300 mb-6 shadow-sm backdrop-blur-md"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Placements & Engineering Roles</span>
              <span className="text-slate-600">|</span>
              <span className="text-emerald-400 font-semibold">2027 Batch</span>
            </motion.div>

            {/* Candidate Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 font-heading"
            >
              KURUVA{' '}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-emerald-400 bg-clip-text text-transparent">
                CHANDRASEKHAR
              </span>
            </motion.h1>

            {/* Title & Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-1.5 mb-6"
            >
              <p className="text-lg sm:text-xl text-slate-200 font-medium font-sans">
                B.Tech Computer Science & Engineering{' '}
                <span className="text-indigo-400 font-semibold">(Data Science)</span> Student
              </p>
              <p className="text-sm text-slate-400 font-mono flex items-center justify-center lg:justify-start gap-2">
                <BrainCircuit className="w-4 h-4 text-emerald-400 inline" />
                Aspiring Software & Data Science Professional
              </p>
            </motion.div>

            {/* Objective Statement Glassmorphism Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-5 rounded-2xl glass-panel-glow text-left mb-8 relative group"
            >
              <div className="absolute top-3 right-4 text-xs font-mono text-indigo-400/80 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Career Objective</span>
              </div>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed italic font-sans pr-2">
                "{PERSONAL_INFO.objective}"
              </p>
            </motion.div>

            {/* Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5"
            >
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-600/30 flex items-center gap-2 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={() => {
                  setViewMode('terminal');
                  window.scrollTo({ top: 380, behavior: 'smooth' });
                }}
                className="px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/90 hover:bg-slate-800/90 border border-slate-700/80 hover:border-emerald-500/50 flex items-center gap-2 transition-all group backdrop-blur-md shadow-md"
              >
                <span className="text-emerald-400 font-mono font-bold group-hover:scale-110 transition-transform">&gt;_</span>
                <span>Interactive Terminal</span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  CLI
                </span>
              </button>

              <a
                href="#contact"
                className="px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 hover:border-slate-700 flex items-center gap-2 transition-all"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>Contact Me</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Styled Profile Photo Container */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative group w-full max-w-[320px] sm:max-w-[360px]"
            >
              {/* Outer Glow Halo Ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-indigo-500 via-purple-500 to-emerald-400 rounded-3xl opacity-30 blur-xl group-hover:opacity-60 transition duration-700 pointer-events-none" />

              {/* Main Photo Card Container */}
              <div className="relative rounded-3xl p-2.5 bg-slate-950/80 border border-indigo-500/30 backdrop-blur-xl shadow-2xl">
                {/* Image Container with Inner Border & Shadow */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-900/90 border border-slate-800">
                  <img
                    src="/image.jpeg"
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-105"
                    loading="eager"
                  />

                  {/* Gradient Overlay for seamless blend */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent pointer-events-none" />

                  {/* Top Badge Overlay */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 border border-indigo-500/40 text-[11px] font-mono text-indigo-300 backdrop-blur-md shadow-md">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>Data Science & ML</span>
                  </div>

                  {/* Bottom Info Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-900/85 border border-slate-700/60 backdrop-blur-md">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold text-white font-heading">
                          {PERSONAL_INFO.shortName}
                        </div>
                        <div className="text-[10px] text-slate-400 font-mono">
                          St. Johns CET (JNTUA)
                        </div>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                        CGPA 7.5
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Key Metrics / Highlights Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto"
        >
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm text-center hover:border-indigo-500/30 transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-bold font-heading text-white bg-gradient-to-r from-indigo-300 to-emerald-300 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-slate-300 mt-0.5">{stat.label}</div>
              <div className="text-[11px] text-slate-500 font-mono mt-0.5">{stat.helper}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
