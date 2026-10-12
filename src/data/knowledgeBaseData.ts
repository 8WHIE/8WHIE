export interface DocSection {
  id: string;
  heading: string;
  body: string;
  code?: {
    language: string;
    code: string;
    caption?: string;
  };
}

export interface DocArticle {
  id: string;
  categoryId: string;
  categoryTitle: string;
  title: string;
  summary: string;
  lastUpdated: string;
  readingTime: string;
  sections: DocSection[];
}

export const KNOWLEDGE_BASE_ARTICLES: DocArticle[] = [
  {
    id: 'kb-responsible-disclosure',
    categoryId: 'ethics-governance',
    categoryTitle: 'Ethics & Governance',
    title: '8WHIE Standard for Responsible Vulnerability Disclosure',
    summary: 'Universal framework for coordinating vulnerability reports with vendors, avoiding harm, and protecting researcher legal rights.',
    lastUpdated: 'October 2026',
    readingTime: '5 min read',
    sections: [
      {
        id: 'principle-first-do-no-harm',
        heading: '1. The Principle of Non-Destructive Testing',
        body: 'Security research must never disrupt service availability, corrupt user data, or exfiltrate private records beyond the minimal proof required to demonstrate impact. If a vulnerability allows data access, verifying access to a single test record is sufficient; downloading entire database dumps violates both ethics and law.'
      },
      {
        id: 'disclosure-timeline',
        heading: '2. Standard 90-Day Coordinated Disclosure Window',
        body: 'Security researchers should communicate findings through the organization’s designated security.txt or vulnerability disclosure policy (VDP). Grant organizations a reasonable grace period (typically 90 calendar days) to deploy patches before publishing technical details.',
        code: {
          language: 'markdown',
          code: `## RFC 9116 security.txt Example
Contact: mailto:security@target.domain
Expires: 2027-12-31T23:59:59.000Z
Preferred-Languages: en
Policy: https://target.domain/security-policy`,
          caption: 'Standard RFC 9116 security.txt file format'
        }
      },
      {
        id: 'legal-safeguards',
        heading: '3. Legal Safeguards for Researchers',
        body: 'Always confirm that the target organization has an active Safe Harbor commitment under the DOJ Computer Fraud and Abuse Act (CFAA) policy revisions or bug bounty platform agreements before initiating testing.'
      }
    ]
  },
  {
    id: 'kb-linux-file-permissions',
    categoryId: 'linux-architecture',
    categoryTitle: 'Linux Architecture',
    title: 'Linux Permissions, SUID/SGID, and POSIX ACLs',
    summary: 'Comprehensive reference for octal permissions, special bits (SUID, SGID, Sticky bit), and extended Access Control Lists.',
    lastUpdated: 'September 2026',
    readingTime: '7 min read',
    sections: [
      {
        id: 'octal-notation',
        heading: '1. Octal Permission Mapping',
        body: 'Standard Linux permissions apply to Owner, Group, and Others. Read (4), Write (2), Execute (1). 755 translates to rwxr-xr-x: owner full control, group and others read/execute.',
        code: {
          language: 'bash',
          code: `# Checking file permissions and ownership in terminal
ls -la /etc/shadow
# Output: -rw-r----- 1 root shadow 1240 Oct 1 09:20 /etc/shadow`,
          caption: 'Standard permission string breakdown'
        }
      },
      {
        id: 'suid-sgid-bits',
        heading: '2. Auditing SUID and SGID Binaries',
        body: 'The SUID bit (octal 4000) causes an executable to run with the privileges of the file owner (often root) rather than the executing user. Misconfigured SUID binaries on administrative systems can lead to privilege escalation.',
        code: {
          language: 'bash',
          code: `# Discover all SUID binaries on the filesystem
find / -perm -u=s -type f 2>/dev/null`,
          caption: 'Locating SUID executables across the root filesystem'
        }
      },
      {
        id: 'extended-acls',
        heading: '3. POSIX Extended Access Control Lists (getfacl / setfacl)',
        body: 'When standard rwx permissions are insufficient for multi-role environments, POSIX ACLs provide granular access to specific users and groups without changing ownership.'
      }
    ]
  },
  {
    id: 'kb-networking-subnetting',
    categoryId: 'networking-protocols',
    categoryTitle: 'Networking Protocols',
    title: 'Subnetting Cheat Sheet & CIDR Notation Deep Dive',
    summary: 'Master IPv4 subnet masks, calculating network and broadcast addresses, usable hosts, and CIDR prefix ranges.',
    lastUpdated: 'September 2026',
    readingTime: '6 min read',
    sections: [
      {
        id: 'cidr-fundamentals',
        heading: '1. Classless Inter-Domain Routing (CIDR)',
        body: 'CIDR notation uses a slash followed by the count of leading continuous bits in the subnet mask. For instance, /24 indicates 24 network bits and 8 host bits (32 - 24 = 8). Usable hosts equals 2^8 - 2 = 254 hosts (excluding network and broadcast addresses).',
        code: {
          language: 'text',
          code: `/30: 255.255.255.252 -> 4 IPs (2 usable hosts, point-to-point links)
/28: 255.255.255.240 -> 16 IPs (14 usable hosts)
/24: 255.255.255.0   -> 256 IPs (254 usable hosts)
/16: 255.255.0.0     -> 65,536 IPs (65,534 usable hosts)`,
          caption: 'Common CIDR subnet mask allocations'
        }
      },
      {
        id: 'rfc1918-private-ranges',
        heading: '2. RFC 1918 Private IPv4 Address Blocks',
        body: 'Private network addresses are not routable across the public global internet:\n- 10.0.0.0/8 (10.0.0.0 – 10.255.255.255)\n- 172.16.0.0/12 (172.16.0.0 – 172.31.255.255)\n- 192.168.0.0/16 (192.168.0.0 – 192.168.255.255)'
      }
    ]
  },
  {
    id: 'kb-cors-xss-defense',
    categoryId: 'web-defense',
    categoryTitle: 'Web Security Defense',
    title: 'Modern Content Security Policy (CSP) & XSS Mitigation',
    summary: 'Eliminate Cross-Site Scripting (XSS) using strict CSP headers, nonce-based script execution, and contextual sanitization.',
    lastUpdated: 'October 2026',
    readingTime: '8 min read',
    sections: [
      {
        id: 'anatomy-of-csp',
        heading: '1. Content Security Policy Header Architecture',
        body: 'CSP is an HTTP response header that restricts the resources (scripts, styles, images, iframes) that browser user-agents are allowed to load for a given page.',
        code: {
          language: 'text',
          code: `Content-Security-Policy: default-src 'self'; script-src 'self' 'nonce-rAnd0m123'; object-src 'none'; base-uri 'self'; frame-ancestors 'none';`,
          caption: 'Hardened Content Security Policy header specification'
        }
      },
      {
        id: 'why-sanitization-matters',
        heading: '2. Context-Aware Output Encoding',
        body: 'Relying exclusively on regex filters or blacklists for HTML sanitization is notoriously prone to bypass. Always employ established DOMPurify sanitization libraries and context-aware templating engines that encode by default.'
      }
    ]
  }
];
