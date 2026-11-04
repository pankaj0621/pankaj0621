export const profile = {
  name: "Pankaj Kumar",
  shortName: "Pankaj",
  headline: "Full-Stack Web Developer",
  roles: ["Frontend Developer", "Freelancer", "Software Engineer in Making"],
  intro:
    "I build modern, responsive web experiences and practical digital products. I am a third-year Computer Science and Engineering student at Dumka Engineering College, with hands-on experience across frontend development, full-stack projects, and freelance work.",
  location: "Jharkhand, India",
  college: "Dumka Engineering College",
  github: "https://github.com/pankaj0621",
  linkedin: "https://www.linkedin.com/in/pankaj-kumar06",
  email: "pankajthakur62175@gmail.com",
  website: "",
  navigation: [
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Skills", href: "#skills" },
    { label: "Recognition", href: "#recognition" },
    { label: "Journey", href: "#journey" },
    { label: "Contact", href: "#contact" },
  ],
  contributionGraph: "https://raw.githubusercontent.com/pankaj0621/pankaj0621/main/contrib-heatmap.svg",
};

export const projects = [
  {
    id: "finsight",
    title: "FinSight",
    subtitle: "AI financial health insights for SMEs",
    description:
      "An Innovathon project exploring how AI can turn business financial data into clearer health signals and useful next steps for small and medium-sized enterprises.",
    status: "Competition project",
    tags: ["React", "Vite", "FastAPI", "Groq LLaMA 3.3"],
    repositoryUrl: "https://github.com/pankaj0621/finsight",
    previewUrl: "https://finsight-brown-mu.vercel.app",
    previewNote: "Preview available; backend displayed offline when checked.",
    number: "01",
    accent: "violet",
  },
  {
    id: "one-toto",
    title: "ONE TOTO",
    subtitle: "A shared ride, made easier to manage",
    description:
      "A campus mobility system coordinating a shared vehicle across college, railway station, and office through ride requests, booking decisions, boarding management, and trip history.",
    status: "Web application",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
    repositoryUrl: "https://github.com/pankaj0621/vibe-1-stackfinity",
    previewUrl: "https://vibe-1-stackfinity.vercel.app/",
    previewNote: "Live preview opens at the sign-in screen.",
    number: "02",
    accent: "cyan",
  },
  {
    id: "annrakshak",
    title: "ANNRAKSHAK / CareSync",
    subtitle: "Food rescue for a more sustainable future",
    description:
      "An AI-powered food redistribution platform connecting donors with people and organisations in need, with donation management, real-time updates, claiming, and location-based discovery.",
    status: "Web application",
    tags: ["React", "Vite", "Tailwind CSS", "Shadcn UI", "Supabase", "PostgreSQL", "React Leaflet"],
    repositoryUrl: "https://github.com/pankaj0621/caresync",
    previewUrl: "https://pankaj0621.github.io/caresync/",
    previewNote: "Live preview opens at the sign-in screen.",
    number: "03",
    accent: "violet",
  },
  {
    id: "helpdesk",
    title: "College Helpdesk Multi-Agent System",
    subtitle: "A multi-agent system for campus questions",
    description:
      "A prototype that routes college helpdesk questions to the right department and uses retrieval-augmented answers grounded in campus information.",
    status: "Prototype",
    tags: ["LangGraph", "ChromaDB", "FastAPI", "RAG"],
    repositoryUrl: "https://github.com/pankaj0621/langgraph-college-helpdesk",
    number: "04",
    accent: "cyan",
  },
  {
    id: "no-run",
    title: "NO RUN",
    subtitle: "A marketplace for renting everyday products",
    description:
      "A multi-category rental marketplace concept for electronics, furniture, appliances, vehicles, and more. Product listings, search, accounts, wishlists, and rental management are planned features.",
    status: "In progress",
    tags: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
    number: "05",
    accent: "violet",
  },
];

export const education = [
  {
    period: "Currently in 3rd year",
    title: "B.Tech in Computer Science and Engineering",
    organisation: "Dumka Engineering College",
    location: "Dumka, Jharkhand",
    description: "Building a strong foundation in software engineering and computer science.",
  },
];

export const experience = [
  {
    period: "Internship",
    title: "Frontend Developer Intern",
    organisation: "Lawazia Tech",
    location: "",
    description: "Internship focused on frontend development and web technologies.",
  },
  {
    period: "Ongoing",
    title: "Freelance & Independent Projects",
    organisation: "Product-focused web development",
    location: "Remote",
    description: "Building responsive websites and interactive applications for independent and real-world projects.",
  },
];

export const skills = [
  { title: "Languages", items: ["C", "Java", "Python", "JavaScript", "TypeScript", "SQL"] },
  { title: "Frontend", items: ["HTML5", "CSS3", "React", "Next.js", "Tailwind CSS", "Bootstrap", "Shadcn UI", "Responsive design", "Component-based UI", "DOM manipulation"] },
  { title: "Backend & APIs", items: ["Node.js", "Express.js", "REST APIs", "Authentication", "CRUD", "API integration"] },
  { title: "Data", items: ["MongoDB", "MySQL", "PostgreSQL", "Supabase", "Firebase"] },
  { title: "Creative UI", items: ["Figma", "Three.js", "GSAP", "Framer Motion", "Spline", "CSS animation"] },
  { title: "Tools & foundations", items: ["Git", "GitHub", "VS Code", "Postman", "Vite", "Vercel", "DSA", "OOP", "DBMS", "Operating Systems", "Computer Networks"] },
  { title: "Product & delivery", items: ["SEO", "Performance optimization", "Web accessibility", "Debugging", "Technical documentation", "Agile development", "Team collaboration"] },
];

export const achievements = [
  {
    kind: "Award",
    title: "4th Rank — BIT Sindri Innovathon 2026",
    detail: "Recognised for the FinSight project at BIT Sindri Innovathon.",
    icon: "trophy",
  },
  {
    kind: "Award",
    title: "Best Performance — National Summer Hackathon 2026",
    detail: "Team DIVINEFINITY received a Best Performance certificate at the SkillStation hackathon.",
    icon: "sparkles",
  },
  {
    kind: "Participation",
    title: "ET AI Hackathon 2.0",
    detail: "Organised by The Economic Times.",
    icon: "orbit",
  },
  {
    kind: "Participation",
    title: "CodeStrike 2026",
    detail: "Official Coding Championship by Bytebattle Global Community.",
    icon: "code",
  },
  {
    kind: "Participation",
    title: "Bharatiya Antariksh Hackathon 2026",
    detail: "Presented by ISRO and powered by Hack2Skill.",
    icon: "orbit",
  },
];

export const certifications = [
  { title: "Web Design & Development — Hindi", organisation: "Skill India Digital Hub (NSDC)", year: "2026" },
  { title: "HTML & CSS Training", organisation: "Excelrs × Lawazia Tech", year: "2025" },
  { title: "Career Guidance Webinar", organisation: "Skill Dunia Edutech", year: "2025" },
];
