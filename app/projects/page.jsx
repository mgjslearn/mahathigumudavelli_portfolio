"use client";
import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    name: 'MCP Live Sports Server',
    description: 'A scalable live sports event server with real-time updates and analytics.',
    link: 'https://github.com/mgjslearn/MCP-Live-Sports-Server',
    category: 'AI',
    theme: 'bg-gradient-to-r from-purple-600 to-blue-600',
    technologies: ['Python', 'FastAPI', 'WebSockets', 'Docker'],
  },
  {
    name: 'AI Resume Advisor',
    description: 'AI-powered resume review and feedback tool for job seekers.',
    link: 'https://github.com/mgjslearn/AI-Resume-Advisor',
    category: 'AI',
    theme: 'bg-gradient-to-r from-green-500 to-teal-500',
    technologies: ['Python', 'Flask', 'OpenAI API', 'Tailwind CSS'],
  },
  {
    name: 'AI Stock Market Summarizer',
    description: 'This project retrieves the latest financial news and real-time stock market data, then uses a Hugging Face large language model (LLM) to summarize trends, highlight market movers, and provide insights for investors.',
    link: 'https://github.com/mgjslearn/AI-Stock-Market-Summary-Bot',
    category: 'AI',
    theme: 'bg-gradient-to-r from-yellow-500 to-orange-500',
    technologies: ['Python', 'Hugging Face', 'yfinance', 'Flask'],
  },
  {
    name: 'AI DevOps Sentiment API',
    description: 'API for sentiment analysis of DevOps communications using AI.',
    link: 'https://github.com/mgjslearn/AI-DevOps-sentiment-api',
    category: 'AI',
    theme: 'bg-gradient-to-r from-blue-500 to-cyan-500',
    technologies: ['Python', 'Flask', 'Transformers', 'NLP'],
  },
  {
    name: 'Cryptography - Length Extension, Padding Oracle',
    description: 'Exploited cryptographic vulnerabilities using SHA-256 length extension and CBC padding oracle.',
    link: 'https://github.com/mgjslearn/cs3235_infosecurity/tree/main/crypto-project-2',
    category: 'Cybersecurity',
    theme: 'bg-gradient-to-r from-red-500 to-pink-500',
    technologies: ['Python', 'SHA-256', 'CBC', 'Cryptography'],
  },
  {
    name: 'AI Neural Networks (Pacman)',
    description: 'Implemented A* Search, BFS, DFS, and UCS search algorithms and particle filtering within a Pacman game environment. Utilized forward processing of input and backward propagation algorithms to update weights of a neural network.',
    link: 'https://gist.github.com/mgjslearn/02a5ce20b6b26895f4a0d29c9eb7a976',
    category: 'AI',
    theme: 'bg-gradient-to-r from-pink-500 to-purple-500',
    technologies: ['Python', 'Neural Networks', 'A*', 'BFS', 'DFS', 'UCS'],
  },
  {
    name: 'Computer Vision - Semantic Segmentation',
    description: 'Designed, Trained, and Fine Tuned deep convolutional networks using ResNet architecture for scene recognition.',
    link: 'https://gist.github.com/mgjslearn/8d482fc1596fbdc108ce0958419566e8',
    category: 'AI',
    theme: 'bg-gradient-to-r from-blue-400 to-cyan-400',
    technologies: ['Python', 'PyTorch', 'ResNet', 'Deep Learning'],
  },
  {
    name: 'AI for Image Classification - Scene Recognition',
    description: 'Designed, Trained, and Fine Tuned deep convolutional networks using ResNet architecture for scene recognition.',
    link: 'https://gist.github.com/mgjslearn/984c44d098f5fc9a983a0a55234f8800',
    category: 'AI',
    theme: 'bg-gradient-to-r from-green-400 to-blue-500',
    technologies: ['Python', 'PyTorch', 'ResNet', 'Deep Learning'],
  },
  {
    name: 'Computer Architecture - LC4000 Construction',
    description: 'Created LC4000 Architecture using CircuitSim application.',
    link: 'https://gist.github.com/mgjslearn/f8d39d6ca50b26f9a22a0fb563d1cf01',
    category: 'Other',
    theme: 'bg-gradient-to-r from-gray-500 to-gray-700',
    technologies: ['CircuitSim', 'Digital Logic'],
  },
  {
    name: 'Dungeon Crawler Game',
    description: 'Android dungeon crawler game with classic mechanics and modern UI.',
    link: 'https://github.com/mgjslearn/dungeons_crawler/tree/main/Android-S0.5-main',
    category: 'Web/App Dev',
    theme: 'bg-gradient-to-r from-fuchsia-500 to-purple-500',
    technologies: ['Java', 'Android Studio', 'Game Dev'],
    image: '/assets/dungeoncrawler_game_ss.png',
  },
  {
    name: 'Art Portfolio Web',
    description: 'A basic portfolio website to showcase art and web development skills.',
    link: 'https://github.com/mgjslearn/portfoliomg',
    category: 'Web/App Dev',
    theme: 'bg-gradient-to-r from-pink-400 to-yellow-400',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  {
    name: 'Nationality & Food App (JavaFX)',
    description: 'A JavaFX app where you can choose a food and get information about its nationality and fun facts.' ,
    link: 'https://github.com/mgjslearn/FN-Api-app/tree/main/cs1302-api-main',
    category: 'Web/App Dev',
    theme: 'bg-gradient-to-r from-orange-400 to-yellow-500',
    technologies: ['Java', 'JavaFX', 'APIs'],
    image: '/assets/Javafxapp.png',
  },
  {
    name: 'View Survey & Bangle.js Notification App',
    description: 'A survey and data collection app for research with the Virtual Experiences Laboratory, with notification support for the Bangle.js smartwatch.',
    link: 'https://github.com/mgjslearn/BangleApps',
    category: 'Web/App Dev',
    theme: 'bg-gradient-to-r from-blue-400 to-pink-400',
    technologies: ['React Native', 'Firebase', 'JavaScript', 'Bangle.js'],
    image: '/assets/Viewsurvey.jpeg',
  },
];

const categories = [
  'All',
  'AI',
  'Cybersecurity',
  'Web/App Dev',
];

const Projects = () => {
  const [selected, setSelected] = useState('All');
  const filtered = selected === 'All' ? projects : projects.filter(p => p.category === selected);

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2">
        My <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
      </h1>
      <p className="text-slate-400 max-w-2xl mb-8">
        These are some projects exploring my diverse skill set. I enjoy learning coding through the process of making different projects on topics of my interest. Throughout the following projects I have explored Python, Android Studio, Tailwind CSS, React.js, JavaFX, and more! If you have any ideas for projects and would love to work on it together, feel free to contact me!
      </p>

      {/* Filter Tabs */}
      <div className="flex gap-4 mb-10">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`px-6 py-2 rounded-full border border-purple-500 font-medium transition-colors ${selected === cat ? 'bg-purple-600 text-white' : 'bg-neutral-900 text-purple-300 hover:bg-purple-700/30'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="flex flex-wrap gap-8 justify-center">
        {filtered.map(project => (
          <div key={project.name} className="w-full max-w-xs bg-neutral-800 rounded-2xl shadow-lg p-6 flex flex-col border border-gray-700 hover:scale-105 transition-transform">
            {project.image && (
              <img src={project.image} alt={project.name + ' screenshot'} className="w-full h-32 object-cover rounded-xl mb-4 border border-gray-700" />
            )}
            <div className={`w-12 h-12 mb-4 rounded-xl flex items-center justify-center text-white text-2xl ${project.theme}`}></div>
            <h4 className="text-xl font-semibold mb-1 text-white">{project.name}</h4>
            <p className="text-slate-400 text-sm mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-3">
              {project.technologies && project.technologies.map(tech => (
                <span key={tech} className="bg-purple-900/60 text-purple-200 text-xs px-2 py-1 rounded font-mono">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-2 mt-auto">
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-200 text-xl">
                <FaGithub />
              </a>
              <span className="text-xs text-slate-500">GitHub</span>
            </div>
          </div>
        ))}
      </div>
      <hr className="my-12 border-slate-700" />
      {/* <CTA /> */}
    </section>
  );
};

export default Projects;