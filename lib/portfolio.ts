export const site = {
  name: "Savya Vats",
  title: "Savya Vats | Computer Science @ UCLA",
  description: "UCLA Computer Science student working across software engineering, machine learning research, and quantitative problem solving.",
  github: "https://github.com/vatssavvya",
  linkedin: "https://linkedin.com/in/savyavats",
  email: "vatssavvya@ucla.edu",
  resumeUrl: "", // Add /resume.pdf and place the file in public/ to show Resume.
  origin: process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "",
};

export const navigation = [
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Research", id: "research" },
];

export const experiences = [
  {
    "organization": "Bruin Software Engineers",
    "team": "Quantitative Finance Fellowship",
    "role": "Quant Finance Fellow",
    "dates": "Sep 2026 to Present",
    "location": "Los Angeles, CA",
    "current": true,
    "bullets": [
      "Selected for the competitive nine-week Quantitative Finance fellowship from a UCLA-wide applicant pool.",
      "Working on a guided project on trading algorithms and quantitative strategies, with mentorship from industry professionals and BSE alumni.",
      "Attending industry sessions and technical talks with engineers from Google DeepMind, Citadel, and Jane Street."
    ]
  },
  {
    "organization": "Brown University",
    "team": "Radiology AI Lab",
    "role": "Research Assistant",
    "dates": "Aug 2025 to Present",
    "location": "Providence, RI · Remote",
    "current": true,
    "bullets": [
      "Researching AI-assisted breast cancer detection under Dr. Zhicheng Jiao using vision-language models and deep learning.",
      "Fine-tuning and benchmarking MedGemma and 3D Swin Transformers on digital breast tomosynthesis imaging.",
      "Co-authoring an ongoing research paper and mentoring incoming assistants on training pipelines. Research code remains private pending publication clearance."
    ]
  },
  {
    "organization": "Builder Bears",
    "team": "FIRST Robotics Competition · Team 10366",
    "role": "Lead Programmer",
    "dates": "Jun 2024 to Jun 2026",
    "location": "Bergenfield, NJ",
    "current": false,
    "bullets": [
      "Led Java software development for autonomous and driver-operated robot controls.",
      "Guided fellow programmers through coding concepts and code structure.",
      "Worked with mechanical and electrical teammates to integrate hardware and software. The team earned the All-Star Rookie Award and competed at state-level events."
    ]
  },
  {
    "organization": "Fairleigh Dickinson University",
    "team": "Medical Imaging Research",
    "role": "Research Assistant",
    "dates": "Mar 2022 to Jun 2026",
    "location": "Teaneck, NJ · Hybrid",
    "current": false,
    "bullets": [
      "Researched AI-assisted skin cancer detection through deep learning and medical imaging.",
      "Trained and benchmarked EfficientNetV2 and DINOv2 for dermoscopic lesion classification. Presented research at Princeton and Johns Hopkins.",
      "Co-authored four publications, including work on demographic factors in melanoma classification and graph neural networks."
    ]
  }
];

type Project = { title: string; category: string; description: string; tags: string[]; url?: string; demoUrl?: string; featured?: boolean };
export const projects: Project[] = [
  {
    title: "Pokémon VGC Predictor",
    category: "Probabilistic modeling",
    description: "A Python command-line tool for Pokémon VGC closed team sheet matches. Uses usage statistics to estimate opponent movesets, items, and abilities, then compares team matchups and possible four-Pokémon selections.",
    tags: ["Python", "Probabilistic modeling", "Data analysis"],
    url: "https://github.com/vatssavvya/pokemon-vgc-cts-predictor",
    featured: true,
  },
  {
    title: "ClearCare",
    category: "Backend engineering",
    description: "A two-person hackathon project that turns discharge documents into plain-language care plans. My main contribution was backend work with FastAPI and PostgreSQL.",
    tags: ["FastAPI", "PostgreSQL", "Team project"],
    url: "https://github.com/vatssavvya/clearcare",
  },
  {
    title: "AI Research Agent",
    category: "Structured AI software",
    description: "A Python research assistant that searches the web and Wikipedia, organizes findings with Pydantic, and saves summaries and sources to a local text file. Built with LangChain.",
    tags: ["Python", "LangChain", "Pydantic", "Web research"],
    url: "https://github.com/vatssavvya/Self-Learning-AI-Agent",
  },
];

export const research = [
  {
    institution: "Brown University Health",
    title: "Medical imaging & vision-language models",
    description: "Investigating deep-learning and vision-language approaches for breast cancer imaging, with a focus on digital breast tomosynthesis.",
    tags: ["MedGemma", "3D Swin Transformers", "Model evaluation"],
    note: "Paper in progress · Code private pending clearance",
  },
  {
    institution: "Fairleigh Dickinson University",
    title: "Deep learning & CNN research",
    description: "Research on skin cancer detection using deep learning, including EfficientNetV2 and DINOv2 for lesion classification. Co-authored four publications and presented at Princeton and Johns Hopkins.",
    tags: ["CNNs", "Deep learning", "Research pipelines"],
    note: "4 co-authored publications",
  },
];

// Add verified titles and URLs here when ready; cards appear automatically.
export const publications: { title: string; venue: string; year: string; url: string }[] = [];
// Fill this after the fellowship project is complete; its card appears in Projects.
export const bseProject: Project | null = null;

export const skills = [
  { title: "Languages", items: ["Python", "Java", "C", "C++", "JavaScript", "Lua", "HTML", "CSS"] },
  { title: "ML / Data", items: ["PyTorch", "TensorFlow", "Keras", "Pandas", "NumPy", "scikit-learn", "Jupyter"] },
  { title: "Backend / Software", items: ["FastAPI", "PostgreSQL", "Pydantic", "LangChain"] },
  { title: "Focus areas", items: ["Backend systems", "Machine learning", "Computer vision", "Algorithms", "Probabilistic modeling", "Quantitative methods", "Robotics"] },
];

export const currently = [
  "Studying Computer Science at UCLA",
  "Researching deep learning for medical imaging",
  "Exploring quantitative finance through BSE",
  "Building software and quantitative projects",
];
