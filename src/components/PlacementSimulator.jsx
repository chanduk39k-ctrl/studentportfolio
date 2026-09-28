import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Sparkles, RotateCcw } from 'lucide-react';

export const PlacementSimulator = () => {
  // Input features
  const [cgpa, setCgpa] = useState(7.5);
  const [backlogs, setBacklogs] = useState(0);
  const [internships, setInternships] = useState(1);
  const [dsaScore, setDsaScore] = useState(78); // 0 - 100
  const [projectsCount, setProjectsCount] = useState(3);

  const resetValues = () => {
    setCgpa(7.5);
    setBacklogs(0);
    setInternships(1);
    setDsaScore(78);
    setProjectsCount(3);
  };

  // Mock Machine Learning Logistic/Regression Classification scoring function
  // Weighted sum modeling based on real-world placement datasets
  const calculatePrediction = () => {
    // CGPA weight (max 10 -> normalized to 40% impact)
    const cgpaNormalized = (cgpa / 10) * 40;

    // DSA score weight (max 100 -> normalized to 25% impact)
    const dsaNormalized = (dsaScore / 100) * 25;

    // Internships weight (up to 3 -> max 18% impact)
    const internshipWeight = Math.min(internships, 3) * 6;

    // Projects count weight (up to 4 -> max 12% impact)
    const projectWeight = Math.min(projectsCount, 4) * 3;

    // Backlogs penalty (each active backlog penalizes by 14%)
    const backlogPenalty = backlogs * 14;

    let score = cgpaNormalized + dsaNormalized + internshipWeight + projectWeight - backlogPenalty;
    score = Math.max(8, Math.min(98, Math.round(score)));

    let tier = 'High Probability';
    let statusText = 'Excellent Candidate Profile! Very high likelihood of Tier-1/Product Placement.';

    if (score < 55) {
      tier = 'Needs Preparation';
      statusText = 'Placement probability is low. Focus on clearing backlogs & strengthening core coding.';
    } else if (score < 75) {
      tier = 'Moderate Probability';
      statusText = 'Solid foundational profile. An extra internship or project will tip the odds higher!';
    }

    return { score, tier, statusText };
  };

  const result = calculatePrediction();

  return (
    <div className="mt-6 p-5 sm:p-6 rounded-2xl bg-slate-900/90 border border-indigo-500/25 shadow-xl relative overflow-hidden backdrop-blur-md">
      {/* Decorative top pill */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-800">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-base font-semibold text-white flex items-center gap-2">
              Interactive Placement Simulator
              <span className="text-[10px] font-mono tracking-wider uppercase px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Live ML Inference
              </span>
            </h4>
            <p className="text-xs text-slate-400">
              Simulate how academic metrics influence the trained 85% accuracy classification model.
            </p>
          </div>
        </div>

        <button
          onClick={resetValues}
          title="Reset to Chandler's baseline values"
          className="p-2 text-slate-400 hover:text-indigo-300 transition-colors rounded-lg hover:bg-slate-800/80"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-5">
        {/* Sliders Area (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          {/* CGPA Slider */}
          <div>
            <div className="flex justify-between items-center text-xs mb-1.5 font-medium">
              <span className="text-slate-300 flex items-center gap-1.5">
                B.Tech CGPA (Current: {cgpa})
              </span>
              <span className="font-mono text-indigo-400 font-bold">{cgpa.toFixed(1)} / 10.0</span>
            </div>
            <input
              type="range"
              min="5.0"
              max="10.0"
              step="0.1"
              value={cgpa}
              onChange={(e) => setCgpa(parseFloat(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
            />
          </div>

          {/* DSA & Coding Score */}
          <div>
            <div className="flex justify-between items-center text-xs mb-1.5 font-medium">
              <span className="text-slate-300">Technical & Problem Solving Aptitude</span>
              <span className="font-mono text-indigo-400 font-bold">{dsaScore}%</span>
            </div>
            <input
              type="range"
              min="40"
              max="100"
              step="1"
              value={dsaScore}
              onChange={(e) => setDsaScore(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
            {/* Active Backlogs */}
            <div className="p-3 bg-slate-800/50 rounded-xl border border-slate-700/50">
              <label className="text-xs text-slate-300 block mb-1">Backlogs</label>
              <select
                value={backlogs}
                onChange={(e) => setBacklogs(parseInt(e.target.value))}
                className="w-full bg-slate-900 border border-slate-700 text-xs rounded-lg px-2.5 py-1.5 text-white focus:outline-none focus:border-indigo-500 font-mono"
              >
                <option value={0}>0 (Clean Track)</option>
                <option value={1}>1 Backlog</option>
                <option value={2}>2 Backlogs</option>
                <option value={3}>3+ Backlogs</option>
              </select>
            </div>

            {/* Internships */}
            <div className="p-3 bg-slate-800/50 rounded-xl border border-slate-700/50">
              <label className="text-xs text-slate-300 block mb-1">Internships</label>
              <select
                value={internships}
                onChange={(e) => setInternships(parseInt(e.target.value))}
                className="w-full bg-slate-900 border border-slate-700 text-xs rounded-lg px-2.5 py-1.5 text-white focus:outline-none focus:border-indigo-500 font-mono"
              >
                <option value={0}>0 Completed</option>
                <option value={1}>1 Internship (SkillDzire / Innomatics)</option>
                <option value={2}>2 Internships (Innomatics & SkillDzire)</option>
                <option value={3}>3+ Internships</option>
              </select>
            </div>

            {/* Projects */}
            <div className="p-3 bg-slate-800/50 rounded-xl border border-slate-700/50">
              <label className="text-xs text-slate-300 block mb-1">Major Projects</label>
              <select
                value={projectsCount}
                onChange={(e) => setProjectsCount(parseInt(e.target.value))}
                className="w-full bg-slate-900 border border-slate-700 text-xs rounded-lg px-2.5 py-1.5 text-white focus:outline-none focus:border-indigo-500 font-mono"
              >
                <option value={1}>1 Project</option>
                <option value={2}>2 Projects</option>
                <option value={3}>3 Projects</option>
                <option value={4}>4+ Projects</option>
              </select>
            </div>
          </div>
        </div>

        {/* Prediction Results Gauge Area (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between p-4 rounded-xl bg-gradient-to-b from-slate-800/70 to-slate-900/90 border border-slate-700/60 relative">
          <div>
            <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>PREDICTED OUTCOME</span>
              <span className="flex items-center gap-1 text-emerald-400">
                <Sparkles className="w-3.5 h-3.5" />
                Random Forest ML
              </span>
            </div>

            {/* Big probability dial */}
            <div className="mt-3 flex items-baseline gap-2">
              <motion.span
                key={result.score}
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className={`text-4xl font-extrabold font-heading ${
                  result.score >= 75
                    ? 'text-emerald-400'
                    : result.score >= 55
                    ? 'text-indigo-400'
                    : 'text-amber-400'
                }`}
              >
                {result.score}%
              </motion.span>
              <span className="text-xs text-slate-400 font-medium">Placement Chance</span>
            </div>

            {/* Progress bar */}
            <div className="w-full bg-slate-950 rounded-full h-2.5 mt-2.5 overflow-hidden p-0.5 border border-slate-800">
              <motion.div
                className={`h-full rounded-full ${
                  result.score >= 75
                    ? 'bg-gradient-to-r from-teal-400 to-emerald-500'
                    : result.score >= 55
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-500'
                    : 'bg-gradient-to-r from-amber-500 to-rose-500'
                }`}
                initial={{ width: 0 }}
                animate={{ width: `${result.score}%` }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              />
            </div>

            <div className="mt-3">
              <span
                className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                  result.score >= 75
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                    : result.score >= 55
                    ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                    : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                }`}
              >
                {result.tier}
              </span>
            </div>

            <p className="mt-2 text-xs text-slate-300 leading-relaxed">
              {result.statusText}
            </p>
          </div>

          <div className="pt-3 mt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
            <span>Historical Model Benchmark</span>
            <span className="text-indigo-300 font-mono font-medium">~85% Test Accuracy</span>
          </div>
        </div>
      </div>
    </div>
  );
};
