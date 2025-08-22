"use client";

import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

const MahaBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm Maha Bot 🤖 I can help answer questions about Mahathi's portfolio, skills, projects, and experience. What would you like to know?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Portfolio knowledge base
  const portfolioData = {
    skills: {
      programming: ["Python", "JavaScript", "Java", "C++", "SQL", "R"],
      frameworks: ["React", "Node.js", "Django", "Flask", "TensorFlow", "PyTorch"],
      technologies: ["AWS", "Docker", "Kubernetes", "Git", "MongoDB", "PostgreSQL"],
      specialties: ["Artificial Intelligence", "Machine Learning", "Cybersecurity", "Data Analysis", "Full Stack Development"]
    },
    background: {
      education: "Computer Science with focus in AI and Cybersecurity",
      interests: ["Data Engineering", "AI Analysis", "Full Stack Development", "MLSecOps", "Data Governance", "Product Management"]
    },
    experience: {
      type: "Software Developer",
      focus: "AI, Cybersecurity, and Full Stack Development"
    }
  };

  const generateBotResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    
    // Skills related queries
    if (message.includes('skill') || message.includes('technology') || message.includes('programming')) {
      return `Mahathi has expertise in various areas:\n\n🔧 Programming: ${portfolioData.skills.programming.join(', ')}\n\n⚛️ Frameworks: ${portfolioData.skills.frameworks.join(', ')}\n\n☁️ Technologies: ${portfolioData.skills.technologies.join(', ')}\n\n🎯 Specialties: ${portfolioData.skills.specialties.join(', ')}`;
    }
    
    // Background/Education
    if (message.includes('background') || message.includes('education') || message.includes('study')) {
      return `Mahathi has a strong background in ${portfolioData.background.education}. She's passionate about ${portfolioData.background.interests.join(', ')}.`;
    }
    
    // Experience
    if (message.includes('experience') || message.includes('work') || message.includes('job')) {
      return `Mahathi is a ${portfolioData.experience.type} with focus on ${portfolioData.experience.focus}. She enjoys working on diverse projects spanning AI, cybersecurity, and full-stack development.`;
    }
    
    // Projects
    if (message.includes('project') || message.includes('portfolio')) {
      return `Mahathi works on various exciting projects! You can explore her portfolio to see her latest work in AI, cybersecurity, and web development. Each project showcases her skills in different technologies and problem-solving approaches.`;
    }
    
    // Contact
    if (message.includes('contact') || message.includes('reach') || message.includes('hire')) {
      return `You can connect with Mahathi through her social media links on this page, or download her resume to get her contact information. She's always open to discussing new opportunities and collaborations!`;
    }
    
    // AI/ML specific
    if (message.includes('ai') || message.includes('artificial intelligence') || message.includes('machine learning') || message.includes('ml')) {
      return `AI and Machine Learning are core areas of Mahathi's expertise! She has experience with TensorFlow, PyTorch, and various AI/ML techniques. She's particularly interested in practical AI applications, MLSecOps, and data governance.`;
    }
    
    // Cybersecurity
    if (message.includes('security') || message.includes('cyber')) {
      return `Cybersecurity is one of Mahathi's key specializations. She combines her CS background with security expertise to build secure applications and implement MLSecOps practices.`;
    }
    
    // Default responses
    const defaultResponses = [
      "That's an interesting question! Feel free to ask me about Mahathi's skills, background, projects, or experience. I'm here to help you learn more about her portfolio!",
      "I'd love to help you learn more about Mahathi! Try asking about her technical skills, education, or the types of projects she works on.",
      "Great question! You can ask me about Mahathi's programming languages, frameworks, AI/ML experience, or cybersecurity expertise.",
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: generateBotResponse(inputMessage),
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-purple-500 hover:bg-purple-600 text-white p-4 rounded-full shadow-2xl border-2 border-white transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-purple-300"
          style={{ 
            backgroundColor: '#8b5cf6',
            boxShadow: '0 10px 25px rgba(139, 92, 246, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1)'
          }}
        >
          {isOpen ? <X size={24} color="white" /> : <MessageCircle size={24} color="white" />}
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-96 bg-gray-900/95 backdrop-blur-sm border border-purple-500/50 rounded-lg shadow-2xl z-50 flex flex-col">
          {/* Header */}
          <div className="bg-purple-500 text-white p-4 rounded-t-lg flex items-center justify-between"
               style={{ backgroundColor: '#8b5cf6' }}>
            <div className="flex items-center gap-2">
              <Bot size={20} color="white" />
              <span className="font-semibold text-white">Maha Bot</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs text-white">Online</span>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start gap-2 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    message.sender === 'user' 
                      ? 'bg-purple-500' 
                      : 'bg-gray-700'
                  }`}>
                    {message.sender === 'user' ? <User size={16} color="white" /> : <Bot size={16} color="white" />}
                  </div>
                  <div
                    className={`p-3 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-purple-500 text-white'
                        : 'bg-gray-800 text-gray-100'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start gap-2">
                  <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                    <Bot size={16} color="white" />
                  </div>
                  <div className="bg-gray-800 p-3 rounded-lg">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-700">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me about Mahathi's portfolio..."
                className="flex-1 bg-gray-800 text-white border border-gray-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-purple-500"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim()}
                className="bg-purple-500 hover:bg-purple-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white p-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400"
                style={{ backgroundColor: !inputMessage.trim() ? '#4b5563' : '#8b5cf6' }}
              >
                <Send size={16} color="white" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MahaBot;