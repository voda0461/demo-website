import { Link } from 'react-router-dom';
import {
  Zap,
  ShieldCheck,
  Coins,
  Send,
  Sparkles,
  ArrowRight,
  Bot,
  CheckCircle2,
  Wallet,
  Users,
  MessageSquare,
  Flame,
} from 'lucide-react';
import usdtIcon from "../../assets/usdt.svg"
import usdcIcon from "../../assets/usdc.svg"
import solIcon from "../../assets/sol.svg"
import ethIcon from "../../assets/eth.svg"
import btcIcon from "../../assets/btc.svg"
import dogeIcon from "../../assets/doge.svg"
import xnoIcon from "../../assets/xno.svg"
import maticIcon from "../../assets/matic.svg"
import nearIcon from "../../assets/near.svg"
import avaxIcon from "../../assets/avax.svg"
import xrpIcon from "../../assets/xrp.svg"
import tonIcon from "../../assets/ton.svg"
import suiIcon from "../../assets/sui.svg"
import aptIcon from "../../assets/apt.svg"
import trxIcon from "../../assets/trx.svg"
import ltcIcon from "../../assets/ltc.svg"

export default function Home() {
  // Popular supported tokens array
  const tokens = [
  { symbol: 'USDT', name: 'Tether', icon: usdtIcon },
  { symbol: 'USDC', name: 'USD Coin', icon: usdcIcon },
  { symbol: 'SOL', name: 'Solana', icon: solIcon },
  { symbol: 'ETH', name: 'Ethereum', icon: ethIcon },
  { symbol: 'BTC', name: 'Bitcoin', icon: btcIcon },
  { symbol: 'DOGE', name: 'Dogecoin', icon: dogeIcon },
  { symbol: 'XNO', name: 'Nano', icon: xnoIcon },
  { symbol: 'MATIC', name: 'Polygon', icon: maticIcon },
  { symbol: 'NEAR', name: 'NEAR Protocol', icon: nearIcon },
  { symbol: 'AVAX', name: 'Avalanche', icon: avaxIcon },
  { symbol: 'XRP', name: 'XRP', icon: xrpIcon },
  { symbol: 'TON', name: 'Toncoin', icon: tonIcon },
  { symbol: 'SUI', name: 'Sui', icon: suiIcon },
  { symbol: 'APT', name: 'Aptos', icon: aptIcon },
  { symbol: 'TRX', name: 'TRON', icon: trxIcon },
  { symbol: 'LTC', name: 'Litecoin', icon: ltcIcon },
];

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen selection:bg-blue-600 selection:text-white">
      
      {/* HERO SECTION */}
      <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden">
        {/* Glowing Background Blur Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-cyan-500/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Feeless Pill Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs sm:text-sm font-medium backdrop-blur-md">
                <Zap size={16} className="text-blue-400 fill-blue-400/20" />
                <span>0 Gas Fees • Sub-Second Micro-Tips</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.1]">
                Instant Feeless Crypto Tips & Payments for <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">Communities</span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Empower your Discord, Telegram, and X community with <strong className="text-slate-200">Demo Bot</strong>. Tip, send, and withdraw over <strong className="text-slate-200">20+ tokens</strong> instantly with zero transaction costs.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <a
                  href="#add-bot"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/30 transition-all duration-200 hover:scale-[1.02]"
                >
                  <Bot size={18} />
                  <span>Add Demo Bot to Discord</span>
                </a>

                <a
                  href="#tokens"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white font-medium text-sm transition-all duration-200"
                >
                  <Coins size={18} />
                  <span>Explore 20+ Tokens</span>
                </a>
              </div>

              {/* Social Proof Line */}
              <div className="pt-6 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={16} className="text-emerald-400" />
                  No Gas Fees
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={16} className="text-emerald-400" />
                  Instant Ledger Transfers
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={16} className="text-emerald-400" />
                  Multi-Chain Support
                </span>
              </div>
            </div>

            {/* Right Hero Demo Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-md bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 shadow-2xl shadow-blue-950/50 space-y-5">
                
                {/* Header Widget */}
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-blue-600/20 border border-blue-500/30 rounded-xl text-blue-400">
                      <Bot size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-slate-100">Demo Bot</h4>
                      <p className="text-xs text-emerald-400 flex items-center gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        Bot Active • Discord
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] bg-slate-800 text-slate-400 px-2.5 py-1 rounded-md font-mono">
                    /tip command
                  </span>
                </div>

                {/* Simulated Command Box */}
                <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-4 space-y-3 font-mono text-xs">
                  <div className="flex items-center gap-2 text-slate-400">
                    <span className="text-blue-400">$</span>
                    <span>/tip recipient:@alex amount:500 token:SOL</span>
                  </div>

                  {/* Bot Reply Preview */}
                  <div className="bg-blue-950/40 border border-blue-500/30 rounded-xl p-3 text-slate-200 space-y-2">
                    <div className="flex items-center justify-between text-emerald-400 font-semibold">
                      <span className="flex items-center gap-1.5">
                        <Sparkles size={14} /> Tip Sent Successfully!
                      </span>
                      <span className="text-[10px] bg-emerald-500/10 px-2 py-0.5 rounded text-emerald-400">
                        0% Fee
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-300">
                      You tipped <strong className="text-white">500 SOL</strong> to <strong className="text-blue-400">@alex</strong> inside the server.
                    </p>
                    <div className="text-[10px] text-slate-400 pt-1 border-t border-blue-900/50 flex justify-between">
                      <span>Execution Time: 0.04s</span>
                      <span>Network Gas: $0.00</span>
                    </div>
                  </div>
                </div>

                {/* Quick Wallet Stats Preview */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 bg-slate-950/50 border border-slate-800/80 rounded-xl">
                    <span className="text-[11px] text-slate-400 block">Total Volume Tipped</span>
                    <span className="text-lg font-bold text-slate-100">$2,450,890+</span>
                  </div>
                  <div className="p-3 bg-slate-950/50 border border-slate-800/80 rounded-xl">
                    <span className="text-[11px] text-slate-400 block">Supported Tokens</span>
                    <span className="text-lg font-bold text-blue-400">20+ Assets</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SUPPORTED TOKENS TICKER */}
      <section id="tokens" className="py-12 border-y border-slate-900 bg-slate-950/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-400">
              Multi-Chain Ecosystem
            </h3>
            <p className="text-2xl font-bold text-white mt-1">
              Tip & Pay in 20+ Popular Tokens
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-3">
            {tokens.map((token) => (
              <div
                key={token.symbol}
                className="flex items-center gap-2 px-4 py-2 bg-slate-900/80 border border-slate-800 hover:border-blue-500/40 rounded-xl text-sm transition-all duration-200 hover:scale-105"
              ><img
                  src={token.icon}
                  alt={token.name}
                  className="w-6 h-6 object-contain shrink-0"
              />
                <span className="font-semibold text-slate-200">{token.symbol}</span>
                <span className="text-xs text-slate-400 hidden sm:inline">({token.name})</span>
              </div>
            ))}
            <div className="px-4 py-2 bg-blue-600/10 border border-blue-500/30 rounded-xl text-xs font-semibold text-blue-400">
              + More Tokens Added Weekly
            </div>
          </div>
        </div>
      </section>

      {/* KEY FEATURES SECTION */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-widest text-blue-400">Why Demo Bot?</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white">
            Built for Lightning-Fast, Zero-Cost Crypto Micro-Transactions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Feature 1 */}
          <div className="p-8 bg-slate-900/60 border border-slate-800 rounded-2xl hover:border-blue-500/40 transition-all duration-300 space-y-4 hover:-translate-y-1">
            <div className="p-3 bg-blue-600/20 border border-blue-500/30 rounded-xl w-fit text-blue-400">
              <Zap size={24} />
            </div>
            <h3 className="text-xl font-bold text-white">0% Fee Internal Ledger</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Tip 1 cent or $1,000 without worrying about gas spikes. Off-chain internal ledger technology enables feeless micro-tips inside your chat server.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-8 bg-slate-900/60 border border-slate-800 rounded-2xl hover:border-blue-500/40 transition-all duration-300 space-y-4 hover:-translate-y-1">
            <div className="p-3 bg-cyan-600/20 border border-cyan-500/30 rounded-xl w-fit text-cyan-400">
              <Flame size={24} />
            </div>
            <h3 className="text-xl font-bold text-white">Sub-Second Speed</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              No blockchain confirmation delays. When you issue a tip or payment, the recipient gets notified in real time within milliseconds.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-8 bg-slate-900/60 border border-slate-800 rounded-2xl hover:border-blue-500/40 transition-all duration-300 space-y-4 hover:-translate-y-1">
            <div className="p-3 bg-indigo-600/20 border border-indigo-500/30 rounded-xl w-fit text-indigo-400">
              <Coins size={24} />
            </div>
            <h3 className="text-xl font-bold text-white">20+ Multi-Chain Tokens</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Support for Bitcoin, Solana, Ethereum, USDT, USDC, Pepe, Doge, and major L2s. Switch currencies with simple dropdown commands.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="p-8 bg-slate-900/60 border border-slate-800 rounded-2xl hover:border-blue-500/40 transition-all duration-300 space-y-4 hover:-translate-y-1">
            <div className="p-3 bg-emerald-600/20 border border-emerald-500/30 rounded-xl w-fit text-emerald-400">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-xl font-bold text-white">Instant On/Off-Ramp Withdraws</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Withdraw your earnings to any self-custody wallet (Phantom, MetaMask, Trust) anytime with full multi-chain safety.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="p-8 bg-slate-900/60 border border-slate-800 rounded-2xl hover:border-blue-500/40 transition-all duration-300 space-y-4 hover:-translate-y-1">
            <div className="p-3 bg-amber-600/20 border border-amber-500/30 rounded-xl w-fit text-amber-400">
              <MessageSquare size={24} />
            </div>
            <h3 className="text-xl font-bold text-white">Airdrops & Giveaways</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Rain tokens on active community members or create custom giveaways to boost chat engagement in seconds.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="p-8 bg-slate-900/60 border border-slate-800 rounded-2xl hover:border-blue-500/40 transition-all duration-300 space-y-4 hover:-translate-y-1">
            <div className="p-3 bg-purple-600/20 border border-purple-500/30 rounded-xl w-fit text-purple-400">
              <Users size={24} />
            </div>
            <h3 className="text-xl font-bold text-white">Cross-Platform Unified Identity</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Link your Discord, Telegram, and X accounts into one central balance across all platforms smoothly.
            </p>
          </div>

        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 bg-slate-900/40 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-blue-400">Simple 3-Step Setup</h2>
            <p className="text-3xl font-extrabold text-white">How Demo Bot Works</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            
            {/* Step 1 */}
            <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl text-center space-y-4 relative">
              <div className="w-12 h-12 bg-blue-600 text-white font-bold rounded-2xl flex items-center justify-center mx-auto text-xl shadow-lg shadow-blue-500/30">
                1
              </div>
              <h3 className="text-lg font-semibold text-white">Invite Demo Bot</h3>
              <p className="text-slate-400 text-sm">
                Add the bot to your Discord server or Telegram channel with a single click. No complex API keys required.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl text-center space-y-4 relative">
              <div className="w-12 h-12 bg-blue-600 text-white font-bold rounded-2xl flex items-center justify-center mx-auto text-xl shadow-lg shadow-blue-500/30">
                2
              </div>
              <h3 className="text-lg font-semibold text-white">Deposit Any Token</h3>
              <p className="text-slate-400 text-sm">
                Deposit SOL, USDT, DOGE, or 18+ other tokens to your personal bot balance using standard wallet transfers.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl text-center space-y-4 relative">
              <div className="w-12 h-12 bg-blue-600 text-white font-bold rounded-2xl flex items-center justify-center mx-auto text-xl shadow-lg shadow-blue-500/30">
                3
              </div>
              <h3 className="text-lg font-semibold text-white">Tip Feelessly</h3>
              <p className="text-slate-400 text-sm">
                Use simple slash commands like <code className="text-blue-400">/tip</code> or <code className="text-blue-400">/rain</code> to instantly reward members with 0% gas fees.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* BOTTOM CTA BANNER */}
      <section id="add-bot" className="py-20 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-r from-blue-900/60 via-slate-900 to-indigo-900/60 border border-blue-500/30 rounded-3xl p-8 sm:p-12 text-center backdrop-blur-xl shadow-2xl shadow-blue-950/80 space-y-6">
            
            <div className="p-3 bg-blue-600 text-white rounded-2xl w-fit mx-auto shadow-lg shadow-blue-500/50">
              <Bot size={32} />
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Ready to Supercharge Your Community?
            </h2>

            <p className="text-slate-300 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
              Join thousands of creators using Demo Bot for fast, zero-fee crypto tipping in over 20+ supported tokens today.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold shadow-lg shadow-blue-600/40 transition-all duration-200 hover:scale-105">
                <span>Add Demo Bot Now</span>
                <ArrowRight size={18} />
              </button>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
