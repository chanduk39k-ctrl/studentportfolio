import React from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase,
  Building,
  Calendar,
  CheckCircle,
  ExternalLink
} from 'lucide-react';
import { INTERNSHIPS_DATA, PROJECTS_DATA } from '../data/portfolioData';
import { PlacementSimulator } from './PlacementSimulator';

export const InternshipAndProjects = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>PRACTICAL EXPERIENCE & INNOVATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
            Internships & Engineering Projects
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Real-world applied computer vision, machine learning classification models, and end-to-end data science pipelines.
          </p>
        </div>

        {/* 1. Internship Feature Cards */}
        <div className="space-y-8 mb-16">
          {INTERNSHIPS_DATA.map((internship, index) => (
            <motion.div
              key={internship.id || index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 sm:p-8 rounded-3xl glass-panel border border-indigo-500/30 relative overflow-hidden"
            >
              {/* Subtle glow backdrop */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-slate-800">
                <div>
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <span className="text-xs font-mono uppercase px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 font-semibold">
                      {internship.badge}
                    </span>
                    <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      {internship.period}
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-white font-heading">
                    {internship.role}
                  </h3>
                  <p className="text-indigo-400 font-medium text-sm flex items-center gap-1.5 mt-1">
                    <Building className="w-4 h-4 text-emerald-400" />
                    {internship.company}
                  </p>
                  {internship.focus && (
                    <p className="text-xs text-slate-400 font-mono mt-1">
                      Focus: <span className="text-slate-300">{internship.focus}</span>
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-5 space-y-4">
                <p className="text-sm text-slate-300 leading-relaxed max-w-4xl">
                  {internship.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
                  {internship.takeaways.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs text-slate-300 flex items-start gap-2.5"
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-slate-500 mr-2">Technologies:</span>
                  {internship.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 border border-slate-700/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 2. Key Machine Learning Projects */}
        <div className="space-y-12">
          {PROJECTS_DATA.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 sm:p-8 rounded-3xl glass-panel border border-slate-800 relative overflow-hidden"
            >
              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-slate-800">
                <div>
                  <div className="flex items-center gap-2 flex-wrap mb-1.5">
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 font-semibold">
                      {project.badge}
                    </span>
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                      {project.accuracy}
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-white font-heading">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-xs font-mono mt-1">
                    {project.category}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href="https://linkedin.com/in/kuruva-chandra-sekhar-827b3a39b"
                    target="_blank"
                    rel="noreferrer"
                    className="px-3.5 py-2 rounded-xl text-xs font-medium text-slate-300 bg-slate-900 hover:text-white border border-slate-800 hover:border-slate-700 flex items-center gap-1.5 transition"
                  >
                    <span>Discuss on LinkedIn</span>
                    <ExternalLink className="w-3.5 h-3.5 text-indigo-400" />
                  </a>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mt-5">
                {project.description}
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                {project.highlights.map((highlight, hIdx) => (
                  <div
                    key={hIdx}
                    className="p-3 rounded-xl bg-slate-900/50 border border-slate-800/80 text-xs text-slate-300 flex items-start gap-2"
                  >
                    <span className="text-indigo-400 font-bold text-sm leading-none">•</span>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Technology Tags */}
              <div className="mt-5 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-slate-500 mr-1">Stack:</span>
                {project.tech.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-xs font-mono px-2.5 py-1 rounded-lg bg-indigo-950/40 text-indigo-300 border border-indigo-800/40"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Interactive Placement Simulator widget */}
              {project.hasSimulator && <PlacementSimulator />}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
