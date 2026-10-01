import React from 'react';
import { Link } from 'react-router-dom';
import {
  Wrench,
  Home,
  LayoutDashboard,
  ArrowLeft,
  Bot,
  Terminal,
  Compass,
  CircleDot
} from 'lucide-react';

export default function NotFound() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-[calc(100vh-4rem)] flex items-center justify-center p-4 sm:p-6 lg:p-8 selection:bg-blue-600 selection:text-white relative overflow-hidden">
      
      {/* Background Ambient Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-600/10 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-xl w-full text-center space-y-8 relative z-10">
        
        {/* TOP GLOWING BADGE */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-slate-400 text-xs font-mono backdrop-blur-md shadow-lg">
          <CircleDot size={12} className="text-amber-400 animate-pulse" />
          <span>Error 404 • Node Unreachable</span>
        </div>

        {/* 404 / MAINTENANCE GRAPHIC */}
        <div className="relative w-28 h-28 mx-auto flex items-center justify-center">
          {/* Decorative Outer Rings */}
          <div className="absolute inset-0 rounded-3xl border border-blue-500/20 bg-slate-900/60 backdrop-blur-xl rotate-6 shadow-xl" />
          <div className="absolute inset-0 rounded-3xl border border-slate-800 bg-slate-950/90 -rotate-3" />
          
          {/* Main Icon Container */}
          <div className="relative z-10 p-5 rounded-2xl bg-slate-900 border border-blue-500/30 text-blue-400 shadow-xl shadow-blue-500/20">
            <Wrench size={40} className="animate-bounce" />
          </div>

          {/* Sub Bot Badge */}
          <div className="absolute -bottom-2 -right-2 z-20 bg-blue-600 text-white p-2 rounded-xl border-2 border-slate-950 shadow-md">
            <Bot size={16} />
          </div>
        </div>

        {/* TEXT CONTENT */}
        <div className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Page Unavailable or Under Maintenance
          </h1>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-md mx-auto">
            The page you are looking for doesn't exist, has been moved, or is currently undergoing scheduled RPC node maintenance.
          </p>
        </div>

        {/* RECOVERY ACTION BUTTONS */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-lg shadow-blue-600/30 transition-all hover:scale-105"
          >
            <Home size={16} />
            <span>Return to Home</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
