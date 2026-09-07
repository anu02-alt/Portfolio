// ─────────────────────────────────────────────────────────────
// EDIT THIS FILE to update everything on the site.
// Anything marked TODO is a placeholder — replace with your real info.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Anushka Shinde',
  // Rotates in the hero "status line"
  roles: [
    'AML / Financial Crime Compliance',
    'FP&A',
    'Accounting & Controllership',
  ],
  location: 'Boston, MA',
  status: 'Open to full-time opportunities',
  summary:
    'Finance and accounting professional with experience in financial analysis, reporting, and reconciliations across corporate and international trade settings. Strong foundation in GAAP accounting and financial statement analysis, built through a Bachelor\u2019s in Accounting & Finance, MS Finance coursework at Boston University, and hands-on financial modeling and reporting project work.',
  email: 'shindeanushka29@gmail.com',
  // TODO: your phone number isn't included on the public site by default —
  // add it here (and to the Contact section) if you'd like it visible.
  linkedin: 'https://www.linkedin.com/in/anushka-shinde02/',
  github: 'https://github.com/anu02-alt',
  resumeFile: '/resume.pdf', // TODO: drop your resume PDF into /public as resume.pdf
  avatar: '/photo.jpg',
};

export const experience = [
  {
    org: 'Deloitte Touche Tohmatsu LLP, Mumbai, India',
    role: 'Forensic and Financial Crime Executive',
    period: 'Jun 2024 — Jun 2025',
    bullets: [
      'Performed account reconciliations and financial record reviews across concurrent client engagements, identifying and resolving discrepancies; prepared recurring financial reports and analytical deliverables for 10+ senior stakeholders under tight deadlines.',
      'Maintained accurate financial records and data across multiple client accounts using advanced Excel (Pivot Tables, VLOOKUP) and Python (Pandas); built automated financial reporting and data validation workflows to improve accuracy, reduce manual effort, and support timely delivery of financial outputs.',
      'Collaborated across finance, compliance, and operations teams to gather financial data, resolve reporting discrepancies, and provide analytical support across multiple concurrent workstreams; managed competing priorities under deadline while maintaining high standards of accuracy and attention to detail.',
    ],
  },
  {
    org: 'Sun Impex International, Mumbai, India',
    role: 'Financial Analyst',
    period: 'Aug 2022 — May 2024',
    bullets: [
      'Tracked, reconciled, and maintained detailed records for invoices and payments across import/export transactions, working closely with vendors and internal stakeholders to resolve discrepancies and keep financial records accurate and up to date.',
      'Analyzed import/export transaction costs, duties, and pricing trends across multiple product lines to support margin visibility, informed pricing decisions, and more effective cost planning for ongoing international trade operations.',
      'Built and maintained detailed Excel-based tracking sheets to monitor payment status, outstanding balances, and pricing data across international trade transactions, helping streamline reporting and reduce manual follow-up.',
    ],
  },
  {
    org: 'S.I.E.S College of Commerce, Mumbai, India',
    role: 'Volunteer, Placement Cell',
    period: 'Jul 2023 — Jul 2024',
    bullets: [
      'Coordinated 10+ campus placement drives as primary liaison for 200+ students, managing relationships across employer and university stakeholders and reducing event turnaround time by 20% through structured process improvements.',
    ],
  },
];

export const certifications = [
  { name: 'Anti-Money Laundering (AML)', issuer: '', year: '' },
  { name: 'Business Relationship Management', issuer: '', year: '' },
  { name: 'Non-Compliance Audit', issuer: '', year: '' },
];

export const education = [
  {
    school: 'Boston University, Questrom School of Business',
    degree: 'M.S. in Finance',
    period: 'Sep 2025 — Jul 2026',
    notes: [
      'Relevant coursework: Financial Statement Analysis & Investor Decisions, Data Analytics in Finance, Fixed Income Markets',
    ],
  },
  {
    school: 'Mumbai University, India',
    degree: 'Bachelor\u2019s in Accounting & Finance',
    period: 'Aug 2021 — May 2024',
    notes: [],
  },
];

export const projects = [
  {
    title: 'AML Transaction Monitoring & Reconciliation Pipeline',
    description:
      'An end-to-end AML transaction-monitoring system combining rule-based typologies with an Isolation Forest machine-learning model to flag anomalous activity, built on a Python (Pandas) and Java data pipeline that processed 500 financial records. Produced automated Excel reporting packages with variance flags, performance summaries, and fact-based recommendations.',
    tags: ['AML', 'Python', 'Isolation Forest', 'Java', 'Automation'],
    url: 'https://github.com/anu02-alt/Aml-transaction-monitoring',
  },
  {
    title: 'Apple Inc. Financial Statement Analysis and Valuation',
    description:
      'A fully dynamic 5-year DCF and pro forma financial model for AAPL built in Python, analyzing key business and financial performance drivers to develop multi-scenario projections. Sensitivity analysis across discount rate (9\u201311%) and terminal growth (2\u20133%) produced an intrinsic value range of $86\u2013$114 vs. a market price of $259.',
    tags: ['Python', 'DCF', 'Equity Valuation', 'Sensitivity Analysis'],
    url: '', // TODO
  },
  {
    title: 'Study on Financial Controls and Process Improvement',
    description:
      'Analyzed 10+ case studies and 50+ survey responses to identify systemic accounting control weaknesses and reporting gaps, synthesizing findings into a structured report with GAAP-aligned process improvement recommendations.',
    tags: ['GAAP', 'Process Improvement', 'Research'],
    url: '', // TODO
  },
];

export const skills = {
  'Accounting & Financial Operations': [
    'GAAP Accounting',
    'Account Reconciliation',
    'Financial Statement Analysis',
    'Variance Analysis',
    'Data Validation',
    'Financial Reporting',
  ],
  'Analytics & Data': [
    'Large Dataset Analysis',
    'Automated Reporting',
    'Dashboard Development',
    'Financial Modelling',
  ],
  Tools: [
    'Excel (Advanced, Pivot Tables, VLOOKUP, Macros)',
    'Python (Pandas)',
    'Java',
    'SQL',
    'PowerPoint',
  ],
};
