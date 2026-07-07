import React, { useState } from 'react';
import { FiMail, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';
import { SectionHeading } from './Skills';

export default function Contact() {
  // 1. Inputs ki state manage karne ke liye
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 2. Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      // Backend server ka URL (Agar Supabase ya custom server use kar rahe hain toh us hisab se endpoint badlein)
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      if (data.success) {
        setStatus('Message Sent Successfully! ✅');
        setFormData({ name: '', email: '', message: '' }); // Clear Form
      } else {
        setStatus('Something went wrong. ❌');
      }
    } catch (error) {
      console.error(error);
      setStatus('Failed to connect to server. ❌');
    }
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="Get in touch" title="Let's build something together" align="center" />
        
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col justify-between space-y-8">
            <div>
              <h3 className="font-display font-bold text-2xl mb-4">Let's talk about your project</h3>
              <p className="text-text-muted text-base leading-relaxed">
                I'm looking for full-time opportunities or freelance collaborations in full-stack engineering. Drop a message, and I will get back to you within 24 hours.
              </p>
            </div>

            <div className="space-y-4">
              <a href="mailto:lakshityaduvanshi.dev@gmail.com" className="flex items-center gap-4 group p-4 rounded-xl bg-bg-card border border-border-main hover:border-accent/40 transition-colors">
                <FiMail className="text-xl text-accent" />
                <span className="font-mono text-sm text-text-muted group-hover:text-text-main transition-colors">lakshityaduvanshi.dev@gmail.com</span>
              </a>
            </div>

            <div className="flex gap-4">
              {[
                { icon: <FiGithub />, url: "https://github.com/lakshityaduvanshi-dev" },
                { icon: <FiLinkedin />, url: "https://www.linkedin.com/in/lakshit-yaduvanshi-0234a1317" }
              ].map((social, i) => (
                <a key={i} href={social.url} target="_blank" rel="noreferrer" className="p-4 rounded-xl bg-bg-card border border-border-main text-xl text-text-muted hover:text-accent hover:border-accent/40 transition-all">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* 3. Form submission update */}
          <form onSubmit={handleSubmit} className="space-y-4 bg-bg-card border border-border-main p-8 rounded-2xl relative">
            <div>
              <label className="block font-mono text-xs text-text-muted mb-2 uppercase">Name</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-bg-main border border-border-main rounded-xl p-3 text-text-main focus:outline-none focus:border-accent font-sans text-sm" 
                placeholder="John Doe" 
                required 
              />
            </div>
            <div>
              <label className="block font-mono text-xs text-text-muted mb-2 uppercase">Email</label>
              <input 
                type="type" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-bg-main border border-border-main rounded-xl p-3 text-text-main focus:outline-none focus:border-accent font-sans text-sm" 
                placeholder="john@example.com" 
                required 
              />
            </div>
            <div>
              <label className="block font-mono text-xs text-text-muted mb-2 uppercase">Message</label>
              <textarea 
                rows="4" 
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-bg-main border border-border-main rounded-xl p-3 text-text-main focus:outline-none focus:border-accent font-sans text-sm resize-none" 
                placeholder="Your message here..." 
                required
              ></textarea>
            </div>
            
            <button type="submit" className="w-full py-3 bg-accent text-white font-medium rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg shadow-accent/20 cursor-pointer">
              Send Message <FiSend />
            </button>

            {status && <p className="text-xs font-mono mt-2 text-center text-accent">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}