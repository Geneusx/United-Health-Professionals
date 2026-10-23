export const Funding = () => (
  <section className="sec" id="funding"><div className="wrap">
    <div className="lab">Your funding</div><h2>We work with how your plan is managed</h2>
    <div className="fund">{[["Self-managed", "Choose any provider. We send clear, itemised invoices."], ["Plan-managed", "We bill your plan manager directly. Nothing to pay up front."], ["NDIA-managed", "We claim through the NDIS portal using your service agreement."]].map(([t, d]) => <div key={t}><h3>{t}</h3><p>{d}</p></div>)}</div>
  </div></section>
);
