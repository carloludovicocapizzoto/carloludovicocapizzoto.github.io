// Il testo italiano è già nell'HTML (buono per la SEO): qui ci sono solo le traduzioni EN.
// All'avvio salviamo l'italiano originale, così lo switch funziona in entrambe le direzioni.
const EN = {
  skip: "Skip to content",
  navLabel: "Main",
  "nav.about": "About",
  "nav.experience": "Experience",
  "nav.projects": "Projects",
  "nav.skills": "Skills",
  "nav.interests": "Interests",
  "nav.contact": "Contact",

  "hero.available": "Open to internships &amp; roles · from October 2026",
  "hero.hi": "Hi, I'm",
  "hero.sub": "co-founder &amp; CEO of <strong>GrowMi</strong>, digital marketing &amp; data analysis student <em>@ emlyon business school.</em>",
  "hero.statsLabel": "Key results",
  "cta.cv": "Download CV",
  "cta.contact": "Get in touch",
  "stat.tickets": "tickets sold",
  "stat.social": "social growth in 2 months, zero ads",
  "stat.revenue": "average revenue per event",
  "stat.blab": "attendees at Blab to the Park",

  "about.title": "About",
  "about.lead": "I was born in Messina, I'm 21, and I love growing things from zero: events, communities, products.",
  "about.p1": "I hold a bachelor's degree in <strong>CLEACC</strong> from Bocconi University (Economics and Management for Arts, Culture and Communication). Since September 2026 I've been studying <strong>digital marketing and data analysis</strong> at <strong>emlyon business school</strong> in Paris.",
  "about.p1b": "I come from a music high school and have played trumpet and piano for over ten years: art is the starting point of almost everything I do. Along the way I worked in luxury hospitality marketing at Villa d'Este and organized events for hundreds of students.",
  "about.p2": "I co-founded <a href=\"https://growmi.it\" target=\"_blank\" rel=\"noopener\">GrowMi</a>, which promotes emerging artists through live events in Milan. I wear many hats there: strategy, partnerships, social media, and I built our website and ticketing software using AI.",
  "about.p3": "I'm looking for an <strong>internship or role starting October 2026</strong> in marketing, growth or business development, where creativity meets data.",
  "about.photoAlt": "Photo of Carlo Ludovico Capizzoto",

  "exp.title": "Experience &amp; education",
  "exp.work": "Experience",
  "exp.edu": "Education",
  "exp.growmi.date": "Present",
  "exp.growmi.desc": "Startup promoting emerging artists and small brands through digital and live experiences in Milan. I lead a 12-person team structured around a board and department heads: strategy and marketing, business plans and sponsor proposals, budgeting with the finance team. I brought in the venue and every sponsor through cold outreach and negotiated a revenue-share deal with the venue.",
  "exp.vde.date": "Sep 2025 — Mar 2026",
  "exp.vde.desc": "Supported sales, marketing and communication for a five-star luxury hospitality group: managed B2B client databases, prepared materials for trade fairs and corporate meetings, created content for social media, newsletters and presentations, monitored digital performance and coordinated with agencies and partners.",
  "exp.ctm.date": "Jul — Aug 2025",
  "exp.ctm.place": "Naples",
  "exp.ctm.desc": "At a shipping agency: prepared port documentation for vessel clearance and coordinated cargo operations with port authorities, ship agents and operators.",
  "exp.blab.date": "Jun 2024 — Mar 2025",
  "exp.blab.desc": "Organized <em>Skitrip</em> (Skilab), a training event for 250+ students: logistics, a multidisciplinary team, communication strategy and promo videos in Premiere and Photoshop. For <em>Blab to the Park</em>, an event with 20,000+ attendees, I closed a sponsorship with a magazine brand through cold outreach.",
  "chip.students": "students at Skitrip",
  "exp.rep.date": "Oct 2024 — Oct 2025",
  "exp.rep.role": "Bligny Residence Representative",
  "exp.rep.desc": "Elected by residents: liaison between the university and the residence, support on administrative and logistical matters, community events, and work with management to improve services.",
  "chip.residents": "residents",
  "exp.lead": "Volunteering &amp; music",
  "exp.uis.date": "Mar 2025 — present",
  "exp.uis.place": "Italy · United Kingdom",
  "exp.uis.desc": "I coordinate a tutoring program between Italian student societies in the UK and Italy: scheduling, tutor recruitment and outreach to partner societies.",
  "exp.ars.date": "Sep 2017 — Sep 2023",
  "exp.ars.role": "Principal trumpet",
  "exp.ars.desc": "Concerts with orchestras and ensembles, including as principal trumpet at the Church of the Accademia di Santa Cecilia in Rome.",
  "exp.other": "Other experience",
  "exp.sec.role": "Security officer for concerts and events",
  "exp.sec.date": "Jul — Dec 2024",
  "exp.lg.role": "Lifeguard, 300+ daily visitors",
  "exp.lg.date": "Jun 2021 — Aug 2022",
  "chip.events": "live events",
  "chip.tickets": "tickets",
  "chip.team": "team members",
  "chip.attendees": "attendees",
  "chip.cold": "Cold outreach",
  "edu.emlyon.date": "Sep 2026 — present",
  "edu.emlyon.place": "Paris",
  "edu.bocconi.date": "Sep 2023 — Jul 2026",
  "edu.ainis.date": "Sep 2018 — Jul 2023",
  "edu.ainis.name": "Emilio Ainis Music High School",
  "edu.ainis.desc": "History of music, music technology, analysis and composition: theory, performance and digital production.",
  "edu.bocconi.name": "Bocconi University",

  "proj.title": "Projects &amp; results",
  "proj.growmi.tag": "Startup · Live events",
  "proj.growmi.title": "GrowMi — live events for emerging artists",
  "proj.growmi.desc": "From zero to three events in Milan with a steadily growing audience. Venue and sponsors landed through cold outreach, a revenue-share negotiated with the venue, and fully organic social growth.",
  "m.events": "live events",
  "m.tickets": "tickets sold",
  "m.growth": "more tickets event over event",
  "m.revenue": "revenue per event (revenue-share)",
  "m.social": "social growth in 2 months, no ads",
  "m.views": "average views per post",
  "m.attendees": "attendees",
  "proj.tech.tag": "Product · AI",
  "proj.tech.title": "GrowMi website &amp; ticketing",
  "proj.tech.desc": "Built the official website and the ticketing and guest-screening software, from checkout to the door, developed with AI.",
  "proj.blab.tag": "Partnership",
  "proj.blab.desc": "Sponsorship with a magazine brand, closed through cold outreach for Blab Bocconi's flagship event.",
  "proj.course.tag": "Course project",
  "proj.clean.title": "Smart cleaning system",
  "proj.clean.desc": "Concept for a smart cleaning system made of sensors, an app and micro-drones. From user need to product model.",
  "proj.ideas.title": "Idea validation platform",
  "proj.ideas.desc": "A platform to create product ideas and validate them with data before investing time and money.",
  "chip.sensors": "Sensors",
  "chip.drones": "Micro-drones",
  "chip.validation": "Validation",

  "skills.title": "Skills",
  "skills.mkt": "Marketing &amp; growth",
  "skills.social": "Social media strategy (organic growth)",
  "skills.content": "Content creation &amp; community",
  "skills.ga": "Google Analytics (basic)",
  "skills.bp": "Business plans &amp; commercial proposals",
  "skills.b2b": "B2B client database management",
  "skills.creative": "Creative production",
  "skills.hours": "hours of photo &amp; video editing",
  "skills.fr": "French — beginner",
  "skills.cert": "Certifications",
  "skills.lifeguard": "Lifeguard license · since 2021",
  "skills.events": "Event marketing",
  "skills.biz": "Business",
  "skills.outreach": "Cold outreach &amp; partnerships",
  "skills.nego": "Sponsor &amp; revenue-share negotiation",
  "skills.lead": "Team leadership (12 people)",
  "skills.tech": "Data &amp; tech",
  "skills.ai": "Building with AI (Claude Code)",
  "skills.lang": "Languages",
  "skills.it": "Italian — native",
  "skills.en": "English — fluent (IELTS 6.5)",

  "int.title": "Beyond work",
  "int.years": "years",
  "int.music.title": "Music",
  "int.music.desc": "Trumpet and piano, a music high school and six years as principal trumpet in an orchestra. It's where GrowMi comes from.",
  "int.gym.num": "Competitions",
  "int.gym.desc": "Competition experience: discipline, consistency and patience to see results.",
  "int.wp.num": "Team",
  "int.wp.title": "Water polo",
  "int.wp.desc": "A sport that teaches resilience and playing for the group.",
  "int.scout.num": "Outdoor",
  "int.scout.title": "Scouting",
  "int.scout.desc": "Leadership and strategic thinking when things don't go as planned.",

  "contact.title": "Contact",
  "contact.lead": "Got an internship, a project or just an idea? <em>Drop me a line.</em>",
  "contact.cv": "Download the PDF",
  "footer.top": "Back to top ↑",
};

const root = document.documentElement;
root.classList.add("js");

const store = {
  get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} },
};

/* ---------- Lingua ---------- */
const IT = {};
const textEls = document.querySelectorAll("[data-i18n]");
const ariaEls = document.querySelectorAll("[data-i18n-aria]");
const altEls = document.querySelectorAll("[data-i18n-alt]");
textEls.forEach((el) => { IT[el.dataset.i18n] = el.innerHTML; });
ariaEls.forEach((el) => { IT[el.dataset.i18nAria] = el.getAttribute("aria-label"); });
altEls.forEach((el) => { IT[el.dataset.i18nAlt] = el.getAttribute("alt"); });
const IT_TITLE = document.title;
const IT_DESC = document.querySelector('meta[name="description"]').content;

const langBtn = document.getElementById("lang-toggle");

function setLang(lang) {
  const dict = lang === "en" ? EN : IT;
  textEls.forEach((el) => { const v = dict[el.dataset.i18n]; if (v != null) el.innerHTML = v; });
  ariaEls.forEach((el) => { const v = dict[el.dataset.i18nAria]; if (v != null) el.setAttribute("aria-label", v); });
  altEls.forEach((el) => { const v = dict[el.dataset.i18nAlt]; if (v != null) el.setAttribute("alt", v); });

  root.lang = lang;
  document.title = lang === "en" ? "Carlo Ludovico Capizzoto — Resume & Portfolio" : IT_TITLE;
  document.querySelector('meta[name="description"]').content = lang === "en"
    ? "Carlo Ludovico Capizzoto: co-founder & CEO of GrowMi, Bocconi graduate (CLEACC), digital marketing & data analysis student at emlyon business school. Open to internships from October 2026."
    : IT_DESC;

  langBtn.querySelectorAll(".lang-opt").forEach((o) => o.classList.toggle("active", o.dataset.lang === lang));
  langBtn.setAttribute("aria-label", lang === "en" ? "Passa all'italiano" : "Switch to English");
  document.getElementById("theme-toggle").setAttribute("aria-label", lang === "en" ? "Toggle light/dark theme" : "Cambia tema chiaro/scuro");

  formatCounts(lang);
  store.set("lang", lang);
}

// ?lang=en nel link forza l'inglese (utile da condividere con recruiter esteri)
const urlLang = new URLSearchParams(location.search).get("lang");
const initialLang = urlLang === "en" || urlLang === "it"
  ? urlLang
  : store.get("lang") || (navigator.language && navigator.language.toLowerCase().startsWith("it") ? "it" : "en");

langBtn.addEventListener("click", () => setLang(root.lang === "en" ? "it" : "en"));

/* ---------- Tema ---------- */
document.getElementById("theme-toggle").addEventListener("click", () => {
  const current = root.getAttribute("data-theme")
    || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  const next = current === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  store.set("theme", next);
});

/* ---------- Contatori ---------- */
const counts = document.querySelectorAll(".count");
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

function fmt(n, el, lang) {
  // Formattazione manuale: it-IT non mette il punto nei numeri a 4 cifre (2000 invece di 2.000)
  return el.dataset.sep ? String(n).replace(/\B(?=(\d{3})+(?!\d))/g, lang === "en" ? "," : ".") : String(n);
}
function formatCounts(lang) {
  counts.forEach((el) => { if (el.dataset.done) el.textContent = fmt(+el.dataset.to, el, lang); });
}
function animate(el) {
  const to = +el.dataset.to;
  const dur = 1400;
  const start = performance.now();
  const step = (now) => {
    const p = Math.min((now - start) / dur, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = fmt(Math.round(to * eased), el, root.lang);
    if (p < 1) requestAnimationFrame(step);
    else el.dataset.done = "1";
  };
  requestAnimationFrame(step);
}

if (!reduceMotion && "IntersectionObserver" in window) {
  counts.forEach((el) => { el.textContent = "0"; });
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { animate(e.target); io.unobserve(e.target); }
    });
  }, { threshold: 0.6 });
  counts.forEach((el) => io.observe(el));

  // Reveal leggero delle sezioni
  const reveals = document.querySelectorAll(".section-head, .about-grid, .timeline-group, .card, .skills-grid, .contact-list, .contact-lead");
  reveals.forEach((el) => el.classList.add("reveal"));
  const ro = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("in"); ro.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  reveals.forEach((el) => ro.observe(el));
} else {
  counts.forEach((el) => { el.dataset.done = "1"; });
}

setLang(initialLang);

/* ---------- Header + anno ---------- */
const header = document.querySelector(".site-header");
const onScroll = () => header.classList.toggle("scrolled", scrollY > 8);
addEventListener("scroll", onScroll, { passive: true });
onScroll();
document.getElementById("year").textContent = new Date().getFullYear();
