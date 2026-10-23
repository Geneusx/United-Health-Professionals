const Person = ({ x, y, c, s = 1 }) => (
  <g transform={`translate(${x} ${y}) scale(${s})`}>
    <circle cx="0" cy="-92" r="22" fill="#f2c9a5" />
    <rect x="-26" y="-64" width="52" height="86" rx="22" fill={c} />
    <rect x="-22" y="20" width="16" height="64" rx="8" fill="#14233f" />
    <rect x="6" y="20" width="16" height="64" rx="8" fill="#14233f" />
  </g>
);

export const Community = () => (
  // <svg viewBox="0 0 1440 600" preserveAspectRatio="xMaxYMax slice" aria-hidden="true">
  //   <rect width="1440" height="600" fill="#cfe3fb"/><circle cx="1180" cy="120" r="66" fill="#f08a24"/>
  //   <path d="M0 400 Q360 280 720 380 T1440 340 V600 H0Z" fill="#9bc93f"/><path d="M0 500 Q400 430 800 500 T1440 470 V600 H0Z" fill="#6fa62a"/>
  //   <path d="M900 600 Q1000 520 1200 470 L1240 480 Q1080 540 1060 600Z" fill="#f4e9d2"/>
  //   <rect x="830" y="300" width="18" height="170" fill="#7a4b24"/><circle cx="839" cy="280" r="70" fill="#2f8a4f"/><circle cx="890" cy="320" r="46" fill="#3fa062"/>
  //   <Person x={1120} y={455} c="#0b45a6" s={1.3}/><Person x={1230} y={462} c="#f08a24" s={1.2}/>
  // </svg>

  <img src="image1.jpg" alt="" width="2000" height="1000" />
);

export const Home = () => (
  // <svg
  //   viewBox="0 0 1440 600"
  //   preserveAspectRatio="xMaxYMax slice"
  //   aria-hidden="true"
  // >
  //   <rect width="1440" height="600" fill="#fde9d2" />
  //   <rect y="500" width="1440" height="100" fill="#9bc93f" />
  //   <rect x="860" y="230" width="420" height="270" fill="#fff" />
  //   <path d="M830 240 L1070 90 L1310 240Z" fill="#0b45a6" />
  //   <rect
  //     x="900"
  //     y="290"
  //     width="90"
  //     height="80"
  //     rx="6"
  //     fill="#cfe3fb"
  //     stroke="#14233f"
  //     strokeWidth="6"
  //   />
  //   <rect
  //     x="1160"
  //     y="290"
  //     width="90"
  //     height="80"
  //     rx="6"
  //     fill="#cfe3fb"
  //     stroke="#14233f"
  //     strokeWidth="6"
  //   />
  //   <rect x="1030" y="360" width="80" height="140" rx="6" fill="#f08a24" />
  //   <path d="M1030 470 L1030 500 L890 500Z" fill="#d8dee8" />
  //   <circle
  //     cx="800"
  //     cy="520"
  //     r="34"
  //     fill="none"
  //     stroke="#14233f"
  //     strokeWidth="8"
  //   />
  //   <circle cx="745" cy="560" r="12" fill="#14233f" />
  //   <rect x="786" y="440" width="46" height="64" rx="18" fill="#0b45a6" />
  //   <circle cx="808" cy="420" r="22" fill="#f2c9a5" />
  //   <rect x="806" y="495" width="70" height="12" rx="6" fill="#14233f" />
  // </svg>

  <img src="image2.jpg" alt="" width="2000" height="1000" />
);
