import Link from "next/link";
import Image from "next/image";
import LandingForm from "./LandingForm";

export default function LandingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "FusionERPTraining.com",
    url: "https://fusionerptraining.com/landing-page",
    email: "fusionerptraining@gmail.com",
    telephone: "+91-9247954331",
    address: {
      "@type": "PostalAddress",
      streetAddress: "4th Floor, Manjeera Trinity Corporate, Kukatpally",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      postalCode: "500072",
      addressCountry: "IN",
    },
    sameAs: [
      "https://www.facebook.com/fusionerptraining",
      "https://www.instagram.com/fusionerptraining/",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Top Bar */}
      <div className="landing-topbar">
        <div className="landing-container">
          <div className="left">
            <a
              className="mail"
              href="mailto:fusionerptraining@gmail.com"
              data-track="email_click"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 6 9-6" />
              </svg>
              fusionerptraining@gmail.com
            </a>
            <a href="tel:+919247954331" data-track="call_click">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.4 1.8.7 2.7a2 2 0 01-.5 2.1L8 9.8a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.4c.9.3 1.8.6 2.7.7a2 2 0 011.7 2z" />
              </svg>
              +91 92479 54331
            </a>
          </div>
          <div className="landing-soc">
            <a
              className="fb"
              href="https://www.facebook.com/fusionerptraining"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <svg viewBox="0 0 24 24">
                <path d="M14 8h3V4h-3c-2.2 0-4 1.8-4 4v2H8v4h2v8h4v-8h3l1-4h-4V8z" />
              </svg>
            </a>
            <a
              className="ig"
              href="https://www.instagram.com/fusionerptraining/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24">
                <path d="M12 7a5 5 0 100 10 5 5 0 000-10zm0 8.2A3.2 3.2 0 1112 8.8a3.2 3.2 0 010 6.4zM17.3 5.5a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4zM21.9 7.6a6 6 0 00-1.6-4.2A6 6 0 0016.1 2C14.5 1.9 9.5 1.9 7.9 2a6 6 0 00-4.2 1.6A6 6 0 002.1 7.8c-.1 1.6-.1 6.6 0 8.2a6 6 0 001.6 4.2 6 6 0 004.2 1.6c1.6.1 6.6.1 8.2 0a6 6 0 004.2-1.6 6 6 0 001.6-4.2c.1-1.6.1-6.6 0-8.2zM19.8 18a3.3 3.3 0 01-1.8 1.8c-1.3.5-4.3.4-5.7.4s-4.4.1-5.7-.4A3.3 3.3 0 014.8 18c-.5-1.3-.4-4.3-.4-5.7s-.1-4.4.4-5.7A3.3 3.3 0 016.6 4.8c1.3-.5 4.3-.4 5.7-.4s4.4-.1 5.7.4a3.3 3.3 0 011.8 1.8c.5 1.3.4 4.3.4 5.7s.1 4.4-.4 5.7z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="landing-header">
        <div className="landing-container">
          <Link className="landing-logo" href="/landing-page#top">
            <Image
              src="/images/logo.png"
              alt="FusionERPTraining.com"
              width={260}
              height={55}
              priority
              style={{ height: "48px", width: "auto" }}
            />
          </Link>
          <div style={{ display: "flex", gap: "10px" }}>
            <a
              className="landing-btn landing-btn-blue text-white"
              href="#enquire"
            >
              Talk to an expert →
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        {/* 1. HERO */}
        <section className="landing-hero">
          <div className="landing-container landing-hero-grid">
            <div className="landing-intro">
              <span className="landing-badge">
                <span className="landing-dot"></span>
                100% Job Guarantee • Live Projects &amp; Expert Guidance
              </span>
              <h1>
                Oracle Fusion Financials Training <span>in Hyderabad</span>
              </h1>
              <p className="landing-lead">
                <b>100% Job Guarantee Oracle Fusion Financials Course</b> with real projects and
                expert guidance. Master key financial modules, gain real-time hands-on experience
                in live Oracle Cloud labs, and launch your ERP career.
              </p>
            </div>

            {/* Client Lead Form */}
            <LandingForm />

            <div className="landing-details">
              <div className="landing-chips">
                <span className="landing-chip">Oracle Fusion Finance Training</span>
                <span className="landing-chip">Oracle Fusion Financials Online Training</span>
                <span className="landing-chip">Oracle Fusion Training Institute, Kukatpally</span>
                <span className="landing-chip">Oracle Cloud Financials Course</span>
              </div>
              <div className="landing-ctas">
                <a className="landing-btn landing-btn-blue text-white" href="#enquire">
                  Start Your Journey →
                </a>
                <a
                  className="landing-btn landing-btn-green text-white"
                  href="https://wa.me/919247954331?text=Hi%2C%20I%27m%20interested%20in%20the%20Oracle%20Fusion%20Financials%20course."
                  target="_blank"
                  rel="noopener noreferrer"
                  data-track="whatsapp_click"
                >
                  💬 Talk with Course Advisor
                </a>
              </div>
              <ul className="landing-hl">
                <li>
                  <span className="landing-ck">✓</span>Live Cloud Labs
                </li>
                <li>
                  <span className="landing-ck">✓</span>P2P, O2C &amp; R2R Flows
                </li>
                <li>
                  <span className="landing-ck">✓</span>15+ Yrs Mentors
                </li>
                <li>
                  <span className="landing-ck">✓</span>ATS Resume &amp; Mocks
                </li>
              </ul>
            </div>
          </div>

          <div className="landing-stats">
            <div className="landing-container">
              <div className="landing-stat">
                <div className="n">15+ Years</div>
                <b>Enterprise Consulting Experience</b>
                <p>Mentors who manage global implementations</p>
              </div>
              <div className="landing-stat">
                <div className="n">100% Practical</div>
                <b>Business Scenarios &amp; Labs</b>
                <p>P2P, O2C and R2R end-to-end cycles</p>
              </div>
              <div className="landing-stat">
                <div className="n">12 Modules</div>
                <b>Structured Cloud Syllabus</b>
                <p>From Chart of Accounts to OTBI Analytics</p>
              </div>
              <div className="landing-stat">
                <div className="n">1-on-1</div>
                <b>Consultant Interview Coaching</b>
                <p>ATS project portfolios &amp; mock rounds</p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. WHY US */}
        <section className="landing-block">
          <div className="landing-container">
            <div className="landing-head">
              <div>
                <span className="landing-tag">● Why Fusion ERP Training</span>
                <h2>
                  Learn the platform. <span>Understand the business.</span> Build confidence.
                </h2>
              </div>
              <p>
                We build the complete business acumen, architectural depth and communication
                skills required to excel as an Oracle Fusion Functional Consultant.
              </p>
            </div>
            <div className="landing-grid landing-g3">
              <div className="landing-card">
                <div className="no">01</div>
                <h3>Business-First Learning</h3>
                <p>Understand why accounting transactions happen before touching setup screens.</p>
              </div>
              <div className="landing-card">
                <div className="no">02</div>
                <h3>Direct Hands-On Cloud Labs</h3>
                <p>
                  Practice in real multi-organization Oracle Fusion Cloud instances with guided lab
                  manuals.
                </p>
              </div>
              <div className="landing-card">
                <div className="no">03</div>
                <h3>Realistic Multi-Entity Scenarios</h3>
                <p>
                  Resolve 3-way matching exceptions, foreign currency revaluations and intercompany
                  journals.
                </p>
              </div>
              <div className="landing-card">
                <div className="no">04</div>
                <h3>Rigorous 12-Module Structure</h3>
                <p>
                  A sequenced path from Enterprise Structures through subledgers, SLA rules and OTBI
                  analytics.
                </p>
              </div>
              <div className="landing-card">
                <div className="no">05</div>
                <h3>Practitioner-Led Mentorship</h3>
                <p>Learn from senior Oracle Solution Architects with 15+ years of multinational ERP deployments.</p>
              </div>
              <div className="landing-card">
                <div className="no">06</div>
                <h3>Career &amp; Interview Preparation</h3>
                <p>ATS-compliant project resumes, business requirement practice and 1-on-1 mock interviews.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. PROGRAM & MODULES */}
        <section className="landing-block alt">
          <div className="landing-container">
            <div className="landing-head">
              <div>
                <span className="landing-tag">● 7-Month Job Guarantee Program</span>
                <h2>
                  A clear path from training <span>to career readiness.</span>
                </h2>
              </div>
              <p>
                Structured to take you from Oracle Fusion fundamentals to confident functional
                consulting, with step-by-step support until you are interview-ready.
              </p>
            </div>
            <div className="landing-grid landing-g2">
              <div className="landing-phase">
                <span className="landing-tag">Months 1 – 3</span>
                <h3>Live Online Oracle Fusion Training</h3>
                <ul>
                  <li>
                    <span className="landing-ck">✓</span>Concept &amp; architecture sessions on real business logic
                  </li>
                  <li>
                    <span className="landing-ck">✓</span>Live cloud configuration in enterprise sandboxes
                  </li>
                  <li>
                    <span className="landing-ck">✓</span>Cross-module P2P, O2C &amp; R2R execution
                  </li>
                  <li>
                    <span className="landing-ck">✓</span>Instructor audit with line-by-line feedback
                  </li>
                </ul>
              </div>
              <div className="landing-phase">
                <span className="landing-tag">Months 4 – 7</span>
                <h3>Interviews &amp; Career Support</h3>
                <ul>
                  <li>
                    <span className="landing-ck">✓</span>Interview scheduling and step-by-step guidance
                  </li>
                  <li>
                    <span className="landing-ck">✓</span>1-on-1 mock interviews with detailed critique
                  </li>
                  <li>
                    <span className="landing-ck">✓</span>ATS-ready project portfolio &amp; resume
                  </li>
                  <li>
                    <span className="landing-ck">✓</span>Scenario-based technical round preparation
                  </li>
                </ul>
              </div>
            </div>

            <div className="landing-mods">
              <span className="landing-mod"><small>01</small>General Ledger (GL)</span>
              <span className="landing-mod"><small>02</small>Accounts Payable (AP)</span>
              <span className="landing-mod"><small>03</small>Accounts Receivable (AR)</span>
              <span className="landing-mod"><small>04</small>Cash Management (CE)</span>
              <span className="landing-mod"><small>05</small>Fixed Assets (FA)</span>
              <span className="landing-mod"><small>06</small>Fusion Expenses</span>
              <span className="landing-mod"><small>07</small>Oracle Fusion Tax (ZX)</span>
              <span className="landing-mod"><small>08</small>Financial Reporting &amp; OTBI</span>
              <span className="landing-mod"><small>09</small>End-to-End P2P, O2C, R2R</span>
              <span className="landing-mod"><small>10</small>Functional Configuration &amp; Rapid Implementation</span>
              <span className="landing-mod"><small>11</small>Consultant Interview Preparation</span>
            </div>

            <div className="landing-flows">
              <div className="landing-flow">
                <span className="landing-tag">Flow-01</span>
                <h3>Procure-to-Pay (P2P)</h3>
                <p>Requisition → Purchase Order → Goods Receipt → Supplier Invoice → Payment &amp; Bank</p>
              </div>
              <div className="landing-flow">
                <span className="landing-tag">Flow-02</span>
                <h3>Order-to-Cash (O2C)</h3>
                <p>Customer Order → Fulfillment → AutoInvoice → Cash Receipt → Bank Match</p>
              </div>
              <div className="landing-flow">
                <span className="landing-tag">Flow-03</span>
                <h3>Record-to-Report (R2R)</h3>
                <p>Subledger Trx → SLA Derivation → GL Posting → Revaluation → Executive Report</p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. WHO CAN JOIN */}
        <section className="landing-block">
          <div className="landing-container">
            <div className="landing-head">
              <div>
                <span className="landing-tag">● Who Can Join</span>
                <h2>
                  Wherever you&apos;re starting, <span>there&apos;s a clear path forward.</span>
                </h2>
              </div>
              <p>
                Whether you&apos;re from finance, commerce, legacy ERP or returning from a career
                break, the curriculum aligns with your specific baseline.
              </p>
            </div>
            <div className="landing-grid landing-g4">
              <div className="landing-card landing-pw">
                <span className="landing-tag">Pathway 01</span>
                <h3>Finance &amp; Accounting Professionals</h3>
                <p className="hook">Translate your accounting knowledge into high-value cloud consulting.</p>
                <div className="out">
                  <b>OUTCOME</b>
                  <br />
                  Move into an advisory Functional Consultant role.
                </div>
              </div>
              <div className="landing-card landing-pw">
                <span className="landing-tag">Pathway 02</span>
                <h3>B.Com / M.Com / MBA Graduates</h3>
                <p className="hook">Start your career with high-demand enterprise software skills.</p>
                <div className="out">
                  <b>OUTCOME</b>
                  <br />
                  Hands-on system skills and business cycle understanding.
                </div>
              </div>
              <div className="landing-card landing-pw">
                <span className="landing-tag">Pathway 03</span>
                <h3>Oracle EBS / Legacy ERP Professionals</h3>
                <p className="hook">Modernize your legacy ERP background for Oracle Cloud SaaS.</p>
                <div className="out">
                  <b>OUTCOME</b>
                  <br />
                  Qualify for cloud migration and transformation projects.
                </div>
              </div>
              <div className="landing-card landing-pw">
                <span className="landing-tag">Pathway 04</span>
                <h3>Career Switchers &amp; Returners</h3>
                <p className="hook">Re-enter the workforce or move into tech consulting with clarity.</p>
                <div className="out">
                  <b>OUTCOME</b>
                  <br />
                  In-demand, marketable enterprise technology expertise.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. CTA + LOCATION */}
        <section className="landing-block alt">
          <div className="landing-container">
            <div className="landing-cta">
              <div>
                <span className="landing-badge">
                  <span className="landing-dot"></span>High-Impact Career Transformation
                </span>
                <h2 style={{ marginTop: "14px" }}>
                  High-Paying Global Careers Start with Oracle Fusion Financials. Are You Ready?
                </h2>
                <p>
                  Master General Ledger, AP, AR and Subledger Accounting to open doors to top
                  enterprise roles worldwide.
                </p>
              </div>
              <div className="landing-ctas">
                <a className="landing-btn landing-btn-blue text-white" href="#enquire">
                  Start Your Journey →
                </a>
                <a
                  className="landing-btn landing-btn-green text-white"
                  href="https://wa.me/919247954331?text=Hi%2C%20I%27m%20interested%20in%20the%20Oracle%20Fusion%20Financials%20course."
                  target="_blank"
                  rel="noopener noreferrer"
                  data-track="whatsapp_click"
                >
                  💬 Talk with Course Advisor
                </a>
              </div>
            </div>

            <div className="landing-loc">
              <div>
                <span className="landing-tag">● Visit Us</span>
                <h2
                  className="disp"
                  style={{
                    fontSize: "30px",
                    color: "var(--navy)",
                    fontWeight: 900,
                    margin: "12px 0 20px",
                    lineHeight: 1.15,
                  }}
                >
                  Oracle Fusion Training Institute in Kukatpally, Hyderabad
                </h2>
                <ul className="landing-contact">
                  <li>
                    <span className="landing-ic">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z" />
                      </svg>
                    </span>
                    <div>
                      <b>Address</b>
                      4th Floor, Manjeera Trinity Corporate, Kukatpally, Hyderabad, Telangana 500072
                    </div>
                  </li>
                  <li>
                    <span className="landing-ic">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2a1 1 0 011-.25 11.4 11.4 0 003.6.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.6a1 1 0 01-.25 1z" />
                      </svg>
                    </span>
                    <div>
                      <b>Call / WhatsApp</b>
                      <a href="tel:+919247954331" data-track="call_click">
                        +91 92479 54331
                      </a>
                    </div>
                  </li>
                  <li>
                    <span className="landing-ic">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4.2l-8 5-8-5V6l8 5 8-5z" />
                      </svg>
                    </span>
                    <div>
                      <b>Email</b>
                      <a href="mailto:fusionerptraining@gmail.com" data-track="email_click">
                        fusionerptraining@gmail.com
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="landing-map">
                <iframe
                  title="FusionERPTraining.com location"
                  src="https://maps.google.com/maps?q=Manjeera%20Trinity%20Corporate%2C%20Kukatpally%2C%20Hyderabad%2C%20Telangana%20500072&amp;z=16&amp;output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="landing-footer">
        <div className="landing-container">
          <div className="landing-fgrid">
            <div>
              <span className="landing-flogo">
                <Image
                  src="/images/logo.png"
                  alt="FusionERPTraining.com"
                  width={220}
                  height={46}
                  style={{ height: "42px", width: "auto" }}
                />
              </span>
              <p className="about">
                FusionERPTraining.com is a professional training provider for Oracle Fusion Cloud
                Financials, offering a 100% Job Guarantee program with live cloud labs, real business
                scenarios and 1-on-1 interview coaching.
              </p>
              <div className="landing-soc">
                <a
                  className="fb"
                  href="https://www.facebook.com/fusionerptraining"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <svg viewBox="0 0 24 24">
                    <path d="M14 8h3V4h-3c-2.2 0-4 1.8-4 4v2H8v4h2v8h4v-8h3l1-4h-4V8z" />
                  </svg>
                </a>
                <a
                  className="ig"
                  href="https://www.instagram.com/fusionerptraining/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <svg viewBox="0 0 24 24">
                    <path d="M12 7a5 5 0 100 10 5 5 0 000-10zm0 8.2A3.2 3.2 0 1112 8.8a3.2 3.2 0 010 6.4zM17.3 5.5a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4zM21.9 7.6a6 6 0 00-1.6-4.2A6 6 0 0016.1 2C14.5 1.9 9.5 1.9 7.9 2a6 6 0 00-4.2 1.6A6 6 0 002.1 7.8c-.1 1.6-.1 6.6 0 8.2a6 6 0 001.6 4.2 6 6 0 004.2 1.6c1.6.1 6.6.1 8.2 0a6 6 0 004.2-1.6 6 6 0 001.6-4.2c.1-1.6.1-6.6 0-8.2zM19.8 18a3.3 3.3 0 01-1.8 1.8c-1.3.5-4.3.4-5.7.4s-4.4.1-5.7-.4A3.3 3.3 0 014.8 18c-.5-1.3-.4-4.3-.4-5.7s-.1-4.4.4-5.7A3.3 3.3 0 016.6 4.8c1.3-.5 4.3-.4 5.7-.4s4.4-.1 5.7.4a3.3 3.3 0 011.8 1.8c.5 1.3.4 4.3.4 5.7s.1 4.4-.4 5.7z" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4>Contact Us</h4>
              <ul>
                <li>4th Floor, Manjeera Trinity Corporate, Kukatpally, Hyderabad, Telangana 500072</li>
                <li>
                  Call / WhatsApp:{" "}
                  <a href="tel:+919247954331" data-track="call_click">
                    +91 92479 54331
                  </a>
                </li>
                <li>
                  Email:{" "}
                  <a href="mailto:fusionerptraining@gmail.com" data-track="email_click">
                    fusionerptraining@gmail.com
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <a href="#enquire">Book Free Consultation</a>
                </li>
                <li>
                  <a
                    href="https://wa.me/919247954331?text=Hi%2C%20I%27m%20interested%20in%20the%20Oracle%20Fusion%20Financials%20course."
                    target="_blank"
                    rel="noopener noreferrer"
                    data-track="whatsapp_click"
                  >
                    Chat on WhatsApp
                  </a>
                </li>
                <li>
                  <Link href="/terms">Terms &amp; Conditions</Link>
                </li>
                <li>
                  <Link href="/privacy">Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </div>
          <p className="landing-disc">
            Job guarantee is provided as per program terms explained during your consultation.
            Oracle, Oracle Fusion and Oracle Cloud are registered trademarks of Oracle
            Corporation. FusionERPTraining.com is an independent training provider and is not
            affiliated with Oracle Corporation.
          </p>
          <div className="landing-legal">
            <span>© {new Date().getFullYear()} FusionERPTraining.com. All rights reserved.</span>
            <span>
              <Link href="/terms">Terms &amp; Conditions</Link> •{" "}
              <Link href="/privacy">Privacy Policy</Link>
            </span>
          </div>
        </div>
      </footer>

      {/* Floating Call & WhatsApp Action Buttons */}
      <div className="landing-float">
        <a
          className="call"
          href="tel:+919247954331"
          aria-label="Call FusionERPTraining"
          data-track="call_click"
        >
          <svg viewBox="0 0 24 24">
            <path d="M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2a1 1 0 011-.25 11.4 11.4 0 003.6.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.6a1 1 0 01-.25 1z" />
          </svg>
        </a>
        <a
          className="wa"
          href="https://wa.me/919247954331?text=Hi%2C%20I%27m%20interested%20in%20the%20Oracle%20Fusion%20Financials%20course."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          data-track="whatsapp_click"
        >
          <svg viewBox="0 0 24 24">
            <path d="M12 2a10 10 0 00-8.6 15.1L2 22l5-1.3A10 10 0 1012 2zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.3.5-.4.4c-.1.1-.3.3-.1.6.2.3.7 1.2 1.6 2 1.1 1 2 1.3 2.3 1.4.3.1.5.1.6-.1l.9-1c.2-.3.4-.2.6-.1l1.9.9c.3.1.5.2.5.3.1.2.1.7-.1 1.3z" />
          </svg>
        </a>
      </div>
    </>
  );
}
