import React, { useState } from 'react';
import {
  Bell,
  BellOff,
  CheckCheck,
  Filter,
  Settings,
  ArrowRight,
  ShieldAlert,
  Bot,
  Volume2
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Notifications() {
  const [activeTab, setActiveTab] = useState('all');

  // Filter tabs with 0 notification counts
  const tabs = [
    { id: 'all', label: 'All Activity', count: 0 },
    { id: 'tips', label: 'Tips & Rains', count: 0 },
    { id: 'system', label: 'System & Deposits', count: 0 },
  ];

  return (
    <div className="bg-slate-950 text-slate-100 min-h-[calc(100vh-4rem)] py-10 px-4 sm:px-6 lg:px-8 selection:bg-blue-600 selection:text-white">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* PAGE HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-6">
          <div className="space-y-1">
            <h1 className="text-2xl font-bold text-white flex items-center gap-2.5">
              <Bell size={24} className="text-blue-400" />
              Notifications
            </h1>
            <p className="text-xs text-slate-400">
              Stay updated on incoming tips, rain claims, and account deposits
            </p>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              disabled
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-900/50 text-slate-600 border border-slate-800/50 cursor-not-allowed transition-colors"
            >
              <CheckCheck size={15} />
              <span>Mark all as read</span>
            </button>
          </div>
        </div>

        {/* FILTER TABS */}
        <div className="flex items-center gap-2 border-b border-slate-800/60 pb-3 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30 shadow-sm shadow-blue-500/10'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900/60'
              }`}
            >
              <span>{tab.label}</span>
              <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${
                activeTab === tab.id ? 'bg-blue-500/20 text-blue-300' : 'bg-slate-800 text-slate-500'
              }`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* EMPTY STATE CARD */}
        <div className="bg-slate-900/50 border border-slate-800/80 rounded-3xl p-10 sm:p-14 text-center space-y-6 shadow-xl relative overflow-hidden backdrop-blur-xl">
          
          {/* Subtle Ambient Glow Effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          {/* Empty Icon */}
          <div className="relative w-16 h-16 rounded-2xl bg-slate-950 border border-slate-800/80 flex items-center justify-center text-slate-500 mx-auto shadow-inner">
            <BellOff size={28} className="text-slate-400" />
            <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-slate-700 border-2 border-slate-900" />
          </div>

          {/* Content */}
          <div className="space-y-2 max-w-sm mx-auto relative z-10">
            <h2 className="text-lg font-bold text-white tracking-tight">You're all caught up!</h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              No active notifications right now. When you receive a tip, rain drop, or deposit confirmation, it will appear here.
            </p>
          </div>

          {/* Quick CTAs */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 relative z-10">
            <Link
              to="/profile"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2.5 rounded-xl text-xs font-semibold shadow-md shadow-blue-600/20 transition-all"
            >
              <span>Check Portfolio Balance</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* QUICK PREFERENCES FOOTER */}
        <div className="bg-slate-900/30 border border-slate-800/60 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2.5">
            <Volume2 size={16} className="text-blue-400 shrink-0" />
            <span>Discord & Telegram DM alerts are currently <strong>Enabled</strong>.</span>
          </div>

          <a
            href="#settings"
            className="text-slate-300 hover:text-white flex items-center gap-1 font-semibold underline underline-offset-4 transition-colors"
          >
            <Settings size={14} />
            <span>Notification Settings</span>
          </a>
        </div>

      </div>
    </div>
  );
}
