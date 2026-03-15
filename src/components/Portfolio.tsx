import { motion } from 'framer-motion'
import {
  Mail, Phone, MapPin, ExternalLink,
  Briefcase, Layers, Database, Workflow, MonitorSmartphone
} from 'lucide-react'
import styles from './Portfolio.module.css'

const skills = [
  'Appian Low-Code Development',
  'Power Apps Canvas Apps',
  'Workflow Design & Automation',
  'Appian SAIL Interfaces',
  'Records & Data Modeling',
  'REST / SOAP Integrations',
  'SQL Server / MySQL / DB2',
  'Mobile & Web Usability',
  'Testing & Troubleshooting',
  'Agile / Scrum / Kanban',
]

const strengths = [
  {
    icon: <Workflow size={20} />,
    title: 'Complex Workflow Delivery',
    text: 'Designed and implemented enterprise-grade business process workflows across Appian and Microsoft Power Platform environments.',
  },
  {
    icon: <MonitorSmartphone size={20} />,
    title: 'High-Performance Canvas Apps',
    text: 'Built efficient Power Apps Canvas Apps optimized for heavy usage, responsive behavior, fast load times, and reliable user experience.',
  },
  {
    icon: <Database size={20} />,
    title: 'Integration & Data Expertise',
    text: 'Connected applications with SAP, Workday, SharePoint, SQL Server, MySQL, DB2, REST APIs, SOAP services, and enterprise databases.',
  },
  {
    icon: <Layers size={20} />,
    title: 'End-to-End Delivery',
    text: 'Translated requirements into production-ready solutions through analysis, design, development, testing, support, and continuous enhancement.',
  },
]

const experience = [
  {
    role: 'Senior Appian Developer',
    company: 'Medline Industries, LP',
    period: '2022 – Present',
    bullets: [
      'Lead design, development, testing, troubleshooting, and support of enterprise workflow applications using Appian and Microsoft Power Platform.',
      'Build and optimize Appian applications using process models, SAIL interfaces, records, expression rules, web APIs, and reusable components.',
      'Develop Power Apps Canvas Apps for finance-related processes with a focus on efficient performance, scalability, responsive UI behavior, and heavy-usage scenarios.',
      'Create and maintain SQL-backed objects, reporting logic, and integrations that support business operations and application usability.',
      'Partner with business stakeholders, QA teams, and developers to transform requirements into functional low-code solutions in Agile delivery models.',
    ],
  },
  {
    role: 'Senior Appian Developer',
    company: 'ELXR Technologies (Client: Halliburton Services)',
    period: '2021 – 2022',
    bullets: [
      'Developed enterprise Appian applications from scratch for business workflows, including SAIL forms, records, rules, process models, and integrations.',
      'Served as team lead for application delivery, solution discussions, release planning, and stakeholder collaboration.',
      'Designed user-friendly interfaces and validation logic to improve data quality and overall workflow usability.',
    ],
  },
  {
    role: 'Appian Developer',
    company: 'ELXR Technologies (Client: Freddie Mac)',
    period: '2020 – 2021',
    bullets: [
      'Built Appian workflow components, business rules, and integration services for enterprise process automation.',
      'Supported unit testing, issue resolution, deployments, and cross-environment maintenance.',
    ],
  },
]

const valueProps = [
  'Appian developer with strong workflow and integration background',
  'Power Apps Canvas Apps specialist with efficient heavy-performance design experience',
  'Strong foundation in SQL, enterprise data handling, and low-code architecture',
  'Comfortable collaborating with business, QA, DevOps, and cross-functional teams',
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
}

export default function Portfolio() {
  return (
    <div className={styles.root}>

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <motion.div
            className={styles.heroLeft}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.badgeRow}>
              <span className={styles.badge}>Appian</span>
              <span className={styles.badge}>Power Apps</span>
              <span className={styles.badge}>Low-Code Solutions</span>
            </div>

            <h1 className={styles.heroName}>Sri Harsha Chebrolu</h1>

            <p className={styles.heroSub}>
              Senior low-code developer with 7+ years of experience building Appian
              applications and Power Apps Canvas Apps for enterprise business processes,
              workflow automation, integrations, and performance-focused user experiences.
            </p>

            <div className={styles.contactRow}>
              <span><MapPin size={15} /> Lake Zurich, IL</span>
              <span><Phone size={15} /> 571-279-9045</span>
              <span><Mail size={15} /> harsha.chebrolu@gmail.com</span>
              <span><Briefcase size={15} /> Open to Recruiter Review</span>
            </div>

            <div className={styles.btnRow}>
              <a href="mailto:harsha.chebrolu@gmail.com" className={styles.btnPrimary}>Contact Me</a>
              <a href="#" className={styles.btnOutline}>Download Resume</a>
            </div>
          </motion.div>

          <motion.div
            className={styles.heroRight}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className={styles.photoCard}>
              <div className={styles.avatar}>HC</div>
              <h2 className={styles.photoTitle}>Professional Photo Area</h2>
              <p className={styles.photoDesc}>
                Replace the placeholder with your headshot for a stronger recruiter impression.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── STRENGTHS ── */}
      <section className={styles.section}>
        <p className={styles.label}>Core Expertise</p>
        <h2 className={styles.sectionTitle}>What recruiters should notice first</h2>
        <div className={styles.strengthsGrid}>
          {strengths.map((s, i) => (
            <motion.div
              key={s.title}
              className={styles.strengthCard}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className={styles.iconBox}>{s.icon}</div>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardText}>{s.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section className={styles.skillsBg}>
        <div className={styles.skillsInner}>
          <div>
            <p className={styles.label}>Skills</p>
            <h2 className={styles.sectionTitle}>Low-code, integration & performance</h2>
            <div className={styles.skillBadges}>
              {skills.map((sk) => (
                <span key={sk} className={styles.skillBadge}>{sk}</span>
              ))}
            </div>
          </div>
          <motion.div
            className={styles.valueCard}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className={styles.label}>Value Profile</p>
            <div className={styles.valueList}>
              {valueProps.map((v) => (
                <div key={v} className={styles.valueItem}>
                  <div className={styles.dot} />
                  <span>{v}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section className={styles.section}>
        <p className={styles.label}>Experience</p>
        <h2 className={styles.sectionTitle}>Professional experience</h2>
        <div className={styles.expList}>
          {experience.map((job, i) => (
            <motion.div
              key={job.company}
              className={styles.expCard}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className={styles.expHeader}>
                <div>
                  <h3 className={styles.expRole}>{job.role}</h3>
                  <p className={styles.expCompany}>{job.company}</p>
                </div>
                <span className={styles.expPeriod}>{job.period}</span>
              </div>
              <ul className={styles.bulletList}>
                {job.bullets.map((b) => (
                  <li key={b} className={styles.bulletItem}>
                    <div className={styles.dot} />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── FOOTER CTA ── */}
      <section className={styles.footerBg}>
        <div className={styles.footerInner}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className={styles.labelLight}>Recruiter Snapshot</p>
            <h2 className={styles.footerTitle}>Appian + Power Apps + enterprise delivery</h2>
            <p className={styles.footerDesc}>
              This site is designed to give recruiters a fast, credible overview of
              hands-on low-code experience across Appian, Power Apps Canvas Apps,
              integrations, workflow design, testing, and enterprise support.
            </p>
          </motion.div>
          <motion.div
            className={styles.darkCard}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className={styles.darkCardTitle}>Next recommended upgrades</h3>
            <ol className={styles.upgradeList}>
              <li>Add your professional headshot.</li>
              <li>Link the resume download button to your final PDF resume.</li>
              <li>Add LinkedIn and GitHub links for stronger credibility.</li>
              <li>Publish with HTTPS and a custom domain.</li>
            </ol>
            <a href="#" className={styles.btnLight}>
              View Resume <ExternalLink size={14} />
            </a>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
