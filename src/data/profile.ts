export const profile = {
  name: 'Naufal Yudhistira',
  firstName: 'Naufal',
  brand: 'Gopla',
  role: 'Web developer',
  location: 'Malang, Indonesia',
  linkedIn: 'https://www.linkedin.com/in/gopla/',
  title: 'Gopla | Web Developer',
  description:
    'Meet Naufal Yudhistira, also known as Gopla, a web developer based in Malang, Indonesia, with experience in web applications, collaborative games, and interactive learning.',
  introduction:
    'Based in Malang, Indonesia, I build web applications and keep an eye on where technology is heading. Lately, AI and agentic development have been catching my attention.',
  about: [
    "I'm Naufal Yudhistira, also known as Gopla, a web developer based in Malang, Indonesia. My experience spans frontend and full-stack development, with earlier work in ERP customization and data engineering.",
    'My work includes applications for collaborative teambuilding games, as well as frontend development for microlearning modules and popup escape rooms. In the teambuilding games, players work toward a shared goal through a mix of web-based gameplay and physical puzzles similar to board games. My contribution is on the game application development side.',
    "Alongside that work, I enjoy keeping up with developments across technology. There's always something new to learn about, and lately I've been especially interested in AI and agentic development."
  ]
} as const

export const navigation = [
  { id: 'start', label: 'Start', number: '00' },
  { id: 'about', label: 'About', number: '01' },
  { id: 'experience', label: 'Experience', number: '02' },
  { id: 'now', label: 'Now', number: '03' },
  { id: 'connect', label: 'Connect', number: '04' }
] as const

export const experience = [
  {
    company: 'Helden Inc / Exp Inc.',
    dates: 'Oct 2023 — Present',
    start: '2023-10',
    current: true,
    roles: [
      {
        title: 'Frontend Developer',
        dates: 'Oct 2023 — Present',
        start: '2023-10',
        description:
          'Developing web-based games, microlearning modules, and popup escape rooms to create fun, meaningful experiences, with attention to product performance and collaboration across teams.',
        tags: ['Web-based games', 'Interactive learning', 'Frontend']
      }
    ]
  },
  {
    company: 'Get Aplikasi Indonesia',
    dates: 'May 2022 — Oct 2023',
    start: '2022-05',
    current: false,
    roles: [
      {
        title: 'Software Developer',
        dates: 'May 2022 — Oct 2023',
        start: '2022-05',
        description:
          "Developed and maintained applications across multiple projects as a full-stack developer, using different technology stacks to suit each project's needs.",
        tags: ['Full-stack', 'Web applications']
      }
    ]
  },
  {
    company: 'McEasy',
    dates: 'Dec 2021 — May 2022',
    start: '2021-12',
    current: false,
    roles: [
      {
        title: 'Odoo Developer',
        dates: 'Mar — May 2022',
        start: '2022-03',
        description:
          'Developed an internal Odoo ERP and customized the Sales and Subscription modules to fit company needs.',
        tags: ['Odoo', 'ERP']
      },
      {
        title: 'Data Engineer',
        dates: 'Dec 2021 — Feb 2022',
        start: '2021-12',
        description:
          'Collected and visualized data from Excel and database sources in a unified dashboard.',
        tags: ['Data visualization', 'Dashboards']
      }
    ]
  },
  {
    company: 'Heasoft Indonesia',
    dates: 'Jan — Apr 2021',
    start: '2021-01',
    current: false,
    roles: [
      {
        title: 'Full Stack Developer',
        dates: 'Jan — Apr 2021',
        start: '2021-01',
        description:
          'Developed web applications with ExpressJS, VueJS, and MySQL.',
        tags: ['Full-stack', 'Web applications']
      }
    ]
  },
  {
    company: 'PT Jenna Berkah Barokah',
    dates: 'Dec 2020 — May 2021',
    start: '2020-12',
    current: false,
    roles: [
      {
        title: 'Full Stack Developer',
        dates: 'Dec 2020 — May 2021',
        start: '2020-12',
        description:
          'Built an online shop REST API and admin website with ExpressJS, VueJS, and MySQL.',
        tags: ['REST API', 'Admin website']
      }
    ]
  }
] as const

export const education = [
  {
    institution: 'Politeknik Negeri Malang',
    qualification: "Associate's degree, Information Technology",
    dates: '2018 — 2021',
    start: '2018',
    end: '2021'
  },
  {
    institution: 'SMK Negeri 1 Kepanjen',
    qualification: 'Computer Software Engineering',
    dates: '2015 — 2018',
    start: '2015',
    end: '2018'
  }
] as const

export const interests = [
  {
    icon: 'spark',
    number: '01',
    title: 'Artificial intelligence',
    category: 'FOLLOWING',
    description:
      'Following how AI tools are evolving and where they fit into everyday development.'
  },
  {
    icon: 'terminal',
    number: '02',
    title: 'Agentic development',
    category: 'EXPLORING IDEAS',
    description:
      'Keeping up with coding agents and how they are changing the way software is built.'
  },
  {
    icon: 'compass',
    number: '03',
    title: "What's next",
    category: 'STAYING CURIOUS',
    description:
      'Staying curious about new ideas, tools, and approaches across the web.'
  }
] as const
