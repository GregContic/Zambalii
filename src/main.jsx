import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Flame,
  Mail,
  MapPin,
  Menu,
  MoveUpRight,
  Phone,
  X,
} from "lucide-react";
import { navItems, restaurant, restaurantImages } from "./data";
import MenuPage from "./MenuPage";
import "./styles.css";

function SmartImage({ image, className = "" }) {
  const [source, setSource] = useState(image.local);
  return (
    <img
      className={className}
      src={source}
      alt={image.alt}
      loading="lazy"
      onError={() => {
        if (source !== image.demo) setSource(image.demo);
      }}
    />
  );
}

function Logo({ light = false }) {
  return (
    <a className={`logo ${light ? "logo--light" : ""}`} href="#home" aria-label="Zambalii Grill home">
      <span className="logo-mark"><Flame size={18} strokeWidth={2.4} /></span>
      <span><strong>ZAMBALII</strong><small>GRILL</small></span>
    </a>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="container nav-inner">
        <Logo />
        <nav className={`nav-links ${open ? "nav-links--open" : ""}`}>
          {navItems.map((item) => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}
          <a className="nav-cta" href={restaurant.contact.phoneLink} onClick={() => setOpen(false)}>Call us <Phone size={15} /></a>
        </nav>
        <button className="menu-toggle" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-image"><SmartImage image={restaurantImages.hero} className="hero-photo" /></div>
      <div className="hero-shade" />
      <div className="container hero-content">
        <p className="eyebrow eyebrow--light"><span /> Filipino grill house · Baguio</p>
        <h1>Good food.<br /><em>Good times.</em></h1>
        <p className="hero-copy">Gather around the grill for smoky favorites, Filipino comfort food, and a table worth lingering over.</p>
        <div className="hero-actions">
          <a className="button button--gold" href="#menu">Explore the menu <ArrowRight size={17} /></a>
          <a className="text-link text-link--light" href={restaurant.mapUrl} target="_blank" rel="noreferrer">Get directions <MoveUpRight size={16} /></a>
        </div>
      </div>
      <a className="scroll-cue" href="#menu"><span>Scroll to explore</span><ArrowDownRight size={18} /></a>
    </section>
  );
}

function SectionHeading({ eyebrow, title, children, light = false }) {
  return <div className={`section-heading ${light ? "section-heading--light" : ""}`}>
    <p className="eyebrow"><span /> {eyebrow}</p>
    <h2>{title}</h2>
    {children}
  </div>;
}

function FeaturedFood() {
  return (
    <section className="section menu-section" id="menu">
      <div className="container">
        <div className="menu-intro">
          <SectionHeading eyebrow="From the grill" title={<>A little smoky.<br /><em>A lot delicious.</em></>} />
          <p className="section-lead">The best meals start with a warm table and something sizzling in the middle. Explore a few placeholders for the dishes that make Zambalii yours.</p>
        </div>
        <div className="food-grid">
          {restaurantImages.featuredFood.map((food, index) => (
            <article className={`food-card food-card--${index + 1}`} key={food.name}>
              <div className="food-image"><SmartImage image={food} /></div>
              <div className="food-card-body"><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{food.name}</h3><p>{food.label}</p></div><ArrowUpRight size={20} /></div>
            </article>
          ))}
        </div>
        <div className="menu-note"><span>Menu details coming soon</span><p>Replace these featured placeholders with Zambalii Grill&apos;s confirmed dishes, descriptions, and prices.</p></div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container about-grid">
        <div className="about-image-wrap"><SmartImage image={{ ...restaurantImages.gallery[0], alt: "Warm restaurant dining space" }} className="about-image" /><span className="image-stamp">Made for<br /><em>slow meals</em></span></div>
        <div className="about-copy">
          <SectionHeading eyebrow="The Zambalii feeling" title={<>Come hungry.<br /><em>Stay awhile.</em></>} />
          <p>We&apos;re creating a place where the grill is always warm, the table is always welcoming, and every meal feels a little more special.</p>
          <p className="muted-copy">Zambalii Grill brings together smoky grilled favorites, Filipino comfort food, and a relaxed dining atmosphere in Baguio.</p>
          <a className="text-link" href="#visit">Plan your visit <ArrowRight size={17} /></a>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section className="section gallery-section" id="gallery">
      <div className="container">
        <div className="gallery-top"><SectionHeading eyebrow="Around the table" title={<>The good stuff<br /><em>is shared.</em></>} /><p>Food tastes better with company. Bring yours.</p></div>
        <div className="gallery-grid">{restaurantImages.gallery.map((image, index) => <div className={`gallery-item gallery-item--${index + 1}`} key={image.local}><SmartImage image={image} /><span>{index === 0 ? "The Zambalii table" : "Good times, gathered"}</span></div>)}</div>
      </div>
    </section>
  );
}

function VisitUs() {
  return (
    <section className="visit-section" id="visit">
      <div className="visit-pattern" />
      <div className="container visit-grid">
        <div><p className="eyebrow eyebrow--light"><span /> Come say hello</p><h2>Make room<br /><em>for good food.</em></h2><p className="visit-lead">Your next favorite table is waiting in the hills of Baguio.</p></div>
        <div className="visit-details">
          <div className="detail"><MapPin /><div><small>Find us at</small><p>{restaurant.address}</p></div></div>
          <a className="detail contact-detail" href={restaurant.contact.phoneLink}><Phone /><div><small>Contact</small><p>{restaurant.contact.phone}</p><span>Call or message us</span></div></a>
          <a className="detail contact-detail" href={restaurant.contact.emailLink}><Mail /><div><small>Email</small><p>{restaurant.contact.email}</p><span>Send us an email</span></div></a>
          <div className="visit-actions">
            <a className="button button--gold" href={restaurant.contact.phoneLink}>Call us <Phone size={16} /></a>
            <a className="button button--outline" href={restaurant.contact.emailLink}>Email us <Mail size={16} /></a>
          </div>
          <a className="button button--cream" href={restaurant.mapUrl} target="_blank" rel="noreferrer">Open in Google Maps <MoveUpRight size={16} /></a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return <footer className="footer"><div className="container footer-top"><Logo light /><p>{restaurant.description}</p><div className="footer-contact"><a href={restaurant.contact.phoneLink}>{restaurant.contact.phone}</a><a href={restaurant.contact.emailLink}>{restaurant.contact.email}</a></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Zambalii Grill</span><span>Baguio, Benguet</span><a href="#home">Back to top <ChevronDown size={15} /></a></div></footer>;
}

function App() {
  if (window.location.pathname === "/menu") return <MenuPage />;
  return <><Navbar /><main><Hero /><FeaturedFood /><About /><Gallery /><VisitUs /></main><Footer /></>;
}

createRoot(document.getElementById("root")).render(<StrictMode><App /></StrictMode>);
