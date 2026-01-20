const names = [
  "Racim Zenati",
  "Racim Zenati Portfolio",
  "Racim Zenati KIIT",
  "Racim Zenati Bhubaneswar",
];

const roles = [
  "IA Developer",
  "Deep learning Engineer",
  "ensimag student"
];

const skills = [
  // Database & Backend
  "PostgreSQL",
  "Supabase",
  "MongoDB",
  "Prisma ORM",
  "GraphQL",
  "REST API",
  "Serverless Functions",
  "Edge Runtime",

  // AI & Systems
  "Machine Learning",
  "LLM Integration",
  "Ollama",
  "RAG Pipelines",
  "LangChain",
  "Vector Databases",
  "C++ Optimization",
  "Python Automation",
  "Docker",
  "Kubernetes",
  "CI/CD Pipelines",
  "Git & GitHub"
];

const projects = [
  "CppTestGenAI",
  "Orphia Music Generator",
  "Algo Visualizer Next.js",
  "Sorting Algorithm Visualizer",
  "Portfolio Website Next.js",
  "AI Powered Application"
];

const locations = [
  "Grenoble",
  "France",
  "Remote",
  "Worldwide"
];

const longTail = [
  "Racim Zenati IA Developer Portfolio",
  "Racim Zenati Deep learning Engineer Resume",
  "Hire Racim Zenati ensimag student",
  "Racim Zenati Machine Learning Developer",
  "Racim Zenati Ensimag student in Grenoble",];

export const Keywords = [
  ...names,
  ...roles,
  ...skills,
  ...projects,
  ...locations,
  ...longTail,

  ...roles.flatMap((role) => locations.map((loc) => `${role} in ${loc}`)),
  ...skills.map((skill) => `${skill} Developer`),
  ...skills.map((skill) => `${skill} Expert`),
  ...skills.map((skill) => `Hire ${skill} Developer`),
];
