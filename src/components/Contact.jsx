import { useState } from "react";
import { SUPPORTS } from "../data.js";

export function Contact() {
  const blank = { name: "", email: "", topic: "Daily living", msg: "" };
  const [f, setF] = useState(blank);
  const [errs, setErrs] = useState({});
  const [sent, setSent] = useState(false);
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const submit = () => {
    const e = {};
    if (!f.name.trim()) e.name = "Enter your name so we know who to call.";
    if (!/^\S+@\S+\.\S+$/.test(f.email))
      e.email = "Enter an email address like name@example.com.";
    setErrs(e);
    if (!Object.keys(e).length) setSent(true);
  };
  return (
    <section className="sec" id="contact">
      <div className="wrap two">
        <div>
          <div className="lab">Contact</div>
          <h2>Book a free chat</h2>
          <p>
            Tell us a little and we’ll reply within one business day. You don’t
            need your NDIS number yet.
          </p>
          <p>
            <strong>Phone:</strong> 0-458-347-289 / 0-469-750-587 <br />
            <strong>Hours:</strong> Mon to Fri, 8am to 6pm AEST
          </p>
        </div>
        {sent ? (
          <div className="ok" role="status">
            <h3>Thanks, {f.name.split(" ")[0]}. We’ve got your message.</h3>
            <p>
              We’ll email {f.email} within one business day about{" "}
              {f.topic.toLowerCase()}.
            </p>
            <button
              className="btn ghost"
              onClick={() => {
                setSent(false);
                setF(blank);
              }}
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={(e) => e.preventDefault()} noValidate>
            <label htmlFor="n">Your name</label>
            <input
              id="n"
              value={f.name}
              onChange={set("name")}
              autoComplete="name"
            />
            {errs.name && <div className="err">{errs.name}</div>}
            <label htmlFor="e">Email</label>
            <input
              id="e"
              type="email"
              value={f.email}
              onChange={set("email")}
              autoComplete="email"
            />
            {errs.email && <div className="err">{errs.email}</div>}
            <label htmlFor="t">What would you like help with?</label>
            <select id="t" value={f.topic} onChange={set("topic")}>
              {SUPPORTS.map((s) => (
                <option key={s[0]}>{s[0]}</option>
              ))}
              <option>Not sure yet</option>
            </select>
            <label htmlFor="m">Anything else we should know? (optional)</label>
            <textarea
              id="m"
              rows="3"
              value={f.msg}
              onChange={set("msg")}
            ></textarea>
            <button className="btn" onClick={submit}>
              Send message
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
