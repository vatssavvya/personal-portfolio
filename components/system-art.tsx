export function SystemArt() {
  return <div className="system-art" aria-hidden="true">
    <div className="art-caption"><span className="tiny-cross">+</span> SOFTWARE / RESEARCH <span>01 / 03</span></div>
    <svg className="system-svg" viewBox="0 0 460 370" fill="none">
      <defs><pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r=".8" fill="#323a33" /></pattern></defs>
      <rect width="460" height="370" fill="url(#dots)" />
      <g stroke="#354039" strokeWidth="1"><path d="M230 40 395 130 395 258 230 348 65 258 65 130Z"/><path d="m65 130 165 90 165-90M230 220v128M230 40v90m0 0L65 220m165-90 165 90M65 220l165 90 165-90M230 130v180"/><path d="m65 130 330 128M395 130 65 258" strokeDasharray="4 5"/></g>
      <g stroke="#66ff00" strokeWidth="1.2"><path d="m230 92 119 65v84l-119 65-119-65v-84Z" opacity=".65"/><path d="m111 157 119 65 119-65M230 222v84M230 92v130" opacity=".35"/><path d="m230 160 56 31v63l-56 30-56-30v-63Z"/><path d="m174 191 56 31 56-31M230 222v62"/></g>
      <g fill="#0b0e0c" stroke="#68766c"><circle cx="230" cy="40" r="4"/><circle cx="65" cy="130" r="4"/><circle cx="395" cy="130" r="4"/><circle cx="65" cy="258" r="4"/><circle cx="395" cy="258" r="4"/><circle cx="230" cy="348" r="4"/></g>
      <g fill="#66ff00"><circle cx="230" cy="92" r="3"/><circle cx="111" cy="241" r="3"/><circle cx="349" cy="157" r="3"/><circle cx="230" cy="222" r="4"/></g>
      <g fill="#77827a" fontFamily="monospace" fontSize="9"><text x="22" y="109">INPUT</text><text x="367" y="286">OUTPUT</text><text x="244" y="28">EXPLORE</text></g>
    </svg>
    <div className="art-footer"><span><span className="status-dot" /> SAVYA VATS</span><span>UCLA / CS</span></div>
  </div>;
}
export function ProbabilityArt() {
  return <div className="probability-art" aria-hidden="true"><span className="plot-label">REASONING UNDER UNCERTAINTY</span><svg viewBox="0 0 400 180" fill="none"><g stroke="#273528"><path d="M25 30h350M25 70h350M25 110h350M25 150h350M65 20v130M130 20v130M195 20v130M260 20v130M325 20v130"/></g><path d="M25 149c56 0 53-92 111-92s49 92 113 92h126" stroke="#596b58" strokeWidth="1.5" strokeDasharray="4 5"/><path d="M25 150c115 0 92-119 179-119s64 119 171 119" stroke="#66ff00" strokeWidth="2"/><path d="M25 150c115 0 92-119 179-119s64 119 171 119H25Z" fill="#66ff00" fillOpacity=".04"/><circle cx="204" cy="31" r="4" fill="#66ff00"/></svg><span className="plot-note">A conceptual view of probabilistic inference</span></div>;
}
