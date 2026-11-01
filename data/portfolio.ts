export interface Project {
  title: string;
  category: string;
  badge?: string;
  year: string;
  description: string;
  responsibilities: string[];
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  badge?: string;
  description: string[];
  technologies: string[];
}

export interface SkillItem {
  name: string;
  highlight?: boolean;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: SkillItem[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
}

export interface Language {
  name: string;
  proficiency: string;
}

export const portfolioData = {
  personal: {
    name: "Muhammad Nabeel Aziz",
    title: "Python Django Backend Developer | REST API Developer",
    designation: "Junior Python / Django Backend Developer",
    tagline:
      "Engineering robust backend architectures, scalable RESTful APIs, relational database models, and secure JWT & RBAC access control systems.",
    about:
      "Junior Python / Django Backend Developer with 6 months of professional backend development experience at Nexrupt Technologies. Proven expertise in engineering robust backend architectures and scalable RESTful APIs using Python, Django, and Django REST Framework (DRF). Hands-on experience in relational database development with PostgreSQL, MySQL, and Django ORM, implementing secure JWT authentication, Role-Based Access Control (RBAC), CRUD operations, and core backend business logic. Skilled in designing clean API endpoints, optimizing database queries, and utilizing Postman for systematic API testing and debugging in agile team environments.",
    email: "nabeelaziz742@gmail.com",
    phone: "+92 302 6629455",
    location: "Lahore, Punjab, Pakistan",
    linkedin: "https://www.linkedin.com/in/nabeel-aziz",
    github: "https://github.com/nabeelaziz742",
    cvPath: "/Muhammad-Nabeel-Aziz-Resume.pdf",
    cvFilename: "Muhammad-Nabeel-Aziz-Resume.pdf",
  },

  metrics: [
    { label: "Professional Experience", value: "6 Months", subtext: "Nexrupt Technologies" },
    { label: "Core Framework", value: "Django / DRF", subtext: "RESTful API Engineering" },
    { label: "Databases & ORM", value: "PostgreSQL & MySQL", subtext: "Query & Schema Design" },
    { label: "Security & Access", value: "RBAC & JWT", subtext: "Secure Auth Pipelines" },
  ],

  experiences: [
    {
      role: "Junior Backend Developer",
      company: "Nexrupt Technologies",
      period: "March 2026 – August 2026",
      location: "Lahore, Pakistan",
      type: "Professional Employment",
      badge: "6 Months Professional Experience",
      description: [
        "Developed and maintained backend applications using Python and Django.",
        "Built and integrated RESTful APIs using Django REST Framework (DRF).",
        "Implemented CRUD operations, authentication, authorization, and backend business logic.",
        "Worked with relational databases and Django ORM for data modeling and database operations.",
        "Tested and debugged APIs using Postman and resolved backend issues to improve application reliability.",
        "Used Git and GitHub for version control and collaborative development in agile sprints.",
      ],
      technologies: [
        "Python",
        "Django",
        "Django REST Framework (DRF)",
        "PostgreSQL",
        "Django ORM",
        "Postman",
        "Git",
        "GitHub",
      ],
    },
  ] as Experience[],

  projects: [
    {
      title: "Corona Nissan: Live Dealership Website",
      category: "Automotive · Live Production",
      badge: "LIVE PRODUCTION",
      year: "2026",
      description:
        "Engineered production backend RESTful API endpoints and services supporting live automotive dealership operations and lead capture workflows. Managed relational database queries with Django ORM and PostgreSQL for vehicle inventories and customer inquiries.",
      responsibilities: [
        "Developed backend RESTful API endpoints and backend services supporting live automotive dealership operations and lead capture workflows.",
        "Implemented secure request validation, data serialization, and CRUD-based backend business logic using Django and Django REST Framework.",
        "Managed relational database operations and queries using Django ORM and PostgreSQL to ensure reliable data handling for vehicle inventories and customer inquiries.",
      ],
      tags: ["Python", "Django", "Django REST Framework", "PostgreSQL", "REST APIs", "Django ORM"],
      githubUrl: "https://github.com/nabeelaziz742",
      liveUrl: undefined,
      featured: true,
    },
    {
      title: "ISP Management System",
      category: "Independent Backend Project",
      badge: "Multi-Tenant RBAC",
      year: "2026",
      description:
        "Architected a modular backend platform in Django and Django REST Framework for ISP operations and billing workflows. Implemented organization-level tenant isolation, custom RBAC permissions, and JWT authentication.",
      responsibilities: [
        "Architected a modular backend platform in Django and Django REST Framework for ISP operations and billing workflows.",
        "Implemented organization-level tenant isolation and Role-Based Access Control (RBAC) with custom permission classes to safeguard administrative and customer data.",
        "Developed secure JWT-based authentication and RESTful API endpoints for managing customer lifecycles, service subscriptions, and invoicing workflows.",
        "Modeled relational databases for network infrastructure, inventory, and field-support ticketing using PostgreSQL and Django ORM.",
        "Implemented audit logging and notification services to track system-wide operational events and improve accountability across multi-user environments.",
      ],
      tags: [
        "Python",
        "Django",
        "Django REST Framework",
        "PostgreSQL",
        "JWT Authentication",
        "RBAC",
        "Django ORM",
      ],
      githubUrl: "https://github.com/nabeelaziz742",
      featured: true,
    },
    {
      title: "Restaurant Management System",
      category: "Independent Backend Project",
      badge: "Order & Inventory API",
      year: "2026",
      description:
        "Centralized backend management platform for restaurant order processing, menu management, and real-time inventory tracking. Separated front-of-house operations from administrative workflows via token authentication and role-based permissions.",
      responsibilities: [
        "Developed a centralized backend management platform for restaurant order processing, menu management, and inventory tracking.",
        "Modeled relational database structures for menu categories, menu items, customer accounts, and transactional billing.",
        "Built secure RESTful API endpoints with token authentication and role-based permissions, separating administrative functions from front-of-house staff operations.",
        "Implemented CRUD functionality and backend business logic to streamline order fulfillment, calculate billing totals, and maintain live inventory status.",
      ],
      tags: [
        "Python",
        "Django",
        "Django REST Framework",
        "PostgreSQL",
        "MySQL",
        "REST APIs",
        "Token Auth",
      ],
      githubUrl: "https://github.com/nabeelaziz742",
      featured: true,
    },
    {
      title: "HR Management System (HR Portal)",
      category: "Independent Backend Project",
      badge: "Role-Based HR Portal",
      year: "2026",
      description:
        "Role-based HR management portal in Django separating administrative oversight from employee self-service capabilities. Implemented custom authorization logic and access-control middleware using Django's permission framework.",
      responsibilities: [
        "Built a role-based human resource management portal in Django to separate administrative oversight from employee self-service capabilities.",
        "Implemented custom authorization logic and access-control middleware using Django's permission framework to enforce data visibility rules.",
        "Modeled relational database structures for departments, employee records, and access permissions, ensuring referential integrity via Django ORM.",
        "Developed secure administrative functionality and views while restricting employees to viewing and updating their authorized personal data.",
      ],
      tags: [
        "Python",
        "Django",
        "Django ORM",
        "PostgreSQL",
        "SQLite",
        "Session Authentication",
        "RBAC",
      ],
      githubUrl: "https://github.com/nabeelaziz742",
      featured: true,
    },
  ] as Project[],

  skills: [
    {
      category: "Programming Languages",
      description: "Core languages for backend logic and relational querying",
      skills: [
        { name: "Python", highlight: true },
        { name: "SQL", highlight: true },
      ],
    },
    {
      category: "Backend Frameworks",
      description: "Frameworks for enterprise applications and microservices",
      skills: [
        { name: "Django", highlight: true },
        { name: "Django REST Framework (DRF)", highlight: true },
        { name: "FastAPI", highlight: false },
      ],
    },
    {
      category: "Databases & ORM",
      description: "Data modeling, migrations, and query optimization",
      skills: [
        { name: "PostgreSQL", highlight: true },
        { name: "MySQL", highlight: true },
        { name: "SQLite", highlight: false },
        { name: "Django ORM", highlight: true },
      ],
    },
    {
      category: "API Development",
      description: "Clean endpoint architecture, serialization & validation",
      skills: [
        { name: "RESTful APIs", highlight: true },
        { name: "JWT Authentication", highlight: true },
        { name: "API Endpoints Design", highlight: true },
        { name: "Request Validation", highlight: false },
        { name: "Data Serialization", highlight: false },
      ],
    },
    {
      category: "Authentication & Security",
      description: "Identity management, access control and protection",
      skills: [
        { name: "Role-Based Access Control (RBAC)", highlight: true },
        { name: "JWT Token Auth", highlight: true },
        { name: "Session Authentication", highlight: false },
        { name: "Custom Permission Classes", highlight: true },
        { name: "Access-Control Middleware", highlight: false },
      ],
    },
    {
      category: "Development Tools & Platforms",
      description: "Tooling for testing, version control, and deployment",
      skills: [
        { name: "Git", highlight: true },
        { name: "GitHub", highlight: true },
        { name: "Postman", highlight: true },
        { name: "Visual Studio Code", highlight: false },
        { name: "PythonAnywhere", highlight: false },
      ],
    },
    {
      category: "Frontend Technologies",
      description: "Modern frontend integration for full-stack collaboration",
      skills: [
        { name: "Next.js", highlight: true },
        { name: "HTML5 & CSS3", highlight: false },
        { name: "Tailwind CSS", highlight: false },
        { name: "TypeScript", highlight: false },
      ],
    },
    {
      category: "Core Backend Concepts",
      description: "Architectural foundations and best practices",
      skills: [
        { name: "OOP (Object-Oriented Programming)", highlight: true },
        { name: "CRUD Operations", highlight: true },
        { name: "Multi-Tenant Architecture", highlight: true },
        { name: "Database Modeling", highlight: true },
        { name: "Query Optimization", highlight: true },
        { name: "System Debugging", highlight: false },
      ],
    },
  ] as SkillCategory[],

  education: {
    degree: "Bachelor of Business & Information Technology",
    institution: "Virtual University of Pakistan",
    location: "Lahore, Pakistan",
    period: "2023 – Present",
  } as Education,

  languages: [
    { name: "English", proficiency: "Professional Working Proficiency" },
    { name: "Urdu", proficiency: "Native / Proficient" },
  ] as Language[],
};