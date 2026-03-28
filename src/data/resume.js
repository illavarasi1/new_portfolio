export const data = {
  name: "Illavarasi",
  title: "MERN Stack Developer",
  tagline: "Building full-stack web apps with React, Node.js & MongoDB.",
  bio: "MERN Stack Developer skilled in React with TypeScript and modern UI styling using Tailwind CSS. Experienced in building dynamic, responsive web applications and developing REST APIs with Node.js, Express, and MongoDB. Strong knowledge in developing reusable components and building complete full-stack applications.",
  available: true,
  location: "Chennai, India",
  email: "illavarasi15@gmail.com",
  github: "https://github.com/illavarasi1",
  linkedin: "https://www.linkedin.com/in/ilavarasi-sathish",
    formspreeUrl: "https://formspree.io/f/mwvwvnlk",

  skills: [
    {
      category: "Frontend",
      icon: "⚛",
      color: "blue",
      items: ["React.js", "TypeScript", "Redux", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
    },
    {
      category: "Backend",
      icon: "⚙",
      color: "purple",
      items: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "MongoDB","Redis"],
    },
    {
      category: "Tools",
      icon: "🛠",
      color: "green",
      items: ["Git", "Postman", "VS Code", "GitHub", "Vercel", "Render"],
    },
  ],

    experience: [
    {
      role: "Full Stack Developer",
      company: "Gowebez",
      location: "Chennai",
      period: "May 2023 – Dec 2025",
      duration: "2+ yrs",
      projects: [
        {
          name: "Fund Me Smart – Crowdfunding Platform",
          points: [
            "Developed a crowdfunding application for campaign creation and donations.",
            "Implemented JWT-based authentication and authorization.",
            "Built REST APIs for campaigns, donations, and users.",
            "Designed responsive UI using React.js and Tailwind CSS.",
            "Managed data using MongoDB.",
          ],
          stack: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT", "REST APIs"],
        },
        {
          name: "Funding Incentives – Rewards Management System",
          points: [
            "Developed an incentive system for tracking user performance and rewards.",
            "Implemented reward calculation logic based on predefined rules.",
            "Built APIs using Node.js and Express.js for incentive management.",
            "Created dashboard UI using React.js for reports and tracking.",
          ],
          stack: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
        },
      ],
    },
    // {
    //   role: "Full Stack Developer",
    //   company: "Yoho Technology",
    //   location: "Chennai",
    //   period: "Mar 2022 – Oct 2025",
    //   duration: "3+ yrs",
    //   projects: null,
    //   responsibilities: [
    //     "Designed, developed, and deployed full-stack web applications using MERN stack.",
    //     "Built dynamic and reusable front-end components with React Hooks, Redux, and Tailwind CSS for responsive UI design.",
    //     "Created and consumed RESTful APIs for seamless data exchange between client and server.",
    //     "Implemented user authentication and authorization using JWT.",
    //     "Performed CRUD operations, schema design, and query optimization in MongoDB.",
    //     "Utilized Git for version control across team projects.",
    //     "Conducted code reviews, unit testing, and debugging using Postman and VS Code Debugger.",
    //   ],
    // },
  ],

  // ── Two featured work projects (no Soundsair) ──────────────────
  featuredProjects: [
    {
      title: "Fund Me Smart – Crowdfunding Platform",
      emoji: "💰",
      company: "Gowebez",
      type: "Full-Stack · Work Project",
      overview:
        "A full-stack MERN web platform designed to help users create fundraising campaigns and receive donations online. It provides a secure and user-friendly environment for managing campaigns, tracking contributions, and engaging supporters.",
      userFeatures: [
        "Register/login with secure authentication",
        "Create and manage fundraising campaigns",
        "Browse campaigns and make donations",
        "View donation history and campaign progress",
      ],
      adminFeatures: [
        "Manage users and campaigns",
        "Monitor donations and platform activity",
        "View reports and campaign performance",
      ],
      additional: [
        "JWT-based authentication & authorization",
        "RESTful APIs using Node.js and Express.js",
        "MongoDB for campaign, user, and transaction data",
        "Responsive UI built with React.js and Tailwind CSS",
        "Full-stack MERN architecture",
      ],
      stack: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT", "REST APIs"],
      github: "#",
      vercel: "#",
    },
    {
      title: "Funding Incentives – Rewards Management System",
      emoji: "🎯",
      company: "Gowebez",
      type: "Full-Stack · Work Project",
      overview:
        "A MERN-based web application designed to track user activities and provide rewards based on predefined incentive rules. It helps organizations monitor performance, calculate incentives, and manage reward distribution efficiently.",
      userFeatures: [
        "Secure login and profile management",
        "View earned rewards and incentive details",
        "Track performance and activity progress",
      ],
      adminFeatures: [
        "Define and manage incentive rules",
        "Track user performance and reward distribution",
        "Generate reports and analytics",
      ],
      additional: [
        "Reward calculation logic based on rules",
        "RESTful APIs using Node.js and Express.js",
        "MongoDB for storing incentive and user data",
        "Interactive dashboard using React.js",
        "Responsive UI with modern styling",
      ],
      stack: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Tailwind CSS"],
      github: "#",
      vercel: "#",
    },
  ],
  // experience: [
  //   {
  //     role: "Full Stack Developer",
  //     company: "Yoho Technology",
  //     location: "Chennai",
  //     period: "Mar 2022 – Oct 2025",
  //     duration: "3+ yrs",
  //     responsibilities: [
  //       "Designed, developed, and deployed full-stack web applications using MERN stack.",
  //       "Built dynamic and reusable front-end components with React Hooks, Redux, and Tailwind CSS for responsive UI design.",
  //       "Created and consumed RESTful APIs for seamless data exchange between client and server.",
  //       "Implemented user authentication and authorization using JWT.",
  //       "Performed CRUD operations, schema design, and query optimization in MongoDB.",
  //       "Utilized Git for version control across team projects.",
  //       "Conducted code reviews, unit testing, and debugging using Postman and VS Code Debugger.",
  //     ],
  //   },
  // ],

  // featuredProject: {
  //   title: "Soundsair — Airline Reservation & Management System",
  //   type: "Full-Stack · Featured Project",
  //   overview:
  //     "A full-stack web application designed to simplify flight booking, scheduling, and passenger management for airlines and travelers. Users can search for flights, make reservations, process payments, and view booking history.",
  //   highlights: [
  //     "User registration/login with email verification",
  //     "Flight search by date, route, and class",
  //     "Online ticket booking & payment integration",
  //     "Modify or cancel bookings before departure",
  //     "Admin: manage flights, routes & airplane inventory",
  //     "Admin dashboard with analytics charts",
  //     "JWT-based auth & role-based authorization",
  //     "Deployed on Vercel (frontend) & Render (backend)",
  //   ],
  //   stack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS", "REST APIs", "Vercel", "Render"],
  // },

  projects: [
    {
      title: "Membership Management System",
      desc: "Full-stack app to manage memberships, subscriptions, and member data with CRUD functionality.",
      stack: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/illavarasi1/membership",
      
    },
    {
      title: "E-Commerce Grocery Store",
      desc: "A responsive grocery e-commerce website with product listing, cart management, and checkout flow.",
      stack: ["React", "Redux", "Tailwind CSS"],
      github: "https://github.com/illavarasi1/grocery",
        vercel: "https://grocery-seven-sand.vercel.app/",  
    },
    {
      title: "React CRUD App",
      desc: "Clean CRUD application built with React demonstrating state management and API integration patterns.",
      stack: ["React", "JavaScript", "REST API"],
      github: "https://github.com/illavarasi1/crud-react",
    },
    {
      title: "CRUD with Next.js",
      desc: "Server-side rendered CRUD application using Next.js with API routes and dynamic routing.",
      stack: ["Next.js", "TypeScript", "MongoDB"],
      github: "https://github.com/illavarasi1/next-crud",
    },
      {
      title: "Portfolio Website",
      desc: "A responsive portfolio website showcasing my skills, projects, and experience.",
      stack: ["React", "JavaScript", "Tailwind CSS"],
      github: "https://github.com/illavarasi1/portfolio",
      vercel: "https://new-portfolio-beta-rosy.vercel.app/",
    },
  ],

  education: [
    {
      degree: "M.Sc — Information Technology",
      school: "Prince Shri Venkateshwara Arts & Science College",
      university: "Madras University",
      year: "2015",
    },
    {
      degree: "BCA — Bachelor of Computer Applications",
      school: "Prince Shri Venkateshwara Arts & Science College",
      university: "Madras University",
      year: "2013",
    },
  ],
};
