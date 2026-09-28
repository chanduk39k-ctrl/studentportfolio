export const PERSONAL_INFO = {
  name: "KURUVA CHANDRASEKHAR",
  shortName: "Chandrasekhar",
  title: "B.Tech Computer Science & Engineering (Data Science) Student",
  subTitle: "Aspiring Software Engineer & Data Science Professional",
  objective: "To get placed in an organization to work in a challenging environment where I can utilize my academic skills and knowledge for solving problems and growth along with my organization.",
  email: "chandu.k39k@gmail.com",
  phone: "+91 6303765441",
  location: "Andhra Pradesh, India",
  linkedin: "https://www.linkedin.com/in/kuruva-chandrasekhar/",
  github: "https://github.com", // quick fallback link
  stats: [
    { label: "B.Tech CGPA", value: "7.5", helper: "JNTUA Affiliated" },
    { label: "Intermediate", value: "83%", helper: "MPC Stream" },
    { label: "SSC Board", value: "99%", helper: "Top Percentile" },
    { label: "Model Accuracy", value: "~85%", helper: "Placement ML Model" }
  ]
};

export const EDUCATION_DATA = [
  {
    degree: "B.Tech in Computer Science & Engineering (Data Science)",
    institution: "St. Johns College of Engineering and Technology (JNTUA)",
    location: "Yerrakota, Andhra Pradesh",
    period: "2023 - 2027 (Expected)",
    score: "CGPA: 7.5",
    highlight: "Specializing in Data Science & Intelligent Systems",
    details: [
      "Core coursework in Data Structures, Algorithms, Machine Learning, Database Management, and Object-Oriented Software Design.",
      "Hands-on practical labs in Python data ecosystems, SQL querying, statistical data analysis, and predictive modeling."
    ],
    status: "Currently Pursuing"
  },
  {
    degree: "Intermediate (MPC - Maths, Physics, Chemistry)",
    institution: "Narayana Jr College",
    location: "Yemmiganur, Andhra Pradesh",
    period: "2021 - 2023",
    score: "Score: 83%",
    highlight: "Strong Analytical & Quantitative Foundation",
    details: [
      "Rigorous mastery of mathematics (calculus, probability, matrices), physical sciences, and logical problem-solving.",
      "Developed high computational aptitude pivotal for algorithms and machine learning mathematics."
    ],
    status: "Completed"
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Kasturi School",
    location: "Yemmiganur, Andhra Pradesh",
    period: "2020 - 2021",
    score: "Score: 99%",
    highlight: "Outstanding Academic Merit",
    details: [
      "Exceptional academic record with 99% aggregate score.",
      "Recognized for academic leadership, mathematics proficiency, and scientific inquiry."
    ],
    status: "Completed"
  }
];

export const SKILLS_CATEGORIES = [
  {
    id: "languages",
    name: "Programming Languages",
    skills: [
      { name: "Python", level: 88, icon: "Code", highlight: "Primary language for ML, scripting & data analytics" },
      { name: "SQL", level: 85, icon: "Database", highlight: "Relational queries, aggregations, schema design & joins" },
      { name: "Java", level: 75, icon: "FileCode", highlight: "Object-oriented programming, data structures & core concepts" },
      { name: "HTML / CSS", level: 82, icon: "Layout", highlight: "Responsive web structure, semantic UI & styling" }
    ]
  },
  {
    id: "concepts",
    name: "Core CS & Data Concepts",
    skills: [
      { name: "Object-Oriented Programming (OOPs)", level: 86, icon: "Cpu", highlight: "Encapsulation, Inheritance, Polymorphism, Abstraction" },
      { name: "Data Science Fundamentals", level: 84, icon: "Binary", highlight: "Data cleaning, feature scaling, model training & metrics" },
      { name: "Data Analysis & Engineering", level: 82, icon: "LineChart", highlight: "Exploratory Data Analysis (EDA), ETL pipelines & visualization" }
    ]
  },
  {
    id: "soft",
    name: "Soft Skills & Competencies",
    skills: [
      { name: "Problem Solving", level: 90, icon: "CheckCircle2", highlight: "Algorithmic thinking and breaking down complex challenges" },
      { name: "Analytical Thinking", level: 92, icon: "Compass", highlight: "Data-driven decision making and statistical deductions" },
      { name: "Team Collaboration", level: 85, icon: "Users", highlight: "Cross-functional communication & proactive teamwork" }
    ]
  }
];

export const INTERNSHIPS_DATA = [
  {
    id: "innomatics",
    role: "Computer Vision & Machine Learning Intern",
    company: "Innomatics Research Labs",
    period: "Recent / Practical Experience",
    badge: "OpenCV & Machine Learning",
    focus: "Image Essentials with OpenCV to Machine Learning",
    description: "Gained hands-on experience in image processing workflows, core computer vision fundamentals using OpenCV, and bridging image feature extraction into machine learning models.",
    takeaways: [
      "Image processing workflows and computer vision fundamentals using OpenCV.",
      "Extracting visual features and engineering representations for predictive models.",
      "Bridging image analytics with machine learning classification pipelines."
    ],
    tech: ["Python", "OpenCV", "Computer Vision", "Machine Learning", "NumPy", "Scikit-Learn"]
  },
  {
    id: "skilldzire",
    role: "Data Science & Engineering Intern",
    company: "SkillDzire (in collaboration with APSCHE)",
    period: "April 2026 - June 2026",
    badge: "Upcoming / Confirmed Internship",
    focus: "Data Science & Industrial Data Engineering",
    description: "Comprehensive industry internship program focused on end-to-end Data Science workflows, Data Analysis, and industrial Data Engineering concepts.",
    takeaways: [
      "Engaging with industry-aligned data science pipelines and exploratory data analysis (EDA).",
      "Working with data processing workflows, ETL stages, and feature engineering techniques.",
      "Applying statistical models and learning best practices for deploying data solutions."
    ],
    tech: ["Python", "SQL", "Pandas", "NumPy", "Data Engineering", "Scikit-Learn"]
  }
];

// Maintained for backward compatibility
export const INTERNSHIP_DATA = INTERNSHIPS_DATA[0];


export const PROJECTS_DATA = [
  {
    id: "placement-predictor",
    title: "Student Academic & Placement Prediction System",
    badge: "Featured ML Project",
    category: "Machine Learning & Predictive Analytics",
    accuracy: "~85% Accuracy",
    description: "Trained and evaluated a supervised Machine Learning classification model to predict student placement outcomes with approximately 85% accuracy. Analyzed academic parameters, internship status, backlogs, and project experience to yield actionable placement readiness indicators.",
    highlights: [
      "Preprocessed student historical academic records, handled outliers, and performed feature scaling & normalization.",
      "Trained and tuned classification models (Random Forest, Logistic Regression) evaluated with precision, recall, and ROC-AUC.",
      "Achieved ~85% test validation accuracy, reducing uncertainty in student career placement counselling.",
      "Conducted feature importance analysis highlighting CGPA, project count, and internship experience as primary placement drivers."
    ],
    tech: ["Python", "Machine Learning", "Scikit-Learn", "Data Analysis", "Feature Engineering", "Pandas"]
  },
  {
    id: "eda-analytics",
    title: "Exploratory Data Analysis & Student Performance Profiler",
    badge: "Data Engineering",
    category: "Data Analysis & Visualization",
    accuracy: "100% Data Integrity",
    description: "Architected analytical dashboards and automated data inspection pipelines to evaluate academic metrics, correlation heatmaps, and outlier detection across cohort datasets.",
    highlights: [
      "Conducted multivariate statistical correlation studies across grading criteria.",
      "Designed clean graphical distributions to isolate key performance indicators.",
      "Created structured SQL views and scripts to automate quarterly reporting."
    ],
    tech: ["Python", "SQL", "Matplotlib", "Seaborn", "Statistics"],
    githubUrl: "https://github.com",
    hasSimulator: false
  }
];
