import styles from "./page.module.css";
import TypewriterText from "./components/TypewriterText";
import CounterAnimation from "./components/CounterAnimation";
import AnimatedSection from "./components/AnimatedSection";
import { HiLocationMarker } from "react-icons/hi";
import { HiMail } from "react-icons/hi";

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section 
        id="hero" 
        className={styles.heroSection}
        style={{
          backgroundImage: "url('/backgroundcolor/herosection-portfolio.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#272a27',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className={styles.heroContainer}>
          <div className={styles.heroTitleWrapper}>
            <TypewriterText className={styles.heroTitle} />
          </div>
          
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
        </div>
      </section>

      {/* Signature Work Showcase */}
      <section id="work" className={styles.workSection}>
        <div className={styles.workContainer}>
          <div className={styles.videoContainer}>
            <div className={styles.videoPlaceholder} style={{
              backgroundImage: "url('/sectionimages/videosectioncover.avif')",
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}>
              <button className={styles.playButton}>
                <svg viewBox="0 0 24 24" fill="currentColor" className={styles.playIcon}>
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </button>
            </div>
          </div>
          
          <div className={styles.workContent}>
            <div className={styles.workLeft}>
              <h2 className={styles.workTitle}>Making faith-based content clear and compelling</h2>
              <p className={styles.workDescription}>
                Transforming Islamic teachings into engaging visual stories that educate, inspire, and drive meaningful action.
              </p>
            </div>
            <div className={styles.workRight}>
              <button className={styles.caseStudyBtn}>See Case Study</button>
              <button className={styles.arrowBtn}>
                <span>↗</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <AnimatedSection>
        <section className={styles.brandsSection}>
          <div className={styles.brandsContainer}>
            <div className={styles.brandLogo}>PMI</div>
            <div className={styles.brandSeparator}></div>
            <div className={styles.brandLogo}>GCLEA</div>
            <div className={styles.brandSeparator}></div>
            <div className={styles.brandLogo}>IMAAN FOR JANNAH</div>
            <div className={styles.brandSeparator}></div>
            <div className={styles.brandLogo}>AL AQSA ISLAMIC ACADEMY</div>
            <div className={styles.brandSeparator}></div>
            <div className={styles.brandLogo}>EDEN GARDENS</div>
            <div className={styles.brandSeparator}></div>
            <div className={styles.brandLogo}>DREXEL MUSLIM ALUMNI</div>
          </div>
        </section>
      </AnimatedSection>

      {/* Gallery Section */}
      <AnimatedSection>
        <section id="gallery" className={styles.gallerySection}>
        <div className={styles.galleryContainer}>
          <h2 className={styles.galleryTitle}>Visual Stories</h2>
          
          <div className={styles.galleryGrid}>
            <div className={`${styles.galleryItem} ${styles.item1}`}>
              <div className={styles.galleryPlaceholder}>
                <span>Project 1</span>
              </div>
            </div>
            
            <div className={`${styles.galleryItem} ${styles.item2}`}>
              <div className={styles.galleryPlaceholder}>
                <span>Project 2</span>
              </div>
            </div>
            
            <div className={`${styles.galleryItem} ${styles.item3}`}>
              <div className={styles.galleryPlaceholder}>
                <span>Project 3</span>
              </div>
            </div>
            
            <div className={`${styles.galleryItem} ${styles.item4}`}>
              <div className={styles.galleryPlaceholder}>
                <span>Project 4</span>
              </div>
            </div>
            
            <div className={`${styles.galleryItem} ${styles.item5}`}>
              <div className={styles.galleryPlaceholder}>
                <span>Project 5</span>
              </div>
            </div>
            
            <div className={`${styles.galleryItem} ${styles.item6}`}>
              <div className={styles.galleryPlaceholder}>
                <span>Project 6</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      </AnimatedSection>

      {/* About + Mission */}
      <AnimatedSection>
        <section id="about" className={styles.aboutSection}>
        <div className={styles.aboutContainer}>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutImageContainer}>
              <div className={styles.aboutImagePlaceholder}>
                <span>Portrait</span>
              </div>
              <div className={styles.aboutAccent}></div>
            </div>
            
            <div className={styles.aboutContent}>
              <h2 className={styles.aboutTitle}>Abdullah Khalid</h2>
              <div className={styles.aboutDivider}></div>
              
              <div className={styles.aboutText}>
                <p>
                  A Muslim educator and filmmaker dedicated to using visual storytelling as a tool for spiritual growth and community building.
                </p>
                
                <p>
                  Based between Pennsylvania and New Jersey, I create content that bridges Islamic teachings with modern media, making faith accessible and engaging for diverse audiences worldwide.
                </p>
                
                <p>
                  My work focuses on preserving authentic Islamic values while embracing contemporary storytelling techniques to inspire positive change and meaningful connections.
                </p>
              </div>
              
              <div className={styles.aboutStats}>
                <div className={styles.statItem}>
                  <CounterAnimation end={6} className={styles.statNumber} />
                  <div className={styles.statLabel}>Organizations</div>
                </div>
                <div className={styles.statDivider}></div>
                <div className={styles.statItem}>
                  <CounterAnimation end={100} className={styles.statNumber} />
                  <div className={styles.statLabel}>Projects</div>
                </div>
                <div className={styles.statDivider}></div>
                <div className={styles.statItem}>
                  <CounterAnimation end="∞" className={styles.statNumber} />
                  <div className={styles.statLabel}>Impact</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection>
        <section id="contact" className={styles.contactSection}>
        <div className={styles.contactContainer}>
          <h2 className={styles.contactTitle}>Let's Create Something Meaningful</h2>
          <p className={styles.contactSubtitle}>
            Whether you're looking to collaborate on a project, need content for your organization, or want to discuss how storytelling can amplify your mission — I'd love to hear from you.
          </p>
          
          <form className={styles.contactForm}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Your name" required />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="your@email.com" required />
              </div>
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" placeholder="What's this about?" required />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={6} placeholder="Tell me about your project..." required></textarea>
            </div>
            
            <div className={styles.formFooter}>
              <div className={styles.footerLeft}>
                <div className={styles.availability}>
                  <div className={styles.statusDot}></div>
                  <span>Currently accepting projects</span>
                </div>
                <p className={styles.responseTime}>Response time: Within 24-48 hours</p>
              </div>
              <button type="submit" className={styles.submitBtn}>Send Message</button>
            </div>
          </form>
        </div>
      </section>
      </AnimatedSection>
    </div>
  );
}
