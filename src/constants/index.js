import { cgi, ehs, cscu } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
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
            "Enhanced forecasting processes and methodologies using MAPE and trend analysis in the auto insurance industry.",
            "Performed financial reporting, including profit margins, P&L, cash flow modelling, and revenue forecasting.",
            "Conducted model matching in Python using NLTK and Pandas, optimizing classification accuracy.",
            "Acquired and manipulated data from databases using SQL on SQL Server, improving reporting efficiency.",
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
            "Conducted screening interviews, ensuring 90% adoption success rate by matching applicants to appropriate pets.",
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
            "Manage all financial needs of the CSCU including funding from sponsors, department, and student groups for events, accommodations, food, beverages, prizes, etc.",
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
            "Acted as public relations contact for all TMU computer science students, societies, and faculty members.",
            "Communicated relevant updates, events, and opportunities with the student body via social media (Instagram, Discord, LinkedIn, etc.), monthly newsletters, and school announcement board.",
            "Developed and execute communication strategies to enhance student engagement and organizational transparency.",
            "Coordinated with executive team members to ensure consistent messaging and branding of union across all communication channels.",
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


export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/sofia-pham',
    },
];

export const projects = [
    {
        iconUrl: ttt,
        theme: 'btn-back-white',
        name: 'Tic Tac Toe Game',
        description: '',
        link: '',
    },
    {
        iconUrl: website,
        theme: 'btn-back-white',
        name: 'Portfolio Website (this one!)',
        description: '',
        link: 'https://github.com/sofia-pham/sofiapham.git',
    },
    {
        iconUrl: ttt,
        theme: 'btn-back-white',
        name: 'Online Clothing Store DBMS',
        description: '',
        link: '',
    },
    {
        iconUrl: ttt,
        theme: 'btn-back-white',
        name: 'Cat Of The Day',
        description: '',
        link: '',
    },
];