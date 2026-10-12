export interface SecurityTool {
  id: string;
  name: string;
  category: string;
  description: string;
  supportedPlatforms: ('Linux' | 'Windows' | 'macOS')[];
  documentationUrl: string;
  repositoryUrl: string;
  educationalUseCase: string;
  exampleCommand: string;
  license: string;
}

export const TOOLS_CATEGORIES = [
  'All',
  'Network Diagnostics',
  'Traffic Analysis',
  'Security Auditing',
  'Vulnerability Assessment',
  'Linux Utilities',
  'Digital Forensics',
  'Web Security Testing',
  'Privacy Tools',
  'Developer Utilities'
];

export const SECURITY_TOOLS: SecurityTool[] = [
  {
    id: 'nmap',
    name: 'Nmap (Network Mapper)',
    category: 'Network Diagnostics',
    description: 'Premier open-source network discovery and security auditing utility used by network administrators and security auditors worldwide.',
    supportedPlatforms: ['Linux', 'Windows', 'macOS'],
    documentationUrl: 'https://nmap.org/book/man.html',
    repositoryUrl: 'https://github.com/nmap/nmap',
    educationalUseCase: 'Auditing authorized laboratory networks to verify open ports, detect misconfigured services, and inventory network assets.',
    exampleCommand: 'nmap -sS -T4 -p 22,80,443,8080 192.168.1.1',
    license: 'GPLv2'
  },
  {
    id: 'wireshark',
    name: 'Wireshark',
    category: 'Traffic Analysis',
    description: 'The world’s foremost network protocol analyzer. Enables micro-inspection of network activity down to individual packets.',
    supportedPlatforms: ['Linux', 'Windows', 'macOS'],
    documentationUrl: 'https://www.wireshark.org/docs/',
    repositoryUrl: 'https://gitlab.com/wireshark/wireshark',
    educationalUseCase: 'Investigating network latency issues, dissecting TLS handshakes, and analyzing unencrypted protocols in isolated test setups.',
    exampleCommand: 'tshark -i eth0 -f "tcp port 80" -w capture.pcap',
    license: 'GPLv2'
  },
  {
    id: 'tcpdump',
    name: 'tcpdump',
    category: 'Traffic Analysis',
    description: 'A powerful command-line packet analyzer that captures and displays TCP/IP and other packets transmitted over a network.',
    supportedPlatforms: ['Linux', 'macOS'],
    documentationUrl: 'https://www.tcpdump.org/manpages/tcpdump.1.html',
    repositoryUrl: 'https://github.com/the-tcpdump-group/tcpdump',
    educationalUseCase: 'Rapid headless packet capture and troubleshooting on remote Linux servers without a graphical interface.',
    exampleCommand: 'sudo tcpdump -nn -c 100 -i any port 53',
    license: 'BSD-3-Clause'
  },
  {
    id: 'lynis',
    name: 'Lynis',
    category: 'Security Auditing',
    description: 'Battle-tested security auditing tool for Linux, macOS, and UNIX-based systems. Assists with compliance testing (PCI DSS, HIPAA) and system hardening.',
    supportedPlatforms: ['Linux', 'macOS'],
    documentationUrl: 'https://cisofy.com/documentation/lynis/',
    repositoryUrl: 'https://github.com/CISOfy/lynis',
    educationalUseCase: 'Running automated health and hardening checks across Linux servers to detect permission misconfigurations and outdated packages.',
    exampleCommand: 'sudo lynis audit system --quick',
    license: 'GPLv3'
  },
  {
    id: 'nuclei',
    name: 'Nuclei',
    category: 'Vulnerability Assessment',
    description: 'Fast and customizable vulnerability scanner based on simple YAML-based templates created by ProjectDiscovery.',
    supportedPlatforms: ['Linux', 'Windows', 'macOS'],
    documentationUrl: 'https://docs.projectdiscovery.io/tools/nuclei/',
    repositoryUrl: 'https://github.com/projectdiscovery/nuclei',
    educationalUseCase: 'Automating regression testing and reproducible security posture checks against staging web services using declarative templates.',
    exampleCommand: 'nuclei -u https://staging.internal.lab -t cves/ -severity critical,high',
    license: 'MIT'
  },
  {
    id: 'owasp-zap',
    name: 'OWASP ZAP (Zed Attack Proxy)',
    category: 'Web Security Testing',
    description: 'World’s most widely used open-source web application security scanner maintained by the software security community.',
    supportedPlatforms: ['Linux', 'Windows', 'macOS'],
    documentationUrl: 'https://www.zaproxy.org/docs/',
    repositoryUrl: 'https://github.com/zaproxy/zaproxy',
    educationalUseCase: 'Automating dynamic application security testing (DAST) in CI/CD pipelines to intercept web requests and uncover OWASP Top 10 vulnerabilities.',
    exampleCommand: 'zap-cli quick-scan -s xss,sqli https://dev.target.lab',
    license: 'Apache 2.0'
  },
  {
    id: 'fail2ban',
    name: 'Fail2ban',
    category: 'Linux Utilities',
    description: 'Intrusion prevention software framework that protects computer servers from brute-force attacks by monitoring system logs and updating firewall rules.',
    supportedPlatforms: ['Linux'],
    documentationUrl: 'https://www.fail2ban.org/wiki/index.php/MANUAL_0_8',
    repositoryUrl: 'https://github.com/fail2ban/fail2ban',
    educationalUseCase: 'Defending SSH and web services by automatically banning IP addresses that exhibit suspicious authentication failures.',
    exampleCommand: 'sudo fail2ban-client status sshd',
    license: 'GPLv2'
  },
  {
    id: 'ufw',
    name: 'UFW (Uncomplicated Firewall)',
    category: 'Linux Utilities',
    description: 'Program for managing a netfilter firewall designed to be easy to use and maintain on Debian and Ubuntu distributions.',
    supportedPlatforms: ['Linux'],
    documentationUrl: 'https://manpages.ubuntu.com/manpages/jammy/man8/ufw.8.html',
    repositoryUrl: 'https://git.launchpad.net/ufw',
    educationalUseCase: 'Enforcing default-deny ingress network policies on Linux production servers and only permitting required service ports.',
    exampleCommand: 'sudo ufw default deny incoming && sudo ufw allow 22/tcp && sudo ufw enable',
    license: 'GPLv3'
  },
  {
    id: 'autopsy',
    name: 'Autopsy Digital Forensics',
    category: 'Digital Forensics',
    description: 'Premier open-source digital forensics platform and graphical interface to The Sleuth Kit used by law enforcement, military, and corporate investigators.',
    supportedPlatforms: ['Windows', 'Linux', 'macOS'],
    documentationUrl: 'https://www.autopsy.com/support/',
    repositoryUrl: 'https://github.com/sleuthkit/autopsy',
    educationalUseCase: 'Conducting forensic triage on disk images to recover deleted files, analyze web browser history, and extract registry artifacts.',
    exampleCommand: 'autopsy',
    license: 'Apache 2.0'
  },
  {
    id: 'volatility',
    name: 'Volatility Framework',
    category: 'Digital Forensics',
    description: 'The world\'s most widely used memory forensics framework for incident response and malware analysis.',
    supportedPlatforms: ['Linux', 'Windows', 'macOS'],
    documentationUrl: 'https://volatility3.readthedocs.io/',
    repositoryUrl: 'https://github.com/volatilityfoundation/volatility3',
    educationalUseCase: 'Extracting running process trees, network sockets, and DLL injection evidence directly from raw memory dumps.',
    exampleCommand: 'python3 vol.py -f memory.raw windows.pstree',
    license: 'GPLv2'
  },
  {
    id: 'veracrypt',
    name: 'VeraCrypt',
    category: 'Privacy Tools',
    description: 'Free open-source disk encryption software based on TrueCrypt. Delivers plausible deniability and cipher cascading.',
    supportedPlatforms: ['Linux', 'Windows', 'macOS'],
    documentationUrl: 'https://www.veracrypt.fr/en/Documentation.html',
    repositoryUrl: 'https://github.com/veracrypt/VeraCrypt',
    educationalUseCase: 'Creating encrypted containers and partition volumes using AES-256 and Camellia to protect confidential research data at rest.',
    exampleCommand: 'veracrypt --text --create container.hc',
    license: 'Apache 2.0 / TrueCrypt License'
  },
  {
    id: 'gitleaks',
    name: 'Gitleaks',
    category: 'Developer Utilities',
    description: 'Lightweight, high-speed secrets detector for git repositories, files, and directories. Catches hardcoded API keys and tokens.',
    supportedPlatforms: ['Linux', 'Windows', 'macOS'],
    documentationUrl: 'https://github.com/gitleaks/gitleaks#readme',
    repositoryUrl: 'https://github.com/gitleaks/gitleaks',
    educationalUseCase: 'Preventing inadvertent credential leaks into public GitHub repositories by running automated pre-commit hook checks.',
    exampleCommand: 'gitleaks detect --source . -v',
    license: 'MIT'
  },
  {
    id: 'semgrep',
    name: 'Semgrep',
    category: 'Developer Utilities',
    description: 'Fast, lightweight static analysis engine for finding bugs, detecting vulnerabilities, and enforcing code standards.',
    supportedPlatforms: ['Linux', 'macOS', 'Windows'],
    documentationUrl: 'https://semgrep.dev/docs/',
    repositoryUrl: 'https://github.com/semgrep/semgrep',
    educationalUseCase: 'Auditing source code for injection vulnerabilities and insecure cryptography patterns during development.',
    exampleCommand: 'semgrep --config "p/security-audit" src/',
    license: 'LGPL-2.1'
  }
];
