const names = [
  "Racim Zenati",
  "Racim Zenati Portfolio",
];

const roles = [
  "AI Engineer",
  "Machine Learning Engineer",
  "Deep Learning Engineer",
  "AI Apprentice",
  "ENSIMAG Student",
  "Software Engineer",
];

const skills = [
  // Languages
  "Python",
  "C",
  "C++",
  "OCaml",
  "Bash",
  "SQL",

  // AI & Machine Learning
  "Machine Learning",
  "Deep Learning",
  "Neural Networks",
  "PyTorch",
  "TensorFlow",
  "Keras",
  "Scikit-learn",
  "NumPy",
  "Pandas",
  "NLP",
  "LLM Integration",

  // Systems & Low-level
  "ARM Assembly",
  "RISC-V",
  "SAT Solvers",

  // Data
  "Data Analysis",
  "Unsupervised Classification",
  "Statistical Modeling",

  // XR & 3D
  "Unity3D",
  "XR Toolkit",
  "Virtual Reality",
  "Augmented Reality",
  "Rhino 8",

  // Tools
  "Git",
  "Linux",
];

const projects = [
  "Racim Zenati Portfolio",
  "Racim Zenati AI Projects",
  "Galaxy Spectra Classification",
  "VR Modeling Plugin",
  "Augmented Reality Medical Device",
  "Akinator AI",
  "Password Spraying Detection",
];

const locations = [
  "Grenoble",
  "France",
];

const longTail = [
  "Racim Zenati AI Engineer Portfolio",
  "Racim Zenati ENSIMAG Student",
  "Racim Zenati Machine Learning Apprentice",
  "AI Engineering Apprentice Grenoble",
];
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
