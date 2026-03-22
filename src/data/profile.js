// ============================================================
// 🔧 PORTFOLIO DATA — Edit this file to customize your site
// ============================================================

const data = {

  // --- HERO / LANDING SECTION ---
  hero: {
    firstName: 'Cornelius',
    role: 'Software Engineer',
    bio: 'I build scalable systems, contribute to open-source databases, and work to make tech accessible. From Ghana 🇬🇭 — running TechElevate.',
    bioLinks: [
      { text: 'open-source databases', url: 'https://github.com/documentdb/documentdb' },
      { text: 'TechElevate', url: 'https://techelevate.org' },
    ],
    // Terminal widget data (the JSON block on the right)
    terminal: {
      user: 'cornelius',
      fileName: 'cornelius.json',
      fields: {
        name: 'Cornelius Osei Owusu Boateng',
        role: 'Software Engineer',
        currently: '@ Microsoft',
        school: "Cornell University '24",
        from: 'Kumasi, Ghana 🇬🇭',
      },
      focus: ['distributed_systems', 'databases', 'open_source', 'ios_development'],
      also: ['the_bible ✝️', 'bass_guitar 🎸', 'learning_french 🇫🇷', 'languages'],
      motto: 'Building and being built.',
    },
  },

  // --- SOCIAL LINKS ---
  social: {
    github: 'https://github.com/CorneliusOsei2',
    linkedin: 'https://www.linkedin.com/in/cornelius-boateng-29b5b01a5',
    // email: '', 
  },

  // --- ABOUT SECTION ---
  about: {
    paragraphs: [
      "I'm currently a software engineer at <strong>Microsoft</strong>, where I work on cloud-native database infrastructure and open-source tooling. I graduated from <strong>Cornell University</strong> in 2024 with a degree in Computer Science.",
      'At Cornell, I was a Teaching Assistant for <strong>CS 4410</strong> (Operating Systems), <strong>CS 4320</strong> (Database Systems), <strong>CS 3410</strong> (Computer System Organization), and <strong>CS 1110</strong> (Intro to Computing). I was recognized with the <strong>Teaching Award</strong> from CIS, the <strong>Jonathan Marx Memorial Senior Prize</strong>, the <strong>Leadership in Service Award</strong> from the Office of DEIB, and made the <strong>Dean\'s List</strong>.',
      'Outside of work, I run <a href="https://techelevate.org" target="_blank" rel="noopener noreferrer">TechElevate</a> — an initiative empowering the next generation of African tech talent through mentorship, workshops, and hands-on engineering programs.',
      "When I'm not writing code, I'm reading the Bible (my favorite book of all time ✝️), learning French 🇫🇷, exploring new languages (human and programming), or playing bass guitar 🎸. I believe the best engineers are curious about more than just engineering.",
    ],
    skills: [
      { cat: 'Languages', items: ['C', 'C++', 'Python', 'Java', 'JavaScript', 'TypeScript', 'Swift', 'OCaml', 'Hack/PHP', 'SQL'] },
      { cat: 'Systems & Infra', items: ['Distributed Systems', 'Database Engines', 'Operating Systems', 'Cloud (Azure)', 'Data Engineering'] },
      { cat: 'Frameworks', items: ['React', 'Node.js', 'Django', 'Flask', 'FastAPI', 'SwiftUI', 'GraphQL'] },
      { cat: 'Tools', items: ['Git', 'Docker', 'PostgreSQL', 'MongoDB', 'DocumentDB', 'Firebase', 'AWS', 'Figma'] },
    ],
  },

  // --- EXPERIENCE SECTION ---
  experience: [
    { role: 'Software Engineer', co: 'Microsoft', when: 'Jun 2024 — Present', loc: 'Azure Cosmos DB',
      bullets: [
        'Building a highly scalable document-oriented NoSQL database utilizing a PostgreSQL engine',
        'Design and implement indexing, index selectivity, and query optimization algorithms in C',
        'Implement features such as collation and variables support; optimize aggregation operators',
        'Contribute to open-source Azure DocumentDB — write design docs, C#/JS/SQL integration tests',
      ], tags: ['C', 'PostgreSQL', 'Distributed Systems', 'Azure', 'Open Source'] },
    { role: 'Data Engineer', co: 'Cornell University', when: 'Jan 2024 — May 2024', loc: 'CIO-CIT Enterprise Services',
      bullets: [
        'Contributed to design and migration of validation routines from Oracle to Amazon Redshift',
        'Automated validation table population with Python, improving data management efficiency',
      ], tags: ['Python', 'Oracle', 'Redshift', 'Data Engineering'] },
    { role: 'Software Engineer Intern', co: 'Microsoft', when: 'May 2023 — Aug 2023', loc: 'Azure Cosmos DB',
      bullets: [
        'Enabled indexing columns generating keys exceeding PostgreSQL limits in Cosmos DB vCore',
        'Designed and implemented truncation algorithms for utf-8 and document keys in C',
        'Implemented query/value extraction, comparison, and consistency support for truncated keys',
      ], tags: ['C', 'PostgreSQL', 'Indexing', 'SQL'] },
    { role: 'Software Engineer Intern', co: 'Meta (Facebook)', when: 'May 2022 — Aug 2022', loc: 'Ads ML Infrastructure',
      bullets: [
        'Built an internal tool for ML ranking engineers to query privacy-related info on 1000s of Ads features',
        'Implemented a GraphQL API in Hack communicating with a SQL database at faster response times',
        "Created an interactive React frontend using Meta's XDS framework with Relay integration",
      ], tags: ['React', 'GraphQL', 'Hack', 'Python', 'ML Infra'] },
    { role: 'Software Engineer Intern', co: 'Kehillah Ghana', when: 'May 2021 — Aug 2021', loc: 'Backend',
      bullets: [
        'Developed CRUD apps for investment platform APIs with Python Django',
        'Built CI/CD pipelines using GitHub Actions; integrated error logging with Sentry',
      ], tags: ['Django', 'Python', 'CI/CD', 'GitHub Actions'] },
    { role: 'Teaching Assistant', co: 'Cornell University', when: 'Aug 2021 — Dec 2023', loc: 'Ithaca, NY',
      bullets: [
        'Teaching Assistant for CS 4410 (Operating Systems), CS 4320 (Database Systems), CS 3410 (Computer System Organization), and CS 1110 (Intro to Computing with Python)',
        'Led discussion sections, designed exam problems, and mentored hundreds of students',
        'Received the CIS Teaching Award (2022) for outstanding instruction and student impact',
      ], tags: ['Operating Systems', 'Databases', 'Computer Architecture', 'Python', 'Teaching'] },
    { role: 'Founder & Lead', co: 'TechElevate', when: 'Jan 2022 — Present', loc: 'Ghana',
      bullets: [
        'Built techelevate.org — a platform empowering the next generation of African tech talent',
        'Building awesome software systems; mentoring aspiring developers across Ghana',
      ], tags: ['Education', 'Community', 'Leadership', 'Ghana'] },
  ],

  // --- PROJECTS SECTION ---
  projects: [
    { name: 'DocumentDB', desc: 'MongoDB-compatible database engine for cloud-native and open-source workloads. Scalable query engine, wire-protocol compatibility, and production-grade performance.', tags: ['C', 'Databases', 'Open Source'], stars: '3.2k+', link: 'https://github.com/documentdb/documentdb', featured: true },
    { name: 'Mini-Dynamo', desc: "Distributed key-value store inspired by Amazon's DynamoDB. Implements consensus via Paxos and 2-Phase Commit for fault-tolerant distributed transactions.", tags: ['Distributed Systems', 'Paxos', '2PC', 'Go'], link: 'https://github.com/CorneliusOsei2' },
    { name: 'TechElevate', desc: 'Platform empowering the next generation of African tech talent — mentorship, workshops, and hands-on engineering programs.', tags: ['Next.js', 'TypeScript', 'Education', 'Full-Stack'], link: 'https://techelevate.org' },
    { name: 'Traduire', desc: 'Native iOS French utility app with translations, conjugation tables, vocabulary drills, and offline support.', tags: ['Swift', 'SwiftUI', 'iOS'], link: 'https://github.com/CorneliusOsei2/traduire' },
    { name: 'StudyPot', desc: "Ghana's premier medical school peer-tutoring platform. Hosts organized learning materials with authentication and social features for peer reviews.", tags: ['Node.js', 'MongoDB', 'AWS S3', 'EJS'], link: 'https://github.com/CorneliusOsei2/studyPot' },
    { name: 'RISC-V Interpreter', desc: 'CLI tool that generates and executes RISC-V assembly instructions. Input via .txt files and command line. Built with OCaml and ANSITerminal.', tags: ['OCaml', 'RISC-V', 'Computer Architecture'], link: 'https://github.com/CorneliusOsei2/risc-v' },
  ],

  // --- AWARDS SECTION ---
  awards: [
    { title: 'Jonathan Marx Memorial Senior Prize', org: 'Bowers College of Computing & Information Science', year: '2024' },
    { title: 'Leadership in Service Award', org: 'Bowers CIS, Office of DEIB', year: '2024' },
    { title: 'Teaching Award', org: 'Cornell CIS', year: '2022' },
  ],

  // --- CONTACT SECTION ---
  contact: {
    headline: 'get_in_touch()',
    text: "I'm always open to conversations about distributed systems, open source, tech in Africa, or interesting engineering challenges. Feel free to reach out.",
  },

  // --- FOOTER ---
  footer: {
    credit: 'Cornelius Osei Owusu Boateng',
  },

  // --- META (page title & description) ---
  meta: {
    title: 'Cornelius Osei Owusu Boateng — Software Engineer',
    description: 'Cornelius Osei Owusu Boateng — Software Engineer. Building scalable systems, open-source databases, and making tech accessible.',
  },

  // --- THEME / COLORS ---
  // Change the accent color to personalize the entire site.
  // Pick any hex color — the site will adapt automatically.
  // Presets: green '#00e5a0', orange '#ff8c42', blue '#5eaeff',
  //          purple '#8b6cef', red '#ff6b6b', pink '#f472b6',
  //          yellow '#ffc857', cyan '#22d3ee', teal '#14b8a6'
  theme: {
    accent: '#00e5a0',       // Primary accent color (buttons, highlights, links)
    accentHover: '#33f0c0',  // Accent hover state (slightly lighter)
    secondary: '#8b6cef',    // Secondary color (used for JSON keys, some tags)
  },
};

export default data;
