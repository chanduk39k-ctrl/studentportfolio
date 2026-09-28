import React, { useState, useEffect, useRef } from 'react';
import { Terminal, CornerDownLeft } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION_DATA, SKILLS_CATEGORIES, INTERNSHIPS_DATA, PROJECTS_DATA } from '../data/portfolioData';

export const TerminalView = ({ onClose }) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    {
      type: 'system',
      text: `Chandrasekhar CLI OS [Version 2.4.0-ml-stable]
(c) 2026 Kuruva Chandrasekhar. Type "help" or click one of the suggested commands below.`
    }
  ]);

  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleCommand = (rawCmd) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, { type: 'user', text: rawCmd }];

    switch (cmd) {
      case 'help':
        newHistory.push({
          type: 'output',
          text: `AVAILABLE COMMANDS:
  about        - Display professional summary & career objective
  education    - View academic history (B.Tech, Intermediate, SSC)
  skills       - List categorized technical & soft skills
  internships  - Details on Innomatics Research Labs & SkillDzire internships
  projects     - Overview of ML & Data Engineering projects
  contact      - View Chandrasekhar's verified email, phone & LinkedIn
  clear        - Clear terminal output
  exit         - Return to graphical UI mode`
        });
        break;

      case 'about':
        newHistory.push({
          type: 'output',
          text: `CANDIDATE: ${PERSONAL_INFO.name}
ROLE: ${PERSONAL_INFO.title}
OBJECTIVE:
"${PERSONAL_INFO.objective}"

LOCATION: ${PERSONAL_INFO.location}`
        });
        break;

      case 'education':
        newHistory.push({
          type: 'output',
          text: EDUCATION_DATA.map(
            (edu) =>
              `• [${edu.period}] ${edu.degree}\n  Institution: ${edu.institution}\n  Metric: ${edu.score} (${edu.highlight})`
          ).join('\n\n')
        });
        break;

      case 'skills':
        newHistory.push({
          type: 'output',
          text: SKILLS_CATEGORIES.map(
            (cat) =>
              `[${cat.name.toUpperCase()}]\n` +
              cat.skills.map((s) => `  - ${s.name} (${s.level}% proficiency)`).join('\n')
          ).join('\n\n')
        });
        break;

      case 'internship':
      case 'internships':
        newHistory.push({
          type: 'output',
          text: INTERNSHIPS_DATA.map(
            (item) =>
              `▶ [${item.badge.toUpperCase()}]\n` +
              `  ORGANIZATION: ${item.company}\n` +
              `  ROLE:         ${item.role}\n` +
              `  PERIOD:       ${item.period}\n` +
              (item.focus ? `  FOCUS:        ${item.focus}\n` : '') +
              `  SUMMARY:      ${item.description}\n` +
              `  CORE STACK:   ${item.tech.join(', ')}`
          ).join('\n\n')
        });
        break;

      case 'projects':
        newHistory.push({
          type: 'output',
          text: PROJECTS_DATA.map(
            (p) =>
              `★ ${p.title} [${p.accuracy}]\n  Category: ${p.category}\n  Summary: ${p.description}\n  Tech: ${p.tech.join(', ')}`
          ).join('\n\n')
        });
        break;

      case 'contact':
        newHistory.push({
          type: 'output',
          text: `GET IN TOUCH:
  Email:    ${PERSONAL_INFO.email}
  Phone:    ${PERSONAL_INFO.phone}
  LinkedIn: ${PERSONAL_INFO.linkedin}`
        });
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      case 'exit':
      case 'gui':
        if (onClose) onClose();
        return;

      default:
        newHistory.push({
          type: 'error',
          text: `Command not recognized: "${rawCmd}". Type "help" to view valid commands.`
        });
        break;
    }

    setHistory(newHistory);
    setInputVal('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCommand(inputVal);
  };

  const quickCommands = ['help', 'about', 'education', 'skills', 'internships', 'projects', 'contact', 'clear'];

  return (
    <div className="w-full max-w-4xl mx-auto rounded-2xl bg-[#090d16]/95 border border-slate-700/80 shadow-2xl overflow-hidden backdrop-blur-xl font-mono text-sm">
      {/* Terminal Title Bar */}
      <div className="bg-slate-900/90 px-4 py-3 flex items-center justify-between border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 mr-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-300">
            <Terminal className="w-3.5 h-3.5 text-indigo-400" />
            <span className="text-slate-200 font-medium">chandrasekhar@portfolio:~$</span>
            <span className="hidden sm:inline text-slate-500">zsh --interactive</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {onClose && (
            <button
              onClick={onClose}
              className="px-2.5 py-1 text-xs rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition flex items-center gap-1 border border-slate-700"
            >
              Switch to GUI
            </button>
          )}
        </div>
      </div>

      {/* Suggested Quick Commands */}
      <div className="bg-slate-950/60 px-4 py-2 border-b border-slate-800/80 flex items-center gap-1.5 overflow-x-auto text-xs">
        <span className="text-slate-500 text-[11px] whitespace-nowrap">Suggested:</span>
        {quickCommands.map((cmd) => (
          <button
            key={cmd}
            onClick={() => handleCommand(cmd)}
            className="px-2 py-0.5 rounded bg-slate-800/80 hover:bg-indigo-600/30 text-indigo-300 hover:text-indigo-200 border border-slate-700/60 transition text-xs whitespace-nowrap"
          >
            {cmd}
          </button>
        ))}
      </div>

      {/* Terminal Screen Body */}
      <div
        className="p-5 h-[420px] overflow-y-auto space-y-3 font-mono leading-relaxed"
        onClick={() => inputRef.current?.focus()}
      >
        {history.map((item, index) => {
          if (item.type === 'system') {
            return (
              <div key={index} className="text-slate-400 whitespace-pre-line text-xs">
                {item.text}
              </div>
            );
          }
          if (item.type === 'user') {
            return (
              <div key={index} className="flex items-center gap-2 text-indigo-300">
                <span className="text-emerald-400 font-bold">➜</span>
                <span className="text-slate-400">~</span>
                <span className="font-semibold text-white">{item.text}</span>
              </div>
            );
          }
          if (item.type === 'error') {
            return (
              <div key={index} className="text-rose-400 whitespace-pre-line text-xs">
                {item.text}
              </div>
            );
          }
          return (
            <div key={index} className="text-slate-200 whitespace-pre-line bg-slate-950/40 p-3 rounded-lg border border-slate-800/60 text-xs">
              {item.text}
            </div>
          );
        })}
        <div ref={bottomRef} />
      </div>

      {/* Interactive Command Prompt */}
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-2 p-3 bg-slate-950 border-t border-slate-800"
      >
        <span className="text-emerald-400 font-bold pl-2">➜</span>
        <span className="text-indigo-400 font-semibold text-xs">portfolio</span>
        <span className="text-slate-500 font-mono text-xs">$</span>
        <input
          ref={inputRef}
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="Type 'help' for available commands..."
          className="flex-1 bg-transparent text-white focus:outline-none font-mono text-xs placeholder:text-slate-600"
          autoFocus
        />
        <button
          type="submit"
          className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-sans font-medium transition flex items-center gap-1.5 shadow-sm"
        >
          <CornerDownLeft className="w-3 h-3" />
          <span className="hidden sm:inline">Run</span>
        </button>
      </form>
    </div>
  );
};
