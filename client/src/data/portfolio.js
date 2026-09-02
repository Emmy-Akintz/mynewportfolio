export const personalInfo = {
  name: 'Ayomide Emmanuel Akintan',
  alias: 'Emmy_Akintz',
  title: 'Full-Stack & Mobile Developer',
  location: 'Akure, Ondo State, Nigeria',
  email: 'emzyakints2005@gmail.com',
  phone: '+234 816 765 9926',
  linkedin: 'https://www.linkedin.com/in/ayomide-akintan-3a10a028b/',
  github: 'https://github.com/Emmy-Akintz/',
  tagline:
    'I build responsive web apps and cross-platform mobile experiences — from offline-first React Native clients to full-stack Next.js platforms.',
  about: `Hi, I'm Ayomide Emmanuel Akintan (Emmy-Akintz). I'm a Computer Science graduate and software engineer who builds production-ready websites and mobile applications. I currently work on marketplace and productivity platforms, and I enjoy collaborating in teams where ideas are shared openly and shipped with care.`,
}

export const navLinks = [
  { id: 'home', label: 'HOME' },
  { id: 'about', label: 'ABOUT' },
  { id: 'services', label: 'SERVICES' },
  { id: 'skills', label: 'SKILLS' },
  { id: 'education', label: 'EDUCATION' },
  { id: 'experience', label: 'EXPERIENCE' },
  { id: 'work', label: 'WORK' },
  { id: 'blog', label: 'BLOG' },
  { id: 'contact', label: 'CONTACT' },
]

export const services = [
  {
    title: 'Web Development',
    description: 'Responsive, performant web apps with Next.js, React, and Tailwind CSS.',
  },
  {
    title: 'Mobile Application Development',
    description: 'Cross-platform apps with React Native, Expo, and offline-first architecture.',
  },
  {
    title: 'Full-Stack Development',
    description: 'End-to-end APIs and dashboards with Node.js, Express, and MongoDB.',
  },
]

export const skillCategories = [
  {
    category: 'Mobile',
    skills: ['React Native', 'Expo', 'Kotlin'],
  },
  {
    category: 'Languages',
    skills: ['TypeScript', 'JavaScript', 'Java', 'HTML', 'CSS'],
  },
  {
    category: 'Frontend & State',
    skills: ['Next.js', 'React', 'Tailwind CSS', 'Bootstrap', 'Redux Toolkit', 'RTK Query'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express', 'MongoDB', 'PHP', 'MySQL'],
  },
]

export const experiences = [
  {
    company: 'GE-Mart',
    role: 'Mobile Application Developer',
    period: 'Apr 2026 – Present',
    location: 'Nigeria',
    highlights: [
      'Engineered the mobile client architecture for the Ge-mart platform with responsive UI and cross-platform performance.',
      'Configured EAS-based CI/CD pipelines to automate Android builds and streamline deployment.',
      'Implemented secure API integrations and third-party authentication with encrypted keystore management.',
    ],
  },
  {
    company: 'DotCircle Labs',
    role: 'Software Developer',
    period: 'May 2025 – Sep 2025',
    location: 'Nigeria',
    highlights: [
      'Resolved cross-platform build failures on Windows by refactoring Linux-specific file naming conventions.',
      'Debugged complex UI conflicts via Chrome DevTools, fixing scroll-freezing dropdown issues.',
      'Prototyped a React Native (Expo) estate security app with QR-code access control requirements.',
    ],
  },
  {
    company: 'Toraaah',
    role: 'Mobile Application Developer',
    period: 'Jan 2025 – Jun 2025',
    location: 'Nigeria',
    link: { href: 'https://toraaah.com', label: 'Toraaah' },
    highlights: [
      'Co-developed a React Native (Expo) app for 30+ early adopters with custom component abstractions.',
      'Built an offline-first sync system with Redux Toolkit, RTK Query, Redux Persist, and AsyncStorage.',
      'Integrated the Spotify API with secure token storage via Expo SecureStore.',
    ],
  },
  {
    company: 'Toraaah',
    role: 'Front-end Web Developer',
    period: 'Apr 2024 – Jan 2025',
    location: 'Nigeria',
    link: { href: 'https://toraaah.com', label: 'Toraaah' },
    highlights: [
      'Launched and overhauled the main marketing landing page for performance, responsiveness, and SEO.',
      'Built a custom responsive video player and YouTube-inspired web video editor with Next.js.',
      'Converted Figma icons into typed TypeScript SVG components for reuse across web and mobile.',
    ],
  },
]

export const projects = [
  {
    title: 'Jonjer',
    subtitle: 'Full-Stack Job Service Marketplace',
    period: 'Apr 2026 – Present',
    description:
      'A service-based marketplace connecting employers and artisans with weighted matching, KYC credit scoring, and Squad payment settlements.',
    tech: ['Next.js', 'MongoDB', 'Tailwind CSS', 'Node.js', 'Express'],
    liveUrl: null,
    githubUrl: null,
  },
  {
    title: 'Taskipline',
    subtitle: 'Goal-Driven Productivity Platform',
    period: 'Jun 2025 – Present',
    description:
      'Full-stack productivity app with JWT auth, nested task groups, progress tracking, and automated reminders.',
    tech: ['Next.js', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    liveUrl: null,
    githubUrl: null,
  },
  {
    title: 'Toraaah',
    subtitle: 'Media Platform (Web & Mobile)',
    period: 'Apr 2024 – Jun 2025',
    description:
      'Marketing site, video editor, RSS podcast feeds, and a React Native mobile app with offline-first architecture.',
    tech: ['Next.js', 'React Native', 'Expo', 'Redux Toolkit', 'RTK Query'],
    liveUrl: 'https://toraaah.com',
    githubUrl: null,
  },
  {
    title: 'Interswitch Hackathon',
    subtitle: 'Frontend Web Application',
    period: 'Jan 2025',
    description: 'Built a performant frontend web application using Next.js during a 3-day hackathon.',
    tech: ['Next.js', 'React', 'Tailwind CSS'],
    liveUrl: null,
    githubUrl: null,
  },
  {
    title: 'Alpinist Hackathon',
    subtitle: 'AI Timetable Management — 3rd Place',
    period: 'Apr 2024',
    description:
      'Integrated AI-driven scheduling into a timetable system. Built the React (Vite) frontend and Express.js backend.',
    tech: ['React', 'Vite', 'Express.js'],
    liveUrl: null,
    githubUrl: null,
  },
  {
    title: 'Larry-Pat Foods',
    subtitle: 'Restaurant Web App',
    period: '2023',
    description: 'A responsive restaurant ordering and showcase website.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://larry-pat-foods.netlify.app/',
    githubUrl: 'https://github.com/Emmy-Akintz/larry-pat-foods',
  },
]

export const educationItems = [
  {
    title: 'Bachelor of Science in Computer Science',
    content:
      'Landmark University, Omu-Aran, Kwara State, Nigeria (Oct 2022 – Jul 2026). Graduated with a Second Class degree.',
  },
  {
    title: 'Mobile Application Development',
    content:
      'JIT Solutions, Akure — certification issued Jan 2025. Trained in React Native and cross-platform mobile development.',
    link: { href: 'https://jitsolutionsng.com', label: 'JIT Solutions' },
  },
  {
    title: 'Full-Stack Web Development (PHP & MySQL)',
    content:
      'JIT Solutions, Akure — training completed Dec 2022. Built multiple projects during the programme.',
    link: { href: 'https://jitsolutionsng.com/verification.php?id=635', label: 'View certification' },
  },
  {
    title: 'High School Secondary Education',
    content:
      'Nigerian Navy Secondary School, Imeri, Ondo State. Favourite subjects: mathematics, physics, further mathematics, and technical drawing.',
    link: { href: 'https://www.nnssimeri.com/', label: 'NNSS Imeri' },
  },
  {
    title: 'Primary School Education',
    content:
      'Universal School Akure (Primary 1–4), then Fullness Of God, Akure for Primary 5 before high school.',
    link: { href: 'https://fullnessofgod.com.ng/', label: 'Fullness Of God' },
  },
]
