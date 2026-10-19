import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ThankYouTracker from "./ThankYouTracker";

export const metadata: Metadata = {
  title: "Thank You | FusionERPTraining.com",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <>
      <ThankYouTracker />
      
      {/* Header */}
      <header className="landing-header">
        <div className="landing-container">
          <Link className="landing-logo" href="/landing-page">
            <Image
              src="/images/logo.png"
              alt="FusionERPTraining.com"
              width={260}
              height={55}
              priority
              style={{ height: "48px", width: "auto" }}
            />
          </Link>
          <a
            className="landing-btn landing-btn-blue text-white"
            href="tel:+919247954331"
            data-track="call_click"
          >
            Call Now
          </a>
        </div>
      </header>

      {/* Thank you card */}
      <main className="landing-ty">
        <div className="landing-container">
          <div className="landing-ty-card">
            <div className="ok">✓</div>
            <h1>Thank You! Your Consultation Request Is Received</h1>
            <p>
              Our senior Oracle Cloud consultant will call you shortly to understand your profile and
              share your personalised career roadmap.
            </p>
            <ul className="landing-steps">
              <li>
                <span className="landing-ck">1</span>
                <span>
                  Keep your phone handy for a call from <b>+91 92479 54331</b>
                </span>
              </li>
              <li>
                <span className="landing-ck">2</span>
                <span>Get a free profile evaluation and complete program details</span>
              </li>
              <li>
                <span className="landing-ck">3</span>
                <span>Start your Oracle Fusion Cloud Financials journey</span>
              </li>
            </ul>

            <p style={{ marginBottom: "16px" }}>Want to talk right away?</p>
            <div className="landing-ctas" style={{ justifyContent: "center" }}>
              <a
                className="landing-btn landing-btn-blue text-white"
                href="tel:+919247954331"
                data-track="call_click"
              >
                Call +91 92479 54331
              </a>
              <a
                className="landing-btn landing-btn-green text-white"
                href="https://wa.me/919247954331?text=Hi%2C%20I%27m%20interested%20in%20the%20Oracle%20Fusion%20Financials%20course."
                target="_blank"
                rel="noopener noreferrer"
                data-track="whatsapp_click"
              >
                💬 Chat on WhatsApp
              </a>
            </div>
            <p style={{ marginTop: "18px" }}>
              <Link href="/landing-page" style={{ color: "var(--blue)", fontWeight: 600 }}>
                ← Back to program details
              </Link>
            </p>
          </div>
        </div>
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
                  <Link href="/landing-page#enquire">Book Free Consultation</Link>
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
          <div className="landing-legal">
            <span>© {new Date().getFullYear()} FusionERPTraining.com. All rights reserved.</span>
            <span>
              <Link href="/terms">Terms &amp; Conditions</Link> •{" "}
              <Link href="/privacy">Privacy Policy</Link>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
