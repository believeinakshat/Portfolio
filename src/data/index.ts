import { Experience, Project, Skill, EducationItem, NavLink } from '../types';
import {
  BrainCircuit, Code2, Database, Wrench,
  GitBranch, TerminalSquare, Eye, MessageSquare
} from 'lucide-react';

export const navLinks: NavLink[] = [
  { id: 'home', title: 'Home', path: '#home' },
  { id: 'about', title: 'About', path: '#about' },
  { id: 'skills', title: 'Skills', path: '#skills' },
  { id: 'experience', title: 'Experience', path: '#experience' },
  { id: 'projects', title: 'Projects', path: '#projects' },
  { id: 'contact', title: 'Contact', path: '#contact' },
];

export const experiences: Experience[] = [
  {
    id: 1,
    position: 'AI/ML Engineer',
    company: 'WonderLand',
    duration: 'Aug 2024 - Jul 2025',
    description: [
      'Developed dashboards and automated reporting tools for data analysis',
    ],
    technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-learn'],
  },
  {
    id: 2,
    position: 'Python Intern',
    company: 'Techgyan Technologies',
    duration: 'May 2024 - July 2024',
    description: [
      'Enhanced analytical capabilities by developing to data-driven projects',
    ],
    technologies: ['Python', 'Pandas', 'NumPy', 'Jupyter'],
  },
  {
    id: 3,
    position: 'Data Science Intern',
    company: 'Cosmic AI',
    duration: 'Nov 2023 - Apr 2024',
    description: [
      'Leveraged Python to analyze web traffic data and behavioral patterns, driving optimization strategies through A/B testing that boosted user retention and engagement.',
    ],
    technologies: ['Python', 'Pandas', 'Numpy', 'Mathematics', 'Scikit-learn', 'Jupyter'],
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'Automated Incident Response System(AIRS)',
    description: [
      'Built a cybersecurity threat detection engine using Random Forest.',
      'Integrated dashboards and real-time mitigation tools.'],
    technologies: ['Python', 'TensorFlow', 'NumPy', 'Optuna', 'Smote', 'Jupyter', 'Scikit-learn'],
    image: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    github: 'https://github.com/believeinakshat/AIRS',
  },
  {
    id: 2,
    title: 'NasDock-Stock Prediction System',
    description: [
      'Designed LSTM-based model to forecast stock market trends using real-time data.',
      'Built user interface with Tkinter and visualizations using Dash.'],
    technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Tkinter'],
    image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    github: 'https://github.com/believeinakshat/Nasdock',
  },
  {
    id: 3,
    title: 'HealthWise',
    description: [
      'Built a GUI-based disease prediction tool using Decision Trees and Random Forest.',
      'Delivered real-time health insights based on user-selected symptoms.'
    ],
    technologies: ['Python', 'Pandas', 'NumPy', 'TensorFlow', 'React'],
    image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    github: 'https://github.com/believeinakshat/healthWise',
  },
  {
    id: 4,
    title: 'AxCrypt-Secure File Encryption Tool',
    description: [
      'Implemented AES encryption in a Python GUI-based application for secure file storage.',
      'Focused on ease of use and strong cryptographic handling.'],
    technologies: ['Python', 'Scikit-learn', 'Plotly', 'Streamlit', 'Pandas'],
    image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    github: 'https://github.com/believeinakshat',
  },
];

export const skills: Skill[] = [
  {
    id: 1,
    name: 'Machine Learning Libraries',
    icon: 'BrainCircuit',
    category: 'AI/ML',
    level: 5,
  },
  {
    id: 2,
    name: 'Deep Learning',
    icon: 'BrainCircuit',
    category: 'AI/ML',
    level: 5,
  },
  {
    id: 3,
    name: 'Computer Vision',
    icon: 'Eye',
    category: 'AI/ML',
    level: 4,
  },
  {
    id: 4,
    name: 'Natural Language Processing',
    icon: 'MessageSquare',
    category: 'AI/ML',
    level: 4,
  },
  {
    id: 5,
    name: 'Neural Networks',
    icon: 'BrainCircuit',
    category: 'AI/ML',
    level: 5,
  },
  {
    id: 6,
    name: 'Python',
    icon: 'Code2',
    category: 'Programming',
    level: 5,
  },
  {
    id: 7,
    name: 'TensorFlow/PyTorch',
    icon: 'BrainCircuit',
    category: 'AI/ML',
    level: 5,
  },
  {
    id: 8,
    name: 'JavaScript/TypeScript',
    icon: 'Code2',
    category: 'Programming',
    level: 4,
  },
  {
    id: 10,
    name: 'SQL',
    icon: 'Database',
    category: 'Tools',
    level: 4,
  },
  {
    id: 11,
    name: 'Git',
    icon: 'GitBranch',
    category: 'Tools',
    level: 5,
  },
  {
    id: 12,
    name: 'Jupyter Notebooks',
    icon: 'TerminalSquare',
    category: 'Tools',
    level: 5,
  },
  {
    id: 13,
    name: 'Data Visualization tools',
    icon: 'Database',
    category: 'Tools',
    level: 4,
  },
  {
    id: 14,
    name: 'VSCode',
    icon: 'Code2',
    category: 'Tools',
    level: 4,
  },
];

export const education: EducationItem[] = [
  {
    id: 1,
    degree: 'MCA, AI/ML',
    institution: 'Amity University',
    duration: '2023 - 2025',
    description: 'Focused on advanced machine learning algorithms, deep learning, and artificial intelligence applications.'
  },
  {
    id: 2,
    degree: 'B.Sc. in Information Technology',
    institution: 'Amity University',
    duration: '2020 - 2023',
    description: 'Graduated with honors. Specialized in data structures, algorithms, Linux and mathematical foundations of computer science.'
  }
];

export const personalInfo = {
  name: 'Akshat Sharma',
  title: 'AI/ML Engineer & Researcher',
  email: 'sharmakshat99@gmail.com',
  location: 'Al Barsha , UAE',
  shortBio: 'Passionate AI/ML Engineer specializing in machine learning, computer vision, and advanced neural network architectures.',
  longBio: `I'm an AI/ML Engineer with over 2 years of Hands on experience in developing and implementing cutting-edge machine learning solutions. My expertise spans advanced machine learning algorithms, computer vision applications, and natural language processing.

I'm passionate about pushing the boundaries of artificial intelligence and exploring innovative approaches to solve complex real-world problems. My work focuses on creating practical AI solutions that bridge theoretical research with industry applications.

Currently researching advanced machine learning techniques and developing next-generation AI systems for various domains including computer vision, NLP, and predictive analytics.`,
  socialLinks: {
    github: 'https://github.com/believeinakshat',
    linkedin: 'https://linkedin.com/in/believeinakshatsharma',
  }
};

export const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case 'BrainCircuit':
      return BrainCircuit;
    case 'Code2':
      return Code2;
    case 'Database':
      return Database;
    case 'Wrench':
      return Wrench;
    case 'GitBranch':
      return GitBranch;
    case 'TerminalSquare':
      return TerminalSquare;
    case 'Eye':
      return Eye;
    case 'MessageSquare':
      return MessageSquare;
    default:
      return BrainCircuit;
  }
};