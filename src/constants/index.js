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
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
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
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
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

export const extracurricular = [
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
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];