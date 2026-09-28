import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code,
  Database,
  FileCode,
  Layout,
  Cpu,
  Binary,
  LineChart,
  CheckCircle2,
  Compass,
  Users,
  Sparkles
} from 'lucide-react';
import { SKILLS_CATEGORIES } from '../data/portfolioData';

const iconMap = {
  Code: Code,
  Database: Database,
  FileCode: FileCode,
  Layout: Layout,
  Cpu: Cpu,
  Binary: Binary,
  LineChart: LineChart,
  CheckCircle2: CheckCircle2,
  Compass: Compass,
  Users: Users
};

export const SkillsShowcase = () => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredCategories =
    activeTab === 'all'
      ? SKILLS_CATEGORIES
      : SKILLS_CATEGORIES.filter((cat) => cat.id === activeTab);

  return (
    <section id="skills" className="py-20 relative bg-slate-950/40 border-y border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TECHNICAL EXPERTISE & PROFICIENCIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
            Categorized Skills Showcase
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Proficient in industry programming stacks, object-oriented concepts, statistical data analysis, and predictive model building.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                activeTab === 'all'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/25'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              All Competencies
            </button>
            {SKILLS_CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                  activeTab === category.id
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/25'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="space-y-12">
          <AnimatePresence mode="wait">
            {filteredCategories.map((category) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-bold text-white font-heading flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-indigo-500"></span>
                    {category.name}
                  </h3>
                  <div className="flex-1 h-[1px] bg-slate-800"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.skills.map((skill, sIdx) => {
                    const IconComponent = iconMap[skill.icon] || Code;
                    return (
                      <motion.div
                        key={sIdx}
                        whileHover={{ y: -4, transition: { duration: 0.2 } }}
                        className="p-5 rounded-2xl glass-card relative group flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <div className="p-2.5 rounded-xl bg-slate-800/80 text-indigo-400 border border-slate-700/60 group-hover:bg-indigo-500/20 group-hover:text-indigo-300 transition-colors">
                              <IconComponent className="w-5 h-5" />
                            </div>
                            <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-indigo-300 transition-colors">
                              {skill.level}%
                            </span>
                          </div>

                          <h4 className="text-base font-bold text-white group-hover:text-indigo-200 transition-colors">
                            {skill.name}
                          </h4>

                          <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                            {skill.highlight}
                          </p>
                        </div>

                        {/* Interactive Skill Progress Bar */}
                        <div className="mt-4 pt-3 border-t border-slate-800/80">
                          <div className="w-full bg-slate-900 rounded-full h-1.5 overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-indigo-500 to-emerald-400 rounded-full group-hover:brightness-125 transition-all duration-500"
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
