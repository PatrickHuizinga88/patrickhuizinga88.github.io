import type {ImageMetadata} from 'astro';
import BizzlyLogo from '../assets/projects/bizzly/logo.svg';
import DietTailorLogo from '../assets/projects/diettailor/logo.svg';
import InsyncLogo from '../assets/projects/insync/logo.svg';
import LapzyLogo from '../assets/projects/lapzy/logo.svg';

export const site = {
  name: 'Patrick Huizinga',
  role: 'Builder',
  location: 'Eindhoven, NL',
  url: 'https://patrickhuizinga.nl',
  intro: "I build web solutions for people, and lately for AI agents too.",
}

export const contact = {
  email: 'hello@patrickhuizinga.nl',
  linkedin: {label: 'patrick-huizinga', url: 'https://www.linkedin.com/in/patrick-huizinga-3957b914b/'},
  github: {label: 'PatrickHuizinga88', url: 'https://github.com/PatrickHuizinga88'},
}

export interface Project {
  slug: string
  name: string
  description: string
  tags: string[]
  url?: string
  now?: boolean
  logo?: ImageMetadata
  thumb: string
}

export const projects: Project[] = [
  {
    slug: 'insync',
    name: 'Insync',
    description: 'AI that prepares routine insurance work (requests, claims, client questions) inside the existing backoffice, while a person makes every decision.',
    tags: ['B2B', 'AI', 'SaaS', 'Website', 'Branding'],
    url: 'https://insync.insure',
    now: true,
    logo: InsyncLogo,
    thumb: '#15142a',
  },
  {
    slug: 'bizzly',
    name: 'Bizzly',
    description: 'An AI assistant for freelancers, with tailored help on strategy, marketing and bookkeeping.',
    tags: ['B2C', 'AI', 'SaaS', 'Branding'],
    url: 'https://bizzly.nl',
    logo: BizzlyLogo,
    thumb: '#dbeafe',
  },
  {
    slug: 'lapzy',
    name: 'Lapzy',
    description: 'A performance platform for motocross riders: lap timing, session logging and leaderboards. Designed and built solo.',
    tags: ['B2C', 'Web app', 'Branding'],
    logo: LapzyLogo,
    thumb: 'linear-gradient(to top, #d4d4d8, #ffffff)',
  },
  {
    slug: 'diettailor',
    name: 'DietTailor',
    description: 'Meal plans tailored to your goals and taste.',
    tags: ['B2C', 'AI', 'Web app', 'Branding'],
    logo: DietTailorLogo,
    thumb: '#fbfff4',
  },
]

export const timeline = [
  {when: '2025 – now', what: 'Co-founder and builder', where: 'Insync', now: true},
  {when: '2024 – now', what: 'Independent builder', where: 'Web apps and SaaS for clients'},
  {when: '2022 – 2024', what: 'Front-end developer', where: 'Veldsink Groep'},
  {when: '2022', what: 'Front-end developer', where: '101Media'},
  {when: '2021', what: 'Graduated as software developer', where: 'Internships and first client projects'},
]

export const stack = ['Vue', 'Nuxt', 'Astro', 'Tailwind', 'Supabase']

export const age = () => {
  const birthDate = new Date(1999, 10, 1);
  const now = new Date();
  const hadBirthday = now >= new Date(now.getFullYear(), birthDate.getMonth(), birthDate.getDate());
  return now.getFullYear() - birthDate.getFullYear() - (hadBirthday ? 0 : 1);
}

/* The plain-text version of the site that AI agents read (served at /llms.txt) */
export const llmsText = () => [
  `# ${site.name}`,
  '',
  `> ${site.role} from ${site.location}. ${site.intro}`,
  '',
  '## About',
  `${site.name} turns ideas into working web products, from the first sketch to the thing people use every day.`,
  'Enjoys working with new tech and building things that help people in their work or personal life, especially with and for AI agents.',
  'Co-founder and builder at Insync. Believes more and more people will get things done through their own AI assistant, and makes sure the platforms Insync builds are ready for that: easy to use for people and for the agents working on their behalf. Also takes on independent projects.',
  '',
  '## Timeline',
  ...timeline.map(item => `- ${item.when}: ${item.what}, ${item.where}`),
  '',
  '## Projects',
  ...projects.map(p => `- ${p.name}${p.url ? ` (${p.url})` : ''}: ${p.description}`),
  '',
  '## Contact',
  `- Email: ${contact.email}`,
  `- LinkedIn: ${contact.linkedin.url}`,
  `- GitHub: ${contact.github.url}`,
  '',
].join('\n')
