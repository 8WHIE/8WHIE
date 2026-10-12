export interface Lesson {
  id: string;
  categoryId: string;
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  readingTime: string;
  learningObjectives: string[];
  prerequisites: string[];
  content: {
    overview: string;
    sections: {
      heading: string;
      body: string;
      codeBlock?: {
        language: string;
        code: string;
        caption?: string;
      };
    }[];
  };
  securityNote: string;
  relatedTutorialIds: string[];
}

export interface AcademyCategory {
  id: string;
  title: string;
  iconName: string;
  description: string;
  lessonCount: number;
}

export const ACADEMY_CATEGORIES: AcademyCategory[] = [
  {
    id: 'ethical-hacking',
    title: 'Ethical Hacking Fundamentals',
    iconName: 'ShieldAlert',
    description: 'Foundations of authorized penetration testing, legal frameworks, ethics, and methodology.',
    lessonCount: 4
  },
  {
    id: 'kali-linux',
    title: 'Kali Linux',
    iconName: 'Terminal',
    description: 'Master the premier offensive security distribution, environment configuration, and core utilities.',
    lessonCount: 3
  },
  {
    id: 'linux-cli',
    title: 'Linux Command Line',
    iconName: 'CommandLine',
    description: 'Bash scripting, pipeline redirection, process monitoring, permissions, and shell automation.',
    lessonCount: 3
  },
  {
    id: 'networking',
    title: 'Computer Networking',
    iconName: 'Network',
    description: 'TCP/IP stack, packet analysis, subnetting, DNS, routing protocols, and socket architecture.',
    lessonCount: 3
  },
  {
    id: 'web-security',
    title: 'Web Application Security',
    iconName: 'Globe',
    description: 'OWASP Top 10, cross-site scripting (XSS), SQL injection, CSRF, and authentication flaws.',
    lessonCount: 3
  },
  {
    id: 'python-security',
    title: 'Python Programming',
    iconName: 'Code',
    description: 'Automate security auditing, custom packet crafters, port scanners, and API interaction with Python.',
    lessonCount: 3
  },
  {
    id: 'digital-forensics',
    title: 'Digital Forensics',
    iconName: 'Search',
    description: 'Memory analysis, file artifact carving, disk imaging, and forensic chain of custody.',
    lessonCount: 2
  },
  {
    id: 'cryptography',
    title: 'Cryptography',
    iconName: 'Key',
    description: 'Symmetric & asymmetric encryption, hashing, digital signatures, PKI, and secure key exchange.',
    lessonCount: 2
  },
  {
    id: 'osint',
    title: 'OSINT Fundamentals',
    iconName: 'Compass',
    description: 'Open-source intelligence gathering, public registry queries, threat intelligence, and digital footprints.',
    lessonCount: 2
  },
  {
    id: 'security-awareness',
    title: 'Security Awareness',
    iconName: 'UserCheck',
    description: 'Social engineering mitigation, credential hygiene, phishing defense, and organizational OPSEC.',
    lessonCount: 2
  },
  {
    id: 'defensive-security',
    title: 'Defensive Security',
    iconName: 'ShieldCheck',
    description: 'SIEM operations, intrusion detection systems, host firewalling, and threat hunting workflows.',
    lessonCount: 2
  },
  {
    id: 'ctf-practice',
    title: 'Capture The Flag Practice',
    iconName: 'Flag',
    description: 'Problem-solving strategies, binary reverse-engineering challenges, and CTF puzzle walkthroughs.',
    lessonCount: 2
  }
];

export const ACADEMY_LESSONS: Lesson[] = [
  {
    id: 'eh-101',
    categoryId: 'ethical-hacking',
    title: 'Legal Boundaries & Rules of Engagement',
    description: 'Understand the imperative difference between authorized penetration testing and unauthorized intrusion, including Scope of Work and NDAs.',
    difficulty: 'Beginner',
    readingTime: '7 min',
    learningObjectives: [
      'Define clear Scope of Work (SoW) and Rules of Engagement (RoE)',
      'Understand computer crime laws including CFAA and regional cyber statutes',
      'Establish written authorization protocols prior to any security assessment'
    ],
    prerequisites: ['Basic computer literacy', 'Commitment to ethical cybersecurity standards'],
    content: {
      overview: 'Ethical hacking differs from illicit hacking solely through explicit, informed, and documented permission. Operating without a valid Scope of Work constitutes criminal conduct regardless of intentions.',
      sections: [
        {
          heading: '1. The Triad of Legal Security Assessment',
          body: 'Every legitimate engagement requires three baseline pillars: Written Authorization signed by asset owners, a delimited Scope of Work containing IP ranges and domains, and an incident escalation procedure.'
        },
        {
          heading: '2. Typical Statement of Work Checklist',
          body: 'Before running any probe or scanner, verify that your client agreement details explicit testing windows, out-of-scope assets (e.g. third-party payment gateways), and communication channels in case of service disruption.',
          codeBlock: {
            language: 'markdown',
            code: `## Engagement Parameters
- Target Systems: 192.168.10.0/24 (Lab/Staging only)
- Testing Window: 22:00 - 04:00 UTC (Off-peak)
- Prohibited Activities: Denial-of-Service, physical intrusion, social engineering
- Primary Contact: Security Ops Lead (secure-comms@target.domain)`,
            caption: 'Sample Scope of Work excerpt'
          }
        },
        {
          heading: '3. Bug Bounty Guidelines vs Pentesting',
          body: 'In bug bounty programs, always adhere strictly to the program policy published on platforms like HackerOne or Bugcrowd. Never exceed the designated targets or test subdomains not explicitly declared in-scope.'
        }
      ]
    },
    securityNote: 'WARNING: Running penetration testing tools against targets without explicit, documented permission is strictly illegal. Always practice within isolated virtual labs or authorized bug bounty scopes.',
    relatedTutorialIds: ['eh-102', 'kali-101']
  },
  {
    id: 'eh-102',
    categoryId: 'ethical-hacking',
    title: 'Penetration Testing Methodology & Phases',
    description: 'Step through the 5 standard phases of security assessments: Reconnaissance, Scanning, Gaining Access, Maintaining Access, and Analysis & Reporting.',
    difficulty: 'Beginner',
    readingTime: '9 min',
    learningObjectives: [
      'Memorize the five sequential phases of penetration testing',
      'Distinguish passive reconnaissance from active scanning',
      'Learn how professional vulnerability remediation reports are structured'
    ],
    prerequisites: ['eh-101'],
    content: {
      overview: 'Structured methodology ensures repeatable, comprehensive, and non-destructive evaluations of an organization\'s security posture.',
      sections: [
        {
          heading: 'Phase 1: Reconnaissance (OSINT)',
          body: 'Gathering public information without direct intrusive interaction with the target systems. Querying DNS records, certificate transparency logs, and public company registries.'
        },
        {
          heading: 'Phase 2: Scanning & Enumeration',
          body: 'Actively probing network boundaries to discover live hosts, open ports, service banners, and software versions.',
          codeBlock: {
            language: 'bash',
            code: `# Example educational host discovery command
nmap -sS -Pn -sV --top-ports 100 -T4 target.lab.internal`,
            caption: 'Nmap SYN stealth scan for service version discovery'
          }
        },
        {
          heading: 'Phase 3 & 4: Vulnerability Assessment & Exploitation Verification',
          body: 'Correlating discovered software versions with known Common Vulnerabilities and Exposures (CVEs) and verifying proof of concepts in a non-destructive manner.'
        },
        {
          heading: 'Phase 5: Remediation & Reporting',
          body: 'The real value of an ethical hacker lies in delivering clear, actionable remediation guidance to software developers and network administrators.'
        }
      ]
    },
    securityNote: 'Strictly authorized laboratory demonstration. Do not execute scanning commands on networks you do not own or administer.',
    relatedTutorialIds: ['eh-101', 'net-101', 'tools-nmap']
  },
  {
    id: 'kali-101',
    categoryId: 'kali-linux',
    title: 'Setting Up an Isolated Kali Linux Laboratory',
    description: 'Learn how to deploy Kali Linux in an isolated virtualized environment (VirtualBox / VMware) with host-only and NAT networking.',
    difficulty: 'Beginner',
    readingTime: '8 min',
    learningObjectives: [
      'Download and verify official Kali Linux SHA256 checksums',
      'Configure virtualization settings for optimal performance and isolation',
      'Update Kali Linux package repositories securely'
    ],
    prerequisites: ['Basic understanding of Virtual Machines'],
    content: {
      overview: 'A sandboxed virtual environment allows you to test tools and analyze network behavior without putting your host machine or production local network at risk.',
      sections: [
        {
          heading: '1. Checksum Verification',
          body: 'Always verify the integrity of downloaded Kali ISOs to prevent supply chain tampering.',
          codeBlock: {
            language: 'bash',
            code: `# Verify SHA256 sum against official Offensive Security releases
sha256sum kali-linux-2026.1-installer-amd64.iso`,
            caption: 'Verifying image checksum in Linux/macOS terminal'
          }
        },
        {
          heading: '2. Virtual Network Isolation (Host-Only)',
          body: 'Configure a dedicated virtual switch ("Host-Only Adapter") so that your Kali attacker machine and vulnerable target VMs (e.g. Metasploitable) communicate strictly through an air-gapped subnet.'
        },
        {
          heading: '3. Package Maintenance & System Hardening',
          body: 'Keep the distribution up to date using the official rolling release mirrors.',
          codeBlock: {
            language: 'bash',
            code: `sudo apt update && sudo apt upgrade -y
sudo apt autoremove -y`,
            caption: 'Standard Kali package maintenance'
          }
        }
      ]
    },
    securityNote: 'Maintain virtualization network isolation to prevent laboratory traffic from leaking onto public or shared home networks.',
    relatedTutorialIds: ['linux-101', 'eh-101']
  },
  {
    id: 'linux-101',
    categoryId: 'linux-cli',
    title: 'Essential Linux Command Line for Security Researchers',
    description: 'Master core shell utilities: grep, awk, sed, find, file permissions, and process introspection for security analysis.',
    difficulty: 'Beginner',
    readingTime: '10 min',
    learningObjectives: [
      'Chain commands using standard streams (stdin, stdout, stderr) and pipes',
      'Filter log files rapidly using grep and regular expressions',
      'Inspect running processes, network sockets, and file permissions'
    ],
    prerequisites: ['Terminal access'],
    content: {
      overview: 'The command line is the primary interface for security operations, log triage, forensics, and automation.',
      sections: [
        {
          heading: '1. File and Process Inspection',
          body: 'Monitoring active connections and processes with native Linux tools.',
          codeBlock: {
            language: 'bash',
            code: `# Check listening ports and associated processes
sudo ss -tulpn

# Inspect active processes sorted by memory usage
ps aux --sort=-%mem | head -n 10`,
            caption: 'Process and socket inspection commands'
          }
        },
        {
          heading: '2. Text Processing and Log Parsing',
          body: 'Isolating failed authentication attempts from system authorization logs.',
          codeBlock: {
            language: 'bash',
            code: `# Extract unique IP addresses with failed SSH attempts
grep "Failed password" /var/log/auth.log | awk '{print $(NF-3)}' | sort | uniq -c | sort -nr`,
            caption: 'Security log triage pipeline'
          }
        }
      ]
    },
    securityNote: 'Inspect logs on your own test machines or authorized infrastructure.',
    relatedTutorialIds: ['kali-101', 'net-101']
  },
  {
    id: 'net-101',
    categoryId: 'networking',
    title: 'TCP/IP Architecture & Packet Analysis with Wireshark',
    description: 'Deconstruct Ethernet frames, IP headers, TCP 3-way handshakes, and inspect live packet captures in Wireshark.',
    difficulty: 'Beginner',
    readingTime: '11 min',
    learningObjectives: [
      'Understand the 3-Way Handshake (SYN, SYN-ACK, ACK)',
      'Analyze TCP flags and sequence numbers',
      'Write effective Wireshark display filters to isolate traffic'
    ],
    prerequisites: ['Basic networking concepts'],
    content: {
      overview: 'Every network attack and defensive detection relies on understanding packet-level communications across the OSI and TCP/IP models.',
      sections: [
        {
          heading: '1. The TCP 3-Way Handshake Breakdown',
          body: '1. Client sends SYN (Synchronize sequence number)\n2. Server responds with SYN-ACK (Acknowledge + Synchronize)\n3. Client sends ACK (Acknowledge). The connection is established.'
        },
        {
          heading: '2. Essential Wireshark Display Filters',
          body: 'Filtering through gigabytes of pcap data requires precise syntax.',
          codeBlock: {
            language: 'text',
            code: `# Show only DNS queries and responses
dns

# Show HTTP POST requests (often contains form submissions)
http.request.method == "POST"

# Filter TCP resets indicating closed ports or firewall drops
tcp.flags.reset == 1 && tcp.flags.ack == 1`,
            caption: 'Wireshark display filter examples'
          }
        }
      ]
    },
    securityNote: 'Only capture network traffic on networks where you have explicit authorization or packet capture privileges.',
    relatedTutorialIds: ['linux-101', 'web-101']
  },
  {
    id: 'web-101',
    categoryId: 'web-security',
    title: 'Web Security: Understanding SQL Injection & Prevention',
    description: 'An in-depth educational study of how SQL queries are manipulated through untrusted inputs and how parameterized queries eliminate the flaw.',
    difficulty: 'Intermediate',
    readingTime: '12 min',
    learningObjectives: [
      'Identify unsanitized string concatenation in backend database queries',
      'Understand how SQL boolean logic alteration functions',
      'Implement parameterized prepared statements across modern frameworks'
    ],
    prerequisites: ['Basic SQL knowledge', 'Basic web development concepts'],
    content: {
      overview: 'SQL Injection occurs when untrusted user input is directly concatenated into a structured database query, altering the query\'s intended logic.',
      sections: [
        {
          heading: '1. The Flawed Pattern (Vulnerable Code)',
          body: 'Directly formatting user input into an SQL query string allows attackers to escape string literals.',
          codeBlock: {
            language: 'python',
            code: `# VULNERABLE EXAMPLE: DO NOT USE IN PRODUCTION
user_input = request.form['username']
query = f"SELECT * FROM users WHERE username = '{user_input}'"
# If user_input is: admin' OR '1'='1
# The query becomes: SELECT * FROM users WHERE username = 'admin' OR '1'='1'`,
            caption: 'Vulnerable SQL concatenation antipattern'
          }
        },
        {
          heading: '2. The Defense: Parameterized Queries',
          body: 'Parameterized queries treat user input strictly as literal values, preventing the database engine from executing input as SQL commands.',
          codeBlock: {
            language: 'python',
            code: `# SECURE PATTERN: Parameterized prepared statement
cursor.execute("SELECT * FROM users WHERE username = %s", (user_input,))
results = cursor.fetchall()`,
            caption: 'Parameterized query defense'
          }
        }
      ]
    },
    securityNote: 'Test SQL injection exclusively within dedicated educational vulnerable environments like OWASP Juice Shop or DVWA.',
    relatedTutorialIds: ['web-102', 'python-101']
  },
  {
    id: 'python-101',
    categoryId: 'python-security',
    title: 'Building a Multi-Threaded Port Scanner with Python',
    description: 'Understand socket programming, port connection handshakes, and concurrent network scanning using Python\'s socket and concurrent.futures modules.',
    difficulty: 'Intermediate',
    readingTime: '9 min',
    learningObjectives: [
      'Use Python socket library for raw TCP connection tests',
      'Handle socket timeouts and connection exceptions gracefully',
      'Scale scanning speed using ThreadPoolExecutor safely'
    ],
    prerequisites: ['Python basics', 'Basic networking'],
    content: {
      overview: 'Creating your own network utilities demystifies how professional tools like Nmap interact with the operating system networking stack.',
      sections: [
        {
          heading: '1. Raw Socket Connection Logic',
          body: 'Testing whether a remote TCP port accepts connections using socket.connect_ex().',
          codeBlock: {
            language: 'python',
            code: `import socket
from concurrent.futures import ThreadPoolExecutor

def scan_port(host: str, port: int) -> bool:
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.settimeout(1.0)
        result = s.connect_ex((host, port))
        if result == 0:
            print(f"[+] Port {port} is OPEN on {host}")
            return True
    return False

# Scan standard web ports concurrently in lab
with ThreadPoolExecutor(max_workers=20) as executor:
    ports = [21, 22, 25, 53, 80, 443, 8080]
    for p in ports:
        executor.submit(scan_port, "127.0.0.1", p)`,
            caption: 'Educational multi-threaded port scanner in Python'
          }
        }
      ]
    },
    securityNote: 'Only scan localhost (127.0.0.1) or systems explicitly allocated in your private laboratory.',
    relatedTutorialIds: ['net-101', 'linux-101']
  },
  {
    id: 'crypto-101',
    categoryId: 'cryptography',
    title: 'Cryptographic Hashing vs Encryption: Integrity & Privacy',
    description: 'Learn the architectural difference between one-way hash functions (SHA-256, bcrypt) and two-way cryptographic ciphers (AES-256-GCM, RSA).',
    difficulty: 'Beginner',
    readingTime: '8 min',
    learningObjectives: [
      'Differentiate hashes, encryption ciphers, and encoding schemes',
      'Understand salt and work factors for password storage',
      'Explain symmetric vs asymmetric encryption workflows'
    ],
    prerequisites: ['Basic computer science literacy'],
    content: {
      overview: 'Security breaches frequently stem from confusing hashes with reversible encryption or storing credentials without cryptographic salts.',
      sections: [
        {
          heading: '1. One-Way Hashing & Salting',
          body: 'A cryptographic hash is mathematically one-way. For credential storage, specialized slow memory-hard algorithms like Argon2 or bcrypt must be used rather than fast algorithms like MD5 or SHA-256.',
          codeBlock: {
            language: 'bash',
            code: `# Demonstrating deterministic SHA256 output
echo -n "8WHIE_SECURITY" | sha256sum
# Always yields exact 64 hexadecimal characters:
# e14ddc594c16198f828a2a7a40b933396956f1406dc5790fb0d319597e7f7bb1`,
            caption: 'Deterministic cryptographic hash demonstration'
          }
        }
      ]
    },
    securityNote: 'Never roll your own encryption algorithms in production; use vetted, audited libraries like Libsodium or standard OpenSSL implementations.',
    relatedTutorialIds: ['eh-101', 'web-101']
  }
];
