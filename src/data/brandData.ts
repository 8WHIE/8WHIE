export interface SocialLink {
  id: string;
  name: string;
  handle: string;
  url: string;
  category: 'social' | 'community' | 'code' | 'personal';
  icon: string;
  description: string;
}

export const BRAND_INFO = {
  name: '8WHIE',
  fullName: 'Worldwide Hackers Intelligence & Ethics',
  tagline: 'Learn. Secure. Innovate.',
  title: '8WHIE | Cybersecurity & Ethical Hacking',
  founder: 'Aryan Thakur',
  domain: 'https://8whie.page.gd',
  description: 'Explore ethical hacking, cybersecurity, Linux, networking, security research, and open-source technology through practical educational resources.',
  mission: 'To make cybersecurity education, ethical hacking knowledge, and open-source technology more accessible through practical and responsible learning.',
  vision: 'To build a global community of skilled, ethically grounded cybersecurity practitioners, researchers, and defenders who protect digital ecosystems through knowledge and innovation.',
  coreValues: [
    {
      title: 'Ethics First',
      description: 'Knowledge and capability carry deep responsibility. We advocate strictly authorized, non-destructive, and legal security research.'
    },
    {
      title: 'Hands-On Mastery',
      description: 'Theory is essential, but true proficiency comes from practical packet analysis, lab simulation, and real command-line execution.'
    },
    {
      title: 'Open Knowledge',
      description: 'High-quality technical cybersecurity education should be accessible to all dedicated students, researchers, and developers.'
    },
    {
      title: 'Defensive Mindset',
      description: 'Understanding offensive attack mechanics is the ultimate weapon for designing resilient, impenetrable digital defenses.'
    }
  ]
};

export const OFFICIAL_SOCIAL_LINKS: SocialLink[] = [
  {
    id: 'github',
    name: 'GitHub Organization',
    handle: '@8WHIE',
    url: 'https://github.com/8WHIE',
    category: 'code',
    icon: 'Github',
    description: 'Official open-source repositories, recon tools, and educational scripts.'
  },
  {
    id: 'youtube',
    name: 'YouTube Channel',
    handle: '@8WHIE',
    url: 'https://www.youtube.com/@8WHIE',
    category: 'community',
    icon: 'Youtube',
    description: 'Video tutorials, Kali Linux lab setups, and packet analysis deep dives.'
  },
  {
    id: 'telegram-channel',
    name: 'Telegram Community Channel',
    handle: '@whiee',
    url: 'https://t.me/whiee',
    category: 'community',
    icon: 'Send',
    description: 'Announcements, security research updates, and community discussions.'
  },
  {
    id: 'telegram-contact',
    name: 'Direct Telegram Contact',
    handle: '@Iaaryan',
    url: 'https://t.me/Iaaryan',
    category: 'personal',
    icon: 'MessageSquare',
    description: 'Direct inquiries, research collaboration, and founder communications.'
  },
  {
    id: 'twitter',
    name: 'X (formerly Twitter)',
    handle: '@im_aryanthakur',
    url: 'https://x.com/im_aryanthakur',
    category: 'personal',
    icon: 'Twitter',
    description: 'Cybersecurity insights, tech threads, and real-time security alerts.'
  },
  {
    id: 'instagram-brand',
    name: '8WHIE Instagram',
    handle: '@8whie_',
    url: 'https://www.instagram.com/8whie_/',
    category: 'social',
    icon: 'Instagram',
    description: 'Visual security concepts, terminal tips, and cybersecurity graphics.'
  },
  {
    id: 'instagram-personal',
    name: 'Aryan Thakur Instagram',
    handle: '@imarykt',
    url: 'https://www.instagram.com/imarykt/',
    category: 'personal',
    icon: 'User',
    description: 'Founder personal profile and tech lifestyle updates.'
  }
];
