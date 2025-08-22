"use client"
import { motion } from "framer-motion";
import * as Tabs from "@radix-ui/react-tabs";
import clsx from "clsx";

// FontAwesome
import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaNodeJs,
    FaGithub,
    FaPython,
    FaJava,
    FaDocker,
    FaAws,
    FaFigma,
} from "react-icons/fa";

// SimpleIcons
import {
    SiTypescript,
    SiCplusplus,
    SiGo,
    SiSvelte,
    SiFlask,
    SiFastapi,
    SiMysql,
    SiPostgresql,
    SiMongodb,
    SiMicrosoftazure,
    SiDatabricks,
    SiDocker,
    SiGit,
    SiJavascript,
    SiHtml5,
    SiCss3,
    SiReact,
    SiSvelte as SiSvelteAlt,
    SiPytorch,
    SiTensorflow,
    SiOpencv,
    SiScikitlearn,
    SiOpenai,
    SiWireshark,
    SiOpenssl,
    SiRestapi,
} from "react-icons/si";

// DevIcons (for C, C++, Go, etc.)
import { DiJavascript1, DiGo, DiPython, DiJava, DiReact, DiSvelte, DiDatabase } from "react-icons/di";

// No direct icon: C, SQL (use DiDatabase or SiMysql/SiPostgresql), REST (SiRestapi), SHA-256 (no icon), Flask/FastAPI (SiFlask/SiFastapi), OpenCV (SiOpencv), Wireshark (SiWireshark), OpenSSL (SiOpenssl)

import { SiTailwindcss } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";


    const about ={
        title: "About me",
        description: "I'm a dedicated Computer Science student who enjoys programming and research for software development, security, and emerging intelligent technology!",
        info: [
            {
                fieldName: "Name",
                fieldValue: "Mahathi Gumudavelli",
            },
            {
                fieldName: "Phone",
                fieldValue: "678 390 0027",
            },
            {
                fieldName: "Professional Experiences",
                fieldValue: "6 Years",
            },
            {
                fieldName: "Nationality",
                fieldValue: "United States",
            },
            {
                fieldName: "Email",
                fieldValue: "gmahathi1@gmail.com",
            },
            {
                fieldName: "Languages",
                fieldValue: "English, Telugu, French, Hindi, Tamil",
            },
            {
                fieldName: "Location:",
                fieldValue: "Atlanta, Georgia",
            },
        ]
    };

    const experience = {
        icon: '/assets/resume/badge.svg',
        title: 'My experience',
        description: "My CS journey has been both challenging and rewarding through research, volunteering, and internships.",
                        items: [
                                {
                                        company: "Cisco",
                                        position: "IoT/Cybersecurity Intern",
                                        duration: "Summer 2021",
                                        details: [
                                            "Demoed product solution with HTML, CSS, and JS leveraging wireless technology to manage medication adherence."
                                        ]
                                },
                            {
                                    company: "GE Vernova",
                                    position: "Chief of Staff Cyber Management Intern",
                                    duration: "May 2025 - Aug 2025",
                                    details: [
                                        "Automated consolidation of 100+ cybersecurity standards into an internal AI assistant.",
                                        "Standardized migration of global-scale datasets to Databricks, improving query performance by 45%.",
                                        "Managed remediation of 300+ PKI/SSL certificates to strengthen infrastructure compliance.",
                                        "Delivered Prompt Engineering and emerging technology training to CISO leadership for AI-assisted threat detection."
                                    ]
                            },
                            {
                                    company: "Federal Reserve Bank of Atlanta",
                                    position: "Innovation Analyst/Solutions Architect Intern",
                                    duration: "May 2024 - Dec 2024",
                                    details: [
                                        "Developed secure PowerBI dashboards integrating 500+ datasets; improved workflow reliability via robust error handling in PowerApps.",
                                        "Authored simulation scripts for user behavior testing, reducing deployment issues by 30%."
                                    ]
                            },
                            {
                                    company: "Google",
                                    position: "ChromeOs Application Developer (Capstone)",
                                    duration: "Jan 2024 - Dec 2024",
                                    details: [
                                        "Built a secure, sandboxed file converter (Svelte/Material UI) for ChromeOS.",
                                        "Conducted iterative security and UI testing to identify and fix vulnerabilities."
                                    ]
                            },
                            {
                                    company: "Georgia Institute of Technology",
                                    position: "Computer Science Teaching Assistant",
                                    duration: "Aug 2024 - Present",
                                    details: [
                                        "Mentored 300+ students on projects and career development in ML, data science, and distributed systems."
                                    ]
                            },
                            {
                                    company: "State Farm",
                                    position: "Finance Intern",
                                    duration: "May 2023 - Aug 2023",
                                    details: [
                                        "Improved customer adoption of self-service digital tools by supporting new process automation initiatives."
                                    ]
                            },
                            {
                                    company: "Dataseers",
                                    position: "UI/UX Intern",
                                    duration: "Aug 2021 - May 2022",
                                    details: [
                                        "Designed UI and improved explainability of AI-driven fraud detection dashboards with secure design principles."
                                    ]
                            },
                            {
                                    company: "Virtual Experiences Laboratory, Athens, GA",
                                    position: "Research Assistant",
                                    duration: "2023 - Present",
                                    details: [
                                        "Research on virtual experiences and data analysis."
                                    ]
                            },
                            {
                                    company: "VisualizaXiong Lab",
                                    position: "Research Assistant",
                                    duration: "Feb 2025 - Present",
                                    details: [
                                        "Worked with Python3, R, PyTorch, and Conda to understand how to improve data visualizations."
                                    ]
                            },
                            {
                                    company: "Georgia Research Institute (Prof. Courtney Crooks)",
                                    position: "Research Assistant",
                                    duration: "Aug 2025 - Present",
                                    details: [
                                        "Research on human trust in AI with a cybersecurity psychology perspective."
                                    ]
                            }
                        ]
    };

    const education = {
        icon: "/assets/resume/cap.svg",
        title: "My education",
        description: "My academic background and certifications.",
        items: [
            {
                institution: "Georgia Institute of Technology",
                position: "Bachelor of Science in Computer Science",
                duration: "2022-Present",
            },
            {
                institution: "IBM",
                position: "AI Fundamentals",
                duration: "2023",
            },
            {
                institution: "AWS Training and Certification",
                position: "Amazon Bedrock Getting Started",
                duration: "2022-Present",
            },
            {
                institution: "AWS Training and Certification",
                position: "Amazon Bedrock Getting Started",
                duration: "2025",
            },
            {
                institution: "Cisco Networking Academy",
                position: "Introduction to IoT",
                duration: "2021",
            },
             {
                institution: "Cisco Networking Academy",
                position: "Introduction to AI",
                duration: "2021",
            },
             {
                institution: "Cisco Networking Academy",
                position: "Introduction to Cybersecurity",
                duration: "2021",
            },
        ]


    };
    const skills = {
        title: "My technical skills",
        description: "Technologies and programming languages I have learned through coursework, projects, internships, and research.",
        items: [
            // FontAwesome
            "HTML5",
            "CSS3",
            "JavaScript",
            "React",
            "Node.js",
            "GitHub",
            "Python",
            "Java",
            "Docker",
            "AWS",
            "Figma",
            // SimpleIcons
            "TypeScript",
            "C++",
            "Go",
            "Svelte",
            "Flask",
            "FastAPI",
            "MySQL",
            "PostgreSQL",
            "MongoDB",
            "Microsoft Azure",
            "Databricks",
            "Docker",
            "Git",
            "JavaScript (SI)",
            "HTML5 (SI)",
            "CSS3 (SI)",
            "React (SI)",
            "Svelte (Alt)",
            "PyTorch",
            "TensorFlow",
            "OpenCV",
            "scikit-learn",
            "OpenAI",
            "Wireshark",
            "OpenSSL",
            "REST API",
            // DevIcons
            "JavaScript (DI)",
            "Go (DI)",
            "Python (DI)",
            "Java (DI)",
            "React (DI)",
            "Svelte (DI)",
            "Database",
            // Other
            "Tailwind CSS",
            "Next.js",
            // General
            "SQL",
            "Machine Learning",
            "Data Visualization"
        ]
    };
const Resume = () => {
    // Company color map for custom company name coloring
    const companyColor = {
    "Cisco": "#1BA0D7",
    "GE Vernova": "#009150", // Urgency green
    "Federal Reserve Bank of Atlanta": "#2563eb", // Lighter blue
    "Google": null, // Will use multicolor
    "Georgia Institute of Technology": "#B3A369",
    "State Farm": "#E30613",
    "Dataseers": null, // Will use blue/orange
    "Virtual Experiences Laboratory, Athens, GA": "#8E44AD",
    "VisualizaXiong Lab": "#fff", // White for readability
    "Georgia Research Institute (Prof. Courtney Crooks)": "#B3A369", // GT gold
    };
    // Helper to extract the latest year from a duration string
    function getLatestYear(duration) {
        if (!duration) return 0;
        // Match all 4-digit years
        const years = duration.match(/\d{4}/g);
        if (!years) return 0;
        // Return the highest year found
        return Math.max(...years.map(Number));
    }
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="min-h-[80vh] flex justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto mt-2 ml-4 xl:mt-8 xl:ml-16">
                <Tabs.Root defaultValue="experience" orientation="vertical" className="flex flex-col xl:flex-row w-full gap-12">
                    <Tabs.List className="flex flex-col gap-3 min-w-[180px] bg-transparent p-0 xl:sticky xl:top-24 self-start">
                        <Tabs.Trigger
                            value="experience"
                            style={{ color: 'white' }}
                            className="w-[260px] xl:w-[320px] px-10 py-4 text-left font-medium border border-gray-700 transition-colors data-[state=active]:bg-purple-600 data-[state=active]:text-white data-[state=inactive]:bg-gray-800 data-[state=inactive]:text-white shadow-none focus:outline-none rounded-2xl"
                        >
                            Experience
                        </Tabs.Trigger>
                        <Tabs.Trigger
                            value="education"
                            style={{ color: 'white' }}
                            className="w-[260px] xl:w-[320px] px-10 py-4 text-left font-medium border border-gray-700 transition-colors data-[state=active]:bg-purple-600 data-[state=active]:text-white data-[state=inactive]:bg-gray-800 data-[state=inactive]:text-white shadow-none focus:outline-none rounded-2xl"
                        >
                            Education
                        </Tabs.Trigger>
                        <Tabs.Trigger
                            value="skills"
                            style={{ color: 'white' }}
                            className="w-[260px] xl:w-[320px] px-10 py-4 text-left font-medium border border-gray-700 transition-colors data-[state=active]:bg-purple-600 data-[state=active]:text-white data-[state=inactive]:bg-gray-800 data-[state=inactive]:text-white shadow-none focus:outline-none rounded-2xl"
                        >
                            Skills
                        </Tabs.Trigger>
                        <Tabs.Trigger
                            value="about"
                            style={{ color: 'white' }}
                            className="w-[260px] xl:w-[320px] px-10 py-4 text-left font-medium border border-gray-700 transition-colors data-[state=active]:bg-purple-600 data-[state=active]:text-white data-[state=inactive]:bg-gray-800 data-[state=inactive]:text-white shadow-none focus:outline-none rounded-2xl"
                        >
                            About me
                        </Tabs.Trigger>
                    </Tabs.List>
                    <div className="flex-1">
                        <Tabs.Content value="experience">
                                                                                                                                            <div className="flex flex-col gap-0">
                                                                                                                                                {/* Badge and Title */}
                                                                                                                                                <div className="flex items-center gap-4 mb-2">
                                                                                                                                                    <img src={experience.icon} alt="badge" className="w-10 h-10" />
                                                                                                                                                    <h2 className="text-2xl font-bold text-white">{experience.title}</h2>
                                                                                                                                                </div>
                                                                                                                                                {/* True Tree Visualization */}
                                                                                                                                                    <div className="w-full bg-neutral-800 border border-gray-700 rounded-2xl shadow-xl px-0 sm:px-8 py-8 flex flex-col relative overflow-x-auto">
                                                                                                                                                    {(() => {
                                                                                                                                                        // Categorize experiences
                                                                                                                                                        const groups = {
                                                                                                                                                            Internship: [],
                                                                                                                                                            Research: [],
                                                                                                                                                            Teaching: [],
                                                                                                                                                            Other: []
                                                                                                                                                        };
                                                                                                                                                        (experience.items || []).forEach(item => {
                                                                                                                                                            const pos = item.position.toLowerCase();
                                                                                                                                                            if (pos.includes('intern')) groups.Internship.push(item);
                                                                                                                                                            else if (pos.includes('research')) groups.Research.push(item);
                                                                                                                                                            else if (pos.includes('teaching')) groups.Teaching.push(item);
                                                                                                                                                            else groups.Other.push(item);
                                                                                                                                                        });
                                                                                                                                                        const order = ['Internship','Research','Teaching','Other'];
                                                                                                                                                        // Tree layout: root node, then branches for each type, then leaves for each experience
                                                                                                                                                                                            return (
                                                                                                                                                                                                <div className="flex flex-col items-start gap-0 relative" style={{minHeight:'300px'}}>
                                                                                                                                                                                                    {/* Root node */}
                                                                                                                                                                                                    <div className="flex items-center mb-4 ml-8">
                                                                                                                                                                                                        <span className="w-6 h-6 rounded-full bg-purple-600 border-4 border-gray-900 flex items-center justify-center text-white font-bold text-xs">EXP</span>
                                                                                                                                                                                                        <span className="ml-3 text-lg font-bold text-purple-200 tracking-wide">Experience</span>
                                                                                                                                                                                                    </div>
                                                                                                                                                                                                    {/* Branches and leaves */}
                                                                                                                                                                                                    <div className="flex flex-col gap-0 ml-8">
                                                                                                                                                                                                        {order.map((type, i) =>
                                                                                                                                                                                                            groups[type].length > 0 && (
                                                                                                                                                                                                                <div key={type} className="flex flex-row items-start mb-6 relative">
                                                                                                                                                                                                                    {/* Branch node */}
                                                                                                                                                                                                                    <div className="flex flex-col items-center mr-4" style={{width:'2.5rem'}}>
                                                                                                                                                                                                                        <span className="w-5 h-5 rounded-full bg-purple-400 border-4 border-gray-900 flex items-center justify-center text-xs font-bold text-white uppercase">{type[0]}</span>
                                                                                                                                                                                                                        {/* Branch vertical line: only show if not last group and group has more than 1 experience */}
                                                                                                                                                                                                                        {groups[type].length > 1 && <span className="flex-1 w-1 bg-purple-700/40" style={{minHeight: '2.5rem'}}></span>}
                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                    <div className="flex flex-col gap-0">
                                                                                                                                                                                                                        <span className="text-base font-bold text-purple-200 mb-2">{type}</span>
                                                                                                                                                                                                                        {groups[type]
                                                                                                                                                                                                                            .sort((a, b) => getLatestYear(b.duration) - getLatestYear(a.duration))
                                                                                                                                                                                                                            .map((item, idx, arr) => (
                                                                                                                                                                                                                                <div key={item.company + item.position + item.duration} className={"flex items-center gap-3 mb-2 ml-6 relative" + (idx === arr.length-1 ? " mb-4" : "") }>
                                                                                                                                                                                                                                    {/* Node connector */}
                                                                                                                                                                                                                                    <span className="absolute left-[-2.5rem] top-1/2 w-6 h-0.5 bg-purple-400" style={{transform:'translateY(-50%)'}}></span>
                                                                                                                                                                                                                                    {/* Leaf node */}
                                                                                                                                                                                                                                    <span className="w-4 h-4 rounded-full border-4 border-gray-900" style={{background: item.company === 'Google' ? 'linear-gradient(90deg,#4285F4,#EA4335,#FBBC05,#34A853,#EA4335)' : item.company === 'Dataseers' ? 'linear-gradient(90deg,#0074D9,#FF851B)' : (companyColor[item.company] || '#a78bfa')}}></span>
                                                                                                                                                                                                                                    <span className="text-white font-semibold text-sm mr-2">{item.position}</span>
                                                                                                                                                                                                                                    {item.company === 'Google' ? (
                                                                                                                                                                                                                                        <span className="text-xs font-bold flex items-center">
                                                                                                                                                                                                                                            <span style={{color:'#4285F4'}}>G</span>
                                                                                                                                                                                                                                            <span style={{color:'#EA4335'}}>o</span>
                                                                                                                                                                                                                                            <span style={{color:'#FBBC05'}}>o</span>
                                                                                                                                                                                                                                            <span style={{color:'#4285F4'}}>g</span>
                                                                                                                                                                                                                                            <span style={{color:'#34A853'}}>l</span>
                                                                                                                                                                                                                                            <span style={{color:'#EA4335'}}>e</span>
                                                                                                                                                                                                                                        </span>
                                                                                                                                                                                                                                    ) : item.company === 'Dataseers' ? (
                                                                                                                                                                                                                                        <span className="text-xs font-bold flex items-center">
                                                                                                                                                                                                                                            <span style={{color:'#0074D9'}}>Data</span><span style={{color:'#FF851B'}}>seers</span>
                                                                                                                                                                                                                                        </span>
                                                                                                                                                                                                                                    ) : (
                                                                                                                                                                                                                                        <span className="text-xs font-bold flex items-center" style={{color: companyColor[item.company] || '#a78bfa'}}>
                                                                                                                                                                                                                                            {item.company}
                                                                                                                                                                                                                                        </span>
                                                                                                                                                                                                                                    )}
                                                                                                                                                                                                                                    <span className="text-xs text-gray-400 font-mono ml-2 whitespace-nowrap">{item.duration}</span>
                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                            ))}
                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                </div>
                                                                                                                                                                                                            )
                                                                                                                                                                                                        )}
                                                                                                                                                                                                    </div>
                                                                                                                                                                                                </div>
                                                                                                                                                                                            );
                                                                                                                                                                                        })()}
                                                                                                                                                </div>
                                                                                                                                            </div>
                        </Tabs.Content>
                        <Tabs.Content value="education">
                                                                                    <div className="flex flex-col gap-0">
                                                                                        {/* Badge and Title */}
                                                                                        <div className="flex items-center gap-4 mb-2">
                                                                                            <img src={education.icon} alt="badge" className="w-10 h-10" />
                                                                                            <h2 className="text-2xl font-bold text-white">{education.title}</h2>
                                                                                        </div>
                                                                                        {/* Tree Visualization for Education */}
                                                                                           <div className="w-full bg-neutral-800 border border-gray-700 rounded-2xl shadow-xl px-0 sm:px-8 py-8 flex flex-col relative overflow-x-auto">
                                                                                            <div className="flex flex-col items-start gap-0 relative" style={{minHeight:'200px'}}>
                                                                                                {/* Root node */}
                                                                                                <div className="flex items-center mb-4 ml-8">
                                                                                                    <span className="w-6 h-6 rounded-full bg-purple-600 border-4 border-gray-900 flex items-center justify-center text-white font-bold text-xs">EDU</span>
                                                                                                    <span className="ml-3 text-lg font-bold text-purple-200 tracking-wide">Education</span>
                                                                                                </div>
                                                                                                {/* Main Degree Node */}
                                                                                                {(() => {
                                                                                                    const main = (education.items || []).find(e => e.institution && e.institution.toLowerCase().includes('georgia institute of technology'));
                                                                                                    const certs = (education.items || []).filter(e => !e.institution || !e.institution.toLowerCase().includes('georgia institute of technology'));
                                                                                                    return (
                                                                                                        <>
                                                                                                            {main && (
                                                                                                                <div className="flex items-center gap-4 mb-6 ml-12 relative">
                                                                                                                    {/* Main node connector */}
                                                                                                                    <span className="absolute left-[-3rem] top-1/2 w-10 h-1 bg-purple-400" style={{transform:'translateY(-50%)'}}></span>
                                                                                                                    <span className="w-8 h-8 rounded-full border-4 border-purple-400 bg-purple-600 flex items-center justify-center text-white font-bold text-base shadow-lg">🎓</span>
                                                                                                                    <div className="flex flex-col">
                                                                                                                        <span className="text-lg font-bold text-white">{main.position}</span>
                                                                                                                        <span className="text-sm font-bold text-purple-200">{main.institution}</span>
                                                                                                                        <span className="text-xs text-gray-400 font-mono">{main.duration}</span>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            )}
                                                                                                            {/* Certifications as smaller nodes */}
                                                                                                            <div className="flex flex-col gap-0 ml-8">
                                                                                                                {certs
                                                                                                                    .sort((a, b) => getLatestYear(b.duration) - getLatestYear(a.duration))
                                                                                                                    .map((item, idx, arr) => (
                                                                                                                        <div key={item.institution + item.position + item.duration} className={"flex items-center gap-3 mb-2 ml-6 relative" + (idx === arr.length-1 ? " mb-4" : "") }>
                                                                                                                            {/* Node connector */}
                                                                                                                            <span className="absolute left-[-2.5rem] top-1/2 w-6 h-0.5 bg-purple-400" style={{transform:'translateY(-50%)'}}></span>
                                                                                                                            {/* Leaf node */}
                                                                                                                            <span className="w-4 h-4 rounded-full border-4 border-gray-900 bg-purple-400"></span>
                                                                                                                            <span className="text-white font-semibold text-sm mr-2">{item.position}</span>
                                                                                                                            <span className="text-xs font-bold flex items-center text-purple-200 ml-1">{item.institution}</span>
                                                                                                                            <span className="text-xs text-gray-400 font-mono ml-2 whitespace-nowrap">{item.duration}</span>
                                                                                                                        </div>
                                                                                                                    ))}
                                                                                                            </div>
                                                                                                        </>
                                                                                                    );
                                                                                                })()}
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                        </Tabs.Content>
                        <Tabs.Content value="skills">
                                                        <div className="flex flex-col gap-0">
                                                            {/* Badge and Title */}
                                                            <div className="flex items-center gap-4 mb-2">
                                                                <span className="w-10 h-10 bg-purple-700 rounded-full flex items-center justify-center text-white text-2xl"><FaReact /></span>
                                                                <h2 className="text-2xl font-bold text-white">My skills</h2>
                                                            </div>
                                                            <div className="w-full bg-neutral-800 border border-gray-700 rounded-2xl shadow-xl px-0 sm:px-8 py-8 flex flex-col">
                                                                                                                                <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-6 place-items-center">
                                                                                                                                    {/* Other tech icons */}
                                                                                                                                    <SiTailwindcss className="text-cyan-400 text-4xl" title="Tailwind CSS" />
                                                                                                                                    <SiNextdotjs className="text-gray-200 text-4xl" title="Next.js" />
                                                                                                                                    {/* FontAwesome icons */}
                                                                                                                                    <FaHtml5 className="text-orange-500 text-4xl" title="HTML5" />
                                                                                                                                    <FaCss3 className="text-blue-500 text-4xl" title="CSS3" />
                                                                                                                                    <FaJs className="text-yellow-400 text-4xl" title="JavaScript" />
                                                                                                                                    <FaReact className="text-cyan-400 text-4xl" title="React" />
                                                                                                                                    <FaNodeJs className="text-green-600 text-4xl" title="Node.js" />
                                                                                                                                    <FaGithub className="text-gray-300 text-4xl" title="GitHub" />
                                                                                                                                    <FaPython className="text-blue-400 text-4xl" title="Python" />
                                                                                                                                    <FaJava className="text-red-700 text-4xl" title="Java" />
                                                                                                                                    <FaDocker className="text-blue-300 text-4xl" title="Docker" />
                                                                                                                                    <FaAws className="text-yellow-500 text-4xl" title="AWS" />
                                                                                                                                    <FaFigma className="text-pink-400 text-4xl" title="Figma" />
                                                                                                                                    {/* SimpleIcons icons */}
                                                                                                                                    <SiTypescript className="text-blue-500 text-4xl" title="TypeScript" />
                                                                                                                                    <SiCplusplus className="text-blue-700 text-4xl" title="C++" />
                                                                                                                                    <SiGo className="text-cyan-700 text-4xl" title="Go" />
                                                                                                                                    <SiSvelte className="text-orange-400 text-4xl" title="Svelte" />
                                                                                                                                    <SiFlask className="text-gray-200 text-4xl" title="Flask" />
                                                                                                                                    <SiFastapi className="text-green-400 text-4xl" title="FastAPI" />
                                                                                                                                    <SiMysql className="text-blue-600 text-4xl" title="MySQL" />
                                                                                                                                    <SiPostgresql className="text-blue-400 text-4xl" title="PostgreSQL" />
                                                                                                                                    <SiMongodb className="text-green-700 text-4xl" title="MongoDB" />
                                                                                                                                    <SiDatabricks className="text-orange-500 text-4xl" title="Databricks" />
                                                                                                                                    <SiDocker className="text-blue-300 text-4xl" title="Docker (SI)" />
                                                                                                                                    <SiGit className="text-orange-500 text-4xl" title="Git" />
                                                                                                                                    {/* DevIcons and others remain commented for now */}
                                                                                                                                </div>
                                                            </div>
                                                        </div>
                        </Tabs.Content>
                        <Tabs.Content value="about">
                            <div className="flex flex-col gap-0">
                                {/* Badge and Title */}
                                <div className="flex items-center gap-4 mb-2">
                                    <span className="w-10 h-10 bg-purple-700 rounded-full flex items-center justify-center text-white text-2xl"><FaReact /></span>
                                    <h2 className="text-2xl font-bold text-white">{about.title}</h2>
                                </div>
                                {/* Description */}
                                <p className="text-lg text-gray-300 mb-8 max-w-2xl">{about.description}</p>
                                {/* Info grid */}
                                    <div className="w-full flex flex-row gap-x-20">
                                    {/* Custom order: left column first, then right column */}
                                    {(() => {
                                        const leftFields = ["Name", "Phone", "Professional Experiences", "Nationality"];
                                        const rightFields = about.info.filter(item => !leftFields.includes(item.fieldName));
                                        const leftItems = about.info.filter(item => leftFields.includes(item.fieldName));
                                        return (
                                            <>
                                                {/* Left column */}
                                                <div className="flex flex-col gap-y-2">
                                                    {leftItems.map(item => (
                                                        <div key={item.fieldName} className="flex flex-col mb-0.5">
                                                            <span className="text-gray-400 text-sm font-normal leading-tight">{item.fieldName}</span>
                                                            <span className="text-white text-lg font-semibold leading-tight mt-0.5">{item.fieldValue}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                                {/* Right column */}
                                                <div className="flex flex-col gap-y-2">
                                                    {rightFields.map(item => (
                                                        <div key={item.fieldName} className="flex flex-col mb-0.5">
                                                            <span className="text-gray-400 text-sm font-normal leading-tight">{item.fieldName}</span>
                                                            <span className="text-white text-lg font-semibold leading-tight mt-0.5">{item.fieldValue}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </>
                                        );
                                    })()}
                                </div>
                            </div>
                        </Tabs.Content>
                    </div>
                </Tabs.Root>
    </div>
    </motion.div>
    );
};

export default Resume;