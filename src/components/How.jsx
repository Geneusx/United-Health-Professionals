import { STEPS } from '../data.js'

export const How = () => (
  <section className="sec band" id="how"><div className="wrap">
    <h2>Getting started takes four steps</h2><p style={{ color: "rgba(255,255,255,.75)" }}>No forms before you’ve spoken to a real person.</p>
    <div className="steps">{STEPS.map(([t, d], k) => <div key={t}><i>{k + 1}</i><h3>{t}</h3><p>{d}</p></div>)}</div>
  </div></section>
);
