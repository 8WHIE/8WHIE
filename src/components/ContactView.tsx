import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  ExternalLink, 
  MessageSquare, 
  ShieldCheck, 
  Github, 
  Youtube, 
  Twitter, 
  Instagram,
  User,
  AlertCircle
} from 'lucide-react';
import { OFFICIAL_SOCIAL_LINKS } from '../data/brandData';

export const ContactView: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Cybersecurity Inquiry / 8WHIE',
    topic: 'Education',
    message: ''
  });
  const [copiedMail, setCopiedMail] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const contactEmail = 'iaryan9905@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopiedMail(true);
    setTimeout(() => setCopiedMail(false), 2000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatusMessage('Please fill in your name, email, and message.');
      return;
    }

    // Prepare honest mailto link
    const subjectEncoded = encodeURIComponent(`[8WHIE ${formData.topic}] ${formData.subject}`);
    const bodyEncoded = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nTopic: ${formData.topic}\n\nMessage:\n${formData.message}\n\n-- Sent via 8WHIE Official Web Platform (https://8whie.page.gd)`
    );

    const mailtoUrl = `mailto:${contactEmail}?subject=${subjectEncoded}&body=${bodyEncoded}`;
    
    // Open mail client
    window.location.href = mailtoUrl;
    setStatusMessage(
      `Opening default mail client for ${contactEmail}. If your client did not launch, you can copy the message and email directly to ${contactEmail}.`
    );
  };

  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#101820] border border-[#1B3A2E] rounded text-xs font-mono text-[#00FF88]">
          <Mail className="w-3.5 h-3.5 text-[#00FF88]" />
          <span>Direct Communications & Channels</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-mono tracking-tight text-[#E6FFF2]">
          Contact 8WHIE
        </h1>
        <p className="text-sm sm:text-base text-[#8CA99B] leading-relaxed font-sans">
          Reach out to founder Aryan Thakur and the 8WHIE security research team for curriculum feedback, research collaboration, responsible vulnerability coordination, or community inquiries.
        </p>
      </div>

      {/* Main Grid: Form (Left) & Direct Cards (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: Contact Form */}
        <div className="lg:col-span-7 bg-[#101820] border border-[#1B3A2E] rounded-xl p-6 sm:p-8 space-y-6 cyber-glow">
          <div className="space-y-1">
            <h2 className="text-xl font-bold font-mono text-[#E6FFF2] flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-[#00FF88]" />
              <span>Send a Message</span>
            </h2>
            <p className="text-xs text-[#8CA99B] font-sans">
              Submissions use direct client-side mailto dispatch to ensure complete privacy without third-party form trackers.
            </p>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-4 font-mono text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[#8CA99B] block font-semibold">Your Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alex Rivera"
                  className="w-full bg-[#080B0F] border border-[#1B3A2E] rounded p-2.5 text-[#E6FFF2] placeholder-[#8CA99B]/40 focus:outline-none focus:border-[#00FF88]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[#8CA99B] block font-semibold">Your Email Address *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="alex@example.com"
                  className="w-full bg-[#080B0F] border border-[#1B3A2E] rounded p-2.5 text-[#E6FFF2] placeholder-[#8CA99B]/40 focus:outline-none focus:border-[#00FF88]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[#8CA99B] block font-semibold">Topic Category</label>
                <select
                  value={formData.topic}
                  onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                  className="w-full bg-[#080B0F] border border-[#1B3A2E] rounded p-2.5 text-[#E6FFF2] focus:outline-none focus:border-[#00FF88]"
                >
                  <option value="Education">Academy & Tutorials</option>
                  <option value="Security Research">Vulnerability & Research</option>
                  <option value="Tools">Open-Source Tooling</option>
                  <option value="Collaboration">Collaboration & Speaking</option>
                  <option value="Other">General Inquiry</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-[#8CA99B] block font-semibold">Subject Line</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Subject title..."
                  className="w-full bg-[#080B0F] border border-[#1B3A2E] rounded p-2.5 text-[#E6FFF2] placeholder-[#8CA99B]/40 focus:outline-none focus:border-[#00FF88]"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[#8CA99B] block font-semibold">Detailed Message *</label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Write your inquiry or research details here..."
                className="w-full bg-[#080B0F] border border-[#1B3A2E] rounded p-3 text-[#E6FFF2] placeholder-[#8CA99B]/40 focus:outline-none focus:border-[#00FF88] font-sans"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 font-mono font-bold text-xs sm:text-sm text-[#080B0F] bg-[#00FF88] hover:bg-[#00FF88]/90 rounded transition-all shadow-[0_0_15px_rgba(0,255,136,0.3)]"
            >
              <Send className="w-4 h-4" />
              <span>Launch Mail Client to Send</span>
            </button>

            {statusMessage && (
              <div className="p-3 bg-[#080B0F] border border-[#00FF88]/40 rounded text-xs text-[#8CA99B] font-mono leading-relaxed flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-[#00FF88] shrink-0 mt-0.5" />
                <span>{statusMessage}</span>
              </div>
            )}
          </form>
        </div>

        {/* Right: Direct Social Cards & Email */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Email Quick Card */}
          <div className="p-6 bg-[#101820] border border-[#1B3A2E] rounded-xl space-y-3">
            <span className="text-xs font-mono text-[#00FF88] uppercase tracking-wider font-semibold">
              Direct Email
            </span>
            <div className="flex items-center justify-between gap-2 p-3 bg-[#080B0F] border border-[#1B3A2E] rounded">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-[#E6FFF2] truncate">
                <Mail className="w-4 h-4 text-[#00FF88] shrink-0" />
                <span className="truncate">{contactEmail}</span>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-1.5 text-[#8CA99B] hover:text-[#00FF88] shrink-0"
                title="Copy Email Address"
              >
                {copiedMail ? <Check className="w-4 h-4 text-[#00FF88]" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            <p className="text-xs text-[#8CA99B] font-sans">
              Founder & primary intelligence correspondence. PGP encryption keys available upon request.
            </p>
          </div>

          {/* Instant Telegram Connect */}
          <div className="p-6 bg-[#101820] border border-[#1B3A2E] rounded-xl space-y-3">
            <span className="text-xs font-mono text-[#00E5FF] uppercase tracking-wider font-semibold">
              Instant Messaging
            </span>
            <div className="space-y-2">
              <a
                href="https://t.me/Iaaryan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 bg-[#080B0F] hover:bg-[#111C20] border border-[#1B3A2E] hover:border-[#00E5FF]/40 rounded transition-colors group"
              >
                <div className="space-y-0.5">
                  <div className="text-xs font-mono font-bold text-[#E6FFF2] group-hover:text-[#00E5FF]">
                    Aryan Thakur (Personal Telegram)
                  </div>
                  <div className="text-[11px] font-mono text-[#8CA99B]">@Iaaryan</div>
                </div>
                <ExternalLink className="w-4 h-4 text-[#8CA99B] group-hover:text-[#00E5FF]" />
              </a>

              <a
                href="https://t.me/whiee"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 bg-[#080B0F] hover:bg-[#111C20] border border-[#1B3A2E] hover:border-[#00FF88]/40 rounded transition-colors group"
              >
                <div className="space-y-0.5">
                  <div className="text-xs font-mono font-bold text-[#E6FFF2] group-hover:text-[#00FF88]">
                    8WHIE Telegram Channel
                  </div>
                  <div className="text-[11px] font-mono text-[#8CA99B]">@whiee</div>
                </div>
                <ExternalLink className="w-4 h-4 text-[#8CA99B] group-hover:text-[#00FF88]" />
              </a>
            </div>
          </div>

          {/* Social Channels List */}
          <div className="p-6 bg-[#101820] border border-[#1B3A2E] rounded-xl space-y-3">
            <span className="text-xs font-mono text-[#8CA99B] uppercase tracking-wider font-semibold">
              Verified Profiles
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              <a
                href="https://github.com/8WHIE"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-[#080B0F] hover:bg-[#111C20] border border-[#1B3A2E] rounded flex items-center gap-2 text-[#8CA99B] hover:text-[#00FF88] transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.youtube.com/@8WHIE"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-[#080B0F] hover:bg-[#111C20] border border-[#1B3A2E] rounded flex items-center gap-2 text-[#8CA99B] hover:text-[#FF5F56] transition-colors"
              >
                <Youtube className="w-4 h-4" />
                <span>YouTube</span>
              </a>

              <a
                href="https://x.com/im_aryanthakur"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-[#080B0F] hover:bg-[#111C20] border border-[#1B3A2E] rounded flex items-center gap-2 text-[#8CA99B] hover:text-[#00FF88] transition-colors"
              >
                <Twitter className="w-4 h-4" />
                <span>X / Twitter</span>
              </a>

              <a
                href="https://www.instagram.com/8whie_/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-[#080B0F] hover:bg-[#111C20] border border-[#1B3A2E] rounded flex items-center gap-2 text-[#8CA99B] hover:text-[#E6FFF2] transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>Instagram</span>
              </a>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
