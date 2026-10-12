export interface VideoTrack {
  id: string;
  title: string;
  series: string;
  description: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  topics: string[];
  youtubeChannelUrl: string;
  isUpcoming?: boolean;
}

export const YOUTUBE_CHANNEL = {
  name: '8WHIE',
  handle: '@8WHIE',
  url: 'https://www.youtube.com/@8WHIE',
  description: 'Official YouTube channel of Worldwide Hackers Intelligence & Ethics. Practical cybersecurity tutorials, Kali Linux lab setups, network packet dissections, and ethical security research breakdowns.',
  founder: 'Aryan Thakur'
};

export const VIDEO_SERIES: VideoTrack[] = [
  {
    id: 'vid-kali-lab-setup',
    title: 'Kali Linux 2026 Complete Isolated Virtual Lab Setup',
    series: 'Ethical Hacking Zero to Hero',
    description: 'Step-by-step walkthrough of installing Kali Linux inside VirtualBox and VMware, configuring host-only networks, and verifying ISO checksum integrity.',
    duration: '22 min',
    level: 'Beginner',
    topics: ['Kali Linux', 'Virtualization', 'Host-Only Networking', 'Security Hygiene'],
    youtubeChannelUrl: 'https://www.youtube.com/@8WHIE'
  },
  {
    id: 'vid-wireshark-tcp',
    title: 'Wireshark Packet Analysis: Decoding the TCP 3-Way Handshake',
    series: 'Network Defense & Analysis',
    description: 'Real-time packet inspection of SYN, SYN-ACK, and ACK transmissions with custom Wireshark display filters and TCP stream reassembly.',
    duration: '18 min',
    level: 'Beginner',
    topics: ['Wireshark', 'TCP/IP', 'Packet Dissection', 'Protocol Analysis'],
    youtubeChannelUrl: 'https://www.youtube.com/@8WHIE'
  },
  {
    id: 'vid-linux-bash-scripting',
    title: 'Bash Scripting for Security Auditing & Log Triage',
    series: 'Linux Mastery for Hackers',
    description: 'Building custom shell scripts with grep, awk, and sed to parse authentication logs, isolate brute-force attackers, and automate iptables drops.',
    duration: '25 min',
    level: 'Intermediate',
    topics: ['Bash', 'Linux CLI', 'Log Triage', 'Automation'],
    youtubeChannelUrl: 'https://www.youtube.com/@8WHIE'
  },
  {
    id: 'vid-web-sql-injection',
    title: 'SQL Injection Explained: Vulnerability Mechanism & Defense',
    series: 'Web Application Security',
    description: 'Deconstructing SQL string concatenation vulnerabilities in educational test labs and implementing secure parameterized prepared statements.',
    duration: '20 min',
    level: 'Intermediate',
    topics: ['OWASP Top 10', 'SQL Injection', 'Secure Coding', 'Python'],
    youtubeChannelUrl: 'https://www.youtube.com/@8WHIE'
  },
  {
    id: 'vid-nmap-deep-dive',
    title: 'Nmap Scanning Techniques: SYN Stealth vs Connect Scan',
    series: 'Recon & Security Auditing',
    description: 'Comprehensive analysis of how Nmap communicates with target ports, handling RST flags, firewalls, and timing templates.',
    duration: '28 min',
    level: 'Intermediate',
    topics: ['Nmap', 'Port Scanning', 'Firewall Detection', 'Reconnaissance'],
    youtubeChannelUrl: 'https://www.youtube.com/@8WHIE'
  },
  {
    id: 'vid-osint-workflows',
    title: 'Responsible OSINT: Threat Intelligence & Digital Footprinting',
    series: 'Open-Source Intelligence',
    description: 'Passive intelligence gathering techniques using DNS transparency logs, search syntax, and public records without intrusive probing.',
    duration: '24 min',
    level: 'Beginner',
    topics: ['OSINT', 'Threat Intel', 'Reconnaissance', 'Privacy'],
    youtubeChannelUrl: 'https://www.youtube.com/@8WHIE'
  }
];
