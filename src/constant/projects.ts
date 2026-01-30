export const projectsData = [
  {
    name: "Modelisation Rhino avec IHM en VR",
    description:
      "Plugin/prototype reliant Rhino à Unity pour manipuler et visualiser des modèles 3D en réalité virtuelle via une IHM interactive. — C#, Python, Unity(Unity3D, XR Toolkit), Rhino 8, Websockets.",
    github_link: "https://github.com/RacimZz/Rhino-VR",
    Sujet: "https://drive.google.com/drive/folders/1dvyUFiwMuhgVZudEV7qf73dHN3fY7AeW?usp=drive_link",
    tech: ["C#", "Python", "Unity", "XR Toolkit", "Rhino 8", "Websockets"],
  },
  {
    name: "ChatBot",
    description:
      "Application web de chatbot qui orchestre des appels LLM et gère la configuration via variables d’environnement. — Python, Flask, Google Gemini API, OpenAI Transformers, dotenv.",
    github_link: "https://github.com/RacimZz/Chatbot",
    Sujet: "https://ai.google.dev/gemini-api/docs/models/gemini?hl=fr#gemini-1.5-flash",
    tech: ["Python", "Flask", "Google Gemini API", "OpenAI Transformers", "dotenv"],
  },
  {
    name: "AI-Powered Celebrity Guesser",
    description:
      "Jeu type Akinator qui devine une célébrité en posant des questions et en enrichissant le contexte via des sources en ligne. — Python, Gradio, Wikipedia API, Google Gemini API, dotenv.",
    github_link: "https://github.com/RacimZz/Akinator_IA",
    Sujet: "https://ai.google.dev/gemini-api/docs/models/gemini?hl=fr#gemini-1.5-flash",
    tech: ["Python", "Gradio", "Wikipedia API", "Google Gemini API", "dotenv"],
  },
  {
    name: "Tetravex-SAT Solver",
    description:
      "Solveur de Tetravex en formulant le problème en SAT (CNF) puis en résolvant/visualisant la solution. — OCaml, C, Python, Pygame, DIMACS CNF.",
    github_link: "https://github.com/RacimZz/CNF_SAT",
    Sujet: "https://drive.google.com/file/d/1N2bNN1DUwovy0mzkWGgq-F2EeJnlyB3I/view?usp=drive_link",
    tech: ["OCaml", "C", "Python", "Pygame", "DIMACS CNF"],
  },
  {
    name: "Interpréteur ARM",
    description:
      "Interpréteur d’un sous-ensemble d’instructions ARM basé sur une représentation AST et un pipeline de build automatisé. — C, Assembleur (ARM), AST, Makefile.",
    github_link: "https://github.com/RacimZz/ARM_Interpreter",
    Sujet: "https://developer.arm.com/documentation/101458/2404/Get-started/Arm-C-C---Compiler",
    tech: ["C", "Assembleur", "ARM", "AST", "Makefile"],
  },
  {
    name: "Automate probabiliste de l’électeur (analyse Markovienne + simulations 1D/2D)",
    description:
      "Étude/simulations d’un modèle de vote probabiliste avec analyse markovienne et expériences Monte‑Carlo en 1D/2D. — Python, LaTeX (Beamer), Chaînes de Markov, Automates cellulaires probabilistes, Simulations Monte-Carlo.",
    github_link: "https://github.com/RacimZz/probabilistic-voter-model",
    Sujet: "https://github.com/RacimZz/probabilistic-voter-model/blob/main/sujet-automate.pdf",
    tech: ["Python", "LaTeX", "Beamer", "Chaînes de Markov", "Automates cellulaires probabilistes", "Simulations Monte-Carlo"],
  },
  {
    name: "Classification spectrale non supervisée",
    description:
      "Pipeline de clustering non supervisé de spectres avec exécution sur cluster et automatisation shell. — R, FisherEM, bash, clusters de calculs.",
    github_link: "https://github.com/RacimZz/FisherEM_ML",
    Sujet: "https://drive.google.com/file/d/1MmdLHnPcUQzCMysXC_RngB3rsTBKuE_D/view?usp=drive_link",
    tech: ["R", "FisherEM", "bash", "HPC"],
  },
  {
    name: "GEMINI : une approche neuronale pour le clustering de spectres – Analyse et visualisations",
    description:
      "Expérimentations de clustering neuronal de spectres avec scripts d’analyse, logs JSON et exécution HPC. — Python (Gemclus Package), bash, Json, clusters de calculs.",
    github_link: "https://github.com/RacimZz/Gemclus_DeepLearning",
    Sujet: "https://drive.google.com/file/d/1MmdLHnPcUQzCMysXC_RngB3rsTBKuE_D/view?usp=drive_link",
    tech: ["Python", "Gemclus Package", "bash", "Json", "HPC"],
  },
  {
    name: "Calculatrice en syntaxe infixe – Parser LL(1) avec grammaire attribuée et rattrapage d’erreurs",
    description:
      "Calculatrice qui parse des expressions infixes avec un analyseur LL(1), grammaire attribuée et récupération d’erreurs. — Python, Théorie des Langages, Analyse LL(1), Grammaire Attribuée, Panic-Mode Error Recovery.",
    github_link: "https://github.com/RacimZz/TL",
    Sujet: "https://drive.google.com/file/d/1YtKbj1qFuOmU0uowhAGUkYCdAtuvUzwj/view?usp=drive_link",
    tech: ["Python", "Théorie des Langages", "Analyse LL(1)", "Grammaire Attribuée", "Panic-Mode Error Recovery"],
  },
  {
    name: "Générateur de mots de passe sécurisé",
    description:
      "Outil GUI pour générer des mots de passe robustes avec paramètres de complexité. — Python, Tkinter.",
    github_link: "https://github.com/RacimZz/random_password",
    Sujet: "https://www.mathweb.fr/euclide/2020/12/12/generateur-de-mots-de-passe-en-python/",
    tech: ["Python", "Tkinter"],
  },
  {
    name: "OCaml : Dames chinoises",
    description:
      "Implémentation du jeu de dames chinoises (logique + règles) en OCaml. — OCaml.",
    github_link: "https://github.com/RacimZz/OCAML_project",
    Sujet: "https://drive.google.com/file/d/11N2cGvesSMDWV4-cmkNjecEpGCIk_GKj/view?usp=drive_link",
    tech: ["OCaml"],
  },
  {
    name: "ProjectCOW",
    description:
      "Projet système mêlant C et scripts shell pour automatiser/expérimenter des fonctionnalités bas niveau. — C, Shell.",
    github_link: "https://github.com/RacimZz/ProjectCOW",
    tech: ["C", "Shell"],
  },
  {
    name: "Tours de Hanoie",
    description:
      "Visualisation interactive du problème des tours de Hanoï avec interface graphique. — Python (turtle, Tkinter).",
    github_link: "https://github.com/RacimZz/Hanoie_tower",
    Sujet: "https://drive.google.com/file/d/1QGO5sBPu-g3IbTLPohbZWFjj2jbrtRJ7/view?usp=drive_link",
    tech: ["Python", "turtle", "Tkinter"],
  },
  {
    name: "Transformation et Détection de Contours via Modèles Différentiels",
    description:
      "Traitement d’images : transformations et détection de contours via modèles différentiels et analyse numérique. — Python, NumPy, SciPy, Matplotlib.",
    github_link: "https://github.com/RacimZz/traitement_image",
    Sujet: "https://drive.google.com/drive/folders/1CvVgse207-Avk4UTIHCDsI7BJjbXzEvu?usp=drive_link",
    tech: ["Python", "NumPy", "SciPy", "Matplotlib"],
  },
  {
    name: "Détection de Fraude Documentaire",
    description:
      "Détection d’anomalies/fraudes sur documents par OCR, vision par ordinateur et modèles ML. — Python, OpenCV, Tesseract, scikit-learn, TensorFlow.",
    github_link: "https://github.com/RacimZz/Detection_de_fraude",
    Sujet: "https://sites.google.com/view/aide-python/applications/traitements-et-analyses-dimages",
    tech: ["Python", "OpenCV", "Tesseract", "scikit-learn", "TensorFlow"],
  },
];
