const names = [
  "Racim Zenati",
  "Racim Zenati Portfolio",
];

const roles = [
  "AI Engineer",
  "Machine Learning Engineer",
  "Deep Learning Engineer",
  "Research Intern",
  "ENSIMAG Student",
  "Software Engineer",
];

const skills = [
  // Languages
  "Python",
  "C",
  "C++",
  "C#",
  "OCaml",
  "Go",
  "Kotlin",
  "R",
  "Bash",
  "SQL",
  // AI & Machine Learning
  "Machine Learning",
  "Deep Learning",
  "Neural Networks",
  "PyTorch",
  "TensorFlow",
  "Scikit-learn",
  "NumPy",
  "Pandas",
  "NLP",
  "Computer Vision",
  // Systems & Low-level
  "ARM Assembly",
  "SAT Solvers",
  "Embedded Systems",
  // Data & Research
  "Data Analysis",
  "Unsupervised Classification",
  "Statistical Modeling",
  "Scientific Computing",
  "High Performance Computing",
  // XR & 3D
  "Unity3D",
  "XR Toolkit",
  "Virtual Reality",
  "Augmented Reality",
  "Rhino 8",
  // Tools
  "Git",
  "Linux",
  "Qt",
  "LaTeX",
];

const projects = [
  "Racim Zenati Portfolio",
  "Racim Zenati AI Projects",
  "Galaxy Spectra Classification",
  "Fisher-EM Clustering",
  "VR Modeling Plugin",
  "Augmented Reality Medical Device",
  "Password Spraying Detection",
  "Tetravex SAT Solver",
];

const locations = [
  "Grenoble",
  "France",
];

const longTail = [
  "Racim Zenati AI Engineer Portfolio",
  "Racim Zenati ENSIMAG Student",
  "Racim Zenati Machine Learning",
  "Double Degree Engineering and MSc in AI",
  "AI Research Internship Grenoble",
];

export const Keywords = [
  ...names,
  ...roles,
  ...skills,
  ...projects,
  ...locations,
  ...longTail,
  ...roles.map((role) => `${role} Grenoble`),
];