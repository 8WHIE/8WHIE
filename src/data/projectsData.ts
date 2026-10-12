export interface SecurityProject {
  id: string;
  name: string;
  tagline: string;
  description: string;
  techStack: string[];
  status: 'Active' | 'Stable' | 'In Development';
  githubUrl: string;
  demoUrl?: string;
  highlights: string[];
  category: 'Automation' | 'Defensive' | 'Recon' | 'Education';
}

export const SECURITY_PROJECTS: SecurityProject[] = [
  {
    id: 'whie-recon-toolkit',
    name: '8WHIE Recon Suite',
    tagline: 'Modular automated passive OSINT & asset discovery engine',
    description: 'An open-source passive reconnaissance orchestrator designed for authorized bug bounty hunters and blue team defenders. Aggregates DNS records, TLS certificates, WHOIS history, and passive threat feeds without sending intrusive network probes.',
    techStack: ['Python 3.12', 'AsyncIO', 'DNS Library', 'Rich CLI', 'SQLite'],
    status: 'Active',
    githubUrl: 'https://github.com/8WHIE',
    highlights: [
      'Zero-packet intrusive passive DNS harvesting',
      'Certificate Transparency log monitoring',
      'JSON and Markdown export for audit trails'
    ],
    category: 'Recon'
  },
  {
    id: 'linux-sentinel-hardening',
    name: 'Linux Sentinel Hardening',
    tagline: 'Automated CIS Benchmark compliance & kernel sysctl hardening scripts',
    description: 'A modular Bash and Ansible script collection for locking down Debian and Ubuntu server environments. Enforces SSH key authentication, configures UFW rules, installs fail2ban filters, and hardens sysctl kernel parameters.',
    techStack: ['Bash', 'Ansible', 'Linux Sysctl', 'Systemd', 'UFW'],
    status: 'Stable',
    githubUrl: 'https://github.com/8WHIE',
    highlights: [
      'One-command baseline SSH hardening',
      'Automated sysctl TCP/IP stack hardening',
      'Idempotent Ansible playbooks for server fleets'
    ],
    category: 'Defensive'
  },
  {
    id: 'ctf-playbook-cheatsheet',
    name: '8WHIE CTF Field Guide',
    tagline: 'Interactive cheat sheets and methodology templates for security competitions',
    description: 'A structured, open-source reference guide covering binary exploitation, web security, reverse engineering, cryptography, and forensics. Provides reproducible commands, methodology mind maps, and writeup templates.',
    techStack: ['Markdown', 'Vite', 'React', 'TypeScript', 'Tailwind CSS'],
    status: 'Active',
    githubUrl: 'https://github.com/8WHIE',
    highlights: [
      'Comprehensive reverse engineering cheat sheets',
      'Quick reference for GDB, Ghidra, and CyberChef recipes',
      'Structured writeup templates for competitive teams'
    ],
    category: 'Education'
  },
  {
    id: 'socket-packet-crafter',
    name: 'Raw Socket Packet Lab',
    tagline: 'Educational network packet craft & inspection laboratory in C and Python',
    description: 'Low-level network research utility illustrating how raw sockets construct IP, TCP, and UDP headers byte by byte. Built strictly for laboratory study to inspect protocol behavior and checksum calculations.',
    techStack: ['Python', 'Raw Sockets', 'C', 'Wireshark PCAP'],
    status: 'In Development',
    githubUrl: 'https://github.com/8WHIE',
    highlights: [
      'Byte-level breakdown of IP header fields and checksums',
      'Interactive TCP handshake demonstration script',
      'Detailed commentary on kernel networking stack bypass'
    ],
    category: 'Automation'
  }
];
