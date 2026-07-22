export interface Project {
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  category: "Full-Stack" | "Backend" | "AI & Chatbot";
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level: number; icon?: string }[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
}

export const portfolioData = {
  personal: {
    name: "Muhammad Nabeel Aziz",
    title: "Junior Backend Developer | Python & Django Developer",
    tagline: "Building robust RESTful APIs, secure authentication systems, and scalable backend architectures.",
    about:
      "Python and Django developer with hands-on experience building RESTful APIs and full-stack web applications. Proficient in Django, Django REST Framework, and FastAPI, with ORM-based database experience using PostgreSQL and SQLite. Skilled in building authentication systems, role-based access control, and CRUD applications, with deployment experience on PythonAnywhere and version control via Git/GitHub. Detail-oriented and focused on writing clean, maintainable, scalable backend code.",
    email: "nabeelaziz742@gmail.com",
    github: "https://github.com/nabeelaziz742",
    linkedin: "https://www.linkedin.com/in/nabeel-aziz/",
    location: "Lahore, Pakistan",
    phone: "+92-302-6629455",
  },
  
  experiences: [
    {
      role: "Junior Backend Developer",
      company: "Independent Self-Directed Projects",
      period: "Oct 2025 — Present",
      location: "Lahore, Pakistan",
      description: [
        "Designed and developed backend web applications and RESTful APIs using Django, Django REST Framework, and FastAPI across multiple independent projects.",
        "Modeled and managed relational databases using PostgreSQL and SQLite, leveraging Django ORM for efficient, secure data handling.",
        "Implemented user authentication, authorization, and role-based access control to secure application endpoints and protect user data.",
        "Built and tested CRUD-based features and API endpoints, ensuring reliable request handling and data integrity.",
        "Deployed and maintained live applications on PythonAnywhere, managing environment configuration and troubleshooting production issues.",
        "Used Git and GitHub for version control, maintaining organized commit history and project documentation."
      ],
      technologies: ["Python", "Django", "Django REST Framework", "FastAPI", "PostgreSQL", "SQLite", "PythonAnywhere", "Git", "GitHub"]
    }
  ] as Experience[],

  projects: [
    {
      title: "HR Portal - Role-Based Access Control System",
      description: "Built a role-based HR management system in Django supporting distinct admin and employee permission levels with secure access control logic.",
      tags: ["Django", "Django ORM", "Authentication", "RBAC"],
      githubUrl: "https://github.com/nabeelaziz742",
      featured: true,
      category: "Full-Stack"
    },
    {
      title: "Python Q&A ChatBot",
      description: "Developed a domain-specific chatbot in Python to answer Python programming-related queries with response filtering logic.",
      tags: ["Python", "Rule-Based NLP", "ChatBot"],
      githubUrl: "https://github.com/nabeelaziz742",
      featured: true,
      category: "AI & Chatbot"
    },
    {
      title: "Todo App with User Authentication",
      description: "Built a full-stack task management application with secure user registration and login, allowing full CRUD operations tied to user accounts.",
      tags: ["Django", "Django ORM", "Authentication", "CRUD"],
      githubUrl: "https://github.com/nabeelaziz742",
      featured: true,
      category: "Backend"
    },
    {
      title: "Blog Posting System",
      description: "Developed a full CRUD blogging platform enabling users to create, edit, and manage posts with structured Django models and views.",
      tags: ["Django", "Django ORM", "CRUD"],
      githubUrl: "https://github.com/nabeelaziz742",
      featured: true,
      category: "Backend"
    }
  ] as Project[],

  skills: [
    {
      category: "Languages & Frameworks",
      skills: [
        { name: "Python", level: 92 },
        { name: "Django", level: 90 },
        { name: "Django REST Framework (DRF)", level: 88 },
        { name: "FastAPI", level: 82 },
      ],
    },
    {
      category: "Databases & Architecture",
      skills: [
        { name: "PostgreSQL", level: 82 },
        { name: "SQLite", level: 88 },
        { name: "Django ORM", level: 90 },
        { name: "MVC / MVT Architecture", level: 85 },
      ],
    },
    {
      category: "API & Tools",
      skills: [
        { name: "RESTful API Design", level: 90 },
        { name: "RBAC & Authentication", level: 88 },
        { name: "Git & GitHub", level: 85 },
        { name: "PythonAnywhere", level: 80 },
        { name: "Postman", level: 85 },
      ],
    },
  ] as SkillCategory[],

  certifications: [
    {
      title: "Python Essentials 1",
      issuer: "Cisco Networking Academy / Python Institute",
      date: "April 2026"
    }
  ] as Certification[],

  education: {
    degree: "Bachelor of Business & Information Technology",
    institution: "Virtual University of Pakistan",
    location: "Lahore, Pakistan",
    period: "2023 — Present"
  }
};