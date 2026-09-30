import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Home, Compass, Bell, User, Menu, X, LogOut } from 'lucide-react';
import demo_bot_logo from "../assets/demo-bot-logo.jpg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Helper styling for desktop nav links
  const desktopLinkStyle = ({ isActive }) =>
    `flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
      isActive
        ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30 shadow-sm shadow-blue-500/20'
        : 'text-slate-400 hover:text-slate-100 hover:bg-slate-900'
    }`;

  // Helper styling for mobile nav links
  const mobileLinkStyle = ({ isActive }) =>
    `flex items-center gap-3 px-3 py-2 rounded-lg text-base font-medium transition-all duration-200 ${
      isActive
        ? 'bg-blue-600/20 text-blue-400 font-semibold border border-blue-500/30'
        : 'text-slate-300 hover:bg-slate-900 hover:text-white'
    }`;

  return (
    <nav className="bg-slate-950/90 backdrop-blur-md border-b border-slate-800 shadow-lg shadow-blue-950/40 rounded-b-2xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3" onClick={closeMenu}>
            <img
              src={demo_bot_logo} 
              alt="Logo"
              className="h-9 w-9 rounded-xl shadow-lg shadow-blue-500/50 object-cover border border-blue-500/30"
            />
            <span className="text-xl font-bold text-white tracking-tight">Demo Bot</span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-2">
            <NavLink to="/" className={desktopLinkStyle} end>
              <Home size={18} />
              <span>Home</span>
            </NavLink>

            <NavLink to="/explore" className={desktopLinkStyle}>
              <Compass size={18} />
              <span>Explore</span>
            </NavLink>

            <NavLink to="/notifications" className={desktopLinkStyle}>
              <Bell size={18} />
              <span>Notifications</span>
            </NavLink>

            <NavLink to="/profile" className={desktopLinkStyle}>
              <User size={18} />
              <span>Profile</span>
            </NavLink>
          </div>

          {/* Right Action Button (Desktop) */}
          <div className="hidden md:flex items-center">
            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-md shadow-blue-600/30 transition-colors">
              <LogOut size={16} />
              <span>Logout</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-slate-400 hover:text-white focus:outline-none p-2 rounded-lg hover:bg-slate-900 transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950/95 backdrop-blur-xl px-4 pt-2 pb-4 space-y-1 shadow-2xl rounded-b-2xl">
          <NavLink to="/" className={mobileLinkStyle} onClick={closeMenu} end>
            <Home size={20} />
            <span>Home</span>
          </NavLink>

          <NavLink to="/explore" className={mobileLinkStyle} onClick={closeMenu}>
            <Compass size={20} />
            <span>Explore</span>
          </NavLink>

          <NavLink to="/notifications" className={mobileLinkStyle} onClick={closeMenu}>
            <Bell size={20} />
            <span>Notifications</span>
          </NavLink>

          <NavLink to="/profile" className={mobileLinkStyle} onClick={closeMenu}>
            <User size={20} />
            <span>Profile</span>
          </NavLink>

          <div className="pt-3 mt-2 border-t border-slate-800">
            <button className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-500 shadow-md shadow-blue-600/30 transition-colors">
              <LogOut size={18} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
