import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Calendar,
  MapPin,
  Award
} from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const AboutEducation = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC FOUNDATION & BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
            Education & Academic Excellence
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Consistently disciplined academic journey with proven competencies in mathematical modeling,
            computer science core fundamentals, and data science principles.
          </p>
        </div>

        {/* Professional Summary Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 p-6 sm:p-8 rounded-2xl glass-panel relative overflow-hidden"
        >
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
            <div className="space-y-2 max-w-3xl">
              <h3 className="text-xl font-bold text-white font-heading flex items-center gap-2">
                <span>Computer Science & Engineering Specialization</span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">
                  Data Science
                </span>
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Strong engineering background encompassing Object-Oriented Programming (OOPs), Database Management Systems (SQL), Machine Learning algorithm implementation, and statistical inference. Adept at translating complex data questions into actionable machine learning models and robust software solutions.
              </p>
            </div>
            <div className="flex flex-row md:flex-col gap-3 min-w-[190px]">
              <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 text-center">
                <span className="text-xs text-slate-400 block font-mono">B.Tech Target</span>
                <span className="text-lg font-bold text-indigo-400 font-heading">2027 Graduate</span>
              </div>
              <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 text-center">
                <span className="text-xs text-slate-400 block font-mono">SSC Achievement</span>
                <span className="text-lg font-bold text-emerald-400 font-heading">99% Top Rank</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Education Timeline Cards */}
        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-32 space-y-10">
          {EDUCATION_DATA.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative pl-8 md:pl-10 group"
            >
              {/* Timeline Node Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-indigo-500 group-hover:scale-125 group-hover:bg-indigo-500 transition-all duration-300 shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>

              {/* Card Container */}
              <div className="p-6 rounded-2xl glass-card relative overflow-hidden">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 mb-3">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="text-lg font-bold text-white font-heading">
                        {item.degree}
                      </h4>
                      <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-500/15 text-indigo-300 border border-indigo-500/30 font-semibold font-mono">
                        {item.score}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-indigo-400 mt-1">
                      {item.institution}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      {item.period}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      {item.location}
                    </span>
                  </div>
                </div>

                <div className="text-xs font-semibold text-emerald-400 mb-2 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5" />
                  <span>{item.highlight}</span>
                </div>

                <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                  {item.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                      <span className="text-indigo-400 mt-1 font-bold">›</span>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
