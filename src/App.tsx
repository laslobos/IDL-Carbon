import {
  Header as CarbonHeader,
  HeaderName as CarbonHeaderName,
  HeaderNavigation as HeaderNavigation,
  HeaderMenuItem as CarbonHeaderMenuItem,
  HeaderGlobalBar as CarbonHeaderGlobalBar,
  HeaderGlobalAction as CarbonHeaderGlobalAction,
  Button as CarbonButton,
  Tile as CarbonTile,
  ClickableTile as CarbonClickableTile,
  Accordion as CarbonAccordion,
  AccordionItem as CarbonAccordionItem,
  Dropdown as Dropdown,
  Link as CarbonLink,
} from "@carbon/react";
import {
  User,
  ChevronRight,
  LogoFacebook,
  LogoTwitter,
  LogoLinkedin,
  LogoYoutube,
} from "@carbon/icons-react";
import svgPaths from "./imports/svg-cv2vhmq21h";
import imgRender from "figma:asset/d60133c5136ade4a8ede82fbaf62b373f07cb4d0.png";
import imgRender1 from "figma:asset/92c762f608e575c652491e3b0005de5bee253a6f.png";
import imgRender2 from "figma:asset/7780bb2c5bf4db4f70bd00951e289c232bb1f816.png";
import imgRender3 from "figma:asset/91abec1462fa71301b4d7e9de77164a5f88375a1.png";
import wheelchairDesign from "./assets/wheechair-design.png";
import inclusiveDesignLabLogo from "./assets/two-tone-logo.png";
import twoToneLogo from "./assets/two-tone-logo.png";
import "./styles/components.css";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

// Keep CarbonIcon for custom SVG paths from Figma
function CarbonIcon({
  path,
  title = "Icon",
}: {
  path: string;
  title?: string;
}) {
  return (
    <svg
      className="carbon-icon"
      fill="currentColor"
      viewBox="0 0 32 32"
      role="img"
      aria-label={title}
    >
      <title>{title}</title>
      <path d={path} />
    </svg>
  );
}

// Theme Selector Component
const availableThemes = [
  { label: "White", value: "white" },
  { label: "G10", value: "g10" },
  { label: "G90", value: "g90" },
  { label: "G100", value: "g100" },
];

const ThemeSelector = ({
  handleSelectionChange,
}: {
  handleSelectionChange: (theme: string) => void;
}) => {
  const [selectedTheme, setSelectedTheme] = useState(availableThemes[0]);

  const handleThemeChange = ({ selectedItem }: { selectedItem: any }) => {
    setSelectedTheme(selectedItem);
    handleSelectionChange(selectedItem.value);
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
      <span
        id="theme-switcher-label"
        style={{ fontSize: "14px", color: "var(--cds-text-primary)" }}
      >
        Theme Switcher
      </span>
      <Dropdown
        id="theme-dropdown"
        label=""
        titleText=""
        selectedItem={selectedTheme}
        items={availableThemes}
        onChange={handleThemeChange}
        itemToString={(item) => (item ? item.label : "")}
        style={{ width: "150px", minWidth: "120px" }}
        ariaLabel="Select theme"
      />
    </div>
  );
};

// Main App Component
export default function App() {
  const [currentTheme, setCurrentTheme] = useState("white");

  // Set initial theme on mount
  useEffect(() => {
    document.documentElement.setAttribute("data-carbon-theme", currentTheme);
    document.body.setAttribute("data-carbon-theme", currentTheme);
  }, []);

  const handleThemeChange = (value: string) => {
    setCurrentTheme(value);

    // Remove all existing Carbon theme classes
    document.documentElement.classList.remove(
      "cds--white",
      "cds--g10",
      "cds--g90",
      "cds--g100"
    );
    document.body.classList.remove(
      "cds--white",
      "cds--g10",
      "cds--g90",
      "cds--g100"
    );

    // Apply the correct Carbon CSS class
    const themeClass = `cds--${value}`;
    document.documentElement.classList.add(themeClass);
    document.body.classList.add(themeClass);

    // Also keep the data attribute for compatibility
    document.documentElement.setAttribute("data-carbon-theme", value);
    document.body.setAttribute("data-carbon-theme", value);
  };

  return (
    <main className="app-main">
      <CarbonHeader>
        <CarbonHeaderName prefix="" href="#" aria-label="Inclusive Design Lab">
          <img
            src={inclusiveDesignLabLogo}
            alt="Inclusive Design Lab Logo"
            className="header-logo-svg"
          />
        </CarbonHeaderName>
        <HeaderNavigation aria-label="Inclusive Design Lab Navigation">
          <CarbonHeaderMenuItem href="#">Blog</CarbonHeaderMenuItem>
          <CarbonHeaderMenuItem href="#">Contact Us</CarbonHeaderMenuItem>
          <CarbonHeaderMenuItem href="#">FAQs</CarbonHeaderMenuItem>
          <CarbonHeaderMenuItem href="#">About</CarbonHeaderMenuItem>
        </HeaderNavigation>

        <CarbonHeaderGlobalBar>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              marginRight: "1rem",
            }}
          >
            <ThemeSelector handleSelectionChange={handleThemeChange} />
          </div>
          <CarbonHeaderGlobalAction aria-label="User" tooltipAlignment="end">
            <User size={20} />
          </CarbonHeaderGlobalAction>
        </CarbonHeaderGlobalBar>
      </CarbonHeader>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Design With Empathy. <br /> Build With Purpose.
          </h1>
          <p className="hero-description">
            We help organisations design accessible, inclusive websites and apps
            that meet user needs and legal requirements. Because good design
            should leave no one behind.
          </p>
          <CarbonButton size="lg" kind="tertiary">
            Get Started
          </CarbonButton>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <h2 className="stats-title">
          Inclusive Design is good for business, better for everyone
        </h2>
        <div className="stats-grid md:grid-cols-3">
          <article>
            <div className="stat-number">60%</div>
            <p className="stat-description">
              6 out of 10 Irish businesses are unprepared for the European
              Accessibility Act
            </p>
          </article>
          <article>
            <div className="stat-number">73%</div>
            <p className="stat-description">
              Among the top 100 Irish companies, 73% have websites that are not
              accessible
            </p>
          </article>
          <article>
            <div className="stat-number">22%</div>
            <p className="stat-description">
              1.1 million people in Ireland have a disability, representing a
              significant user base
            </p>
          </article>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div>
          <h2 className="features-title">Our Services</h2>
          <p className="features-subtitle">
            Peace of mind on your accessibility journey
          </p>
        </div>

        <div className="features-grid md:grid-cols-2 lg:grid-cols-3">
          <CarbonTile className="feature-tile">
            <figure className="feature-icon">
              <CarbonIcon
                path={svgPaths.p31d6a600}
                title="Professional audits icon"
              />
            </figure>
            <div>
              <h3 className="feature-title">Professional audits</h3>
              <p className="feature-description">
                We evaluate your designs for accessibility beyond checklists,
                assessing contrast, flow, and layout to give practical,
                annotated feedback before development.
              </p>
            </div>
          </CarbonTile>

          <CarbonTile className="feature-tile">
            <figure className="feature-icon">
              <CarbonIcon
                path={svgPaths.p31d6a600}
                title="Design System Consulting icon"
              />
            </figure>
            <div>
              <h3 className="feature-title">Design System Consulting</h3>
              <p className="feature-description">
                We help clients create accessibility-first design systems,
                minimising the chance of these issues appearing in the
                development phase.
              </p>
            </div>
          </CarbonTile>

          <CarbonTile className="feature-tile">
            <div className="feature-icon">
              <CarbonIcon
                path={svgPaths.p31d6a600}
                title="Inclusive Design Workshops icon"
              />
            </div>
            <div>
              <h3 className="feature-title">Inclusive Design Workshops</h3>
              <p className="feature-description">
                Facilitated workshops that uncover accessibility gaps and
                generate inclusive ideas—focused on forms, navigation, mobile,
                and cognitive access challenges.
              </p>
            </div>
          </CarbonTile>
        </div>
        <div className="features-grid md:grid-cols-2 lg:grid-cols-3">
          <CarbonTile className="feature-tile">
            <figure className="feature-icon">
              <CarbonIcon
                path={svgPaths.p31d6a600}
                title="Usability Testing icon"
              />
            </figure>
            <div>
              <h3 className="feature-title">Usability Testing</h3>
              <p className="feature-description">
                We offer a range of usability testing, including screen reader
                users, keyboard-only users, or neurodivergent users, providing
                detailed feedback on UI/UX issues.
              </p>
            </div>
          </CarbonTile>

          <CarbonTile className="feature-tile">
            <figure className="feature-icon">
              <CarbonIcon
                path={svgPaths.p31d6a600}
                title="Accessibility Design Training icon"
              />
            </figure>
            <div>
              <h3 className="feature-title">Accessibility Design Training</h3>
              <p className="feature-description">
                Tailored training equips your team with accessible design
                skills, covering principles, typography, layouts, and tools to
                embed inclusion confidently.
              </p>
            </div>
          </CarbonTile>

          <CarbonTile className="feature-tile">
            <div className="feature-icon">
              <CarbonIcon
                path={svgPaths.p31d6a600}
                title="Strategy & Roadmapping icon"
              />
            </div>
            <div>
              <h3 className="feature-title">Strategy & Roadmapping</h3>
              <p className="feature-description">
                We help define accessibility goals, align stakeholders, and
                create a phased roadmap to embed inclusion across teams and
                workflows.
              </p>
            </div>
          </CarbonTile>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-section">
        <div className="cta-banner">
          <div className="cta-content">
            <h2 className="cta-title">Inclusion starts here</h2>
            <p className="hero-description">
              We help define accessibility goals, align stakeholders, and create
              a phased roadmap to embed inclusion across teams and workflows.
            </p>
            <CarbonButton size="lg" kind="secondary">
              Get Started
              <ChevronRight size={16} />
            </CarbonButton>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="blog-section">
        <div className="blog-header">
          <h2 className="blog-title">Insights and Knowledge Hub</h2>
          <p className="blog-subtitle">
            Discover the Features That Will Transform Your Customer
            Relationships
          </p>
        </div>

        <div className="blog-grid lg:grid-cols-2">
          <CarbonClickableTile href="#" className="blog-main-card">
            <div className="blog-main-image">
              <img
                src={wheelchairDesign}
                alt="Woman pushing a man in a wheelchair with man wearing VR headset"
                className="blog-image"
              />
            </div>
            <div className="blog-main-content">
              <p className="blog-meta">24 Jan 2024 · 5 Min Read</p>
              <h3 className="blog-card-title">
                AI & Accessibility Trends in 2025
              </h3>
            </div>
          </CarbonClickableTile>

          <div className="blog-sidebar">
            <CarbonClickableTile href="#" className="blog-small-card">
              <div className="blog-small-content">
                <p className="blog-meta">24 Jan 2024 · 5 Min Read</p>
                <h3 className="blog-small-title">
                  Designing for Dyslexia: Tips and Tools
                </h3>
              </div>
            </CarbonClickableTile>

            <CarbonClickableTile href="#" className="blog-small-card">
              {/* <div className="blog-small-image">
                <img src={imgRender2} alt="" className="blog-image" />
              </div> */}
              <div className="blog-small-content">
                <p className="blog-meta">24 Jan 2024 · 5 Min Read</p>
                <h3 className="blog-small-title">A Guide to VPATs and ACRs</h3>
              </div>
            </CarbonClickableTile>

            <CarbonClickableTile href="#" className="blog-view-all">
              <CarbonLink href="#" className="blog-view-all-link">
                View All
                <ChevronRight size={24} />
              </CarbonLink>
            </CarbonClickableTile>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="faq-header md:flex-row md:items-end">
          <div>
            <h2 className="faq-title">Frequently Asked Questions</h2>
            <p className="faq-subtitle">
              Still have a question? Let us help you get started.
            </p>
          </div>
          <CarbonButton kind="tertiary">Get in Touch</CarbonButton>
        </div>

        <div className="faq-grid lg:grid-cols-2">
          <CarbonAccordion>
            <CarbonAccordionItem title="What can I expect from a consultation?">
              <p className="faq-answer">
                We’ll review your product, talk through your goals, and
                highlight key areas for improvement. You’ll get clear next steps
                and no pressure.
              </p>
            </CarbonAccordionItem>
            <CarbonAccordionItem title="What is inclusive design?">
              <p className="faq-answer">
                Inclusive design means creating digital products that work for
                as many people as possible regardless of background, ability or
                how they interact with technology.
              </p>
            </CarbonAccordionItem>
            <CarbonAccordionItem title="How is inclusive design different from accessibility?">
              <p className="faq-answer">
                Accessibility focuses on removing barriers for people with
                disabilities. Inclusive design goes further and considers a
                wider range of needs and diversity, including cognitive
                differences, age, language, and context.
              </p>
            </CarbonAccordionItem>
          </CarbonAccordion>

          <CarbonAccordion>
            <CarbonAccordionItem title="Why should my business care about accessibility?">
              <p className="faq-answer">
                It’s good for all users and smart for business. Accessible
                design improves usability, reaches more customers, builds trust,
                and helps you stay compliant with laws like the European
                Accessibility Act.
              </p>
            </CarbonAccordionItem>
            <CarbonAccordionItem title="Do I need to rebuild my site or app to make it accessible?">
              <p className="faq-answer">
                Not at all. In most cases, we start with small, practical
                changes that make a big impact. We’ll meet you where you are.
              </p>
            </CarbonAccordionItem>
            <CarbonAccordionItem title="What kinds of organisations do you work with?">
              <p className="faq-answer">
                We work with product teams, nonprofits, government agencies, and
                businesses of all sizes. Whether you’re just starting or
                refining your approach, we can help.
              </p>
            </CarbonAccordionItem>
          </CarbonAccordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div>
          <div className="footer-top">
            <div className="footer-logo">
              <div className="footer-logo-icon">
                <img
                  src={twoToneLogo}
                  alt="Inclusive Design Lab company logo"
                  className="footer-logo-svg"
                />
              </div>
            </div>

            <nav className="footer-nav">
              <a href="#" className="nav-link">
                Overview
              </a>
              <a href="#" className="nav-link">
                Products
              </a>
              <a href="#" className="nav-link">
                Pricing
              </a>
              <a href="#" className="nav-link">
                Resource
              </a>
              <a href="#" className="nav-link">
                Help
              </a>
            </nav>
          </div>

          <div className="footer-bottom md:flex-row">
            <div className="footer-social">
              <CarbonButton
                kind="ghost"
                size="sm"
                hasIconOnly
                iconDescription="Facebook"
                className="footer-social-button"
              >
                <LogoFacebook size={20} />
              </CarbonButton>
              <CarbonButton
                kind="ghost"
                size="sm"
                hasIconOnly
                iconDescription="Twitter"
                className="footer-social-button"
              >
                <LogoTwitter size={20} />
              </CarbonButton>
              <CarbonButton
                kind="ghost"
                size="sm"
                hasIconOnly
                iconDescription="LinkedIn"
                className="footer-social-button"
              >
                <LogoLinkedin size={20} />
              </CarbonButton>
              <CarbonButton
                kind="ghost"
                size="sm"
                hasIconOnly
                iconDescription="YouTube"
                className="footer-social-button"
              >
                <LogoYoutube size={20} />
              </CarbonButton>
            </div>

            <div className="footer-links">
              <p className="footer-text">
                Copyright © 2024{" "}
                <span className="footer-text-bold">Inclusive Design Lab</span>
              </p>
              <a href="#" className="nav-link footer-link">
                Privacy Policy
              </a>
              <a href="#" className="nav-link footer-link">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
