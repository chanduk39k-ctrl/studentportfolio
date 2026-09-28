import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Terminal,
  Layers,
  Menu,
  X
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Navbar = ({ viewMode, setViewMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About & Education', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Internship & Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-xl bg-[#090d16]/80 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo with Avatar */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-500 to-emerald-400 p-[1.5px] shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-[#090d16] rounded-[10px] overflow-hidden flex items-center justify-center">
              <img
                src="/image.jpeg"
                alt={PERSONAL_INFO.shortName}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
          <div>
            <span className="font-heading font-bold text-white text-base tracking-tight flex items-center gap-1.5">
              {PERSONAL_INFO.shortName}
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            </span>
            <span className="text-[10px] text-slate-400 block font-mono -mt-0.5">
              CSE (Data Science)
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-medium text-slate-300 hover:text-white transition-colors tracking-wide hover:underline underline-offset-8 decoration-indigo-500/50"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions (View Mode Switcher + Contact CTA) */}
        <div className="hidden sm:flex items-center gap-3">
          {/* View Mode Toggle Button */}
          <div className="flex items-center p-1 rounded-xl bg-slate-900 border border-slate-800 text-xs">
            <button
              onClick={() => setViewMode('gui')}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg transition-all ${
                viewMode === 'gui'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Modern GUI</span>
            </button>
            <button
              onClick={() => setViewMode('terminal')}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg transition-all ${
                viewMode === 'terminal'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>Terminal CLI</span>
            </button>
          </div>

          <a
            href="#contact"
            className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 border border-indigo-500/30 shadow-md shadow-indigo-600/20 transition-all transform hover:-translate-y-0.5"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 sm:hidden">
          <button
            onClick={() => setViewMode(viewMode === 'gui' ? 'terminal' : 'gui')}
            className="p-2 rounded-lg bg-slate-800 text-indigo-400"
            title="Toggle View Mode"
          >
            {viewMode === 'gui' ? <Terminal className="w-4 h-4" /> : <Layers className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white focus:outline-none"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#090d16] border-b border-slate-800 px-4 py-5 space-y-4"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm text-slate-300 hover:text-indigo-400 py-1 font-medium transition"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="pt-3 border-t border-slate-800 flex gap-2">
              <button
                onClick={() => {
                  setViewMode('gui');
                  setIsOpen(false);
                }}
                className={`flex-1 py-2 rounded-lg text-xs font-medium flex items-center justify-center gap-1.5 ${
                  viewMode === 'gui' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                Modern GUI
              </button>
              <button
                onClick={() => {
                  setViewMode('terminal');
                  setIsOpen(false);
                }}
                className={`flex-1 py-2 rounded-lg text-xs font-medium flex items-center justify-center gap-1.5 ${
                  viewMode === 'terminal' ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-400'
                }`}
              >
                <Terminal className="w-3.5 h-3.5" />
                Interactive CLI
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
