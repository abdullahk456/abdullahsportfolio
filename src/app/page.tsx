import styles from "./page.module.css";
import TypewriterText from "./components/TypewriterText";
import CounterAnimation from "./components/CounterAnimation";
import AnimatedSection from "./components/AnimatedSection";
import { HiLocationMarker } from "react-icons/hi";
import { HiMail } from "react-icons/hi";

const designCategories = [
  {
    title: "Social Media Graphics",
    description:
      "Clean, scroll-stopping graphics for Islamic reminders, announcements, campaigns, and community updates.",
    // TODO: Replace designCardImage placeholder with real design samples when available
    deliverables: ["Instagram posts", "Carousels", "Story graphics", "Quote posts"],
  },
  {
    title: "Islamic Educational Posts",
    description:
      "Visual content that makes Islamic concepts easier to understand, remember, and share.",
    deliverables: ["Lesson graphics", "Reminder posts", "Classroom visuals", "Educational carousels"],
  },
  {
    title: "Event Flyers & Promotions",
    description:
      "Flyers and promotional assets for lectures, halaqahs, school events, fundraisers, and community programs.",
    deliverables: ["Event flyers", "Digital posters", "Registration graphics", "Promo slides"],
  },
  {
    title: "Branding / Logos",
    description:
      "Simple and meaningful brand visuals for Islamic projects, content pages, and community initiatives.",
    deliverables: ["Logo concepts", "Color direction", "Typography", "Brand assets"],
  },
  {
    title: "Video Thumbnails & Reel Covers",
    description:
      "Thumbnails and covers that make Islamic content look polished, clear, and clickable.",
    deliverables: ["YouTube thumbnails", "Reel covers", "Title cards", "Series covers"],
  },
  {
    title: "Short-Form Video Content",
    description:
      "Short-form visual storytelling with typography, pacing, editing, and Islamic messaging.",
    deliverables: ["Reels", "Shorts", "Captions", "Motion graphics", "Social edits"],
  },
];

const videos = [
  { id: "NpzZrUSOccI", url: "https://www.youtube.com/watch?v=NpzZrUSOccI&t=38s", format: "Long Form" },
  { id: "7uaJ7Gk33Ek", url: "https://www.youtube.com/shorts/7uaJ7Gk33Ek",        format: "Short"     },
  { id: "iFP4Qer5bXs", url: "https://www.youtube.com/shorts/iFP4Qer5bXs",        format: "Short"     },
  { id: "YlQHRKG8KgQ", url: "https://www.youtube.com/watch?v=YlQHRKG8KgQ&t=7s",  format: "Long Form" },
  { id: "dNg4apX8NKY", url: "https://www.youtube.com/shorts/dNg4apX8NKY",        format: "Short"     },
  { id: "WWj8RVfgZRg", url: "https://www.youtube.com/shorts/WWj8RVfgZRg",        format: "Short"     },
];

const projects = [
  {
    org: "Imaan for Jannah",
    role: "Content Designer / Creator",
    work: "Social media graphics, faith reminders, short-form edits, content layouts",
    tools: "Premiere, Canva, CapCut",
    purpose: "Faith-based outreach and Islamic reminders for online audiences",
    result: "Built a consistent visual identity for a growing Islamic content platform",
  },
  {
    org: "Eden Gardens",
    role: "Graphic & Video Support",
    work: "Event graphics, promotional content, short-form videos",
    tools: "Premiere, Canva, CapCut",
    purpose: "Promote faith-based community events and programs",
    result: "Created design assets and edits for Muslim community events",
  },
  {
    org: "PMI",
    role: "Content Creator",
    work: "Branded graphics, social posts, community-focused visuals",
    tools: "Canva, Illustrator",
    purpose: "Support organizational outreach and digital presence",
    result: "Helped present community initiatives in a cleaner, more engaging way",
  },
  {
    org: "Drexel Muslim Alumni",
    role: "Creative Volunteer",
    work: "Event flyers, social posts, alumni community graphics",
    tools: "Canva",
    purpose: "Support Muslim alumni engagement and event communication",
    result: "Created visuals for alumni-centered Muslim community work",
  },
];

export default function Home() {
  return (
    <div className={styles.page}>

      {/* ── Hero ─────────────────────────────────────────── */}
      <section
        id="hero"
        className={styles.heroSection}
        style={{
          backgroundImage: "url('/backgroundcolor/herosection-portfolio.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#272a27",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className={styles.heroContainer}>
          <div className={styles.heroTitleWrapper}>
            <TypewriterText className={styles.heroTitle} />
          </div>

          <p className={styles.heroSubtitle}>
            Social media graphics · Event flyers · Educational posts · Branding · Short-form video
          </p>

          <div className={styles.heroContact} dir="ltr">
            <div className={styles.contactItem}>
              <HiLocationMarker className={styles.icon} />
              <span>PA / NJ — Worldwide</span>
            </div>
            <div className={styles.contactItem}>
              <HiMail className={styles.icon} />
              <a href="mailto:akhalid200311@gmail.com" className={styles.emailLink}>
                akhalid200311@gmail.com
              </a>
            </div>
          </div>

          <div className={styles.heroCta}>
            <a href="#design" className={styles.heroCtaBtn}>
              View Design Work
            </a>
            <a href="#videos" className={styles.heroCtaBtnOutline}>
              Watch My Work
            </a>
          </div>
        </div>
      </section>

      {/* ── Graphic Design Portfolio ──────────────────────── */}
      <AnimatedSection>
        <section id="design" className={styles.designSection}>
          <div className={styles.designContainer}>
            <div className={styles.designHeader}>
              <h2 className={styles.designTitle}>Graphic Design Portfolio</h2>
              <p className={styles.designSubtitle}>
                Faith-based visuals designed for social media, Islamic education, community events,
                and Muslim organizations.
              </p>
            </div>

            <div className={styles.designGrid}>
              {designCategories.map((cat) => (
                <div key={cat.title} className={styles.designCard}>
                  <div className={styles.designCardAccent} />
                  <h3 className={styles.designCardCategory}>{cat.title}</h3>
                  <p className={styles.designCardDesc}>{cat.description}</p>
                  <div className={styles.designCardDeliverablesList}>
                    {cat.deliverables.map((d) => (
                      <span key={d} className={styles.designCardDeliverable}>
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ── Organizations Bar ─────────────────────────────── */}
      <AnimatedSection>
        <section className={styles.brandsSection}>
          <div className={styles.brandsContainer}>
            <div className={styles.brandLogo}>PMI</div>
            <div className={styles.brandSeparator}></div>
            <div className={styles.brandLogo}>IMAAN FOR JANNAH</div>
            <div className={styles.brandSeparator}></div>
            <div className={styles.brandLogo}>EDEN GARDENS</div>
            <div className={styles.brandSeparator}></div>
            <div className={styles.brandLogo}>DREXEL MUSLIM ALUMNI</div>
          </div>
        </section>
      </AnimatedSection>

      {/* ── My Work (video portfolio) ─────────────────────── */}
      <AnimatedSection>
        <section id="videos" className={styles.videosSection}>
          <div className={styles.videosContainer}>
            <div className={styles.videosHeader}>
              <h2 className={styles.videosTitle}>My Work</h2>
              <p className={styles.videosSubtitle}>
                Long-form and short-form visual content — Islamic education, community storytelling,
                and faith-based media.
              </p>
            </div>

            <div className={styles.vidGrid}>
              {videos.map((v) => (
                <a
                  key={v.id}
                  href={v.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.vidCard}
                >
                  <div className={styles.vidThumbWrap}>
                    <img
                      src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`}
                      alt={`${v.format} video`}
                      className={styles.vidThumb}
                    />
                    <div className={styles.vidOverlay}>
                      <div className={styles.vidPlayBtn}>
                        <svg viewBox="0 0 24 24" fill="currentColor" className={styles.vidPlayArrow}>
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                    <span className={styles.vidFormatBadge}>{v.format}</span>
                  </div>
                </a>
              ))}
            </div>

            <div className={styles.skillsTags}>
              {["Typography", "Motion", "Pacing", "Islamic Content", "Visual Composition"].map(
                (tag) => (
                  <span key={tag} className={styles.skillTag}>
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ── Project Work / Case Studies ───────────────────── */}
      <AnimatedSection>
        <section id="projects" className={styles.projectsSection}>
          <div className={styles.projectsContainer}>
            <div className={styles.projectsHeader}>
              <h2 className={styles.projectsTitle}>Project Work</h2>
              <p className={styles.projectsSubtitle}>
                Selected faith-based creative work across Islamic content, education, events, and
                community outreach.
              </p>
            </div>

            <div className={styles.projectsGrid}>
              {projects.map((p) => (
                <div key={p.org} className={styles.projectCard}>
                  <h3 className={styles.projectOrgName}>{p.org}</h3>
                  <div className={styles.projectDivider} />
                  <div className={styles.projectField}>
                    <span className={styles.projectFieldLabel}>Role</span>
                    <span className={styles.projectFieldValue}>{p.role}</span>
                  </div>
                  <div className={styles.projectField}>
                    <span className={styles.projectFieldLabel}>Work Created</span>
                    <span className={styles.projectFieldValue}>{p.work}</span>
                  </div>
                  <div className={styles.projectField}>
                    <span className={styles.projectFieldLabel}>Tools</span>
                    <span className={styles.projectFieldValue}>{p.tools}</span>
                  </div>
                  <div className={styles.projectField}>
                    <span className={styles.projectFieldLabel}>Purpose</span>
                    <span className={styles.projectFieldValue}>{p.purpose}</span>
                  </div>
                  <div className={styles.projectField}>
                    <span className={styles.projectFieldLabel}>Result / Impact</span>
                    <span className={styles.projectFieldValue}>{p.result}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ── Visual Stories Gallery ────────────────────────── */}
      <AnimatedSection>
        <section id="gallery" className={styles.gallerySection}>
          <div className={styles.galleryContainer}>
            <h2 className={styles.galleryTitle}>Visual Stories Gallery</h2>
            <p className={styles.gallerySubtitle}>
              Video production &amp; visual storytelling projects
            </p>

            <div className={styles.galleryGrid}>
              <div className={`${styles.galleryItem} ${styles.item1}`}>
                <a href="https://www.youtube.com/watch?v=NpzZrUSOccI&t=38s" target="_blank" rel="noopener noreferrer">
                  <img src="/cardimages/project1.jpg" alt="Project 1" className={styles.galleryImage} />
                </a>
              </div>
              <div className={`${styles.galleryItem} ${styles.item2}`}>
                <a href="https://www.youtube.com/shorts/7uaJ7Gk33Ek" target="_blank" rel="noopener noreferrer">
                  <img src="/cardimages/project2.jpg" alt="Project 2" className={styles.galleryImage} />
                </a>
              </div>
              <div className={`${styles.galleryItem} ${styles.item3}`}>
                <a href="https://www.youtube.com/shorts/iFP4Qer5bXs" target="_blank" rel="noopener noreferrer">
                  <img src="/cardimages/project3.jpg" alt="Project 3" className={styles.galleryImage} />
                </a>
              </div>
              <div className={`${styles.galleryItem} ${styles.item4}`}>
                <a href="https://www.youtube.com/watch?v=YlQHRKG8KgQ&t=7s" target="_blank" rel="noopener noreferrer">
                  <img src="/cardimages/project4.jpg" alt="Project 4" className={styles.galleryImage} />
                </a>
              </div>
              <div className={`${styles.galleryItem} ${styles.item5}`}>
                <a href="https://www.youtube.com/shorts/dNg4apX8NKY" target="_blank" rel="noopener noreferrer">
                  <img src="/cardimages/project5.jpg" alt="Project 5" className={styles.galleryImage} />
                </a>
              </div>
              <div className={`${styles.galleryItem} ${styles.item6}`}>
                <a href="https://www.youtube.com/shorts/WWj8RVfgZRg" target="_blank" rel="noopener noreferrer">
                  <img src="/cardimages/project6.jpg" alt="Project 6" className={styles.galleryImage} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ── About + Mission ───────────────────────────────── */}
      <AnimatedSection>
        <section id="about" className={styles.aboutSection}>
          <div className={styles.aboutContainer}>
            <div className={styles.aboutGrid}>
              <div className={styles.aboutImageContainer}>
                <div className={styles.aboutImageWrapper}>
                  <img
                    src="/founder/profile.jpeg"
                    alt="Abdullah Khalid"
                    className={styles.aboutImage}
                  />
                </div>
                <div className={styles.aboutAccent}></div>
              </div>

              <div className={styles.aboutContent}>
                <h2 className={styles.aboutTitle}>Abdullah Khalid</h2>
                <div className={styles.aboutDivider}></div>

                <div className={styles.aboutText}>
                  <p>
                    I&apos;m a graphic designer and content creator focused on faith-based work —
                    designing visuals that make Islamic messages clear, beautiful, and easy to engage
                    with.
                  </p>
                  <p>
                    Based between Pennsylvania and New Jersey, I&apos;ve worked with Islamic schools,
                    community organizations, and faith-based nonprofits to create social media
                    content, event graphics, educational posts, and short-form videos.
                  </p>
                  <p>
                    My goal is simple: make Islamic content look as good as it sounds. I care about
                    clean design, authentic storytelling, and building work that actually serves
                    Muslim communities.
                  </p>
                </div>

                <div className={styles.aboutStats}>
                  <div className={styles.statItem}>
                    <CounterAnimation end={6} className={styles.statNumber} />
                    <div className={styles.statLabel}>Organizations</div>
                  </div>
                  <div className={styles.statDivider}></div>
                  <div className={styles.statItem}>
                    {/* TODO: Update this number as your project count grows */}
                    <CounterAnimation end={50} className={styles.statNumber} />
                    <div className={styles.statLabel}>Creative Projects</div>
                  </div>
                  <div className={styles.statDivider}></div>
                  <div className={styles.statItem}>
                    {/* TODO: Update this string as your reach grows */}
                    <CounterAnimation end="100k+" className={styles.statNumber} />
                    <div className={styles.statLabel}>Monthly Reach</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ── Contact ───────────────────────────────────────── */}
      <AnimatedSection>
        <section id="contact" className={styles.contactSection}>
          <div className={styles.contactContainer}>
            <h2 className={styles.contactTitle}>Let&apos;s Create Something Meaningful</h2>
            <p className={styles.contactSubtitle}>
              Whether you need social media graphics, event flyers, educational content, or a full
              Islamic brand refresh — I&apos;d love to work with you.
            </p>

            <form className={styles.contactForm}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" placeholder="Your name" required />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="What's this about?"
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>
              <div className={styles.formFooter}>
                <div className={styles.footerLeft}>
                  <div className={styles.availability}>
                    <div className={styles.statusDot}></div>
                    <span>Currently open to design roles and freelance work</span>
                  </div>
                  <p className={styles.responseTime}>Response time: Within 24-48 hours</p>
                </div>
                <button type="submit" className={styles.submitBtn}>
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>
      </AnimatedSection>

    </div>
  );
}
