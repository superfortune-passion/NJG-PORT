export const profile = {
  name: "Norman John Gutierrez",
  title:
    "Senior Full Stack Engineer | SaaS & ERP | Finance | Health Care | Cloud | AI-Integrated Systems",
  email: "normanjg1997@gmail.com",
  whatsapp: {
    display: "+63 947 889 9271",
    e164: "639478899271",
    href: "https://wa.me/639478899271",
  },
  location: "City of Cuenca, Batangas, PH",
  linkedin: "https://www.linkedin.com/in/norman-gutierrez-9a4067407/",
};

export const typingSkills = [
  "LLMs",
  "AI Agents",
  "OpenAI API",
  "AI Workflows",
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "AWS",
  "PostgreSQL",
];

export const summary = `Senior Full Stack Engineer with 9+ years of experience building SaaS platforms, enterprise applications, healthcare systems, and cloud-based products. Experience includes customer-facing platforms, operational dashboards, internal tools, and workflow systems used across finance, healthcare, cloud security, and SaaS environments.

Focused on scalable application development, platform reliability, and long-term system maintainability. Worked closely with engineering, product, and operational teams throughout feature delivery, platform enhancements, and day-to-day software development activities.`;

export type Experience = {
  company: string;
  role: string;
  duration: string;
  location: string;
  highlights: string[];
  tags: string[];
  screenshot: string;
  screenshotAlt: string;
  platformLabel: string;
};

export const experience: Experience[] = [
  {
    company: "Wherefour",
    role: "Senior Full Stack Engineer — SaaS & ERP Platforms",
    duration: "03/2025 – Present",
    location: "US",
    highlights: [
      "Enhanced SaaS applications for inventory tracking, production workflows, and operational reporting across manufacturing teams.",
      "Built AI-native product capabilities within manufacturing SaaS and ERP workflows, including intelligent reporting and production-oriented assistance features.",
      "Built internal features for reporting visibility, workflow automation, and operational management.",
      "Integrated LLM-backed services and agent-style automation into operational tools, connecting model outputs with inventory, production, and reporting systems.",
      "Streamlined backend processing and reporting to improve platform stability across high-usage workflows.",
      "Delivered enterprise integrations connecting internal services with external operational and reporting systems.",
    ],
    tags: ["SaaS", "ERP", "AI-Native Products", "LLMs & AI Agents", "Workflow Automation", "Integrations"],
    screenshot: "/companies/wherefour.png",
    screenshotAlt: "Wherefour production control and inventory SaaS platform",
    platformLabel: "Manufacturing SaaS, ERP & AI",
  },
  {
    company: "Cera",
    role: "Senior Full Stack Engineer — Healthcare SaaS Platforms",
    duration: "07/2023 – 02/2025",
    location: "UK",
    highlights: [
      "Led healthcare platform initiatives for care coordination, scheduling, reporting, and patient service operations.",
      "Delivered AI-native healthcare application features for care coordination and scheduling, embedding intelligent assistance into day-to-day operational workflows.",
      "Shipped workflow automation and operational visibility features for healthcare coordination.",
      "Drove modernization for long-term stability, maintainability, and scalability.",
      "Improved reliability of high-usage reporting and coordination workflows through backend refinements.",
      "Integrated LLM and AI agent patterns into platform services—supporting automated coordination, workflow guidance, and AI-assisted reporting across care operations.",
      "Connected external operational services and healthcare systems through platform integrations.",
    ],
    tags: ["Healthcare SaaS", "AI-Native Products", "LLMs & AI Agents", "Scheduling", "Workflow Automation", "Integrations"],
    screenshot: "/companies/cera.png",
    screenshotAlt: "Cera healthcare technology and AI-powered care platform",
    platformLabel: "Healthcare SaaS & AI",
  },
  {
    company: "Teladoc Health",
    role: "Full Stack Engineer — Digital Healthcare Platforms",
    duration: "01/2022 – 06/2023",
    location: "US",
    highlights: [
      "Supported virtual healthcare platforms for patient engagement, scheduling, and operational coordination.",
      "Refined customer-facing applications and internal tools with engineering and product teams.",
      "Delivered reporting visibility and healthcare workflow management features.",
      "Supported AI-integrated virtual care and patient-engagement features within digital health platforms, aligning product flows with intelligent assistance capabilities.",
      "Reduced operational friction through workflow automation in reporting and service management.",
      "Built backend services and integration flows between internal systems and external healthcare platforms.",
      "Integrated LLM-powered workflows and API connections between internal healthcare services and AI-assisted capabilities used in scheduling and service coordination.",
    ],
    tags: ["Digital Health", "AI-Integrated Systems", "LLMs", "Patient Engagement", "REST APIs"],
    screenshot: "/companies/teladoc.png",
    screenshotAlt: "Teladoc Health virtual care and patient engagement platform",
    platformLabel: "Digital Healthcare & AI",
  },
  {
    company: "Trend Micro",
    role: "Full Stack Engineer — Cloud Security Platforms",
    duration: "09/2019 – 12/2021",
    location: "Taiwan",
    highlights: [
      "Maintained enterprise cloud platforms for monitoring, reporting, and security-related coordination.",
      "Updated web-based operational systems for internal teams and business users.",
      "Focused on scalability and reliability during platform enhancement and modernization efforts.",
      "Coordinated delivery with senior engineers and operational stakeholders.",
      "Handled production support: troubleshooting, monitoring, and resolving workflow disruptions.",
      "Refined development processes and reporting workflows for release coordination.",
      "Connected cloud services with enterprise operational systems across business functions.",
    ],
    tags: ["Cloud Security", "Enterprise", "Monitoring", "Scalability"],
    screenshot: "/companies/trend-micro.png",
    screenshotAlt: "Trend Micro enterprise cloud security platform",
    platformLabel: "Cloud Security",
  },
  {
    company: "Cathay Financial Holdings",
    role: "Software Engineer — Digital Banking Platforms",
    duration: "04/2017 – 08/2019",
    location: "Taiwan",
    highlights: [
      "Developed digital banking applications for customer operations, reporting, and internal financial processes.",
      "Coordinated business requirements with senior engineers and internal stakeholders.",
      "Enhanced backend services for reporting operations, workflow stability, and platform reliability.",
      "Investigated production issues affecting customer-facing banking systems.",
      "Followed structured enterprise practices for testing, release preparation, and operational support.",
      "Modernized systems to improve usability and streamline operational workflows.",
    ],
    tags: ["FinTech", "Digital Banking", "Enterprise SDLC", "Reporting"],
    screenshot: "/companies/cathay.png",
    screenshotAlt: "Cathay Financial Holdings digital banking and FinTech platform",
    platformLabel: "Digital Banking & FinTech",
  },
];

export type Skill = { name: string; level: number };

export type SkillGroup = {
  label: string;
  skills: Skill[];
};

export type SkillCategory = {
  name: string;
  featured?: boolean;
  skills?: Skill[];
  groups?: SkillGroup[];
};

export const skillCategories: SkillCategory[] = [
  {
    name: "AI & Intelligent Systems",
    featured: true,
    groups: [
      {
        label: "LLM / AI Integration",
        skills: [
          { name: "OpenAI, Hugging Face & model APIs", level: 88 },
          { name: "Chatbots, agents & embedded AI workflows", level: 87 },
        ],
      },
      {
        label: "Data & Pipelines",
        skills: [{ name: "Data prep & pipelines for AI", level: 86 }],
      },
      {
        label: "AI Backend",
        skills: [
          { name: "Microservices & serverless for models", level: 87 },
          { name: "Scalable low-latency inference", level: 85 },
        ],
      },
      {
        label: "AI Frontend",
        skills: [
          { name: "Real-time AI UIs & streaming", level: 88 },
          { name: "Interactive agents & predictive UX", level: 86 },
        ],
      },
      {
        label: "MLOps",
        skills: [{ name: "Deploy, monitor & version models", level: 84 }],
      },
      {
        label: "Product & AI",
        skills: [{ name: "AI product sense & workflow design", level: 90 }],
      },
    ],
  },
  {
    name: "Frontend",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 92 },
      { name: "TypeScript", level: 94 },
      { name: "JavaScript", level: 95 },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js / Express", level: 92 },
      { name: "Python", level: 85 },
      { name: "REST APIs", level: 94 },
      { name: "PostgreSQL / MongoDB", level: 90 },
    ],
  },
  {
    name: "Cloud",
    skills: [
      { name: "AWS", level: 88 },
      { name: "Cloud Infrastructure", level: 87 },
      { name: "Platform Integrations", level: 90 },
      { name: "SaaS Platforms", level: 93 },
    ],
  },
  {
    name: "DevOps",
    skills: [
      { name: "Docker", level: 88 },
      { name: "CI/CD", level: 90 },
      { name: "Git", level: 94 },
      { name: "System Reliability", level: 91 },
    ],
  },
];

export const education = {
  degree: "Bachelor of Science in Computer Science",
  school: "National Taiwan University of Science and Technology",
  duration: "04/2013 – 03/2017",
  image: "/education/ntust.png",
  imageAlt: "National Taiwan University of Science and Technology campus entrance",
};

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];
