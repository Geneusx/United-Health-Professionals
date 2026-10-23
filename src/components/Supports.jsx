import { SUPPORTS } from '../data.js'

export const Supports = () => (
  <section className="sec alt" id="supports"><div className="wrap">
    <div className="lab">Services</div><h2>Supports that fit your plan</h2>
    <div className="bento">{SUPPORTS.map(([t, d, l], k) => (
      <div className={"card c" + k} key={t}><h3>{t}</h3><p>{d}</p><ul>{l.map(x => <li key={x}>{x}</li>)}</ul></div>))}</div>
  </div></section>
);
