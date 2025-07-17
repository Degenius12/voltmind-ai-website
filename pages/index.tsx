import React, { useState } from 'react';
import { ArrowRight, Bot, Users, CheckCircle, Mail, Phone, MapPin, Twitter, Linkedin, Github } from 'lucide-react';
import Head from 'next/head';

export default function VoltMindLanding() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your interest! We will get back to you within 24 hours.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Head>
        <title>VoltMind AI - The AI Upgrade Your Business Needs</title>
        <meta name="description" content="Transform your business with cutting-edge AI solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-teal-500/20 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-2">
                <img src="/voltmind-logo.png" alt="VoltMind AI" className="h-12 sm:h-16 md:h-20 w-auto object-contain max-w-full" />
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <a href="#solutions" className="text-slate-300 hover:text-white transition-colors">Solutions</a>
                <a href="#about" className="text-slate-300 hover:text-white transition-colors">About</a>
                <a href="#contact" className="text-slate-300 hover:text-white transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-teal-500/10 border border-teal-500/20 rounded-full mb-8">
              <Bot className="w-4 h-4 text-teal-400 mr-2" />
              <span className="text-teal-300 text-sm">Trusted by Businesses Worldwide</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              The AI Upgrade
              <span className="bg-gradient-to-r from-teal-400 to-yellow-400 bg-clip-text text-transparent"> Your Business</span>
              <br />Needs
            </h1>
            
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge AI solutions, custom applications, and intelligent automation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-teal-500 to-yellow-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-teal-600 hover:to-yellow-600 transition-all transform hover:scale-105 flex items-center group">
                Book a Discovery Call
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-teal-500/50 text-teal-300 px-8 py-4 rounded-lg font-semibold hover:bg-teal-500/10 transition-all">
                View Our Work
              </button>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section id="solutions" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose VoltMind AI?</h2>
              <p className="text-xl text-slate-300">We deliver transformative AI solutions that drive real business results</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 hover:border-teal-500/50 transition-all">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-yellow-500 rounded-lg flex items-center justify-center mb-6">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Custom AI Solutions</h3>
                <p className="text-slate-300 mb-6">Tailored AI systems designed for your specific business needs.</p>
                <div className="space-y-2">
                  <div className="flex items-center text-slate-400">
                    <CheckCircle className="w-4 h-4 text-teal-400 mr-2" />
                    <span className="text-sm">Machine Learning Models</span>
                  </div>
                  <div className="flex items-center text-slate-400">
                    <CheckCircle className="w-4 h-4 text-teal-400 mr-2" />
                    <span className="text-sm">Natural Language Processing</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 hover:border-teal-500/50 transition-all">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-yellow-500 rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Business Automation</h3>
                <p className="text-slate-300 mb-6">Streamline operations with intelligent automation workflows.</p>
                <div className="space-y-2">
                  <div className="flex items-center text-slate-400">
                    <CheckCircle className="w-4 h-4 text-teal-400 mr-2" />
                    <span className="text-sm">Process Automation</span>
                  </div>
                  <div className="flex items-center text-slate-400">
                    <CheckCircle className="w-4 h-4 text-teal-400 mr-2" />
                    <span className="text-sm">Workflow Integration</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 hover:border-teal-500/50 transition-all">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-yellow-500 rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Expert Consulting</h3>
                <p className="text-slate-300 mb-6">Strategic guidance from AI experts who understand your industry.</p>
                <div className="space-y-2">
                  <div className="flex items-center text-slate-400">
                    <CheckCircle className="w-4 h-4 text-teal-400 mr-2" />
                    <span className="text-sm">Strategy Development</span>
                  </div>
                  <div className="flex items-center text-slate-400">
                    <CheckCircle className="w-4 h-4 text-teal-400 mr-2" />
                    <span className="text-sm">Implementation Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
              <p className="text-xl text-slate-300">Get in touch to discuss how VoltMind AI can help you achieve your goals</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center text-slate-300">
                    <Mail className="w-5 h-5 text-teal-400 mr-3" />
                    <span>your-actual-email@voltmind.ai</span>
                  </div>
                  <div className="flex items-center text-slate-300">
                    <Phone className="w-5 h-5 text-teal-400 mr-3" />
                    <span>+1 (your-actual-number)</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8">
                <div className="space-y-6">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                  <button
                    onClick={handleSubmit}
                    className="w-full bg-gradient-to-r from-teal-500 to-yellow-500 text-white py-3 rounded-lg font-semibold hover:from-teal-600 hover:to-yellow-600 transition-all transform hover:scale-105"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-900/50 border-t border-slate-800 py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <img src="/voltmind-logo.png" alt="VoltMind AI" className="h-8 sm:h-10 w-auto object-contain mx-auto mb-4" />
            <div className="text-slate-400 text-sm">Ã‚Â© 2025 VoltMind AI. All rights reserved.</div>
          </div>
        </footer>
      </div>
    </>
  );
}
