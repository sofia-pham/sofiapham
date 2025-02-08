import { cgi, ehs, cscu } from "../assets/images";
import {
    contact,
    css,
    git,
    github,
    html,
    javascript,
    mongodb,
    nextjs,
    nodejs,
    react,
    tailwindcss,
    typescript, 
    python, 
    c,
    cpp,
    blender,
    java,
    php,
    threejs,
    ttt,
    website,
    finger,
    cat,
    store,
    linkedin,
    email
} from "../assets/icons";

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
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: php,
        name: "PHP",
        type: "Backend",
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
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: threejs,
        name: "Three.js",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: c,
        name: "C",
        type: "Backend",
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
        imageUrl: blender,
        name: "Blender",
        type: "3D Software",
    },
];

export const experiences = [
    {
        title: "Data Scientist (Co-op)",
        company_name: "CGI",
        icon: cgi,
        iconBg: "#FFC1BD",
        date: "August 2023 - August 2024",
        points: [
            "Optimized automobile classification and labelling efficiency by 15% using Python, Natural Language Tool Kit (NLTK), and Pandas to perform model matching and trend analysis on all Canadian automobiles.",
            "Improved financial reporting accuracy to 96%, leveraging Python and SQL scripts on databases hosted on SQL Servers for faster profit margin, cash flow modelling, and revenue forecasting calculations.",
            "Worked cross-functionally across multiple teams to develop system design strategies that enhance forecasting processes and methodologies to decrease mean absolute percentage error.",
        ],
    },
    {
        title: "Adoption Application Coordinator",
        company_name: "Etobicoke Humane Society",
        icon: ehs,
        iconBg: "#FFDBBB",
        date: "October 2020 - December 2023",
        points: [
            "Managed over 500 applications annually, maintaining accurate records in a common database using Excel.",
            "Conducted screening interviews, ensuring a 90% adoption success rate by matching applicants to pets.",
            "Analyzed application and adoption data to identify patterns, optimizing the screening process and improving adoption match accuracy by 15%.", 
            "Guided applicants through a thorough and semi-remote adoption process.",
        ],
    },
];

export const extracurriculars = [
    {
        title: "VP Finance",
        company_name: "Computer Science Course Union",
        icon: cscu,
        iconBg: "#c1e1ec",
        date: "September 2024 - Present",
        points: [
            "Managing over $15,000 in budget for the CS student body of 1000+ students, including funding from the school’s financial department and external sponsors such as Dayforce and theScore.",
            "Leading and delegating responsibilities to finance associates to maintain a 10% budget increase YoY.",
            "Communicate between the finance department of TMU and student groups to obtain budget and maintain proper historical records.",
            "Prepare financial reports and budget proposals to ensure transparency and accountability in fund allocations.",
            "Negotiate sponsorship agreements and funding opportunities to maximize financial support for student initiatives.",
        ],
    },
    {
        title: "VP Communications",
        company_name: "Computer Science Course Union",
        icon: cscu,
        iconBg: "#c1e1ec",
        date: "May 2023 - September 2024",
        points: [
            "Acted as public relations contact for all TMU CS students, 5 student societies, and 12 faculty members.",
            "Communicated relevant updates, events, and opportunities with the student body via social media, monthly newsletters, and school announcement boards.",
            "Lead communications for speakers and sponsors from Amazon, Dayforce, Desjardins, Intuit, LinkedIn, Notion, Shopify, and Tesla.",
            "Developed and execute communication strategies to enhance student engagement, consistent branding, and organizational transparency.",
        ],
    },
    {
        title: "Marketing Associate",
        company_name: "Computer Science Course Union",
        icon: cscu,
        iconBg: "#c1e1ec",
        date: "September 2022 - April 2023",
        points: [
           "Devised and implemented the CSCU’s marketing strategy for the school year.",
            "Leveraged digital analytics tools to collect feedback on events and marketing.",
            "Managed social media campaigns to enhance brand visibility and engagement.",
            "Develop promotional materials and event marketing strategies with marketing team.",
        ],
    },
];

export const projects = [
    {
        iconUrl: website,
        theme: 'btn-back-white',
        name: 'Portfolio Website (this one!)',
        description: `- Developed React, Tailwind, and Vite portfolio website focused on self-made 3D assets of my pet cat in Blender, rendered on DOM with WebGL and handling character animations and interactions with R3F and Three.JS \n- Implemented email solution using Email.JS with animated 3D feedback and environment variables \n- Designed responsive 3D viewer with GLTF pipeline optimization, React Suspense loading, and cross-component state management for smooth transitions between pages and sections`,
        link: 'https://github.com/sofia-pham/sofiapham.git',
    },
    {
        iconUrl: cat,
        theme: 'btn-back-white',
        name: 'Cat Of The Day',
        description: 'WORK IN PROGRESS. LINK TO BE UPDATED SOON.',
        link: 'https://www.youtube.com/watch?v=8ELbX5CMomE',
    }, 
    {
        iconUrl: finger,
        theme: 'btn-back-white',
        name: 'AFK Scroller',
        description: `- Created a Python program that uses Mediapipe to process OpenCV video capture to track and map individual finger movements to keyboard inputs through Pynput, allowing users to swipe through pages by raising their fingers`,
        link: 'https://github.com/sofia-pham/AFK-Scroller',
    }, 
    {
        iconUrl: store,
        theme: 'btn-back-white',
        name: 'Online Clothing Store DBMS',
        description: `- Designed and implemented a comprehensive online database management system for a clothing store, integrating a PHP-based frontend with Oracle SQL as the backend \n- Key features: customer management (add, update, and search for customer information) with real-time results displayed on GUI, order management (search based on customer details, order IDs, and date filters), and inventory management (add, update, and track inventory)\nLINK TO BE UPDATED SOON.`,
        link: 'https://www.youtube.com/watch?v=8ELbX5CMomE',
    },
    {
        iconUrl: ttt,
        theme: 'btn-back-white',
        name: 'Tic Tac Toe Game',
        description: '- Developed a simple 3x3 tic-tac-toe game where users play against the computer\n- Implemented game logic using recursion, loops, and randomized actions for decision-making',
        link: 'https://github.com/sofia-pham/3x3tictactoe',
    },
];

export const socialLinks = [
    {
        name: 'Email',
        iconUrl: email,
        link: 'mailto: sof.pham@gmail.com',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/sofia-pham/',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/sofia-pham',
    },
];