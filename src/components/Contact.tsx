import React, { useState, useRef } from 'react';
import { Send, Mail, MapPin, Sparkles, Paperclip, X } from 'lucide-react';

const projectTypes = [
  'Custom Software',
  'Business Website',
  'SaaS App',
  'Dashboard & Analytics',
  'AI Integration',
  'Academic Solution'
];

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState('Custom Software');
  const [requirements, setRequirements] = useState('');
  const [attachedFile, setAttachedFile] = useState<File | null>(null);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setError('Please fill in both your Name and Email address.');
      return;
    }
    setError('');
    setLoading(true);

    try {
      const subjectText = `Project Spec Sheet: ${projectType} - ${name}`;
      const bodyText = `Project Spec Sheet Details:
------------------------------------------
Name: ${name}
Email: ${email}
Project Type: ${projectType}
Requirements: ${requirements}
${attachedFile ? `Attached File: ${attachedFile.name} (${(attachedFile.size / 1024 / 1024).toFixed(2)} MB)` : ''}
`;

      const subject = encodeURIComponent(subjectText);
      const body = encodeURIComponent(bodyText);

      const targetEmail = 'connect.wecraftit@gmail.com';
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${targetEmail}&su=${subject}&body=${body}`;
      const mailtoLink = `mailto:${targetEmail}?subject=${subject}&body=${body}`;

      // Open Gmail compose tab
      const newTab = window.open(gmailUrl, '_blank');
      
      // Fallback if popup is blocked
      if (!newTab || newTab.closed || typeof newTab.closed === 'undefined') {
        const link = document.createElement('a');
        link.href = mailtoLink;
        link.click();
      }

      setLoading(false);
      setSuccess(true);
      
      setTimeout(() => {
        setSuccess(false);
        setName('');
        setEmail('');
        setRequirements('');
        setAttachedFile(null);
      }, 6000);
    } catch (err) {
      console.error('Failed to redirect', err);
      setError('Error opening email client. Please email us directly.');
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-32 relative bg-[#050816] overflow-hidden border-t border-white/5">
      {/* Decorative Glow */}
      <div className="absolute top-[20%] left-[-10%] w-[30rem] h-[30rem] rounded-full bg-[#2563EB]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column - Contact Info */}
          <div className="lg:col-span-5 text-left">
            <span className="font-mono text-xs text-[#2563EB] uppercase tracking-[0.25em] mb-4 block">
              Inquire
            </span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#F8FAFC] mb-8 leading-[1.1]">
              Let's Build Something Great Together
            </h2>
            <p className="font-sans text-base md:text-lg text-[#94A3B8] font-light leading-relaxed mb-12">
              Have an idea, system architecture plan, or research prototype you need engineered? 
              Fill in the project spec sheet and our engineering team will get back to you within 24 hours.
            </p>

            {/* Direct Details */}
            <div className="flex flex-col gap-6 mb-12">
              <div className="flex items-center gap-4 text-[#94A3B8] hover:text-[#F8FAFC] transition-colors duration-300">
                <div className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center">
                  <Mail size={16} className="text-[#2563EB]" />
                </div>
                <div>
                  <span className="font-mono text-[9px] text-[#94A3B8]/40 block uppercase">Email</span>
                  <a href="mailto:connect.wecraftit@gmail.com" className="font-sans text-sm font-semibold text-[#F8FAFC]">
                    connect.wecraftit@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-[#94A3B8]">
                <div className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center">
                  <MapPin size={16} className="text-[#7C3AED]" />
                </div>
                <div>
                  <span className="font-mono text-[9px] text-[#94A3B8]/40 block uppercase">Location</span>
                  <span className="font-sans text-sm font-semibold text-[#F8FAFC]">Bengaluru, India (Serving Globally)</span>
                </div>
              </div>
            </div>

            {/* Subtle Tagline reinforcement */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/5 bg-white/[0.01]">
              <Sparkles size={12} className="text-[#7C3AED]" />
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#94A3B8]/60">
                YOU DREAM IT. WE BUILD IT.
              </span>
            </div>
          </div>

          {/* Right Column - Spec Sheet Form */}
          <div className="lg:col-span-7">
            <form 
              onSubmit={handleSubmit}
              className="p-8 md:p-10 rounded-3xl bg-[#0F172A]/10 border border-white/5 flex flex-col gap-8 relative overflow-hidden"
            >
              {/* Subtle visual gradient edge */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#2563EB] to-[#7C3AED]" />

              {success ? (
                <div className="py-16 text-center flex flex-col items-center justify-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-2">
                    ✓
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-[#F8FAFC]">
                    Spec Sheet Received!
                  </h3>
                  <p className="font-sans text-sm text-[#94A3B8] font-light max-w-sm">
                    Thank you. We have received your requirements. An engineer from <strong>WE CRAFT IT</strong> will review and contact you shortly.
                  </p>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="flex flex-col text-left">
                      <label className="font-mono text-[10px] uppercase text-[#94A3B8]/50 mb-2.5 tracking-wider">
                        Name
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        className="px-5 py-4 rounded-xl bg-[#050816] border border-white/5 focus:border-[#2563EB] focus:outline-none transition-colors duration-300 text-[#F8FAFC] text-sm"
                      />
                    </div>
                    {/* Email */}
                    <div className="flex flex-col text-left">
                      <label className="font-mono text-[10px] uppercase text-[#94A3B8]/50 mb-2.5 tracking-wider">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        className="px-5 py-4 rounded-xl bg-[#050816] border border-white/5 focus:border-[#2563EB] focus:outline-none transition-colors duration-300 text-[#F8FAFC] text-sm"
                      />
                    </div>
                  </div>

                  {/* Project Type Grid */}
                  <div className="flex flex-col text-left">
                    <label className="font-mono text-[10px] uppercase text-[#94A3B8]/50 mb-4 tracking-wider">
                      Project Type
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {projectTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setProjectType(type)}
                          className={`py-3 px-4 rounded-xl border text-xs font-medium tracking-wide transition-all duration-300 ${
                            projectType === type
                              ? 'bg-gradient-to-r from-[#2563EB]/15 to-[#7C3AED]/15 border-[#2563EB] text-[#F8FAFC]'
                              : 'bg-[#050816] border-white/5 text-[#94A3B8] hover:border-white/10'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Requirements / Description (Chatbot style with attachment) */}
                  <div className="flex flex-col text-left">
                    <label className="font-mono text-[10px] uppercase text-[#94A3B8]/50 mb-2.5 tracking-wider">
                      Requirements
                    </label>
                    <div className="relative flex flex-col rounded-xl bg-[#050816] border border-white/5 focus-within:border-[#2563EB] transition-colors duration-300 overflow-hidden">
                      <textarea
                        rows={4}
                        value={requirements}
                        onChange={(e) => setRequirements(e.target.value)}
                        placeholder="Outline any special details, API integration goals, or timeline requirements..."
                        className="w-full px-5 pt-4 pb-2 bg-transparent text-[#F8FAFC] text-sm resize-none focus:outline-none"
                      />
                      
                      {/* Attached File Preview Bar */}
                      {attachedFile && (
                        <div className="px-5 py-2 flex items-center justify-between border-t border-white/5 bg-white/[0.01]">
                          <div className="flex items-center gap-2 text-xs text-[#94A3B8]">
                            <Paperclip size={12} className="text-[#2563EB]" />
                            <span className="truncate max-w-[200px] font-mono">{attachedFile.name}</span>
                            <span className="text-[10px] text-[#94A3B8]/40">({(attachedFile.size / 1024 / 1024).toFixed(2)} MB)</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => setAttachedFile(null)}
                            className="text-[#94A3B8]/50 hover:text-red-400 transition-colors"
                          >
                            <X size={14} />
                          </button>
                        </div>
                      )}

                      {/* Tool bar inside chatbot prompt box */}
                      <div className="flex justify-between items-center px-4 py-2 border-t border-white/5 bg-white/[0.01]">
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => fileInputRef.current?.click()}
                            className="p-1.5 rounded-lg text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-white/5 transition-all cursor-pointer"
                            title="Attach mockups or spec files"
                          >
                            <Paperclip size={16} />
                          </button>
                          <input
                            type="file"
                            ref={fileInputRef}
                            onChange={(e) => {
                              if (e.target.files && e.target.files[0]) {
                                setAttachedFile(e.target.files[0]);
                              }
                            }}
                            className="hidden"
                          />
                        </div>
                        <div className="font-mono text-[9px] text-[#94A3B8]/30">
                          {requirements.length} chars
                        </div>
                      </div>
                    </div>
                  </div>

                  {error && (
                    <div className="text-red-400 font-mono text-[11px] text-left">
                      {error}
                    </div>
                  )}

                  {/* Action Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white font-sans text-xs font-bold tracking-widest uppercase transition-all duration-300 hover:shadow-[0_0_25px_rgba(37,99,235,0.25)] flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
                  >
                    {loading ? 'Transmitting Spec Sheet...' : 'LET\'S CRAFT IT'}
                    <Send size={12} />
                  </button>
                </>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

