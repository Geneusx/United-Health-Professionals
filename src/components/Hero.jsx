import { useState, useEffect } from "react";

import { Community, Home } from "./Scenes.jsx";

const SLIDES = [
  {
    e: "NDIS registered provider — Australia",
    a: "Disability support built for",
    b: "real lives",
    t: "United Health Professionals helps NDIS participants and their families get the right supports, from people who listen first.",
    c: ["Explore supports", "#supports"],
  },
  {
    e: "Out and about",
    a: "Your week, your way,",
    b: "in your community",
    t: "Social outings, work experience and travel training, planned around what you enjoy.",
    c: ["See daily living", "#supports"],
    art: <Community />,
  },
  {
    e: "At home",
    a: "A home that works",
    b: "for you",
    t: "Equipment trials, home changes and technology, sourced and set up with you.",
    c: ["Ask about equipment", "#contact"],
    art: <Home />,
  },
];

export function Hero() {
  const [i, setI] = useState(0);
  const [hold, setHold] = useState(false);
  useEffect(() => {
    if (hold || window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      return;
    const t = setInterval(() => setI((n) => (n + 1) % SLIDES.length), 6000);
    return () => clearInterval(t);
  }, [hold]);
  const go = (n) => setI((n + SLIDES.length) % SLIDES.length);
  return (
    <section
      className="hero"
      id="top"
      aria-roledescription="carousel"
      aria-label="Featured supports"
      onMouseEnter={() => setHold(true)}
      onMouseLeave={() => setHold(false)}
      onFocus={() => setHold(true)}
      onBlur={() => setHold(false)}
    >
      <div className="track" style={{ transform: `translateX(-${i * 100}%)` }}>
        {SLIDES.map((s, k) => (
          <div
            className="slide"
            key={k}
            role="group"
            aria-roledescription="slide"
            aria-label={`${k + 1} of ${SLIDES.length}`}
            aria-hidden={k !== i}
          >
            <div className={"bg" + (s.art ? "" : " ph")}>{s.art}</div>
            <div className="st">
              <div className="eyebrow">{s.e}</div>
              <h1>
                {s.a} <em>{s.b}</em>
              </h1>
              <p>{s.t}</p>
              <div className="cta">
                <a
                  className="btn sun"
                  href={s.c[1]}
                  tabIndex={k === i ? 0 : -1}
                >
                  {s.c[0]}
                </a>
                <a
                  className="btn ghost"
                  href="#how"
                  tabIndex={k === i ? 0 : -1}
                >
                  See how it works
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="ctl">
        <button aria-label="Previous slide" onClick={() => go(i - 1)}>
          ‹
        </button>
        <div className="dots">
          {SLIDES.map((_, k) => (
            <button
              key={k}
              aria-label={`Go to slide ${k + 1}`}
              aria-current={k === i}
              onClick={() => go(k)}
            ></button>
          ))}
        </div>
        <button aria-label="Next slide" onClick={() => go(i + 1)}>
          ›
        </button>
      </div>
    </section>
  );
}
