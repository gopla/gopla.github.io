export interface Project {
  id: string
  name: string
  category?: string
  description?: string
  technologies?: string[]
  featured?: boolean
  artwork?: 'wallet' | 'cards'
  demoUrl?: string
  repositoryUrl?: string
}

// Display order follows the owner's selection. Only include verified details.
export const projects: Project[] = [
  {
    id: 'saifulog',
    name: 'SaifuLog',
    category: 'Personal finance',
    description:
      'A little more clarity for everyday finances. Track expenses, income, and transfers across accounts, and plan ahead with monthly budgets.',
    technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    featured: true,
    artwork: 'wallet',
    demoUrl: 'https://saifulog.gopla.my.id/'
  },
  {
    id: 'polator',
    name: 'Polator',
    category: 'Poker calculator',
    description: 'A poker calculator built for the table.',
    technologies: ['React', 'Firebase', 'Tailwind CSS'],
    artwork: 'cards',
    demoUrl: 'https://polator.vercel.app/',
    repositoryUrl: 'https://github.com/gopla/polator'
  },
  {
    id: 'helden-board',
    name: 'Helden Board',
    category: 'Team collaboration',
    description:
      'A collaborative workspace for organizing tasks, planning sprints, and tracking work with Scrum and Kanban boards.'
  },
  {
    id: 'helden-per-cms',
    name: 'Helden PER CMS',
    category: 'Game content management',
    description:
      'A content management system for preparing PER games. Organize multilingual content, configure game flows, and manage client-specific themes and settings.'
  }
]
