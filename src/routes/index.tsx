import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Cake,
  Heart,
  Gem,
  Sparkles,
  MapPin,
  Phone,
  Instagram,
  Star,
  Check,
  Clock,
  Wallet,
  Wand2,
  ChevronRight,
} from "lucide-react";

import { Navbar } from "@/components/site/Navbar";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { useReveal } from "@/hooks/use-reveal";

import heroImg from "@/assets/hero-romantic.jpg";
import sBirthday from "@/assets/service-birthday.jpg";
import sDate from "@/assets/service-date.jpg";
import sAnniversary from "@/assets/service-anniversary.jpg";
import sProposal from "@/assets/service-proposal.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Celebration Carpet — Luxury Surprise Decorations in Dehradun" },
      {
        name: "description",
        content:
          "Premium birthday, anniversary, romantic date & proposal decorations in Dehradun. Balloons, candles, flowers & LED setups that turn moments into memories.",
      },
      { property: "og:title", content: "Celebration Carpet — Dehradun" },
      {
        property: "og:description",
        content:
          "Luxury surprise decorations in Dehradun — birthdays, anniversaries, romantic dates & proposals.",
      },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Great+Vibes&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
});

const services = [
  {
    icon: Cake,
    title: "Birthday Decorations",
    emoji: "🎂",
    desc: "Show-stopping balloon arches, glowing candles, and personalised backdrops to make their day unforgettable.",
    img: sBirthday,
  },
  {
    icon: Heart,
    title: "Romantic Date Setup",
    emoji: "💑",
    desc: "Candle-lit private dinners, rose petals, and warm fairy lights for an evening you'll never forget.",
    img: sDate,
  },
  {
    icon: Sparkles,
    title: "Anniversary Surprise",
    emoji: "💖",
    desc: "Heart balloon arrangements, bespoke décor, and dreamy lighting to relive the magic of love.",
    img: sAnniversary,
  },
  {
    icon: Gem,
    title: "Proposal Setup",
    emoji: "💍",
    desc: "MARRY ME setups with candles, petals, and cinematic lighting — a perfect 'yes' moment.",
    img: sProposal,
  },
];

const gallery = [g1, g2, g3, g4, g5, g6];

const reasons = [
  {
    icon: Wand2,
    title: "Custom Decorations",
    desc: "Every setup is hand-crafted to match your story, theme & venue in Dehradun.",
  },
  {
    icon: Wallet,
    title: "Affordable Pricing",
    desc: "Premium-quality décor packages designed for every budget — no hidden costs.",
  },
  {
    icon: Clock,
    title: "Fast Setup",
    desc: "Same-day surprises possible. Our team transforms any space in just a few hours.",
  },
  {
    icon: Star,
    title: "5-Star Experience",
    desc: "Hundreds of happy couples & families across Dehradun rate us a perfect 5.0.",
  },
];

const reviews = [
  {
    name: "Aarav & Meera",
    text: "Absolutely loved the experience! The room looked straight out of a movie. My wife was in tears — happy tears!",
    occasion: "Anniversary Surprise",
  },
  {
    name: "Riya Sharma",
    text: "Beautiful decoration and amazing service! They set up everything in 2 hours and it was breathtaking.",
    occasion: "Birthday Surprise",
  },
  {
    name: "Karan Mehta",
    text: "She said YES! The proposal setup was magical — candles, petals, lights. Worth every rupee.",
    occasion: "Proposal Setup",
  },
];

function Home() {
  useReveal();

  return (
    <div id="top" className="bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <WhyUs />
      <Reviews />
      <Booking />
      <Contact />
      <Footer />
      <WhatsAppFab />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroImg}
        alt="Romantic candle and rose petal heart decoration in a private room"
        width={1920}
        height={1280}
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />
      <div className="absolute inset-0 bg-gradient-overlay" />
      <div className="absolute inset-0 bg-background/40" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24 pb-16">
        <p className="reveal text-primary tracking-[0.5em] text-xs md:text-sm uppercase mb-6">
          ✦ Dehradun&apos;s Premium Surprise Studio ✦
        </p>
        <h1 className="reveal font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] mb-6">
          Turn Your <span className="font-script text-gradient-gold block md:inline">
            Moments
          </span>{" "}
          Into Memories
        </h1>
        <p className="reveal text-base md:text-xl text-foreground/80 max-w-2xl mx-auto mb-10 font-light">
          Luxury Birthday & Romantic Surprise Setups in Dehradun — balloons, candles,
          flowers & LED magic, designed to take their breath away.
        </p>
        <div className="reveal flex flex-col sm:flex-row gap-4 items-center justify-center">
          <a
            href="#booking"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-gold text-primary-foreground font-medium shadow-gold hover:scale-[1.04] transition-transform duration-300"
          >
            Book Your Surprise
            <ChevronRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
          <a
            href="#gallery"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-primary/40 text-foreground hover:bg-primary/10 transition-colors duration-300"
          >
            View Gallery
          </a>
        </div>

        <div className="reveal mt-16 flex items-center justify-center gap-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-1 text-primary">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={14} fill="currentColor" />
            ))}
          </div>
          <span>500+ Happy Couples</span>
          <span className="hidden sm:inline">•</span>
          <span className="hidden sm:inline">Same-Day Setup</span>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary/70 animate-float-slow">
        <div className="w-px h-14 bg-gradient-to-b from-transparent to-primary/60 mx-auto" />
      </div>
    </section>
  );
}

function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
}) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-16">
      <p className="reveal text-primary tracking-[0.4em] text-xs uppercase mb-4">
        {eyebrow}
      </p>
      <h2 className="reveal font-display text-4xl md:text-5xl lg:text-6xl mb-5">
        {title}
      </h2>
      <div className="reveal gold-divider w-32 mx-auto mb-5" />
      {subtitle && (
        <p className="reveal text-muted-foreground text-base md:text-lg font-light">
          {subtitle}
        </p>
      )}
    </div>
  );
}

function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 bg-gradient-dark">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Our Services"
          title={
            <>
              Crafted for <span className="font-script text-gradient-gold">every</span>{" "}
              celebration
            </>
          }
          subtitle="From whispered proposals to roaring birthday surprises — we design the moment, you live it forever."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="reveal group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-500 shadow-elegant hover:shadow-gold"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <s.icon size={18} className="text-primary" />
                  <span className="text-2xl">{s.emoji}</span>
                </div>
                <h3 className="font-display text-xl md:text-2xl mb-2 text-foreground">
                  {s.title}
                </h3>
                <p className="text-sm text-foreground/70 font-light leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Our Work"
          title={
            <>
              A gallery of{" "}
              <span className="font-script text-gradient-romance">love & light</span>
            </>
          }
          subtitle="Real setups, real smiles — a glimpse into the magic we create across Dehradun."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
          {gallery.map((src, i) => (
            <div
              key={i}
              className={`reveal group relative overflow-hidden rounded-xl shadow-elegant ${
                i === 0 || i === 4 ? "md:row-span-2 aspect-[3/4] md:aspect-[3/5]" : "aspect-square"
              }`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <img
                src={src}
                alt={`Decoration setup ${i + 1}`}
                loading="lazy"
                width={1024}
                height={1024}
                className="w-full h-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-4 left-4 right-4 translate-y-3 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                <span className="text-xs tracking-[0.3em] uppercase text-primary">
                  Celebration Carpet
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section id="why" className="relative py-24 md:py-32 bg-gradient-dark">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Why Choose Us"
          title={
            <>
              The art of an{" "}
              <span className="font-script text-gradient-gold">unforgettable</span>{" "}
              surprise
            </>
          }
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className="reveal group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-2"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <div className="absolute -top-6 left-8 w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold">
                <r.icon size={20} className="text-primary-foreground" />
              </div>
              <h3 className="mt-4 font-display text-xl mb-3">{r.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-light">
                {r.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section id="reviews" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Love Letters"
          title={
            <>
              Stories from our{" "}
              <span className="font-script text-gradient-romance">happy hearts</span>
            </>
          }
        />
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((r, i) => (
            <figure
              key={r.name}
              className="reveal relative p-8 rounded-2xl bg-card border border-border shadow-elegant"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="absolute -top-5 left-8 px-4 py-1 rounded-full bg-gradient-gold text-primary-foreground text-xs tracking-widest uppercase">
                5.0
              </div>
              <div className="flex items-center gap-1 text-primary mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={16} fill="currentColor" />
                ))}
              </div>
              <blockquote className="text-foreground/85 font-light leading-relaxed mb-6 text-lg">
                &ldquo;{r.text}&rdquo;
              </blockquote>
              <figcaption>
                <div className="font-display text-base">{r.name}</div>
                <div className="text-xs tracking-widest uppercase text-primary/80 mt-1">
                  {r.occasion}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Booking() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    occasion: "Birthday",
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi Celebration Carpet! I'd like to book a ${form.occasion} surprise on ${form.date}. Name: ${form.name}, Phone: ${form.phone}.`;
    const url = `https://wa.me/919999999999?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="booking" className="relative py-24 md:py-32 bg-gradient-dark">
      <div className="max-w-3xl mx-auto px-6">
        <SectionHeader
          eyebrow="Reserve Your Date"
          title={
            <>
              Book your <span className="font-script text-gradient-gold">surprise</span>
            </>
          }
          subtitle="Tell us your moment — we'll design the magic."
        />

        <form
          onSubmit={onSubmit}
          className="reveal relative p-8 md:p-12 rounded-3xl bg-card border border-border shadow-elegant"
        >
          <div className="grid sm:grid-cols-2 gap-5 mb-5">
            <Field label="Your Name">
              <input
                required
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Enter your full name"
                className="w-full bg-secondary/60 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition"
              />
            </Field>
            <Field label="Phone Number">
              <input
                required
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="+91 ..."
                className="w-full bg-secondary/60 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition"
              />
            </Field>
            <Field label="Date">
              <input
                required
                type="date"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className="w-full bg-secondary/60 border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition"
              />
            </Field>
            <Field label="Occasion Type">
              <select
                value={form.occasion}
                onChange={(e) => setForm({ ...form, occasion: e.target.value })}
                className="w-full bg-secondary/60 border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition"
              >
                <option>Birthday</option>
                <option>Romantic Date</option>
                <option>Anniversary</option>
                <option>Proposal</option>
                <option>Other</option>
              </select>
            </Field>
          </div>

          <button
            type="submit"
            className="w-full mt-3 px-8 py-4 rounded-full bg-gradient-gold text-primary-foreground font-medium shadow-gold hover:scale-[1.02] transition-transform duration-300"
          >
            Confirm Booking
          </button>

          {submitted && (
            <div className="mt-5 flex items-center justify-center gap-2 text-sm text-primary">
              <Check size={16} />
              We&apos;ve opened WhatsApp — send the message to confirm.
            </div>
          )}

          <p className="mt-6 text-center text-xs text-muted-foreground">
            By booking, you agree to be contacted on WhatsApp & phone for confirmation.
          </p>
        </form>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-xs tracking-[0.25em] uppercase text-muted-foreground mb-2">
        {label}
      </span>
      {children}
    </label>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Get in Touch"
          title={
            <>
              Let&apos;s create{" "}
              <span className="font-script text-gradient-romance">something beautiful</span>
            </>
          }
        />
        <div className="grid md:grid-cols-3 gap-6">
          <ContactCard
            icon={MapPin}
            title="Visit Us"
            line1="Dehradun"
            line2="Uttarakhand, India"
            href="https://maps.google.com/?q=Dehradun"
            cta="Open in Maps"
          />
          <ContactCard
            icon={Phone}
            title="WhatsApp"
            line1="Quick replies, 24/7"
            line2="+91 99999 99999"
            href="https://wa.me/919999999999"
            cta="Chat on WhatsApp"
            highlight
          />
          <ContactCard
            icon={Instagram}
            title="Instagram"
            line1="See our latest setups"
            line2="@celebrationcarpet"
            href="https://instagram.com/"
            cta="Follow Us"
          />
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon: Icon,
  title,
  line1,
  line2,
  href,
  cta,
  highlight,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  line1: string;
  line2: string;
  href: string;
  cta: string;
  highlight?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`reveal group relative p-8 rounded-2xl border transition-all duration-500 hover:-translate-y-2 ${
        highlight
          ? "bg-gradient-gold text-primary-foreground border-transparent shadow-gold"
          : "bg-card border-border hover:border-primary/50 shadow-elegant"
      }`}
    >
      <Icon
        size={28}
        className={highlight ? "text-primary-foreground" : "text-primary"}
      />
      <h3 className="mt-5 font-display text-xl">{title}</h3>
      <p className={`mt-1 ${highlight ? "text-primary-foreground/85" : "text-muted-foreground"}`}>
        {line1}
      </p>
      <p className="font-medium mt-1">{line2}</p>
      <div className="mt-5 inline-flex items-center gap-1 text-sm">
        {cta}
        <ChevronRight
          size={16}
          className="group-hover:translate-x-1 transition-transform"
        />
      </div>
    </a>
  );
}

function Footer() {
  return (
    <footer className="relative pt-20 pb-10 border-t border-border bg-card/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="flex items-baseline gap-2 mb-3">
              <span className="text-3xl font-script text-gradient-gold">
                Celebration
              </span>
              <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
                Carpet
              </span>
            </div>
            <p className="text-sm text-muted-foreground font-light max-w-xs leading-relaxed">
              Dehradun&apos;s premium surprise studio — designing unforgettable
              moments with balloons, candles, flowers & light.
            </p>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-primary mb-4">
              Explore
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#gallery" className="hover:text-primary transition-colors">Gallery</a></li>
              <li><a href="#reviews" className="hover:text-primary transition-colors">Reviews</a></li>
              <li><a href="#booking" className="hover:text-primary transition-colors">Book Now</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-primary mb-4">
              Follow
            </h4>
            <div className="flex gap-3">
              <SocialIcon href="https://instagram.com/" label="Instagram">
                <Instagram size={18} />
              </SocialIcon>
              <SocialIcon href="https://wa.me/919999999999" label="WhatsApp">
                <MessageCircleSmall />
              </SocialIcon>
              <SocialIcon href="tel:+919999999999" label="Phone">
                <Phone size={18} />
              </SocialIcon>
            </div>
            <p className="mt-5 text-sm text-muted-foreground">
              Dehradun, Uttarakhand, India
            </p>
          </div>
        </div>

        <div className="gold-divider mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Celebration Carpet. All rights reserved.</p>
          <p className="font-script text-base text-gradient-gold">
            Crafted with love in Dehradun
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground/80 hover:bg-gradient-gold hover:text-primary-foreground hover:border-transparent transition-all duration-300"
    >
      {children}
    </a>
  );
}

function MessageCircleSmall() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}
