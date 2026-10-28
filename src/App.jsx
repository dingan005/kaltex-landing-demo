import React, { useState } from 'react';

// Client handoff: update these values after the client confirms their official contact details.
const PHONE_DISPLAY = '9497771183';
const WHATSAPP_NUMBER = '919497771183';
const OFFICIAL_EMAIL = ''; // Add the verified company email, e.g. 'hello@company.com'

const waLink = (message = 'Hi KALTEX, I would like to enquire about vehicle insurance.') =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
const mailLink = (subject = 'Insurance enquiry') =>
  `mailto:${OFFICIAL_EMAIL}?subject=${encodeURIComponent(subject)}`;

const services = [
  { icon: '🚘', title: 'Car Insurance', text: 'Explore cover options and get support with renewals and policy questions.' },
  { icon: '🏍️', title: 'Two-Wheeler Insurance', text: 'Practical guidance for bike and scooter insurance requirements.' },
  { icon: '🚚', title: 'Commercial Vehicles', text: 'Insurance assistance for goods vehicles and business fleets.' },
  { icon: '🚌', title: 'Passenger Vehicles', text: 'Support for passenger-carrying vehicles and related policy needs.' },
  { icon: '🛺', title: 'Auto-Rickshaw Insurance', text: 'Guidance for auto-rickshaw owners and renewal requirements.' },
  { icon: '🚜', title: 'Other Vehicles', text: 'Ask us about insurance options for other eligible vehicle types.' },
];

const steps = [
  { number: '01', title: 'Tell us what you need', text: 'Share your vehicle type and whether you need a new policy, renewal or support.' },
  { number: '02', title: 'Get personal guidance', text: 'Our team will help you understand the next steps and information required.' },
  { number: '03', title: 'Move forward confidently', text: 'Get assistance with your enquiry and the relevant policy process.' },
];

function Icon({ name, size = 20 }) {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true };
  const paths = {
    arrow: <><path d="M5 12h14"/><path d="m13 5 7 7-7 7"/></>,
    phone: <><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2z"/></>,
    shield: <><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/><path d="m9 12 2 2 4-4"/></>,
    refresh: <><path d="M20 7v5h-5"/><path d="M4 17v-5h5"/><path d="M5.6 9A7 7 0 0 1 17.5 6L20 12M4 12l2.5 6A7 7 0 0 0 18.4 15"/></>,
    file: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h8"/></>,
    users: <><path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="10" cy="7" r="4"/><path d="M20 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/></>,
    clock: <><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></>,
    check: <path d="m5 12 4 4L19 6"/>,
    menu: <><path d="M4 6h16M4 12h16M4 18h16"/></>,
    close: <><path d="m18 6-12 12M6 6l12 12"/></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,
    pin: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2"/></>,
  };
  return <svg {...common}>{paths[name] || paths.check}</svg>;
}

function Brand({ light = false }) {
  return <a className={`brand ${light ? 'brand-light' : ''}`} href="#home" aria-label="KALTEX home">
    <span className="brand-mark"><span>K</span><i /></span>
    <span className="brand-copy"><strong>KALTEX</strong><small>INSURANCE CONSULTANCY</small></span>
  </a>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: '', vehicle: 'Car insurance', need: 'New policy', phone: '' });
  const [formError, setFormError] = useState('');

  const submitEnquiry = (event) => {
    event.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      setFormError('Please enter your name and phone number before continuing.');
      return;
    }
    setFormError('');
    const message = `Hi KALTEX, I would like an insurance enquiry.\nName: ${form.name}\nContact: ${form.phone}\nVehicle: ${form.vehicle}\nRequirement: ${form.need}`;
    window.open(waLink(message), '_blank', 'noopener,noreferrer');
  };

  const closeMenu = () => setMenuOpen(false);

  return <div className="site-shell" id="home">
    <div className="top-strip"><div className="container top-strip-inner"><span><span className="status-dot" /> Insurance guidance made simpler</span><a href={waLink('Hi KALTEX, I would like to speak with your team.')} target="_blank" rel="noreferrer"><Icon name="phone" size={14} /> Speak to our team: <strong>{PHONE_DISPLAY}</strong></a></div></div>

    <header className="header">
      <div className="container nav-wrap">
        <Brand />
        <button className="menu-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} onClick={() => setMenuOpen(!menuOpen)}><Icon name={menuOpen ? 'close' : 'menu'} size={23} /></button>
        <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'}>
          <a href="#services" onClick={closeMenu}>Our services</a><a href="#why-kaltex" onClick={closeMenu}>Why KALTEX</a><a href="#process" onClick={closeMenu}>How it works</a><a href="#contact" onClick={closeMenu}>Contact</a>
          <a className="nav-cta" href={waLink()} target="_blank" rel="noreferrer" onClick={closeMenu}>Get assistance <Icon name="arrow" size={16} /></a>
        </nav>
      </div>
    </header>

    <main>
      <section className="hero-section">
        <div className="hero-photo" role="img" aria-label="Family travelling by car on a scenic road" />
        <div className="hero-overlay" />
        <div className="container hero-content">
          <div className="hero-text">
            <div className="eyebrow eyebrow-light"><span /> YOUR SAFETY. OUR PRIORITY.</div>
            <h1>Confidence for<br />every <em>journey.</em></h1>
            <p className="hero-lede">Insurance guidance for the vehicles that keep your life moving. Get friendly support for new policies, renewals and claims.</p>
            <div className="hero-actions"><a className="button button-gold" href={waLink()} target="_blank" rel="noreferrer">Talk to an advisor <Icon name="arrow" size={18} /></a><a className="button button-glass" href="#services">Explore services</a></div>
            <div className="hero-points"><span><Icon name="shield" size={17} /> Helpful guidance</span><span><Icon name="clock" size={17} /> Responsive support</span></div>
          </div>
          <div className="hero-note"><span className="note-icon"><Icon name="shield" size={24} /></span><span><strong>Drive secure.<br />Live better.</strong><small>Support for your next step.</small></span></div>
        </div>
        <div className="hero-bottom"><div className="container hero-bottom-inner"><span>PERSONAL VEHICLES</span><i /><span>COMMERCIAL VEHICLES</span><i /><span>POLICY SUPPORT</span><i /><span>CLAIMS GUIDANCE</span></div></div>
      </section>

      <section className="intro-section section-pad">
        <div className="container intro-grid"><div><div className="eyebrow"><span /> INSURANCE, WITHOUT THE GUESSWORK</div><h2>Good guidance makes<br />all the <em>difference.</em></h2></div><div className="intro-copy"><p>Choosing or renewing vehicle insurance can feel complicated. KALTEX Insurance Consultancy is here to help you understand your options and navigate the process with greater confidence.</p><a className="text-link" href="#contact">Tell us what you need <Icon name="arrow" size={17} /></a></div></div>
        <div className="container value-strip"><div className="value-item"><span className="value-icon"><Icon name="users" size={22} /></span><div><strong>Personal guidance</strong><small>Support shaped around your enquiry</small></div></div><div className="value-item"><span className="value-icon"><Icon name="refresh" size={22} /></span><div><strong>Renewal assistance</strong><small>Help understanding the next steps</small></div></div><div className="value-item"><span className="value-icon"><Icon name="file" size={22} /></span><div><strong>Policy & claim support</strong><small>Guidance when you need it</small></div></div></div>
      </section>

      <section className="services-section section-pad" id="services"><div className="container"><div className="section-heading"><div><div className="eyebrow"><span /> OUR SERVICES</div><h2>Cover for the way<br />you <em>move.</em></h2></div><p>From your everyday commute to vehicles that power your business, start with a conversation about your insurance needs.</p></div>
        <div className="service-grid">{services.map((service, index) => <article className="service-card" key={service.title}><div className="service-card-top"><span className="service-icon">{service.icon}</span><span className="service-index">0{index + 1}</span></div><h3>{service.title}</h3><p>{service.text}</p><a href={waLink(`Hi KALTEX, I would like to enquire about ${service.title.toLowerCase()}.`)} target="_blank" rel="noreferrer" aria-label={`Enquire about ${service.title}`} className="card-arrow"><Icon name="arrow" size={19} /></a></article>)}</div>
        <p className="disclaimer">Coverage, eligibility, premium and policy terms depend on the insurer and the specific policy. Please confirm details before purchase.</p>
      </div></section>

      <section className="why-section section-pad" id="why-kaltex"><div className="container why-grid"><div className="why-visual"><img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1100&q=85" alt="Modern car on the road" loading="lazy"/><div className="why-badge"><span className="badge-shield"><Icon name="shield" size={28} /></span><span><strong>Your journey matters.</strong><small>Start with the right questions.</small></span></div></div><div className="why-content"><div className="eyebrow eyebrow-light"><span /> THE KALTEX APPROACH</div><h2>Support that puts<br /><em>you first.</em></h2><p>We believe insurance conversations should feel clear, personal and straightforward. Our goal is to help you understand the process and know what to do next.</p><div className="benefit-list"><div><span><Icon name="check" size={16} /></span><div><strong>Clear, helpful communication</strong><small>Understand the steps and information needed.</small></div></div><div><span><Icon name="check" size={16} /></span><div><strong>Assistance through key moments</strong><small>From policy enquiries to renewal and claim guidance.</small></div></div><div><span><Icon name="check" size={16} /></span><div><strong>A convenient point of contact</strong><small>Reach out and tell us what support you need.</small></div></div></div><a className="button button-gold" href={waLink('Hi KALTEX, I would like guidance about vehicle insurance.')} target="_blank" rel="noreferrer">Start a conversation <Icon name="arrow" size={17} /></a></div></div></section>

      <section className="process-section section-pad" id="process"><div className="container"><div className="section-heading process-heading"><div><div className="eyebrow"><span /> A SIMPLE PROCESS</div><h2>Three steps to<br /><em>get started.</em></h2></div><p>No complicated forms to begin. Tell us a little about your requirement and our team can guide you on the next step.</p></div><div className="steps-grid">{steps.map((step) => <article className="step-card" key={step.number}><span className="step-number">{step.number}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div></div></section>

      <section className="contact-section section-pad" id="contact"><div className="container contact-grid"><div className="contact-copy"><div className="eyebrow eyebrow-light"><span /> LET'S TALK</div><h2>Let's make your<br /><em>next step clearer.</em></h2><p>Tell us what you need help with. We'll open WhatsApp with your enquiry ready to send.</p><div className="contact-details"><a href={waLink('Hi KALTEX, I would like to enquire about insurance.')} target="_blank" rel="noreferrer"><span className="contact-icon"><Icon name="phone" size={19} /></span><span><small>Call or WhatsApp</small><strong>+91 {PHONE_DISPLAY}</strong></span><Icon name="arrow" size={17} /></a>{OFFICIAL_EMAIL && <a href={mailLink()}><span className="contact-icon"><Icon name="mail" size={19} /></span><span><small>Email us</small><strong>{OFFICIAL_EMAIL}</strong></span><Icon name="arrow" size={17} /></a>}</div></div>
        <form className="enquiry-card" onSubmit={submitEnquiry}><div className="form-heading"><span>QUICK ENQUIRY</span><h3>How can we help?</h3><p>Fill in the details and continue on WhatsApp.</p></div><label>Your name<input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Enter your name" autoComplete="name" /></label><label>Phone number<input value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="Your contact number" inputMode="tel" autoComplete="tel" /></label><div className="form-row"><label>Vehicle type<select value={form.vehicle} onChange={e => setForm({ ...form, vehicle: e.target.value })}>{services.map(s => <option key={s.title}>{s.title}</option>)}</select></label><label>I'm looking for<select value={form.need} onChange={e => setForm({ ...form, need: e.target.value })}><option>New policy</option><option>Policy renewal</option><option>Policy modification</option><option>Claim support</option><option>General guidance</option></select></label></div>{formError && <p className="form-error" role="alert">{formError}</p>}<button className="button button-navy form-submit" type="submit">Continue to WhatsApp <Icon name="arrow" size={17} /></button><small className="privacy-note">Your details are used to prepare this enquiry message. Nothing is submitted until you send it in WhatsApp.</small></form>
      </div></section>
    </main>

    <footer className="footer"><div className="container footer-main"><div className="footer-brand"><Brand light /><p>Your safety, our priority. Guidance for the journeys and vehicles that matter to you.</p></div><div className="footer-nav"><strong>Explore</strong><a href="#services">Our services</a><a href="#why-kaltex">Why KALTEX</a><a href="#process">How it works</a></div><div className="footer-nav"><strong>Get in touch</strong><a href={waLink()} target="_blank" rel="noreferrer">WhatsApp our team</a><a href={`tel:+91${PHONE_DISPLAY}`}>+91 {PHONE_DISPLAY}</a>{OFFICIAL_EMAIL && <a href={mailLink()}>{OFFICIAL_EMAIL}</a>}</div><div className="footer-cta"><span>READY WHEN YOU ARE</span><h3>Every journey<br />starts with a step.</h3><a href={waLink()} target="_blank" rel="noreferrer" className="footer-arrow"><Icon name="arrow" size={20} /></a></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} KALTEX Insurance Consultancy. All rights reserved.</span><span>Drive secure. Live better.</span></div></footer>
    <a className="floating-whatsapp" href={waLink()} target="_blank" rel="noreferrer" aria-label="Chat with KALTEX on WhatsApp"><span>✆</span><small>Chat with us</small></a>
  </div>;
}

export default App;
