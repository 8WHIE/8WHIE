export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  summary: string;
  category: 'Linux' | 'Networking' | 'Web Security' | 'Forensics' | 'Ethics & Policy';
  author: string;
  publishDate: string;
  readingTime: string;
  tags: string[];
  content: {
    lead: string;
    sections: {
      heading: string;
      paragraphs: string[];
      code?: {
        language: string;
        content: string;
        caption?: string;
      };
    }[];
    conclusion: string;
  };
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'authorized-pentesting-2026',
    title: 'The Blueprint of Authorized Penetration Testing in 2026',
    slug: 'authorized-pentesting-blueprint-2026',
    summary: 'A definitive guide to professional rules of engagement, legal indemnity agreements, non-disclosure compliance, and technical reconnaissance ethics.',
    category: 'Ethics & Policy',
    author: 'Aryan Thakur',
    publishDate: 'Oct 04, 2026',
    readingTime: '6 min read',
    tags: ['Rules of Engagement', 'Legal Compliance', 'Methodology', 'Ethical Hacking'],
    content: {
      lead: 'In the modern threat landscape, the line distinguishing ethical security researchers from malicious actors is neither technical skill nor the tools employed; it is rigorous, legally binding authorization.',
      sections: [
        {
          heading: '1. Establishing Ironclad Rules of Engagement',
          paragraphs: [
            'Before any terminal command is executed or any packet sent, a formal Rules of Engagement (RoE) document must be signed by the asset owner.',
            'The document must explicitly define the in-scope CIDR blocks, explicit exclusions (such as third-party payment gateways and production database replicas), designated communication escalation paths, and emergency freeze triggers.'
          ]
        },
        {
          heading: '2. Handling Out-of-Scope Discoveries Responsibly',
          paragraphs: [
            'During reconnaissance, researchers frequently discover assets that appear connected to the target but lie outside the explicit scope—such as misconfigured staging servers on unlisted cloud subnets.',
            'The ethical standard mandates immediate cessation of testing on that asset and written notification to the client without probing further.'
          ]
        },
        {
          heading: '3. Standard Vulnerability Remediation Template',
          paragraphs: [
            'Reports must never be mere dumps of scanner output. They must provide clear technical descriptions, reproduction steps, CVSS scoring, and concrete code-level remediation advice.'
          ],
          code: {
            language: 'markdown',
            content: `### Vulnerability Finding: Unauthenticated IDOR in User Profile API
- Severity: High (CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:N/A:N)
- Affected Endpoint: GET /api/v1/users/{user_id}/billing
- Remediation: Implement session-backed authorization checks verifying caller ownership before querying database records.`,
            caption: 'Structured finding format excerpt'
          }
        }
      ],
      conclusion: 'Ethics and clear legal contracts protect both the security researcher and the organization being assessed. Strive for technical excellence while upholding uncompromising professional integrity.'
    }
  },
  {
    id: 'linux-hardening-handbook',
    title: 'Linux Server Hardening: From SSH Cryptography to Sysctl Tuning',
    slug: 'linux-server-hardening-handbook',
    summary: 'Essential configuration steps to harden Debian/Ubuntu servers against unauthorized lateral movement and automated credential stuffing.',
    category: 'Linux',
    author: 'Aryan Thakur',
    publishDate: 'Sep 28, 2026',
    readingTime: '8 min read',
    tags: ['Linux', 'SSH Hardening', 'Sysctl', 'Defensive Security'],
    content: {
      lead: 'Securing a newly provisioned Linux server requires stripping out default insecure configurations, enforcing public key cryptography, and hardening kernel networking parameters.',
      sections: [
        {
          heading: '1. SSH Daemon Hardening Discipline',
          paragraphs: [
            'Password authentication should be universally disabled in favor of modern Ed25519 public key cryptography. Root login should be completely forbidden via SSH.',
            'Edit /etc/ssh/sshd_config and verify the following directives:'
          ],
          code: {
            language: 'text',
            content: `PermitRootLogin no
PasswordAuthentication no
PubkeyAuthentication yes
KbdInteractiveAuthentication no
X11Forwarding no
MaxAuthTries 3
AllowAgentForwarding no`,
            caption: 'Hardened sshd_config security parameters'
          }
        },
        {
          heading: '2. Kernel Sysctl Network Hardening',
          paragraphs: [
            'Preventing SYN flood attacks, ICMP redirects, and IP spoofing starts at the Linux kernel layer via /etc/sysctl.d/99-security.conf.'
          ],
          code: {
            language: 'bash',
            content: `# Disable IP packet forwarding (unless configured as router)
net.ipv4.ip_forward = 0

# Enable TCP SYN Cookies
net.ipv4.tcp_syncookies = 1

# Ignore ICMP broadcast requests
net.ipv4.icmp_echo_ignore_broadcasts = 1

# Disable ICMP redirect acceptance
net.ipv4.conf.all.accept_redirects = 0
net.ipv6.conf.all.accept_redirects = 0`,
            caption: 'Essential kernel sysctl defense parameters'
          }
        }
      ],
      conclusion: 'Defense-in-depth requires multiple complementary layers: network firewalling, strict SSH key policies, automated log monitoring with Fail2ban, and routine security audits using Lynis.'
    }
  },
  {
    id: 'tcp-handshake-deepdive',
    title: 'Demystifying the TCP 3-Way Handshake & State Machine',
    slug: 'demystifying-tcp-3-way-handshake',
    summary: 'A deep architectural dive into sequence numbers, acknowledgement numbers, TCP flags, and how stateful firewalls track connections.',
    category: 'Networking',
    author: 'Aryan Thakur',
    publishDate: 'Sep 15, 2026',
    readingTime: '7 min read',
    tags: ['Networking', 'TCP/IP', 'Wireshark', 'Packet Analysis'],
    content: {
      lead: 'Transmission Control Protocol (TCP) powers the modern web. Understanding how connections are negotiated, synchronized, and terminated is vital for network security engineers.',
      sections: [
        {
          heading: '1. Step-by-Step Handshake Mechanics',
          paragraphs: [
            'Step 1 (SYN): The initiator picks an Initial Sequence Number (ISN) and sends a packet with the SYN flag set.',
            'Step 2 (SYN-ACK): The recipient replies with its own ISN, sets the SYN and ACK flags, and acknowledges the initiator\'s sequence number + 1.',
            'Step 3 (ACK): The initiator sends a final ACK packet. Both sides are now in the ESTABLISHED state.'
          ]
        },
        {
          heading: '2. How Stateful Firewalls Use TCP State Tracking',
          paragraphs: [
            'Unlike stateless access control lists that examine packets in total isolation, stateful firewalls (such as Linux conntrack) track the conversation state. Packets marked with ACK or PSH flags are dropped if they do not belong to an active, properly negotiated handshake.'
          ],
          code: {
            language: 'bash',
            content: `# Inspecting active tracked connections on Linux
sudo conntrack -L -p tcp`,
            caption: 'Inspecting netfilter conntrack table'
          }
        }
      ],
      conclusion: 'Packet dissection transforms abstract networking models into tangible reality. Inspecting real pcap dumps in Wireshark is the fastest way to achieve networking mastery.'
    }
  },
  {
    id: 'owasp-broken-access-control',
    title: 'Conquering Broken Access Control: The #1 Web Vulnerability',
    slug: 'conquering-broken-access-control-owasp',
    summary: 'Why broken object level authorization and privilege escalation remain the most prevalent flaws in modern REST and GraphQL APIs.',
    category: 'Web Security',
    author: 'Aryan Thakur',
    publishDate: 'Aug 29, 2026',
    readingTime: '9 min read',
    tags: ['Web Security', 'OWASP Top 10', 'BOLA', 'API Security'],
    content: {
      lead: 'Broken Access Control currently holds the top position in the OWASP Top 10. While automated tools can identify common injection flaws, access control logic requires human architectural diligence.',
      sections: [
        {
          heading: '1. Insecure Direct Object References (IDOR)',
          paragraphs: [
            'IDOR occurs when an application uses client-supplied input to access an object directly without verifying the caller\'s permission to access that specific entity.',
            'An attacker alters an ID parameter in the URL from user_id=104 to user_id=105, viewing another customer\'s sensitive financial records.'
          ]
        },
        {
          heading: '2. The Architectural Remedy',
          paragraphs: [
            'Access control policies must be enforced at the data layer, not merely in the presentation interface or client-side JavaScript.',
            'Always scope queries by the authenticated user principal extracted from a cryptographically verified session token.'
          ],
          code: {
            language: 'typescript',
            content: `// SECURE PATTERN: Enforce tenant ownership at query time
export async function getDocument(req: Request, docId: string) {
  const currentUserId = req.session.userId;
  
  // NEVER: db.find({ id: docId }) without checking owner!
  const document = await db.findFirst({
    where: {
      id: docId,
      ownerId: currentUserId // Guarantees isolation
    }
  });

  if (!document) {
    throw new NotFoundError("Document not found");
  }
  return document;
}`,
            caption: 'Scoped query preventing IDOR in TypeScript'
          }
        }
      ],
      conclusion: 'Never trust user-supplied identifiers without verifying ownership against the authenticated session token. Default to deny all access.'
    }
  }
];
