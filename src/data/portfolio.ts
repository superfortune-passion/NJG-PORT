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
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "AWS",
  "Docker",
  "CI/CD",
  "PostgreSQL",
  "Python",
  "SaaS Platforms",
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
};

export const experience: Experience[] = [
  {
    company: "Wherefour",
    role: "Senior Full Stack Engineer — SaaS & ERP Platforms",
    duration: "03/2025 – Present",
    location: "US",
    highlights: [
      "Enhanced SaaS applications for inventory tracking, production workflows, and operational reporting across manufacturing teams.",
      "Refined customer-facing workflows to simplify internal coordination and reduce delays in day-to-day operations.",
      "Built internal features for reporting visibility, workflow automation, and operational management.",
      "Coordinated with stakeholders, operational teams, and release management during product planning.",
      "Streamlined backend processing and reporting to improve platform stability across high-usage workflows.",
      "Delivered enterprise integrations connecting internal services with external operational and reporting systems.",
    ],
    tags: ["SaaS", "ERP", "Workflow Automation", "Integrations", "Reporting"],
  },
  {
    company: "Cera",
    role: "Senior Full Stack Engineer — Healthcare SaaS Platforms",
    duration: "07/2023 – 02/2025",
    location: "UK",
    highlights: [
      "Led healthcare platform initiatives for care coordination, scheduling, reporting, and patient service operations.",
      "Collaborated with analysts, product managers, and operational stakeholders to improve platform usability.",
      "Shipped workflow automation and operational visibility features for healthcare coordination.",
      "Drove modernization for long-term stability, maintainability, and scalability.",
      "Improved reliability of high-usage reporting and coordination workflows through backend refinements.",
      "Coordinated feature rollout, testing, and release planning with remote engineering and QA teams.",
      "Connected external operational services and healthcare systems through platform integrations.",
    ],
    tags: ["Healthcare SaaS", "Scheduling", "Workflow Automation", "Integrations"],
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
      "Improved application responsiveness and reliability across platform enhancements.",
      "Reduced operational friction through workflow automation in reporting and service management.",
      "Built backend services and integration flows between internal systems and external healthcare platforms.",
      "Monitored production issues and releases to maintain stable performance during deployment cycles.",
    ],
    tags: ["Digital Health", "Patient Engagement", "REST APIs", "Production Support"],
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
  },
];

export const skillCategories = [
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
};

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];
