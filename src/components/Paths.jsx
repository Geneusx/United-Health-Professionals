export const Paths = () => (
  <div className="paths"><div className="wrap">
    {[["I’m a participant", "Talk about your goals"], ["I’m a family member", "Support for someone you love"], ["I’m a referrer", "Refer a client to us"]].map(([t, d]) =>
      <a href="#contact" key={t}><b>{t}</b><span>{d}</span></a>)}
  </div></div>
);
