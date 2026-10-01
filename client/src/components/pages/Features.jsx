import React, { useState } from 'react';
import {
  Terminal,
  Zap,
  Coins,
  ShieldCheck,
  Users,
  Bot,
  Sparkles,
  ArrowRight,
  Check,
  Copy,
  ChevronDown,
  ChevronUp,
  Layers,
  Lock,
  Flame,
  Sliders,
  Gift,
  HelpCircle,
  ExternalLink,
} from 'lucide-react';

export default function Features() {
  // State for Interactive Command Sandbox
  const [activeTab, setActiveTab] = useState('tipping');
  const [copiedCmd, setCopiedCmd] = useState(null);

  // State for FAQ Accordion
  const [openFaq, setOpenFaq] = useState(0);

  // Command Sandbox Data
  const commandCategories = {
    tipping: {
      label: 'Peer-to-Peer Tipping',
      badge: 'Slash Commands',
      description: 'Reward contributors, answerers, and community members in public channels or DMs.',
      items: [
        {
          cmd: '/tip recipient:@alex amount:50 token:SOL',
          output: 'Tipped 50 SOL to @alex in #general (0% fee)',
          note: 'Instant settlement. No waiting for block confirmations.',
        },
        {
          cmd: '/tip-anonymous recipient:@degen amount:1000 token:PEPE',
          output: 'Anonymously tipped 1,000 PEPE to @degen',
          note: 'Keeps your tip private while notifying the receiver.',
        },
      ],
    },
    rains: {
      label: 'Chat Rains & Giveaways',
      badge: 'Engagement Booster',
      description: 'Distribute a pool of crypto across active chatters to drive message activity.',
      items: [
        {
          cmd: '/rain amount:100 token:USDT active_users:15 min_messages:5',
          output: 'Rained 100 USDT across 15 active chatters!',
          note: 'Anti-spam filter ensures only real chatters receive rewards.',
        },
        {
          cmd: '/tip-role role:@VIP amount:500 token:BONK',
          output: 'Distributed 500 BONK equally among 24 VIP holders',
          note: 'Targets specific Discord roles or Telegram group tiers.',
        },
      ],
    },
    wallet: {
      label: 'Wallet & Balances',
      badge: 'Self-Custody On/Off Ramp',
      description: 'Manage personal token balances and execute external multi-chain withdrawals.',
      items: [
        {
          cmd: '/balance',
          output: 'SOL: 8.45 | USDT: 185.00 | ETH: 0.015 | DOGE: 850',
          note: 'Sent as a private, ephemeral message visible only to you.',
        },
        {
          cmd: '/withdraw token:SOL amount:5 address:7xKXtg2CW8...',
          output: 'Withdrawal submitted! Tx Hash: 0x89a1...c4b2',
          note: 'Pushes funds directly to your Phantom, MetaMask, or Trust Wallet.',
        },
      ],
    },
    admin: {
      label: 'Admin & Security Controls',
      badge: 'Server Owner Tools',
      description: 'Set rate limits, restrict rain commands to moderators, and prevent bot farming.',
      items: [
        {
          cmd: '/config set-min-account-age days:14',
          output: 'Updated security rule: Accounts <14 days old blocked from tips',
          note: 'Blocks fresh alt accounts from farming rain pools.',
        },
        {
          cmd: '/config set-[token]-status token:SOL status:enabled',
          output: 'Solana tipping enabled for #trading-lounge',
          note: 'Restrict specific tokens to relevant channels.',
        },
      ],
    },
  };

  // Frequently Asked Questions
  const faqs = [
    {
      q: 'How do you offer 0% gas fees on internal tips?',
      a: 'When you tip someone inside Discord or Telegram, the transaction updates balances instantly on our secure internal ledger. Blockchain gas fees only apply when you physically withdraw tokens out to an external wallet like Phantom or MetaMask.',
    },
    {
      q: 'What happens if I tip a user who hasn’t set up Demo Bot yet?',
      a: 'Funds are held safely in escrow under their social ID (@username). The moment they run /balance or log into the web dashboard, their full tipped balance is ready to use or withdraw.',
    },
    {
      q: 'Which blockchains and token standards are supported?',
      a: 'We natively support 20+ chains including Solana (SPL), Ethereum (ERC-20), Bitcoin, Polygon, Arbitrum, BSC, Avalanche, TON, and Sui. Server owners can also request custom community token listings.',
    },
    {
      q: 'How do you prevent bot accounts from farming chat rains?',
      a: 'Demo Bot includes built-in Sybil protection. Admins can mandate minimum Discord account age, required server roles, message activity thresholds, and hCaptcha verification before users can claim rain rewards.',
    },
  ];

  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedCmd(index);
    setTimeout(() => setCopiedCmd(null), 2000);
  };

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8 selection:bg-blue-600 selection:text-white">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* HERO SECTION */}
        <section id="1" className="text-center max-w-3xl mx-auto space-y-6 pt-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold backdrop-blur-md">
            <Sparkles size={14} />
            <span>Complete Platform Capabilities</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Everything You Need for <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">Micro-Crypto Payments</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            No smart contract friction. No $15 gas fees for a 50-cent tip. Demo Bot connects your Discord and Telegram communities directly to 20+ crypto networks with instant off-chain execution.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="#commands"
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/30 transition-all flex items-center gap-2"
            >
              <Terminal size={18} />
              <span>Try Command Sandbox</span>
            </a>
            <a
              href="#architecture"
              className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white font-medium text-sm border border-slate-800 transition-all"
            >
              <span>How Settlement Works</span>
            </a>
          </div>
        </section>

        {/* CORE FEATURE GRID */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-slate-900/60 border border-slate-800 hover:border-blue-500/40 rounded-3xl p-6 space-y-4 transition-all duration-300 hover:-translate-y-1">
            <div className="p-3 bg-blue-600/20 border border-blue-500/30 rounded-2xl w-fit text-blue-400">
              <Zap size={22} />
            </div>
            <h3 className="text-xl font-bold text-white">0% Internal Gas Fees</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Internal transfers settle on our high-speed off-chain ledger. Tip 1 cent or $500 without burning network gas fees on every chat interaction.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-900/60 border border-slate-800 hover:border-blue-500/40 rounded-3xl p-6 space-y-4 transition-all duration-300 hover:-translate-y-1">
            <div className="p-3 bg-cyan-600/20 border border-cyan-500/30 rounded-2xl w-fit text-cyan-400">
              <Flame size={22} />
            </div>
            <h3 className="text-xl font-bold text-white">Automated Chat Rains</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Spark conversation instantly. Set custom rain pools that automatically split crypto among community members who spoke in the last 15–60 minutes.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-slate-900/60 border border-slate-800 hover:border-blue-500/40 rounded-3xl p-6 space-y-4 transition-all duration-300 hover:-translate-y-1">
            <div className="p-3 bg-purple-600/20 border border-purple-500/30 rounded-2xl w-fit text-purple-400">
              <Coins size={22} />
            </div>
            <h3 className="text-xl font-bold text-white">20+ Multi-Chain Tokens</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Native support for SOL, ETH, USDT, USDC, BTC, DOGE, PEPE, BONK, and major Layer 2s. Server owners can also request custom SPL or ERC-20 token support.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-slate-900/60 border border-slate-800 hover:border-blue-500/40 rounded-3xl p-6 space-y-4 transition-all duration-300 hover:-translate-y-1">
            <div className="p-3 bg-emerald-600/20 border border-emerald-500/30 rounded-2xl w-fit text-emerald-400">
              <Lock size={22} />
            </div>
            <h3 className="text-xl font-bold text-white">Anti-Sybil Security</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Keep alt-account farmers away. Enforce account age minimums, role permissions, and hCaptcha checks so rewards only reach real community members.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-slate-900/60 border border-slate-800 hover:border-blue-500/40 rounded-3xl p-6 space-y-4 transition-all duration-300 hover:-translate-y-1">
            <div className="p-3 bg-indigo-600/20 border border-indigo-500/30 rounded-2xl w-fit text-indigo-400">
              <Users size={22} />
            </div>
            <h3 className="text-xl font-bold text-white">Cross-Platform Sync</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              One unified balance across Discord, Telegram, and X. Tip someone on Discord and let them withdraw or re-tip it inside your Telegram group seamlessly.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-slate-900/60 border border-slate-800 hover:border-blue-500/40 rounded-3xl p-6 space-y-4 transition-all duration-300 hover:-translate-y-1">
            <div className="p-3 bg-amber-600/20 border border-amber-500/30 rounded-2xl w-fit text-amber-400">
              <Sliders size={22} />
            </div>
            <h3 className="text-xl font-bold text-white">Non-Custodial Withdrawals</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Your funds aren’t locked in a black box. Request standard on-chain withdrawals to your personal Phantom, MetaMask, or Trust Wallet 24/7.
            </p>
          </div>

        </section>

        {/* INTERACTIVE COMMAND SANDBOX / CHEAT SHEET */}
        <section id="commands" className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-400 block">Interactive Command Sandbox</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">See How Slash Commands Work</h2>
            </div>
            <p className="text-xs text-slate-400 max-w-sm">
              Click through the tabs below to explore available bot commands and see exact syntax examples.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {Object.keys(commandCategories).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                  activeTab === key
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                    : 'bg-slate-950 text-slate-400 border border-slate-800 hover:text-white hover:bg-slate-900'
                }`}
              >
                {commandCategories[key].label}
              </button>
            ))}
          </div>

          {/* Active Tab Content */}
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs text-slate-400 pb-2">
              <p>{commandCategories[activeTab].description}</p>
              <span className="bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2.5 py-0.5 rounded-full font-mono text-[10px]">
                {commandCategories[activeTab].badge}
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {commandCategories[activeTab].items.map((item, idx) => (
                <div key={idx} className="bg-slate-950 border border-slate-800/90 rounded-2xl p-5 space-y-3 font-mono text-xs">
                  {/* Command String */}
                  <div className="flex items-center justify-between gap-2 text-slate-200 bg-slate-900/90 p-3 rounded-xl border border-slate-800">
                    <span className="text-blue-400 font-bold">$</span>
                    <span className="truncate flex-1">{item.cmd}</span>
                    <button
                      onClick={() => handleCopy(item.cmd, `${activeTab}-${idx}`)}
                      className="text-slate-400 hover:text-white p-1 rounded hover:bg-slate-800 transition-colors shrink-0"
                      title="Copy command"
                    >
                      {copiedCmd === `${activeTab}-${idx}` ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                    </button>
                  </div>

                  {/* Expected Bot Output */}
                  <div className="p-3 bg-blue-950/30 border border-blue-500/20 rounded-xl text-slate-300 space-y-1">
                    <span className="text-[10px] uppercase font-sans font-bold text-blue-400 block tracking-wider">Bot Response</span>
                    <p className="text-xs text-emerald-400 font-sans">{item.output}</p>
                  </div>

                  <p className="text-[11px] font-sans text-slate-400 pt-1">
                    💡 <strong className="text-slate-300">Note:</strong> {item.note}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ARCHITECTURE: HOW IT WORKS */}
        <section id="architecture" className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-blue-400">Under the Hood</h2>
            <p className="text-3xl font-extrabold text-white">How Feeless Settlement Engine Works</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 space-y-3 relative">
              <span className="text-3xl font-extrabold text-blue-500/30 font-mono">01</span>
              <h3 className="text-lg font-bold text-white">Deposit to Vault</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Send any supported token (SOL, USDT, ETH) from your self-custody wallet to your assigned Demo Bot deposit address.
              </p>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 space-y-3 relative">
              <span className="text-3xl font-extrabold text-blue-500/30 font-mono">02</span>
              <h3 className="text-lg font-bold text-white">Off-Chain Micro-Tips</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                When you tip or rain tokens, balances transfer instantly inside our encrypted ledger. 0 gas fees, 0 block delays.
              </p>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 space-y-3 relative">
              <span className="text-3xl font-extrabold text-blue-500/30 font-mono">03</span>
              <h3 className="text-lg font-bold text-white">On-Chain Withdrawal</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Whenever you choose to cash out, initiate a withdrawal request to settle your balance back on-chain directly to your personal wallet.
              </p>
            </div>

          </div>
        </section>

        {/* FAQ ACCORDION */}
        <section className="bg-slate-900/40 border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-widest text-blue-400">Got Questions?</h2>
            <p className="text-2xl sm:text-3xl font-extrabold text-white">Frequently Asked Questions</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-slate-950 border border-slate-800/80 rounded-2xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 font-semibold text-slate-200 text-sm hover:text-white"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <ChevronUp size={18} className="text-blue-400 shrink-0" /> : <ChevronDown size={18} className="text-slate-500 shrink-0" />}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs text-slate-400 leading-relaxed border-t border-slate-900 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* BOTTOM CTA BANNER */}
        <section className="relative overflow-hidden">
          <div className="bg-gradient-to-r from-blue-900/50 via-slate-900 to-indigo-900/50 border border-blue-500/30 rounded-3xl p-8 sm:p-12 text-center backdrop-blur-xl shadow-2xl space-y-6">
            <div className="p-3 bg-blue-600 text-white rounded-2xl w-fit mx-auto shadow-lg shadow-blue-500/40">
              <Bot size={28} />
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Ready to Upgrade Your Community?
            </h2>

            <p className="text-slate-300 max-w-lg mx-auto text-sm leading-relaxed">
              Setup takes less than 2 minutes. Add Demo Bot to your server today and start tipping in over 20+ supported tokens immediately.
            </p>

            <div className="flex justify-center pt-2">
              <a
                href="#invite"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-600/40 transition-all hover:scale-105"
              >
                <span>Add Demo Bot to Discord</span>
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
