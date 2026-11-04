const visualCopy = {
  finsight: { label: "FINANCIAL SIGNALS", eyebrow: "FinSight · Insights", color: "violet" },
  "one-toto": { label: "CAMPUS MOBILITY", eyebrow: "One Toto · Ride control", color: "cyan" },
  annrakshak: { label: "FOOD RESCUE NETWORK", eyebrow: "CareSync · Donations", color: "violet" },
  helpdesk: { label: "CAMPUS KNOWLEDGE", eyebrow: "Helpdesk · Agent routing", color: "cyan" },
  "no-run": { label: "RENTAL MARKETPLACE", eyebrow: "NO RUN · Discovery", color: "violet" },
};

function FinSightVisual() {
  return <>
    <div className="mock-window-top"><span /><span /><span /><b>FinSight / Overview</b></div>
    <div className="finance-metrics"><div><small>Business health</small><strong>Good <i>↗</i></strong></div><div><small>Cash flow</small><strong>₹ 2.4L</strong></div><div><small>Risk signal</small><strong className="signal">Low</strong></div></div>
    <svg className="finance-chart" viewBox="0 0 520 160" fill="none" aria-hidden="true"><path className="chart-grid" d="M0 25H520M0 65H520M0 105H520M0 145H520"/><path className="chart-line" d="M8 124C45 118 55 88 94 96S145 124 184 91 239 102 275 67 328 81 362 51 410 73 451 36 490 45 512 20"/><path className="chart-fill" d="M8 124C45 118 55 88 94 96S145 124 184 91 239 102 275 67 328 81 362 51 410 73 451 36 490 45 512 20V160H8Z"/></svg>
    <div className="mock-insight"><span className="insight-dot" /> AI INSIGHT <span>Revenue trend is improving this quarter</span></div>
  </>;
}

function TotoVisual() {
  return <>
    <div className="mock-window-top"><span /><span /><span /><b>One Toto / Ride requests</b></div>
    <div className="route-map"><svg viewBox="0 0 520 240" aria-hidden="true"><path className="map-grid" d="M0 50H520M0 110H520M0 170H520M75 0V240M170 0V240M265 0V240M360 0V240M455 0V240"/><path className="route-line" d="M87 166C127 112 163 77 242 93S335 159 432 69"/><circle className="route-pulse" cx="242" cy="93" r="22"/><circle className="route-stop" cx="87" cy="166" r="7"/><circle className="route-stop route-stop-active" cx="242" cy="93" r="8"/><circle className="route-stop" cx="432" cy="69" r="7"/></svg><div className="route-label label-a">COLLEGE</div><div className="route-label label-b">RAILWAY STATION</div><div className="route-label label-c">OFFICE</div></div>
    <div className="mock-booking"><span className="booking-icon">01</span><span><small>REQUEST ACCEPTED</small><b>Next ride · 09:15 AM</b></span><span className="booking-arrow">↗</span></div>
  </>;
}

function CareSyncVisual() {
  return <>
    <div className="mock-window-top"><span /><span /><span /><b>CareSync / Nearby donations</b></div>
    <div className="donation-layout"><div className="donation-map"><span className="map-ring ring-one"/><span className="map-ring ring-two"/><i className="map-pin pin-one"/><i className="map-pin pin-two"/><i className="map-pin pin-three"/><b>FOOD RESCUE<br />NETWORK</b></div><div className="donation-stack"><article><i>01</i><span><b>Fresh meals</b><small>1.2 km · 24 portions</small></span><em>Claim</em></article><article><i>02</i><span><b>Bakery items</b><small>2.4 km · 16 portions</small></span><em>Claim</em></article><article><i>03</i><span><b>Produce box</b><small>3.1 km · 08 portions</small></span><em>Claim</em></article></div></div>
  </>;
}

function HelpdeskVisual() {
  return <>
    <div className="mock-window-top"><span /><span /><span /><b>College Helpdesk / Ask a question</b></div>
    <div className="helpdesk-flow"><div className="helpdesk-message user-message"><small>STUDENT</small><p>Where can I find the scholarship renewal form?</p></div><div className="agent-route"><span>QUERY ROUTER</span><i>01</i><i>02</i><i>03</i><b>Scholarship desk</b></div><div className="helpdesk-message answer-message"><small>GROUNDED ANSWER · SCHOLARSHIP OFFICE</small><p>Download the renewal form from the Student Services portal.</p><span>Source · Student handbook, section 4.2</span></div></div>
  </>;
}

function NoRunVisual() {
  return <>
    <div className="mock-window-top"><span /><span /><span /><b>NO RUN / Discover rentals</b></div>
    <div className="rental-search"><span>Search products and categories</span><b>⌕</b></div>
    <div className="rental-products"><article><i className="product-shape product-laptop"/><small>Electronics</small><b>Work, without buying</b></article><article><i className="product-shape product-chair"/><small>Furniture</small><b>Set up your space</b></article><article><i className="product-shape product-scooter"/><small>Mobility</small><b>Move on your terms</b></article></div>
    <div className="rental-status"><span /> MARKETPLACE CONCEPT <b>IN PROGRESS</b></div>
  </>;
}

const visualComponents = {
  finsight: FinSightVisual,
  "one-toto": TotoVisual,
  annrakshak: CareSyncVisual,
  helpdesk: HelpdeskVisual,
  "no-run": NoRunVisual,
};

export default function ProjectVisual({ project }) {
  const data = visualCopy[project.id] || visualCopy.finsight;
  const Visual = visualComponents[project.id] || FinSightVisual;
  return <div className={`case-visual case-visual-${data.color}`} aria-hidden="true">
    <div className="case-visual-glow" />
    <div className={`mock-app mock-app-${project.id}`}>
      <Visual />
    </div>
    <span className="case-visual-caption">{data.label}</span>
  </div>;
}
