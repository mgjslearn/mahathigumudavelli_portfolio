"use client";

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Linkedin, Github, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      // In a real application, you would send this to your backend or email service
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Reset form on success
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setSubmitStatus('success');
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Clear status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "mahathi.gumudavelli@example.com",
      href: "mailto:mahathi.gumudavelli@example.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 470-983-7805",
      href: "tel:+14709837805"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Atlanta, Georgia, USA",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/mahathi-gumudavelli",
      color: "hover:text-blue-400"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/mgjslearn",
      color: "hover:text-gray-300"
    },

   
  ];

  return (
    <section className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Get In <span className="text-purple-500">Touch</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. 
            Whether you have a project in mind or just want to connect, I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">Let's Connect</h2>
              <p className="text-white/70 text-lg mb-8">
                I'm currently open to full-time opportunities, freelance projects, and collaboration. 
                Feel free to reach out through any of the channels below.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center group-hover:bg-purple-500/30 transition-colors">
                      <Icon size={20} className="text-purple-500" />
                    </div>
                    <div>
                      <p className="text-sm text-white/60 uppercase tracking-wide">{info.label}</p>
                      {info.href ? (
                        <a 
                          href={info.href}
                          className="text-white hover:text-purple-400 transition-colors font-medium"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-white/10">
              <h3 className="text-xl font-semibold mb-4 text-white">Follow Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center transition-all duration-300 hover:border-purple-500/50 hover:bg-purple-500/10 ${social.color}`}
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Availability Status */}
            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-6 mt-8">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-medium">Available for new opportunities</span>
              </div>
              <p className="text-white/70 mt-2">
                Currently seeking full-time positions in AI/ML, cybersecurity/governance, full stack development, and product management.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-white">Send a Message</h3>
            
            {/* Success/Error Messages */}
            {submitStatus === 'success' && (
              <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 mb-6 flex items-center gap-3">
                <CheckCircle size={20} className="text-green-400" />
                <span className="text-green-400">Message sent successfully! I'll get back to you soon.</span>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 mb-6 flex items-center gap-3">
                <AlertCircle size={20} className="text-red-400" />
                <span className="text-red-400">Something went wrong. Please try again later.</span>
              </div>
            )}

            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-white/80 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all resize-vertical"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-purple-500 hover:bg-purple-600 hover:text-black disabled:bg-purple-500/50 disabled:cursor-not-allowed text-black font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </div>

            <p className="text-sm text-white/50 mt-4 text-center">
              * Required fields. I typically respond within 24-48 hours.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-4 text-white">Prefer a Direct Approach?</h3>
            <p className="text-white/70 mb-6">
              I love meeting new people, and I believe some of the best conversations can happen over coffee (or virtual coffee), except I would prefer a non-caffeine alternative :)
              Feel free to reach out directly to set up a rendez-vous!
            </p>
            <a
              href="mailto:gmahathi1@gmail.com"
              className="inline-flex items-center gap-2 bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105"
            >
              <Mail size={18} />
              Email Me Directly
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;