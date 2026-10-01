export const site = {
  name: "Savya Vats",
  title: "Savya Vats | Computer Science @ UCLA",
  description: "UCLA Computer Science student working across software engineering, machine learning research, and quantitative problem solving.",
  github: "https://github.com/vatssavvya",
  linkedin: "https://linkedin.com/in/savyavats",
  email: "", // Add your email to show a contact link in the footer.
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
    organization: "Brown University Health",
    team: "Radiology AI Lab",
    role: "Research Assistant",
    dates: "Aug 2025 to Present",
    location: "Remote",
    current: true,
    bullets: [
      "Researching vision-language models and deep learning for breast cancer digital breast tomosynthesis imaging.",
      "Fine-tuning, evaluating, and benchmarking architectures including MedGemma and 3D Swin Transformers.",
      "Co-authoring an ongoing research paper; code remains private pending publication clearance.",
    ],
  },
  {
    organization: "Bruin Software Engineers",
    team: "Quantitative Finance Fellowship",
    role: "Fellow",
    dates: "Fall 2026 to Present",
    location: "UCLA",
    current: true,
    bullets: [
      "Accepted into the selective Fall 2026 fellowship in the Quantitative Finance track.",
      "The fellowship includes technical projects, industry sessions, and recruiting preparation.",
    ],
  },
  {
    organization: "Fairleigh Dickinson University",
    team: "Deep Learning Research",
    role: "Research Assistant",
    dates: "Mar 2022 to Jun 2026",
    location: "Hybrid",
    current: false,
    bullets: [
      "Worked on CNN and deep-learning research pipelines over several years.",
      "Co-authored four publications and presented research at events including Princeton and Johns Hopkins.",
    ],
  },
  {
    organization: "Builder Bears / FIRST Robotics",
    team: "Team 10366",
    role: "Lead Programmer",
    dates: "Jun 2024 to Jun 2026",
    location: "",
    current: false,
    bullets: [
      "Led robot software development, primarily in Java.",
      "Built software for real robotic systems in collaboration with an engineering team.",
    ],
  },
];

type Project = { title: string; category: string; description: string; tags: string[]; url?: string; demoUrl?: string; featured?: boolean };
export const projects: Project[] = [
  {
    title: "Pokémon VGC Predictor",
    category: "Probabilistic modeling",
    description: "A project exploring Bayesian inference and probabilistic modeling to predict competitive Pokémon VGC outcomes.",
    tags: ["Bayesian inference", "Probabilistic modeling", "Data analysis"],
    url: "https://github.com/vatssavvya/pokemon-vgc-cts-predictor",
    featured: true,
  },
  {
    title: "ClearCare",
    category: "Backend engineering",
    description: "Built with a teammate at a hackathon. My main contribution was backend work with FastAPI and PostgreSQL.",
    tags: ["FastAPI", "PostgreSQL", "Team project"],
    url: "https://github.com/vatssavvya/clearcare",
  },
  {
    title: "AI Research Agent",
    category: "Structured AI software",
    description: "An agent that searches the web and organizes its findings. Uses LangChain for the agent and Pydantic for structured output.",
    tags: ["LangChain", "Pydantic", "Web research"],
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
    description: "Several years of research on CNN and deep-learning pipelines, resulting in four co-authored publications and presentations at events including Princeton and Johns Hopkins.",
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
