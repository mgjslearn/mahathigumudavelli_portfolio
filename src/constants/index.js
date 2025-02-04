import { meta, google, frba, cisco, dataseers, sf } from "../assets3/images";
import {
    car,
    contact,
    python, 
    java, 
    c, 
    javafx,
    css,
    bootstrap,
    r,
    sql,
    astudio,
    git,
    github,
    html,
    javascript,
    linkedin,
    svelte,
    docker,
    mongodb,
    nextjs,
    nodejs,
    powerplat,
    azure,
    md,
    figma,
    assembly,
    react,
    tailwindcss,
} from "../assets3/icons";

export const skills = [
    {
        imageUrl: python, 
        name: "Python",
        type: "Backend",
    },
    {
        imageUrl: java, 
        name: "Java",
        type: "Backend",
    },
    {
        imageUrl: c, 
        name: "C",
        type: "Backend",
    },
    {
        imageUrl: sql, 
        name: "SQL",
        type: "Database",
    },
    {
        imageUrl: javafx, 
        name: "JavaFx",
        type: "FrontEnd",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: assembly,
        name: "Assembly",
        type: "backend",
    },
  
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: r,
        name: "R",
        type: "Data Science",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: azure, 
        name: "Azure",
        type: "database",
    },
    {
        imageUrl: powerplat,
        name: "Microsoft Power Platform",
        type: "Frontend and Backend",
    },
   
  
    {
        imageUrl: docker, 
        name: "Docker",
    },
    {
        imageUrl: figma,
        name: "Figma",
        type: "Frontend",
    },
    {
        imageUrl: bootstrap,
        name: "Bootstrap",
        type: "Frontend",
    },
    {
        imageUrl: md,
        name: "Google Material design kit",
        type: "Frontend",
    },
    
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
  
    {
        imageUrl: svelte,
        name: "Svelte",
        type: "Frontend and Backend",
    },
    {
        imageUrl: astudio, 
        name: "Android Studio",

    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
  
];

export const experiences = [
    {
        title: "PowerApps Developer/Solutions Architect Intern",
        company_name: "Federal Reserve Bank of Atlanta",
        icon: frba,
        iconBg: "#accbe1",
        date: "Summer 2024 - Fall 2024",
        points: [
            "Automating 5+ critical business processes, reducing manual efforts for clients by 60% ,through Agile development with PowerAutomate, PowerApps, and AI capabilities within Power Platform.",
            "Developing scripts to test applications efficiently, leading to 30% decrease in errors post-deployment.",
            "Designing models in PowerBI to better visualize data from 1000+ entries across Microsoft Excel and Sharepoint lists.",
            "Researching and developing error handling techniques within Power Platform to utilize FRBA templates.",
        ],
    },
    {
        title: "ChromeOS Developer (Capstone)",
        company_name: "Google",
        icon: google,
        iconBg: "#b7e4c7",
        date: "Spring 2024 - Fall 2024",
        points: [
            "Enhanced my technical expertise through hands-on experience with ChromeOS development tools and libraries solidifying my proficiency in software development using the Svelte framework and Material Design kit",
            "Engaged actively with a ChromeOs student team in user research, prototyping, and iterative testing to ensure the file converter application meets the highest standards of functionality and user experience on Chromebooks.",
        ],
    },
    {
        title: "Finance Intern",
        company_name: "State Farm",
        icon: sf,
        iconBg: "#fbc3bc",
        date: "Summer 2023",
        points: [
            "Shadowed and worked with business leaders in identifying opportunities for technology and business.",
            "Helped implement technology and process changes to improve customer usage of self service insurance options.",

        ],
    },
    {
        title: "SWE Developer and UI/UX Intern",
        company_name: "DataSeers (FinTech Startup)",
        icon: dataseers,
        iconBg: "#ffffff",
        date: "Fall 2021 - Spring 2022",
        points: [
            "Acquired valuable experience developing systems highlighting risk indicators using AI to secure financial transactions and improved UI/UX of AI-enhanced application leading to 30% increase of user retention.",
            "Shadowed COO and VP of Engineering to understand fraud prevention, compliance, KYC/KYB products",
        ],
    },
    {
        title: "IoT/Cybersecurity Intern",
        company_name: "Cisco",
        icon: cisco,
        iconBg: "#a2d2ff",
        date: "Summer 2021",
        points: [
            "Worked with other Cisco externs on Capstone project to create an innovative solution using wireless technology to a current healthcare problem and created a demo of the product UI using HTML, CSS, JavaScript, and Java.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/mgjslearn',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/mahathi-gumudavelli',
    }
];

export const projects = [
   
    {

        theme: 'btn-back-black',
        name: 'AI Neural Networks',
        description: 'Implemented A* Search, BFS,DFS, and UCS search algorithms and particle filtering within a Pacman game environment. Utilized forward processing of input and backward propagation algorithms to update weights of a neural network.',
        link: 'https://gist.github.com/mgjslearn/02a5ce20b6b26895f4a0d29c9eb7a976',
    },
    {
        
        theme: 'btn-back-red',
        name: 'Food <-> Nationality Generator',
        description: 'This is an interactive GUI app that can be used to get generate a random meal with a recipe and visual in a category of meals of your choice from a dropdown menu. User will also receive information about the random meals native country along with the full recipe in text. This application was used to learn how to incorporate multiple APIs and use JAVAFX v17 to create a GUI app',
        link: 'https://github.com/mgjslearn/FN-Api-app',
    },
    {
       
        theme: 'btn-back-green',
        name: 'Dungeon Crawler',
        description: 'This Android Mobile game application models a dungeons crawler game. Through this game I was able to learn and apply SOLID/GRAP principles, strategy/observer/factory patterns, and understand Android Studio to create a functioning mobile game application. Collaborated with a team following Agile methodology over the course of 5 sprints to develop a mobile game application on Android Studio utilizing design patterns including Strategy, Observer, Factory, and Singleton.',
        link: 'https://github.com/phunggnguyenn/CS2340A_Team45/tree/main/AndroidStudio_Template',
        appdemo: 'https://drive.google.com/file/d/1OW2wEZME_xcKzAcidwtyMIf6BeEU2VW3/view',
        codeExplain: 'https://drive.google.com/file/d/1beXzZUkdER5ddiUm1bRlDr_1s2bmk627/view'
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Bored App',
        description: 'This was a project I designed during quarantine to cure "boredom". It includes a compilation of riddles, fun math trivia, math puzzles, and more. It was created using Python.',
        link: 'https://docs.google.com/document/d/1DtOwXvk_tFrIUmNGphw8YSngm6br2Re2E8lZztOzRo0/edit?tab=t.0',
    },
    {
       
        theme: 'btn-back-pink',
        name: 'Simple Portfolio',
        description: 'This portfolio is something I designed myself in order to learn JavaScript but also refresh my CSS and HTML skills. I used the platform Repl to design and code this portfolio. I started by reading some articles that explained how others coded their own portfolios and tried it out myself. I used sources like W3Schools initially to learn the basics of JavaScript.',
        link: 'https://mgjslearn.github.io/portfoliomg/',
    },
   
    {
       
        theme: 'btn-back-yellow',
        name: 'LC4000 Architecture',
        description: 'This project required building out and thoroughly understanding the LC-4000 Datapath, ROM, and microcode instructions.',
        link: 'https://gist.github.com/mgjslearn/f8d39d6ca50b26f9a22a0fb563d1cf01',
    }
];