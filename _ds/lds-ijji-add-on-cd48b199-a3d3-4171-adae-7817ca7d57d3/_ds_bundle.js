/* @ds-bundle: {"format":4,"namespace":"LandometerDesignSystem_514efc","components":[{"name":"IjjiMotif","sourcePath":"addons/ijji/motif/IjjiMotif.jsx"},{"name":"IjjiWorkingIndicator","sourcePath":"addons/ijji/motif/IjjiMotif.jsx"},{"name":"IJJI_MOTIFS","sourcePath":"addons/ijji/motif/ijji-motifs.js"},{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"Link","sourcePath":"components/actions/Link.jsx"},{"name":"Segmented","sourcePath":"components/actions/Segmented.jsx"},{"name":"DataTable","sourcePath":"components/data/DataTable.jsx"},{"name":"MapLegend","sourcePath":"components/data/MapLegend.jsx"},{"name":"DecisionCard","sourcePath":"components/evidence/DecisionCard.jsx"},{"name":"SourceLedger","sourcePath":"components/evidence/SourceLedger.jsx"},{"name":"TrustBadge","sourcePath":"components/evidence/TrustBadge.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"EmptyState","sourcePath":"components/feedback/EmptyState.jsx"},{"name":"ErrorState","sourcePath":"components/feedback/ErrorState.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"FormField","sourcePath":"components/forms/FormField.jsx"},{"name":"Icon","sourcePath":"components/icons/Icon.jsx"},{"name":"BrandSignature","sourcePath":"components/identity/BrandSignature.jsx"},{"name":"AtmosphereSurface","sourcePath":"components/surfaces/AtmosphereSurface.jsx"}],"sourceHashes":{"addons/ijji/motif/IjjiMotif.jsx":"0258375e5a74","addons/ijji/motif/ijji-motifs.js":"4f341f6bc0c7","components/actions/Button.jsx":"14e6754f7d8a","components/actions/Link.jsx":"b4be9a7d6174","components/actions/Segmented.jsx":"0d21fe967a15","components/data/DataTable.jsx":"f86aa861958e","components/data/MapLegend.jsx":"fbc5d072bb12","components/evidence/DecisionCard.jsx":"8f34f5dfaefe","components/evidence/SourceLedger.jsx":"505a2eb4b4df","components/evidence/TrustBadge.jsx":"1c8a17c7269c","components/feedback/Dialog.jsx":"f96fd4aeb778","components/feedback/EmptyState.jsx":"1fa9f2fa217f","components/feedback/ErrorState.jsx":"8bafd92c9362","components/feedback/Toast.jsx":"705c7bbbc934","components/forms/FormField.jsx":"5f4173ecf296","components/icons/Icon.jsx":"6e230857a536","components/identity/BrandSignature.jsx":"edcba4631442","components/surfaces/AtmosphereSurface.jsx":"f838920f5455","ui_kits/identity-playground/App.kit.js":"7396cbe30d64","ui_kits/identity-playground/LabScreen.kit.js":"083510e63cba","ui_kits/identity-playground/ReferenceScreen.kit.js":"7c7a9cfb2a72","ui_kits/identity-playground/Shell.kit.js":"b55c10cd8c87","ui_kits/identity-playground/StartScreen.kit.js":"5cc1e76d0834"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.LandometerDesignSystem_514efc = window.LandometerDesignSystem_514efc || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// addons/ijji/motif/IjjiMotif.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* ijji.four-beat motif — ijji-owned asset, adopted 2026-09-04 (ijji-motif-four-beat.approval.yml).
   Not a logo and never a substitute for one. The component enforces what the record requires:
   the three canvas-framed files are restricted (mint on canvas measures 1.84:1), a mark is
   decorative unless it is genuinely the content, and motion only exists when a real operation
   is pending. Markup comes from the approved ijji-motifs.js table — never redrawn here. */

const MOTIF_MIN_PX = {
  'graph-b': 72,
  'rings-c': 40,
  'rotate-b': 24
};
const SURFACE_SUBSTITUTION = {
  canvas: 'transparent-ink'
};
const warned = {};
function warnOnce(key, message) {
  if (warned[key]) return;
  warned[key] = true;
  if (typeof console !== 'undefined') console.warn('[IjjiMotif] ' + message);
}
function motifMarkup(key) {
  if (typeof window === 'undefined') return null;
  const table = window.IJJI_MOTIFS || (window.LandometerDesignSystem_514efc || {}).IJJI_MOTIFS;
  return table && table[key] || null;
}

/**
 * One motif from the approved set at one approved surface.
 * `animated` may only be true while a real operation is pending — see IjjiWorkingIndicator.
 */
function IjjiMotif({
  motif = 'rotate-b',
  surface = 'transparent-ink',
  size = 120,
  animated = false,
  speed,
  label,
  style,
  ...rest
}) {
  const resolvedSurface = SURFACE_SUBSTITUTION[surface] || surface;
  if (resolvedSurface !== surface) {
    warnOnce('surface-' + surface, 'surface "' + surface + '" is restricted (mint on canvas measures 1.84:1, below the 3:1 recognition floor) — rendering "' + resolvedSurface + '" instead. See CONTRAST-EVIDENCE.json.');
  }
  const px = typeof size === 'number' ? size : parseInt(size, 10) || 120;
  const min = MOTIF_MIN_PX[motif];
  if (min && px < min) {
    warnOnce('size-' + motif, motif + ' loses its smallest head below ' + min + 'px. Use ' + (motif === 'graph-b' ? 'rings-c or rotate-b' : 'rotate-b') + ' at this size.');
  }
  const key = motif + '-' + resolvedSurface;
  let markup = motifMarkup(key);
  if (!markup) {
    warnOnce('missing-' + key, 'no markup for "' + key + '". Load addons/ijji/motif/ijji-motifs.js (the design-system bundle includes it) before rendering.');
    return null;
  }
  if (!animated) markup = markup.replace(/ ijji-(graph-b|rings-c|rotate-b)"/, '"');
  markup = label ? markup.replace(/aria-label="[^"]*"/, 'aria-label="' + String(label).replace(/"/g, '&quot;') + '"') : markup.replace(/role="img" aria-label="[^"]*"/, 'aria-hidden="true" focusable="false"');
  const carrier = {
    display: 'block',
    width: px + 'px',
    height: px + 'px',
    flex: 'none',
    ...(speed ? {
      '--ijji-speed': String(speed)
    } : null),
    ...style
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: carrier,
    "aria-hidden": label ? undefined : true,
    dangerouslySetInnerHTML: {
      __html: markup
    }
  }, rest));
}

/**
 * The one sanctioned motion job: a mark that turns only while a real operation is pending.
 * The visible line and the counted elapsed time carry the status; the mark is always aria-hidden.
 * Unmount it the moment the operation succeeds, fails, is cancelled or times out.
 */
function IjjiWorkingIndicator({
  label,
  startedAt,
  onCancel,
  cancelLabel = 'หยุดรอ',
  slowAfterSeconds = 8,
  slowLabel = 'ใช้เวลานานกว่าปกติ',
  motif = 'rotate-b',
  surface = 'transparent-ink',
  size = 44,
  style,
  ...rest
}) {
  const began = React.useRef(startedAt || Date.now());
  const [elapsed, setElapsed] = React.useState(Math.max(0, Math.round((Date.now() - began.current) / 1000)));
  React.useEffect(() => {
    const t = setInterval(() => setElapsed(Math.max(0, Math.round((Date.now() - began.current) / 1000))), 1000);
    return () => clearInterval(t);
  }, []);
  const slow = elapsed >= slowAfterSeconds;
  const row = {
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--space-3)',
    ...style
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    "aria-live": "polite",
    style: row
  }, rest), /*#__PURE__*/React.createElement(IjjiMotif, {
    motif: motif,
    surface: surface,
    size: size,
    animated: true
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--text-primary)',
      fontSize: 'var(--type-body)',
      lineHeight: 'var(--leading-body-compact)'
    }
  }, /*#__PURE__*/React.createElement("span", null, label), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-metadata)'
    }
  }, ' · ' + elapsed + ' วิ'), slow ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-metadata)'
    }
  }, ' · ' + slowLabel) : null), onCancel ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn",
    onClick: onCancel
  }, cancelLabel) : null);
}
Object.assign(__ds_scope, { IjjiMotif, IjjiWorkingIndicator });
})(); } catch (e) { __ds_ns.__errors.push({ path: "addons/ijji/motif/IjjiMotif.jsx", error: String((e && e.message) || e) }); }

// addons/ijji/motif/ijji-motifs.js
try { (() => {
// ijji motif markup — selected set, 18 inline SVG strings keyed "<motif>-<surface>".
// Pair with ijji-motion.css: inline the markup, link the stylesheet, motion runs from CSS.
//   el.innerHTML = IJJI_MOTIFS["rings-c-transparent-mint"];
const IJJI_MOTIFS = {
  "graph-b-canvas": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-20 -20 240 240\" width=\"240\" height=\"240\" role=\"img\" aria-label=\"ijji motif — Exponential four, Climb from the base, on canvas\" class=\"ijji-motif ijji-graph-b\"><rect x=\"-20\" y=\"-20\" width=\"240\" height=\"240\" rx=\"24\" fill=\"#FCFCFA\" stroke=\"#C9D0CB\" stroke-width=\"1\"/><circle class=\"im-d0\" cx=\"30\" cy=\"163\" r=\"6.69\" fill=\"#0AD69C\"/><circle class=\"im-d1\" cx=\"64.566\" cy=\"144\" r=\"10.593\" fill=\"#0AD69C\"/><circle class=\"im-d2\" cx=\"104.708\" cy=\"109\" r=\"14.496\" fill=\"#0AD69C\"/><circle class=\"im-d3\" cx=\"156\" cy=\"47\" r=\"21.186\" fill=\"#0AD69C\"/></svg>",
  "graph-b-brand-blue": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-20 -20 240 240\" width=\"240\" height=\"240\" role=\"img\" aria-label=\"ijji motif — Exponential four, Climb from the base, on brand blue\" class=\"ijji-motif ijji-graph-b\"><rect x=\"-20\" y=\"-20\" width=\"240\" height=\"240\" rx=\"24\" fill=\"#1D4497\"/><circle class=\"im-d0\" cx=\"30\" cy=\"163\" r=\"6.69\" fill=\"#0AD69C\"/><circle class=\"im-d1\" cx=\"64.566\" cy=\"144\" r=\"10.593\" fill=\"#0AD69C\"/><circle class=\"im-d2\" cx=\"104.708\" cy=\"109\" r=\"14.496\" fill=\"#0AD69C\"/><circle class=\"im-d3\" cx=\"156\" cy=\"47\" r=\"21.186\" fill=\"#0AD69C\"/></svg>",
  "graph-b-ground-mist": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-20 -20 240 240\" width=\"240\" height=\"240\" role=\"img\" aria-label=\"ijji motif — Exponential four, Climb from the base, on ground mist\" class=\"ijji-motif ijji-graph-b\"><defs><linearGradient id=\"bg-graph-b-ground-mist\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0\" stop-color=\"#C4E0EE\"/><stop offset=\".5\" stop-color=\"#B2E2E2\"/><stop offset=\"1\" stop-color=\"#CCE6D0\"/></linearGradient></defs><rect x=\"-20\" y=\"-20\" width=\"240\" height=\"240\" rx=\"24\" fill=\"url(#bg-graph-b-ground-mist)\"/><circle class=\"im-d0\" cx=\"30\" cy=\"163\" r=\"6.69\" fill=\"none\" stroke=\"#182327\" stroke-width=\"4\"/><circle class=\"im-d1\" cx=\"64.566\" cy=\"144\" r=\"10.593\" fill=\"none\" stroke=\"#182327\" stroke-width=\"4\"/><circle class=\"im-d2\" cx=\"104.708\" cy=\"109\" r=\"14.496\" fill=\"none\" stroke=\"#182327\" stroke-width=\"4\"/><circle class=\"im-d3\" cx=\"156\" cy=\"47\" r=\"21.186\" fill=\"none\" stroke=\"#182327\" stroke-width=\"4\"/></svg>",
  "graph-b-dark": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-20 -20 240 240\" width=\"240\" height=\"240\" role=\"img\" aria-label=\"ijji motif — Exponential four, Climb from the base, on dark\" class=\"ijji-motif ijji-graph-b\"><rect x=\"-20\" y=\"-20\" width=\"240\" height=\"240\" rx=\"24\" fill=\"#20292D\" stroke=\"#46524F\" stroke-width=\"1\"/><circle class=\"im-d0\" cx=\"30\" cy=\"163\" r=\"6.69\" fill=\"#0AD69C\"/><circle class=\"im-d1\" cx=\"64.566\" cy=\"144\" r=\"10.593\" fill=\"#0AD69C\"/><circle class=\"im-d2\" cx=\"104.708\" cy=\"109\" r=\"14.496\" fill=\"#0AD69C\"/><circle class=\"im-d3\" cx=\"156\" cy=\"47\" r=\"21.186\" fill=\"#0AD69C\"/></svg>",
  "graph-b-transparent-mint": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-20 -20 240 240\" width=\"240\" height=\"240\" role=\"img\" aria-label=\"ijji motif — Exponential four, Climb from the base, on transparent, mint\" class=\"ijji-motif ijji-graph-b\"><circle class=\"im-d0\" cx=\"30\" cy=\"163\" r=\"6.69\" fill=\"#0AD69C\"/><circle class=\"im-d1\" cx=\"64.566\" cy=\"144\" r=\"10.593\" fill=\"#0AD69C\"/><circle class=\"im-d2\" cx=\"104.708\" cy=\"109\" r=\"14.496\" fill=\"#0AD69C\"/><circle class=\"im-d3\" cx=\"156\" cy=\"47\" r=\"21.186\" fill=\"#0AD69C\"/></svg>",
  "graph-b-transparent-ink": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-20 -20 240 240\" width=\"240\" height=\"240\" role=\"img\" aria-label=\"ijji motif — Exponential four, Climb from the base, on transparent, outline\" class=\"ijji-motif ijji-graph-b\"><circle class=\"im-d0\" cx=\"30\" cy=\"163\" r=\"6.69\" fill=\"none\" stroke=\"#182327\" stroke-width=\"4\"/><circle class=\"im-d1\" cx=\"64.566\" cy=\"144\" r=\"10.593\" fill=\"none\" stroke=\"#182327\" stroke-width=\"4\"/><circle class=\"im-d2\" cx=\"104.708\" cy=\"109\" r=\"14.496\" fill=\"none\" stroke=\"#182327\" stroke-width=\"4\"/><circle class=\"im-d3\" cx=\"156\" cy=\"47\" r=\"21.186\" fill=\"none\" stroke=\"#182327\" stroke-width=\"4\"/></svg>",
  "rings-c-canvas": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-20 -20 240 240\" width=\"240\" height=\"240\" role=\"img\" aria-label=\"ijji motif — Three rings, Draw on the phrase, on canvas\" class=\"ijji-motif ijji-rings-c\"><rect x=\"-20\" y=\"-20\" width=\"240\" height=\"240\" rx=\"24\" fill=\"#FCFCFA\" stroke=\"#C9D0CB\" stroke-width=\"1\"/><circle class=\"im-r0\" cx=\"100\" cy=\"100\" r=\"34\" fill=\"none\" stroke=\"#0AD69C\" stroke-width=\"7\" stroke-linecap=\"round\" vector-effect=\"non-scaling-stroke\" pathLength=\"1\" stroke-dasharray=\"1\"/><circle class=\"im-r1\" cx=\"100\" cy=\"100\" r=\"58\" fill=\"none\" stroke=\"#0AD69C\" stroke-width=\"9\" stroke-linecap=\"round\" vector-effect=\"non-scaling-stroke\" pathLength=\"1\" stroke-dasharray=\"1\"/><circle class=\"im-r2\" cx=\"100\" cy=\"100\" r=\"82\" fill=\"none\" stroke=\"#0AD69C\" stroke-width=\"11\" stroke-linecap=\"round\" vector-effect=\"non-scaling-stroke\" pathLength=\"1\" stroke-dasharray=\"1\"/><circle class=\"im-hub\" cx=\"100\" cy=\"100\" r=\"10\" fill=\"#0AD69C\"/></svg>",
  "rings-c-brand-blue": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-20 -20 240 240\" width=\"240\" height=\"240\" role=\"img\" aria-label=\"ijji motif — Three rings, Draw on the phrase, on brand blue\" class=\"ijji-motif ijji-rings-c\"><rect x=\"-20\" y=\"-20\" width=\"240\" height=\"240\" rx=\"24\" fill=\"#1D4497\"/><circle class=\"im-r0\" cx=\"100\" cy=\"100\" r=\"34\" fill=\"none\" stroke=\"#0AD69C\" stroke-width=\"7\" stroke-linecap=\"round\" vector-effect=\"non-scaling-stroke\" pathLength=\"1\" stroke-dasharray=\"1\"/><circle class=\"im-r1\" cx=\"100\" cy=\"100\" r=\"58\" fill=\"none\" stroke=\"#0AD69C\" stroke-width=\"9\" stroke-linecap=\"round\" vector-effect=\"non-scaling-stroke\" pathLength=\"1\" stroke-dasharray=\"1\"/><circle class=\"im-r2\" cx=\"100\" cy=\"100\" r=\"82\" fill=\"none\" stroke=\"#0AD69C\" stroke-width=\"11\" stroke-linecap=\"round\" vector-effect=\"non-scaling-stroke\" pathLength=\"1\" stroke-dasharray=\"1\"/><circle class=\"im-hub\" cx=\"100\" cy=\"100\" r=\"10\" fill=\"#0AD69C\"/></svg>",
  "rings-c-ground-mist": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-20 -20 240 240\" width=\"240\" height=\"240\" role=\"img\" aria-label=\"ijji motif — Three rings, Draw on the phrase, on ground mist\" class=\"ijji-motif ijji-rings-c\"><defs><linearGradient id=\"bg-rings-c-ground-mist\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0\" stop-color=\"#C4E0EE\"/><stop offset=\".5\" stop-color=\"#B2E2E2\"/><stop offset=\"1\" stop-color=\"#CCE6D0\"/></linearGradient></defs><rect x=\"-20\" y=\"-20\" width=\"240\" height=\"240\" rx=\"24\" fill=\"url(#bg-rings-c-ground-mist)\"/><circle class=\"im-r0\" cx=\"100\" cy=\"100\" r=\"34\" fill=\"none\" stroke=\"#182327\" stroke-width=\"4\" stroke-linecap=\"round\" vector-effect=\"non-scaling-stroke\" pathLength=\"1\" stroke-dasharray=\"1\"/><circle class=\"im-r1\" cx=\"100\" cy=\"100\" r=\"58\" fill=\"none\" stroke=\"#182327\" stroke-width=\"4\" stroke-linecap=\"round\" vector-effect=\"non-scaling-stroke\" pathLength=\"1\" stroke-dasharray=\"1\"/><circle class=\"im-r2\" cx=\"100\" cy=\"100\" r=\"82\" fill=\"none\" stroke=\"#182327\" stroke-width=\"4\" stroke-linecap=\"round\" vector-effect=\"non-scaling-stroke\" pathLength=\"1\" stroke-dasharray=\"1\"/><circle class=\"im-hub\" cx=\"100\" cy=\"100\" r=\"10\" fill=\"none\" stroke=\"#182327\" stroke-width=\"4\"/></svg>",
  "rings-c-dark": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-20 -20 240 240\" width=\"240\" height=\"240\" role=\"img\" aria-label=\"ijji motif — Three rings, Draw on the phrase, on dark\" class=\"ijji-motif ijji-rings-c\"><rect x=\"-20\" y=\"-20\" width=\"240\" height=\"240\" rx=\"24\" fill=\"#20292D\" stroke=\"#46524F\" stroke-width=\"1\"/><circle class=\"im-r0\" cx=\"100\" cy=\"100\" r=\"34\" fill=\"none\" stroke=\"#0AD69C\" stroke-width=\"7\" stroke-linecap=\"round\" vector-effect=\"non-scaling-stroke\" pathLength=\"1\" stroke-dasharray=\"1\"/><circle class=\"im-r1\" cx=\"100\" cy=\"100\" r=\"58\" fill=\"none\" stroke=\"#0AD69C\" stroke-width=\"9\" stroke-linecap=\"round\" vector-effect=\"non-scaling-stroke\" pathLength=\"1\" stroke-dasharray=\"1\"/><circle class=\"im-r2\" cx=\"100\" cy=\"100\" r=\"82\" fill=\"none\" stroke=\"#0AD69C\" stroke-width=\"11\" stroke-linecap=\"round\" vector-effect=\"non-scaling-stroke\" pathLength=\"1\" stroke-dasharray=\"1\"/><circle class=\"im-hub\" cx=\"100\" cy=\"100\" r=\"10\" fill=\"#0AD69C\"/></svg>",
  "rings-c-transparent-mint": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-20 -20 240 240\" width=\"240\" height=\"240\" role=\"img\" aria-label=\"ijji motif — Three rings, Draw on the phrase, on transparent, mint\" class=\"ijji-motif ijji-rings-c\"><circle class=\"im-r0\" cx=\"100\" cy=\"100\" r=\"34\" fill=\"none\" stroke=\"#0AD69C\" stroke-width=\"7\" stroke-linecap=\"round\" vector-effect=\"non-scaling-stroke\" pathLength=\"1\" stroke-dasharray=\"1\"/><circle class=\"im-r1\" cx=\"100\" cy=\"100\" r=\"58\" fill=\"none\" stroke=\"#0AD69C\" stroke-width=\"9\" stroke-linecap=\"round\" vector-effect=\"non-scaling-stroke\" pathLength=\"1\" stroke-dasharray=\"1\"/><circle class=\"im-r2\" cx=\"100\" cy=\"100\" r=\"82\" fill=\"none\" stroke=\"#0AD69C\" stroke-width=\"11\" stroke-linecap=\"round\" vector-effect=\"non-scaling-stroke\" pathLength=\"1\" stroke-dasharray=\"1\"/><circle class=\"im-hub\" cx=\"100\" cy=\"100\" r=\"10\" fill=\"#0AD69C\"/></svg>",
  "rings-c-transparent-ink": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-20 -20 240 240\" width=\"240\" height=\"240\" role=\"img\" aria-label=\"ijji motif — Three rings, Draw on the phrase, on transparent, outline\" class=\"ijji-motif ijji-rings-c\"><circle class=\"im-r0\" cx=\"100\" cy=\"100\" r=\"34\" fill=\"none\" stroke=\"#182327\" stroke-width=\"4\" stroke-linecap=\"round\" vector-effect=\"non-scaling-stroke\" pathLength=\"1\" stroke-dasharray=\"1\"/><circle class=\"im-r1\" cx=\"100\" cy=\"100\" r=\"58\" fill=\"none\" stroke=\"#182327\" stroke-width=\"4\" stroke-linecap=\"round\" vector-effect=\"non-scaling-stroke\" pathLength=\"1\" stroke-dasharray=\"1\"/><circle class=\"im-r2\" cx=\"100\" cy=\"100\" r=\"82\" fill=\"none\" stroke=\"#182327\" stroke-width=\"4\" stroke-linecap=\"round\" vector-effect=\"non-scaling-stroke\" pathLength=\"1\" stroke-dasharray=\"1\"/><circle class=\"im-hub\" cx=\"100\" cy=\"100\" r=\"10\" fill=\"none\" stroke=\"#182327\" stroke-width=\"4\"/></svg>",
  "rotate-b-canvas": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-20 -20 240 240\" width=\"240\" height=\"240\" role=\"img\" aria-label=\"ijji motif — Turning heads, March forward, on canvas\" class=\"ijji-motif ijji-rotate-b\"><rect x=\"-20\" y=\"-20\" width=\"240\" height=\"240\" rx=\"24\" fill=\"#FCFCFA\" stroke=\"#C9D0CB\" stroke-width=\"1\"/><g class=\"im-o1\"><circle cx=\"100\" cy=\"42\" r=\"10\" fill=\"#0AD69C\"/><circle cx=\"158\" cy=\"100\" r=\"13\" fill=\"#0AD69C\"/><circle cx=\"100\" cy=\"158\" r=\"16\" fill=\"#0AD69C\"/><circle cx=\"42\" cy=\"100\" r=\"20\" fill=\"#0AD69C\"/></g></svg>",
  "rotate-b-brand-blue": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-20 -20 240 240\" width=\"240\" height=\"240\" role=\"img\" aria-label=\"ijji motif — Turning heads, March forward, on brand blue\" class=\"ijji-motif ijji-rotate-b\"><rect x=\"-20\" y=\"-20\" width=\"240\" height=\"240\" rx=\"24\" fill=\"#1D4497\"/><g class=\"im-o1\"><circle cx=\"100\" cy=\"42\" r=\"10\" fill=\"#0AD69C\"/><circle cx=\"158\" cy=\"100\" r=\"13\" fill=\"#0AD69C\"/><circle cx=\"100\" cy=\"158\" r=\"16\" fill=\"#0AD69C\"/><circle cx=\"42\" cy=\"100\" r=\"20\" fill=\"#0AD69C\"/></g></svg>",
  "rotate-b-ground-mist": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-20 -20 240 240\" width=\"240\" height=\"240\" role=\"img\" aria-label=\"ijji motif — Turning heads, March forward, on ground mist\" class=\"ijji-motif ijji-rotate-b\"><defs><linearGradient id=\"bg-rotate-b-ground-mist\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0\" stop-color=\"#C4E0EE\"/><stop offset=\".5\" stop-color=\"#B2E2E2\"/><stop offset=\"1\" stop-color=\"#CCE6D0\"/></linearGradient></defs><rect x=\"-20\" y=\"-20\" width=\"240\" height=\"240\" rx=\"24\" fill=\"url(#bg-rotate-b-ground-mist)\"/><g class=\"im-o1\"><circle cx=\"100\" cy=\"42\" r=\"10\" fill=\"none\" stroke=\"#182327\" stroke-width=\"4\"/><circle cx=\"158\" cy=\"100\" r=\"13\" fill=\"none\" stroke=\"#182327\" stroke-width=\"4\"/><circle cx=\"100\" cy=\"158\" r=\"16\" fill=\"none\" stroke=\"#182327\" stroke-width=\"4\"/><circle cx=\"42\" cy=\"100\" r=\"20\" fill=\"none\" stroke=\"#182327\" stroke-width=\"4\"/></g></svg>",
  "rotate-b-dark": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-20 -20 240 240\" width=\"240\" height=\"240\" role=\"img\" aria-label=\"ijji motif — Turning heads, March forward, on dark\" class=\"ijji-motif ijji-rotate-b\"><rect x=\"-20\" y=\"-20\" width=\"240\" height=\"240\" rx=\"24\" fill=\"#20292D\" stroke=\"#46524F\" stroke-width=\"1\"/><g class=\"im-o1\"><circle cx=\"100\" cy=\"42\" r=\"10\" fill=\"#0AD69C\"/><circle cx=\"158\" cy=\"100\" r=\"13\" fill=\"#0AD69C\"/><circle cx=\"100\" cy=\"158\" r=\"16\" fill=\"#0AD69C\"/><circle cx=\"42\" cy=\"100\" r=\"20\" fill=\"#0AD69C\"/></g></svg>",
  "rotate-b-transparent-mint": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-20 -20 240 240\" width=\"240\" height=\"240\" role=\"img\" aria-label=\"ijji motif — Turning heads, March forward, on transparent, mint\" class=\"ijji-motif ijji-rotate-b\"><g class=\"im-o1\"><circle cx=\"100\" cy=\"42\" r=\"10\" fill=\"#0AD69C\"/><circle cx=\"158\" cy=\"100\" r=\"13\" fill=\"#0AD69C\"/><circle cx=\"100\" cy=\"158\" r=\"16\" fill=\"#0AD69C\"/><circle cx=\"42\" cy=\"100\" r=\"20\" fill=\"#0AD69C\"/></g></svg>",
  "rotate-b-transparent-ink": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-20 -20 240 240\" width=\"240\" height=\"240\" role=\"img\" aria-label=\"ijji motif — Turning heads, March forward, on transparent, outline\" class=\"ijji-motif ijji-rotate-b\"><g class=\"im-o1\"><circle cx=\"100\" cy=\"42\" r=\"10\" fill=\"none\" stroke=\"#182327\" stroke-width=\"4\"/><circle cx=\"158\" cy=\"100\" r=\"13\" fill=\"none\" stroke=\"#182327\" stroke-width=\"4\"/><circle cx=\"100\" cy=\"158\" r=\"16\" fill=\"none\" stroke=\"#182327\" stroke-width=\"4\"/><circle cx=\"42\" cy=\"100\" r=\"20\" fill=\"none\" stroke=\"#182327\" stroke-width=\"4\"/></g></svg>"
};
if (typeof window !== "undefined") window.IJJI_MOTIFS = IJJI_MOTIFS;
Object.assign(__ds_scope, { IJJI_MOTIFS, __ds_default_addons_ijji_motif_ijji_motifs_15aaqlx: IJJI_MOTIFS });
})(); } catch (e) { __ds_ns.__errors.push({ path: "addons/ijji/motif/ijji-motifs.js", error: String((e && e.message) || e) }); }

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const buttonBase = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 'var(--space-2)',
  minHeight: '46px',
  fontFamily: 'var(--font-body)',
  fontWeight: 600,
  fontSize: 'var(--type-body)',
  lineHeight: 'var(--leading-label)',
  textDecoration: 'none',
  cursor: 'pointer',
  borderRadius: 'var(--radius-pill)',
  border: '2px solid transparent',
  transition: 'background var(--motion-duration-state) var(--motion-ease-state), transform var(--motion-duration-feedback) var(--motion-ease-state)'
};
const buttonSizes = {
  sm: {
    minHeight: '44px',
    padding: '8px 16px',
    fontSize: 'var(--type-body-sm)'
  },
  md: {
    minHeight: '46px',
    padding: '10px 22px'
  },
  lg: {
    minHeight: '52px',
    padding: '13px 28px',
    fontSize: 'var(--type-body-lg)'
  }
};
const buttonTones = {
  primary: {
    background: 'var(--interaction-accent)',
    color: 'var(--surface-raised)',
    borderColor: 'var(--interaction-accent)'
  },
  secondary: {
    background: 'transparent',
    color: 'var(--interaction-accent)',
    borderColor: 'var(--interaction-accent)'
  },
  quiet: {
    background: 'transparent',
    color: 'var(--interaction-accent)',
    borderColor: 'transparent'
  },
  inverse: {
    background: 'var(--on-deep-surface)',
    color: 'var(--on-deep-ink)',
    borderColor: 'var(--on-deep-surface)'
  }
};

/**
 * One intent, one label, capsule geometry. Icon-only utilities become a
 * 44x44 circle; every other action keeps the pill and lets the label wrap.
 */
function Button({
  variant = 'secondary',
  size = 'md',
  iconOnly = false,
  icon,
  busy = false,
  busyLabel = 'Working…',
  disabled = false,
  pendingReason,
  href,
  children,
  style,
  ...rest
}) {
  const circle = iconOnly ? {
    width: '44px',
    minWidth: '44px',
    height: '44px',
    minHeight: '44px',
    padding: 0,
    borderRadius: '50%'
  } : null;
  const resolved = {
    ...buttonBase,
    ...buttonSizes[size],
    ...buttonTones[variant],
    ...circle,
    ...(disabled || busy ? {
      opacity: 0.56,
      cursor: 'not-allowed'
    } : null),
    ...style
  };
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, icon ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'inline-flex'
    }
  }, icon) : null, iconOnly ? null : /*#__PURE__*/React.createElement("span", null, busy ? busyLabel : children));
  if (href && !disabled && !busy) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      style: resolved,
      title: pendingReason
    }, rest), content);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    style: resolved,
    disabled: disabled || busy,
    "aria-busy": busy || undefined,
    "aria-disabled": disabled || undefined,
    title: pendingReason
  }, rest), content);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/Link.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const linkBase = {
  color: 'var(--interaction-accent)',
  fontWeight: 600,
  textDecorationThickness: '1px',
  textUnderlineOffset: '.18em'
};
const linkCue = {
  fontFamily: 'var(--font-mono)',
  fontSize: '.78em',
  marginLeft: '.35em',
  verticalAlign: '.08em'
};
const linkSrOnly = {
  position: 'absolute',
  width: 1,
  height: 1,
  overflow: 'hidden',
  clipPath: 'inset(50%)'
};

/** A link goes to a real, nameable destination. */
function Link({
  href,
  external = false,
  onDeep = false,
  children,
  style,
  ...rest
}) {
  const resolved = {
    ...linkBase,
    ...(onDeep ? {
      color: 'var(--on-deep-primary)'
    } : null),
    ...style
  };
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    style: resolved,
    target: external ? '_blank' : undefined,
    rel: external ? 'noreferrer noopener' : undefined
  }, rest), children, external ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: linkCue
  }, "\u2197") : null, external ? /*#__PURE__*/React.createElement("span", {
    style: linkSrOnly
  }, " (opens in a new tab)") : null);
}
Object.assign(__ds_scope, { Link });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Link.jsx", error: String((e && e.message) || e) }); }

// components/actions/Segmented.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const segmentedShell = {
  display: 'inline-flex',
  gap: '2px',
  padding: '3px',
  background: 'var(--surface-soft)',
  borderRadius: 'var(--radius-sm)'
};
const segmentedOption = {
  border: 0,
  background: 'none',
  cursor: 'pointer',
  minHeight: '40px',
  padding: '8px 14px',
  borderRadius: 'calc(var(--radius-sm) - 2px)',
  fontFamily: 'var(--font-body)',
  fontWeight: 600,
  fontSize: 'var(--type-body-sm)',
  color: 'var(--text-secondary)'
};
const segmentedSelected = {
  background: 'var(--surface-raised)',
  color: 'var(--interaction-accent)',
  boxShadow: 'var(--elevation-xs)'
};

/**
 * A mutually exclusive choice among two to four visible states. Keeps its own
 * semantic geometry: the action capsule rule does not apply here.
 */
function Segmented({
  options = [],
  value,
  onChange,
  label,
  fill = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "group",
    "aria-label": label,
    style: {
      ...segmentedShell,
      ...(fill ? {
        display: 'flex',
        width: '100%'
      } : null),
      ...style
    }
  }, rest), options.map(option => {
    const selected = option.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: option.value,
      type: "button",
      "aria-pressed": selected,
      onClick: onChange ? () => onChange(option.value) : undefined,
      style: {
        ...segmentedOption,
        ...(selected ? segmentedSelected : null),
        ...(fill ? {
          flex: 1
        } : null)
      }
    }, option.label);
  }));
}
Object.assign(__ds_scope, { Segmented });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Segmented.jsx", error: String((e && e.message) || e) }); }

// components/data/DataTable.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tableScroll = {
  maxWidth: '100%',
  overflowX: 'auto',
  border: '1px solid var(--border-default)',
  borderRadius: 'var(--radius-sm)'
};
const tableBase = {
  borderCollapse: 'collapse',
  width: '100%',
  fontSize: '.92rem',
  minWidth: '520px'
};
const tableCaption = {
  textAlign: 'left',
  fontWeight: 600,
  padding: 'var(--space-4) var(--space-4) var(--space-3)',
  color: 'var(--text-primary)'
};
const tableCaptionNote = {
  display: 'block',
  fontFamily: 'var(--font-mono)',
  fontSize: '.74rem',
  fontWeight: 400,
  color: 'var(--text-metadata)',
  marginTop: 'var(--space-1)'
};
const tableTh = {
  textAlign: 'left',
  verticalAlign: 'top',
  padding: '12px 14px',
  borderBottom: '1px solid var(--border-hairline)',
  background: 'var(--surface-alt)',
  fontWeight: 600,
  color: 'var(--text-primary)'
};
const tableTd = {
  textAlign: 'left',
  verticalAlign: 'top',
  padding: '12px 14px',
  borderBottom: '1px solid var(--border-hairline)',
  color: 'var(--text-primary)'
};
const tableNumeric = {
  textAlign: 'right',
  fontFamily: 'var(--font-mono)',
  fontVariantNumeric: 'tabular-nums',
  lineHeight: 'var(--leading-number)'
};
const tableMissing = {
  color: 'var(--text-muted)',
  fontFamily: 'var(--font-mono)',
  fontSize: '.8rem'
};

/** Caption, real headers, right-aligned numerals, and a labelled no-data cell. */
function DataTable({
  caption,
  note,
  columns = [],
  rows = [],
  noDataLabel = 'no data',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      ...tableScroll,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("table", {
    style: tableBase
  }, caption ? /*#__PURE__*/React.createElement("caption", {
    style: tableCaption
  }, caption, note ? /*#__PURE__*/React.createElement("span", {
    style: tableCaptionNote
  }, note) : null) : null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map(column => /*#__PURE__*/React.createElement("th", {
    key: column.key,
    scope: "col",
    style: {
      ...tableTh,
      ...(column.numeric ? {
        textAlign: 'right'
      } : null)
    }
  }, column.label)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((row, index) => /*#__PURE__*/React.createElement("tr", {
    key: row.id || index
  }, columns.map((column, columnIndex) => {
    const value = row[column.key];
    const missing = value === null || value === undefined || value === '';
    const cellStyle = {
      ...tableTd,
      ...(column.numeric ? tableNumeric : null)
    };
    return columnIndex === 0 ? /*#__PURE__*/React.createElement("th", {
      key: column.key,
      scope: "row",
      style: {
        ...cellStyle,
        fontWeight: 600,
        background: 'transparent'
      }
    }, missing ? /*#__PURE__*/React.createElement("span", {
      style: tableMissing
    }, noDataLabel) : value) : /*#__PURE__*/React.createElement("td", {
      key: column.key,
      style: cellStyle
    }, missing ? /*#__PURE__*/React.createElement("span", {
      style: tableMissing
    }, noDataLabel) : value);
  }))))));
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/data/MapLegend.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const legendShell = {
  display: 'grid',
  gap: 'var(--space-4)',
  padding: 'var(--space-5)',
  background: 'var(--surface-alt)',
  borderLeft: '6px solid var(--interaction-accent)'
};
const legendLayer = {
  margin: 0,
  fontFamily: 'var(--font-mono)',
  fontSize: 'var(--type-label)',
  textTransform: 'uppercase',
  letterSpacing: 'var(--tracking-eyebrow)',
  color: 'var(--text-metadata)'
};
const legendMethod = {
  margin: 0,
  fontSize: 'var(--type-body-sm)',
  color: 'var(--text-secondary)',
  maxWidth: 'none'
};
const legendClasses = {
  display: 'grid',
  gap: 'var(--space-2)',
  margin: 0,
  padding: 0,
  listStyle: 'none'
};
const legendItem = {
  display: 'grid',
  gridTemplateColumns: '18px minmax(0,1fr) auto',
  gap: 'var(--space-3)',
  alignItems: 'center',
  minHeight: '32px',
  fontSize: 'var(--type-body-sm)'
};
const legendSwatch = {
  width: '18px',
  height: '18px',
  borderRadius: '3px',
  border: '1px solid rgba(0,0,0,.18)'
};
const legendValue = {
  fontFamily: 'var(--font-mono)',
  fontSize: '.78rem',
  color: 'var(--text-metadata)',
  fontVariantNumeric: 'tabular-nums'
};
const legendFoot = {
  margin: 0,
  fontFamily: 'var(--font-mono)',
  fontSize: '.74rem',
  color: 'var(--text-metadata)',
  overflowWrap: 'anywhere',
  maxWidth: 'none'
};
const legendLimit = {
  margin: 0,
  fontSize: 'var(--type-body-sm)',
  fontWeight: 600,
  color: 'var(--warning-ink)',
  background: 'var(--warning-fill)',
  padding: 'var(--space-2) var(--space-3)',
  borderRadius: 'var(--radius-xs)',
  maxWidth: 'none'
};

/** Layer, method, classes, no-data, measured zero, source/date, limitation. */
function MapLegend({
  layer,
  method,
  units,
  classes = [],
  noData = true,
  noDataLabel = 'No data — not surveyed',
  zero,
  source,
  limitation,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("section", _extends({
    style: {
      ...legendShell,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("p", {
    style: legendLayer
  }, layer), method ? /*#__PURE__*/React.createElement("p", {
    style: legendMethod
  }, method) : null, /*#__PURE__*/React.createElement("ul", {
    style: legendClasses
  }, classes.map(item => /*#__PURE__*/React.createElement("li", {
    key: item.label,
    style: legendItem
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      ...legendSwatch,
      background: item.color
    }
  }), /*#__PURE__*/React.createElement("span", null, item.label), /*#__PURE__*/React.createElement("span", {
    style: legendValue
  }, item.range))), zero ? /*#__PURE__*/React.createElement("li", {
    style: legendItem
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      ...legendSwatch,
      background: 'transparent',
      border: '2px solid var(--data-zero)'
    }
  }), /*#__PURE__*/React.createElement("span", null, zero), /*#__PURE__*/React.createElement("span", {
    style: legendValue
  }, "0")) : null, noData ? /*#__PURE__*/React.createElement("li", {
    style: legendItem
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      ...legendSwatch,
      background: 'var(--data-no-data-pattern)',
      borderColor: 'var(--border-emphasis)'
    }
  }), /*#__PURE__*/React.createElement("span", null, noDataLabel), /*#__PURE__*/React.createElement("span", {
    style: legendValue
  }, "\u2014")) : null), units ? /*#__PURE__*/React.createElement("p", {
    style: legendFoot
  }, "units: ", units) : null, source ? /*#__PURE__*/React.createElement("p", {
    style: legendFoot
  }, source) : null, limitation ? /*#__PURE__*/React.createElement("p", {
    style: legendLimit
  }, "Limitation \u2014 ", limitation) : null);
}
Object.assign(__ds_scope, { MapLegend });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/MapLegend.jsx", error: String((e && e.message) || e) }); }

// components/evidence/SourceLedger.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const ledgerShell = {
  display: 'grid',
  gap: 'var(--space-3)',
  margin: 0,
  padding: 'var(--space-5)',
  background: 'var(--surface-alt)',
  borderLeft: '6px solid var(--interaction-accent)'
};
const ledgerHead = {
  margin: 0,
  fontFamily: 'var(--font-mono)',
  fontSize: 'var(--type-label)',
  textTransform: 'uppercase',
  letterSpacing: 'var(--tracking-eyebrow)',
  color: 'var(--text-metadata)'
};
const ledgerList = {
  display: 'grid',
  gap: 'var(--space-2)',
  margin: 0
};
const ledgerRow = {
  display: 'grid',
  gridTemplateColumns: '132px minmax(0,1fr)',
  gap: 'var(--space-3)'
};
const ledgerKey = {
  margin: 0,
  fontFamily: 'var(--font-mono)',
  fontSize: '.78rem',
  color: 'var(--text-metadata)'
};
const ledgerVal = {
  margin: 0,
  fontSize: 'var(--type-body-sm)',
  color: 'var(--text-primary)',
  overflowWrap: 'anywhere',
  maxWidth: 'none'
};
const ledgerLimit = {
  margin: 0,
  fontSize: 'var(--type-body-sm)',
  fontWeight: 600,
  color: 'var(--warning-ink)',
  background: 'var(--warning-fill)',
  padding: 'var(--space-2) var(--space-3)',
  borderRadius: 'var(--radius-xs)',
  maxWidth: 'none'
};

/** Source, publisher, date, supported claim, boundary, limitation, allowed use. */
function SourceLedger({
  title = 'Source ledger',
  source,
  publisher,
  date,
  claim,
  boundary,
  limitation,
  allowedUse,
  style,
  ...rest
}) {
  const rows = [['source', source], ['publisher', publisher], ['date', date], ['supports', claim], ['boundary', boundary], ['allowed use', allowedUse]].filter(([, value]) => value);
  return /*#__PURE__*/React.createElement("section", _extends({
    style: {
      ...ledgerShell,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("p", {
    style: ledgerHead
  }, title), /*#__PURE__*/React.createElement("dl", {
    style: ledgerList
  }, rows.map(([key, value]) => /*#__PURE__*/React.createElement("div", {
    key: key,
    style: ledgerRow
  }, /*#__PURE__*/React.createElement("dt", {
    style: ledgerKey
  }, key), /*#__PURE__*/React.createElement("dd", {
    style: ledgerVal
  }, value)))), limitation ? /*#__PURE__*/React.createElement("p", {
    style: ledgerLimit
  }, "Limitation \u2014 ", limitation) : null);
}
Object.assign(__ds_scope, { SourceLedger });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/evidence/SourceLedger.jsx", error: String((e && e.message) || e) }); }

// components/evidence/TrustBadge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const badgeBase = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 'var(--space-2)',
  minHeight: '28px',
  padding: '4px 12px',
  borderRadius: 'var(--radius-pill)',
  border: '1px solid currentColor',
  fontFamily: 'var(--font-body)',
  fontWeight: 600,
  fontSize: 'var(--type-label)',
  lineHeight: 'var(--leading-label)'
};
const badgeTones = {
  verified: {
    background: 'var(--success-fill)',
    color: 'var(--success-ink)'
  },
  assisted: {
    background: 'var(--assisted-fill)',
    color: 'var(--assisted-ink)'
  },
  partial: {
    background: 'var(--warning-fill)',
    color: 'var(--warning-ink)'
  },
  pending: {
    background: 'var(--pending-fill)',
    color: 'var(--pending-ink)'
  },
  source_limited: {
    background: 'var(--info-fill)',
    color: 'var(--info-ink)'
  },
  failed: {
    background: 'var(--danger-fill)',
    color: 'var(--danger-ink)'
  },
  neutral: {
    background: 'var(--neutral-fill)',
    color: 'var(--neutral-ink)'
  }
};
const badgeDot = {
  width: '7px',
  height: '7px',
  borderRadius: '50%',
  background: 'currentColor',
  flex: '0 0 auto'
};

/** The visible truth status of one governed object. Status never improves by wording. */
function TrustBadge({
  status = 'pending',
  children,
  showDot = true,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      ...badgeBase,
      ...(badgeTones[status] || badgeTones.neutral),
      ...style
    }
  }, rest), showDot ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: badgeDot
  }) : null, /*#__PURE__*/React.createElement("span", null, children || status.replace('_', ' ')));
}
Object.assign(__ds_scope, { TrustBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/evidence/TrustBadge.jsx", error: String((e && e.message) || e) }); }

// components/evidence/DecisionCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const decisionShell = {
  display: 'grid',
  gap: 'var(--space-4)',
  alignContent: 'start',
  padding: 'var(--space-6)',
  background: 'var(--surface-card)',
  border: '1px solid var(--border-default)',
  borderRadius: 'var(--radius-md)'
};
const decisionHead = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  gap: 'var(--space-3)',
  flexWrap: 'wrap'
};
const decisionObject = {
  margin: 0,
  fontFamily: 'var(--font-mono)',
  fontSize: '.82rem',
  color: 'var(--text-metadata)'
};
const decisionMetric = {
  margin: 0,
  fontFamily: 'var(--font-mono)',
  fontSize: 'clamp(1.6rem,3.4vw,2.4rem)',
  lineHeight: 'var(--leading-number)',
  color: 'var(--text-primary)'
};
const decisionUnit = {
  fontSize: '.5em',
  color: 'var(--text-secondary)',
  marginLeft: '.4em'
};
const decisionMeaning = {
  margin: 0,
  fontSize: 'var(--type-body-lg)',
  color: 'var(--text-primary)',
  maxWidth: 'none'
};
const decisionLedger = {
  display: 'grid',
  gap: 'var(--space-2)',
  margin: 0
};
const decisionRow = {
  display: 'grid',
  gridTemplateColumns: '104px minmax(0,1fr)',
  gap: 'var(--space-3)'
};
const decisionKey = {
  margin: 0,
  fontFamily: 'var(--font-mono)',
  fontSize: '.76rem',
  color: 'var(--text-metadata)'
};
const decisionVal = {
  margin: 0,
  fontSize: 'var(--type-body-sm)',
  color: 'var(--text-secondary)',
  overflowWrap: 'anywhere',
  maxWidth: 'none'
};
const decisionNext = {
  margin: 0,
  paddingTop: 'var(--space-3)',
  borderTop: '1px solid var(--border-hairline)',
  fontWeight: 600,
  color: 'var(--interaction-accent)',
  maxWidth: 'none'
};
const decisionBaseline = {
  background: 'var(--surface-canvas)',
  borderStyle: 'dashed',
  gap: '6px'
};

/**
 * Object -> status/metric -> meaning -> evidence -> one next useful action.
 * The baseline prop renders the same facts in the un-assisted reading order, so
 * a before/after comparison never has to damage the baseline to prove value.
 */
function DecisionCard({
  object,
  status = 'pending',
  statusLabel,
  metric,
  unit,
  meaning,
  source,
  limitation,
  nextAction,
  baseline = false,
  children,
  style,
  ...rest
}) {
  const rows = [['source', source], ['limitation', limitation]].filter(([, v]) => v);
  return /*#__PURE__*/React.createElement("article", _extends({
    style: {
      ...decisionShell,
      ...(baseline ? decisionBaseline : null),
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      ...decisionHead,
      ...(baseline ? {
        opacity: 0.66
      } : null)
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: decisionObject
  }, object), /*#__PURE__*/React.createElement(__ds_scope.TrustBadge, {
    status: status
  }, statusLabel)), metric ? /*#__PURE__*/React.createElement("p", {
    style: decisionMetric
  }, metric, unit ? /*#__PURE__*/React.createElement("span", {
    style: decisionUnit
  }, unit) : null) : null, meaning ? /*#__PURE__*/React.createElement("p", {
    style: decisionMeaning
  }, meaning) : null, rows.length ? /*#__PURE__*/React.createElement("dl", {
    style: {
      ...decisionLedger,
      ...(baseline ? {
        opacity: 0.66
      } : null)
    }
  }, rows.map(([key, value]) => /*#__PURE__*/React.createElement("div", {
    key: key,
    style: baseline ? {
      display: 'block'
    } : decisionRow
  }, /*#__PURE__*/React.createElement("dt", {
    style: {
      ...decisionKey,
      ...(baseline ? {
        display: 'inline'
      } : null)
    }
  }, key), /*#__PURE__*/React.createElement("dd", {
    style: {
      ...decisionVal,
      ...(baseline ? {
        display: 'inline'
      } : null)
    }
  }, value)))) : null, children, nextAction ? /*#__PURE__*/React.createElement("p", {
    style: {
      ...decisionNext,
      ...(baseline ? {
        opacity: 0.66
      } : null)
    }
  }, nextAction) : null);
}
Object.assign(__ds_scope, { DecisionCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/evidence/DecisionCard.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const dialogScrim = {
  position: 'fixed',
  inset: 0,
  zIndex: 700,
  display: 'grid',
  placeItems: 'center',
  padding: 'var(--space-4)',
  background: 'var(--scrim-dialog)',
  backdropFilter: 'blur(var(--blur-scrim))'
};
const dialogShell = {
  width: 'min(720px,100%)',
  maxHeight: 'calc(100dvh - 32px)',
  overflow: 'auto',
  background: 'var(--surface-raised)',
  color: 'var(--text-primary)',
  border: '1px solid var(--border-default)',
  borderRadius: 'var(--radius-lg)',
  boxShadow: 'var(--elevation-md)'
};
const dialogHead = {
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  gap: 'var(--space-4)',
  padding: 'var(--space-5)',
  borderBottom: '1px solid var(--border-hairline)'
};
const dialogTitle = {
  margin: 0,
  fontFamily: 'var(--font-display-en)',
  fontSize: 'var(--type-h3)',
  lineHeight: 'var(--leading-ui-heading-en)'
};
const dialogNote = {
  margin: 'var(--space-2) 0 0',
  fontSize: 'var(--type-body-sm)',
  color: 'var(--text-secondary)',
  maxWidth: '56ch'
};
const dialogBody = {
  padding: 'var(--space-5)',
  display: 'grid',
  gap: 'var(--space-4)'
};
const dialogFoot = {
  display: 'flex',
  justifyContent: 'flex-end',
  gap: 'var(--space-3)',
  flexWrap: 'wrap',
  padding: 'var(--space-4) var(--space-5)',
  borderTop: '1px solid var(--border-hairline)'
};
const dialogClose = {
  width: '44px',
  height: '44px',
  minHeight: '44px',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  border: '1px solid var(--border-default)',
  background: 'var(--surface-card)',
  color: 'var(--text-primary)',
  cursor: 'pointer',
  fontFamily: 'var(--font-mono)',
  fontSize: '1rem',
  flex: '0 0 auto'
};

/** Named, closable, focus-contained. The background is inert while it is open. */
function Dialog({
  open = false,
  title,
  note,
  onClose,
  footer,
  children,
  labelledBy = 'ds-dialog-title',
  style,
  ...rest
}) {
  React.useEffect(() => {
    if (!open || !onClose) return undefined;
    const onKeyDown = event => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: dialogScrim,
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true",
    "aria-labelledby": labelledBy,
    style: {
      ...dialogShell,
      ...style
    },
    onClick: event => event.stopPropagation()
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: dialogHead
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    id: labelledBy,
    style: dialogTitle
  }, title), note ? /*#__PURE__*/React.createElement("p", {
    style: dialogNote
  }, note) : null), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClose,
    "aria-label": "Close",
    style: dialogClose
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    style: dialogBody
  }, children), footer ? /*#__PURE__*/React.createElement("div", {
    style: dialogFoot
  }, footer) : null));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/EmptyState.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const emptyShell = {
  display: 'grid',
  gap: 'var(--space-3)',
  padding: 'var(--space-7) var(--space-6)',
  background: 'var(--surface-alt)',
  border: '1px dashed var(--border-default)',
  borderRadius: 'var(--radius-md)'
};
const emptyKind = {
  margin: 0,
  fontFamily: 'var(--font-mono)',
  fontSize: 'var(--type-label)',
  textTransform: 'uppercase',
  letterSpacing: 'var(--tracking-eyebrow)',
  color: 'var(--text-metadata)'
};
const emptyTitle = {
  margin: 0,
  fontFamily: 'var(--font-display-en)',
  fontSize: 'var(--type-h3)',
  lineHeight: 'var(--leading-ui-heading-en)',
  color: 'var(--text-primary)'
};
const emptyBody = {
  margin: 0,
  color: 'var(--text-secondary)',
  maxWidth: '52ch'
};
const emptyStill = {
  margin: 0,
  paddingTop: 'var(--space-3)',
  borderTop: '1px solid var(--border-hairline)',
  fontSize: 'var(--type-body-sm)',
  color: 'var(--text-primary)',
  maxWidth: '52ch'
};
const emptyActions = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: 'var(--space-3)',
  marginTop: 'var(--space-2)'
};

/** What is unavailable, why, what is still possible, and the honest next action. */
function EmptyState({
  label = 'Nothing to show yet',
  title,
  reason,
  stillPossible,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("section", _extends({
    style: {
      ...emptyShell,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("p", {
    style: emptyKind
  }, label), title ? /*#__PURE__*/React.createElement("h3", {
    style: emptyTitle
  }, title) : null, reason ? /*#__PURE__*/React.createElement("p", {
    style: emptyBody
  }, reason) : null, stillPossible ? /*#__PURE__*/React.createElement("p", {
    style: emptyStill
  }, "Still possible \u2014 ", stillPossible) : null, children ? /*#__PURE__*/React.createElement("div", {
    style: emptyActions
  }, children) : null);
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ErrorState.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const errorShell = {
  display: 'grid',
  gap: 'var(--space-3)',
  padding: 'var(--space-6)',
  background: 'var(--danger-fill)',
  borderLeft: '6px solid var(--danger-ink)',
  borderRadius: 'var(--radius-xs)'
};
const errorKind = {
  margin: 0,
  fontFamily: 'var(--font-mono)',
  fontSize: 'var(--type-label)',
  textTransform: 'uppercase',
  letterSpacing: 'var(--tracking-eyebrow)',
  color: 'var(--danger-ink)'
};
const errorTitle = {
  margin: 0,
  fontFamily: 'var(--font-display-en)',
  fontSize: 'var(--type-h3)',
  lineHeight: 'var(--leading-ui-heading-en)',
  color: 'var(--text-primary)'
};
const errorBody = {
  margin: 0,
  color: 'var(--text-primary)',
  maxWidth: '52ch'
};
const errorPreserved = {
  margin: 0,
  padding: 'var(--space-3)',
  background: 'var(--surface-raised)',
  borderRadius: 'var(--radius-xs)',
  fontFamily: 'var(--font-mono)',
  fontSize: '.78rem',
  color: 'var(--text-secondary)',
  overflowWrap: 'anywhere',
  maxWidth: 'none'
};
const errorActions = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: 'var(--space-3)',
  marginTop: 'var(--space-2)'
};

/** What failed, what was preserved, and how to retry or continue safely. */
function ErrorState({
  label = 'Action failed',
  title,
  detail,
  preserved,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("section", _extends({
    role: "alert",
    style: {
      ...errorShell,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("p", {
    style: errorKind
  }, label), title ? /*#__PURE__*/React.createElement("h3", {
    style: errorTitle
  }, title) : null, detail ? /*#__PURE__*/React.createElement("p", {
    style: errorBody
  }, detail) : null, preserved ? /*#__PURE__*/React.createElement("p", {
    style: errorPreserved
  }, "preserved \xB7 ", preserved) : null, children ? /*#__PURE__*/React.createElement("div", {
    style: errorActions
  }, children) : null);
}
Object.assign(__ds_scope, { ErrorState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ErrorState.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const toastShell = {
  display: 'flex',
  alignItems: 'flex-start',
  gap: 'var(--space-3)',
  maxWidth: 'min(380px,calc(100vw - 32px))',
  padding: 'var(--space-3) var(--space-4)',
  background: 'var(--surface-raised)',
  border: '1px solid var(--border-emphasis)',
  borderRadius: 'var(--radius-sm)',
  boxShadow: 'var(--elevation-sm)',
  transition: 'opacity var(--motion-duration-state) var(--motion-ease-state), transform var(--motion-duration-state) var(--motion-ease-state)'
};
const toastFixed = {
  position: 'fixed',
  right: 'var(--space-4)',
  bottom: 'var(--space-4)',
  zIndex: 600
};
const toastMark = {
  width: '8px',
  alignSelf: 'stretch',
  borderRadius: 'var(--radius-pill)',
  flex: '0 0 auto'
};
const toastText = {
  margin: 0,
  fontSize: 'var(--type-body-sm)',
  color: 'var(--text-primary)',
  maxWidth: 'none'
};
const toastNote = {
  margin: 'var(--space-1) 0 0',
  fontFamily: 'var(--font-mono)',
  fontSize: '.74rem',
  color: 'var(--text-metadata)',
  maxWidth: 'none'
};
const toastTones = {
  success: 'var(--success-ink)',
  info: 'var(--info-ink)',
  warning: 'var(--warning-ink)',
  neutral: 'var(--border-emphasis)'
};

/** Non-blocking status only. Never the sole place a critical message appears. */
function Toast({
  tone = 'info',
  message,
  note,
  visible = true,
  fixed = true,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    "aria-live": "polite",
    style: {
      ...toastShell,
      ...(fixed ? toastFixed : null),
      ...(visible ? {
        opacity: 1,
        transform: 'none'
      } : {
        opacity: 0,
        transform: 'translateY(10px)',
        pointerEvents: 'none'
      }),
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      ...toastMark,
      background: toastTones[tone] || toastTones.neutral
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: toastText
  }, message), note ? /*#__PURE__*/React.createElement("p", {
    style: toastNote
  }, note) : null));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/FormField.jsx
try { (() => {
const fieldWrap = {
  display: 'grid',
  gap: 'var(--space-2)',
  minWidth: 0
};
const fieldLabel = {
  fontFamily: 'var(--font-body)',
  fontWeight: 600,
  fontSize: '.9rem',
  color: 'var(--text-primary)'
};
const fieldHelp = {
  fontSize: 'var(--type-body-sm)',
  color: 'var(--text-secondary)',
  margin: 0
};
const fieldControl = {
  width: '100%',
  minHeight: '44px',
  padding: '10px 12px',
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--type-body)',
  color: 'var(--text-primary)',
  background: 'var(--surface-raised)',
  border: '1px solid var(--border-default)',
  borderRadius: 'var(--radius-sm)'
};
const fieldErrorNote = {
  display: 'flex',
  gap: 'var(--space-2)',
  margin: 0,
  padding: 'var(--space-2) var(--space-3)',
  fontSize: 'var(--type-body-sm)',
  fontWeight: 600,
  color: 'var(--danger-ink)',
  background: 'var(--danger-fill)',
  borderRadius: 'var(--radius-xs)'
};
const fieldRequired = {
  fontFamily: 'var(--font-mono)',
  fontSize: '.72rem',
  color: 'var(--text-metadata)',
  fontWeight: 400
};

/** Label, help, associated error, retained input, and a way to recover. */
function FormField({
  id,
  label,
  help,
  error,
  required = false,
  as = 'input',
  options = [],
  children,
  ...rest
}) {
  const helpId = help ? id + '-help' : undefined;
  const errorId = error ? id + '-error' : undefined;
  const described = [helpId, errorId].filter(Boolean).join(' ') || undefined;
  const control = {
    ...fieldControl,
    ...(error ? {
      borderColor: 'var(--danger-ink)',
      borderWidth: '2px'
    } : null),
    ...(as === 'textarea' ? {
      minHeight: '96px',
      lineHeight: 'var(--leading-body)'
    } : null)
  };
  const shared = {
    id,
    style: control,
    'aria-describedby': described,
    'aria-invalid': error ? true : undefined,
    required,
    ...rest
  };
  return /*#__PURE__*/React.createElement("div", {
    style: fieldWrap
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: fieldLabel
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    style: fieldRequired
  }, " required") : null), help ? /*#__PURE__*/React.createElement("p", {
    id: helpId,
    style: fieldHelp
  }, help) : null, as === 'select' ? /*#__PURE__*/React.createElement("select", shared, options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))) : as === 'textarea' ? /*#__PURE__*/React.createElement("textarea", shared) : /*#__PURE__*/React.createElement("input", shared), children, error ? /*#__PURE__*/React.createElement("p", {
    id: errorId,
    style: fieldErrorNote
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2715"), /*#__PURE__*/React.createElement("span", null, error)) : null);
}
Object.assign(__ds_scope, { FormField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/FormField.jsx", error: String((e && e.message) || e) }); }

// components/icons/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const iconSizes = {
  sm: 'var(--icon-size-sm)',
  md: 'var(--icon-size-md)',
  lg: 'var(--icon-size-lg)'
};

/**
 * One glyph from Material Symbols Rounded, locked to the Landometer axes:
 * outline (FILL 0 in every state — v0.9.1 prohibits a fill change on selection),
 * rounded joins, thin stroke (wght 300).
 * Decorative by default; pass a label when the icon is the only carrier of meaning.
 */
function Icon({
  name,
  size = 'md',
  label,
  weight,
  style,
  ...rest
}) {
  const resolved = {
    fontFamily: 'var(--font-icon)',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontSize: iconSizes[size] || size,
    lineHeight: 1,
    letterSpacing: 'normal',
    textTransform: 'none',
    display: 'inline-block',
    whiteSpace: 'nowrap',
    wordWrap: 'normal',
    direction: 'ltr',
    WebkitFontFeatureSettings: '"liga"',
    fontFeatureSettings: '"liga"',
    WebkitFontSmoothing: 'antialiased',
    fontVariationSettings: '"FILL" 0,"wght" ' + (weight || 'var(--icon-weight)') + ',"GRAD" 0,"opsz" 24',
    ...style
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: resolved,
    role: label ? 'img' : undefined,
    "aria-label": label || undefined,
    "aria-hidden": label ? undefined : 'true',
    translate: "no"
  }, rest), name);
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/icons/Icon.jsx", error: String((e && e.message) || e) }); }

// components/identity/BrandSignature.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIGNATURE_RATIO = {
  lockup: 23324 / 6402,
  symbol: 3457 / 3661
};

/**
 * Renders an approved Landometer identity asset at its intrinsic ratio.
 * The asset is never redrawn, recolored, cropped or animated: contrast is
 * managed by the surrounding surface, never by a plate added to the mark.
 */
function BrandSignature({
  variant = 'lockup',
  src,
  width = 210,
  surface = 'auto',
  alt = 'Landometer',
  decorative = false,
  ...rest
}) {
  const ratio = variant === 'lockup' ? SIGNATURE_RATIO.lockup : SIGNATURE_RATIO.symbol;
  const carrier = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: typeof width === 'number' ? width + 'px' : width,
    background: surface === 'beige' ? 'var(--brand-beige)' : 'transparent',
    borderRadius: surface === 'beige' ? 'var(--radius-xs)' : '0',
    padding: surface === 'beige' ? '7px 10px' : '0'
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: carrier
  }, rest), /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: decorative ? '' : alt,
    "aria-hidden": decorative || undefined,
    style: {
      width: '100%',
      aspectRatio: String(ratio),
      objectFit: 'contain'
    }
  }));
}
Object.assign(__ds_scope, { BrandSignature });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/identity/BrandSignature.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/AtmosphereSurface.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const ATMOSPHERE = {
  measure: {
    background: 'var(--surface-atmosphere-measure)',
    contract: 'deep'
  },
  'measure.deep': {
    background: 'var(--atmosphere-measure-deep)',
    contract: 'deep'
  },
  'measure.luminous': {
    background: 'var(--atmosphere-measure-luminous)',
    contract: 'light'
  },
  ground: {
    background: 'var(--surface-atmosphere-ground)',
    contract: 'light'
  },
  'ground.current': {
    background: 'var(--atmosphere-ground-current)',
    contract: 'deep'
  },
  'ground.mist': {
    background: 'var(--atmosphere-ground-mist)',
    contract: 'light'
  },
  cultivate: {
    background: 'var(--surface-atmosphere-cultivate)',
    contract: 'light'
  },
  'cultivate.glow': {
    background: 'var(--atmosphere-cultivate-glow)',
    contract: 'light'
  },
  'cultivate.mist': {
    background: 'var(--atmosphere-cultivate-mist)',
    contract: 'light'
  },
  diversity: {
    background: 'var(--atmosphere-diversity-spectrum)',
    contract: 'light'
  }
};
const CONTRACT = {
  deep: {
    color: 'var(--on-deep-primary)',
    '--local-secondary': 'var(--on-deep-secondary)',
    '--local-metadata': 'var(--on-deep-metadata)',
    '--local-separator': 'var(--on-deep-separator)'
  },
  light: {
    color: 'var(--on-light-primary)',
    '--local-secondary': 'var(--on-light-secondary)',
    '--local-metadata': 'var(--on-light-metadata)',
    '--local-separator': 'var(--on-light-separator)'
  }
};

/**
 * A fixed gradient surface that owns its complete foreground contract, so
 * theme-global ink never leaks onto a governed atmosphere.
 */
function AtmosphereSurface({
  atmosphere = 'measure',
  as: Tag = 'section',
  pad = 'var(--space-8)',
  radius = '0',
  children,
  style,
  ...rest
}) {
  const recipe = ATMOSPHERE[atmosphere] || ATMOSPHERE.measure;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    "data-atmosphere": atmosphere,
    style: {
      display: 'block',
      minWidth: 0,
      position: 'relative',
      background: recipe.background,
      ...CONTRACT[recipe.contract],
      padding: pad,
      borderRadius: radius,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { AtmosphereSurface });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/AtmosphereSurface.jsx", error: String((e && e.message) || e) }); }

// ui_kits/identity-playground/App.kit.js
try { (() => {
const {
  Header,
  ModeMenu,
  Footer,
  useTheme,
  StartScreen,
  ReferenceScreen,
  LabScreen
} = window.LandometerKit;
function App() {
  const [mode, setMode] = React.useState('start');
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [locale, setLocale] = React.useState('en');
  const [theme, cycleTheme] = useTheme();
  React.useEffect(() => {
    document.documentElement.setAttribute('data-locale', locale);
  }, [locale]);
  const pick = next => {
    setMode(next);
    setMenuOpen(false);
    window.scrollTo(0, 0);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "app"
  }, /*#__PURE__*/React.createElement(Header, {
    mode: mode,
    onOpenMenu: () => setMenuOpen(true),
    theme: theme,
    onCycleTheme: cycleTheme,
    locale: locale,
    onToggleLocale: () => setLocale(current => current === 'en' ? 'th' : 'en')
  }), mode === 'start' ? /*#__PURE__*/React.createElement(StartScreen, {
    locale: locale,
    onOpenReference: () => pick('reference')
  }) : null, mode === 'reference' ? /*#__PURE__*/React.createElement(ReferenceScreen, {
    onOpenLab: () => pick('lab')
  }) : null, mode === 'lab' ? /*#__PURE__*/React.createElement(LabScreen, null) : null, /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(ModeMenu, {
    open: menuOpen,
    mode: mode,
    onClose: () => setMenuOpen(false),
    onPick: pick
  }));
}
window.LandometerKit.App = App;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/identity-playground/App.kit.js", error: String((e && e.message) || e) }); }

// ui_kits/identity-playground/LabScreen.kit.js
try { (() => {
const {
  Button,
  Segmented,
  DataTable,
  MapLegend,
  TrustBadge,
  ErrorState,
  Icon
} = window.LandometerDesignSystem_514efc;
const specimens = [{
  id: 'type',
  label: 'Typography · script-aware pair'
}, {
  id: 'scale',
  label: 'Analytical scales · anchors and classes'
}, {
  id: 'chart',
  label: 'Compare · ranked bars with a table alternative'
}, {
  id: 'motion',
  label: 'Motion · semantic reveal'
}, {
  id: 'state',
  label: 'State · failure and recovery'
}];
const floodRows = [{
  area: 'Tha Sai',
  events: '4',
  last: '21 July 2026'
}, {
  area: 'Krok Phra',
  events: '2',
  last: '9 July 2026'
}, {
  area: 'Bueng Lak',
  events: '0',
  last: 'surveyed, none'
}, {
  area: 'Na To',
  events: null,
  last: null
}];
function LabScreen() {
  const [specimen, setSpecimen] = React.useState('type');
  const [scale, setScale] = React.useState('water');
  const [running, setRunning] = React.useState(false);
  const index = specimens.findIndex(item => item.id === specimen);
  const step = delta => setSpecimen(specimens[(index + delta + specimens.length) % specimens.length].id);
  const current = specimens[index];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "lab-hero"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow"
  }, "Specimen lab"), /*#__PURE__*/React.createElement("h2", null, "Fixtures, not product capabilities.")), /*#__PURE__*/React.createElement("div", {
    className: "trust-plate"
  }, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow",
    style: {
      margin: 0
    }
  }, "Fixture scope"), /*#__PURE__*/React.createElement("strong", null, "DV-FIXTURE-0.1 \xB7 synthetic"), /*#__PURE__*/React.createElement(TrustBadge, {
    status: "partial"
  }, "reference scoped"), /*#__PURE__*/React.createElement("span", null, "no network effect \xB7 no persistence"))), /*#__PURE__*/React.createElement("div", {
    className: "lab-navigation"
  }, /*#__PURE__*/React.createElement(Button, {
    iconOnly: true,
    "aria-label": "Previous specimen",
    onClick: () => step(-1),
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow_back"
    })
  }), /*#__PURE__*/React.createElement("label", {
    className: "mono",
    htmlFor: "specimen-select"
  }, "specimen"), /*#__PURE__*/React.createElement("select", {
    id: "specimen-select",
    value: specimen,
    onChange: event => setSpecimen(event.target.value)
  }, specimens.map(item => /*#__PURE__*/React.createElement("option", {
    key: item.id,
    value: item.id
  }, item.label))), /*#__PURE__*/React.createElement("span", {
    className: "mono"
  }, index + 1, " / ", specimens.length), /*#__PURE__*/React.createElement(Button, {
    iconOnly: true,
    "aria-label": "Next specimen",
    onClick: () => step(1),
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow_forward"
    })
  })), /*#__PURE__*/React.createElement("div", {
    className: "lab-stage"
  }, /*#__PURE__*/React.createElement("section", {
    className: "specimen-panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "specimen-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow"
  }, "Fixture ", index + 1), /*#__PURE__*/React.createElement("h2", null, current.label)), /*#__PURE__*/React.createElement(TrustBadge, {
    status: "pending",
    showDot: false
  }, "machineValidation: pending")), specimen === 'type' ? /*#__PURE__*/React.createElement("div", {
    className: "type-specimens"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "display \xB7 latin \xB7 Arvo 700 \xB7 1.02"), /*#__PURE__*/React.createElement("strong", {
    style: {
      fontFamily: 'var(--font-display-en)',
      fontSize: 'clamp(1.8rem,4vw,3.4rem)',
      lineHeight: 1.02,
      letterSpacing: '-.02em'
    }
  }, "Cultivate with data")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "display \xB7 thai \xB7 IBM Plex Sans Thai Looped 700 \xB7 1.16"), /*#__PURE__*/React.createElement("strong", {
    lang: "th",
    style: {
      fontFamily: 'var(--font-display-th)',
      fontSize: 'clamp(1.6rem,3.6vw,2.9rem)',
      lineHeight: 1.16
    }
  }, "\u0E1A\u0E48\u0E21\u0E40\u0E1E\u0E32\u0E30\u0E40\u0E21\u0E37\u0E2D\u0E07\u0E14\u0E49\u0E27\u0E22\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "body \xB7 Bai Jamjuree 400 \xB7 1.60"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '1.05rem',
      lineHeight: 1.6,
      margin: 0
    }
  }, "Four events in ninety days is enough to review the drainage schedule before the next storm window."), /*#__PURE__*/React.createElement("p", {
    lang: "th",
    style: {
      fontSize: '1.05rem',
      lineHeight: 1.6,
      margin: 0,
      color: 'var(--text-secondary)'
    }
  }, "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E0A\u0E38\u0E14\u0E19\u0E35\u0E49\u0E22\u0E31\u0E07\u0E44\u0E21\u0E48\u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E43\u0E0A\u0E49\u0E15\u0E31\u0E14\u0E2A\u0E34\u0E19\u0E43\u0E08 \u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E41\u0E2B\u0E25\u0E48\u0E07\u0E2D\u0E49\u0E32\u0E07\u0E2D\u0E34\u0E07\u0E01\u0E48\u0E2D\u0E19\u0E2A\u0E23\u0E38\u0E1B\u0E1C\u0E25")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "technical \xB7 JetBrains Mono 400 + IBM Plex Sans Thai 400"), /*#__PURE__*/React.createElement("strong", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'clamp(1rem,2.2vw,1.6rem)',
      lineHeight: 1.25,
      fontWeight: 400
    }
  }, "FLOOD-2569-TH-04 \xB7 4.99:1"), /*#__PURE__*/React.createElement("span", {
    lang: "th",
    style: {
      fontFamily: 'var(--font-mono-th)',
      letterSpacing: '.008em',
      lineHeight: 1.48,
      fontSize: '.95rem',
      color: 'var(--text-primary)'
    }
  }, "\u0E41\u0E2B\u0E25\u0E48\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E08\u0E33\u0E01\u0E31\u0E14 \xB7 \u0E22\u0E31\u0E07\u0E44\u0E21\u0E48\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19"))) : null, specimen === 'scale' ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      alignItems: 'center',
      flexWrap: 'wrap',
      marginBottom: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Segmented, {
    label: "Scale family",
    value: scale,
    onChange: setScale,
    options: [{
      value: 'water',
      label: 'Water'
    }, {
      value: 'risk',
      label: 'Risk'
    }, {
      value: 'confidence',
      label: 'Confidence'
    }]
  }), /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: '.8rem',
      color: 'var(--text-metadata)'
    }
  }, "sequential \xB7 3 governed anchors")), /*#__PURE__*/React.createElement("div", {
    className: "scale-anchors"
  }, ['low', 'mid', 'high'].map(stop => /*#__PURE__*/React.createElement("div", {
    key: stop,
    className: "scale-anchor",
    style: {
      background: 'var(--scale-' + scale + '-' + stop + ')'
    }
  }, /*#__PURE__*/React.createElement("span", null, scale, ".", stop)))), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-secondary)',
      fontSize: 'var(--type-body-sm)'
    }
  }, "Exact 5 / 7 / 9 class cells and the 41-stop LUT come from the pre-generated registry. Runtime interpolation between these anchors is prohibited, so the classed strips are not reproduced here."), /*#__PURE__*/React.createElement(MapLegend, {
    layer: 'Flood frequency · municipality',
    method: "Quantile, 5 classes, 2569 season",
    units: "events per season",
    classes: [{
      label: 'Low',
      color: 'var(--scale-' + scale + '-low)',
      range: '0–1'
    }, {
      label: 'Moderate',
      color: 'var(--scale-' + scale + '-mid)',
      range: '2–3'
    }, {
      label: 'High',
      color: 'var(--scale-' + scale + '-high)',
      range: '4+'
    }],
    zero: "No event recorded (surveyed)",
    source: "Synthetic fixture DV-FIXTURE-0.1",
    limitation: "Synthetic values. Not a CityMETER measurement."
  })) : null, specimen === 'chart' ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow"
  }, "Flood events by municipality \xB7 2569 season \xB7 count"), /*#__PURE__*/React.createElement("div", {
    className: "bar-chart"
  }, floodRows.map(row => {
    const value = row.events === null ? null : Number(row.events);
    return /*#__PURE__*/React.createElement("div", {
      className: "bar-row",
      key: row.area
    }, /*#__PURE__*/React.createElement("span", null, row.area), /*#__PURE__*/React.createElement("div", {
      className: "bar-track"
    }, value === null ? /*#__PURE__*/React.createElement("div", {
      style: {
        height: '100%',
        width: '100%',
        background: 'var(--data-no-data-pattern)'
      }
    }) : value === 0 ? /*#__PURE__*/React.createElement("div", {
      style: {
        height: '100%',
        width: '4px',
        background: 'var(--data-zero)'
      }
    }) : /*#__PURE__*/React.createElement("div", {
      className: "bar-fill",
      style: {
        width: value / 5 * 100 + '%'
      }
    })), /*#__PURE__*/React.createElement("span", {
      className: "bar-value"
    }, value === null ? 'no data' : row.events));
  })), /*#__PURE__*/React.createElement("div", {
    className: "chart-axis"
  }, /*#__PURE__*/React.createElement("span", null, "0"), /*#__PURE__*/React.createElement("span", null, "1"), /*#__PURE__*/React.createElement("span", null, "2"), /*#__PURE__*/React.createElement("span", null, "3"), /*#__PURE__*/React.createElement("span", null, "4"), /*#__PURE__*/React.createElement("span", null, "5")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(DataTable, {
    caption: "Table alternative \u2014 same fixture",
    note: "Synthetic fixture DV-FIXTURE-0.1 \xB7 count",
    columns: [{
      key: 'area',
      label: 'Municipality'
    }, {
      key: 'events',
      label: 'Events',
      numeric: true
    }, {
      key: 'last',
      label: 'Last recorded'
    }],
    rows: floodRows
  }))) : null, specimen === 'motion' ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      marginBottom: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    onClick: () => {
      setRunning(false);
      window.setTimeout(() => setRunning(true), 60);
    }
  }, "Play the reveal"), /*#__PURE__*/React.createElement(Button, {
    variant: "quiet",
    size: "sm",
    onClick: () => setRunning(false)
  }, "Reset")), /*#__PURE__*/React.createElement("div", {
    className: 'motion-stage ' + (running ? 'is-running' : 'is-pending')
  }, [['Object', '0ms'], ['Status', '60ms'], ['Evidence', '120ms'], ['Next action', '180ms']].map(([label, delay]) => /*#__PURE__*/React.createElement("div", {
    key: label
  }, /*#__PURE__*/React.createElement("span", null, label), /*#__PURE__*/React.createElement("small", null, "reveal 400ms \xB7 stagger ", delay)))), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-secondary)',
      fontSize: 'var(--type-body-sm)'
    }
  }, "Motion shows the order of a short process. Under ", /*#__PURE__*/React.createElement("span", {
    className: "mono"
  }, "prefers-reduced-motion: reduce"), " every duration collapses and the final state shows immediately \u2014 the reading order and the four labels are unchanged.")) : null, specimen === 'state' ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-5)',
      maxWidth: 660
    }
  }, /*#__PURE__*/React.createElement(ErrorState, {
    label: "Handoff not prepared",
    title: "The object version could not be resolved",
    detail: "FLOOD-2569-TH-04 has two open revisions, so the handoff would be ambiguous.",
    preserved: "draft note \xB7 selected municipality \xB7 chosen recipient"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm"
  }, "Pick a revision and retry"), /*#__PURE__*/React.createElement(Button, {
    variant: "quiet",
    size: "sm"
  }, "Keep working without handoff")), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-secondary)',
      fontSize: 'var(--type-body-sm)'
    }
  }, "The failure names what broke, shows what survived, and offers both a retry and an honest alternative. Nothing the person typed is discarded.")) : null)));
}
window.LandometerKit = Object.assign(window.LandometerKit || {}, {
  LabScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/identity-playground/LabScreen.kit.js", error: String((e && e.message) || e) }); }

// ui_kits/identity-playground/ReferenceScreen.kit.js
try { (() => {
const {
  Button,
  TrustBadge,
  Toast,
  EmptyState,
  Icon
} = window.LandometerDesignSystem_514efc;
const referenceSections = [{
  id: 'color',
  label: 'Color, surfaces & data palettes'
}, {
  id: 'foundations',
  label: 'Foundations'
}, {
  id: 'components',
  label: 'Interface components'
}, {
  id: 'dataviz',
  label: 'Data visualization & maps'
}, {
  id: 'products',
  label: 'Product adaptations'
}];
const brandSwatches = [['--brand-blue', '#1D4497'], ['--energy-sky', '#59D2FE'], ['--energy-mint', '#0AD69C'], ['--energy-coral', '#FF5A5F'], ['--energy-yellow', '#FFBC1F']];
const contracts = [['BrandSignature', 'approved asset · intrinsic ratio · no redraw, recolor or animation'], ['Button', 'native button · one intent · visible focus · busy and disabled reason · 44px target'], ['Link', 'real destination · clear label · external cue when useful'], ['FormField', 'label · help · associated error · retained input · recovery'], ['DecisionCard', 'object · metric or status · meaning · evidence · one action'], ['SourceLedger', 'source · publisher · date · supported claim · limitation'], ['TrustBadge', 'visible status matches publication and index policy'], ['DataTable', 'caption · headers · numeric alignment · mobile strategy'], ['MapLegend', 'layer · method · units and classes · no-data · source and date · limitation'], ['EmptyState', 'what is unavailable · why · honest next action'], ['ErrorState', 'what failed · preserved state · retry or alternative'], ['Dialog', 'name · visible close · focus containment and return · Escape · inert background'], ['Toast', 'non-blocking status only · never the sole critical message']];
function ReferenceScreen({
  onOpenLab
}) {
  const [active, setActive] = React.useState('color');
  const [receipt, setReceipt] = React.useState(null);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "reference-hero"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow"
  }, "Implementation library"), /*#__PURE__*/React.createElement("h2", null, "Start with color. Open the rest only when the work needs it.")), /*#__PURE__*/React.createElement("div", {
    className: "reference-status"
  }, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow",
    style: {
      margin: 0
    }
  }, "Release boundary"), /*#__PURE__*/React.createElement("p", null, "Owner-approved for human-readable authoring. The generated machine package remains pending, so no package-level or artifact-level conformance is claimed."), /*#__PURE__*/React.createElement(TrustBadge, {
    status: "source_limited"
  }, "evidence: source_limited"))), /*#__PURE__*/React.createElement("div", {
    className: "reference-layout"
  }, /*#__PURE__*/React.createElement("aside", {
    className: "reference-sidebar"
  }, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow",
    style: {
      margin: 0
    }
  }, "Sections"), /*#__PURE__*/React.createElement("nav", {
    className: "reference-nav"
  }, referenceSections.map(section => /*#__PURE__*/React.createElement("button", {
    key: section.id,
    type: "button",
    "aria-current": active === section.id ? 'true' : undefined,
    onClick: () => setActive(section.id)
  }, section.label))), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    onClick: onOpenLab
  }, "Open the specimen lab")), /*#__PURE__*/React.createElement("div", {
    className: "reference-content"
  }, active === 'color' ? /*#__PURE__*/React.createElement("section", {
    className: "reference-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rule-head"
  }, /*#__PURE__*/React.createElement("h3", null, "Role-based color router"), /*#__PURE__*/React.createElement("span", {
    className: "rule-id"
  }, "[TOKEN-01] \xB7 [REFERENCE-01]")), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-secondary)'
    }
  }, "Choose by the job the color has to do, not by how it looks. Solid, atmosphere gradient, sequential or diverging scale, categorical, opacity and line each have their own registry."), /*#__PURE__*/React.createElement("div", {
    className: "swatch-row"
  }, brandSwatches.map(([token, hex]) => /*#__PURE__*/React.createElement("button", {
    key: token,
    type: "button",
    className: "swatch",
    style: {
      background: hex
    },
    onClick: () => setReceipt(token + ' ' + hex + ' copied')
  }, /*#__PURE__*/React.createElement("span", null, hex)))), /*#__PURE__*/React.createElement("ul", {
    className: "rule-list"
  }, /*#__PURE__*/React.createElement("li", null, "Brand Blue is identity. The interaction accent #176B82 is every link, capsule and focus ring."), /*#__PURE__*/React.createElement("li", null, "The seven shared atmosphere gradients are surface-only. Their fifteen stop values must never be used as a solid."), /*#__PURE__*/React.createElement("li", null, "Product gradients stay inside product-identity specimens."), /*#__PURE__*/React.createElement("li", null, "Never mix canonical dataviz ramps at runtime \u2014 render classes from the pre-generated LUT."))) : null, active === 'foundations' ? /*#__PURE__*/React.createElement("section", {
    className: "reference-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rule-head"
  }, /*#__PURE__*/React.createElement("h3", null, "Type, space and motion"), /*#__PURE__*/React.createElement("span", {
    className: "rule-id"
  }, "[TYPE-01] \xB7 [MOTION-01]")), /*#__PURE__*/React.createElement("div", {
    className: "pack-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "Arvo 700 / IBM Plex Sans Thai Looped 700"), /*#__PURE__*/React.createElement("span", null, "Display, by script. Never mixed inside one heading.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "Bai Jamjuree 400/600"), /*#__PURE__*/React.createElement("span", null, "Continuous reading and general UI, both scripts.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "JetBrains Mono 400 + IBM Plex Sans Thai 400"), /*#__PURE__*/React.createElement("span", null, "One technical weight, script-aware. font-synthesis: none.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "4px space base \xB7 999px action pill"), /*#__PURE__*/React.createElement("span", null, "Capsule for text actions, 44px circle for icon-only utilities.")))) : null, active === 'components' ? /*#__PURE__*/React.createElement("section", {
    className: "reference-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rule-head"
  }, /*#__PURE__*/React.createElement("h3", null, "Shared component contract"), /*#__PURE__*/React.createElement("span", {
    className: "rule-id"
  }, "[CTRL-02]")), /*#__PURE__*/React.createElement("div", {
    className: "pack-grid"
  }, contracts.map(([name, contract]) => /*#__PURE__*/React.createElement("div", {
    key: name
  }, /*#__PURE__*/React.createElement("strong", null, name), /*#__PURE__*/React.createElement("span", null, contract))))) : null, active === 'dataviz' ? /*#__PURE__*/React.createElement("section", {
    className: "reference-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rule-head"
  }, /*#__PURE__*/React.createElement("h3", null, "Data visualization & maps"), /*#__PURE__*/React.createElement("span", {
    className: "rule-id"
  }, "[DATAVIZ-01] \xB7 [MAP-01]")), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-secondary)'
    }
  }, "Units, source, no-data, measured zero, limitation and a visible table alternative stay attached to every chart."), /*#__PURE__*/React.createElement("div", {
    className: "download-grid"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onOpenLab
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bar_chart",
    size: "lg",
    style: {
      color: 'var(--interaction-accent)'
    }
  }), /*#__PURE__*/React.createElement("strong", null, "Compare"), /*#__PURE__*/React.createElement("span", null, "Ranked bars, one measure, labelled axis.")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onOpenLab
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "show_chart",
    size: "lg",
    style: {
      color: 'var(--interaction-accent)'
    }
  }), /*#__PURE__*/React.createElement("strong", null, "Change"), /*#__PURE__*/React.createElement("span", null, "Time series with a visible gap for missing months.")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onOpenLab
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "scatter_plot",
    size: "lg",
    style: {
      color: 'var(--interaction-accent)'
    }
  }), /*#__PURE__*/React.createElement("strong", null, "Relationship"), /*#__PURE__*/React.createElement("span", null, "Two measures, redundant shape cue per series."))), /*#__PURE__*/React.createElement("div", {
    className: "omitted",
    style: {
      marginTop: 'var(--space-5)'
    }
  }, "Map fixture omitted. The v0.8.9 release declares ", /*#__PURE__*/React.createElement("span", {
    className: "mono"
  }, "map: false"), " and claims no governed map result, so the geometry from the published page is not reproduced here. The governed map tokens and the MapLegend contract are shown in the lab instead.")) : null, active === 'products' ? /*#__PURE__*/React.createElement("section", {
    className: "reference-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rule-head"
  }, /*#__PURE__*/React.createElement("h3", null, "Product adaptations"), /*#__PURE__*/React.createElement("span", {
    className: "rule-id"
  }, "[BOUNDARY-01]")), /*#__PURE__*/React.createElement("div", {
    className: "pack-grid"
  }, [['CityMETER', 'citymeter', 'Nationwide spatial business registry and change monitoring.'], ['CityWiki', 'citywiki', 'Bilingual, story-first city reader.'], ['CityChat', 'citychat', 'Conversational access to a bounded city record.'], ['ijji', 'ijji', 'Locale insight for a specific place and decision.']].map(([name, id, note]) => /*#__PURE__*/React.createElement("div", {
    key: id,
    style: {
      borderLeft: '10px solid transparent',
      backgroundImage: 'linear-gradient(var(--surface-card),var(--surface-card)), var(--product-' + id + '-gradient)',
      backgroundOrigin: 'border-box',
      backgroundClip: 'padding-box, border-box'
    }
  }, /*#__PURE__*/React.createElement("strong", null, name), /*#__PURE__*/React.createElement("span", null, note)))), /*#__PURE__*/React.createElement(EmptyState, {
    label: "Product evidence not attached",
    title: "Bounded templates only",
    reason: "Product users, data, scores, models and availability need a current approved Product Brief or Product Statement.",
    stillPossible: "Use the shared layer for structure, and keep every product claim inside the product that owns it."
  })) : null)), receipt ? /*#__PURE__*/React.createElement(Toast, {
    tone: "success",
    message: receipt,
    note: "local only \xB7 nothing was sent"
  }) : null);
}
window.LandometerKit = Object.assign(window.LandometerKit || {}, {
  ReferenceScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/identity-playground/ReferenceScreen.kit.js", error: String((e && e.message) || e) }); }

// ui_kits/identity-playground/Shell.kit.js
try { (() => {
const {
  BrandSignature,
  Button,
  Segmented,
  Dialog,
  TrustBadge,
  Icon
} = window.LandometerDesignSystem_514efc;
const THEMES = ['system', 'light', 'dark'];
function useTheme() {
  const [theme, setTheme] = React.useState('system');
  React.useEffect(() => {
    const root = document.documentElement;
    if (theme === 'system') root.removeAttribute('data-theme');else root.setAttribute('data-theme', theme);
  }, [theme]);
  const cycle = () => setTheme(current => THEMES[(THEMES.indexOf(current) + 1) % THEMES.length]);
  return [theme, cycle];
}
function Header({
  mode,
  onOpenMenu,
  theme,
  onCycleTheme,
  locale,
  onToggleLocale
}) {
  return /*#__PURE__*/React.createElement("header", {
    className: "site-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "header-inner"
  }, /*#__PURE__*/React.createElement(BrandSignature, {
    variant: "lockup",
    src: "../../assets/logo/landometer-lockup-color.png",
    width: 188,
    surface: "beige"
  }), /*#__PURE__*/React.createElement("div", {
    className: "header-state"
  }, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow"
  }, "v0.8.9-r1"), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, mode === 'start' ? 'Cultivate' : mode === 'reference' ? 'Implementation library' : 'Specimen lab'), /*#__PURE__*/React.createElement(TrustBadge, {
    status: "pending",
    showDot: false
  }, "machineValidation: pending")), /*#__PURE__*/React.createElement("div", {
    className: "header-tools"
  }, /*#__PURE__*/React.createElement(Button, {
    iconOnly: true,
    "aria-label": 'Theme: ' + theme + '. Switch theme.',
    onClick: onCycleTheme,
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: theme === 'dark' ? 'dark_mode' : theme === 'light' ? 'light_mode' : 'routine'
    })
  }), /*#__PURE__*/React.createElement(Button, {
    iconOnly: true,
    "aria-label": 'Language: ' + locale.toUpperCase() + '. Switch language.',
    onClick: onToggleLocale,
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "translate"
    })
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    onClick: onOpenMenu,
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "menu",
      size: "sm"
    })
  }, "Menu"))));
}
function ModeMenu({
  open,
  mode,
  onClose,
  onPick
}) {
  const modes = [['start', 'Cultivate', 'Begin with one screen, map, report or message.'], ['reference', 'Implementation library', 'Color first, then foundations and components.'], ['lab', 'Specimen lab', 'Type, scales, charts and motion fixtures.']];
  return /*#__PURE__*/React.createElement(Dialog, {
    open: open,
    title: "Where do you want to work?",
    note: "One route, three depths. Your place is kept in the URL, not on a server.",
    onClose: onClose
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-3)'
    }
  }, modes.map(([id, label, note]) => /*#__PURE__*/React.createElement("button", {
    key: id,
    type: "button",
    onClick: () => onPick(id),
    "aria-current": mode === id ? 'page' : undefined,
    style: {
      textAlign: 'left',
      minHeight: 88,
      padding: 'var(--space-4) var(--space-5)',
      cursor: 'pointer',
      background: mode === id ? 'var(--surface-blue-tint)' : 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-sm)',
      display: 'grid',
      gap: 'var(--space-2)',
      alignContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      fontFamily: 'var(--font-display-en)',
      fontSize: '1.15rem'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '.86rem',
      color: 'var(--text-secondary)',
      lineHeight: 1.5
    }
  }, note)))));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    className: "site-footer"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(BrandSignature, {
    variant: "lockup",
    src: "../../assets/logo/landometer-lockup-color.png",
    width: 150
  }), /*#__PURE__*/React.createElement("span", null, "Land \xB7 Location \xB7 Living \u2014 one shared layer, four product-owned surfaces.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "mono"
  }, "Color Set color-srgb-02 \xB7 build ui-20260807-07 \xB7 Token Schema 6"), /*#__PURE__*/React.createElement("span", null, "Internal-team intent through a public projection. noindex. No analytics, no persistence, no sharing.")));
}
window.LandometerKit = Object.assign(window.LandometerKit || {}, {
  useTheme,
  Header,
  ModeMenu,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/identity-playground/Shell.kit.js", error: String((e && e.message) || e) }); }

// ui_kits/identity-playground/StartScreen.kit.js
try { (() => {
const {
  AtmosphereSurface,
  Button,
  DecisionCard,
  Segmented,
  SourceLedger,
  Link
} = window.LandometerDesignSystem_514efc;
const startCopy = {
  en: {
    headline: 'Let us cultivate our city with data.',
    support: 'Bring one screen, map, report or message. Compare it in its needs-revision and assisted states, then keep what you can defend.',
    primary: 'Start with one object',
    secondary: 'See the implementation library',
    traceEyebrow: 'Brand trace',
    traceTitle: 'Who we are, and what that obliges us to show.'
  },
  th: {
    headline: 'มาร่วมกันบ่มเพาะเมืองของเราด้วยข้อมูล',
    support: 'เริ่มจากงานจริงหนึ่งชิ้น — หนึ่งหน้าจอ แผนที่ รายงาน หรือข้อความ เทียบสองสถานะแล้วเก็บเฉพาะสิ่งที่อธิบายได้',
    primary: 'เริ่มจากงานหนึ่งชิ้น',
    secondary: 'เปิดคลังการใช้งาน',
    traceEyebrow: 'ที่มาของแบรนด์',
    traceTitle: 'เราเป็นใคร และนั่นทำให้เราต้องแสดงอะไร'
  }
};
function StartScreen({
  locale,
  onOpenReference
}) {
  const copy = startCopy[locale];
  const [state, setState] = React.useState('assisted');
  const [copied, setCopied] = React.useState('');
  const assisted = state === 'assisted';
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-copy"
  }, /*#__PURE__*/React.createElement("div", {
    className: "version-line"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono"
  }, "Design System 0.8.9"), /*#__PURE__*/React.createElement("span", {
    className: "mono"
  }, "Build Card 0.8.9")), /*#__PURE__*/React.createElement("h1", {
    lang: locale
  }, copy.headline), /*#__PURE__*/React.createElement("p", {
    className: "hero-support",
    lang: locale
  }, copy.support), /*#__PURE__*/React.createElement("div", {
    className: "hero-actions"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "inverse"
  }, copy.primary), /*#__PURE__*/React.createElement(Button, {
    variant: "quiet",
    onClick: onOpenReference,
    style: {
      color: '#fff'
    }
  }, copy.secondary)), /*#__PURE__*/React.createElement("div", {
    className: "measure-line",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", {
    className: "measure"
  }), /*#__PURE__*/React.createElement("span", {
    className: "ground"
  }), /*#__PURE__*/React.createElement("span", {
    className: "cultivate"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "hero-quiet",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("figure", {
    className: "hero-photo"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/images/team-hero.jpg",
    alt: "The Landometer team working through a city data review together."
  }), /*#__PURE__*/React.createElement("figcaption", null, "Existing repository team photo, used without alteration. Identity and media approval records remain open."))), /*#__PURE__*/React.createElement("section", {
    className: "section-shell brand-trace"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-intro"
  }, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow"
  }, copy.traceEyebrow), /*#__PURE__*/React.createElement("h2", {
    lang: locale
  }, copy.traceTitle), /*#__PURE__*/React.createElement("p", null, "The shared Landometer layer covers portfolio, methodology and product architecture across Land, Location and Living. Product data, workflows, scores, claims and voice stay with the product that owns them.")), /*#__PURE__*/React.createElement("div", {
    className: "brand-who-what"
  }, /*#__PURE__*/React.createElement("dl", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", null, "who"), /*#__PURE__*/React.createElement("dd", null, "Teams who have to defend a decision about a place \u2014 municipal engineers, planners, operators, analysts.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", null, "what"), /*#__PURE__*/React.createElement("dd", null, "One governed object at a time, with its truth status, source, boundary and limitation attached."))), /*#__PURE__*/React.createElement("div", {
    className: "dna-row"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "Measure"), /*#__PURE__*/React.createElement("span", null, "Orientation. What is actually here, and how confident are we?")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "Ground"), /*#__PURE__*/React.createElement("span", null, "Context. Whose evidence is this, and where does it stop?")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "Cultivate"), /*#__PURE__*/React.createElement("span", null, "Action. What is the one next useful step?"))), /*#__PURE__*/React.createElement("div", {
    className: "value-chain"
  }, /*#__PURE__*/React.createElement("span", null, "Object"), /*#__PURE__*/React.createElement("b", null, "\u2192"), /*#__PURE__*/React.createElement("span", null, "Status"), /*#__PURE__*/React.createElement("b", null, "\u2192"), /*#__PURE__*/React.createElement("span", null, "Meaning"), /*#__PURE__*/React.createElement("b", null, "\u2192"), /*#__PURE__*/React.createElement("span", null, "Evidence"), /*#__PURE__*/React.createElement("b", null, "\u2192"), /*#__PURE__*/React.createElement("span", null, "Next action")))), /*#__PURE__*/React.createElement("section", {
    className: "role-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-shell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-intro"
  }, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow"
  }, "Try it \xB7 one object, two states"), /*#__PURE__*/React.createElement("h2", null, "Keep the facts fixed. Change only what the design system can change."), /*#__PURE__*/React.createElement("p", null, "Same object, same source, same date, same uncertainty. The assisted state adds status, meaning, evidence and one action \u2014 it never makes the baseline unreadable to look better.")), /*#__PURE__*/React.createElement("div", {
    className: "role-controls"
  }, /*#__PURE__*/React.createElement(Segmented, {
    label: "Compare state",
    value: state,
    onChange: setState,
    options: [{
      value: 'baseline',
      label: 'Needs revision'
    }, {
      value: 'assisted',
      label: 'Assisted'
    }]
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    onClick: () => setCopied('Preflight recipe copied — object, status, source, boundary, limitation, next action.')
  }, "Copy the 60-second preflight"), /*#__PURE__*/React.createElement("p", {
    className: "copy-status",
    role: "status"
  }, copied)), /*#__PURE__*/React.createElement("div", {
    className: "role-workbench"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow"
  }, "What the reader gains"), /*#__PURE__*/React.createElement("h3", null, assisted ? 'A defensible next step' : 'A number without a decision'), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-secondary)'
    }
  }, assisted ? 'The engineer can say what is known, what is missing, and what they are going to do about it before the next storm window.' : 'Four events is true and useless. Nobody can tell what it supports, where it came from, or what to do next.'), /*#__PURE__*/React.createElement(SourceLedger, {
    source: "CityMETER public incident endpoint",
    publisher: "Landometer / CityMETER",
    date: "Retrieved 29 July 2026",
    claim: "Flood events recorded for Tha Sai in the 2569 rainy season.",
    boundary: "Village to municipality to district to province hierarchy only.",
    limitation: "The endpoint exposes no provenance; values with unclear geographic scope are omitted.",
    allowedUse: "Orientation and follow-up questions. Not a decision record.",
    style: {
      marginTop: 'var(--space-5)'
    }
  })), assisted ? /*#__PURE__*/React.createElement(DecisionCard, {
    object: "FLOOD-2569-TH-04 \xB7 r2",
    status: "source_limited",
    statusLabel: "Source limited",
    metric: "4",
    unit: "events / 90 days",
    meaning: "Tha Sai flooded four times this season \u2014 enough to review the drainage schedule before the next storm window.",
    source: "CityMETER public incident endpoint \xB7 29 July 2026",
    limitation: "No provenance published for two of the four records.",
    nextAction: "Open the source trail before committing budget."
  }) : /*#__PURE__*/React.createElement(DecisionCard, {
    baseline: true,
    object: "FLOOD-2569-TH-04",
    status: "neutral",
    statusLabel: "\u2014",
    metric: "4",
    meaning: "Four flood events.",
    source: "internal data"
  })))), /*#__PURE__*/React.createElement("section", {
    className: "section-shell culture-section"
  }, /*#__PURE__*/React.createElement("figure", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/images/team-presenting.jpg",
    alt: "A Landometer review session in front of a projected city map."
  }), /*#__PURE__*/React.createElement("figcaption", null, "Existing repository photo, used without alteration.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow"
  }, "The route"), /*#__PURE__*/React.createElement("h2", null, "Five steps, then stop."), /*#__PURE__*/React.createElement("ol", {
    className: "culture-flow"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "Cultivate."), " Begin with one screen, map, report or message.")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "Try."), " Compare the same object in its needs-revision and assisted states.")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "Inspect."), " Look through Brand DNA, Voice or Visual \u2014 one lens at a time.")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "Align."), " Preserve object, status, source, boundary, limitation and next action through handoff.")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "Take away."), " Copy a 60-second preflight recipe into real work."))), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Link, {
    href: "https://montri-th.github.io/Landometer/",
    external: true
  }, "Open the published playground")))), /*#__PURE__*/React.createElement(AtmosphereSurface, {
    atmosphere: "measure",
    as: "section",
    className: "closing-scene",
    pad: "var(--space-9) max(var(--gutter),calc((100vw - var(--container-wide))/2))"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow",
    style: {
      color: 'var(--local-metadata)'
    }
  }, "Align \xB7 handoff"), /*#__PURE__*/React.createElement("h2", null, "Nothing important should have to be explained twice."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'inherit',
      fontSize: 'var(--type-body-lg)'
    }
  }, "Object and version, truth status, source and date, boundary, limitation, allowed use, and the next useful action all travel together \u2014 or the handoff is not finished."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "inverse"
  }, "Prepare a handoff"), /*#__PURE__*/React.createElement(Button, {
    variant: "quiet",
    onClick: onOpenReference,
    style: {
      color: 'var(--on-deep-primary)'
    }
  }, "Read the rules first")), /*#__PURE__*/React.createElement("dl", {
    className: "parity-strip"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", null, "color set"), /*#__PURE__*/React.createElement("dd", null, "color-srgb-02")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", null, "artifact build"), /*#__PURE__*/React.createElement("dd", null, "ui-20260807-07")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", null, "token schema"), /*#__PURE__*/React.createElement("dd", null, "6")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", null, "evidence"), /*#__PURE__*/React.createElement("dd", null, "source_limited")))), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true"
  })));
}
window.LandometerKit = Object.assign(window.LandometerKit || {}, {
  StartScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/identity-playground/StartScreen.kit.js", error: String((e && e.message) || e) }); }

__ds_ns.IjjiMotif = __ds_scope.IjjiMotif;

__ds_ns.IjjiWorkingIndicator = __ds_scope.IjjiWorkingIndicator;

__ds_ns.IJJI_MOTIFS = __ds_scope.IJJI_MOTIFS;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Link = __ds_scope.Link;

__ds_ns.Segmented = __ds_scope.Segmented;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.MapLegend = __ds_scope.MapLegend;

__ds_ns.DecisionCard = __ds_scope.DecisionCard;

__ds_ns.SourceLedger = __ds_scope.SourceLedger;

__ds_ns.TrustBadge = __ds_scope.TrustBadge;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.ErrorState = __ds_scope.ErrorState;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.FormField = __ds_scope.FormField;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.BrandSignature = __ds_scope.BrandSignature;

__ds_ns.AtmosphereSurface = __ds_scope.AtmosphereSurface;

})();
