import{S as Ns,n as ks,i as K,a as P,A as w,D as ct,M as Os,u as Z,v as _e,h as tt,E as Fs,p as Vs,b as g,w as Ms}from"./iframe-DznlVQe6.js";import{_ as p,n as m}from"./property-DPzhTE-K.js";import{t as Ri,e as Ni,i as Ds,a as ht,o as ke}from"./class-map-BeVXpLCM.js";import{f as Ls,i as B,m as $s,a as Bs,b as Hs,d as Us}from"./circular-progress-BzeGXRn4.js";import{r as I}from"./state-BRuHdIse.js";import{e as Rt,d as Gs}from"./story-helpers-Dsz32Ejl.js";import{t as Re}from"./custom-element-C-crYl4r.js";import"./preload-helper-PPVm8Dsz.js";window.Vaadin||={};window.Vaadin.featureFlags||={};function Ws(r){return r.replace(/-[a-z]/gu,t=>t[1].toUpperCase())}const M={};function Nt(r,t="24.9.13"){if(Object.defineProperty(r,"version",{get(){return t}}),r.experimental){const i=typeof r.experimental=="string"?r.experimental:`${Ws(r.is.split("-").slice(1).join("-"))}Component`;if(!window.Vaadin.featureFlags[i]&&!M[i]){M[i]=new Set,M[i].add(r),Object.defineProperty(window.Vaadin.featureFlags,i,{get(){return M[i].size===0},set(s){s&&M[i].size>0&&(M[i].forEach(o=>{customElements.define(o.is,o)}),M[i].clear())}});return}else if(M[i]){M[i].add(r);return}}const e=customElements.get(r.is);if(!e)customElements.define(r.is,r);else{const i=e.version;i&&r.version&&i===r.version?console.warn(`The component ${r.is} has been loaded twice`):console.error(`Tried to define ${r.is} version ${r.version} when version ${e.version} is already in use. Something will probably break.`)}}class js extends HTMLElement{static get is(){return"vaadin-lumo-styles"}}Nt(js);function qs(r){const t=r.constructor,e=r.__cssInjectorStyleSheet;return e?[...t.baseStyles,e,...t.themeStyles]:t.elementStyles}function Ys(r){[...r.shadowRoot.querySelectorAll("style")].forEach(t=>t.remove()),Ns(r.shadowRoot,qs(r))}const Ks=r=>class extends r{static get properties(){return{_theme:{type:String,readOnly:!0}}}static get observedAttributes(){return[...super.observedAttributes,"theme"]}attributeChangedCallback(e,i,s){super.attributeChangedCallback(e,i,s),e==="theme"&&this._set_theme(s)}};const ki=[],ut=new Set,kt=new Set;function Oi(r){return r&&Object.prototype.hasOwnProperty.call(r,"__themes")}function Js(r){return Oi(customElements.get(r))}function Xs(r=[]){return[r].flat(1/0).filter(t=>t instanceof ks?!0:(console.warn("An item in styles is not of type CSSResult. Use `unsafeCSS` or `css`."),!1))}function Fi(r,t){return(r||"").split(" ").some(e=>new RegExp(`^${e.split("*").join(".*")}$`,"u").test(t))}function Vi(r){return r.map(t=>t.cssText).join(`
`)}const He="vaadin-themable-mixin-style";function Zs(r,t){const e=document.createElement("style");e.id=He,e.textContent=Vi(r),t.content.appendChild(e)}function Qs(r){if(!r.shadowRoot)return;const t=r.constructor;if(r instanceof K)Ys(r);else{const e=r.shadowRoot.getElementById(He),i=t.prototype._template;e.textContent=i.content.getElementById(He).textContent}}function er(r){ut.forEach(t=>{const e=t.deref();e instanceof r?Qs(e):e||ut.delete(t)})}function Mi(r){if(r.prototype instanceof K)r.elementStyles=r.finalizeStyles(r.styles);else{const t=r.prototype._template;t.content.getElementById(He).textContent=Vi(r.getStylesForThis())}kt.forEach(t=>{const e=customElements.get(t);e!==r&&e.prototype instanceof r&&Mi(e)})}function tr(r,t){const e=r.__themes;return!e||!t?!1:e.some(i=>i.styles.some(s=>t.some(o=>o.cssText===s.cssText)))}function Je(r,t,e={}){t=Xs(t),window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.registerStyles(r,t,e):ki.push({themeFor:r,styles:t,include:e.include,moduleId:e.moduleId}),r&&kt.forEach(i=>{if(Fi(r,i)&&Js(i)){const s=customElements.get(i);tr(s,t)?console.warn(`Registering styles that already exist for ${i}`):(!window.Vaadin||!window.Vaadin.suppressPostFinalizeStylesWarning)&&console.warn(`The custom element definition for "${i}" was finalized before a style module was registered. Ideally, import component specific style modules before importing the corresponding custom element. This warning can be suppressed by setting "window.Vaadin.suppressPostFinalizeStylesWarning = true".`),Mi(s),er(s)}})}function pt(){return window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.getAllThemes():ki}function ir(r=""){let t=0;return r.startsWith("lumo-")||r.startsWith("material-")?t=1:r.startsWith("vaadin-")&&(t=2),t}function Di(r){const t=[];return r.include&&[].concat(r.include).forEach(e=>{const i=pt().find(s=>s.moduleId===e);i?t.push(...Di(i),...i.styles):console.warn(`Included moduleId ${e} not found in style registry`)},r.styles),t}function sr(r){const t=`${r}-default-theme`,e=pt().filter(i=>i.moduleId!==t&&Fi(i.themeFor,r)).map(i=>({...i,styles:[...Di(i),...i.styles],includePriority:ir(i.moduleId)})).sort((i,s)=>s.includePriority-i.includePriority);return e.length>0?e:pt().filter(i=>i.moduleId===t)}const rr=r=>class extends Ks(r){constructor(){super(),ut.add(new WeakRef(this))}static finalize(){if(super.finalize(),this.is&&kt.add(this.is),this.elementStyles)return;const e=this.prototype._template;!e||Oi(this)||Zs(this.getStylesForThis(),e)}static finalizeStyles(e){return this.baseStyles=e?[e].flat(1/0):[],this.themeStyles=this.getStylesForThis(),[...this.baseStyles,...this.themeStyles]}static getStylesForThis(){const e=r.__themes||[],i=Object.getPrototypeOf(this.prototype),s=(i?i.constructor.__themes:[])||[];this.__themes=[...e,...s,...sr(this.is)];const o=this.__themes.flatMap(a=>a.styles);return o.filter((a,n)=>n===o.lastIndexOf(a))}};const or=(r,...t)=>{const e=document.createElement("style");e.id=r,e.textContent=t.map(i=>i.toString()).join(`
`).replace(":host","html"),document.head.insertAdjacentElement("afterbegin",e)},me=(r,...t)=>{or(`lumo-${r}`,t)};const ar=P`
  :host {
    /* Base (background) */
    --lumo-base-color: #fff;

    /* Tint */
    --lumo-tint-5pct: hsla(0, 0%, 100%, 0.3);
    --lumo-tint-10pct: hsla(0, 0%, 100%, 0.37);
    --lumo-tint-20pct: hsla(0, 0%, 100%, 0.44);
    --lumo-tint-30pct: hsla(0, 0%, 100%, 0.5);
    --lumo-tint-40pct: hsla(0, 0%, 100%, 0.57);
    --lumo-tint-50pct: hsla(0, 0%, 100%, 0.64);
    --lumo-tint-60pct: hsla(0, 0%, 100%, 0.7);
    --lumo-tint-70pct: hsla(0, 0%, 100%, 0.77);
    --lumo-tint-80pct: hsla(0, 0%, 100%, 0.84);
    --lumo-tint-90pct: hsla(0, 0%, 100%, 0.9);
    --lumo-tint: #fff;

    /* Shade */
    --lumo-shade-5pct: hsla(214, 61%, 25%, 0.05);
    --lumo-shade-10pct: hsla(214, 57%, 24%, 0.1);
    --lumo-shade-20pct: hsla(214, 53%, 23%, 0.16);
    --lumo-shade-30pct: hsla(214, 50%, 22%, 0.26);
    --lumo-shade-40pct: hsla(214, 47%, 21%, 0.38);
    --lumo-shade-50pct: hsla(214, 45%, 20%, 0.52);
    --lumo-shade-60pct: hsla(214, 43%, 19%, 0.6);
    --lumo-shade-70pct: hsla(214, 42%, 18%, 0.69);
    --lumo-shade-80pct: hsla(214, 41%, 17%, 0.83);
    --lumo-shade-90pct: hsla(214, 40%, 16%, 0.94);
    --lumo-shade: hsl(214, 35%, 15%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-shade-5pct);
    --lumo-contrast-10pct: var(--lumo-shade-10pct);
    --lumo-contrast-20pct: var(--lumo-shade-20pct);
    --lumo-contrast-30pct: var(--lumo-shade-30pct);
    --lumo-contrast-40pct: var(--lumo-shade-40pct);
    --lumo-contrast-50pct: var(--lumo-shade-50pct);
    --lumo-contrast-60pct: var(--lumo-shade-60pct);
    --lumo-contrast-70pct: var(--lumo-shade-70pct);
    --lumo-contrast-80pct: var(--lumo-shade-80pct);
    --lumo-contrast-90pct: var(--lumo-shade-90pct);
    --lumo-contrast: var(--lumo-shade);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 100%, 48%);
    --lumo-primary-color-50pct: hsla(214, 100%, 49%, 0.76);
    --lumo-primary-color-10pct: hsla(214, 100%, 60%, 0.13);
    --lumo-primary-text-color: hsl(214, 100%, 43%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 85%, 48%);
    --lumo-error-color-50pct: hsla(3, 85%, 49%, 0.5);
    --lumo-error-color-10pct: hsla(3, 85%, 49%, 0.1);
    --lumo-error-text-color: hsl(3, 89%, 42%);
    --lumo-error-contrast-color: #fff;

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 72%, 31%, 0.5);
    --lumo-success-color-10pct: hsla(145, 72%, 31%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 25%);
    --lumo-success-contrast-color: #fff;

    /* Warning */
    --lumo-warning-color: hsl(48, 100%, 50%);
    --lumo-warning-color-10pct: hsla(48, 100%, 50%, 0.25);
    --lumo-warning-text-color: hsl(32, 100%, 30%);
    --lumo-warning-contrast-color: var(--lumo-shade-90pct);
  }

  /* forced-colors mode adjustments */
  @media (forced-colors: active) {
    html {
      --lumo-disabled-text-color: GrayText;
    }
  }
`;me("color-props",ar);const nr=P`
  [theme~='dark'] {
    /* Base (background) */
    --lumo-base-color: hsl(214, 35%, 21%);

    /* Tint */
    --lumo-tint-5pct: hsla(214, 65%, 85%, 0.06);
    --lumo-tint-10pct: hsla(214, 60%, 80%, 0.14);
    --lumo-tint-20pct: hsla(214, 64%, 82%, 0.23);
    --lumo-tint-30pct: hsla(214, 69%, 84%, 0.32);
    --lumo-tint-40pct: hsla(214, 73%, 86%, 0.41);
    --lumo-tint-50pct: hsla(214, 78%, 88%, 0.5);
    --lumo-tint-60pct: hsla(214, 82%, 90%, 0.58);
    --lumo-tint-70pct: hsla(214, 87%, 92%, 0.69);
    --lumo-tint-80pct: hsla(214, 91%, 94%, 0.8);
    --lumo-tint-90pct: hsla(214, 96%, 96%, 0.9);
    --lumo-tint: hsl(214, 100%, 98%);

    /* Shade */
    --lumo-shade-5pct: hsla(214, 0%, 0%, 0.07);
    --lumo-shade-10pct: hsla(214, 4%, 2%, 0.15);
    --lumo-shade-20pct: hsla(214, 8%, 4%, 0.23);
    --lumo-shade-30pct: hsla(214, 12%, 6%, 0.32);
    --lumo-shade-40pct: hsla(214, 16%, 8%, 0.41);
    --lumo-shade-50pct: hsla(214, 20%, 10%, 0.5);
    --lumo-shade-60pct: hsla(214, 24%, 12%, 0.6);
    --lumo-shade-70pct: hsla(214, 28%, 13%, 0.7);
    --lumo-shade-80pct: hsla(214, 32%, 13%, 0.8);
    --lumo-shade-90pct: hsla(214, 33%, 13%, 0.9);
    --lumo-shade: hsl(214, 33%, 13%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-tint-5pct);
    --lumo-contrast-10pct: var(--lumo-tint-10pct);
    --lumo-contrast-20pct: var(--lumo-tint-20pct);
    --lumo-contrast-30pct: var(--lumo-tint-30pct);
    --lumo-contrast-40pct: var(--lumo-tint-40pct);
    --lumo-contrast-50pct: var(--lumo-tint-50pct);
    --lumo-contrast-60pct: var(--lumo-tint-60pct);
    --lumo-contrast-70pct: var(--lumo-tint-70pct);
    --lumo-contrast-80pct: var(--lumo-tint-80pct);
    --lumo-contrast-90pct: var(--lumo-tint-90pct);
    --lumo-contrast: var(--lumo-tint);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 90%, 48%);
    --lumo-primary-color-50pct: hsla(214, 90%, 70%, 0.69);
    --lumo-primary-color-10pct: hsla(214, 90%, 55%, 0.13);
    --lumo-primary-text-color: hsl(214, 90%, 77%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 79%, 49%);
    --lumo-error-color-50pct: hsla(3, 75%, 62%, 0.5);
    --lumo-error-color-10pct: hsla(3, 75%, 62%, 0.14);
    --lumo-error-text-color: hsl(3, 100%, 80%);

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 92%, 51%, 0.5);
    --lumo-success-color-10pct: hsla(145, 92%, 51%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 46%);

    /* Warning */
    --lumo-warning-color: hsl(43, 100%, 48%);
    --lumo-warning-color-10pct: hsla(40, 100%, 50%, 0.2);
    --lumo-warning-text-color: hsl(45, 100%, 60%);
    --lumo-warning-contrast-color: var(--lumo-shade-90pct);
  }

  html {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
    color-scheme: light;
  }

  [theme~='dark'] {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
    color-scheme: dark;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--lumo-header-text-color);
  }

  a:where(:any-link) {
    color: var(--lumo-primary-text-color);
  }

  a:not(:any-link) {
    color: var(--lumo-disabled-text-color);
  }

  blockquote {
    color: var(--lumo-secondary-text-color);
  }

  code,
  pre {
    background-color: var(--lumo-contrast-10pct);
    border-radius: var(--lumo-border-radius-m);
  }
  pre code {
    background: transparent;
  }
`;Je("",nr,{moduleId:"lumo-color"});const lr=P`
  @font-face {
    font-family: 'lumo-icons';
    src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAABHAAAsAAAAAI6AAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAQwAAAFZAIUuNY21hcAAAAYgAAAD+AAADymne8hxnbHlmAAACiAAAC+gAABioIzlOlWhlYWQAAA5wAAAAMAAAADZa/6SsaGhlYQAADqAAAAAdAAAAJAbpA4BobXR4AAAOwAAAABAAAAC0q+AAAGxvY2EAAA7QAAAAXAAAAFyF7o1GbWF4cAAADywAAAAfAAAAIAFMAXBuYW1lAAAPTAAAATEAAAIuUUJZCHBvc3QAABCAAAABPQAAAgfdkltveJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGS+xDiBgZWBgamKaQ8DA0MPhGZ8wGDIyAQUZWBlZsAKAtJcUxgcXjG+0mEO+p/FEMUcxDANKMwIkgMABvgMMAB4nO3SV26EMABF0UsZpjG9d6Y3FpgF5StLYxMTP16WEUvHV1gGIQzQAJKgDFKIfojQ+A6rUb2e0KnXU77qPanWq/LzCXOkOVyn9RyHvWl4YkaTFu1wX5ecHn0GDBkxZsKUGXMWLFmxZsOWHXsOFBw5cebClRt3Hjx58dZ7RRn/I9cUF39Xpb691acRG2piOtUqNZ1P1TCdeJUZatNQW4baNtSO6U+ouoaam96u6hlq31AHhjo01JGhjg11YqhTQ50Z6txQF4a6NNSVoa4NdWOoW0PdGereUA+GWhjq0VBPhno21IuhXg31Zqh3Q30Y6tNQX4b6NtTSKH8BOIRpQQAAeJy1WH1sW9UVv+fG9vPz+7Bf/N6zHcd2/J04jbP6s0lap4kDpB9JWzUUCqxNgaHxpTI6hNhUNLVr17HSISb2D2iAJrWb6FTWahNQdQxRvmHamAR0qibE1E18CG3QaVNFvJ17n+3YIf1AiMQ679x77j3v3HPPPed3H7ER/OsYpw8TmQRIiuQJ8RZK+WjO1B3xaCzla21orY10a+OQ6aHTHtP0zB31mBs1GZ6RNU2uXc7oPL+xdRS9R9X1oK4fVfijdsBqvqF6vd1eLzPrYrYZ57WteF7bPDIc5+ZcJnta+S9i2Vfhs4MaMwZNQmO0Vv7gF/MZcNsCcJp4sJFSwYyAmRuFCmTBDRBUkwGqnlViyjmVBpLqaXhNpt0J5V1JOqMkuqn8WkMHvZX+iOlImiqkBiFVYDrCqINulmkwKb8ry2fkZBBn7FcTlk4ZdfpRZ9MOesLSAakKt0N3g4p2jAL8eIEOOqom/U0lgQRXUl8LtXM7HFkojUIpF0ErVBhcZC1vtyjtpsqr83a8RVcSH+ool8LgcIMjNohmVCACuDs506BdO6WIQeXjUsh1XKZGRNpp9piv3+Givoh00OU6KEV81HUHTLtN093Q+YGlE3wLHWRtMNy9XWqdLm2HKbaNsGzhu+41eswFOjE6WKSk2/1Wpt+qHeM6phbohmVmj3GvpdcVkiy9zbXfzHVqKuDB0IR2P6ZpF+D7dy6YC/9svGmBE5hKB9+X2+hh4iYRMkhGyTqyFc9APmeGQHf043tWQKHkizmwaY5AroTNVJzJDc2SFzUu92kOLsdmKu77vByb8/IjtxmhkMFISRBFISO4XMLJlj4XgGuRXtaHw2FLyHifdSOpisIhJjgkiPBAyJh7lfXTkhEadwk1mUngrOC6MazX7mASeEAPV1FyjEumBOaEDu4DP/ogRDKkiLEV1woVyMeLLKJCEM+FwdCwL4XLcRgdbfkhbzS8BNvXDKzNQiAWgOzagTXF1Eyq+Ci6/TPm/JrNY/59p1epKN4jQFGe0fx+LTMwNVCrAU2VSqnaKYzIiGmWe2Rvp9KDJhncrjLaFce8VCUbyQ1kB9lNfkJ+To6R58mfyd/Ip9ABXohDHqqwEW7A2Mij1ehntLu+h8xMtocjUJcYwoLdtYafv/1Vjy8vjLaLtBfOt3/B931Rexa24e5zstgnyqvZHs69zuhq3vFgRpQVJyN7FuE++RLSeW4xMi+t6Zeo5sIK6S5dlGVRD2hWnGoB3j7OV3lesvNLic8tOnLRSRfRdOna63VJp/1WbYs5dFZjy1AqpGICQEWKmNI+CZNoVTJ7pNop+IZkRrBHgnEmqr3TrEsfw1Gi8LqE+S1aV0SNNwXVVVvuUoU3ld6TLwmditIpvKTU50zSzWwO1h0rL8awnulwTXMYrGDT4aQ1fb4GPkyv5vMEh5Vec6yw0AMXnfcx1l/rfVZaKLDi0W4j/HfeyGZuHOf1IUGW1udizU2leXY0OmLpVDpVKJfKpZzPRKHgEBzpXAUKWYipoIeBdl3JfLZVBizEqWun1i4ZGFiyduq3DebayXsmJ+95gBG4+Urm1a2SdpKV57lP2wZyZqI+FAlfUtO+NCmgdWhMOS1gDY+jHWnBhwjBQLMEXxmLbx6t9JXTWDLtsSxgisfErqvQMbbBoywZmeyLeWe8OWNydFDxzMx4lMGRtX0xN3YFJkeW+O0bascGNwwObtjCCOzrzAVWjSwN2K9cpyn9o5cZOXMmkAuM85EbNHnJyHhfLLCnPhxJYw9eoIMkyC3l+4ZuY5ig7lW2oYUynDgg+Xrk+++Xe3zSgRYetnyuy+KbfjiB+GAAtZ8HHXmtijZfFFgrujhmOs2qkXvuSV6WqA1WLYqhPHOfsa26rklKFqbAGL2dOIlGurB6LWFVFd/KoBBaYTFYVBs93hZRFlrG5Ex4NVFIJguJVvqnBW2kNNvFGx90YUcSEvyZSMDeZjc0xYlEYy8+hHcWx9YrZOaPPyCGepP5Q34aXnGBr8d1QhSf4yjtiebZqNJfEYl4SY6dDRb8WSguLZW9ZQtBpoW4hX0QMyB2KmsYcOh8HMQxBn288oZ6BXV0GOq/ClKsC6T8g9X3OFKZNkJrYkOx2lEk+KNDy953+wGHXuGGzhGZ+uLK8FVrQkbtKBv+9EztU2sgTCNpvXMdJjqJ4tkdw+x00dPKkZ1QR254x7GQoFmvfakSnL3gCc5nREly2mN2pyTLMacMipNT7YInGU7JzlN2p9N+yinXTirOKEvPUafSWMNDmCf9pIQYaG19DSxKGqvAQ+xg60iabEm5MheUU2n+HxO4TDDbjnw6xxK8QzfhbHXq8pWVqanKysun9s6ztdt7sivGqruqYyuyPS6Hw9XehGt6q+l0dT0jvaFMZjiTuTHo7+vdtHJTb58/2ML+IxHt9/n9vv5owiWKrrbWD+sakKxhKoYzxF5f7y9INxki42QNuYrVFDPfvqxyY83xWNMV+ZxPSMWb62W+wPSCJwkDDl1WZOGW84nAEo4A7HjB/uWmOdayRFnKjazi668u/ajJlUd87aPk048Crlu4j1Oh9gxdL3Z1inNPIt2xvKNlsU4hn54Z5Y6YbTDu9hHOvkcFAb35fU6hNovKOrtQmcvbNV9/Ntfv5xf4atDWOOTX6CSHZ08xujhPs51+f9zvf1YLIGoPPKvxVh0TSLAXzzUBFiXs7GJVB7vH5/PAXznd4+vx4a95h3qI/oYIpIdMkA1kC7kVLS3GhWI5bwj1fIaVKG/Ei5gXWOjhtcJbzFthaMQrwIcIRj0ppvO6yV95icu9j/YPDNySWp7w+kOr95R1RfGpfVlDVhS/2geJ5Umv2mn0rkxBvzvgdisndJXaVF1X5z5jdHGe2n/QnYo8+b2uaMivhowgjYcLnVqnrEpQezsieyVZ6ooETbdJO6ip+cORLpes6BL82/qg8VHbo45B/vch/YQeJX28QvEANR3sQhxh+TcMCEd4l8BKF7uID7KM05tRYlIHHXY63YIi2fXQyj5XSBbcMeewKLpttkJ2Syz33YJfDdJdSYkqHbYb3VHRJgTV8c0TAy67YHeK7htwOKWax5co7Do8Pfh1tKdx1g5j9o6TZeQyMo27FuW3vbYsbY/Op3AG06DMKionRlpgHzCEeMmLU5opRrCyS670RzppZeW5p/iT3jL3lB4O63QS6dzzh8SAtOqwGJK3bv+lGJTWbr++471wsVKMRJCEK5H+cLg/Qp+IDsdqs7HhKD7hMXyyrD/Li8RjRqimHhI7HP2vSDZn9brplySb0L9dgpURSwmSiBFhilrwB8OA9gZ29NkRO/669parW9e7XZDxwvgRu+SE7zgl+xG5p/HtRqJ3cdwSZwsbwTA1WT3jEdyPN0sWxvDGy+xovIzHosnwc9LePf9tywun0fMkWaFYZbB4oovRq8VyKYUBkMVXqVhBHSylQ0wanvla3+rQ1XbR8ZzstYOo2Mf7vjk8ftcGDWxdSdXx0cAVveHg1TZFtEOn8ntBBFs11V++vuLUQ5qz+U6d/oUjpGIdNjOQhJXNqn5YCS1Yy5PofLGEs6Js2yOKe2yyOLxtaGjbt7cNIURCEDdWfaQ6lurtRYbePCuItv1iUNxvE4Vdw2zQ0LZhdv2fxjHp5uAmdlBpopHXoJGU8e6BRc0yi+PztkaHTRRrW1m2hcfFLlEUzzD+DGczjEVCg9jEQZhFcdAL2DjD+DPiSWQzjM2I89g5RXdxfECS+CIWy1hTGmFs6EIbkv/pbtkfU3aPrZ+4c2Lizn07qufym/L5TTdtyuU2/We3HPeDsjtb3bGPSSfW31aX3LQpX/d9sL7fWYpRJPBbCJavYjrFjj0rT2GWCZjf6Ytffr8beXl/HYeyGwJiIK8FLDHbfo65xGz7YCSRqCQSkbbHI5eUU5X4sjj+zrU9aHnRlEnrd7YGptd0x2Jf/RbH9PAiovadckSnEsJ661OgPFuH9B4O6e202vIN0h9xHXSJh1wRP5Vqv1uI6Wn9Gxmrwzqrii1gqhEscJanuAlGas+s2/uzvetgS72NpHZ6aHbZstmh/wPq1seEeJxjYGRgYADi31ySEvH8Nl8ZuJlfAEUYalQ3NCLo/6+ZpzLdAnI5GJhAogAiBgraeJxjYGRgYA76nwUkXzAAAfNUBkYGVKALAFb4A3EAAAB4nGNgYGBgfjG0MAAMzihlAAAAAABOAJoA6AEKASwBTgFwAZoBxAHuAhoCnALoBJoEvATWBPIFDgUqBXoF0AX+BkQGlga4BwgHagfiCGoIpAi8CVAJmAoQCiwKVgqQCtYLGAtOC4gL6AwuDFR4nGNgZGBg0GVMYRBlAAEmIOYCQgaG/2A+AwAYygG+AHicbZE9TsMwGIbf9A/RSggEYmHxAgtq+jN2ZGj3Dt3T1GlTOXHkuBW9AyfgEByCgTNwCA7BW/NJlVBtyd/jx+8XKwmAa3whwnFE6Ib1OBq44O6Pm6Qb4Rb5QbiNHh6FO/RD4S6eMRHu4RaaT4halzR3eBVu4Apvwk36d+EW+UO4jXt8Cnfov4W7WOBHuIen6MXsCtvPU1vWc73emcSdxIkW2tW5LdUoHp7kTJfaJV6v1PKg6v167H2mMmcLNbWl18ZYVTm71amPN95Xk8EgEx+ntoDBDgUs+siRspaoMef7rukNEriziXNuwS7Hmoe9wggxv+e55IzJMqQTeNYV00scuNbY8+YxrUfGfcaMZb/CNPQe04bT0lThbEuT0sfYhK6K/23Amf3Lx+H24hcj4GScAAAAeJxtjuduwzAMhH2NnTqOk+6993TfSZFY24giGZTVon36eiRFf5SAiO/A05HBWtBXEvxfGdYwQIgIQ6wjxggJxkgxwRQb2MQWtrGDXexhHwc4xBGOcYJTnOEcF7jEFa5xg1vc4R4PeMQTnvGCV2R4C1Khy9xkkkxNnPRC03s97pHLvKgTYXJNmbKfZom9o8POEffsq0Qw28+ltcPe2uHS2rGvRjPBmSwE1+GMtI6l0GSU4JEsSM4XgudpQx9sTRf3K9rAyUr0962UryKprZwPpM0jyda5uP2qrVBjxSLPCmGUplixrdpBSKqsI2oO4gF9Udq8TJVOzDSpcEHGR4vSeJdaVsSkMl26OqoKa6jttQ0rLb6a5l3YjO2QqV01YXLlNy2XDR0JlkXojbJTb/5GDX3V+kPviIPgB9AUks0AAAA=)
      format('woff');
    font-weight: normal;
    font-style: normal;
  }

  html {
    --lumo-icons-align-center: '\\ea01';
    --lumo-icons-align-left: '\\ea02';
    --lumo-icons-align-right: '\\ea03';
    --lumo-icons-angle-down: '\\ea04';
    --lumo-icons-angle-left: '\\ea05';
    --lumo-icons-angle-right: '\\ea06';
    --lumo-icons-angle-up: '\\ea07';
    --lumo-icons-arrow-down: '\\ea08';
    --lumo-icons-arrow-left: '\\ea09';
    --lumo-icons-arrow-right: '\\ea0a';
    --lumo-icons-arrow-up: '\\ea0b';
    --lumo-icons-bar-chart: '\\ea0c';
    --lumo-icons-bell: '\\ea0d';
    --lumo-icons-calendar: '\\ea0e';
    --lumo-icons-checkmark: '\\ea0f';
    --lumo-icons-chevron-down: '\\ea10';
    --lumo-icons-chevron-left: '\\ea11';
    --lumo-icons-chevron-right: '\\ea12';
    --lumo-icons-chevron-up: '\\ea13';
    --lumo-icons-clock: '\\ea14';
    --lumo-icons-cog: '\\ea15';
    --lumo-icons-cross: '\\ea16';
    --lumo-icons-download: '\\ea17';
    --lumo-icons-drag-handle: '\\ea18';
    --lumo-icons-dropdown: '\\ea19';
    --lumo-icons-edit: '\\ea1a';
    --lumo-icons-error: '\\ea1b';
    --lumo-icons-eye: '\\ea1c';
    --lumo-icons-eye-disabled: '\\ea1d';
    --lumo-icons-menu: '\\ea1e';
    --lumo-icons-minus: '\\ea1f';
    --lumo-icons-ordered-list: '\\ea20';
    --lumo-icons-phone: '\\ea21';
    --lumo-icons-photo: '\\ea22';
    --lumo-icons-play: '\\ea23';
    --lumo-icons-plus: '\\ea24';
    --lumo-icons-redo: '\\ea25';
    --lumo-icons-reload: '\\ea26';
    --lumo-icons-resize-handle: '\\ea27';
    --lumo-icons-search: '\\ea28';
    --lumo-icons-undo: '\\ea29';
    --lumo-icons-unordered-list: '\\ea2a';
    --lumo-icons-upload: '\\ea2b';
    --lumo-icons-user: '\\ea2c';
  }
`;me("font-icons",lr);const dr=P`
  :host {
    --lumo-size-xs: 1.625rem;
    --lumo-size-s: 1.875rem;
    --lumo-size-m: 2.25rem;
    --lumo-size-l: 2.75rem;
    --lumo-size-xl: 3.5rem;

    /* Icons */
    --lumo-icon-size-s: 1.25em;
    --lumo-icon-size-m: 1.5em;
    --lumo-icon-size-l: 2.25em;
    /* For backwards compatibility */
    --lumo-icon-size: var(--lumo-icon-size-m);
  }
`;me("sizing-props",dr);const cr=P`
  :host {
    /* Square */
    --lumo-space-xs: 0.25rem;
    --lumo-space-s: 0.5rem;
    --lumo-space-m: 1rem;
    --lumo-space-l: 1.5rem;
    --lumo-space-xl: 2.5rem;

    /* Wide */
    --lumo-space-wide-xs: calc(var(--lumo-space-xs) / 2) var(--lumo-space-xs);
    --lumo-space-wide-s: calc(var(--lumo-space-s) / 2) var(--lumo-space-s);
    --lumo-space-wide-m: calc(var(--lumo-space-m) / 2) var(--lumo-space-m);
    --lumo-space-wide-l: calc(var(--lumo-space-l) / 2) var(--lumo-space-l);
    --lumo-space-wide-xl: calc(var(--lumo-space-xl) / 2) var(--lumo-space-xl);

    /* Tall */
    --lumo-space-tall-xs: var(--lumo-space-xs) calc(var(--lumo-space-xs) / 2);
    --lumo-space-tall-s: var(--lumo-space-s) calc(var(--lumo-space-s) / 2);
    --lumo-space-tall-m: var(--lumo-space-m) calc(var(--lumo-space-m) / 2);
    --lumo-space-tall-l: var(--lumo-space-l) calc(var(--lumo-space-l) / 2);
    --lumo-space-tall-xl: var(--lumo-space-xl) calc(var(--lumo-space-xl) / 2);
  }
`;me("spacing-props",cr);const hr=P`
  :host {
    /* Border radius */
    --lumo-border-radius-s: 0.25em; /* Checkbox, badge, date-picker year indicator, etc */
    --lumo-border-radius-m: var(--lumo-border-radius, 0.25em); /* Button, text field, menu overlay, etc */
    --lumo-border-radius-l: 0.5em; /* Dialog, notification, etc */

    /* Shadow */
    --lumo-box-shadow-xs: 0 1px 4px -1px var(--lumo-shade-50pct);
    --lumo-box-shadow-s: 0 2px 4px -1px var(--lumo-shade-20pct), 0 3px 12px -1px var(--lumo-shade-30pct);
    --lumo-box-shadow-m: 0 2px 6px -1px var(--lumo-shade-20pct), 0 8px 24px -4px var(--lumo-shade-40pct);
    --lumo-box-shadow-l: 0 3px 18px -2px var(--lumo-shade-20pct), 0 12px 48px -6px var(--lumo-shade-40pct);
    --lumo-box-shadow-xl: 0 4px 24px -3px var(--lumo-shade-20pct), 0 18px 64px -8px var(--lumo-shade-40pct);

    /* Clickable element cursor */
    --lumo-clickable-cursor: default;
  }
`;P`
  html {
    /* Button */
    --vaadin-button-background: var(--lumo-contrast-5pct);
    --vaadin-button-border: none;
    --vaadin-button-border-radius: var(--lumo-border-radius-m);
    --vaadin-button-font-size: var(--lumo-font-size-m);
    --vaadin-button-font-weight: 500;
    --vaadin-button-height: var(--lumo-size-m);
    --vaadin-button-margin: var(--lumo-space-xs) 0;
    --vaadin-button-min-width: calc(var(--vaadin-button-height) * 2);
    --vaadin-button-padding: 0 calc(var(--vaadin-button-height) / 3 + var(--lumo-border-radius-m) / 2);
    --vaadin-button-text-color: var(--lumo-primary-text-color);
    --vaadin-button-primary-background: var(--lumo-primary-color);
    --vaadin-button-primary-border: none;
    --vaadin-button-primary-font-weight: 600;
    --vaadin-button-primary-text-color: var(--lumo-primary-contrast-color);
    --vaadin-button-tertiary-background: transparent !important;
    --vaadin-button-tertiary-text-color: var(--lumo-primary-text-color);
    --vaadin-button-tertiary-font-weight: 500;
    --vaadin-button-tertiary-padding: 0 calc(var(--vaadin-button-height) / 6);
    /* Checkbox */
    --vaadin-checkbox-background: var(--lumo-contrast-20pct);
    --vaadin-checkbox-background-hover: var(--lumo-contrast-30pct);
    --vaadin-checkbox-border-radius: var(--lumo-border-radius-s);
    --vaadin-checkbox-checkmark-char: var(--lumo-icons-checkmark);
    --vaadin-checkbox-checkmark-char-indeterminate: '';
    --vaadin-checkbox-checkmark-color: var(--lumo-primary-contrast-color);
    --vaadin-checkbox-checkmark-size: calc(var(--vaadin-checkbox-size) + 2px);
    --vaadin-checkbox-label-color: var(--lumo-body-text-color);
    --vaadin-checkbox-label-font-size: var(--lumo-font-size-m);
    --vaadin-checkbox-label-padding: var(--lumo-space-xs) var(--lumo-space-s) var(--lumo-space-xs) var(--lumo-space-xs);
    --vaadin-checkbox-size: calc(var(--lumo-size-m) / 2);
    --vaadin-checkbox-disabled-checkmark-color: var(--lumo-contrast-30pct);
    --vaadin-checkbox-disabled-background: var(--lumo-contrast-10pct);
    /* Radio button */
    --vaadin-radio-button-background: var(--lumo-contrast-20pct);
    --vaadin-radio-button-background-hover: var(--lumo-contrast-30pct);
    --vaadin-radio-button-dot-color: var(--lumo-primary-contrast-color);
    --vaadin-radio-button-dot-size: 3px;
    --vaadin-radio-button-label-color: var(--lumo-body-text-color);
    --vaadin-radio-button-label-font-size: var(--lumo-font-size-m);
    --vaadin-radio-button-label-padding: var(--lumo-space-xs) var(--lumo-space-s) var(--lumo-space-xs)
      var(--lumo-space-xs);
    --vaadin-radio-button-size: calc(var(--lumo-size-m) / 2);
    --vaadin-radio-button-disabled-background: var(--lumo-contrast-10pct);
    --vaadin-radio-button-disabled-dot-color: var(--lumo-contrast-30pct);
    --vaadin-selection-color: var(--lumo-primary-color);
    --vaadin-selection-color-text: var(--lumo-primary-text-color);
    --vaadin-input-field-border-radius: var(--lumo-border-radius-m);
    --vaadin-focus-ring-color: var(--lumo-primary-color-50pct);
    --vaadin-focus-ring-width: 2px;
    /* Label */
    --vaadin-input-field-label-color: var(--lumo-secondary-text-color);
    --vaadin-input-field-focused-label-color: var(--lumo-primary-text-color);
    --vaadin-input-field-hovered-label-color: var(--lumo-body-text-color);
    --vaadin-input-field-label-font-size: var(--lumo-font-size-s);
    --vaadin-input-field-label-font-weight: 500;
    /* Helper */
    --vaadin-input-field-helper-color: var(--lumo-secondary-text-color);
    --vaadin-input-field-helper-font-size: var(--lumo-font-size-xs);
    --vaadin-input-field-helper-font-weight: 400;
    --vaadin-input-field-helper-spacing: 0.4em;
    /* Error message */
    --vaadin-input-field-error-color: var(--lumo-error-text-color);
    --vaadin-input-field-error-font-size: var(--lumo-font-size-xs);
    --vaadin-input-field-error-font-weight: 400;
    /* Input field */
    --vaadin-input-field-background: var(--lumo-contrast-10pct);
    --vaadin-input-field-icon-color: var(--lumo-contrast-60pct);
    --vaadin-input-field-icon-size: var(--lumo-icon-size-m);
    --vaadin-input-field-invalid-background: var(--lumo-error-color-10pct);
    --vaadin-input-field-invalid-hover-highlight: var(--lumo-error-color-50pct);
    --vaadin-input-field-disabled-background: var(--lumo-contrast-5pct);
    --vaadin-input-field-disabled-value-color: var(--lumo-disabled-text-color);
    --vaadin-input-field-height: var(--lumo-size-m);
    --vaadin-input-field-hover-highlight: var(--lumo-contrast-50pct);
    --vaadin-input-field-placeholder-color: var(--lumo-secondary-text-color);
    --vaadin-input-field-readonly-border: 1px dashed var(--lumo-contrast-30pct);
    --vaadin-input-field-value-color: var(--lumo-body-text-color);
    --vaadin-input-field-value-font-size: var(--lumo-font-size-m);
    --vaadin-input-field-value-font-weight: 500;
  }
`;me("style-props",hr);const ur=P`
  :host {
    /* prettier-ignore */
    --lumo-font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';

    /* Font sizes */
    --lumo-font-size-xxs: 0.75rem;
    --lumo-font-size-xs: 0.8125rem;
    --lumo-font-size-s: 0.875rem;
    --lumo-font-size-m: 1rem;
    --lumo-font-size-l: 1.125rem;
    --lumo-font-size-xl: 1.375rem;
    --lumo-font-size-xxl: 1.75rem;
    --lumo-font-size-xxxl: 2.5rem;

    /* Line heights */
    --lumo-line-height-xs: 1.25;
    --lumo-line-height-s: 1.375;
    --lumo-line-height-m: 1.625;
  }
`,pr=P`
  body,
  :host {
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    line-height: var(--lumo-line-height-m);
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  small,
  [theme~='font-size-s'] {
    font-size: var(--lumo-font-size-s);
    line-height: var(--lumo-line-height-s);
  }

  [theme~='font-size-xs'] {
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
  }

  :where(h1, h2, h3, h4, h5, h6) {
    font-weight: 600;
    line-height: var(--lumo-line-height-xs);
    margin-block: 0;
  }

  :where(h1) {
    font-size: var(--lumo-font-size-xxxl);
  }

  :where(h2) {
    font-size: var(--lumo-font-size-xxl);
  }

  :where(h3) {
    font-size: var(--lumo-font-size-xl);
  }

  :where(h4) {
    font-size: var(--lumo-font-size-l);
  }

  :where(h5) {
    font-size: var(--lumo-font-size-m);
  }

  :where(h6) {
    font-size: var(--lumo-font-size-xs);
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  p,
  blockquote {
    margin-top: 0.5em;
    margin-bottom: 0.75em;
  }

  a {
    text-decoration: none;
  }

  a:where(:any-link):hover {
    text-decoration: underline;
  }

  hr {
    display: block;
    align-self: stretch;
    height: 1px;
    border: 0;
    padding: 0;
    margin: var(--lumo-space-s) calc(var(--lumo-border-radius-m) / 2);
    background-color: var(--lumo-contrast-10pct);
  }

  blockquote {
    border-left: 2px solid var(--lumo-contrast-30pct);
  }

  b,
  strong {
    font-weight: 600;
  }

  /* RTL specific styles */
  blockquote[dir='rtl'] {
    border-left: none;
    border-right: 2px solid var(--lumo-contrast-30pct);
  }
`;Je("",pr,{moduleId:"lumo-typography"});me("typography-props",ur);Je("vaadin-grid",P`
    :host {
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-m);
      line-height: var(--lumo-line-height-s);
      color: var(--lumo-body-text-color);
      background-color: var(--lumo-base-color);
      box-sizing: border-box;
      -webkit-text-size-adjust: 100%;
      -webkit-tap-highlight-color: transparent;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      --_focus-ring-color: var(--vaadin-focus-ring-color, var(--lumo-primary-color-50pct));
      --_focus-ring-width: var(--vaadin-focus-ring-width, 2px);
      /* For internal use only */
      --_lumo-grid-border-color: var(--lumo-contrast-20pct);
      --_lumo-grid-secondary-border-color: var(--lumo-contrast-10pct);
      --_lumo-grid-border-width: 1px;
      --_lumo-grid-selected-row-color: var(--lumo-primary-color-10pct);
    }

    /* No (outer) border */

    :host(:not([theme~='no-border'])) {
      border: var(--_lumo-grid-border-width) solid var(--_lumo-grid-border-color);
    }

    :host([disabled]) {
      opacity: 0.7;
    }

    /* Cell styles */

    [part~='cell'] {
      min-height: var(--lumo-size-m);
      background-color: var(--vaadin-grid-cell-background, var(--lumo-base-color));
      cursor: default;
      --_cell-padding: var(--vaadin-grid-cell-padding, var(--_cell-default-padding));
      --_cell-default-padding: var(--lumo-space-xs) var(--lumo-space-m);
    }

    [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      cursor: inherit;
      padding: var(--_cell-padding);
    }

    /* Apply row borders by default and introduce the "no-row-borders" variant */
    :host(:not([theme~='no-row-borders'])) [part~='cell']:not([part~='details-cell']) {
      border-top: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    /* Hide first body row top border */
    :host(:not([theme~='no-row-borders'])) [part~='first-row'] [part~='cell']:not([part~='details-cell']) {
      border-top: 0;
      min-height: calc(var(--lumo-size-m) - var(--_lumo-grid-border-width));
    }

    /* Focus-ring */

    [part~='row'] {
      position: relative;
    }

    [part~='row']:focus,
    [part~='focused-cell']:focus {
      outline: none;
    }

    :host([navigating]) [part~='row']:focus::before,
    :host([navigating]) [part~='focused-cell']:focus::before {
      content: '';
      position: absolute;
      inset: 0;
      pointer-events: none;
      box-shadow: inset 0 0 0 var(--_focus-ring-width) var(--_focus-ring-color);
    }

    :host([navigating]) [part~='row']:focus::before {
      transform: translateX(calc(-1 * var(--_grid-horizontal-scroll-position)));
      z-index: 3;
    }

    /* Empty state */
    [part~='empty-state'] {
      padding: var(--lumo-space-m);
      color: var(--lumo-secondary-text-color);
    }

    /* Drag and Drop styles */
    :host([dragover])::after {
      content: '';
      position: absolute;
      z-index: 100;
      inset: 0;
      pointer-events: none;
      box-shadow: inset 0 0 0 var(--_focus-ring-width) var(--_focus-ring-color);
    }

    [part~='row'][dragover] {
      z-index: 100 !important;
    }

    [part~='row'][dragover] [part~='cell'] {
      overflow: visible;
    }

    [part~='row'][dragover] [part~='cell']::after {
      content: '';
      position: absolute;
      inset: 0;
      height: calc(var(--_lumo-grid-border-width) + 2px);
      pointer-events: none;
      background: var(--lumo-primary-color-50pct);
    }

    [part~='row'][dragover] [part~='cell'][last-frozen]::after {
      right: -1px;
    }

    :host([theme~='no-row-borders']) [dragover] [part~='cell']::after {
      height: 2px;
    }

    [part~='row'][dragover='below'] [part~='cell']::after {
      top: 100%;
      bottom: auto;
      margin-top: -1px;
    }

    :host([all-rows-visible]) [part~='last-row'][dragover='below'] [part~='cell']::after {
      height: 1px;
    }

    [part~='row'][dragover='above'] [part~='cell']::after {
      top: auto;
      bottom: 100%;
      margin-bottom: -1px;
    }

    [part~='row'][details-opened][dragover='below'] [part~='cell']:not([part~='details-cell'])::after,
    [part~='row'][details-opened][dragover='above'] [part~='details-cell']::after {
      display: none;
    }

    [part~='row'][dragover][dragover='on-top'] [part~='cell']::after {
      height: 100%;
      opacity: 0.5;
    }

    [part~='row'][dragstart] [part~='cell'] {
      border: none !important;
      box-shadow: none !important;
    }

    [part~='row'][dragstart] [part~='cell'][last-column] {
      border-radius: 0 var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0;
    }

    [part~='row'][dragstart] [part~='cell'][first-column] {
      border-radius: var(--lumo-border-radius-s) 0 0 var(--lumo-border-radius-s);
    }

    #scroller [part~='row'][dragstart]:not([dragstart=''])::after {
      display: block;
      position: absolute;
      left: var(--_grid-drag-start-x);
      top: var(--_grid-drag-start-y);
      z-index: 100;
      content: attr(dragstart);
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      padding: calc(var(--lumo-space-xs) * 0.8);
      color: var(--lumo-error-contrast-color);
      background-color: var(--lumo-error-color);
      border-radius: var(--lumo-border-radius-m);
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-xxs);
      line-height: 1;
      font-weight: 500;
      text-transform: initial;
      letter-spacing: initial;
      min-width: calc(var(--lumo-size-s) * 0.7);
      text-align: center;
    }

    /* Headers and footers */

    [part~='header-cell'],
    [part~='footer-cell'],
    [part~='reorder-ghost'] {
      font-size: var(--lumo-font-size-s);
      font-weight: 500;
    }

    [part~='footer-cell'] {
      font-weight: 400;
    }

    [part~='row']:only-child [part~='header-cell'] {
      min-height: var(--lumo-size-xl);
    }

    /* Header borders */

    /* Hide first header row top border */
    :host(:not([theme~='no-row-borders'])) [part~='row']:first-child [part~='header-cell'] {
      border-top: 0;
    }

    /* Hide header row top border if previous row is hidden */
    [part~='row'][hidden] + [part~='row'] [part~='header-cell'] {
      border-top: 0;
    }

    [part~='row']:last-child [part~='header-cell'] {
      border-bottom: var(--_lumo-grid-border-width) solid transparent;
    }

    :host(:not([theme~='no-row-borders'])) [part~='row']:last-child [part~='header-cell'] {
      border-bottom-color: var(--_lumo-grid-secondary-border-color);
    }

    /* Overflow uses a stronger border color */
    :host([overflow~='top']) [part~='row']:last-child [part~='header-cell'] {
      border-bottom-color: var(--_lumo-grid-border-color);
    }

    /* Footer borders */

    [part~='row']:first-child [part~='footer-cell'] {
      border-top: var(--_lumo-grid-border-width) solid transparent;
    }

    :host(:not([theme~='no-row-borders'])) [part~='row']:first-child [part~='footer-cell'] {
      border-top-color: var(--_lumo-grid-secondary-border-color);
    }

    /* Overflow uses a stronger border color */
    :host([overflow~='bottom']) [part~='row']:first-child [part~='footer-cell'] {
      border-top-color: var(--_lumo-grid-border-color);
    }

    /* Column reordering */

    :host([reordering]) [part~='cell'] {
      background: linear-gradient(var(--lumo-shade-20pct), var(--lumo-shade-20pct)) var(--lumo-base-color);
    }

    :host([reordering]) [part~='cell'][reorder-status='allowed'] {
      background: var(--lumo-base-color);
    }

    :host([reordering]) [part~='cell'][reorder-status='dragging'] {
      background: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct)) var(--lumo-base-color);
    }

    [part~='reorder-ghost'] {
      opacity: 0.85;
      box-shadow: var(--lumo-box-shadow-s);
      /* TODO Use the same styles as for the cell element (reorder-ghost copies styles from the cell element) */
      padding: var(--lumo-space-s) var(--lumo-space-m) !important;
    }

    /* Column resizing */

    [part='resize-handle'] {
      --_resize-handle-width: 3px;
      width: var(--_resize-handle-width);
      background-color: var(--lumo-primary-color-50pct);
      opacity: 0;
      transition: opacity 0.2s;
    }

    [part='resize-handle']::before {
      transform: translateX(calc(-50% + var(--_resize-handle-width) / 2));
      width: var(--lumo-size-s);
    }

    :host(:not([reordering])) *:not([column-resizing]) [part~='cell']:hover [part='resize-handle'],
    [part='resize-handle']:active {
      opacity: 1;
      transition-delay: 0.15s;
    }

    /* Column borders */

    :host([theme~='column-borders']) [part~='cell']:not([last-column]):not([part~='details-cell']) {
      border-right: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    /* Frozen columns */

    [last-frozen] {
      border-right: var(--_lumo-grid-border-width) solid transparent;
      overflow: hidden;
    }

    :host([overflow~='start']) [part~='cell'][last-frozen]:not([part~='details-cell']) {
      border-right-color: var(--_lumo-grid-border-color);
    }

    [first-frozen-to-end] {
      border-left: var(--_lumo-grid-border-width) solid transparent;
    }

    :host([overflow~='end']) [part~='cell'][first-frozen-to-end]:not([part~='details-cell']) {
      border-left-color: var(--_lumo-grid-border-color);
    }

    /* Row stripes */

    :host([theme~='row-stripes']) [part~='even-row'] [part~='body-cell'],
    :host([theme~='row-stripes']) [part~='even-row'] [part~='details-cell'] {
      background-image: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
      background-repeat: repeat-x;
    }

    /* Selected row */

    /* Raise the selected rows above unselected rows (so that box-shadow can cover unselected rows) */
    :host(:not([reordering])) [part~='row'][selected] {
      z-index: 1;
    }

    :host(:not([reordering])) [part~='row'][selected] [part~='body-cell']:not([part~='details-cell']) {
      background-image: linear-gradient(var(--_lumo-grid-selected-row-color), var(--_lumo-grid-selected-row-color));
      background-repeat: repeat;
    }

    /* Cover the border of an unselected row */
    :host(:not([theme~='no-row-borders'])) [part~='row'][selected] [part~='cell']:not([part~='details-cell']) {
      box-shadow: 0 var(--_lumo-grid-border-width) 0 0 var(--_lumo-grid-selected-row-color);
    }

    /* Compact */

    :host([theme~='compact']) [part~='row']:only-child [part~='header-cell'] {
      min-height: var(--lumo-size-m);
    }

    :host([theme~='compact']) [part~='cell'] {
      min-height: var(--lumo-size-s);
      --_cell-default-padding: var(--lumo-space-xs) var(--lumo-space-s);
    }

    :host([theme~='compact']) [part~='first-row'] [part~='cell']:not([part~='details-cell']) {
      min-height: calc(var(--lumo-size-s) - var(--_lumo-grid-border-width));
    }

    :host([theme~='compact']) [part~='empty-state'] {
      padding: var(--lumo-space-s);
    }

    /* Wrap cell contents */

    :host([theme~='wrap-cell-content']) [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      white-space: normal;
    }

    /* RTL specific styles */

    :host([dir='rtl']) [part~='row'][dragstart] [part~='cell'][last-column] {
      border-radius: var(--lumo-border-radius-s) 0 0 var(--lumo-border-radius-s);
    }

    :host([dir='rtl']) [part~='row'][dragstart] [part~='cell'][first-column] {
      border-radius: 0 var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0;
    }

    :host([dir='rtl'][theme~='column-borders']) [part~='cell']:not([last-column]):not([part~='details-cell']) {
      border-right: none;
      border-left: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    :host([dir='rtl']) [last-frozen] {
      border-right: none;
      border-left: var(--_lumo-grid-border-width) solid transparent;
    }

    :host([dir='rtl']) [first-frozen-to-end] {
      border-left: none;
      border-right: var(--_lumo-grid-border-width) solid transparent;
    }

    :host([dir='rtl'][overflow~='start']) [part~='cell'][last-frozen]:not([part~='details-cell']) {
      border-left-color: var(--_lumo-grid-border-color);
    }

    :host([dir='rtl'][overflow~='end']) [part~='cell'][first-frozen-to-end]:not([part~='details-cell']) {
      border-right-color: var(--_lumo-grid-border-color);
    }
  `,{moduleId:"lumo-grid"});window.JSCompiler_renameProperty=function(r,t){return r};let fr=/(url\()([^)]*)(\))/g,mr=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/,Oe,N;function Ee(r,t){if(r&&mr.test(r)||r==="//")return r;if(Oe===void 0){Oe=!1;try{const e=new URL("b","http://a");e.pathname="c%20d",Oe=e.href==="http://a/c%20d"}catch{}}if(t||(t=document.baseURI||window.location.href),Oe)try{return new URL(r,t).href}catch{return r}return N||(N=document.implementation.createHTMLDocument("temp"),N.base=N.createElement("base"),N.head.appendChild(N.base),N.anchor=N.createElement("a"),N.body.appendChild(N.anchor)),N.base.href=t,N.anchor.href=r,N.anchor.href||r}function Ot(r,t){return r.replace(fr,function(e,i,s,o){return i+"'"+Ee(s.replace(/["']/g,""),t)+"'"+o})}function Ft(r){return r.substring(0,r.lastIndexOf("/")+1)}const gr=!window.ShadyDOM||!window.ShadyDOM.inUse;!window.ShadyCSS||window.ShadyCSS.nativeCss;const _r=gr&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const r=new CSSStyleSheet;r.replaceSync("");const t=document.createElement("div");return t.attachShadow({mode:"open"}),t.shadowRoot.adoptedStyleSheets=[r],t.shadowRoot.adoptedStyleSheets[0]===r}catch{return!1}})();let br=window.Polymer&&window.Polymer.rootPath||Ft(document.baseURI||window.location.href),Ue=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0;window.Polymer&&window.Polymer.setPassiveTouchGestures;let ft=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,yr=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,vr=window.Polymer&&window.Polymer.legacyOptimizations||!1,Cr=window.Polymer&&window.Polymer.legacyWarnings||!1,wr=window.Polymer&&window.Polymer.syncInitialRender||!1,mt=window.Polymer&&window.Polymer.legacyUndefined||!1,xr=window.Polymer&&window.Polymer.orderedComputed||!1,qt=window.Polymer&&window.Polymer.removeNestedTemplates||!1,Sr=window.Polymer&&window.Polymer.fastDomIf||!1;window.Polymer&&window.Polymer.suppressTemplateNotifications;window.Polymer&&window.Polymer.legacyNoObservedAttributes;let Ar=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1;let Er=0;const ge=function(r){let t=r.__mixinApplications;t||(t=new WeakMap,r.__mixinApplications=t);let e=Er++;function i(s){let o=s.__mixinSet;if(o&&o[e])return s;let a=t,n=a.get(s);if(!n){n=r(s),a.set(s,n);let l=Object.create(n.__mixinSet||o||null);l[e]=!0,n.__mixinSet=l}return n}return i};let Vt={},Li={};function Yt(r,t){Vt[r]=Li[r.toLowerCase()]=t}function Kt(r){return Vt[r]||Li[r.toLowerCase()]}function Tr(r){r.querySelector("style")&&console.warn("dom-module %s has style outside template",r.id)}class Te extends HTMLElement{static get observedAttributes(){return["id"]}static import(t,e){if(t){let i=Kt(t);return i&&e?i.querySelector(e):i}return null}attributeChangedCallback(t,e,i,s){e!==i&&this.register()}get assetpath(){if(!this.__assetpath){const t=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,e=Ee(this.getAttribute("assetpath")||"",t.baseURI);this.__assetpath=Ft(e)}return this.__assetpath}register(t){if(t=t||this.id,t){if(ft&&Kt(t)!==void 0)throw Yt(t,null),new Error(`strictTemplatePolicy: dom-module ${t} re-registered`);this.id=t,Yt(t,this),Tr(this)}}}Te.prototype.modules=Vt;customElements.define("dom-module",Te);const Pr="link[rel=import][type~=css]",Ir="include",Jt="shady-unscoped";function $i(r){return Te.import(r)}function Xt(r){let t=r.body?r.body:r;const e=Ot(t.textContent,r.baseURI),i=document.createElement("style");return i.textContent=e,i}function zr(r){const t=r.trim().split(/\s+/),e=[];for(let i=0;i<t.length;i++)e.push(...Rr(t[i]));return e}function Rr(r){const t=$i(r);if(!t)return console.warn("Could not find style data in module named",r),[];if(t._styles===void 0){const e=[];e.push(...Hi(t));const i=t.querySelector("template");i&&e.push(...Bi(i,t.assetpath)),t._styles=e}return t._styles}function Bi(r,t){if(!r._styles){const e=[],i=r.content.querySelectorAll("style");for(let s=0;s<i.length;s++){let o=i[s],a=o.getAttribute(Ir);a&&e.push(...zr(a).filter(function(n,l,d){return d.indexOf(n)===l})),t&&(o.textContent=Ot(o.textContent,t)),e.push(o)}r._styles=e}return r._styles}function Nr(r){let t=$i(r);return t?Hi(t):[]}function Hi(r){const t=[],e=r.querySelectorAll(Pr);for(let i=0;i<e.length;i++){let s=e[i];if(s.import){const o=s.import,a=s.hasAttribute(Jt);if(a&&!o._unscopedStyle){const n=Xt(o);n.setAttribute(Jt,""),o._unscopedStyle=n}else o._style||(o._style=Xt(o));t.push(a?o._unscopedStyle:o._style)}}return t}const ie=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?r=>ShadyDOM.patch(r):r=>r;function gt(r){return r.indexOf(".")>=0}function re(r){let t=r.indexOf(".");return t===-1?r:r.slice(0,t)}function kr(r,t){return r.indexOf(t+".")===0}function Ge(r,t){return t.indexOf(r+".")===0}function We(r,t,e){return t+e.slice(r.length)}function we(r){if(Array.isArray(r)){let t=[];for(let e=0;e<r.length;e++){let i=r[e].toString().split(".");for(let s=0;s<i.length;s++)t.push(i[s])}return t.join(".")}else return r}function Ui(r){return Array.isArray(r)?we(r).split("."):r.toString().split(".")}function z(r,t,e){let i=r,s=Ui(t);for(let o=0;o<s.length;o++){if(!i)return;let a=s[o];i=i[a]}return e&&(e.path=s.join(".")),i}function Zt(r,t,e){let i=r,s=Ui(t),o=s[s.length-1];if(s.length>1){for(let a=0;a<s.length-1;a++){let n=s[a];if(i=i[n],!i)return}i[o]=e}else i[t]=e;return s.join(".")}const je={},Or=/-[a-z]/g,Fr=/([A-Z])/g;function Gi(r){return je[r]||(je[r]=r.indexOf("-")<0?r:r.replace(Or,t=>t[1].toUpperCase()))}function Xe(r){return je[r]||(je[r]=r.replace(Fr,"-$1").toLowerCase())}let Vr=0,Wi=0,le=[],Mr=0,_t=!1,ji=document.createTextNode("");new window.MutationObserver(Dr).observe(ji,{characterData:!0});function Dr(){_t=!1;const r=le.length;for(let t=0;t<r;t++){let e=le[t];if(e)try{e()}catch(i){setTimeout(()=>{throw i})}}le.splice(0,r),Wi+=r}const Lr={run(r){return _t||(_t=!0,ji.textContent=Mr++),le.push(r),Vr++},cancel(r){const t=r-Wi;if(t>=0){if(!le[t])throw new Error("invalid async handle: "+r);le[t]=null}}};const $r=Lr,qi=ge(r=>{class t extends r{static createProperties(i){const s=this.prototype;for(let o in i)o in s||s._createPropertyAccessor(o)}static attributeNameForProperty(i){return i.toLowerCase()}static typeForProperty(i){}_createPropertyAccessor(i,s){this._addPropertyToAttributeMap(i),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[i]||(this.__dataHasAccessor[i]=!0,this._definePropertyAccessor(i,s))}_addPropertyToAttributeMap(i){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let s=this.__dataAttributes[i];return s||(s=this.constructor.attributeNameForProperty(i),this.__dataAttributes[s]=i),s}_definePropertyAccessor(i,s){Object.defineProperty(this,i,{get(){return this.__data[i]},set:s?function(){}:function(o){this._setPendingProperty(i,o,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let i in this.__dataHasAccessor)this.hasOwnProperty(i)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[i]=this[i],delete this[i])}_initializeInstanceProperties(i){Object.assign(this,i)}_setProperty(i,s){this._setPendingProperty(i,s)&&this._invalidateProperties()}_getProperty(i){return this.__data[i]}_setPendingProperty(i,s,o){let a=this.__data[i],n=this._shouldPropertyChange(i,s,a);return n&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(i in this.__dataOld)&&(this.__dataOld[i]=a),this.__data[i]=s,this.__dataPending[i]=s),n}_isPropertyPending(i){return!!(this.__dataPending&&this.__dataPending.hasOwnProperty(i))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,$r.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;const i=this.__data,s=this.__dataPending,o=this.__dataOld;this._shouldPropertiesChange(i,s,o)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(i,s,o)),this.__dataCounter--}_shouldPropertiesChange(i,s,o){return!!s}_propertiesChanged(i,s,o){}_shouldPropertyChange(i,s,o){return o!==s&&(o===o||s===s)}attributeChangedCallback(i,s,o,a){s!==o&&this._attributeToProperty(i,o),super.attributeChangedCallback&&super.attributeChangedCallback(i,s,o,a)}_attributeToProperty(i,s,o){if(!this.__serializing){const a=this.__dataAttributes,n=a&&a[i]||i;this[n]=this._deserializeValue(s,o||this.constructor.typeForProperty(n))}}_propertyToAttribute(i,s,o){this.__serializing=!0,o=arguments.length<3?this[i]:o,this._valueToNodeAttribute(this,o,s||this.constructor.attributeNameForProperty(i)),this.__serializing=!1}_valueToNodeAttribute(i,s,o){const a=this._serializeValue(s);(o==="class"||o==="name"||o==="slot")&&(i=ie(i)),a===void 0?i.removeAttribute(o):i.setAttribute(o,a===""&&window.trustedTypes?window.trustedTypes.emptyScript:a)}_serializeValue(i){return typeof i==="boolean"?i?"":void 0:i?.toString()}_deserializeValue(i,s){switch(s){case Boolean:return i!==null;case Number:return Number(i);default:return i}}}return t});const Yi={};let Fe=HTMLElement.prototype;for(;Fe;){let r=Object.getOwnPropertyNames(Fe);for(let t=0;t<r.length;t++)Yi[r[t]]=!0;Fe=Object.getPrototypeOf(Fe)}const Br=window.trustedTypes?r=>trustedTypes.isHTML(r)||trustedTypes.isScript(r)||trustedTypes.isScriptURL(r):()=>!1;function Hr(r,t){if(!Yi[t]){let e=r[t];e!==void 0&&(r.__data?r._setPendingProperty(t,e):(r.__dataProto?r.hasOwnProperty(JSCompiler_renameProperty("__dataProto",r))||(r.__dataProto=Object.create(r.__dataProto)):r.__dataProto={},r.__dataProto[t]=e))}}const Ur=ge(r=>{const t=qi(r);class e extends t{static createPropertiesForAttributes(){let s=this.observedAttributes;for(let o=0;o<s.length;o++)this.prototype._createPropertyAccessor(Gi(s[o]))}static attributeNameForProperty(s){return Xe(s)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(s){for(let o in s)this._setProperty(o,s[o])}_ensureAttribute(s,o){const a=this;a.hasAttribute(s)||this._valueToNodeAttribute(a,o,s)}_serializeValue(s){switch(typeof s){case"object":if(s instanceof Date)return s.toString();if(s){if(Br(s))return s;try{return JSON.stringify(s)}catch{return""}}default:return super._serializeValue(s)}}_deserializeValue(s,o){let a;switch(o){case Object:try{a=JSON.parse(s)}catch{a=s}break;case Array:try{a=JSON.parse(s)}catch{a=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${s}`)}break;case Date:a=isNaN(s)?String(s):Number(s),a=new Date(a);break;default:a=super._deserializeValue(s,o);break}return a}_definePropertyAccessor(s,o){Hr(this,s),super._definePropertyAccessor(s,o)}_hasAccessor(s){return this.__dataHasAccessor&&this.__dataHasAccessor[s]}_isPropertyPending(s){return!!(this.__dataPending&&s in this.__dataPending)}}return e});const Gr={"dom-if":!0,"dom-repeat":!0};let Qt=!1,ei=!1;function Wr(){if(!Qt){Qt=!0;const r=document.createElement("textarea");r.placeholder="a",ei=r.placeholder===r.textContent}return ei}function jr(r){Wr()&&r.localName==="textarea"&&r.placeholder&&r.placeholder===r.textContent&&(r.textContent=null)}const qr=(()=>{const r=window.trustedTypes&&window.trustedTypes.createPolicy("polymer-template-event-attribute-policy",{createScript:t=>t});return(t,e,i)=>{const s=e.getAttribute(i);if(r&&i.startsWith("on-")){t.setAttribute(i,r.createScript(s,i));return}t.setAttribute(i,s)}})();function Yr(r){let t=r.getAttribute("is");if(t&&Gr[t]){let e=r;for(e.removeAttribute("is"),r=e.ownerDocument.createElement(t),e.parentNode.replaceChild(r,e),r.appendChild(e);e.attributes.length;){const{name:i}=e.attributes[0];qr(r,e,i),e.removeAttribute(i)}}return r}function Ki(r,t){let e=t.parentInfo&&Ki(r,t.parentInfo);if(e){for(let i=e.firstChild,s=0;i;i=i.nextSibling)if(t.parentIndex===s++)return i}else return r}function Kr(r,t,e,i){i.id&&(t[i.id]=e)}function Jr(r,t,e){if(e.events&&e.events.length)for(let i=0,s=e.events,o;i<s.length&&(o=s[i]);i++)r._addMethodEventListenerToNode(t,o.name,o.value,r)}function Xr(r,t,e,i){e.templateInfo&&(t._templateInfo=e.templateInfo,t._parentTemplateInfo=i)}function Zr(r,t,e){return r=r._methodHost||r,function(s){r[e]?r[e](s,s.detail):console.warn("listener method `"+e+"` not defined")}}const Qr=ge(r=>{class t extends r{static _parseTemplate(i,s){if(!i._templateInfo){let o=i._templateInfo={};o.nodeInfoList=[],o.nestedTemplate=!!s,o.stripWhiteSpace=s&&s.stripWhiteSpace||i.hasAttribute&&i.hasAttribute("strip-whitespace"),this._parseTemplateContent(i,o,{parent:null})}return i._templateInfo}static _parseTemplateContent(i,s,o){return this._parseTemplateNode(i.content,s,o)}static _parseTemplateNode(i,s,o){let a=!1,n=i;return n.localName=="template"&&!n.hasAttribute("preserve-content")?a=this._parseTemplateNestedTemplate(n,s,o)||a:n.localName==="slot"&&(s.hasInsertionPoint=!0),jr(n),n.firstChild&&this._parseTemplateChildNodes(n,s,o),n.hasAttributes&&n.hasAttributes()&&(a=this._parseTemplateNodeAttributes(n,s,o)||a),a||o.noted}static _parseTemplateChildNodes(i,s,o){if(!(i.localName==="script"||i.localName==="style"))for(let a=i.firstChild,n=0,l;a;a=l){if(a.localName=="template"&&(a=Yr(a)),l=a.nextSibling,a.nodeType===Node.TEXT_NODE){let c=l;for(;c&&c.nodeType===Node.TEXT_NODE;)a.textContent+=c.textContent,l=c.nextSibling,i.removeChild(c),c=l;if(s.stripWhiteSpace&&!a.textContent.trim()){i.removeChild(a);continue}}let d={parentIndex:n,parentInfo:o};this._parseTemplateNode(a,s,d)&&(d.infoIndex=s.nodeInfoList.push(d)-1),a.parentNode&&n++}}static _parseTemplateNestedTemplate(i,s,o){let a=i,n=this._parseTemplate(a,s);return(n.content=a.content.ownerDocument.createDocumentFragment()).appendChild(a.content),o.templateInfo=n,!0}static _parseTemplateNodeAttributes(i,s,o){let a=!1,n=Array.from(i.attributes);for(let l=n.length-1,d;d=n[l];l--)a=this._parseTemplateNodeAttribute(i,s,o,d.name,d.value)||a;return a}static _parseTemplateNodeAttribute(i,s,o,a,n){return a.slice(0,3)==="on-"?(i.removeAttribute(a),o.events=o.events||[],o.events.push({name:a.slice(3),value:n}),!0):a==="id"?(o.id=n,!0):!1}static _contentForTemplate(i){let s=i._templateInfo;return s&&s.content||i.content}_stampTemplate(i,s){i&&!i.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(i),s=s||this.constructor._parseTemplate(i);let o=s.nodeInfoList,a=s.content||i.content,n=document.importNode(a,!0);n.__noInsertionPoint=!s.hasInsertionPoint;let l=n.nodeList=new Array(o.length);n.$={};for(let d=0,c=o.length,h;d<c&&(h=o[d]);d++){let u=l[d]=Ki(n,h);Kr(this,n.$,u,h),Xr(this,u,h,s),Jr(this,u,h)}return n=n,n}_addMethodEventListenerToNode(i,s,o,a){a=a||i;let n=Zr(a,s,o);return this._addEventListenerToNode(i,s,n),n}_addEventListenerToNode(i,s,o){i.addEventListener(s,o)}_removeEventListenerFromNode(i,s,o){i.removeEventListener(s,o)}}return t});let Pe=0;const Ie=[],y={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},Ji="__computeInfo",eo=/[A-Z]/;function it(r,t,e){let i=r[t];if(!i)i=r[t]={};else if(!r.hasOwnProperty(t)&&(i=r[t]=Object.create(r[t]),e))for(let s in i){let o=i[s],a=i[s]=Array(o.length);for(let n=0;n<o.length;n++)a[n]=o[n]}return i}function xe(r,t,e,i,s,o){if(t){let a=!1;const n=Pe++;for(let l in e){let d=s?re(l):l,c=t[d];if(c)for(let h=0,u=c.length,f;h<u&&(f=c[h]);h++)(!f.info||f.info.lastRun!==n)&&(!s||Mt(l,f.trigger))&&(f.info&&(f.info.lastRun=n),f.fn(r,l,e,i,f.info,s,o),a=!0)}return a}return!1}function to(r,t,e,i,s,o,a,n){let l=!1,d=a?re(i):i,c=t[d];if(c)for(let h=0,u=c.length,f;h<u&&(f=c[h]);h++)(!f.info||f.info.lastRun!==e)&&(!a||Mt(i,f.trigger))&&(f.info&&(f.info.lastRun=e),f.fn(r,i,s,o,f.info,a,n),l=!0);return l}function Mt(r,t){if(t){let e=t.name;return e==r||!!(t.structured&&kr(e,r))||!!(t.wildcard&&Ge(e,r))}else return!0}function ti(r,t,e,i,s){let o=typeof s.method=="string"?r[s.method]:s.method,a=s.property;o?o.call(r,r.__data[a],i[a]):s.dynamicFn||console.warn("observer method `"+s.method+"` not defined")}function io(r,t,e,i,s){let o=r[y.NOTIFY],a,n=Pe++;for(let d in t)t[d]&&(o&&to(r,o,n,d,e,i,s)||s&&so(r,d,e))&&(a=!0);let l;a&&(l=r.__dataHost)&&l._invalidateProperties&&l._invalidateProperties()}function so(r,t,e){let i=re(t);if(i!==t){let s=Xe(i)+"-changed";return Xi(r,s,e[t],t),!0}return!1}function Xi(r,t,e,i){let s={value:e,queueProperty:!0};i&&(s.path=i),ie(r).dispatchEvent(new CustomEvent(t,{detail:s}))}function ro(r,t,e,i,s,o){let n=(o?re(t):t)!=t?t:null,l=n?z(r,n):r.__data[t];n&&l===void 0&&(l=e[t]),Xi(r,s.eventName,l,n)}function oo(r,t,e,i,s){let o,a=r.detail,n=a&&a.path;n?(i=We(e,i,n),o=a&&a.value):o=r.currentTarget[e],o=s?!o:o,(!t[y.READ_ONLY]||!t[y.READ_ONLY][i])&&t._setPendingPropertyOrPath(i,o,!0,!!n)&&(!a||!a.queueProperty)&&t._invalidateProperties()}function ao(r,t,e,i,s){let o=r.__data[t];Ue&&(o=Ue(o,s.attrName,"attribute",r)),r._propertyToAttribute(t,s.attrName,o)}function no(r,t,e,i){let s=r[y.COMPUTE];if(s)if(xr){Pe++;const o=co(r),a=[];for(let l in t)ii(l,s,a,o,i);let n;for(;n=a.shift();)Zi(r,"",t,e,n)&&ii(n.methodInfo,s,a,o,i);Object.assign(e,r.__dataOld),Object.assign(t,r.__dataPending),r.__dataPending=null}else{let o=t;for(;xe(r,s,o,e,i);)Object.assign(e,r.__dataOld),Object.assign(t,r.__dataPending),o=r.__dataPending,r.__dataPending=null}}const lo=(r,t,e)=>{let i=0,s=t.length-1,o=-1;for(;i<=s;){const a=i+s>>1,n=e.get(t[a].methodInfo)-e.get(r.methodInfo);if(n<0)i=a+1;else if(n>0)s=a-1;else{o=a;break}}o<0&&(o=s+1),t.splice(o,0,r)},ii=(r,t,e,i,s)=>{const o=s?re(r):r,a=t[o];if(a)for(let n=0;n<a.length;n++){const l=a[n];l.info.lastRun!==Pe&&(!s||Mt(r,l.trigger))&&(l.info.lastRun=Pe,lo(l.info,e,i))}};function co(r){let t=r.constructor.__orderedComputedDeps;if(!t){t=new Map;const e=r[y.COMPUTE];let{counts:i,ready:s,total:o}=ho(r),a;for(;a=s.shift();){t.set(a,t.size);const n=e[a];n&&n.forEach(l=>{const d=l.info.methodInfo;--o,--i[d]===0&&s.push(d)})}o!==0&&console.warn(`Computed graph for ${r.localName} incomplete; circular?`),r.constructor.__orderedComputedDeps=t}return t}function ho(r){const t=r[Ji],e={},i=r[y.COMPUTE],s=[];let o=0;for(let a in t){const n=t[a];o+=e[a]=n.args.filter(l=>!l.literal).length+(n.dynamicFn?1:0)}for(let a in i)t[a]||s.push(a);return{counts:e,ready:s,total:o}}function Zi(r,t,e,i,s){let o=bt(r,t,e,i,s);if(o===Ie)return!1;let a=s.methodInfo;return r.__dataHasAccessor&&r.__dataHasAccessor[a]?r._setPendingProperty(a,o,!0):(r[a]=o,!1)}function uo(r,t,e){let i=r.__dataLinkedPaths;if(i){let s;for(let o in i){let a=i[o];Ge(o,t)?(s=We(o,a,t),r._setPendingPropertyOrPath(s,e,!0,!0)):Ge(a,t)&&(s=We(a,o,t),r._setPendingPropertyOrPath(s,e,!0,!0))}}}function st(r,t,e,i,s,o,a){e.bindings=e.bindings||[];let n={kind:i,target:s,parts:o,literal:a,isCompound:o.length!==1};if(e.bindings.push(n),_o(n)){let{event:d,negate:c}=n.parts[0];n.listenerEvent=d||Xe(s)+"-changed",n.listenerNegate=c}let l=t.nodeInfoList.length;for(let d=0;d<n.parts.length;d++){let c=n.parts[d];c.compoundIndex=d,po(r,t,n,c,l)}}function po(r,t,e,i,s){if(!i.literal)if(e.kind==="attribute"&&e.target[0]==="-")console.warn("Cannot set attribute "+e.target+' because "-" is not a valid attribute starting character');else{let o=i.dependencies,a={index:s,binding:e,part:i,evaluator:r};for(let n=0;n<o.length;n++){let l=o[n];typeof l=="string"&&(l=es(l),l.wildcard=!0),r._addTemplatePropertyEffect(t,l.rootProperty,{fn:fo,info:a,trigger:l})}}}function fo(r,t,e,i,s,o,a){let n=a[s.index],l=s.binding,d=s.part;if(o&&d.source&&t.length>d.source.length&&l.kind=="property"&&!l.isCompound&&n.__isPropertyEffectsClient&&n.__dataHasAccessor&&n.__dataHasAccessor[l.target]){let c=e[t];t=We(d.source,l.target,t),n._setPendingPropertyOrPath(t,c,!1,!0)&&r._enqueueClient(n)}else{let c=s.evaluator._evaluateBinding(r,d,t,e,i,o);c!==Ie&&mo(r,n,l,d,c)}}function mo(r,t,e,i,s){if(s=go(t,s,e,i),Ue&&(s=Ue(s,e.target,e.kind,t)),e.kind=="attribute")r._valueToNodeAttribute(t,s,e.target);else{let o=e.target;t.__isPropertyEffectsClient&&t.__dataHasAccessor&&t.__dataHasAccessor[o]?(!t[y.READ_ONLY]||!t[y.READ_ONLY][o])&&t._setPendingProperty(o,s)&&r._enqueueClient(t):r._setUnmanagedPropertyToNode(t,o,s)}}function go(r,t,e,i){if(e.isCompound){let s=r.__dataCompoundStorage[e.target];s[i.compoundIndex]=t,t=s.join("")}return e.kind!=="attribute"&&(e.target==="textContent"||e.target==="value"&&(r.localName==="input"||r.localName==="textarea"))&&(t=t??""),t}function _o(r){return!!r.target&&r.kind!="attribute"&&r.kind!="text"&&!r.isCompound&&r.parts[0].mode==="{"}function bo(r,t){let{nodeList:e,nodeInfoList:i}=t;if(i.length)for(let s=0;s<i.length;s++){let o=i[s],a=e[s],n=o.bindings;if(n)for(let l=0;l<n.length;l++){let d=n[l];yo(a,d),vo(a,r,d)}a.__dataHost=r}}function yo(r,t){if(t.isCompound){let e=r.__dataCompoundStorage||(r.__dataCompoundStorage={}),i=t.parts,s=new Array(i.length);for(let a=0;a<i.length;a++)s[a]=i[a].literal;let o=t.target;e[o]=s,t.literal&&t.kind=="property"&&(o==="className"&&(r=ie(r)),r[o]=t.literal)}}function vo(r,t,e){if(e.listenerEvent){let i=e.parts[0];r.addEventListener(e.listenerEvent,function(s){oo(s,t,e.target,i.source,i.negate)})}}function si(r,t,e,i,s,o){o=t.static||o&&(typeof o!="object"||o[t.methodName]);let a={methodName:t.methodName,args:t.args,methodInfo:s,dynamicFn:o};for(let n=0,l;n<t.args.length&&(l=t.args[n]);n++)l.literal||r._addPropertyEffect(l.rootProperty,e,{fn:i,info:a,trigger:l});return o&&r._addPropertyEffect(t.methodName,e,{fn:i,info:a}),a}function bt(r,t,e,i,s){let o=r._methodHost||r,a=o[s.methodName];if(a){let n=r._marshalArgs(s.args,t,e);return n===Ie?Ie:a.apply(o,n)}else s.dynamicFn||console.warn("method `"+s.methodName+"` not defined")}const Co=[],Qi="(?:[a-zA-Z_$][\\w.:$\\-*]*)",wo="(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)",xo="(?:'(?:[^'\\\\]|\\\\.)*')",So='(?:"(?:[^"\\\\]|\\\\.)*")',Ao="(?:"+xo+"|"+So+")",ri="(?:("+Qi+"|"+wo+"|"+Ao+")\\s*)",Eo="(?:"+ri+"(?:,\\s*"+ri+")*)",To="(?:\\(\\s*(?:"+Eo+"?)\\)\\s*)",Po="("+Qi+"\\s*"+To+"?)",Io="(\\[\\[|{{)\\s*",zo="(?:]]|}})",Ro="(?:(!)\\s*)?",No=Io+Ro+Po+zo,oi=new RegExp(No,"g");function ai(r){let t="";for(let e=0;e<r.length;e++){let i=r[e].literal;t+=i||""}return t}function rt(r){let t=r.match(/([^\s]+?)\(([\s\S]*)\)/);if(t){let i={methodName:t[1],static:!0,args:Co};if(t[2].trim()){let s=t[2].replace(/\\,/g,"&comma;").split(",");return ko(s,i)}else return i}return null}function ko(r,t){return t.args=r.map(function(e){let i=es(e);return i.literal||(t.static=!1),i},this),t}function es(r){let t=r.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),e={name:t,value:"",literal:!1},i=t[0];switch(i==="-"&&(i=t[1]),i>="0"&&i<="9"&&(i="#"),i){case"'":case'"':e.value=t.slice(1,-1),e.literal=!0;break;case"#":e.value=Number(t),e.literal=!0;break}return e.literal||(e.rootProperty=re(t),e.structured=gt(t),e.structured&&(e.wildcard=t.slice(-2)==".*",e.wildcard&&(e.name=t.slice(0,-2)))),e}function ni(r,t,e){let i=z(r,e);return i===void 0&&(i=t[e]),i}function ts(r,t,e,i){const s={indexSplices:i};mt&&!r._overrideLegacyUndefined&&(t.splices=s),r.notifyPath(e+".splices",s),r.notifyPath(e+".length",t.length),mt&&!r._overrideLegacyUndefined&&(s.indexSplices=[])}function be(r,t,e,i,s,o){ts(r,t,e,[{index:i,addedCount:s,removed:o,object:t,type:"splice"}])}function Oo(r){return r[0].toUpperCase()+r.substring(1)}const Fo=ge(r=>{const t=Qr(Ur(r));class e extends t{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return y}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(ye.length){let s=ye[ye.length-1];s._enqueueClient(this),this.__dataHost=s}}_initializeProtoProperties(s){this.__data=Object.create(s),this.__dataPending=Object.create(s),this.__dataOld={}}_initializeInstanceProperties(s){let o=this[y.READ_ONLY];for(let a in s)(!o||!o[a])&&(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[a]=this.__dataPending[a]=s[a])}_addPropertyEffect(s,o,a){this._createPropertyAccessor(s,o==y.READ_ONLY);let n=it(this,o,!0)[s];n||(n=this[o][s]=[]),n.push(a)}_removePropertyEffect(s,o,a){let n=it(this,o,!0)[s],l=n.indexOf(a);l>=0&&n.splice(l,1)}_hasPropertyEffect(s,o){let a=this[o];return!!(a&&a[s])}_hasReadOnlyEffect(s){return this._hasPropertyEffect(s,y.READ_ONLY)}_hasNotifyEffect(s){return this._hasPropertyEffect(s,y.NOTIFY)}_hasReflectEffect(s){return this._hasPropertyEffect(s,y.REFLECT)}_hasComputedEffect(s){return this._hasPropertyEffect(s,y.COMPUTE)}_setPendingPropertyOrPath(s,o,a,n){if(n||re(Array.isArray(s)?s[0]:s)!==s){if(!n){let l=z(this,s);if(s=Zt(this,s,o),!s||!super._shouldPropertyChange(s,o,l))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(s,o,a))return uo(this,s,o),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[s])return this._setPendingProperty(s,o,a);this[s]=o}return!1}_setUnmanagedPropertyToNode(s,o,a){(a!==s[o]||typeof a=="object")&&(o==="className"&&(s=ie(s)),s[o]=a)}_setPendingProperty(s,o,a){let n=this.__dataHasPaths&&gt(s),l=n?this.__dataTemp:this.__data;return this._shouldPropertyChange(s,o,l[s])?(this.__dataPending||(this.__dataPending={},this.__dataOld={}),s in this.__dataOld||(this.__dataOld[s]=this.__data[s]),n?this.__dataTemp[s]=o:this.__data[s]=o,this.__dataPending[s]=o,(n||this[y.NOTIFY]&&this[y.NOTIFY][s])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[s]=a),!0):!1}_setProperty(s,o){this._setPendingProperty(s,o,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(s){this.__dataPendingClients=this.__dataPendingClients||[],s!==this&&this.__dataPendingClients.push(s)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let s=this.__dataPendingClients;if(s){this.__dataPendingClients=null;for(let o=0;o<s.length;o++){let a=s[o];a.__dataEnabled?a.__dataPending&&a._flushProperties():a._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(s,o){for(let a in s)(o||!this[y.READ_ONLY]||!this[y.READ_ONLY][a])&&this._setPendingPropertyOrPath(a,s[a],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(s,o,a){let n=this.__dataHasPaths;this.__dataHasPaths=!1;let l;no(this,o,a,n),l=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(o,a,n),this._flushClients(),xe(this,this[y.REFLECT],o,a,n),xe(this,this[y.OBSERVE],o,a,n),l&&io(this,l,o,a,n),this.__dataCounter==1&&(this.__dataTemp={})}_propagatePropertyChanges(s,o,a){this[y.PROPAGATE]&&xe(this,this[y.PROPAGATE],s,o,a),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,s,o,a)}_runEffectsForTemplate(s,o,a,n){const l=(d,c)=>{xe(this,s.propertyEffects,d,a,c,s.nodeList);for(let h=s.firstChild;h;h=h.nextSibling)this._runEffectsForTemplate(h,d,a,c)};s.runEffects?s.runEffects(l,o,n):l(o,n)}linkPaths(s,o){s=we(s),o=we(o),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[s]=o}unlinkPaths(s){s=we(s),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[s]}notifySplices(s,o){let a={path:""},n=z(this,s,a);ts(this,n,a.path,o)}get(s,o){return z(o||this,s)}set(s,o,a){a?Zt(a,s,o):(!this[y.READ_ONLY]||!this[y.READ_ONLY][s])&&this._setPendingPropertyOrPath(s,o,!0)&&this._invalidateProperties()}push(s,...o){let a={path:""},n=z(this,s,a),l=n.length,d=n.push(...o);return o.length&&be(this,n,a.path,l,o.length,[]),d}pop(s){let o={path:""},a=z(this,s,o),n=!!a.length,l=a.pop();return n&&be(this,a,o.path,a.length,0,[l]),l}splice(s,o,a,...n){let l={path:""},d=z(this,s,l);o<0?o=d.length-Math.floor(-o):o&&(o=Math.floor(o));let c;return arguments.length===2?c=d.splice(o):c=d.splice(o,a,...n),(n.length||c.length)&&be(this,d,l.path,o,n.length,c),c}shift(s){let o={path:""},a=z(this,s,o),n=!!a.length,l=a.shift();return n&&be(this,a,o.path,0,0,[l]),l}unshift(s,...o){let a={path:""},n=z(this,s,a),l=n.unshift(...o);return o.length&&be(this,n,a.path,0,o.length,[]),l}notifyPath(s,o){let a;if(arguments.length==1){let n={path:""};o=z(this,s,n),a=n.path}else Array.isArray(s)?a=we(s):a=s;this._setPendingPropertyOrPath(a,o,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(s,o){this._addPropertyEffect(s,y.READ_ONLY),o&&(this["_set"+Oo(s)]=function(a){this._setProperty(s,a)})}_createPropertyObserver(s,o,a){let n={property:s,method:o,dynamicFn:!!a};this._addPropertyEffect(s,y.OBSERVE,{fn:ti,info:n,trigger:{name:s}}),a&&this._addPropertyEffect(o,y.OBSERVE,{fn:ti,info:n,trigger:{name:o}})}_createMethodObserver(s,o){let a=rt(s);if(!a)throw new Error("Malformed observer expression '"+s+"'");si(this,a,y.OBSERVE,bt,null,o)}_createNotifyingProperty(s){this._addPropertyEffect(s,y.NOTIFY,{fn:ro,info:{eventName:Xe(s)+"-changed",property:s}})}_createReflectedProperty(s){let o=this.constructor.attributeNameForProperty(s);o[0]==="-"?console.warn("Property "+s+" cannot be reflected to attribute "+o+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(s,y.REFLECT,{fn:ao,info:{attrName:o}})}_createComputedProperty(s,o,a){let n=rt(o);if(!n)throw new Error("Malformed computed expression '"+o+"'");const l=si(this,n,y.COMPUTE,Zi,s,a);it(this,Ji)[s]=l}_marshalArgs(s,o,a){const n=this.__data,l=[];for(let d=0,c=s.length;d<c;d++){let{name:h,structured:u,wildcard:f,value:b,literal:v}=s[d];if(!v)if(f){const x=Ge(h,o),S=ni(n,a,x?o:h);b={path:x?o:h,value:S,base:x?z(n,h):S}}else b=u?ni(n,a,h):n[h];if(mt&&!this._overrideLegacyUndefined&&b===void 0&&s.length>1)return Ie;l[d]=b}return l}static addPropertyEffect(s,o,a){this.prototype._addPropertyEffect(s,o,a)}static createPropertyObserver(s,o,a){this.prototype._createPropertyObserver(s,o,a)}static createMethodObserver(s,o){this.prototype._createMethodObserver(s,o)}static createNotifyingProperty(s){this.prototype._createNotifyingProperty(s)}static createReadOnlyProperty(s,o){this.prototype._createReadOnlyProperty(s,o)}static createReflectedProperty(s){this.prototype._createReflectedProperty(s)}static createComputedProperty(s,o,a){this.prototype._createComputedProperty(s,o,a)}static bindTemplate(s){return this.prototype._bindTemplate(s)}_bindTemplate(s,o){let a=this.constructor._parseTemplate(s),n=this.__preBoundTemplateInfo==a;if(!n)for(let l in a.propertyEffects)this._createPropertyAccessor(l);if(o)if(a=Object.create(a),a.wasPreBound=n,!this.__templateInfo)this.__templateInfo=a;else{const l=s._parentTemplateInfo||this.__templateInfo,d=l.lastChild;a.parent=l,l.lastChild=a,a.previousSibling=d,d?d.nextSibling=a:l.firstChild=a}else this.__preBoundTemplateInfo=a;return a}static _addTemplatePropertyEffect(s,o,a){let n=s.hostProps=s.hostProps||{};n[o]=!0;let l=s.propertyEffects=s.propertyEffects||{};(l[o]=l[o]||[]).push(a)}_stampTemplate(s,o){o=o||this._bindTemplate(s,!0),ye.push(this);let a=super._stampTemplate(s,o);if(ye.pop(),o.nodeList=a.nodeList,!o.wasPreBound){let n=o.childNodes=[];for(let l=a.firstChild;l;l=l.nextSibling)n.push(l)}return a.templateInfo=o,bo(this,o),this.__dataClientsReady&&(this._runEffectsForTemplate(o,this.__data,null,!1),this._flushClients()),a}_removeBoundDom(s){const o=s.templateInfo,{previousSibling:a,nextSibling:n,parent:l}=o;a?a.nextSibling=n:l&&(l.firstChild=n),n?n.previousSibling=a:l&&(l.lastChild=a),o.nextSibling=o.previousSibling=null;let d=o.childNodes;for(let c=0;c<d.length;c++){let h=d[c];ie(ie(h).parentNode).removeChild(h)}}static _parseTemplateNode(s,o,a){let n=t._parseTemplateNode.call(this,s,o,a);if(s.nodeType===Node.TEXT_NODE){let l=this._parseBindings(s.textContent,o);l&&(s.textContent=ai(l)||" ",st(this,o,a,"text","textContent",l),n=!0)}return n}static _parseTemplateNodeAttribute(s,o,a,n,l){let d=this._parseBindings(l,o);if(d){let c=n,h="property";eo.test(n)?h="attribute":n[n.length-1]=="$"&&(n=n.slice(0,-1),h="attribute");let u=ai(d);return u&&h=="attribute"&&(n=="class"&&s.hasAttribute("class")&&(u+=" "+s.getAttribute(n)),s.setAttribute(n,u)),h=="attribute"&&c=="disable-upgrade$"&&s.setAttribute(n,""),s.localName==="input"&&c==="value"&&s.setAttribute(c,""),s.removeAttribute(c),h==="property"&&(n=Gi(n)),st(this,o,a,h,n,d,u),!0}else return t._parseTemplateNodeAttribute.call(this,s,o,a,n,l)}static _parseTemplateNestedTemplate(s,o,a){let n=t._parseTemplateNestedTemplate.call(this,s,o,a);const l=s.parentNode,d=a.templateInfo,c=l.localName==="dom-if",h=l.localName==="dom-repeat";qt&&(c||h)&&(l.removeChild(s),a=a.parentInfo,a.templateInfo=d,a.noted=!0,n=!1);let u=d.hostProps;if(Sr&&c)u&&(o.hostProps=Object.assign(o.hostProps||{},u),qt||(a.parentInfo.noted=!0));else{let f="{";for(let b in u){let v=[{mode:f,source:b,dependencies:[b],hostProp:!0}];st(this,o,a,"property","_host_"+b,v)}}return n}static _parseBindings(s,o){let a=[],n=0,l;for(;(l=oi.exec(s))!==null;){l.index>n&&a.push({literal:s.slice(n,l.index)});let d=l[1][0],c=!!l[2],h=l[3].trim(),u=!1,f="",b=-1;d=="{"&&(b=h.indexOf("::"))>0&&(f=h.substring(b+2),h=h.substring(0,b),u=!0);let v=rt(h),x=[];if(v){let{args:S,methodName:A}=v;for(let V=0;V<S.length;V++){let E=S[V];E.literal||x.push(E)}let F=o.dynamicFns;(F&&F[A]||v.static)&&(x.push(A),v.dynamicFn=!0)}else x.push(h);a.push({source:h,mode:d,negate:c,customEvent:u,signature:v,dependencies:x,event:f}),n=oi.lastIndex}if(n&&n<s.length){let d=s.substring(n);d&&a.push({literal:d})}return a.length?a:null}static _evaluateBinding(s,o,a,n,l,d){let c;return o.signature?c=bt(s,a,n,l,o.signature):a!=o.source?c=z(s,o.source):d&&gt(a)?c=z(s,a):c=s.__data[a],o.negate&&(c=!c),c}}return e}),ye=[];function Vo(r){const t={};for(let e in r){const i=r[e];t[e]=typeof i=="function"?{type:i}:i}return t}const Mo=ge(r=>{const t=qi(r);function e(o){const a=Object.getPrototypeOf(o);return a.prototype instanceof s?a:null}function i(o){if(!o.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",o))){let a=null;if(o.hasOwnProperty(JSCompiler_renameProperty("properties",o))){const n=o.properties;n&&(a=Vo(n))}o.__ownProperties=a}return o.__ownProperties}class s extends t{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){this.prototype;const a=this._properties;this.__observedAttributes=a?Object.keys(a).map(n=>this.prototype._addPropertyToAttributeMap(n)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const a=e(this);a&&a.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const a=i(this);a&&this.createProperties(a)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const a=e(this);this.__properties=Object.assign({},a&&a._properties,i(this))}return this.__properties}static typeForProperty(a){const n=this._properties[a];return n&&n.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return s});const Do="3.5.2",li=window.ShadyCSS&&window.ShadyCSS.cssBuild,Lo=ge(r=>{const t=Mo(Fo(r));function e(l){if(!l.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",l))){l.__propertyDefaults=null;let d=l._properties;for(let c in d){let h=d[c];"value"in h&&(l.__propertyDefaults=l.__propertyDefaults||{},l.__propertyDefaults[c]=h)}}return l.__propertyDefaults}function i(l){return l.hasOwnProperty(JSCompiler_renameProperty("__ownObservers",l))||(l.__ownObservers=l.hasOwnProperty(JSCompiler_renameProperty("observers",l))?l.observers:null),l.__ownObservers}function s(l,d,c,h){c.computed&&(c.readOnly=!0),c.computed&&(l._hasReadOnlyEffect(d)?console.warn(`Cannot redefine computed property '${d}'.`):l._createComputedProperty(d,c.computed,h)),c.readOnly&&!l._hasReadOnlyEffect(d)?l._createReadOnlyProperty(d,!c.computed):c.readOnly===!1&&l._hasReadOnlyEffect(d)&&console.warn(`Cannot make readOnly property '${d}' non-readOnly.`),c.reflectToAttribute&&!l._hasReflectEffect(d)?l._createReflectedProperty(d):c.reflectToAttribute===!1&&l._hasReflectEffect(d)&&console.warn(`Cannot make reflected property '${d}' non-reflected.`),c.notify&&!l._hasNotifyEffect(d)?l._createNotifyingProperty(d):c.notify===!1&&l._hasNotifyEffect(d)&&console.warn(`Cannot make notify property '${d}' non-notify.`),c.observer&&l._createPropertyObserver(d,c.observer,h[c.observer]),l._addPropertyToAttributeMap(d)}function o(l,d,c,h){if(!li){const u=d.content.querySelectorAll("style"),f=Bi(d),b=Nr(c),v=d.content.firstElementChild;for(let S=0;S<b.length;S++){let A=b[S];A.textContent=l._processStyleText(A.textContent,h),d.content.insertBefore(A,v)}let x=0;for(let S=0;S<f.length;S++){let A=f[S],F=u[x];F!==A?(A=A.cloneNode(!0),F.parentNode.insertBefore(A,F)):x++,A.textContent=l._processStyleText(A.textContent,h)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(d,c),Ar&&li&&_r){const u=d.content.querySelectorAll("style");if(u){let f="";Array.from(u).forEach(b=>{f+=b.textContent,b.parentNode.removeChild(b)}),l._styleSheet=new CSSStyleSheet,l._styleSheet.replaceSync(f)}}}function a(l){let d=null;if(l&&(!ft||yr)&&(d=Te.import(l,"template"),ft&&!d))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${l}`);return d}class n extends t{static get polymerElementVersion(){return Do}static _finalizeClass(){t._finalizeClass.call(this);const d=i(this);d&&this.createObservers(d,this._properties),this._prepareTemplate()}static _prepareTemplate(){let d=this.template;d&&(typeof d=="string"?(console.error("template getter must return HTMLTemplateElement"),d=null):vr||(d=d.cloneNode(!0))),this.prototype._template=d}static createProperties(d){for(let c in d)s(this.prototype,c,d[c],d)}static createObservers(d,c){const h=this.prototype;for(let u=0;u<d.length;u++)h._createMethodObserver(d[u],c)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){let d=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;typeof d=="function"&&(d=d()),this._template=d!==void 0?d:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&a(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(d){this._template=d}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const d=this.importMeta;if(d)this._importPath=Ft(d.url);else{const c=Te.import(this.is);this._importPath=c&&c.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=br,this.importPath=this.constructor.importPath;let d=e(this.constructor);if(d)for(let c in d){let h=d[c];if(this._canApplyPropertyDefault(c)){let u=typeof h.value=="function"?h.value.call(this):h.value;this._hasAccessor(c)?this._setPendingProperty(c,u,!0):this[c]=u}}}_canApplyPropertyDefault(d){return!this.hasOwnProperty(d)}static _processStyleText(d,c){return Ot(d,c)}static _finalizeTemplate(d){const c=this.prototype._template;if(c&&!c.__polymerFinalized){c.__polymerFinalized=!0;const h=this.importPath,u=h?Ee(h):"";o(this,c,d,u),this.prototype._bindTemplate(c)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(d){const c=ie(this);if(c.attachShadow)return d?(c.shadowRoot||(c.attachShadow({mode:"open",shadyUpgradeFragment:d}),c.shadowRoot.appendChild(d),this.constructor._styleSheet&&(c.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),wr&&window.ShadyDOM&&window.ShadyDOM.flushInitial(c.shadowRoot),c.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(d){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,d)}resolveUrl(d,c){return!c&&this.importPath&&(c=Ee(this.importPath)),Ee(d,c)}static _parseTemplateContent(d,c,h){return c.dynamicFns=c.dynamicFns||this._properties,t._parseTemplateContent.call(this,d,c,h)}static _addTemplatePropertyEffect(d,c,h){return Cr&&!(c in this._properties)&&!(h.info.part.signature&&h.info.part.signature.static)&&!h.info.part.hostProp&&!d.nestedTemplate&&console.warn(`Property '${c}' used in template but not declared in 'properties'; attribute will not be observed.`),t._addTemplatePropertyEffect.call(this,d,c,h)}}return n});const di=window.trustedTypes&&trustedTypes.createPolicy("polymer-html-literal",{createHTML:r=>r});class is{constructor(t,e){rs(t,e);const i=e.reduce((s,o,a)=>s+ss(o)+t[a+1],t[0]);this.value=i.toString()}toString(){return this.value}}function ss(r){if(r instanceof is)return r.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${r}`)}function $o(r){if(r instanceof HTMLTemplateElement)return r.innerHTML;if(r instanceof is)return ss(r);throw new Error(`non-template value passed to Polymer's html function: ${r}`)}const Bo=function(t,...e){rs(t,e);const i=document.createElement("template");let s=e.reduce((o,a,n)=>o+$o(a)+t[n+1],t[0]);return di&&(s=di.createHTML(s)),i.innerHTML=s,i},rs=(r,t)=>{if(!Array.isArray(r)||!Array.isArray(r.raw)||t.length!==r.length-1)throw new TypeError("Invalid call to the html template tag")};const os=Lo(HTMLElement);let ci=0,as=0;const de=[];let yt=!1;function Ho(){yt=!1;const r=de.length;for(let t=0;t<r;t++){const e=de[t];if(e)try{e()}catch(i){setTimeout(()=>{throw i})}}de.splice(0,r),as+=r}const G={after(r){return{run(t){return window.setTimeout(t,r)},cancel(t){window.clearTimeout(t)}}},run(r,t){return window.setTimeout(r,t)},cancel(r){window.clearTimeout(r)}},j={run(r){return window.requestAnimationFrame(r)},cancel(r){window.cancelAnimationFrame(r)}},ns={run(r){return window.requestIdleCallback?window.requestIdleCallback(r):window.setTimeout(r,16)},cancel(r){window.cancelIdleCallback?window.cancelIdleCallback(r):window.clearTimeout(r)}},O={run(r){yt||(yt=!0,queueMicrotask(()=>Ho())),de.push(r);const t=ci;return ci+=1,t},cancel(r){const t=r-as;if(t>=0){if(!de[t])throw new Error(`invalid async handle: ${r}`);de[t]=null}}};const ze=new Set;class C{static debounce(t,e,i){return t instanceof C?t._cancelAsync():t=new C,t.setConfig(e,i),t}constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(t,e){this._asyncModule=t,this._callback=e,this._timer=this._asyncModule.run(()=>{this._timer=null,ze.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),ze.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return this._timer!=null}}function ls(r){ze.add(r)}function Uo(){const r=!!ze.size;return ze.forEach(t=>{try{t.flush()}catch(e){setTimeout(()=>{throw e})}}),r}const Se=()=>{let r;do r=Uo();while(r)};const L=[];function vt(r,t,e=r.getAttribute("dir")){t?r.setAttribute("dir",t):e!=null&&r.removeAttribute("dir")}function Ct(){return document.documentElement.getAttribute("dir")}function Go(){const r=Ct();L.forEach(t=>{vt(t,r)})}const Wo=new MutationObserver(Go);Wo.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});const ds=r=>class extends r{static get properties(){return{dir:{type:String,value:"",reflectToAttribute:!0,converter:{fromAttribute:e=>e||"",toAttribute:e=>e===""?null:e}}}}get __isRTL(){return this.getAttribute("dir")==="rtl"}connectedCallback(){super.connectedCallback(),(!this.hasAttribute("dir")||this.__restoreSubscription)&&(this.__subscribe(),vt(this,Ct(),null))}attributeChangedCallback(e,i,s){if(super.attributeChangedCallback(e,i,s),e!=="dir")return;const o=Ct(),a=s===o&&L.indexOf(this)===-1,n=!s&&i&&L.indexOf(this)===-1;a||n?(this.__subscribe(),vt(this,o,s)):s!==o&&i===o&&this.__unsubscribe()}disconnectedCallback(){super.disconnectedCallback(),this.__restoreSubscription=L.includes(this),this.__unsubscribe()}_valueToNodeAttribute(e,i,s){s==="dir"&&i===""&&!e.hasAttribute("dir")||super._valueToNodeAttribute(e,i,s)}_attributeToProperty(e,i,s){e==="dir"&&!i?this.dir="":super._attributeToProperty(e,i,s)}__subscribe(){L.includes(this)||L.push(this)}__unsubscribe(){L.includes(this)&&L.splice(L.indexOf(this),1)}};function Dt(r,t){return r.split(".").reduce((e,i)=>e?e[i]:void 0,t)}function cs(r){if(window.Vaadin&&window.Vaadin.templateRendererCallback){window.Vaadin.templateRendererCallback(r);return}r.querySelector("template")&&console.warn(`WARNING: <template> inside <${r.localName}> is no longer supported. Import @vaadin/polymer-legacy-adapter/template-renderer.js to enable compatibility.`)}function hs(r,t){return t?t.closest(r)||hs(r,t.getRootNode().host):null}function us(r){return r?new Set(r.split(" ")):new Set}function ps(r){return r?[...r].join(" "):""}function fs(r,t,e){const i=us(r.getAttribute(t));i.add(e),r.setAttribute(t,ps(i))}function ms(r,t,e){const i=us(r.getAttribute(t));if(i.delete(e),i.size===0){r.removeAttribute(t);return}r.setAttribute(t,ps(i))}function jo(r){return r.nodeType===Node.TEXT_NODE&&r.textContent.trim()===""}function ue(r){return r.__cells||Array.from(r.querySelectorAll('[part~="cell"]:not([part~="details-cell"])'))}function T(r,t){[...r.children].forEach(t)}function pe(r,t){ue(r).forEach(t),r.__detailsCell&&t(r.__detailsCell)}function qo(r,t,e){let i=1;r.forEach(s=>{i%10===0&&(i+=1),s._order=e+i*t,i+=1})}function Ze(r,t,e){switch(typeof e){case"boolean":r.toggleAttribute(t,e);break;case"string":r.setAttribute(t,e);break;default:r.removeAttribute(t);break}}function q(r,t,e){t||t===""?fs(r,"part",e):ms(r,"part",e)}function U(r,t,e){r.forEach(i=>{q(i,e,t)})}function oe(r,t){const e=ue(r);Object.entries(t).forEach(([i,s])=>{Ze(r,i,s);const o=`${i}-row`;q(r,s,o),U(e,`${o}-cell`,s)})}function hi(r,t){const e=ue(r);Object.entries(t).forEach(([i,s])=>{const o=r.getAttribute(i);if(Ze(r,i,s),o){const a=`${i}-${o}-row`;q(r,!1,a),U(e,`${a}-cell`,!1)}if(s){const a=`${i}-${s}-row`;q(r,s,a),U(e,`${a}-cell`,s)}})}function ee(r,t,e,i,s){Ze(r,t,e),s&&q(r,!1,s),q(r,e,i||`${t}-cell`)}class ce{constructor(t,e){this.__host=t,this.__callback=e,this.__currentSlots=[],this.__onMutation=this.__onMutation.bind(this),this.__observer=new MutationObserver(this.__onMutation),this.__observer.observe(t,{childList:!0}),this.__initialCallDebouncer=C.debounce(this.__initialCallDebouncer,O,()=>this.__onMutation())}disconnect(){this.__observer.disconnect(),this.__initialCallDebouncer.cancel(),this.__toggleSlotChangeListeners(!1)}flush(){this.__onMutation()}__toggleSlotChangeListeners(t){this.__currentSlots.forEach(e=>{t?e.addEventListener("slotchange",this.__onMutation):e.removeEventListener("slotchange",this.__onMutation)})}__onMutation(){const t=!this.__currentColumns;this.__currentColumns||=[];const e=ce.getColumns(this.__host),i=e.filter(n=>!this.__currentColumns.includes(n)),s=this.__currentColumns.filter(n=>!e.includes(n)),o=this.__currentColumns.some((n,l)=>n!==e[l]);this.__currentColumns=e,this.__toggleSlotChangeListeners(!1),this.__currentSlots=[...this.__host.children].filter(n=>n instanceof HTMLSlotElement),this.__toggleSlotChangeListeners(!0),(t||i.length||s.length||o)&&this.__callback(i,s)}static __isColumnElement(t){return t.nodeType===Node.ELEMENT_NODE&&/\bcolumn\b/u.test(t.localName)}static getColumns(t){const e=[],i=t._isColumnElement||ce.__isColumnElement;return[...t.children].forEach(s=>{i(s)?e.push(s):s instanceof HTMLSlotElement&&[...s.assignedElements({flatten:!0})].filter(o=>i(o)).forEach(o=>e.push(o))}),e}}const Yo=r=>class extends r{static get properties(){return{resizable:{type:Boolean,sync:!0,value(){if(this.localName==="vaadin-grid-column-group")return;const e=this.parentNode;return e&&e.localName==="vaadin-grid-column-group"&&e.resizable||!1}},frozen:{type:Boolean,value:!1,sync:!0},frozenToEnd:{type:Boolean,value:!1,sync:!0},rowHeader:{type:Boolean,value:!1,sync:!0},hidden:{type:Boolean,value:!1,sync:!0},header:{type:String,sync:!0},textAlign:{type:String,sync:!0},headerPartName:{type:String,sync:!0},footerPartName:{type:String,sync:!0},_lastFrozen:{type:Boolean,value:!1,sync:!0},_bodyContentHidden:{type:Boolean,value:!1,sync:!0},_firstFrozenToEnd:{type:Boolean,value:!1,sync:!0},_order:{type:Number,sync:!0},_reorderStatus:{type:Boolean,sync:!0},_emptyCells:Array,_headerCell:{type:Object,sync:!0},_footerCell:{type:Object,sync:!0},_grid:Object,__initialized:{type:Boolean,value:!0},headerRenderer:{type:Function,sync:!0},_headerRenderer:{type:Function,computed:"_computeHeaderRenderer(headerRenderer, header, __initialized)"},footerRenderer:{type:Function,sync:!0},_footerRenderer:{type:Function,computed:"_computeFooterRenderer(footerRenderer, __initialized)"},__gridColumnElement:{type:Boolean,value:!0}}}static get observers(){return["_widthChanged(width, _headerCell, _footerCell, _cells)","_frozenChanged(frozen, _headerCell, _footerCell, _cells)","_frozenToEndChanged(frozenToEnd, _headerCell, _footerCell, _cells)","_flexGrowChanged(flexGrow, _headerCell, _footerCell, _cells)","_textAlignChanged(textAlign, _cells, _headerCell, _footerCell)","_orderChanged(_order, _headerCell, _footerCell, _cells)","_lastFrozenChanged(_lastFrozen)","_firstFrozenToEndChanged(_firstFrozenToEnd)","_onRendererOrBindingChanged(_renderer, _cells, _bodyContentHidden, path)","_onHeaderRendererOrBindingChanged(_headerRenderer, _headerCell, path, header)","_onFooterRendererOrBindingChanged(_footerRenderer, _footerCell)","_resizableChanged(resizable, _headerCell)","_reorderStatusChanged(_reorderStatus, _headerCell, _footerCell, _cells)","_hiddenChanged(hidden, _headerCell, _footerCell, _cells)","_rowHeaderChanged(rowHeader, _cells)","__headerFooterPartNameChanged(_headerCell, _footerCell, headerPartName, footerPartName)"]}get _grid(){return this._gridValue||(this._gridValue=this._findHostGrid()),this._gridValue}get _allCells(){return[].concat(this._cells||[]).concat(this._emptyCells||[]).concat(this._headerCell).concat(this._footerCell).filter(e=>e)}connectedCallback(){super.connectedCallback(),requestAnimationFrame(()=>{this._grid&&this._allCells.forEach(e=>{e._content.parentNode||this._grid.appendChild(e._content)})})}disconnectedCallback(){super.disconnectedCallback(),requestAnimationFrame(()=>{this._grid||this._allCells.forEach(e=>{e._content.parentNode&&e._content.parentNode.removeChild(e._content)})}),this._gridValue=void 0}ready(){super.ready(),cs(this)}_findHostGrid(){let e=this;for(;e&&!/^vaadin.*grid(-pro)?$/u.test(e.localName);)e=e.assignedSlot?e.assignedSlot.parentNode:e.parentNode;return e||void 0}_renderHeaderAndFooter(){this._renderHeaderCellContent(this._headerRenderer,this._headerCell),this._renderFooterCellContent(this._footerRenderer,this._footerCell)}_flexGrowChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("flexGrow"),this._allCells.forEach(i=>{i.style.flexGrow=e})}_orderChanged(e){this._allCells.forEach(i=>{i.style.order=e})}_widthChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("width"),this._allCells.forEach(i=>{i.style.width=e})}_frozenChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("frozen",e),this._allCells.forEach(i=>{ee(i,"frozen",e)}),this._grid&&this._grid._frozenCellsChanged&&this._grid._frozenCellsChanged()}_frozenToEndChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("frozenToEnd",e),this._allCells.forEach(i=>{this._grid&&i.parentElement===this._grid.$.sizer||ee(i,"frozen-to-end",e)}),this._grid&&this._grid._frozenCellsChanged&&this._grid._frozenCellsChanged()}_lastFrozenChanged(e){this._allCells.forEach(i=>{ee(i,"last-frozen",e)}),this.parentElement&&this.parentElement._columnPropChanged&&(this.parentElement._lastFrozen=e)}_firstFrozenToEndChanged(e){this._allCells.forEach(i=>{this._grid&&i.parentElement===this._grid.$.sizer||ee(i,"first-frozen-to-end",e)}),this.parentElement&&this.parentElement._columnPropChanged&&(this.parentElement._firstFrozenToEnd=e)}_rowHeaderChanged(e,i){i&&i.forEach(s=>{s.setAttribute("role",e?"rowheader":"gridcell")})}_generateHeader(e){return e.substr(e.lastIndexOf(".")+1).replace(/([A-Z])/gu,"-$1").toLowerCase().replace(/-/gu," ").replace(/^./u,i=>i.toUpperCase())}_reorderStatusChanged(e){const i=this.__previousReorderStatus,s=i?`reorder-${i}-cell`:"",o=`reorder-${e}-cell`;this._allCells.forEach(a=>{ee(a,"reorder-status",e,o,s)}),this.__previousReorderStatus=e}_resizableChanged(e,i){e===void 0||i===void 0||i&&[i].concat(this._emptyCells).forEach(s=>{if(s){const o=s.querySelector('[part~="resize-handle"]');if(o&&s.removeChild(o),e){const a=document.createElement("div");a.setAttribute("part","resize-handle"),s.appendChild(a)}}})}_textAlignChanged(e){if(e===void 0||this._grid===void 0)return;if(["start","end","center"].indexOf(e)===-1){console.warn('textAlign can only be set as "start", "end" or "center"');return}let i;getComputedStyle(this._grid).direction==="ltr"?e==="start"?i="left":e==="end"&&(i="right"):e==="start"?i="right":e==="end"&&(i="left"),this._allCells.forEach(s=>{s._content.style.textAlign=e,getComputedStyle(s._content).textAlign!==e&&(s._content.style.textAlign=i)})}_hiddenChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("hidden",e),!!e!=!!this._previousHidden&&this._grid&&(e===!0&&this._allCells.forEach(i=>{i._content.parentNode&&i._content.parentNode.removeChild(i._content)}),this._grid._debouncerHiddenChanged=C.debounce(this._grid._debouncerHiddenChanged,j,()=>{this._grid&&this._grid._renderColumnTree&&this._grid._renderColumnTree(this._grid._columnTree)}),this._grid._debounceUpdateFrozenColumn&&this._grid._debounceUpdateFrozenColumn(),this._grid._resetKeyboardNavigation&&this._grid._resetKeyboardNavigation()),this._previousHidden=e}_runRenderer(e,i,s){const o=s&&s.item&&!i.parentElement.hidden;if(!(o||e===this._headerRenderer||e===this._footerRenderer))return;const n=[i._content,this];o&&n.push(s),e.apply(this,n)}__renderCellsContent(e,i){this.hidden||!this._grid||i.forEach(s=>{if(!s.parentElement)return;const o=this._grid.__getRowModel(s.parentElement);e&&(s._renderer!==e&&this._clearCellContent(s),s._renderer=e,this._runRenderer(e,s,o))})}_clearCellContent(e){e._content.innerHTML="",delete e._content._$litPart$}_renderHeaderCellContent(e,i){!i||!e||(this.__renderCellsContent(e,[i]),this._grid&&i.parentElement&&this._grid.__debounceUpdateHeaderFooterRowVisibility(i.parentElement))}_onHeaderRendererOrBindingChanged(e,i,...s){this._renderHeaderCellContent(e,i)}__headerFooterPartNameChanged(e,i,s,o){[{cell:e,partName:s},{cell:i,partName:o}].forEach(({cell:a,partName:n})=>{if(a){const l=a.__customParts||[];a.part.remove(...l),a.__customParts=n?n.trim().split(" "):[],a.part.add(...a.__customParts)}})}_renderBodyCellsContent(e,i){!i||!e||this.__renderCellsContent(e,i)}_onRendererOrBindingChanged(e,i,...s){this._renderBodyCellsContent(e,i)}_renderFooterCellContent(e,i){!i||!e||(this.__renderCellsContent(e,[i]),this._grid&&i.parentElement&&this._grid.__debounceUpdateHeaderFooterRowVisibility(i.parentElement))}_onFooterRendererOrBindingChanged(e,i){this._renderFooterCellContent(e,i)}__setTextContent(e,i){e.textContent!==i&&(e.textContent=i)}__textHeaderRenderer(){this.__setTextContent(this._headerCell._content,this.header)}_defaultHeaderRenderer(){this.path&&this.__setTextContent(this._headerCell._content,this._generateHeader(this.path))}_defaultRenderer(e,i,{item:s}){this.path&&this.__setTextContent(e,Dt(this.path,s))}_defaultFooterRenderer(){}_computeHeaderRenderer(e,i){return e||(i!=null?this.__textHeaderRenderer:this._defaultHeaderRenderer)}_computeRenderer(e){return e||this._defaultRenderer}_computeFooterRenderer(e){return e||this._defaultFooterRenderer}},Ko=r=>class extends Yo(ds(r)){static get properties(){return{responsive:{type:Array,sync:!0},minWidth:{type:String,value:"10px",sync:!0},width:{type:String,value:"100px",sync:!0},flexGrow:{type:Number,value:1,sync:!0},renderer:{type:Function,sync:!0},_renderer:{type:Function,computed:"_computeRenderer(renderer, __initialized)"},path:{type:String,sync:!0},autoWidth:{type:Boolean,value:!1},_focusButtonMode:{type:Boolean,value:!1},_cells:{type:Array,sync:!0}}}};class Jo extends Ko(os){static get is(){return"vaadin-grid-column"}}Nt(Jo);const gs=new WeakMap;function Xo(r,t){let e=t;for(;e;){if(gs.get(e)===r)return!0;e=Object.getPrototypeOf(e)}return!1}function Lt(r){return t=>{if(Xo(r,t))return t;const e=r(t);return gs.set(e,r),e}}const Zo=Lt(r=>typeof r.prototype.addController=="function"?r:class extends r{constructor(){super(),this.__controllers=new Set}connectedCallback(){super.connectedCallback(),this.__controllers.forEach(e=>{e.hostConnected&&e.hostConnected()})}disconnectedCallback(){super.disconnectedCallback(),this.__controllers.forEach(e=>{e.hostDisconnected&&e.hostDisconnected()})}addController(e){this.__controllers.add(e),this.$!==void 0&&this.isConnected&&e.hostConnected&&e.hostConnected()}removeController(e){this.__controllers.delete(e)}}),Qo=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,$e=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function ea(){function r(){return!0}return _s(r)}function ta(){try{return ia()?!0:sa()?$e?!ra():!ea():!1}catch{return!1}}function ia(){return localStorage.getItem("vaadin.developmentmode.force")}function sa(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function ra(){return!!($e&&Object.keys($e).map(t=>$e[t]).filter(t=>t.productionMode).length>0)}function _s(r,t){if(typeof r!="function")return;const e=Qo.exec(r.toString());if(e)try{r=new Function(e[1])}catch(i){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",i)}return r(t)}window.Vaadin=window.Vaadin||{};const ui=function(r,t){if(window.Vaadin.developmentMode)return _s(r,t)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=ta());function oa(){}const aa=function(){if(typeof ui=="function")return ui(oa)};window.Vaadin||(window.Vaadin={});window.Vaadin.registrations||(window.Vaadin.registrations=[]);window.Vaadin.developmentModeCallback||(window.Vaadin.developmentModeCallback={});window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]=function(){aa()};let ot;const pi=new Set,na=r=>class extends ds(r){static finalize(){super.finalize();const{is:e}=this;e&&!pi.has(e)&&(window.Vaadin.registrations.push(this),pi.add(e),window.Vaadin.developmentModeCallback&&(ot=C.debounce(ot,ns,()=>{window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]()}),ls(ot)))}constructor(){super(),document.doctype===null&&console.warn('Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.')}};const la=Lt(r=>class extends r{static get properties(){return{disabled:{type:Boolean,value:!1,observer:"_disabledChanged",reflectToAttribute:!0,sync:!0}}}_disabledChanged(e){this._setAriaDisabled(e)}_setAriaDisabled(e){e?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled")}click(){this.disabled||super.click()}});const da=r=>class extends la(r){static get properties(){return{tabindex:{type:Number,reflectToAttribute:!0,observer:"_tabindexChanged",sync:!0},_lastTabIndex:{type:Number}}}_disabledChanged(e,i){super._disabledChanged(e,i),!this.__shouldAllowFocusWhenDisabled()&&(e?(this.tabindex!==void 0&&(this._lastTabIndex=this.tabindex),this.setAttribute("tabindex","-1")):i&&(this._lastTabIndex!==void 0?this.setAttribute("tabindex",this._lastTabIndex):this.tabindex=void 0))}_tabindexChanged(e){this.__shouldAllowFocusWhenDisabled()||this.disabled&&e!==-1&&(this._lastTabIndex=e,this.setAttribute("tabindex","-1"))}focus(e){(!this.disabled||this.__shouldAllowFocusWhenDisabled())&&super.focus(e)}__shouldAllowFocusWhenDisabled(){return!1}};const Qe=r=>r.test(navigator.userAgent),wt=r=>r.test(navigator.platform),ca=r=>r.test(navigator.vendor),fi=Qe(/Android/u),bs=Qe(/Chrome/u)&&ca(/Google Inc/u),ha=Qe(/Firefox/u),ua=wt(/^iPad/u)||wt(/^Mac/u)&&navigator.maxTouchPoints>1,pa=wt(/^iPhone/u),mi=pa||ua,$t=Qe(/^((?!chrome|android).)*safari/iu),ys=(()=>{try{return document.createEvent("TouchEvent"),!0}catch{return!1}})(),fa=window.ShadowRoot&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype;class vs{constructor(t,e){this.slot=t,this.callback=e,this._storedNodes=[],this._connected=!1,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){this.slot.addEventListener("slotchange",this._boundSchedule),this._connected=!0}disconnect(){this.slot.removeEventListener("slotchange",this._boundSchedule),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,queueMicrotask(()=>{this.flush()}))}flush(){this._connected&&(this._scheduled=!1,this._processNodes())}_processNodes(){const t=this.slot.assignedNodes({flatten:!0});let e=[];const i=[],s=[];t.length&&(e=t.filter(o=>!this._storedNodes.includes(o))),this._storedNodes.length&&this._storedNodes.forEach((o,a)=>{const n=t.indexOf(o);n===-1?i.push(o):n!==a&&s.push(o)}),(e.length||i.length||s.length)&&this.callback({addedNodes:e,currentNodes:t,movedNodes:s,removedNodes:i}),this._storedNodes=t}}let ma=0;function ga(){return ma++}class _a extends EventTarget{static generateId(t,e="default"){return`${e}-${t.localName}-${ga()}`}constructor(t,e,i,s={}){super();const{initializer:o,multiple:a,observe:n,useUniqueId:l,uniqueIdPrefix:d}=s;this.host=t,this.slotName=e,this.tagName=i,this.observe=typeof n=="boolean"?n:!0,this.multiple=typeof a=="boolean"?a:!1,this.slotInitializer=o,a&&(this.nodes=[]),l&&(this.defaultId=this.constructor.generateId(t,d||e))}hostConnected(){this.initialized||(this.multiple?this.initMultiple():this.initSingle(),this.observe&&this.observeSlot(),this.initialized=!0)}initSingle(){let t=this.getSlotChild();t?(this.node=t,this.initAddedNode(t)):(t=this.attachDefaultNode(),this.initNode(t))}initMultiple(){const t=this.getSlotChildren();if(t.length===0){const e=this.attachDefaultNode();e&&(this.nodes=[e],this.initNode(e))}else this.nodes=t,t.forEach(e=>{this.initAddedNode(e)})}attachDefaultNode(){const{host:t,slotName:e,tagName:i}=this;let s=this.defaultNode;return!s&&i&&(s=document.createElement(i),s instanceof Element&&(e!==""&&s.setAttribute("slot",e),this.defaultNode=s)),s&&(this.node=s,t.appendChild(s)),s}getSlotChildren(){const{slotName:t}=this;return Array.from(this.host.childNodes).filter(e=>e.nodeType===Node.ELEMENT_NODE&&e.hasAttribute("data-slot-ignore")?!1:e.nodeType===Node.ELEMENT_NODE&&e.slot===t||e.nodeType===Node.TEXT_NODE&&e.textContent.trim()&&t==="")}getSlotChild(){return this.getSlotChildren()[0]}initNode(t){const{slotInitializer:e}=this;e&&e(t,this.host)}initCustomNode(t){}teardownNode(t){}initAddedNode(t){t!==this.defaultNode&&(this.initCustomNode(t),this.initNode(t))}observeSlot(){const{slotName:t}=this,e=t===""?"slot:not([name])":`slot[name=${t}]`,i=this.host.shadowRoot.querySelector(e);this.__slotObserver=new vs(i,({addedNodes:s,removedNodes:o})=>{const a=this.multiple?this.nodes:[this.node],n=s.filter(l=>!jo(l)&&!a.includes(l)&&!(l.nodeType===Node.ELEMENT_NODE&&l.hasAttribute("data-slot-ignore")));o.length&&(this.nodes=a.filter(l=>!o.includes(l)),o.forEach(l=>{this.teardownNode(l)})),n&&n.length>0&&(this.multiple?(this.defaultNode&&this.defaultNode.remove(),this.nodes=[...a,...n].filter(l=>l!==this.defaultNode),n.forEach(l=>{this.initAddedNode(l)})):(this.node&&this.node.remove(),this.node=n[0],this.initAddedNode(this.node)))})}}class ba extends _a{constructor(t){super(t,"tooltip"),this.setTarget(t),this.__onContentChange=this.__onContentChange.bind(this)}initCustomNode(t){t.target=this.target,this.ariaTarget!==void 0&&(t.ariaTarget=this.ariaTarget),this.context!==void 0&&(t.context=this.context),this.manual!==void 0&&(t.manual=this.manual),this.opened!==void 0&&(t.opened=this.opened),this.position!==void 0&&(t._position=this.position),this.shouldShow!==void 0&&(t.shouldShow=this.shouldShow),this.manual||this.host.setAttribute("has-tooltip",""),this.__notifyChange(t),t.addEventListener("content-changed",this.__onContentChange)}teardownNode(t){this.manual||this.host.removeAttribute("has-tooltip"),t.removeEventListener("content-changed",this.__onContentChange),this.__notifyChange(null)}setAriaTarget(t){this.ariaTarget=t;const e=this.node;e&&(e.ariaTarget=t)}setContext(t){this.context=t;const e=this.node;e&&(e.context=t)}setManual(t){this.manual=t;const e=this.node;e&&(e.manual=t)}setOpened(t){this.opened=t;const e=this.node;e&&(e.opened=t)}setPosition(t){this.position=t;const e=this.node;e&&(e._position=t)}setShouldShow(t){this.shouldShow=t;const e=this.node;e&&(e.shouldShow=t)}setTarget(t){this.target=t;const e=this.node;e&&(e.target=t)}__onContentChange(t){this.__notifyChange(t.target)}__notifyChange(t){this.dispatchEvent(new CustomEvent("tooltip-changed",{detail:{node:t}}))}}const gi=navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/u),ya=gi&&gi[1]>=8,_i=3,va={_ratio:.5,_scrollerPaddingTop:0,_scrollPosition:0,_physicalSize:0,_physicalAverage:0,_physicalAverageCount:0,_physicalTop:0,_virtualCount:0,_estScrollHeight:0,_scrollHeight:0,_viewportHeight:0,_viewportWidth:0,_physicalItems:null,_physicalSizes:null,_firstVisibleIndexVal:null,_lastVisibleIndexVal:null,_maxPages:2,_templateCost:0,get _physicalBottom(){return this._physicalTop+this._physicalSize},get _scrollBottom(){return this._scrollPosition+this._viewportHeight},get _virtualEnd(){return this._virtualStart+this._physicalCount-1},get _hiddenContentSize(){return this._physicalSize-this._viewportHeight},get _maxScrollTop(){return this._estScrollHeight-this._viewportHeight+this._scrollOffset},get _maxVirtualStart(){const r=this._virtualCount;return Math.max(0,r-this._physicalCount)},get _virtualStart(){return this._virtualStartVal||0},set _virtualStart(r){r=this._clamp(r,0,this._maxVirtualStart),this._virtualStartVal=r},get _physicalStart(){return this._physicalStartVal||0},set _physicalStart(r){r%=this._physicalCount,r<0&&(r=this._physicalCount+r),this._physicalStartVal=r},get _physicalEnd(){return(this._physicalStart+this._physicalCount-1)%this._physicalCount},get _physicalCount(){return this._physicalCountVal||0},set _physicalCount(r){this._physicalCountVal=r},get _optPhysicalSize(){return this._viewportHeight===0?1/0:this._viewportHeight*this._maxPages},get _isVisible(){return!!(this.offsetWidth||this.offsetHeight)},get firstVisibleIndex(){let r=this._firstVisibleIndexVal;if(r==null){let t=this._physicalTop+this._scrollOffset;r=this._iterateItems((e,i)=>{if(t+=this._getPhysicalSizeIncrement(e),t>this._scrollPosition)return i})||0,this._firstVisibleIndexVal=r}return r},get lastVisibleIndex(){let r=this._lastVisibleIndexVal;if(r==null){let t=this._physicalTop+this._scrollOffset;this._iterateItems((e,i)=>{t<this._scrollBottom&&(r=i),t+=this._getPhysicalSizeIncrement(e)}),this._lastVisibleIndexVal=r}return r},get _scrollOffset(){return this._scrollerPaddingTop+this.scrollOffset},_scrollHandler(){const r=Math.max(0,Math.min(this._maxScrollTop,this._scrollTop));let t=r-this._scrollPosition;const e=t>=0;if(this._scrollPosition=r,this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,Math.abs(t)>this._physicalSize&&this._physicalSize>0){t-=this._scrollOffset;const i=Math.round(t/this._physicalAverage);this._virtualStart+=i,this._physicalStart+=i,this._physicalTop=Math.min(Math.floor(this._virtualStart)*this._physicalAverage,this._scrollPosition),this._update()}else if(this._physicalCount>0){const i=this._getReusables(e);e?(this._physicalTop=i.physicalTop,this._virtualStart+=i.indexes.length,this._physicalStart+=i.indexes.length):(this._virtualStart-=i.indexes.length,this._physicalStart-=i.indexes.length),this._update(i.indexes,e?null:i.indexes),this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,0),O)}},_getReusables(r){let t,e,i;const s=[],o=this._hiddenContentSize*this._ratio,a=this._virtualStart,n=this._virtualEnd,l=this._physicalCount;let d=this._physicalTop+this._scrollOffset;const c=this._physicalBottom+this._scrollOffset,h=this._scrollPosition,u=this._scrollBottom;for(r?(t=this._physicalStart,e=h-d):(t=this._physicalEnd,e=c-u);i=this._getPhysicalSizeIncrement(t),e-=i,!(s.length>=l||e<=o);)if(r){if(n+s.length+1>=this._virtualCount||d+i>=h-this._scrollOffset)break;s.push(t),d+=i,t=(t+1)%l}else{if(a-s.length<=0||d+this._physicalSize-i<=u)break;s.push(t),d-=i,t=t===0?l-1:t-1}return{indexes:s,physicalTop:d-this._scrollOffset}},_update(r,t){if(!(r&&r.length===0||this._physicalCount===0)){if(this._assignModels(r),this._updateMetrics(r),t)for(;t.length;){const e=t.pop();this._physicalTop-=this._getPhysicalSizeIncrement(e)}this._positionItems(),this._updateScrollerSize()}},_isClientFull(){return this._scrollBottom!==0&&this._physicalBottom-1>=this._scrollBottom&&this._physicalTop<=this._scrollPosition},_increasePoolIfNeeded(r){const e=this._clamp(this._physicalCount+r,_i,this._virtualCount-this._virtualStart)-this._physicalCount;let i=Math.round(this._physicalCount*.5);if(!(e<0)){if(e>0){const s=window.performance.now();[].push.apply(this._physicalItems,this._createPool(e));for(let o=0;o<e;o++)this._physicalSizes.push(0);this._physicalCount+=e,this._physicalStart>this._physicalEnd&&this._isIndexRendered(this._focusedVirtualIndex)&&this._getPhysicalIndex(this._focusedVirtualIndex)<this._physicalEnd&&(this._physicalStart+=e),this._update(),this._templateCost=(window.performance.now()-s)/e,i=Math.round(this._physicalCount*.5)}this._virtualEnd>=this._virtualCount-1||i===0||(this._isClientFull()?this._physicalSize<this._optPhysicalSize&&this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,this._clamp(Math.round(50/this._templateCost),1,i)),ns):this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,i),O))}},_render(){if(!(!this.isAttached||!this._isVisible))if(this._physicalCount!==0){const r=this._getReusables(!0);this._physicalTop=r.physicalTop,this._virtualStart+=r.indexes.length,this._physicalStart+=r.indexes.length,this._update(r.indexes),this._update(),this._increasePoolIfNeeded(0)}else this._virtualCount>0&&(this.updateViewportBoundaries(),this._increasePoolIfNeeded(_i))},_itemsChanged(r){r.path==="items"&&(this._virtualStart=0,this._physicalTop=0,this._virtualCount=this.items?this.items.length:0,this._physicalIndexForKey={},this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._physicalItems||(this._physicalItems=[]),this._physicalSizes||(this._physicalSizes=[]),this._physicalStart=0,this._scrollTop>this._scrollOffset&&this._resetScrollPosition(0),this._debounce("_render",this._render,j))},_iterateItems(r,t){let e,i,s,o;if(arguments.length===2&&t){for(o=0;o<t.length;o++)if(e=t[o],i=this._computeVidx(e),(s=r.call(this,e,i))!=null)return s}else{for(e=this._physicalStart,i=this._virtualStart;e<this._physicalCount;e++,i++)if((s=r.call(this,e,i))!=null)return s;for(e=0;e<this._physicalStart;e++,i++)if((s=r.call(this,e,i))!=null)return s}},_computeVidx(r){return r>=this._physicalStart?this._virtualStart+(r-this._physicalStart):this._virtualStart+(this._physicalCount-this._physicalStart)+r},_positionItems(){this._adjustScrollPosition();let r=this._physicalTop;this._iterateItems(t=>{this.translate3d(0,`${r}px`,0,this._physicalItems[t]),r+=this._physicalSizes[t]})},_getPhysicalSizeIncrement(r){return this._physicalSizes[r]},_adjustScrollPosition(){const r=this._virtualStart===0?this._physicalTop:Math.min(this._scrollPosition+this._physicalTop,0);if(r!==0){this._physicalTop-=r;const t=this._scrollPosition;!ya&&t>0&&this._resetScrollPosition(t-r)}},_resetScrollPosition(r){this.scrollTarget&&r>=0&&(this._scrollTop=r,this._scrollPosition=this._scrollTop)},_updateScrollerSize(r){const t=this._physicalBottom+Math.max(this._virtualCount-this._physicalCount-this._virtualStart,0)*this._physicalAverage;this._estScrollHeight=t,(r||this._scrollHeight===0||this._scrollPosition>=t-this._physicalSize||Math.abs(t-this._scrollHeight)>=this._viewportHeight)&&(this.$.items.style.height=`${t}px`,this._scrollHeight=t)},scrollToIndex(r){if(typeof r!="number"||r<0||r>this.items.length-1||(Se(),this._physicalCount===0))return;r=this._clamp(r,0,this._virtualCount-1),(!this._isIndexRendered(r)||r>=this._maxVirtualStart)&&(this._virtualStart=r-1),this._assignModels(),this._updateMetrics(),this._physicalTop=this._virtualStart*this._physicalAverage;let t=this._physicalStart,e=this._virtualStart,i=0;const s=this._hiddenContentSize;for(;e<r&&i<=s;)i+=this._getPhysicalSizeIncrement(t),t=(t+1)%this._physicalCount,e+=1;this._updateScrollerSize(!0),this._positionItems(),this._resetScrollPosition(this._physicalTop+this._scrollOffset+i),this._increasePoolIfNeeded(0),this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null},_resetAverage(){this._physicalAverage=0,this._physicalAverageCount=0},_resizeHandler(){this._debounce("_render",()=>{this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._isVisible?(this.updateViewportBoundaries(),this.toggleScrollListener(!0),this._resetAverage(),this._render()):this.toggleScrollListener(!1)},j)},_isIndexRendered(r){return r>=this._virtualStart&&r<=this._virtualEnd},_getPhysicalIndex(r){return(this._physicalStart+(r-this._virtualStart))%this._physicalCount},_clamp(r,t,e){return Math.min(e,Math.max(t,r))},_debounce(r,t,e){this._debouncers||(this._debouncers={}),this._debouncers[r]=C.debounce(this._debouncers[r],e,t.bind(this)),ls(this._debouncers[r])}};const Ca=1e5,at=1e3;class Cs{constructor({createElements:t,updateElement:e,scrollTarget:i,scrollContainer:s,elementsContainer:o,reorderElements:a}){this.isAttached=!0,this._vidxOffset=0,this.createElements=t,this.updateElement=e,this.scrollTarget=i,this.scrollContainer=s,this.elementsContainer=o||s,this.reorderElements=a,this._maxPages=1.3,this.__placeholderHeight=200,this.__elementHeightQueue=Array(10),this.timeouts={SCROLL_REORDER:500,IGNORE_WHEEL:500,FIX_INVALID_ITEM_POSITIONING:100},this.__resizeObserver=new ResizeObserver(()=>this._resizeHandler()),getComputedStyle(this.scrollTarget).overflow==="visible"&&(this.scrollTarget.style.overflow="auto"),getComputedStyle(this.scrollContainer).position==="static"&&(this.scrollContainer.style.position="relative"),this.__resizeObserver.observe(this.scrollTarget),this.scrollTarget.addEventListener("scroll",()=>this._scrollHandler()),new ResizeObserver(([{contentRect:l}])=>{const d=l.width===0&&l.height===0;!d&&this.__scrollTargetHidden&&this.scrollTarget.scrollTop!==this._scrollPosition&&(this.scrollTarget.scrollTop=this._scrollPosition),this.__scrollTargetHidden=d}).observe(this.scrollTarget),this._scrollLineHeight=this._getScrollLineHeight(),this.scrollTarget.addEventListener("wheel",l=>this.__onWheel(l)),this.scrollTarget.addEventListener("virtualizer-element-focused",l=>this.__onElementFocused(l)),this.elementsContainer.addEventListener("focusin",()=>{this.scrollTarget.dispatchEvent(new CustomEvent("virtualizer-element-focused",{detail:{element:this.__getFocusedElement()}}))}),this.reorderElements&&(this.scrollTarget.addEventListener("mousedown",()=>{this.__mouseDown=!0}),this.scrollTarget.addEventListener("mouseup",()=>{this.__mouseDown=!1,this.__pendingReorder&&this.__reorderElements()}))}get scrollOffset(){return 0}get adjustedFirstVisibleIndex(){return this.firstVisibleIndex+this._vidxOffset}get adjustedLastVisibleIndex(){return this.lastVisibleIndex+this._vidxOffset}get _maxVirtualIndexOffset(){return this.size-this._virtualCount}__hasPlaceholders(){return this.__getVisibleElements().some(t=>t.__virtualizerPlaceholder)}scrollToIndex(t){if(typeof t!="number"||isNaN(t)||this.size===0||!this.scrollTarget.offsetHeight)return;delete this.__pendingScrollToIndex,this._physicalCount<=3&&this.flush(),t=this._clamp(t,0,this.size-1);const e=this.__getVisibleElements().length;let i=Math.floor(t/this.size*this._virtualCount);this._virtualCount-i<e?(i=this._virtualCount-(this.size-t),this._vidxOffset=this._maxVirtualIndexOffset):i<e?t<at?(i=t,this._vidxOffset=0):(i=at,this._vidxOffset=t-i):this._vidxOffset=t-i,this.__skipNextVirtualIndexAdjust=!0,super.scrollToIndex(i),this.adjustedFirstVisibleIndex!==t&&this._scrollTop<this._maxScrollTop&&!this.grid&&(this._scrollTop-=this.__getIndexScrollOffset(t)||0),this._scrollHandler(),this.__hasPlaceholders()&&(this.__pendingScrollToIndex=t)}flush(){this.scrollTarget.offsetHeight!==0&&(this._resizeHandler(),Se(),this._scrollHandler(),this.__fixInvalidItemPositioningDebouncer&&this.__fixInvalidItemPositioningDebouncer.flush(),this.__scrollReorderDebouncer&&this.__scrollReorderDebouncer.flush(),this.__debouncerWheelAnimationFrame&&this.__debouncerWheelAnimationFrame.flush())}hostConnected(){this.scrollTarget.offsetParent&&this.scrollTarget.scrollTop!==this._scrollPosition&&(this.scrollTarget.scrollTop=this._scrollPosition)}update(t=0,e=this.size-1){const i=[];this.__getVisibleElements().forEach(s=>{s.__virtualIndex>=t&&s.__virtualIndex<=e&&(this.__updateElement(s,s.__virtualIndex,!0),i.push(s))}),this.__afterElementsUpdated(i)}_updateMetrics(t){Se();let e=0,i=0;const s=this._physicalAverageCount,o=this._physicalAverage;this._iterateItems((a,n)=>{i+=this._physicalSizes[a];const l=this._physicalSizes[a];this._physicalSizes[a]=Math.ceil(this.__getBorderBoxHeight(this._physicalItems[a])),this._physicalSizes[a]!==l&&(this.__resizeObserver.unobserve(this._physicalItems[a]),this.__resizeObserver.observe(this._physicalItems[a])),e+=this._physicalSizes[a],this._physicalAverageCount+=this._physicalSizes[a]?1:0},t),this._physicalSize=this._physicalSize+e-i,this._physicalAverageCount!==s&&(this._physicalAverage=Math.round((o*s+e)/this._physicalAverageCount))}__getBorderBoxHeight(t){const e=getComputedStyle(t),i=parseFloat(e.height)||0;if(e.boxSizing==="border-box")return i;const s=parseFloat(e.paddingBottom)||0,o=parseFloat(e.paddingTop)||0,a=parseFloat(e.borderBottomWidth)||0,n=parseFloat(e.borderTopWidth)||0;return i+s+o+a+n}__updateElement(t,e,i){t.__virtualizerPlaceholder&&(t.style.paddingTop="",t.style.opacity="",t.__virtualizerPlaceholder=!1),!this.__preventElementUpdates&&(t.__lastUpdatedIndex!==e||i)&&(this.updateElement(t,e),t.__lastUpdatedIndex=e)}__afterElementsUpdated(t){t.forEach(e=>{const i=e.offsetHeight;if(i===0)e.style.paddingTop=`${this.__placeholderHeight}px`,e.style.opacity="0",e.__virtualizerPlaceholder=!0,this.__placeholderClearDebouncer=C.debounce(this.__placeholderClearDebouncer,j,()=>this._resizeHandler());else{this.__elementHeightQueue.push(i),this.__elementHeightQueue.shift();const s=this.__elementHeightQueue.filter(o=>o!==void 0);this.__placeholderHeight=Math.round(s.reduce((o,a)=>o+a,0)/s.length)}}),this.__pendingScrollToIndex!==void 0&&!this.__hasPlaceholders()&&this.scrollToIndex(this.__pendingScrollToIndex)}__getIndexScrollOffset(t){const e=this.__getVisibleElements().find(i=>i.__virtualIndex===t);return e?this.scrollTarget.getBoundingClientRect().top-e.getBoundingClientRect().top:void 0}get size(){return this.__size}set size(t){if(t===this.size)return;this.__fixInvalidItemPositioningDebouncer&&this.__fixInvalidItemPositioningDebouncer.cancel(),this._debouncers&&this._debouncers._increasePoolIfNeeded&&this._debouncers._increasePoolIfNeeded.cancel(),this.__preventElementUpdates=!0;let e,i;if(t>0&&(e=this.adjustedFirstVisibleIndex,i=this.__getIndexScrollOffset(e)),this.__size=t,this._itemsChanged({path:"items"}),Se(),t>0){e=Math.min(e,t-1),this.scrollToIndex(e);const s=this.__getIndexScrollOffset(e);i!==void 0&&s!==void 0&&(this._scrollTop+=i-s)}this.__preventElementUpdates=!1,this._isVisible||this._assignModels(),this.elementsContainer.children.length||requestAnimationFrame(()=>this._resizeHandler()),this._resizeHandler(),Se(),this._debounce("_update",this._update,O)}get _scrollTop(){return this.scrollTarget.scrollTop}set _scrollTop(t){this.scrollTarget.scrollTop=t}get items(){return{length:Math.min(this.size,Ca)}}get offsetHeight(){return this.scrollTarget.offsetHeight}get $(){return{items:this.scrollContainer}}updateViewportBoundaries(){const t=window.getComputedStyle(this.scrollTarget);this._scrollerPaddingTop=this.scrollTarget===this?0:parseInt(t["padding-top"],10),this._isRTL=t.direction==="rtl",this._viewportWidth=this.elementsContainer.offsetWidth,this._viewportHeight=this.scrollTarget.offsetHeight,this._scrollPageHeight=this._viewportHeight-this._scrollLineHeight,this.grid&&this._updateGridMetrics()}setAttribute(){}_createPool(t){const e=this.createElements(t),i=document.createDocumentFragment();return e.forEach(s=>{s.style.position="absolute",i.appendChild(s),this.__resizeObserver.observe(s)}),this.elementsContainer.appendChild(i),e}_assignModels(t){const e=[];this._iterateItems((i,s)=>{const o=this._physicalItems[i];o.hidden=s>=this.size,o.hidden?delete o.__lastUpdatedIndex:(o.__virtualIndex=s+(this._vidxOffset||0),this.__updateElement(o,o.__virtualIndex),e.push(o))},t),this.__afterElementsUpdated(e)}_isClientFull(){return setTimeout(()=>{this.__clientFull=!0}),this.__clientFull||super._isClientFull()}translate3d(t,e,i,s){s.style.transform=`translateY(${e})`}toggleScrollListener(){}__getFocusedElement(t=this.__getVisibleElements()){return t.find(e=>e.contains(this.elementsContainer.getRootNode().activeElement)||e.contains(this.scrollTarget.getRootNode().activeElement))}__nextFocusableSiblingMissing(t,e){return e.indexOf(t)===e.length-1&&this.size>t.__virtualIndex+1}__previousFocusableSiblingMissing(t,e){return e.indexOf(t)===0&&t.__virtualIndex>0}__onElementFocused(t){if(!this.reorderElements)return;const e=t.detail.element;if(!e)return;const i=this.__getVisibleElements();(this.__previousFocusableSiblingMissing(e,i)||this.__nextFocusableSiblingMissing(e,i))&&this.flush();const s=this.__getVisibleElements();this.__nextFocusableSiblingMissing(e,s)?(this._scrollTop+=Math.ceil(e.getBoundingClientRect().bottom)-Math.floor(this.scrollTarget.getBoundingClientRect().bottom-1),this.flush()):this.__previousFocusableSiblingMissing(e,s)&&(this._scrollTop-=Math.ceil(this.scrollTarget.getBoundingClientRect().top+1)-Math.floor(e.getBoundingClientRect().top),this.flush())}_scrollHandler(){if(this.scrollTarget.offsetHeight===0)return;this._adjustVirtualIndexOffset(this._scrollTop-(this.__previousScrollTop||0));const t=this.scrollTarget.scrollTop-this._scrollPosition;if(super._scrollHandler(),this._physicalCount!==0){const e=t>=0,i=this._getReusables(!e);i.indexes.length&&(this._physicalTop=i.physicalTop,e?(this._virtualStart-=i.indexes.length,this._physicalStart-=i.indexes.length):(this._virtualStart+=i.indexes.length,this._physicalStart+=i.indexes.length),this._resizeHandler())}t&&(this.__fixInvalidItemPositioningDebouncer=C.debounce(this.__fixInvalidItemPositioningDebouncer,G.after(this.timeouts.FIX_INVALID_ITEM_POSITIONING),()=>this.__fixInvalidItemPositioning())),this.reorderElements&&(this.__scrollReorderDebouncer=C.debounce(this.__scrollReorderDebouncer,G.after(this.timeouts.SCROLL_REORDER),()=>this.__reorderElements())),this.__previousScrollTop=this._scrollTop,this._scrollTop===0&&this.firstVisibleIndex!==0&&Math.abs(t)>0&&this.scrollToIndex(0)}_resizeHandler(){super._resizeHandler();const t=this.adjustedLastVisibleIndex===this.size-1,e=this._physicalTop-this._scrollPosition;if(t&&e>0){const i=Math.ceil(e/this._physicalAverage);this._virtualStart=Math.max(0,this._virtualStart-i),this._physicalStart=Math.max(0,this._physicalStart-i),super.scrollToIndex(this._virtualCount-1),this.scrollTarget.scrollTop=this.scrollTarget.scrollHeight-this.scrollTarget.clientHeight}}__fixInvalidItemPositioning(){if(!this.scrollTarget.isConnected)return;const t=this._physicalTop>this._scrollTop,e=this._physicalBottom<this._scrollBottom,i=this.adjustedFirstVisibleIndex===0,s=this.adjustedLastVisibleIndex===this.size-1;if(t&&!i||e&&!s){const o=e,a=this._ratio;this._ratio=0,this._scrollPosition=this._scrollTop+(o?-1:1),this._scrollHandler(),this._ratio=a}}__onWheel(t){if(t.ctrlKey||this._hasScrolledAncestor(t.target,t.deltaX,t.deltaY))return;let e=t.deltaY;if(t.deltaMode===WheelEvent.DOM_DELTA_LINE?e*=this._scrollLineHeight:t.deltaMode===WheelEvent.DOM_DELTA_PAGE&&(e*=this._scrollPageHeight),this._deltaYAcc||(this._deltaYAcc=0),this._wheelAnimationFrame){this._deltaYAcc+=e,t.preventDefault();return}e+=this._deltaYAcc,this._deltaYAcc=0,this._wheelAnimationFrame=!0,this.__debouncerWheelAnimationFrame=C.debounce(this.__debouncerWheelAnimationFrame,j,()=>{this._wheelAnimationFrame=!1});const i=Math.abs(t.deltaX)+Math.abs(e);this._canScroll(this.scrollTarget,t.deltaX,e)?(t.preventDefault(),this.scrollTarget.scrollTop+=e,this.scrollTarget.scrollLeft+=t.deltaX,this._hasResidualMomentum=!0,this._ignoreNewWheel=!0,this._debouncerIgnoreNewWheel=C.debounce(this._debouncerIgnoreNewWheel,G.after(this.timeouts.IGNORE_WHEEL),()=>{this._ignoreNewWheel=!1})):this._hasResidualMomentum&&i<=this._previousMomentum||this._ignoreNewWheel?t.preventDefault():i>this._previousMomentum&&(this._hasResidualMomentum=!1),this._previousMomentum=i}_hasScrolledAncestor(t,e,i){if(t===this.scrollTarget||t===this.scrollTarget.getRootNode().host)return!1;if(this._canScroll(t,e,i)&&["auto","scroll"].indexOf(getComputedStyle(t).overflow)!==-1)return!0;if(t!==this&&t.parentElement)return this._hasScrolledAncestor(t.parentElement,e,i)}_canScroll(t,e,i){return i>0&&t.scrollTop<t.scrollHeight-t.offsetHeight||i<0&&t.scrollTop>0||e>0&&t.scrollLeft<t.scrollWidth-t.offsetWidth||e<0&&t.scrollLeft>0}_increasePoolIfNeeded(t){if(this._physicalCount>2&&this._physicalAverage>0&&t>0){const i=Math.ceil(this._optPhysicalSize/this._physicalAverage)-this._physicalCount;super._increasePoolIfNeeded(Math.max(t,Math.min(100,i)))}else super._increasePoolIfNeeded(t)}get _optPhysicalSize(){const t=super._optPhysicalSize;return t<=0||this.__hasPlaceholders()?t:t+this.__getItemHeightBuffer()}__getItemHeightBuffer(){if(this._physicalCount===0)return 0;const t=Math.ceil(this._viewportHeight*(this._maxPages-1)/2),e=Math.max(...this._physicalSizes);return e>Math.min(...this._physicalSizes)?Math.max(0,e-t):0}_getScrollLineHeight(){const t=document.createElement("div");t.style.fontSize="initial",t.style.display="none",document.body.appendChild(t);const e=window.getComputedStyle(t).fontSize;return document.body.removeChild(t),e?window.parseInt(e):void 0}__getVisibleElements(){return Array.from(this.elementsContainer.children).filter(t=>!t.hidden)}__reorderElements(){if(this.__mouseDown){this.__pendingReorder=!0;return}this.__pendingReorder=!1;const t=this._virtualStart+(this._vidxOffset||0),e=this.__getVisibleElements(),i=this.__getFocusedElement(e)||e[0];if(!i)return;const s=i.__virtualIndex-t,o=e.indexOf(i)-s;if(o>0)for(let a=0;a<o;a++)this.elementsContainer.appendChild(e[a]);else if(o<0)for(let a=e.length+o;a<e.length;a++)this.elementsContainer.insertBefore(e[a],e[0]);if($t){const{transform:a}=this.scrollTarget.style;this.scrollTarget.style.transform="translateZ(0)",setTimeout(()=>{this.scrollTarget.style.transform=a})}}_adjustVirtualIndexOffset(t){const e=this._maxVirtualIndexOffset;if(this._virtualCount>=this.size)this._vidxOffset=0;else if(this.__skipNextVirtualIndexAdjust)this.__skipNextVirtualIndexAdjust=!1;else if(Math.abs(t)>1e4){const i=this._scrollTop/(this.scrollTarget.scrollHeight-this.scrollTarget.clientHeight);this._vidxOffset=Math.round(i*e)}else{const i=this._vidxOffset,s=at,o=100;this._scrollTop===0?(this._vidxOffset=0,i!==this._vidxOffset&&super.scrollToIndex(0)):this.firstVisibleIndex<s&&this._vidxOffset>0&&(this._vidxOffset-=Math.min(this._vidxOffset,o),super.scrollToIndex(this.firstVisibleIndex+(i-this._vidxOffset))),this._scrollTop>=this._maxScrollTop&&this._maxScrollTop>0?(this._vidxOffset=e,i!==this._vidxOffset&&super.scrollToIndex(this._virtualCount-1)):this.firstVisibleIndex>this._virtualCount-s&&this._vidxOffset<e&&(this._vidxOffset+=Math.min(e-this._vidxOffset,o),super.scrollToIndex(this.firstVisibleIndex-(this._vidxOffset-i)))}}}Object.setPrototypeOf(Cs.prototype,va);class wa{constructor(t){this.__adapter=new Cs(t)}get firstVisibleIndex(){return this.__adapter.adjustedFirstVisibleIndex}get lastVisibleIndex(){return this.__adapter.adjustedLastVisibleIndex}get size(){return this.__adapter.size}set size(t){this.__adapter.size=t}scrollToIndex(t){this.__adapter.scrollToIndex(t)}update(t=0,e=this.size-1){this.__adapter.update(t,e)}flush(){this.__adapter.flush()}hostConnected(){this.__adapter.hostConnected()}}const xa=r=>class extends r{static get properties(){return{accessibleName:{type:String}}}static get observers(){return["_a11yUpdateGridSize(size, _columnTree)"]}_a11yGetHeaderRowCount(e){return e.filter(i=>i.some(s=>s.headerRenderer||s.path&&s.header!==null||s.header)).length}_a11yGetFooterRowCount(e){return e.filter(i=>i.some(s=>s.headerRenderer)).length}_a11yUpdateGridSize(e,i){if(e===void 0||i===void 0)return;const s=i[i.length-1];this.$.table.setAttribute("aria-rowcount",e+this._a11yGetHeaderRowCount(i)+this._a11yGetFooterRowCount(i)),this.$.table.setAttribute("aria-colcount",s&&s.length||0),this._a11yUpdateHeaderRows(),this._a11yUpdateFooterRows()}_a11yUpdateHeaderRows(){T(this.$.header,(e,i)=>{e.setAttribute("aria-rowindex",i+1)})}_testIdUpdateHeaderRows(){T(this.$.header,(e,i)=>{e.setAttribute("data-testid",`rowindex-${i+1}`)})}_a11yUpdateFooterRows(){T(this.$.footer,(e,i)=>{e.setAttribute("aria-rowindex",this._a11yGetHeaderRowCount(this._columnTree)+this.size+i+1)})}_testIdUpdateFooterRows(){T(this.$.footer,(e,i)=>{e.setAttribute("data-testid",`rowindex-${this._a11yGetHeaderRowCount(this._columnTree)+this.size+i+1}`)})}_a11yUpdateRowRowindex(e,i){e.setAttribute("aria-rowindex",i+this._a11yGetHeaderRowCount(this._columnTree)+1)}_testIdUpdateRowRowindex(e,i){e.setAttribute("data-testid",`rowindex-${i+this._a11yGetHeaderRowCount(this._columnTree)+1}`)}_a11yUpdateRowSelected(e,i){e.setAttribute("aria-selected",!!i),pe(e,s=>{s.setAttribute("aria-selected",!!i)})}_a11yUpdateRowExpanded(e){this.__isRowExpandable(e)?e.setAttribute("aria-expanded","false"):this.__isRowCollapsible(e)?e.setAttribute("aria-expanded","true"):e.removeAttribute("aria-expanded")}_a11yUpdateRowLevel(e,i){i>0||this.__isRowCollapsible(e)||this.__isRowExpandable(e)?e.setAttribute("aria-level",i+1):e.removeAttribute("aria-level")}_a11ySetRowDetailsCell(e,i){pe(e,s=>{s!==i&&s.setAttribute("aria-controls",i.id)})}_a11yUpdateCellColspan(e,i){e.setAttribute("aria-colspan",Number(i))}_a11yUpdateSorters(){Array.from(this.querySelectorAll("vaadin-grid-sorter")).forEach(e=>{let i=e.parentNode;for(;i&&i.localName!=="vaadin-grid-cell-content";)i=i.parentNode;i&&i.assignedSlot&&i.assignedSlot.parentNode.setAttribute("aria-sort",{asc:"ascending",desc:"descending"}[String(e.direction)]||"none")})}};let Bt=!1;window.addEventListener("keydown",()=>{Bt=!0},{capture:!0});window.addEventListener("mousedown",()=>{Bt=!1},{capture:!0});function Sa(){return Bt}function Aa(r){const t=r.style;if(t.visibility==="hidden"||t.display==="none")return!0;const e=window.getComputedStyle(r);return e.visibility==="hidden"||e.display==="none"}function xt(r){return r.checkVisibility?!r.checkVisibility({visibilityProperty:!0}):r.offsetParent===null&&r.clientWidth===0&&r.clientHeight===0?!0:Aa(r)}function Ea(r){return r.matches('[tabindex="-1"]')?!1:r.matches("input, select, textarea, button, object")?r.matches(":not([disabled])"):r.matches("a[href], area[href], iframe, [tabindex], [contentEditable]")}const Ta=r=>r.offsetParent&&!r.part.contains("body-cell")&&Ea(r)&&getComputedStyle(r).visibility!=="hidden",Pa=r=>class extends r{static get properties(){return{activeItem:{type:Object,notify:!0,value:null,sync:!0}}}ready(){super.ready(),this.$.scroller.addEventListener("click",this._onClick.bind(this)),this.addEventListener("cell-activate",this._activateItem.bind(this)),this.addEventListener("row-activate",this._activateItem.bind(this))}_activateItem(e){const i=e.detail.model,s=i?i.item:null;s&&(this.activeItem=this._itemsEqual(this.activeItem,s)?null:s)}_shouldPreventCellActivationOnClick(e){const{cell:i}=this._getGridEventLocation(e);return e.defaultPrevented||!i||i.getAttribute("part").includes("details-cell")||i===this.$.emptystatecell||i._content.contains(this.getRootNode().activeElement)||this._isFocusable(e.target)||e.target instanceof HTMLLabelElement}_onClick(e){if(this._shouldPreventCellActivationOnClick(e))return;const{cell:i}=this._getGridEventLocation(e);i&&this.dispatchEvent(new CustomEvent("cell-activate",{detail:{model:this.__getRowModel(i.parentElement)}}))}_isFocusable(e){return Ta(e)}};function ae(r,t){return r.split(".").reduce((e,i)=>e[i],t)}function bi(r,t,e){if(e.length===0)return!1;let i=!0;return r.forEach(({path:s})=>{if(!s||s.indexOf(".")===-1)return;const o=s.replace(/\.[^.]*$/u,"");ae(o,e[0])===void 0&&(console.warn(`Path "${s}" used for ${t} does not exist in all of the items, ${t} is disabled.`),i=!1)}),i}function qe(r){return[void 0,null].indexOf(r)>=0?"":isNaN(r)?r.toString():r}function yi(r,t){return r=qe(r),t=qe(t),r<t?-1:r>t?1:0}function Ia(r,t){return r.sort((e,i)=>t.map(s=>s.direction==="asc"?yi(ae(s.path,e),ae(s.path,i)):s.direction==="desc"?yi(ae(s.path,i),ae(s.path,e)):0).reduce((s,o)=>s!==0?s:o,0))}function za(r,t){return r.filter(e=>t.every(i=>{const s=qe(ae(i.path,e)),o=qe(i.value).toString().toLowerCase();return s.toString().toLowerCase().includes(o)}))}const Ra=r=>(t,e)=>{let i=r?[...r]:[];t.filters&&bi(t.filters,"filtering",i)&&(i=za(i,t.filters)),Array.isArray(t.sortOrders)&&t.sortOrders.length&&bi(t.sortOrders,"sorting",i)&&(i=Ia(i,t.sortOrders));const s=Math.min(i.length,t.pageSize),o=t.page*s,a=o+s,n=i.slice(o,a);e(n,i.length)};const Na=r=>class extends r{static get properties(){return{items:{type:Array,sync:!0}}}static get observers(){return["__dataProviderOrItemsChanged(dataProvider, items, isAttached, items.*)"]}__setArrayDataProvider(e){const i=Ra(this.items);i.__items=e,this._arrayDataProvider=i,this.size=e.length,this.dataProvider=i}_onDataProviderPageReceived(){super._onDataProviderPageReceived(),this._arrayDataProvider&&(this.size=this._flatSize)}__dataProviderOrItemsChanged(e,i,s){s&&(this._arrayDataProvider?e!==this._arrayDataProvider?(this._arrayDataProvider=void 0,this.items=void 0):i?this._arrayDataProvider.__items===i?this.clearCache():this.__setArrayDataProvider(i):(this._arrayDataProvider=void 0,this.dataProvider=void 0,this.size=0,this.clearCache()):i&&this.__setArrayDataProvider(i))}};const ka=r=>class extends r{static get properties(){return{__pendingRecalculateColumnWidths:{type:Boolean,value:!0}}}static get observers(){return["__dataProviderChangedAutoWidth(dataProvider)","__columnTreeChangedAutoWidth(_columnTree)","__flatSizeChangedAutoWidth(_flatSize)"]}constructor(){super(),this.addEventListener("animationend",this.__onAnimationEndAutoWidth)}__onAnimationEndAutoWidth(t){t.animationName.indexOf("vaadin-grid-appear")===0&&this.__tryToRecalculateColumnWidthsIfPending()}__dataProviderChangedAutoWidth(t){this.__hasHadRenderedRowsForColumnWidthCalculation||this.recalculateColumnWidths()}__columnTreeChangedAutoWidth(t){queueMicrotask(()=>this.recalculateColumnWidths())}__flatSizeChangedAutoWidth(){requestAnimationFrame(()=>this.__tryToRecalculateColumnWidthsIfPending())}_onDataProviderPageLoaded(){super._onDataProviderPageLoaded(),this.__tryToRecalculateColumnWidthsIfPending()}_updateFrozenColumn(){super._updateFrozenColumn(),this.__tryToRecalculateColumnWidthsIfPending()}__getIntrinsicWidth(t){return this.__intrinsicWidthCache.has(t)||this.__calculateAndCacheIntrinsicWidths([t]),this.__intrinsicWidthCache.get(t)}__getDistributedWidth(t,e){if(t==null||t===this)return 0;const i=Math.max(this.__getIntrinsicWidth(t),this.__getDistributedWidth((t.assignedSlot||t).parentElement,t));if(!e)return i;const s=t,o=i,a=s._visibleChildColumns.map(c=>this.__getIntrinsicWidth(c)).reduce((c,h)=>c+h,0),n=Math.max(0,o-a),d=this.__getIntrinsicWidth(e)/a*n;return this.__getIntrinsicWidth(e)+d}_recalculateColumnWidths(){this.__virtualizer.flush(),[...this.$.header.children,...this.$.footer.children].forEach(s=>{s.__debounceUpdateHeaderFooterRowVisibility&&s.__debounceUpdateHeaderFooterRowVisibility.flush()}),this.__hasHadRenderedRowsForColumnWidthCalculation||=this._getRenderedRows().length>0,this.__intrinsicWidthCache=new Map;const t=this._firstVisibleIndex,e=this._lastVisibleIndex;this.__viewportRowsCache=this._getRenderedRows().filter(s=>s.index>=t&&s.index<=e);const i=this.__getAutoWidthColumns();this.__calculateAndCacheIntrinsicWidths(i),i.forEach(s=>{s.width=`${this.__getDistributedWidth(s)}px`})}__setVisibleCellContentAutoWidth(t,e){t._allCells.filter(i=>this.$.items.contains(i)?this.__viewportRowsCache.includes(i.parentElement):!0).forEach(i=>{i.__measuringAutoWidth=e,i.__measuringAutoWidth?(i.__originalWidth=i.style.width,i.style.width="auto",i.style.position="absolute"):(i.style.width=i.__originalWidth,delete i.__originalWidth,i.style.position="")}),e?this.$.scroller.setAttribute("measuring-auto-width",""):this.$.scroller.removeAttribute("measuring-auto-width")}__getAutoWidthCellsMaxWidth(t){return t._allCells.reduce((e,i)=>i.__measuringAutoWidth?Math.max(e,i.offsetWidth+1):e,0)}__calculateAndCacheIntrinsicWidths(t){t.forEach(e=>this.__setVisibleCellContentAutoWidth(e,!0)),t.forEach(e=>{const i=this.__getAutoWidthCellsMaxWidth(e);this.__intrinsicWidthCache.set(e,i)}),t.forEach(e=>this.__setVisibleCellContentAutoWidth(e,!1))}recalculateColumnWidths(){if(!this.__isReadyForColumnWidthCalculation()){this.__pendingRecalculateColumnWidths=!0;return}this._recalculateColumnWidths()}__tryToRecalculateColumnWidthsIfPending(){this.__pendingRecalculateColumnWidths&&(this.__pendingRecalculateColumnWidths=!1,this.recalculateColumnWidths())}__getAutoWidthColumns(){return this._getColumns().filter(t=>!t.hidden&&t.autoWidth)}__isReadyForColumnWidthCalculation(){if(!this._columnTree)return!1;const t=this.__getAutoWidthColumns().filter(o=>!customElements.get(o.localName));if(t.length)return Promise.all(t.map(o=>customElements.whenDefined(o.localName))).then(()=>{this.__tryToRecalculateColumnWidthsIfPending()}),!1;const e=[...this.$.items.children].some(o=>o.index===void 0),i=this._debouncerHiddenChanged&&this._debouncerHiddenChanged.isActive(),s=this.__debounceUpdateFrozenColumn&&this.__debounceUpdateFrozenColumn.isActive();return!this._dataProviderController.isLoading()&&!e&&!xt(this)&&!i&&!s}};const Oa=r=>r,ws=typeof document.head.style.touchAction=="string",St="__polymerGestures",nt="__polymerGesturesHandled",At="__polymerGesturesTouchAction",vi=25,Ci=5,Fa=2,Va=["mousedown","mousemove","mouseup","click"],Ma=[0,1,4,2],Da=(function(){try{return new MouseEvent("test",{buttons:1}).buttons===1}catch{return!1}})();function Ht(r){return Va.indexOf(r)>-1}let La=!1;(function(){try{const r=Object.defineProperty({},"passive",{get(){La=!0}});window.addEventListener("test",null,r),window.removeEventListener("test",null,r)}catch{}})();function $a(r){Ht(r)}const Ba=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/u),Ha={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function se(r){const t=r.type;if(!Ht(t))return!1;if(t==="mousemove"){let i=r.buttons===void 0?1:r.buttons;return r instanceof window.MouseEvent&&!Da&&(i=Ma[r.which]||0),!!(i&1)}return(r.button===void 0?0:r.button)===0}function Ua(r){if(r.type==="click"){if(r.detail===0)return!0;const t=W(r);if(!t.nodeType||t.nodeType!==Node.ELEMENT_NODE)return!0;const e=t.getBoundingClientRect(),i=r.pageX,s=r.pageY;return!(i>=e.left&&i<=e.right&&s>=e.top&&s<=e.bottom)}return!1}const $={touch:{x:0,y:0,id:-1,scrollDecided:!1}};function Ga(r){let t="auto";const e=Ss(r);for(let i=0,s;i<e.length;i++)if(s=e[i],s[At]){t=s[At];break}return t}function xs(r,t,e){r.movefn=t,r.upfn=e,document.addEventListener("mousemove",t),document.addEventListener("mouseup",e)}function he(r){document.removeEventListener("mousemove",r.movefn),document.removeEventListener("mouseup",r.upfn),r.movefn=null,r.upfn=null}const Ss=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:r=>r.composedPath&&r.composedPath()||[],Ut={},te=[];function Wa(r,t){let e=document.elementFromPoint(r,t),i=e;for(;i&&i.shadowRoot&&!window.ShadyDOM;){const s=i;if(i=i.shadowRoot.elementFromPoint(r,t),s===i)break;i&&(e=i)}return e}function W(r){const t=Ss(r);return t.length>0?t[0]:r.target}function ja(r){const t=r.type,i=r.currentTarget[St];if(!i)return;const s=i[t];if(!s)return;if(!r[nt]&&(r[nt]={},t.startsWith("touch"))){const a=r.changedTouches[0];if(t==="touchstart"&&r.touches.length===1&&($.touch.id=a.identifier),$.touch.id!==a.identifier)return;ws||(t==="touchstart"||t==="touchmove")&&qa(r)}const o=r[nt];if(!o.skip){for(let a=0,n;a<te.length;a++)n=te[a],s[n.name]&&!o[n.name]&&n.flow&&n.flow.start.indexOf(r.type)>-1&&n.reset&&n.reset();for(let a=0,n;a<te.length;a++)n=te[a],s[n.name]&&!o[n.name]&&(o[n.name]=!0,n[t](r))}}function qa(r){const t=r.changedTouches[0],e=r.type;if(e==="touchstart")$.touch.x=t.clientX,$.touch.y=t.clientY,$.touch.scrollDecided=!1;else if(e==="touchmove"){if($.touch.scrollDecided)return;$.touch.scrollDecided=!0;const i=Ga(r);let s=!1;const o=Math.abs($.touch.x-t.clientX),a=Math.abs($.touch.y-t.clientY);r.cancelable&&(i==="none"?s=!0:i==="pan-x"?s=a>o:i==="pan-y"&&(s=o>a)),s?r.preventDefault():Ye("track")}}function As(r,t,e){return Ut[t]?(Ya(r,t,e),!0):!1}function Ya(r,t,e){const i=Ut[t],s=i.deps,o=i.name;let a=r[St];a||(r[St]=a={});for(let n=0,l,d;n<s.length;n++)l=s[n],!(Ba&&Ht(l)&&l!=="click")&&(d=a[l],d||(a[l]=d={_count:0}),d._count===0&&r.addEventListener(l,ja,$a(l)),d[o]=(d[o]||0)+1,d._count=(d._count||0)+1);r.addEventListener(t,e),i.touchAction&&Ja(r,i.touchAction)}function Gt(r){te.push(r),r.emits.forEach(t=>{Ut[t]=r})}function Ka(r){for(let t=0,e;t<te.length;t++){e=te[t];for(let i=0,s;i<e.emits.length;i++)if(s=e.emits[i],s===r)return e}return null}function Ja(r,t){ws&&r instanceof HTMLElement&&O.run(()=>{r.style.touchAction=t}),r[At]=t}function Wt(r,t,e){const i=new Event(t,{bubbles:!0,cancelable:!0,composed:!0});if(i.detail=e,Oa(r).dispatchEvent(i),i.defaultPrevented){const s=e.preventer||e.sourceEvent;s&&s.preventDefault&&s.preventDefault()}}function Ye(r){const t=Ka(r);t.info&&(t.info.prevent=!0)}Gt({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset(){he(this.info)},mousedown(r){if(!se(r))return;const t=W(r),e=this,i=o=>{se(o)||(ve("up",t,o),he(e.info))},s=o=>{se(o)&&ve("up",t,o),he(e.info)};xs(this.info,i,s),ve("down",t,r)},touchstart(r){ve("down",W(r),r.changedTouches[0],r)},touchend(r){ve("up",W(r),r.changedTouches[0],r)}});function ve(r,t,e,i){t&&Wt(t,r,{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:i,prevent(s){return Ye(s)}})}Gt({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove(r){this.moves.length>Fa&&this.moves.shift(),this.moves.push(r)},movefn:null,upfn:null,prevent:!1},reset(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,he(this.info)},mousedown(r){if(!se(r))return;const t=W(r),e=this,i=o=>{const a=o.clientX,n=o.clientY;wi(e.info,a,n)&&(e.info.state=e.info.started?o.type==="mouseup"?"end":"track":"start",e.info.state==="start"&&Ye("tap"),e.info.addMove({x:a,y:n}),se(o)||(e.info.state="end",he(e.info)),t&&lt(e.info,t,o),e.info.started=!0)},s=o=>{e.info.started&&i(o),he(e.info)};xs(this.info,i,s),this.info.x=r.clientX,this.info.y=r.clientY},touchstart(r){const t=r.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchmove(r){const t=W(r),e=r.changedTouches[0],i=e.clientX,s=e.clientY;wi(this.info,i,s)&&(this.info.state==="start"&&Ye("tap"),this.info.addMove({x:i,y:s}),lt(this.info,t,e),this.info.state="track",this.info.started=!0)},touchend(r){const t=W(r),e=r.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:e.clientX,y:e.clientY}),lt(this.info,t,e))}});function wi(r,t,e){if(r.prevent)return!1;if(r.started)return!0;const i=Math.abs(r.x-t),s=Math.abs(r.y-e);return i>=Ci||s>=Ci}function lt(r,t,e){if(!t)return;const i=r.moves[r.moves.length-2],s=r.moves[r.moves.length-1],o=s.x-r.x,a=s.y-r.y;let n,l=0;i&&(n=s.x-i.x,l=s.y-i.y),Wt(t,"track",{state:r.state,x:e.clientX,y:e.clientY,dx:o,dy:a,ddx:n,ddy:l,sourceEvent:e,hover(){return Wa(e.clientX,e.clientY)}})}Gt({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown(r){se(r)&&(this.info.x=r.clientX,this.info.y=r.clientY)},click(r){se(r)&&xi(this.info,r)},touchstart(r){const t=r.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchend(r){xi(this.info,r.changedTouches[0],r)}});function xi(r,t,e){const i=Math.abs(t.clientX-r.x),s=Math.abs(t.clientY-r.y),o=W(e||t);!o||Ha[o.localName]&&o.hasAttribute("disabled")||(isNaN(i)||isNaN(s)||i<=vi&&s<=vi||Ua(t))&&(r.prevent||Wt(o,"tap",{x:t.clientX,y:t.clientY,sourceEvent:t,preventer:e}))}const Xa=r=>class extends r{static get properties(){return{columnReorderingAllowed:{type:Boolean,value:!1},_orderBaseScope:{type:Number,value:1e7}}}static get observers(){return["_updateOrders(_columnTree)"]}ready(){super.ready(),As(this,"track",this._onTrackEvent),this._reorderGhost=this.shadowRoot.querySelector('[part="reorder-ghost"]'),this.addEventListener("touchstart",this._onTouchStart.bind(this)),this.addEventListener("touchmove",this._onTouchMove.bind(this)),this.addEventListener("touchend",this._onTouchEnd.bind(this)),this.addEventListener("contextmenu",this._onContextMenu.bind(this))}_onContextMenu(e){this.hasAttribute("reordering")&&(e.preventDefault(),ys||this._onTrackEnd())}_onTouchStart(e){this._startTouchReorderTimeout=setTimeout(()=>{this._onTrackStart({detail:{x:e.touches[0].clientX,y:e.touches[0].clientY}})},100)}_onTouchMove(e){this._draggedColumn&&e.preventDefault(),clearTimeout(this._startTouchReorderTimeout)}_onTouchEnd(){clearTimeout(this._startTouchReorderTimeout),this._onTrackEnd()}_onTrackEvent(e){if(e.detail.state==="start"){const i=e.composedPath(),s=i[i.indexOf(this.$.header)-2];if(!s||!s._content||s._content.contains(this.getRootNode().activeElement)||this.$.scroller.hasAttribute("column-resizing"))return;this._touchDevice||this._onTrackStart(e)}else e.detail.state==="track"?this._onTrack(e):e.detail.state==="end"&&this._onTrackEnd(e)}_onTrackStart(e){if(!this.columnReorderingAllowed)return;const i=e.composedPath&&e.composedPath();if(i&&i.some(o=>o.hasAttribute&&o.hasAttribute("draggable")))return;const s=this._cellFromPoint(e.detail.x,e.detail.y);if(!(!s||!s.getAttribute("part").includes("header-cell"))){for(this.toggleAttribute("reordering",!0),this._draggedColumn=s._column;this._draggedColumn.parentElement.childElementCount===1;)this._draggedColumn=this._draggedColumn.parentElement;this._setSiblingsReorderStatus(this._draggedColumn,"allowed"),this._draggedColumn._reorderStatus="dragging",this._updateGhost(s),this._reorderGhost.style.visibility="visible",this._updateGhostPosition(e.detail.x,this._touchDevice?e.detail.y-50:e.detail.y),this._autoScroller()}}_onTrack(e){if(!this._draggedColumn)return;const i=this._cellFromPoint(e.detail.x,e.detail.y);if(!i)return;const s=this._getTargetColumn(i,this._draggedColumn);if(this._isSwapAllowed(this._draggedColumn,s)&&this._isSwappableByPosition(s,e.detail.x)){const o=this._columnTree.findIndex(c=>c.includes(s)),a=this._getColumnsInOrder(o),n=a.indexOf(this._draggedColumn),l=a.indexOf(s),d=n<l?1:-1;for(let c=n;c!==l;c+=d)this._swapColumnOrders(this._draggedColumn,a[c+d])}this._updateGhostPosition(e.detail.x,this._touchDevice?e.detail.y-50:e.detail.y),this._lastDragClientX=e.detail.x}_onTrackEnd(){this._draggedColumn&&(this.toggleAttribute("reordering",!1),this._draggedColumn._reorderStatus="",this._setSiblingsReorderStatus(this._draggedColumn,""),this._draggedColumn=null,this._lastDragClientX=null,this._reorderGhost.style.visibility="hidden",this.dispatchEvent(new CustomEvent("column-reorder",{detail:{columns:this._getColumnsInOrder()}})))}_getColumnsInOrder(e=this._columnTree.length-1){return this._columnTree[e].filter(i=>!i.hidden).sort((i,s)=>i._order-s._order)}_cellFromPoint(e=0,i=0){this._draggedColumn||this.$.scroller.toggleAttribute("no-content-pointer-events",!0);const s=this.shadowRoot.elementFromPoint(e,i);return this.$.scroller.toggleAttribute("no-content-pointer-events",!1),this._getCellFromElement(s)}_getCellFromElement(e){if(e){if(e._column)return e;const{parentElement:i}=e;if(i&&i._focusButton===e)return i}return null}_updateGhostPosition(e,i){const s=this._reorderGhost.getBoundingClientRect(),o=e-s.width/2,a=i-s.height/2,n=parseInt(this._reorderGhost._left||0),l=parseInt(this._reorderGhost._top||0);this._reorderGhost._left=n-(s.left-o),this._reorderGhost._top=l-(s.top-a),this._reorderGhost.style.transform=`translate(${this._reorderGhost._left}px, ${this._reorderGhost._top}px)`}_updateGhost(e){const i=this._reorderGhost;i.textContent=e._content.innerText;const s=window.getComputedStyle(e);return["boxSizing","display","width","height","background","alignItems","padding","border","flex-direction","overflow"].forEach(o=>{i.style[o]=s[o]}),i}_updateOrders(e){e!==void 0&&(e[0].forEach(i=>{i._order=0}),qo(e[0],this._orderBaseScope,0))}_setSiblingsReorderStatus(e,i){T(e.parentNode,s=>{/column/u.test(s.localName)&&this._isSwapAllowed(s,e)&&(s._reorderStatus=i)})}_autoScroller(){if(this._lastDragClientX){const e=this._lastDragClientX-this.getBoundingClientRect().right+50,i=this.getBoundingClientRect().left-this._lastDragClientX+50;e>0?this.$.table.scrollLeft+=e/10:i>0&&(this.$.table.scrollLeft-=i/10)}this._draggedColumn&&setTimeout(()=>this._autoScroller(),10)}_isSwapAllowed(e,i){if(e&&i){const s=e!==i,o=e.parentElement===i.parentElement,a=e.frozen&&i.frozen||e.frozenToEnd&&i.frozenToEnd||!e.frozen&&!e.frozenToEnd&&!i.frozen&&!i.frozenToEnd;return s&&o&&a}}_isSwappableByPosition(e,i){const s=Array.from(this.$.header.querySelectorAll('tr:not([hidden]) [part~="cell"]')).find(n=>e.contains(n._column)),o=this.$.header.querySelector("tr:not([hidden]) [reorder-status=dragging]").getBoundingClientRect(),a=s.getBoundingClientRect();return a.left>o.left?i>a.right-o.width:i<a.left+o.width}_swapColumnOrders(e,i){[e._order,i._order]=[i._order,e._order],this._debounceUpdateFrozenColumn(),this._updateFirstAndLastColumn()}_getTargetColumn(e,i){if(e&&i){let s=e._column;for(;s.parentElement!==i.parentElement&&s!==this;)s=s.parentElement;return s.parentElement===i.parentElement?s:e._column}}};const Za=r=>class extends r{async ready(){super.ready();const e=this.$.scroller;As(e,"track",this._onHeaderTrack.bind(this)),window.addEventListener("resize",this._onBreakPointResize.bind(this)),e.addEventListener("touchmove",i=>e.hasAttribute("column-resizing")&&i.preventDefault()),e.addEventListener("contextmenu",i=>i.target.getAttribute("part")==="resize-handle"&&i.preventDefault()),e.addEventListener("mousedown",i=>i.target.getAttribute("part")==="resize-handle"&&i.preventDefault()),setTimeout(()=>{this._onBreakPointResize()},0)}_onBreakPointResize(e){this.$.scroller.toggleAttribute("column-resizing",!0);const i=window.innerWidth,s=this.getElementsByTagName("vaadin-grid-column");Array.from(s).filter(a=>a.responsive).forEach(a=>{const n=a.responsive.findLast(([l])=>parseInt(l)<=i);n?a.width=n[1]:a.width=a.minWidth,a.flexGrow=0}),this.$.scroller.toggleAttribute("column-resizing",!1),this._resizeHandler()}_onHeaderTrack(e){const i=e.target;if(i.getAttribute("part")==="resize-handle"){let o=i.parentElement._column;for(this.$.scroller.toggleAttribute("column-resizing",!0);o.localName==="vaadin-grid-column-group";)o=o._childColumns.slice(0).sort((h,u)=>h._order-u._order).filter(h=>!h.hidden).pop();const a=this.__isRTL,n=e.detail.x,l=Array.from(this.$.header.querySelectorAll('[part~="row"]:last-child [part~="cell"]')),d=l.find(h=>h._column===o);if(d.offsetWidth){const h=getComputedStyle(d._content),u=(parseInt(o.minWidth)||10)+parseInt(h.paddingLeft)+parseInt(h.paddingRight)+parseInt(h.borderLeftWidth)+parseInt(h.borderRightWidth)+parseInt(h.marginLeft)+parseInt(h.marginRight);let f;const b=d.offsetWidth,v=d.getBoundingClientRect();d.hasAttribute("frozen-to-end")?f=b+(a?n-v.right:v.left-n):f=b+(a?v.left-n:n-v.right),o.width=`${Math.max(u,f)}px`,o.flexGrow=0}l.sort((h,u)=>h._column._order-u._column._order).forEach((h,u,f)=>{u<f.indexOf(d)&&(h._column.width=`${h.offsetWidth}px`,h._column.flexGrow=0)});const c=this._frozenToEndCells[0];if(c&&this.$.table.scrollWidth>this.$.table.offsetWidth){const h=c.getBoundingClientRect(),u=n-(a?h.right:h.left);(a&&u<=0||!a&&u>=0)&&(this.$.table.scrollLeft+=u)}e.detail.state==="end"&&(this.$.scroller.toggleAttribute("column-resizing",!1),this.dispatchEvent(new CustomEvent("column-resize",{detail:{resizedColumn:o}}))),this._resizeHandler()}}};function Ke(r,t,e=0){let i=t;for(const s of r.subCaches){const o=s.parentCacheIndex;if(i<=o)break;if(i<=o+s.flatSize)return Ke(s,i-o-1,e+1);i-=s.flatSize}return{cache:r,item:r.items[i],index:i,page:Math.floor(i/r.pageSize),level:e}}function Es({getItemId:r},t,e,i=0,s=0){for(let o=0;o<t.items.length;o++){const a=t.items[o];if(a&&r(a)===r(e))return{cache:t,level:i,item:a,index:o,page:Math.floor(o/t.pageSize),subCache:t.getSubCache(o),flatIndex:s+t.getFlatIndex(o)}}for(const o of t.subCaches){const a=s+t.getFlatIndex(o.parentCacheIndex),n=Es({getItemId:r},o,e,i+1,a+1);if(n)return n}}function Ts(r,[t,...e],i=0){t===1/0&&(t=r.size-1);const s=r.getFlatIndex(t),o=r.getSubCache(t);return o&&o.flatSize>0&&e.length?Ts(o,e,i+s+1):i+s}class jt{context;pageSize;items=[];pendingRequests={};__subCacheByIndex={};__size=0;__flatSize=0;constructor(t,e,i,s,o){this.context=t,this.pageSize=e,this.size=i,this.parentCache=s,this.parentCacheIndex=o,this.__flatSize=i||0}get parentItem(){return this.parentCache&&this.parentCache.items[this.parentCacheIndex]}get subCaches(){return Object.values(this.__subCacheByIndex)}get isLoading(){return Object.keys(this.pendingRequests).length>0?!0:this.subCaches.some(t=>t.isLoading)}get flatSize(){return this.__flatSize}get effectiveSize(){return console.warn("<vaadin-grid> The `effectiveSize` property of ItemCache is deprecated and will be removed in Vaadin 25."),this.flatSize}get size(){return this.__size}set size(t){if(this.__size!==t){if(this.__size=t,this.context.placeholder!==void 0){this.items.length=t||0;for(let i=0;i<t;i++)this.items[i]||=this.context.placeholder}Object.keys(this.pendingRequests).forEach(i=>{parseInt(i)*this.pageSize>=this.size&&delete this.pendingRequests[i]})}}recalculateFlatSize(){this.__flatSize=!this.parentItem||this.context.isExpanded(this.parentItem)?this.size+this.subCaches.reduce((t,e)=>(e.recalculateFlatSize(),t+e.flatSize),0):0}setPage(t,e){const i=t*this.pageSize;e.forEach((s,o)=>{const a=i+o;(this.size===void 0||a<this.size)&&(this.items[a]=s)})}getSubCache(t){return this.__subCacheByIndex[t]}removeSubCache(t){delete this.__subCacheByIndex[t]}removeSubCaches(){this.__subCacheByIndex={}}createSubCache(t){const e=new jt(this.context,this.pageSize,0,this,t);return this.__subCacheByIndex[t]=e,e}getFlatIndex(t){const e=Math.max(0,Math.min(this.size-1,t));return this.subCaches.reduce((i,s)=>{const o=s.parentCacheIndex;return e>o?i+s.flatSize:i},e)}getItemForIndex(t){console.warn("<vaadin-grid> The `getItemForIndex` method of ItemCache is deprecated and will be removed in Vaadin 25.");const{item:e}=Ke(this,t);return e}getCacheAndIndex(t){console.warn("<vaadin-grid> The `getCacheAndIndex` method of ItemCache is deprecated and will be removed in Vaadin 25.");const{cache:e,index:i}=Ke(this,t);return{cache:e,scaledIndex:i}}updateSize(){console.warn("<vaadin-grid> The `updateSize` method of ItemCache is deprecated and will be removed in Vaadin 25."),this.recalculateFlatSize()}ensureSubCacheForScaledIndex(t){if(console.warn("<vaadin-grid> The `ensureSubCacheForScaledIndex` method of ItemCache is deprecated and will be removed in Vaadin 25."),!this.getSubCache(t)){const e=this.createSubCache(t);this.context.__controller.__loadCachePage(e,0)}}get grid(){return console.warn("<vaadin-grid> The `grid` property of ItemCache is deprecated and will be removed in Vaadin 25."),this.context.__controller.host}get itemCaches(){return console.warn("<vaadin-grid> The `itemCaches` property of ItemCache is deprecated and will be removed in Vaadin 25."),this.__subCacheByIndex}}class Qa extends EventTarget{host;dataProvider;dataProviderParams;pageSize;isExpanded;getItemId;rootCache;placeholder;isPlaceholder;constructor(t,{size:e,pageSize:i,isExpanded:s,getItemId:o,isPlaceholder:a,placeholder:n,dataProvider:l,dataProviderParams:d}){super(),this.host=t,this.pageSize=i,this.getItemId=o,this.isExpanded=s,this.placeholder=n,this.isPlaceholder=a,this.dataProvider=l,this.dataProviderParams=d,this.rootCache=this.__createRootCache(e)}get flatSize(){return this.rootCache.flatSize}get __cacheContext(){return{isExpanded:this.isExpanded,placeholder:this.placeholder,__controller:this}}isLoading(){return this.rootCache.isLoading}setPageSize(t){this.pageSize=t,this.clearCache()}setDataProvider(t){this.dataProvider=t,this.clearCache()}recalculateFlatSize(){this.rootCache.recalculateFlatSize()}clearCache(){this.rootCache=this.__createRootCache(this.rootCache.size)}getFlatIndexContext(t){return Ke(this.rootCache,t)}getItemContext(t){return Es({getItemId:this.getItemId},this.rootCache,t)}getFlatIndexByPath(t){return Ts(this.rootCache,t)}ensureFlatIndexLoaded(t){const{cache:e,page:i,item:s}=this.getFlatIndexContext(t);this.__isItemLoaded(s)||this.__loadCachePage(e,i)}ensureFlatIndexHierarchy(t){const{cache:e,item:i,index:s}=this.getFlatIndexContext(t);if(this.__isItemLoaded(i)&&this.isExpanded(i)&&!e.getSubCache(s)){const o=e.createSubCache(s);this.__loadCachePage(o,0)}}loadFirstPage(){this.__loadCachePage(this.rootCache,0)}__createRootCache(t){return new jt(this.__cacheContext,this.pageSize,t)}__loadCachePage(t,e){if(!this.dataProvider||t.pendingRequests[e])return;let i={page:e,pageSize:this.pageSize,parentItem:t.parentItem};this.dataProviderParams&&(i={...i,...this.dataProviderParams()});const s=(o,a)=>{t.pendingRequests[e]===s&&(a!==void 0?t.size=a:i.parentItem&&(t.size=o.length),t.setPage(e,o),this.recalculateFlatSize(),this.dispatchEvent(new CustomEvent("page-received")),delete t.pendingRequests[e],this.dispatchEvent(new CustomEvent("page-loaded")))};t.pendingRequests[e]=s,this.dispatchEvent(new CustomEvent("page-requested")),this.dataProvider(i,s)}__isItemLoaded(t){return this.isPlaceholder?!this.isPlaceholder(t):this.placeholder?t!==this.placeholder:!!t}}const en=r=>class extends r{static get properties(){return{size:{type:Number,notify:!0,sync:!0},_flatSize:{type:Number,sync:!0},pageSize:{type:Number,value:50,observer:"_pageSizeChanged",sync:!0},dataProvider:{type:Object,notify:!0,observer:"_dataProviderChanged",sync:!0},loading:{type:Boolean,notify:!0,readOnly:!0,reflectToAttribute:!0},_hasData:{type:Boolean,value:!1,sync:!0},itemHasChildrenPath:{type:String,value:"children",observer:"__itemHasChildrenPathChanged",sync:!0},itemIdPath:{type:String,value:null,sync:!0},expandedItems:{type:Object,notify:!0,value:()=>[],sync:!0},__expandedKeys:{type:Object,computed:"__computeExpandedKeys(itemIdPath, expandedItems)"}}}static get observers(){return["_sizeChanged(size)","_expandedItemsChanged(expandedItems)"]}constructor(){super(),this._dataProviderController=new Qa(this,{size:this.size||0,pageSize:this.pageSize,getItemId:this.getItemId.bind(this),isExpanded:this._isExpanded.bind(this),dataProvider:this.dataProvider?this.dataProvider.bind(this):null,dataProviderParams:()=>({sortOrders:this._mapSorters(),filters:this._mapFilters()})}),this._dataProviderController.addEventListener("page-requested",this._onDataProviderPageRequested.bind(this)),this._dataProviderController.addEventListener("page-received",this._onDataProviderPageReceived.bind(this)),this._dataProviderController.addEventListener("page-loaded",this._onDataProviderPageLoaded.bind(this))}get _cache(){return console.warn("<vaadin-grid> The `_cache` property is deprecated and will be removed in Vaadin 25."),this._dataProviderController.rootCache}get _effectiveSize(){return console.warn("<vaadin-grid> The `_effectiveSize` property is deprecated and will be removed in Vaadin 25."),this._flatSize}_sizeChanged(e){this._dataProviderController.rootCache.size=e,this._dataProviderController.recalculateFlatSize(),this._flatSize=this._dataProviderController.flatSize}__itemHasChildrenPathChanged(e,i){!i&&e==="children"||this.requestContentUpdate()}_getItem(e,i){i.index=e;const{item:s}=this._dataProviderController.getFlatIndexContext(e);s?(this.__updateLoading(i,!1),this._updateItem(i,s),this._isExpanded(s)&&this._dataProviderController.ensureFlatIndexHierarchy(e)):(this.__updateLoading(i,!0),this._dataProviderController.ensureFlatIndexLoaded(e))}__updateLoading(e,i){const s=ue(e);Ze(e,"loading",i),U(s,"loading-row-cell",i),i&&(this._generateCellClassNames(e),this._generateCellPartNames(e))}getItemId(e){return this.itemIdPath?Dt(this.itemIdPath,e):e}_isExpanded(e){return this.__expandedKeys&&this.__expandedKeys.has(this.getItemId(e))}_expandedItemsChanged(){this._dataProviderController.recalculateFlatSize(),this._flatSize=this._dataProviderController.flatSize,this.__updateVisibleRows()}__computeExpandedKeys(e,i){const s=i||[],o=new Set;return s.forEach(a=>{o.add(this.getItemId(a))}),o}expandItem(e){this._isExpanded(e)||(this.expandedItems=[...this.expandedItems,e])}collapseItem(e){this._isExpanded(e)&&(this.expandedItems=this.expandedItems.filter(i=>!this._itemsEqual(i,e)))}_getIndexLevel(e=0){const{level:i}=this._dataProviderController.getFlatIndexContext(e);return i}_loadPage(e,i){console.warn("<vaadin-grid> The `_loadPage` method is deprecated and will be removed in Vaadin 25."),this._dataProviderController.__loadCachePage(i,e)}_onDataProviderPageRequested(){this._setLoading(!0)}_onDataProviderPageReceived(){this._flatSize!==this._dataProviderController.flatSize&&(this._shouldUpdateAllRenderedRowsAfterPageLoad=!0,this._flatSize=this._dataProviderController.flatSize),this._getRenderedRows().forEach(e=>{this._dataProviderController.ensureFlatIndexHierarchy(e.index)}),this._hasData=!0}_onDataProviderPageLoaded(){this._debouncerApplyCachedData=C.debounce(this._debouncerApplyCachedData,G.after(0),()=>{this._setLoading(!1);const e=this._shouldUpdateAllRenderedRowsAfterPageLoad;this._shouldUpdateAllRenderedRowsAfterPageLoad=!1,this._getRenderedRows().forEach(i=>{const{item:s}=this._dataProviderController.getFlatIndexContext(i.index);(s||e)&&this._getItem(i.index,i)}),this.__scrollToPendingIndexes(),this.__dispatchPendingBodyCellFocus()}),this._dataProviderController.isLoading()||this._debouncerApplyCachedData.flush()}__debounceClearCache(){this.__clearCacheDebouncer=C.debounce(this.__clearCacheDebouncer,O,()=>this.clearCache())}clearCache(){this._dataProviderController.clearCache(),this._dataProviderController.rootCache.size=this.size||0,this._dataProviderController.recalculateFlatSize(),this._hasData=!1,this.__updateVisibleRows(),(!this.__virtualizer||!this.__virtualizer.size)&&this._dataProviderController.loadFirstPage()}_pageSizeChanged(e,i){this._dataProviderController.setPageSize(e),i!==void 0&&e!==i&&this.clearCache()}_checkSize(){this.size===void 0&&this._flatSize===0&&console.warn("The <vaadin-grid> needs the total number of items in order to display rows, which you can specify either by setting the `size` property, or by providing it to the second argument of the `dataProvider` function `callback` call.")}_dataProviderChanged(e,i){this._dataProviderController.setDataProvider(e?e.bind(this):null),i!==void 0&&this.clearCache(),this._ensureFirstPageLoaded(),this._debouncerCheckSize=C.debounce(this._debouncerCheckSize,G.after(2e3),this._checkSize.bind(this))}_ensureFirstPageLoaded(){this._hasData||this._dataProviderController.loadFirstPage()}_itemsEqual(e,i){return this.getItemId(e)===this.getItemId(i)}_getItemIndexInArray(e,i){let s=-1;return i.forEach((o,a)=>{this._itemsEqual(o,e)&&(s=a)}),s}scrollToIndex(...e){let i;for(;i!==(i=this._dataProviderController.getFlatIndexByPath(e));)this._scrollToFlatIndex(i);(this._dataProviderController.isLoading()||!this.clientHeight||!this._columnTree)&&(this.__pendingScrollToIndexes=e)}__scrollToPendingIndexes(){if(this.__pendingScrollToIndexes&&this.$.items.children.length){const e=this.__pendingScrollToIndexes;delete this.__pendingScrollToIndexes,this.scrollToIndex(...e)}}};const Ce={BETWEEN:"between",ON_TOP_OR_BETWEEN:"on-top-or-between",ON_GRID:"on-grid"},H={ON_TOP:"on-top",ABOVE:"above",BELOW:"below",EMPTY:"empty"},tn=r=>class extends r{static get properties(){return{dropMode:{type:String,sync:!0},rowsDraggable:{type:Boolean,sync:!0},dragFilter:{type:Function,sync:!0},dropFilter:{type:Function,sync:!0},__dndAutoScrollThreshold:{value:50},__draggedItems:{value:()=>[]}}}static get observers(){return["_dragDropAccessChanged(rowsDraggable, dropMode, dragFilter, dropFilter, loading)"]}constructor(){super(),this.__onDocumentDragStart=this.__onDocumentDragStart.bind(this)}ready(){super.ready(),this.$.table.addEventListener("dragstart",this._onDragStart.bind(this)),this.$.table.addEventListener("dragend",this._onDragEnd.bind(this)),this.$.table.addEventListener("dragover",this._onDragOver.bind(this)),this.$.table.addEventListener("dragleave",this._onDragLeave.bind(this)),this.$.table.addEventListener("drop",this._onDrop.bind(this)),this.$.table.addEventListener("dragenter",e=>{this.dropMode&&(e.preventDefault(),e.stopPropagation())})}connectedCallback(){super.connectedCallback(),document.addEventListener("dragstart",this.__onDocumentDragStart,{capture:!0})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("dragstart",this.__onDocumentDragStart,{capture:!0})}_onDragStart(e){if(this.rowsDraggable){let i=e.target;if(i.localName==="vaadin-grid-cell-content"&&(i=i.assignedSlot.parentNode.parentNode),i.parentNode!==this.$.items)return;if(e.stopPropagation(),this.toggleAttribute("dragging-rows",!0),this._safari){const n=i.style.transform;i.style.top=/translateY\((.*)\)/u.exec(n)[1],i.style.transform="none",requestAnimationFrame(()=>{i.style.top="",i.style.transform=n})}const s=i.getBoundingClientRect();e.dataTransfer.setDragImage(i,e.clientX-s.left,e.clientY-s.top);let o=[i];this._isSelected(i._item)&&(o=this.__getViewportRows().filter(n=>this._isSelected(n._item)).filter(n=>!this.dragFilter||this.dragFilter(this.__getRowModel(n)))),this.__draggedItems=o.map(n=>n._item),e.dataTransfer.setData("text",this.__formatDefaultTransferData(o)),oe(i,{dragstart:o.length>1?`${o.length}`:""}),this.style.setProperty("--_grid-drag-start-x",`${e.clientX-s.left+20}px`),this.style.setProperty("--_grid-drag-start-y",`${e.clientY-s.top+10}px`),requestAnimationFrame(()=>{oe(i,{dragstart:!1}),this.style.setProperty("--_grid-drag-start-x",""),this.style.setProperty("--_grid-drag-start-y",""),this.requestContentUpdate()});const a=new CustomEvent("grid-dragstart",{detail:{draggedItems:[...this.__draggedItems],setDragData:(n,l)=>e.dataTransfer.setData(n,l),setDraggedItemsCount:n=>i.setAttribute("dragstart",n)}});a.originalEvent=e,this.dispatchEvent(a)}}_onDragEnd(e){this.toggleAttribute("dragging-rows",!1),e.stopPropagation();const i=new CustomEvent("grid-dragend");i.originalEvent=e,this.dispatchEvent(i),this.__draggedItems=[],this.requestContentUpdate()}_onDragLeave(e){this.dropMode&&(e.stopPropagation(),this._clearDragStyles())}_onDragOver(e){if(this.dropMode){if(this._dropLocation=void 0,this._dragOverItem=void 0,this.__dndAutoScroll(e.clientY)){this._clearDragStyles();return}let i=e.composedPath().find(s=>s.localName==="tr");if(!this._flatSize||this.dropMode===Ce.ON_GRID)this._dropLocation=H.EMPTY;else if(!i||i.parentNode!==this.$.items){if(i)return;if(this.dropMode===Ce.BETWEEN||this.dropMode===Ce.ON_TOP_OR_BETWEEN)i=Array.from(this.$.items.children).filter(s=>!s.hidden).pop(),this._dropLocation=H.BELOW;else return}else{const s=i.getBoundingClientRect();if(this._dropLocation=H.ON_TOP,this.dropMode===Ce.BETWEEN){const o=e.clientY-s.top<s.bottom-e.clientY;this._dropLocation=o?H.ABOVE:H.BELOW}else this.dropMode===Ce.ON_TOP_OR_BETWEEN&&(e.clientY-s.top<s.height/3?this._dropLocation=H.ABOVE:e.clientY-s.top>s.height/3*2&&(this._dropLocation=H.BELOW))}if(i&&i.hasAttribute("drop-disabled")){this._dropLocation=void 0;return}e.stopPropagation(),e.preventDefault(),this._dropLocation===H.EMPTY?this.toggleAttribute("dragover",!0):i?(this._dragOverItem=i._item,i.getAttribute("dragover")!==this._dropLocation&&hi(i,{dragover:this._dropLocation})):this._clearDragStyles()}}__onDocumentDragStart(e){if(e.target.contains(this)){const i=[e.target,this.$.items,this.$.scroller],s=i.map(o=>o.style.cssText);this.$.table.scrollHeight>2e4&&(this.$.scroller.style.display="none"),bs&&(e.target.style.willChange="transform"),$t&&(this.$.items.style.flexShrink=1),requestAnimationFrame(()=>{i.forEach((o,a)=>{o.style.cssText=s[a]})})}}__dndAutoScroll(e){if(this.__dndAutoScrolling)return!0;const i=this.$.header.getBoundingClientRect().bottom,s=this.$.footer.getBoundingClientRect().top,o=i-e+this.__dndAutoScrollThreshold,a=e-s+this.__dndAutoScrollThreshold;let n=0;if(a>0?n=a*2:o>0&&(n=-o*2),n){const l=this.$.table.scrollTop;if(this.$.table.scrollTop+=n,l!==this.$.table.scrollTop)return this.__dndAutoScrolling=!0,setTimeout(()=>{this.__dndAutoScrolling=!1},20),!0}}__getViewportRows(){const e=this.$.header.getBoundingClientRect().bottom,i=this.$.footer.getBoundingClientRect().top;return Array.from(this.$.items.children).filter(s=>{const o=s.getBoundingClientRect();return o.bottom>e&&o.top<i})}_clearDragStyles(){this.removeAttribute("dragover"),T(this.$.items,e=>{hi(e,{dragover:null})})}__updateDragSourceParts(e,i){oe(e,{"drag-source":this.__draggedItems.includes(i.item)})}_onDrop(e){if(this.dropMode){e.stopPropagation(),e.preventDefault();const i=e.dataTransfer.types&&Array.from(e.dataTransfer.types).map(o=>({type:o,data:e.dataTransfer.getData(o)}));this._clearDragStyles();const s=new CustomEvent("grid-drop",{bubbles:e.bubbles,cancelable:e.cancelable,detail:{dropTargetItem:this._dragOverItem,dropLocation:this._dropLocation,dragData:i}});s.originalEvent=e,this.dispatchEvent(s)}}__formatDefaultTransferData(e){return e.map(i=>Array.from(i.children).filter(s=>!s.hidden&&s.getAttribute("part").indexOf("details-cell")===-1).sort((s,o)=>s._column._order>o._column._order?1:-1).map(s=>s._content.textContent.trim()).filter(s=>s).join("	")).join(`
`)}_dragDropAccessChanged(){this.filterDragAndDrop()}filterDragAndDrop(){T(this.$.items,e=>{e.hidden||this._filterDragAndDrop(e,this.__getRowModel(e))})}_filterDragAndDrop(e,i){const s=this.loading||e.hasAttribute("loading"),o=!this.rowsDraggable||s||this.dragFilter&&!this.dragFilter(i),a=!this.dropMode||s||this.dropFilter&&!this.dropFilter(i);pe(e,n=>{o?n._content.removeAttribute("draggable"):n._content.setAttribute("draggable",!0)}),oe(e,{"drag-disabled":!!o,"drop-disabled":!!a})}};function Ps(r,t){if(!r||!t||r.length!==t.length)return!1;for(let e=0,i=r.length;e<i;e++)if(r[e]instanceof Array&&t[e]instanceof Array){if(!Ps(r[e],t[e]))return!1}else if(r[e]!==t[e])return!1;return!0}const sn=r=>class extends r{static get properties(){return{_columnTree:{type:Object,sync:!0}}}ready(){super.ready(),this._addNodeObserver()}_hasColumnGroups(e){return e.some(i=>i.localName==="vaadin-grid-column-group")}_getChildColumns(e){return ce.getColumns(e)}_flattenColumnGroups(e){return e.map(i=>i.localName==="vaadin-grid-column-group"?this._getChildColumns(i):[i]).reduce((i,s)=>i.concat(s),[])}_getColumnTree(){const e=ce.getColumns(this),i=[e];let s=e;for(;this._hasColumnGroups(s);)s=this._flattenColumnGroups(s),i.push(s);return i}_debounceUpdateColumnTree(){this.__updateColumnTreeDebouncer=C.debounce(this.__updateColumnTreeDebouncer,O,()=>this._updateColumnTree())}_updateColumnTree(){const e=this._getColumnTree();Ps(e,this._columnTree)||(this._columnTree=e)}_addNodeObserver(){this._observer=new ce(this,(e,i)=>{const s=i.flatMap(a=>a._allCells),o=a=>s.filter(n=>n&&n._content.contains(a)).length;this.__removeSorters(this._sorters.filter(o)),this.__removeFilters(this._filters.filter(o)),this._debounceUpdateColumnTree(),this._debouncerCheckImports=C.debounce(this._debouncerCheckImports,G.after(2e3),this._checkImports.bind(this)),this._ensureFirstPageLoaded()})}_checkImports(){["vaadin-grid-column-group","vaadin-grid-filter","vaadin-grid-filter-column","vaadin-grid-tree-toggle","vaadin-grid-selection-column","vaadin-grid-sort-column","vaadin-grid-sorter"].forEach(e=>{this.querySelector(e)&&!customElements.get(e)&&console.warn(`Make sure you have imported the required module for <${e}> element.`)})}_updateFirstAndLastColumn(){Array.from(this.shadowRoot.querySelectorAll("tr")).forEach(e=>this._updateFirstAndLastColumnForRow(e))}_updateFirstAndLastColumnForRow(e){Array.from(e.querySelectorAll('[part~="cell"]:not([part~="details-cell"])')).sort((i,s)=>i._column._order-s._column._order).forEach((i,s,o)=>{ee(i,"first-column",s===0),ee(i,"last-column",s===o.length-1)})}_isColumnElement(e){return e.nodeType===Node.ELEMENT_NODE&&/\bcolumn\b/u.test(e.localName)}};const rn=r=>class extends r{getEventContext(e){const i={},{cell:s}=this._getGridEventLocation(e);return s&&(i.section=["body","header","footer","details"].find(o=>s.getAttribute("part").indexOf(o)>-1),s._column&&(i.column=s._column),(i.section==="body"||i.section==="details")&&Object.assign(i,this.__getRowModel(s.parentElement))),i}};const on=r=>class extends r{static get properties(){return{_filters:{type:Array,value:()=>[]}}}constructor(){super(),this._filterChanged=this._filterChanged.bind(this),this.addEventListener("filter-changed",this._filterChanged)}_filterChanged(e){e.stopPropagation(),this.__addFilter(e.target),this.__applyFilters()}__removeFilters(e){e.length!==0&&(this._filters=this._filters.filter(i=>e.indexOf(i)<0),this.__applyFilters())}__addFilter(e){this._filters.indexOf(e)===-1&&this._filters.push(e)}__applyFilters(){this.dataProvider&&this.isAttached&&this.clearCache()}_mapFilters(){return this._filters.map(e=>({path:e.path,value:e.value}))}};function Ve(r){return r instanceof HTMLTableRowElement}function Me(r){return r instanceof HTMLTableCellElement}function Q(r){return r.matches('[part~="details-cell"]')}const an=r=>class extends r{static get properties(){return{_headerFocusable:{type:Object,observer:"_focusableChanged",sync:!0},_itemsFocusable:{type:Object,observer:"_focusableChanged",sync:!0},_footerFocusable:{type:Object,observer:"_focusableChanged",sync:!0},_navigatingIsHidden:Boolean,_focusedItemIndex:{type:Number,value:0},_focusedColumnOrder:Number,_focusedCell:{type:Object,observer:"_focusedCellChanged",sync:!0},interacting:{type:Boolean,value:!1,reflectToAttribute:!0,readOnly:!0,observer:"_interactingChanged"}}}get __rowFocusMode(){return[this._headerFocusable,this._itemsFocusable,this._footerFocusable].some(Ve)}set __rowFocusMode(e){["_itemsFocusable","_footerFocusable","_headerFocusable"].forEach(i=>{const s=this[i];if(e){const o=s&&s.parentElement;Me(s)?this[i]=o:Me(o)&&(this[i]=o.parentElement)}else if(!e&&Ve(s)){const o=s.firstElementChild;this[i]=o._focusButton||o}})}get _visibleItemsCount(){return this._lastVisibleIndex-this._firstVisibleIndex-1}ready(){super.ready(),!(this._ios||this._android)&&(this.addEventListener("keydown",this._onKeyDown),this.addEventListener("keyup",this._onKeyUp),this.addEventListener("focusin",this._onFocusIn),this.addEventListener("focusout",this._onFocusOut),this.$.table.addEventListener("focusin",this._onContentFocusIn.bind(this)),this.addEventListener("mousedown",()=>{this.toggleAttribute("navigating",!1),this._isMousedown=!0,this._focusedColumnOrder=void 0}),this.addEventListener("mouseup",()=>{this._isMousedown=!1}))}_focusableChanged(e,i){i&&i.setAttribute("tabindex","-1"),e&&this._updateGridSectionFocusTarget(e)}_focusedCellChanged(e,i){i&&ms(i,"part","focused-cell"),e&&fs(e,"part","focused-cell")}_interactingChanged(){this._updateGridSectionFocusTarget(this._headerFocusable),this._updateGridSectionFocusTarget(this._itemsFocusable),this._updateGridSectionFocusTarget(this._footerFocusable)}__updateItemsFocusable(){if(!this._itemsFocusable)return;const e=this.shadowRoot.activeElement===this._itemsFocusable;this._getRenderedRows().forEach(i=>{if(i.index===this._focusedItemIndex)if(this.__rowFocusMode)this._itemsFocusable=i;else{let s=this._itemsFocusable.parentElement,o=this._itemsFocusable;if(s){Me(s)&&(o=s,s=s.parentElement);const a=[...s.children].indexOf(o);this._itemsFocusable=this.__getFocusable(i,i.children[a])}}}),e&&this._itemsFocusable.focus()}_onKeyDown(e){const i=e.key;let s;switch(i){case"ArrowUp":case"ArrowDown":case"ArrowLeft":case"ArrowRight":case"PageUp":case"PageDown":case"Home":case"End":s="Navigation";break;case"Enter":case"Escape":case"F2":s="Interaction";break;case"Tab":s="Tab";break;case" ":s="Space";break}this._detectInteracting(e),this.interacting&&s!=="Interaction"&&(s=void 0),s&&this[`_on${s}KeyDown`](e,i)}__ensureFlatIndexInViewport(e){[...this.$.items.children].find(s=>s.index===e)?this.__scrollIntoViewport(e):this._scrollToFlatIndex(e)}__isRowExpandable(e){if(this.itemHasChildrenPath){const i=e._item;return!!(i&&Dt(this.itemHasChildrenPath,i)&&!this._isExpanded(i))}}__isRowCollapsible(e){return this._isExpanded(e._item)}_onNavigationKeyDown(e,i){e.preventDefault();const s=this.__isRTL,o=e.composedPath().find(Ve),a=e.composedPath().find(Me);let n=0,l=0;switch(i){case"ArrowRight":n=s?-1:1;break;case"ArrowLeft":n=s?1:-1;break;case"Home":this.__rowFocusMode||e.ctrlKey?l=-1/0:n=-1/0;break;case"End":this.__rowFocusMode||e.ctrlKey?l=1/0:n=1/0;break;case"ArrowDown":l=1;break;case"ArrowUp":l=-1;break;case"PageDown":if(this.$.items.contains(o)){const h=this.__getIndexInGroup(o,this._focusedItemIndex);this._scrollToFlatIndex(h)}l=this._visibleItemsCount;break;case"PageUp":l=-this._visibleItemsCount;break}if(this.__rowFocusMode&&!o||!this.__rowFocusMode&&!a)return;const d=s?"ArrowLeft":"ArrowRight",c=s?"ArrowRight":"ArrowLeft";if(i===d){if(this.__rowFocusMode){if(this.__isRowExpandable(o)){this.expandItem(o._item);return}this.__rowFocusMode=!1,this._onCellNavigation(o.firstElementChild,0,0);return}}else if(i===c)if(this.__rowFocusMode){if(this.__isRowCollapsible(o)){this.collapseItem(o._item);return}}else{const h=[...o.children].sort((u,f)=>u._order-f._order);if(a===h[0]||Q(a)){this.__rowFocusMode=!0,this._onRowNavigation(o,0);return}}this.__rowFocusMode?this._onRowNavigation(o,l):this._onCellNavigation(a,n,l)}_onRowNavigation(e,i){const{dstRow:s}=this.__navigateRows(i,e);s&&s.focus()}__getIndexInGroup(e,i){const s=e.parentNode;return s===this.$.items?i!==void 0?i:e.index:[...s.children].indexOf(e)}__navigateRows(e,i,s){const o=this.__getIndexInGroup(i,this._focusedItemIndex),a=i.parentNode,n=(a===this.$.items?this._flatSize:a.children.length)-1;let l=Math.max(0,Math.min(o+e,n));if(a!==this.$.items){if(l>o)for(;l<n&&a.children[l].hidden;)l+=1;else if(l<o)for(;l>0&&a.children[l].hidden;)l-=1;return this.toggleAttribute("navigating",!0),{dstRow:a.children[l]}}let d=!1;if(s){const c=Q(s);if(a===this.$.items){const h=i._item,{item:u}=this._dataProviderController.getFlatIndexContext(l);c?d=e===0:d=e===1&&this._isDetailsOpened(h)||e===-1&&l!==o&&this._isDetailsOpened(u),d!==c&&(e===1&&d||e===-1&&!d)&&(l=o)}}return this.__ensureFlatIndexInViewport(l),this._focusedItemIndex=l,this.toggleAttribute("navigating",!0),{dstRow:[...a.children].find(c=>!c.hidden&&c.index===l),dstIsRowDetails:d}}_onCellNavigation(e,i,s){const o=e.parentNode,{dstRow:a,dstIsRowDetails:n}=this.__navigateRows(s,o,e);if(!a)return;let l=[...o.children].indexOf(e);this.$.items.contains(e)&&(l=[...this.$.sizer.children].findIndex(u=>u._column===e._column));const d=Q(e),c=o.parentNode,h=this.__getIndexInGroup(o,this._focusedItemIndex);if(this._focusedColumnOrder===void 0&&(d?this._focusedColumnOrder=0:this._focusedColumnOrder=this._getColumns(c,h).filter(u=>!u.hidden)[l]._order),n)[...a.children].find(Q).focus();else{const u=this.__getIndexInGroup(a,this._focusedItemIndex),f=this._getColumns(c,u).filter(E=>!E.hidden),b=f.map(E=>E._order).sort((E,X)=>E-X),v=b.length-1,x=b.indexOf(b.slice(0).sort((E,X)=>Math.abs(E-this._focusedColumnOrder)-Math.abs(X-this._focusedColumnOrder))[0]),S=s===0&&d?x:Math.max(0,Math.min(x+i,v));S!==x&&(this._focusedColumnOrder=void 0);const F=f.reduce((E,X,Rs)=>(E[X._order]=Rs,E),{})[b[S]];let V;if(this.$.items.contains(e)){const E=this.$.sizer.children[F];this._lazyColumns&&(this.__isColumnInViewport(E._column)||E.scrollIntoView(),this.__updateColumnsBodyContentHidden(),this.__updateHorizontalScrollPosition()),V=[...a.children].find(X=>X._column===E._column),this._scrollHorizontallyToCell(V)}else V=a.children[F],this._scrollHorizontallyToCell(V);V.focus()}}_onInteractionKeyDown(e,i){const s=e.composedPath()[0],o=s.localName==="input"&&!/^(button|checkbox|color|file|image|radio|range|reset|submit)$/iu.test(s.type);let a;switch(i){case"Enter":a=this.interacting?!o:!0;break;case"Escape":a=!1;break;case"F2":a=!this.interacting;break}const{cell:n}=this._getGridEventLocation(e);if(this.interacting!==a&&n!==null)if(a){const l=n._content.querySelector("[focus-target]")||[...n._content.querySelectorAll("*")].find(d=>this._isFocusable(d));l&&(e.preventDefault(),l.focus(),this._setInteracting(!0),this.toggleAttribute("navigating",!1))}else e.preventDefault(),this._focusedColumnOrder=void 0,n.focus(),this._setInteracting(!1),this.toggleAttribute("navigating",!0);i==="Escape"&&this._hideTooltip(!0)}_predictFocusStepTarget(e,i){const s=[this.$.table,this._headerFocusable,this.__emptyState?this.$.emptystatecell:this._itemsFocusable,this._footerFocusable,this.$.focusexit];let o=s.indexOf(e);for(o+=i;o>=0&&o<=s.length-1;){let n=s[o];if(n&&!this.__rowFocusMode&&(n=s[o].parentNode),!n||n.hidden)o+=i;else break}let a=s[o];if(a&&!this.__isHorizontallyInViewport(a)){const n=this._getColumnsInOrder().find(l=>this.__isColumnInViewport(l));if(n)if(a===this._headerFocusable)a=n._headerCell;else if(a===this._itemsFocusable){const l=a._column._cells.indexOf(a);a=n._cells[l]}else a===this._footerFocusable&&(a=n._footerCell)}return a}_onTabKeyDown(e){let i=this._predictFocusStepTarget(e.composedPath()[0],e.shiftKey?-1:1);i&&(e.stopPropagation(),i===this._itemsFocusable&&(this.__ensureFlatIndexInViewport(this._focusedItemIndex),this.__updateItemsFocusable(),i=this._itemsFocusable),i.focus(),i!==this.$.table&&i!==this.$.focusexit&&e.preventDefault(),this.toggleAttribute("navigating",!0))}_onSpaceKeyDown(e){e.preventDefault();const i=e.composedPath()[0],s=Ve(i);(s||!i._content||!i._content.firstElementChild)&&this.dispatchEvent(new CustomEvent(s?"row-activate":"cell-activate",{detail:{model:this.__getRowModel(s?i:i.parentElement)}}))}_onKeyUp(e){if(!/^( |SpaceBar)$/u.test(e.key)||this.interacting)return;e.preventDefault();const i=e.composedPath()[0];if(i._content&&i._content.firstElementChild){const s=this.hasAttribute("navigating");i._content.firstElementChild.dispatchEvent(new MouseEvent("click",{shiftKey:e.shiftKey,bubbles:!0,composed:!0,cancelable:!0})),this.toggleAttribute("navigating",s)}}_onFocusIn(e){this._isMousedown||this.toggleAttribute("navigating",!0);const i=e.composedPath()[0];i===this.$.table||i===this.$.focusexit?(this._isMousedown||this._predictFocusStepTarget(i,i===this.$.table?1:-1).focus(),this._setInteracting(!1)):this._detectInteracting(e)}_onFocusOut(e){this.toggleAttribute("navigating",!1),this._detectInteracting(e),this._hideTooltip(),this._focusedCell=null}_onContentFocusIn(e){const{section:i,cell:s,row:o}=this._getGridEventLocation(e);if(!(!s&&!this.__rowFocusMode)&&(this._detectInteracting(e),i&&(s||o)))if(this._activeRowGroup=i,i===this.$.header?this._headerFocusable=this.__getFocusable(o,s):i===this.$.items?(this._itemsFocusable=this.__getFocusable(o,s),this._focusedItemIndex=o.index):i===this.$.footer&&(this._footerFocusable=this.__getFocusable(o,s)),s){const a=this.getEventContext(e);this.__pendingBodyCellFocus=this.loading&&a.section==="body",!this.__pendingBodyCellFocus&&s!==this.$.emptystatecell&&s.dispatchEvent(new CustomEvent("cell-focus",{bubbles:!0,composed:!0,detail:{context:a}})),this._focusedCell=s._focusButton||s,Sa()&&e.target===s&&this._showTooltip(e)}else this._focusedCell=null}__dispatchPendingBodyCellFocus(){this.__pendingBodyCellFocus&&this.shadowRoot.activeElement===this._itemsFocusable&&this._itemsFocusable.dispatchEvent(new Event("focusin",{bubbles:!0,composed:!0}))}__getFocusable(e,i){return this.__rowFocusMode?e:i._focusButton||i}_detectInteracting(e){const i=e.composedPath().some(s=>s.localName==="slot"&&this.shadowRoot.contains(s));this._setInteracting(i),this.__updateHorizontalScrollPosition()}_updateGridSectionFocusTarget(e){if(!e)return;const i=this._getGridSectionFromFocusTarget(e),s=this.interacting&&i===this._activeRowGroup;e.tabIndex=s?-1:0}_preventScrollerRotatingCellFocus(){this._activeRowGroup===this.$.items&&(this.__preventScrollerRotatingCellFocusDebouncer=C.debounce(this.__preventScrollerRotatingCellFocusDebouncer,j,()=>{const e=this._activeRowGroup===this.$.items;this._getRenderedRows().some(s=>s.index===this._focusedItemIndex)?(this.__updateItemsFocusable(),e&&!this.__rowFocusMode&&(this._focusedCell=this._itemsFocusable),this._navigatingIsHidden&&(this.toggleAttribute("navigating",!0),this._navigatingIsHidden=!1)):e&&(this._focusedCell=null,this.hasAttribute("navigating")&&(this._navigatingIsHidden=!0,this.toggleAttribute("navigating",!1)))}))}_getColumns(e,i){let s=this._columnTree.length-1;return e===this.$.header?s=i:e===this.$.footer&&(s=this._columnTree.length-1-i),this._columnTree[s]}__isValidFocusable(e){return this.$.table.contains(e)&&e.offsetHeight}_resetKeyboardNavigation(){if(!this.$&&this.performUpdate&&this.performUpdate(),["header","footer"].forEach(e=>{if(!this.__isValidFocusable(this[`_${e}Focusable`])){const i=[...this.$[e].children].find(o=>o.offsetHeight),s=i?[...i.children].find(o=>!o.hidden):null;i&&s&&(this[`_${e}Focusable`]=this.__getFocusable(i,s))}}),!this.__isValidFocusable(this._itemsFocusable)&&this.$.items.firstElementChild){const e=this.__getFirstVisibleItem(),i=e?[...e.children].find(s=>!s.hidden):null;i&&e&&(this._focusedColumnOrder=void 0,this._itemsFocusable=this.__getFocusable(e,i))}else this.__updateItemsFocusable()}_scrollHorizontallyToCell(e){if(e.hasAttribute("frozen")||e.hasAttribute("frozen-to-end")||Q(e))return;const i=e.getBoundingClientRect(),s=e.parentNode,o=Array.from(s.children).indexOf(e),a=this.$.table.getBoundingClientRect();let n=a.left,l=a.right;for(let d=o-1;d>=0;d--){const c=s.children[d];if(!(c.hasAttribute("hidden")||Q(c))&&(c.hasAttribute("frozen")||c.hasAttribute("frozen-to-end"))){n=c.getBoundingClientRect().right;break}}for(let d=o+1;d<s.children.length;d++){const c=s.children[d];if(!(c.hasAttribute("hidden")||Q(c))&&(c.hasAttribute("frozen")||c.hasAttribute("frozen-to-end"))){l=c.getBoundingClientRect().left;break}}i.left<n&&(this.$.table.scrollLeft+=Math.round(i.left-n)),i.right>l&&(this.$.table.scrollLeft+=Math.round(i.right-l))}_getGridEventLocation(e){const i=e.__composedPath||e.composedPath(),s=i.indexOf(this.$.table),o=s>=1?i[s-1]:null,a=s>=2?i[s-2]:null,n=s>=3?i[s-3]:null;return{section:o,row:a,cell:n}}_getGridSectionFromFocusTarget(e){return e===this._headerFocusable?this.$.header:e===this._itemsFocusable?this.$.items:e===this._footerFocusable?this.$.footer:null}};const nn=r=>class extends r{static get properties(){return{detailsOpenedItems:{type:Array,value:()=>[],sync:!0},rowDetailsRenderer:{type:Function,sync:!0},_detailsCells:{type:Array}}}static get observers(){return["_detailsOpenedItemsChanged(detailsOpenedItems, rowDetailsRenderer)","_rowDetailsRendererChanged(rowDetailsRenderer)"]}ready(){super.ready(),this._detailsCellResizeObserver=new ResizeObserver(e=>{e.forEach(({target:i})=>{this._updateDetailsCellHeight(i.parentElement)}),this.__virtualizer.__adapter._resizeHandler()})}_rowDetailsRendererChanged(e){e&&this._columnTree&&T(this.$.items,i=>{if(!i.querySelector("[part~=details-cell]")){this._updateRow(i,this._columnTree[this._columnTree.length-1]);const s=this._isDetailsOpened(i._item);this._toggleDetailsCell(i,s)}})}_detailsOpenedItemsChanged(e,i){T(this.$.items,s=>{if(s.hasAttribute("details-opened")){this._updateItem(s,s._item);return}i&&this._isDetailsOpened(s._item)&&this._updateItem(s,s._item)})}_configureDetailsCell(e){e.setAttribute("part","cell details-cell"),e.toggleAttribute("frozen",!0),this._detailsCellResizeObserver.observe(e)}_toggleDetailsCell(e,i){const s=e.querySelector('[part~="details-cell"]');s&&(s.hidden=!i,!s.hidden&&this.rowDetailsRenderer&&(s._renderer=this.rowDetailsRenderer))}_updateDetailsCellHeight(e){const i=e.querySelector('[part~="details-cell"]');i&&(this.__updateDetailsRowPadding(e,i),requestAnimationFrame(()=>this.__updateDetailsRowPadding(e,i)))}__updateDetailsRowPadding(e,i){i.hidden?e.style.removeProperty("padding-bottom"):e.style.setProperty("padding-bottom",`${i.offsetHeight}px`)}_updateDetailsCellHeights(){T(this.$.items,e=>{this._updateDetailsCellHeight(e)})}_isDetailsOpened(e){return this.detailsOpenedItems&&this._getItemIndexInArray(e,this.detailsOpenedItems)!==-1}openItemDetails(e){this._isDetailsOpened(e)||(this.detailsOpenedItems=[...this.detailsOpenedItems,e])}closeItemDetails(e){this._isDetailsOpened(e)&&(this.detailsOpenedItems=this.detailsOpenedItems.filter(i=>!this._itemsEqual(i,e)))}};const et=document.createElement("div");et.style.position="fixed";et.style.clip="rect(0px, 0px, 0px, 0px)";et.setAttribute("aria-live","polite");document.body.appendChild(et);function Si(r,t){const{scrollLeft:e}=r;return t!=="rtl"?e:r.scrollWidth-r.clientWidth+e}const De=new ResizeObserver(r=>{setTimeout(()=>{r.forEach(t=>{t.target.isConnected&&(t.target.resizables?t.target.resizables.forEach(e=>{e._onResize(t.contentRect)}):t.target._onResize(t.contentRect))})})}),ln=Lt(r=>class extends r{get _observeParent(){return!1}connectedCallback(){if(super.connectedCallback(),De.observe(this),this._observeParent){const e=this.parentNode instanceof ShadowRoot?this.parentNode.host:this.parentNode;e.resizables||(e.resizables=new Set,De.observe(e)),e.resizables.add(this),this.__parent=e}}disconnectedCallback(){super.disconnectedCallback(),De.unobserve(this);const e=this.__parent;if(this._observeParent&&e){const i=e.resizables;i&&(i.delete(this),i.size===0&&De.unobserve(e)),this.__parent=null}}_onResize(e){}});const Ai={SCROLLING:500,UPDATE_CONTENT_VISIBILITY:100},dn=r=>class extends ln(r){static get properties(){return{columnRendering:{type:String,value:"eager",sync:!0},_frozenCells:{type:Array,value:()=>[]},_frozenToEndCells:{type:Array,value:()=>[]}}}static get observers(){return["__columnRenderingChanged(_columnTree, columnRendering)"]}get _scrollLeft(){return this.$.table.scrollLeft}get _scrollTop(){return this.$.table.scrollTop}set _scrollTop(e){this.$.table.scrollTop=e}get _lazyColumns(){return this.columnRendering==="lazy"}ready(){super.ready(),this.scrollTarget=this.$.table,this.$.items.addEventListener("focusin",e=>{const i=e.composedPath(),s=i[i.indexOf(this.$.items)-1];s&&(this._isMousedown||this.__scrollIntoViewport(s.index),this.$.table.contains(e.relatedTarget)||this.$.table.dispatchEvent(new CustomEvent("virtualizer-element-focused",{detail:{element:s}})))}),this.$.table.addEventListener("scroll",()=>this._afterScroll())}_onResize(){if(this._updateOverflow(),this.__updateHorizontalScrollPosition(),this._firefox){const e=!xt(this);e&&this.__previousVisible===!1&&(this._scrollTop=this.__memorizedScrollTop||0),this.__previousVisible=e}}_scrollToFlatIndex(e){e=Math.min(this._flatSize-1,Math.max(0,e)),this.__virtualizer.scrollToIndex(e),this.__scrollIntoViewport(e)}__scrollIntoViewport(e){const i=[...this.$.items.children].find(s=>s.index===e);if(i){const s=i.getBoundingClientRect(),o=this.$.footer.getBoundingClientRect().top,a=this.$.header.getBoundingClientRect().bottom;s.bottom>o?this.$.table.scrollTop+=s.bottom-o:s.top<a&&(this.$.table.scrollTop-=a-s.top)}}_scheduleScrolling(){this._scrollingFrame||(this._scrollingFrame=requestAnimationFrame(()=>this.$.scroller.toggleAttribute("scrolling",!0))),this._debounceScrolling=C.debounce(this._debounceScrolling,G.after(Ai.SCROLLING),()=>{cancelAnimationFrame(this._scrollingFrame),delete this._scrollingFrame,this.$.scroller.toggleAttribute("scrolling",!1)})}_afterScroll(){this.__updateHorizontalScrollPosition(),this.hasAttribute("reordering")||this._scheduleScrolling(),this.hasAttribute("navigating")||this._hideTooltip(!0),this._updateOverflow(),this._debounceColumnContentVisibility=C.debounce(this._debounceColumnContentVisibility,G.after(Ai.UPDATE_CONTENT_VISIBILITY),()=>{this._lazyColumns&&this.__cachedScrollLeft!==this._scrollLeft&&(this.__cachedScrollLeft=this._scrollLeft,this.__updateColumnsBodyContentHidden())}),this._firefox&&!xt(this)&&this.__previousVisible!==!1&&(this.__memorizedScrollTop=this._scrollTop)}__updateColumnsBodyContentHidden(){if(!this._columnTree||!this._areSizerCellsAssigned())return;const e=this._getColumnsInOrder();let i=!1;if(e.forEach(s=>{const o=this._lazyColumns&&!this.__isColumnInViewport(s);s._bodyContentHidden!==o&&(i=!0,s._cells.forEach(a=>{if(a!==s._sizerCell){if(o)a.remove();else if(a.__parentRow){const n=[...a.__parentRow.children].find(l=>e.indexOf(l._column)>e.indexOf(s));a.__parentRow.insertBefore(a,n)}}})),s._bodyContentHidden=o}),i&&this._frozenCellsChanged(),this._lazyColumns){const s=[...e].reverse().find(n=>n.frozen),o=this.__getColumnEnd(s),a=e.find(n=>!n.frozen&&!n._bodyContentHidden);this.__lazyColumnsStart=this.__getColumnStart(a)-o,this.$.items.style.setProperty("--_grid-lazy-columns-start",`${this.__lazyColumnsStart}px`),this._resetKeyboardNavigation()}}__getColumnEnd(e){return e?e._sizerCell.offsetLeft+(this.__isRTL?0:e._sizerCell.offsetWidth):this.__isRTL?this.$.table.clientWidth:0}__getColumnStart(e){return e?e._sizerCell.offsetLeft+(this.__isRTL?e._sizerCell.offsetWidth:0):this.__isRTL?this.$.table.clientWidth:0}__isColumnInViewport(e){return e.frozen||e.frozenToEnd?!0:this.__isHorizontallyInViewport(e._sizerCell)}__isHorizontallyInViewport(e){return e.offsetLeft+e.offsetWidth>=this._scrollLeft&&e.offsetLeft<=this._scrollLeft+this.clientWidth}__columnRenderingChanged(e,i){i==="eager"?this.$.scroller.removeAttribute("column-rendering"):this.$.scroller.setAttribute("column-rendering",i),this.__updateColumnsBodyContentHidden()}_updateOverflow(){this._debounceOverflow=C.debounce(this._debounceOverflow,j,()=>{this.__doUpdateOverflow()})}__doUpdateOverflow(){let e="";const i=this.$.table;i.scrollTop<i.scrollHeight-i.clientHeight&&(e+=" bottom"),i.scrollTop>0&&(e+=" top");const s=Si(i,this.getAttribute("dir"));s>0&&(e+=" start"),s<i.scrollWidth-i.clientWidth&&(e+=" end"),this.__isRTL&&(e=e.replace(/start|end/giu,a=>a==="start"?"end":"start")),i.scrollLeft<i.scrollWidth-i.clientWidth&&(e+=" right"),i.scrollLeft>0&&(e+=" left");const o=e.trim();o.length>0&&this.getAttribute("overflow")!==o?this.setAttribute("overflow",o):o.length===0&&this.hasAttribute("overflow")&&this.removeAttribute("overflow")}_frozenCellsChanged(){this._debouncerCacheElements=C.debounce(this._debouncerCacheElements,O,()=>{Array.from(this.shadowRoot.querySelectorAll('[part~="cell"]')).forEach(e=>{e.style.transform=""}),this._frozenCells=Array.prototype.slice.call(this.$.table.querySelectorAll("[frozen]")),this._frozenToEndCells=Array.prototype.slice.call(this.$.table.querySelectorAll("[frozen-to-end]")),this.__updateHorizontalScrollPosition()}),this._debounceUpdateFrozenColumn()}_debounceUpdateFrozenColumn(){this.__debounceUpdateFrozenColumn=C.debounce(this.__debounceUpdateFrozenColumn,O,()=>this._updateFrozenColumn())}_updateFrozenColumn(){if(!this._columnTree)return;const e=this._columnTree[this._columnTree.length-1].slice(0);e.sort((o,a)=>o._order-a._order);let i,s;for(let o=0;o<e.length;o++){const a=e[o];a._lastFrozen=!1,a._firstFrozenToEnd=!1,s===void 0&&a.frozenToEnd&&!a.hidden&&(s=o),a.frozen&&!a.hidden&&(i=o)}i!==void 0&&(e[i]._lastFrozen=!0),s!==void 0&&(e[s]._firstFrozenToEnd=!0),this.__updateColumnsBodyContentHidden()}__updateHorizontalScrollPosition(){if(!this._columnTree)return;const e=this.$.table.scrollWidth,i=this.$.table.clientWidth,s=Math.max(0,this.$.table.scrollLeft),o=Si(this.$.table,this.getAttribute("dir")),a=`translate(${-s}px, 0)`;this.$.header.style.transform=a,this.$.footer.style.transform=a,this.$.items.style.transform=a;const n=this.__isRTL?o+i-e:s,l=`translate(${n}px, 0)`;this._frozenCells.forEach(u=>{u.style.transform=l});const d=this.__isRTL?o:s+i-e,c=`translate(${d}px, 0)`;let h=c;if(this._lazyColumns&&this._areSizerCellsAssigned()){const u=this._getColumnsInOrder(),f=[...u].reverse().find(A=>!A.frozenToEnd&&!A._bodyContentHidden),b=this.__getColumnEnd(f),v=u.find(A=>A.frozenToEnd),x=this.__getColumnStart(v);h=`translate(${d+(x-b)+this.__lazyColumnsStart}px, 0)`}this._frozenToEndCells.forEach(u=>{this.$.items.contains(u)?u.style.transform=h:u.style.transform=c}),this.hasAttribute("navigating")&&this.__rowFocusMode&&this.$.table.style.setProperty("--_grid-horizontal-scroll-position",`${-n}px`)}_areSizerCellsAssigned(){return this._getColumnsInOrder().every(e=>e._sizerCell)}};const cn=r=>class extends r{static get properties(){return{selectedItems:{type:Object,notify:!0,value:()=>[],sync:!0},isItemSelectable:{type:Function,notify:!0},__selectedKeys:{type:Object,computed:"__computeSelectedKeys(itemIdPath, selectedItems)"}}}static get observers(){return["__selectedItemsChanged(itemIdPath, selectedItems, isItemSelectable)"]}_isSelected(e){return this.__selectedKeys.has(this.getItemId(e))}__isItemSelectable(e){return!this.isItemSelectable||!e?!0:this.isItemSelectable(e)}selectItem(e){this._isSelected(e)||(this.selectedItems=[...this.selectedItems,e])}deselectItem(e){this._isSelected(e)&&(this.selectedItems=this.selectedItems.filter(i=>!this._itemsEqual(i,e)))}__selectedItemsChanged(){this.requestContentUpdate()}__computeSelectedKeys(e,i){const s=i||[],o=new Set;return s.forEach(a=>{o.add(this.getItemId(a))}),o}};let Ei="prepend";const hn=r=>class extends r{static get properties(){return{multiSort:{type:Boolean,value:!1},multiSortPriority:{type:String,value:()=>Ei},multiSortOnShiftClick:{type:Boolean,value:!1},_sorters:{type:Array,value:()=>[]},_previousSorters:{type:Array,value:()=>[]}}}static setDefaultMultiSortPriority(e){Ei=["append","prepend"].includes(e)?e:"prepend"}ready(){super.ready(),this.addEventListener("sorter-changed",this._onSorterChanged)}_onSorterChanged(e){const i=e.target;e.stopPropagation(),i._grid=this,this.__updateSorter(i,e.detail.shiftClick,e.detail.fromSorterClick),this.__applySorters()}__removeSorters(e){e.length!==0&&(this._sorters=this._sorters.filter(i=>!e.includes(i)),this.__applySorters())}__updateSortOrders(){this._sorters.forEach(i=>{i._order=null});const e=this._getActiveSorters();e.length>1&&e.forEach((i,s)=>{i._order=s})}__updateSorter(e,i,s){if(!e.direction&&!this._sorters.includes(e))return;e._order=null;const o=this._sorters.filter(a=>a!==e);this.multiSort&&(!this.multiSortOnShiftClick||!s)||this.multiSortOnShiftClick&&i?this.multiSortPriority==="append"?this._sorters=[...o,e]:this._sorters=[e,...o]:(e.direction||this.multiSortOnShiftClick)&&(this._sorters=e.direction?[e]:[],o.forEach(a=>{a._order=null,a.direction=null}))}__applySorters(){this.__updateSortOrders(),this.dataProvider&&this.isAttached&&JSON.stringify(this._previousSorters)!==JSON.stringify(this._mapSorters())&&this.__debounceClearCache(),this._a11yUpdateSorters(),this._previousSorters=this._mapSorters()}_getActiveSorters(){return this._sorters.filter(e=>e.direction&&e.isConnected)}_mapSorters(){return this._getActiveSorters().map(e=>({path:e.path,direction:e.direction}))}};const un=r=>class extends r{static get properties(){return{cellClassNameGenerator:{type:Function,sync:!0},cellPartNameGenerator:{type:Function,sync:!0}}}static get observers(){return["__cellClassNameGeneratorChanged(cellClassNameGenerator)","__cellPartNameGeneratorChanged(cellPartNameGenerator)"]}__cellClassNameGeneratorChanged(){this.generateCellClassNames()}__cellPartNameGeneratorChanged(){this.generateCellPartNames()}generateCellClassNames(){T(this.$.items,e=>{e.hidden||this._generateCellClassNames(e,this.__getRowModel(e))})}generateCellPartNames(){T(this.$.items,e=>{e.hidden||this._generateCellPartNames(e,this.__getRowModel(e))})}_generateCellClassNames(e,i){pe(e,s=>{if(s.__generatedClasses&&s.__generatedClasses.forEach(o=>s.classList.remove(o)),this.cellClassNameGenerator&&!e.hasAttribute("loading")){const o=this.cellClassNameGenerator(s._column,i);s.__generatedClasses=o&&o.split(" ").filter(a=>a.length>0),s.__generatedClasses&&s.__generatedClasses.forEach(a=>s.classList.add(a))}})}_generateCellPartNames(e,i){pe(e,s=>{if(s.__generatedParts&&s.__generatedParts.forEach(o=>{q(s,null,o)}),this.cellPartNameGenerator&&!e.hasAttribute("loading")){const o=this.cellPartNameGenerator(s._column,i);s.__generatedParts=o&&o.split(" ").filter(a=>a.length>0),s.__generatedParts&&s.__generatedParts.forEach(a=>{q(s,!0,a)})}})}};const pn=r=>class extends ka(Na(en(sn(Pa(dn(cn(hn(nn(an(xa(on(Xa(Za(rn(tn(un(da(r)))))))))))))))))){static get observers(){return["_columnTreeChanged(_columnTree)","_flatSizeChanged(_flatSize, __virtualizer, _hasData, _columnTree)"]}static get properties(){return{_safari:{type:Boolean,value:$t},_ios:{type:Boolean,value:mi},_firefox:{type:Boolean,value:ha},_android:{type:Boolean,value:fi},_touchDevice:{type:Boolean,value:ys},allRowsVisible:{type:Boolean,value:!1,reflectToAttribute:!0},isAttached:{value:!1},__gridElement:{type:Boolean,value:!0},__hasEmptyStateContent:{type:Boolean,value:!1},__emptyState:{type:Boolean,computed:"__computeEmptyState(_flatSize, __hasEmptyStateContent)"}}}constructor(){super(),this.addEventListener("animationend",this._onAnimationEnd)}get _firstVisibleIndex(){const t=this.__getFirstVisibleItem();return t?t.index:void 0}get _lastVisibleIndex(){const t=this.__getLastVisibleItem();return t?t.index:void 0}connectedCallback(){super.connectedCallback(),this.isAttached=!0}disconnectedCallback(){super.disconnectedCallback(),this.isAttached=!1,this._hideTooltip(!0)}__getFirstVisibleItem(){return this._getRenderedRows().find(t=>this._isInViewport(t))}__getLastVisibleItem(){return this._getRenderedRows().reverse().find(t=>this._isInViewport(t))}_isInViewport(t){const e=this.$.table.getBoundingClientRect(),i=t.getBoundingClientRect(),s=this.$.header.getBoundingClientRect().height,o=this.$.footer.getBoundingClientRect().height;return i.bottom>e.top+s&&i.top<e.bottom-o}_getRenderedRows(){return Array.from(this.$.items.children).filter(t=>!t.hidden).sort((t,e)=>t.index-e.index)}_getRowContainingNode(t){const e=hs("vaadin-grid-cell-content",t);return e?e.assignedSlot.parentElement.parentElement:void 0}_isItemAssignedToRow(t,e){const i=this.__getRowModel(e);return this.getItemId(t)===this.getItemId(i.item)}ready(){super.ready(),this.__virtualizer=new wa({createElements:this._createScrollerRows.bind(this),updateElement:this._updateScrollerItem.bind(this),scrollContainer:this.$.items,scrollTarget:this.$.table,reorderElements:!0}),new ResizeObserver(()=>setTimeout(()=>{this.__updateColumnsBodyContentHidden()})).observe(this.$.table);const t=new ResizeObserver(()=>setTimeout(()=>{this.__updateMinHeight()}));t.observe(this.$.header),t.observe(this.$.items),t.observe(this.$.footer),cs(this),this._tooltipController=new ba(this),this.addController(this._tooltipController),this._tooltipController.setManual(!0),this.__emptyStateContentObserver=new vs(this.$.emptystateslot,({currentNodes:e})=>{this.$.emptystatecell._content=e[0],this.__hasEmptyStateContent=!!this.$.emptystatecell._content})}__getBodyCellCoordinates(t){if(this.$.items.contains(t)&&t.localName==="td")return{item:t.parentElement._item,column:t._column}}__focusBodyCell({item:t,column:e}){const i=this._getRenderedRows().find(o=>o._item===t),s=i&&[...i.children].find(o=>o._column===e);s&&s.focus()}_focusFirstVisibleRow(){const t=this.__getFirstVisibleItem();this.__rowFocusMode=!0,t.focus()}_flatSizeChanged(t,e,i,s){if(e&&i&&s){const o=this.shadowRoot.activeElement,a=this.__getBodyCellCoordinates(o),n=e.size||0;e.size=t,e.update(n-1,n-1),t<n&&e.update(t-1,t-1),a&&o.parentElement.hidden&&this.__focusBodyCell(a),this._resetKeyboardNavigation()}}_createScrollerRows(t){const e=[];for(let i=0;i<t;i++){const s=document.createElement("tr");s.setAttribute("part","row body-row"),s.setAttribute("role","row"),s.setAttribute("tabindex","-1"),this._columnTree&&this._updateRow(s,this._columnTree[this._columnTree.length-1],"body",!1,!0),e.push(s)}return this._columnTree&&this._columnTree[this._columnTree.length-1].forEach(i=>{i.isConnected&&i._cells&&(i._cells=[...i._cells])}),this.__afterCreateScrollerRowsDebouncer=C.debounce(this.__afterCreateScrollerRowsDebouncer,j,()=>{this._afterScroll()}),e}_createCell(t,e,i){const o=`vaadin-grid-cell-content-${this._contentIndex=this._contentIndex+1||0}`,a=document.createElement("vaadin-grid-cell-content");a.setAttribute("slot",o);const n=document.createElement(t);i&&n.setAttribute("data-testid",`colname-${i}`),n.id=o.replace("-content-","-"),n.setAttribute("role",t==="td"?"gridcell":"columnheader"),!fi&&!mi&&(n.addEventListener("mouseenter",d=>{this.$.scroller.hasAttribute("scrolling")||this._showTooltip(d)}),n.addEventListener("mouseleave",()=>{this._hideTooltip()}),n.addEventListener("mousedown",()=>{this._hideTooltip(!0)}));const l=document.createElement("slot");if(l.setAttribute("name",o),e&&e._focusButtonMode){const d=document.createElement("div");d.setAttribute("role","button"),d.setAttribute("tabindex","-1"),n.appendChild(d),n._focusButton=d,n.focus=function(c){n._focusButton.focus(c)},d.appendChild(l)}else n.setAttribute("tabindex","-1"),n.appendChild(l);return n._content=a,a.addEventListener("mousedown",()=>{if(bs){const d=c=>{const h=a.contains(this.getRootNode().activeElement),u=c.composedPath().includes(a);!h&&u&&n.focus({preventScroll:!0}),document.removeEventListener("mouseup",d,!0)};document.addEventListener("mouseup",d,!0)}else setTimeout(()=>{a.contains(this.getRootNode().activeElement)||n.focus({preventScroll:!0})})}),n}_updateRow(t,e,i="body",s=!1,o=!1){const a=document.createDocumentFragment();pe(t,n=>{n._vacant=!0}),t.innerHTML="",i==="body"&&(t.__cells=[],t.__detailsCell=null),e.filter(n=>!n.hidden).forEach((n,l,d)=>{let c;if(i==="body"){n._cells||(n._cells=[]),c=n._cells.find(u=>u._vacant),c||(c=this._createCell("td",n,n.getAttribute("path")),n._onCellKeyDown&&c.addEventListener("keydown",n._onCellKeyDown.bind(n)),n._cells.push(c)),c.setAttribute("part","cell body-cell"),c.__parentRow=t,t.__cells.push(c);const h=t===this.$.sizer;if((!n._bodyContentHidden||h)&&t.appendChild(c),h&&(n._sizerCell=c),l===d.length-1&&this.rowDetailsRenderer){this._detailsCells||(this._detailsCells=[]);const u=this._detailsCells.find(f=>f._vacant)||this._createCell("td");this._detailsCells.indexOf(u)===-1&&this._detailsCells.push(u),u._content.parentElement||a.appendChild(u._content),this._configureDetailsCell(u),t.appendChild(u),t.__detailsCell=u,this._a11ySetRowDetailsCell(t,u),u._vacant=!1}o||(n._cells=[...n._cells])}else{const h=i==="header"?"th":"td";s||n.localName==="vaadin-grid-column-group"?(c=n[`_${i}Cell`],c||(c=this._createCell(h),n._onCellKeyDown&&c.addEventListener("keydown",n._onCellKeyDown.bind(n))),c._column=n,t.appendChild(c),n[`_${i}Cell`]=c):(n._emptyCells||(n._emptyCells=[]),c=n._emptyCells.find(u=>u._vacant)||this._createCell(h),c._column=n,t.appendChild(c),n._emptyCells.indexOf(c)===-1&&n._emptyCells.push(c)),c.part.add("cell",`${i}-cell`)}c._content.parentElement||a.appendChild(c._content),c._vacant=!1,c._column=n}),i!=="body"&&this.__debounceUpdateHeaderFooterRowVisibility(t),this.appendChild(a),this._frozenCellsChanged(),this._updateFirstAndLastColumnForRow(t)}__debounceUpdateHeaderFooterRowVisibility(t){t.__debounceUpdateHeaderFooterRowVisibility=C.debounce(t.__debounceUpdateHeaderFooterRowVisibility,O,()=>this.__updateHeaderFooterRowVisibility(t))}__updateHeaderFooterRowVisibility(t){if(!t)return;const e=Array.from(t.children).filter(i=>{const s=i._column;if(s._emptyCells&&s._emptyCells.indexOf(i)>-1)return!1;if(t.parentElement===this.$.header){if(s.headerRenderer)return!0;if(s.header===null)return!1;if(s.path||s.header!==void 0)return!0}else if(s.footerRenderer)return!0;return!1});t.hidden!==!e.length&&(t.hidden=!e.length),this._resetKeyboardNavigation()}_updateScrollerItem(t,e){this._preventScrollerRotatingCellFocus(t,e),this._columnTree&&(this._updateRowOrderParts(t,e),this._a11yUpdateRowRowindex(t,e),this._testIdUpdateRowRowindex(t,e),this._getItem(e,t))}_columnTreeChanged(t){this._renderColumnTree(t),this.__updateColumnsBodyContentHidden()}_updateRowOrderParts(t,e=t.index){oe(t,{first:e===0,last:e===this._flatSize-1,odd:e%2!==0,even:e%2===0})}_updateRowStateParts(t,{item:e,expanded:i,selected:s,detailsOpened:o}){oe(t,{expanded:i,collapsed:this.__isRowExpandable(t),selected:s,nonselectable:this.__isItemSelectable(e)===!1,"details-opened":o})}__computeEmptyState(t,e){return t===0&&e}_renderColumnTree(t){for(T(this.$.items,e=>{this._updateRow(e,t[t.length-1],"body",!1,!0);const i=this.__getRowModel(e);this._updateRowOrderParts(e),this._updateRowStateParts(e,i),this._filterDragAndDrop(e,i)});this.$.header.children.length<t.length;){const e=document.createElement("tr");e.setAttribute("part","row"),e.setAttribute("role","row"),e.setAttribute("tabindex","-1"),this.$.header.appendChild(e);const i=document.createElement("tr");i.setAttribute("part","row"),i.setAttribute("role","row"),i.setAttribute("tabindex","-1"),this.$.footer.appendChild(i)}for(;this.$.header.children.length>t.length;)this.$.header.removeChild(this.$.header.firstElementChild),this.$.footer.removeChild(this.$.footer.firstElementChild);T(this.$.header,(e,i,s)=>{this._updateRow(e,t[i],"header",i===t.length-1);const o=ue(e);U(o,"first-header-row-cell",i===0),U(o,"last-header-row-cell",i===s.length-1)}),T(this.$.footer,(e,i,s)=>{this._updateRow(e,t[t.length-1-i],"footer",i===0);const o=ue(e);U(o,"first-footer-row-cell",i===0),U(o,"last-footer-row-cell",i===s.length-1)}),this._updateRow(this.$.sizer,t[t.length-1]),this._resizeHandler(),this._frozenCellsChanged(),this._updateFirstAndLastColumn(),this._resetKeyboardNavigation(),this._a11yUpdateHeaderRows(),this._testIdUpdateHeaderRows(),this._a11yUpdateFooterRows(),this._testIdUpdateFooterRows(),this.generateCellClassNames(),this.generateCellPartNames(),this.__updateHeaderAndFooter()}_updateItem(t,e){t._item=e;const i=this.__getRowModel(t);this._toggleDetailsCell(t,i.detailsOpened),this._a11yUpdateRowLevel(t,i.level),this._a11yUpdateRowSelected(t,i.selected),this._updateRowStateParts(t,i),this._generateCellClassNames(t,i),this._generateCellPartNames(t,i),this._filterDragAndDrop(t,i),this.__updateDragSourceParts(t,i),T(t,s=>{if(!(s._column&&!s._column.isConnected)&&s._renderer){const o=s._column||this;s._renderer.call(o,s._content,o,i)}}),this._updateDetailsCellHeight(t),this._a11yUpdateRowExpanded(t,i.expanded)}_resizeHandler(){this._updateDetailsCellHeights(),this.__updateHorizontalScrollPosition()}_onAnimationEnd(t){t.animationName.indexOf("vaadin-grid-appear")===0&&(t.stopPropagation(),this._resetKeyboardNavigation(),requestAnimationFrame(()=>{this.__scrollToPendingIndexes()}))}__getRowModel(t){return{index:t.index,item:t._item,level:this._getIndexLevel(t.index),expanded:this._isExpanded(t._item),selected:this._isSelected(t._item),detailsOpened:!!this.rowDetailsRenderer&&this._isDetailsOpened(t._item)}}_showTooltip(t){const e=this._tooltipController.node;if(e&&e.isConnected){const i=t.target;if(!this.__isCellFullyVisible(i))return;this._tooltipController.setTarget(i),this._tooltipController.setContext(this.getEventContext(t)),e._stateController.open({focus:t.type==="focusin",hover:t.type==="mouseenter"})}}__isCellFullyVisible(t){if(t.hasAttribute("frozen")||t.hasAttribute("frozen-to-end"))return!0;let{left:e,right:i}=this.getBoundingClientRect();const s=[...t.parentNode.children].find(n=>n.hasAttribute("last-frozen"));if(s){const n=s.getBoundingClientRect();e=this.__isRTL?e:n.right,i=this.__isRTL?n.left:i}const o=[...t.parentNode.children].find(n=>n.hasAttribute("first-frozen-to-end"));if(o){const n=o.getBoundingClientRect();e=this.__isRTL?n.right:e,i=this.__isRTL?i:n.left}const a=t.getBoundingClientRect();return a.left>=e&&a.right<=i}_hideTooltip(t){const e=this._tooltipController&&this._tooltipController.node;e&&e._stateController.close(t)}requestContentUpdate(){this.__updateHeaderAndFooter(),this.__updateVisibleRows()}__updateHeaderAndFooter(){(this._columnTree||[]).forEach(t=>{t.forEach(e=>{e._renderHeaderAndFooter&&e._renderHeaderAndFooter()})})}__updateVisibleRows(t,e){this.__virtualizer&&this.__virtualizer.update(t,e)}__updateMinHeight(){const e=this.$.header.clientHeight,i=this.$.footer.clientHeight,s=this.$.table.offsetHeight-this.$.table.clientHeight,o=e+36+i+s;!this.__minHeightStyleSheet&&fa&&(this.__minHeightStyleSheet=new CSSStyleSheet,this.shadowRoot.adoptedStyleSheets=[...this.shadowRoot.adoptedStyleSheets,this.__minHeightStyleSheet]),this.__minHeightStyleSheet?this.__minHeightStyleSheet.replaceSync(`:host { --_grid-min-height: ${o}px; }`):this.style.setProperty("--_grid-min-height",`${o}px`)}};const fn=P`
  @keyframes vaadin-grid-appear {
    to {
      opacity: 1;
    }
  }

  :host {
    display: flex;
    flex-direction: column;
    animation: 1ms vaadin-grid-appear;
    height: 400px;
    min-height: var(--_grid-min-height, 0);
    flex: 1 1 auto;
    align-self: stretch;
    position: relative;
  }

  :host([hidden]) {
    display: none !important;
  }

  :host([disabled]) {
    pointer-events: none;
  }

  #scroller {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    transform: translateY(0);
    width: auto;
    height: auto;
    position: absolute;
    inset: 0;
  }

  :host([all-rows-visible]) {
    height: auto;
    align-self: flex-start;
    min-height: auto;
    flex-grow: 0;
    width: 100%;
  }

  :host([all-rows-visible]) #scroller {
    width: 100%;
    height: 100%;
    position: relative;
  }

  :host([all-rows-visible]) #items {
    min-height: 1px;
  }

  #table {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow: auto;
    position: relative;
    outline: none;
    /* Workaround for a Desktop Safari bug: new stacking context here prevents the scrollbar from getting hidden */
    z-index: 0;
  }

  #header,
  #footer {
    display: block;
    position: -webkit-sticky;
    position: sticky;
    left: 0;
    overflow: visible;
    width: 100%;
    z-index: 1;
  }

  #header {
    top: 0;
  }

  th {
    text-align: inherit;
  }

  /* Safari doesn't work with "inherit" */
  [safari] th {
    text-align: initial;
  }

  #footer {
    bottom: 0;
  }

  #items {
    flex-grow: 1;
    flex-shrink: 0;
    display: block;
    position: -webkit-sticky;
    position: sticky;
    width: 100%;
    left: 0;
    overflow: visible;
  }

  [part~='row'] {
    display: flex;
    width: 100%;
    box-sizing: border-box;
    margin: 0;
  }

  [part~='row'][loading] [part~='body-cell'] ::slotted(vaadin-grid-cell-content) {
    visibility: hidden;
  }

  [column-rendering='lazy'] [part~='body-cell']:not([frozen]):not([frozen-to-end]) {
    transform: translateX(var(--_grid-lazy-columns-start));
  }

  #items [part~='row'] {
    position: absolute;
  }

  #items [part~='row']:empty {
    height: 100%;
  }

  [part~='cell']:not([part~='details-cell']) {
    flex-shrink: 0;
    flex-grow: 1;
    box-sizing: border-box;
    display: flex;
    width: 100%;
    position: relative;
    align-items: center;
    padding: 0;
    white-space: nowrap;
  }

  [part~='cell'] {
    outline: none;
  }

  [part~='cell'] > [tabindex] {
    display: flex;
    align-items: inherit;
    outline: none;
    position: absolute;
    inset: 0;
  }

  /* Switch the focusButtonMode wrapping element to "position: static" temporarily
     when measuring real width of the cells in the auto-width columns. */
  [measuring-auto-width] [part~='cell'] > [tabindex] {
    position: static;
  }

  [part~='details-cell'] {
    position: absolute;
    bottom: 0;
    width: 100%;
    box-sizing: border-box;
    padding: 0;
  }

  [part~='cell'] ::slotted(vaadin-grid-cell-content) {
    display: block;
    width: 100%;
    box-sizing: border-box;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  [hidden] {
    display: none !important;
  }

  [frozen],
  [frozen-to-end] {
    z-index: 2;
    will-change: transform;
  }

  [no-scrollbars][safari] #table,
  [no-scrollbars][firefox] #table {
    overflow: hidden;
  }

  /* Empty state */

  #scroller:not([empty-state]) #emptystatebody,
  #scroller[empty-state] #items {
    display: none;
  }

  #emptystatebody {
    display: flex;
    position: sticky;
    inset: 0;
    flex: 1;
    overflow: hidden;
  }

  #emptystaterow {
    display: flex;
    flex: 1;
  }

  #emptystatecell {
    display: block;
    flex: 1;
    overflow: auto;
  }

  /* Reordering styles */
  :host([reordering]) [part~='cell'] ::slotted(vaadin-grid-cell-content),
  :host([reordering]) [part~='resize-handle'],
  #scroller[no-content-pointer-events] [part~='cell'] ::slotted(vaadin-grid-cell-content) {
    pointer-events: none;
  }

  [part~='reorder-ghost'] {
    visibility: hidden;
    position: fixed;
    pointer-events: none;
    opacity: 0.5;

    /* Prevent overflowing the grid in Firefox */
    top: 0;
    left: 0;
  }

  :host([reordering]) {
    -webkit-user-select: none;
    user-select: none;
  }

  /* Resizing styles */
  [part~='resize-handle'] {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    cursor: col-resize;
    z-index: 1;
  }

  [part~='resize-handle']::before {
    position: absolute;
    content: '';
    height: 100%;
    width: 35px;
    transform: translateX(-50%);
  }

  [last-column] [part~='resize-handle']::before,
  [last-frozen] [part~='resize-handle']::before {
    width: 18px;
    transform: none;
    right: 0;
  }

  [frozen-to-end] [part~='resize-handle'] {
    left: 0;
    right: auto;
  }

  [frozen-to-end] [part~='resize-handle']::before {
    left: 0;
    right: auto;
  }

  [first-frozen-to-end] [part~='resize-handle']::before {
    width: 18px;
    transform: none;
  }

  [first-frozen-to-end] {
    margin-inline-start: auto;
  }

  /* Hide resize handle if scrolled to end */
  :host(:not([overflow~='end'])) [first-frozen-to-end] [part~='resize-handle'] {
    display: none;
  }

  #scroller[column-resizing],
  #scroller[range-selecting] {
    -webkit-user-select: none;
    user-select: none;
  }

  /* Sizer styles */
  #sizer {
    display: flex;
    position: absolute;
    visibility: hidden;
  }

  #sizer [part~='details-cell'] {
    display: none !important;
  }

  #sizer [part~='cell'][hidden] {
    display: none !important;
  }

  #sizer [part~='cell'] {
    display: block;
    flex-shrink: 0;
    line-height: 0;
    height: 0 !important;
    min-height: 0 !important;
    max-height: 0 !important;
    padding: 0 !important;
    border: none !important;
  }

  #sizer [part~='cell']::before {
    content: '-';
  }

  #sizer [part~='cell'] ::slotted(vaadin-grid-cell-content) {
    display: none !important;
  }

  /* RTL specific styles */

  :host([dir='rtl']) #items,
  :host([dir='rtl']) #header,
  :host([dir='rtl']) #footer {
    left: auto;
  }

  :host([dir='rtl']) [part~='reorder-ghost'] {
    left: auto;
    right: 0;
  }

  :host([dir='rtl']) [part~='resize-handle'] {
    left: 0;
    right: auto;
  }

  :host([dir='rtl']) [part~='resize-handle']::before {
    transform: translateX(50%);
  }

  :host([dir='rtl']) [last-column] [part~='resize-handle']::before,
  :host([dir='rtl']) [last-frozen] [part~='resize-handle']::before {
    left: 0;
    right: auto;
  }

  :host([dir='rtl']) [frozen-to-end] [part~='resize-handle'] {
    right: 0;
    left: auto;
  }

  :host([dir='rtl']) [frozen-to-end] [part~='resize-handle']::before {
    right: 0;
    left: auto;
  }

  @media (forced-colors: active) {
    [part~='selected-row'] [part~='first-column-cell']::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      border: 2px solid;
    }

    [part~='focused-cell']::before {
      outline: 2px solid !important;
      outline-offset: -1px;
    }
  }
`;Je("vaadin-grid",fn,{moduleId:"vaadin-grid-styles"});class mn extends pn(na(rr(Zo(os)))){static get template(){return Bo`
      <div
        id="scroller"
        safari$="[[_safari]]"
        ios$="[[_ios]]"
        loading$="[[loading]]"
        column-reordering-allowed$="[[columnReorderingAllowed]]"
        empty-state$="[[__emptyState]]"
      >
        <table id="table" role="treegrid" aria-multiselectable="true" tabindex="0" aria-label$="[[accessibleName]]">
          <caption id="sizer" part="row"></caption>
          <thead id="header" role="rowgroup"></thead>
          <tbody id="items" role="rowgroup"></tbody>
          <tbody id="emptystatebody">
            <tr id="emptystaterow">
              <td part="empty-state" id="emptystatecell" tabindex="0">
                <slot name="empty-state" id="emptystateslot"></slot>
              </td>
            </tr>
          </tbody>
          <tfoot id="footer" role="rowgroup"></tfoot>
        </table>

        <div part="reorder-ghost"></div>
      </div>

      <slot name="tooltip"></slot>

      <div id="focusexit" tabindex="0"></div>
    `}static get is(){return"vaadin-grid"}}Nt(mn);const Ti=Symbol("valueNotInitialized");class gn extends Ls{constructor(t){if(super(t),t.type!==Ri.ELEMENT)throw new Error(`\`${this.constructor.name}\` must be bound to an element.`);this.previousValue=Ti}render(t,e){return w}update(t,[e,i]){return this.hasChanged(i)?(this.host=t.options&&t.options.host,this.element=t.element,this.renderer=e,this.previousValue===Ti?this.addRenderer():this.runRenderer(),this.previousValue=Array.isArray(i)?[...i]:i,w):w}reconnected(){this.addRenderer()}disconnected(){this.removeRenderer()}addRenderer(){throw new Error("The `addRenderer` method must be implemented.")}runRenderer(){throw new Error("The `runRenderer` method must be implemented.")}removeRenderer(){throw new Error("The `removeRenderer` method must be implemented.")}renderRenderer(t,...e){const i=this.renderer.call(this.host,...e);ct(i,t,{host:this.host})}hasChanged(t){return Array.isArray(t)?!Array.isArray(this.previousValue)||this.previousValue.length!==t.length?!0:t.some((e,i)=>e!==this.previousValue[i]):this.previousValue!==t}}const Pi=Symbol("contentUpdateDebouncer");class _n extends gn{get rendererProperty(){throw new Error("The `rendererProperty` getter must be implemented.")}addRenderer(){this.element[this.rendererProperty]=(t,e)=>{this.renderRenderer(t,e)}}runRenderer(){const t=this.element._grid;t[Pi]=C.debounce(t[Pi],O,()=>{t.requestContentUpdate()})}removeRenderer(){this.element[this.rendererProperty]=null}}class bn extends _n{get rendererProperty(){return"headerRenderer"}}const yn=Ni(bn);const Ii=(r,t,e)=>{const i=new Map;for(let s=t;s<=e;s++)i.set(r[s],s);return i},Et=Ni(class extends Ds{constructor(r){if(super(r),r.type!==Ri.CHILD)throw Error("repeat() can only be used in text expressions")}dt(r,t,e){let i;e===void 0?e=t:t!==void 0&&(i=t);const s=[],o=[];let a=0;for(const n of r)s[a]=i?i(n,a):a,o[a]=e(n,a),a++;return{values:o,keys:s}}render(r,t,e){return this.dt(r,t,e).values}update(r,[t,e,i]){const s=Os(r),{values:o,keys:a}=this.dt(t,e,i);if(!Array.isArray(s))return this.ut=a,o;const n=this.ut??=[],l=[];let d,c,h=0,u=s.length-1,f=0,b=o.length-1;for(;h<=u&&f<=b;)if(s[h]===null)h++;else if(s[u]===null)u--;else if(n[h]===a[f])l[f]=Z(s[h],o[f]),h++,f++;else if(n[u]===a[b])l[b]=Z(s[u],o[b]),u--,b--;else if(n[h]===a[b])l[b]=Z(s[h],o[b]),_e(r,l[b+1],s[h]),h++,b--;else if(n[u]===a[f])l[f]=Z(s[u],o[f]),_e(r,s[h],s[u]),u--,f++;else if(d===void 0&&(d=Ii(a,f,b),c=Ii(n,h,u)),d.has(n[h]))if(d.has(n[u])){const v=c.get(a[f]),x=v!==void 0?s[v]:null;if(x===null){const S=_e(r,s[h]);Z(S,o[f]),l[f]=S}else l[f]=Z(x,o[f]),_e(r,s[h],x),s[v]=null;f++}else tt(s[u]),u--;else tt(s[h]),h++;for(;f<=b;){const v=_e(r,l[b+1]);Z(v,o[f]),l[f++]=v}for(;h<=u;){const v=s[h++];v!==null&&tt(v)}return this.ut=a,Vs(r,l),Fs}});const Is=Symbol("dispatchHooks");function vn(r,t){const e=r[Is];if(!e)throw new Error(`'${r.type}' event needs setupDispatchHooks().`);e.addEventListener("after",t)}const zi=new WeakMap;function Cn(r,...t){let e=zi.get(r);e||(e=new Set,zi.set(r,e));for(const i of t){if(e.has(i))continue;let s=!1;r.addEventListener(i,o=>{if(s)return;o.stopImmediatePropagation();const a=Reflect.construct(o.constructor,[o.type,o]),n=new EventTarget;a[Is]=n,s=!0;const l=r.dispatchEvent(a);s=!1,l||o.preventDefault(),n.dispatchEvent(new Event("after"))},{capture:!0}),e.add(i)}}function wn(r,t){t.bubbles&&(!r.shadowRoot||t.composed)&&t.stopPropagation();const e=Reflect.construct(t.constructor,[t.type,t]),i=r.dispatchEvent(e);return i||t.preventDefault(),i}const Tt=Symbol("createValidator"),Pt=Symbol("getValidityAnchor"),dt=Symbol("privateValidator"),D=Symbol("privateSyncValidity"),Le=Symbol("privateCustomValidationMessage");function xn(r){var t;class e extends r{constructor(){super(...arguments),this[t]=""}get validity(){return this[D](),this[B].validity}get validationMessage(){return this[D](),this[B].validationMessage}get willValidate(){return this[D](),this[B].willValidate}checkValidity(){return this[D](),this[B].checkValidity()}reportValidity(){return this[D](),this[B].reportValidity()}setCustomValidity(s){this[Le]=s,this[D]()}requestUpdate(s,o,a){super.requestUpdate(s,o,a),this[D]()}firstUpdated(s){super.firstUpdated(s),this[D]()}[(t=Le,D)](){this[dt]||(this[dt]=this[Tt]());const{validity:s,validationMessage:o}=this[dt].getValidity(),a=!!this[Le],n=this[Le]||o;this[B].setValidity({...s,customError:a},n,this[Pt]()??void 0)}[Tt](){throw new Error("Implement [createValidator]")}[Pt](){throw new Error("Implement [getValidityAnchor]")}}return e}const Be=Symbol("getFormValue"),It=Symbol("getFormState");function Sn(r){class t extends r{get form(){return this[B].form}get labels(){return this[B].labels}get name(){return this.getAttribute("name")??""}set name(i){this.setAttribute("name",i)}get disabled(){return this.hasAttribute("disabled")}set disabled(i){this.toggleAttribute("disabled",i)}attributeChangedCallback(i,s,o){if(i==="name"||i==="disabled"){const a=i==="disabled"?s!==null:s;this.requestUpdate(i,a);return}super.attributeChangedCallback(i,s,o)}requestUpdate(i,s,o){super.requestUpdate(i,s,o),this[B].setFormValue(this[Be](),this[It]())}[Be](){throw new Error("Implement [getFormValue]")}[It](){return this[Be]()}formDisabledCallback(i){this.disabled=i}}return t.formAssociated=!0,p([m({noAccessor:!0})],t.prototype,"name",null),p([m({type:Boolean,noAccessor:!0})],t.prototype,"disabled",null),t}class An{constructor(t){this.getCurrentState=t,this.currentValidity={validity:{},validationMessage:""}}getValidity(){const t=this.getCurrentState();if(!(!this.prevState||!this.equals(this.prevState,t)))return this.currentValidity;const{validity:i,validationMessage:s}=this.computeValidity(t);return this.prevState=this.copy(t),this.currentValidity={validationMessage:s,validity:{badInput:i.badInput,customError:i.customError,patternMismatch:i.patternMismatch,rangeOverflow:i.rangeOverflow,rangeUnderflow:i.rangeUnderflow,stepMismatch:i.stepMismatch,tooLong:i.tooLong,tooShort:i.tooShort,typeMismatch:i.typeMismatch,valueMissing:i.valueMissing}},this.currentValidity}}class En extends An{computeValidity(t){return this.checkboxControl||(this.checkboxControl=document.createElement("input"),this.checkboxControl.type="checkbox"),this.checkboxControl.checked=t.checked,this.checkboxControl.required=t.required,{validity:this.checkboxControl.validity,validationMessage:this.checkboxControl.validationMessage}}equals(t,e){return t.checked===e.checked&&t.required===e.required}copy({checked:t,required:e}){return{checked:t,required:e}}}const Tn=$s(xn(Sn(Bs(K))));class J extends Tn{constructor(){super(),this.selected=!1,this.icons=!1,this.showOnlySelectedIcon=!1,this.required=!1,this.value="on",this.addEventListener("click",t=>{!Hs(t)||!this.input||(this.focus(),Us(this.input))}),Cn(this,"keydown"),this.addEventListener("keydown",t=>{vn(t,()=>{t.defaultPrevented||t.key!=="Enter"||this.disabled||!this.input||this.input.click()})})}render(){return g`
      <div class="switch ${ht(this.getRenderClasses())}">
        <input
          id="switch"
          class="touch"
          type="checkbox"
          role="switch"
          aria-label=${this.ariaLabel||w}
          ?checked=${this.selected}
          ?disabled=${this.disabled}
          ?required=${this.required}
          @input=${this.handleInput}
          @change=${this.handleChange} />

        <md-focus-ring part="focus-ring" for="switch"></md-focus-ring>
        <span class="track"> ${this.renderHandle()} </span>
      </div>
    `}getRenderClasses(){return{selected:this.selected,unselected:!this.selected,disabled:this.disabled}}renderHandle(){const t={"with-icon":this.showOnlySelectedIcon?this.selected:this.icons};return g`
      ${this.renderTouchTarget()}
      <span class="handle-container">
        <md-ripple for="switch" ?disabled="${this.disabled}"></md-ripple>
        <span class="handle ${ht(t)}">
          ${this.shouldShowIcons()?this.renderIcons():g``}
        </span>
      </span>
    `}renderIcons(){return g`
      <div class="icons">
        ${this.renderOnIcon()}
        ${this.showOnlySelectedIcon?g``:this.renderOffIcon()}
      </div>
    `}renderOnIcon(){return g`
      <slot class="icon icon--on" name="on-icon">
        <svg viewBox="0 0 24 24">
          <path
            d="M9.55 18.2 3.65 12.3 5.275 10.675 9.55 14.95 18.725 5.775 20.35 7.4Z" />
        </svg>
      </slot>
    `}renderOffIcon(){return g`
      <slot class="icon icon--off" name="off-icon">
        <svg viewBox="0 0 24 24">
          <path
            d="M6.4 19.2 4.8 17.6 10.4 12 4.8 6.4 6.4 4.8 12 10.4 17.6 4.8 19.2 6.4 13.6 12 19.2 17.6 17.6 19.2 12 13.6Z" />
        </svg>
      </slot>
    `}renderTouchTarget(){return g`<span class="touch"></span>`}shouldShowIcons(){return this.icons||this.showOnlySelectedIcon}handleInput(t){const e=t.target;this.selected=e.checked}handleChange(t){wn(this,t)}[Be](){return this.selected?this.value:null}[It](){return String(this.selected)}formResetCallback(){this.selected=this.hasAttribute("selected")}formStateRestoreCallback(t){this.selected=t==="true"}[Tt](){return new En(()=>({checked:this.selected,required:this.required}))}[Pt](){return this.input}}J.shadowRootOptions={mode:"open",delegatesFocus:!0};p([m({type:Boolean})],J.prototype,"selected",void 0);p([m({type:Boolean})],J.prototype,"icons",void 0);p([m({type:Boolean,attribute:"show-only-selected-icon"})],J.prototype,"showOnlySelectedIcon",void 0);p([m({type:Boolean})],J.prototype,"required",void 0);p([m()],J.prototype,"value",void 0);p([Rt("input")],J.prototype,"input",void 0);const Pn=P`@layer styles, hcm;@layer styles{:host{display:inline-flex;outline:none;vertical-align:top;-webkit-tap-highlight-color:rgba(0,0,0,0);cursor:pointer}:host([disabled]){cursor:default}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--md-switch-track-height, 32px))/2) 0px}md-focus-ring{--md-focus-ring-shape-start-start: var(--md-switch-track-shape-start-start, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)));--md-focus-ring-shape-start-end: var(--md-switch-track-shape-start-end, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)));--md-focus-ring-shape-end-end: var(--md-switch-track-shape-end-end, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)));--md-focus-ring-shape-end-start: var(--md-switch-track-shape-end-start, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)))}.switch{align-items:center;display:inline-flex;flex-shrink:0;position:relative;width:var(--md-switch-track-width, 52px);height:var(--md-switch-track-height, 32px);border-start-start-radius:var(--md-switch-track-shape-start-start, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)));border-start-end-radius:var(--md-switch-track-shape-start-end, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)));border-end-end-radius:var(--md-switch-track-shape-end-end, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)));border-end-start-radius:var(--md-switch-track-shape-end-start, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)))}input{appearance:none;height:max(100%,var(--md-switch-touch-target-size, 48px));outline:none;margin:0;position:absolute;width:max(100%,var(--md-switch-touch-target-size, 48px));z-index:1;cursor:inherit;top:50%;left:50%;transform:translate(-50%, -50%)}:host([touch-target=none]) input{display:none}}@layer styles{.track{position:absolute;width:100%;height:100%;box-sizing:border-box;border-radius:inherit;display:flex;justify-content:center;align-items:center}.track::before{content:"";display:flex;position:absolute;height:100%;width:100%;border-radius:inherit;box-sizing:border-box;transition-property:opacity,background-color;transition-timing-function:linear;transition-duration:67ms}.disabled .track{background-color:rgba(0,0,0,0);border-color:rgba(0,0,0,0)}.disabled .track::before,.disabled .track::after{transition:none;opacity:var(--md-switch-disabled-track-opacity, 0.12)}.disabled .track::before{background-clip:content-box}.selected .track::before{background-color:var(--md-switch-selected-track-color, var(--md-sys-color-primary, #6750a4))}.selected:hover .track::before{background-color:var(--md-switch-selected-hover-track-color, var(--md-sys-color-primary, #6750a4))}.selected:focus-within .track::before{background-color:var(--md-switch-selected-focus-track-color, var(--md-sys-color-primary, #6750a4))}.selected:active .track::before{background-color:var(--md-switch-selected-pressed-track-color, var(--md-sys-color-primary, #6750a4))}.selected.disabled .track{background-clip:border-box}.selected.disabled .track::before{background-color:var(--md-switch-disabled-selected-track-color, var(--md-sys-color-on-surface, #1d1b20))}.unselected .track::before{background-color:var(--md-switch-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));border-color:var(--md-switch-track-outline-color, var(--md-sys-color-outline, #79747e));border-style:solid;border-width:var(--md-switch-track-outline-width, 2px)}.unselected:hover .track::before{background-color:var(--md-switch-hover-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));border-color:var(--md-switch-hover-track-outline-color, var(--md-sys-color-outline, #79747e))}.unselected:focus-visible .track::before{background-color:var(--md-switch-focus-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));border-color:var(--md-switch-focus-track-outline-color, var(--md-sys-color-outline, #79747e))}.unselected:active .track::before{background-color:var(--md-switch-pressed-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));border-color:var(--md-switch-pressed-track-outline-color, var(--md-sys-color-outline, #79747e))}.unselected.disabled .track::before{background-color:var(--md-switch-disabled-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));border-color:var(--md-switch-disabled-track-outline-color, var(--md-sys-color-on-surface, #1d1b20))}}@layer hcm{@media(forced-colors: active){.selected .track::before{background:ButtonText;border-color:ButtonText}.disabled .track::before{border-color:GrayText;opacity:1}.disabled.selected .track::before{background:GrayText}}}@layer styles{.handle-container{display:flex;place-content:center;place-items:center;position:relative;transition:margin 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275)}.selected .handle-container{margin-inline-start:calc(var(--md-switch-track-width, 52px) - var(--md-switch-track-height, 32px))}.unselected .handle-container{margin-inline-end:calc(var(--md-switch-track-width, 52px) - var(--md-switch-track-height, 32px))}.disabled .handle-container{transition:none}.handle{border-start-start-radius:var(--md-switch-handle-shape-start-start, var(--md-switch-handle-shape, var(--md-sys-shape-corner-full, 9999px)));border-start-end-radius:var(--md-switch-handle-shape-start-end, var(--md-switch-handle-shape, var(--md-sys-shape-corner-full, 9999px)));border-end-end-radius:var(--md-switch-handle-shape-end-end, var(--md-switch-handle-shape, var(--md-sys-shape-corner-full, 9999px)));border-end-start-radius:var(--md-switch-handle-shape-end-start, var(--md-switch-handle-shape, var(--md-sys-shape-corner-full, 9999px)));height:var(--md-switch-handle-height, 16px);width:var(--md-switch-handle-width, 16px);transform-origin:center;transition-property:height,width;transition-duration:250ms,250ms;transition-timing-function:cubic-bezier(0.2, 0, 0, 1),cubic-bezier(0.2, 0, 0, 1);z-index:0}.handle::before{content:"";display:flex;inset:0;position:absolute;border-radius:inherit;box-sizing:border-box;transition:background-color 67ms linear}.disabled .handle,.disabled .handle::before{transition:none}.selected .handle{height:var(--md-switch-selected-handle-height, 24px);width:var(--md-switch-selected-handle-width, 24px)}.handle.with-icon{height:var(--md-switch-with-icon-handle-height, 24px);width:var(--md-switch-with-icon-handle-width, 24px)}.selected:not(.disabled):active .handle,.unselected:not(.disabled):active .handle{height:var(--md-switch-pressed-handle-height, 28px);width:var(--md-switch-pressed-handle-width, 28px);transition-timing-function:linear;transition-duration:100ms}.selected .handle::before{background-color:var(--md-switch-selected-handle-color, var(--md-sys-color-on-primary, #fff))}.selected:hover .handle::before{background-color:var(--md-switch-selected-hover-handle-color, var(--md-sys-color-primary-container, #eaddff))}.selected:focus-within .handle::before{background-color:var(--md-switch-selected-focus-handle-color, var(--md-sys-color-primary-container, #eaddff))}.selected:active .handle::before{background-color:var(--md-switch-selected-pressed-handle-color, var(--md-sys-color-primary-container, #eaddff))}.selected.disabled .handle::before{background-color:var(--md-switch-disabled-selected-handle-color, var(--md-sys-color-surface, #fef7ff));opacity:var(--md-switch-disabled-selected-handle-opacity, 1)}.unselected .handle::before{background-color:var(--md-switch-handle-color, var(--md-sys-color-outline, #79747e))}.unselected:hover .handle::before{background-color:var(--md-switch-hover-handle-color, var(--md-sys-color-on-surface-variant, #49454f))}.unselected:focus-within .handle::before{background-color:var(--md-switch-focus-handle-color, var(--md-sys-color-on-surface-variant, #49454f))}.unselected:active .handle::before{background-color:var(--md-switch-pressed-handle-color, var(--md-sys-color-on-surface-variant, #49454f))}.unselected.disabled .handle::before{background-color:var(--md-switch-disabled-handle-color, var(--md-sys-color-on-surface, #1d1b20));opacity:var(--md-switch-disabled-handle-opacity, 0.38)}md-ripple{border-radius:var(--md-switch-state-layer-shape, var(--md-sys-shape-corner-full, 9999px));height:var(--md-switch-state-layer-size, 40px);inset:unset;width:var(--md-switch-state-layer-size, 40px)}.selected md-ripple{--md-ripple-hover-color: var(--md-switch-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--md-ripple-pressed-color: var(--md-switch-selected-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--md-ripple-hover-opacity: var(--md-switch-selected-hover-state-layer-opacity, 0.08);--md-ripple-pressed-opacity: var(--md-switch-selected-pressed-state-layer-opacity, 0.12)}.unselected md-ripple{--md-ripple-hover-color: var(--md-switch-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-pressed-color: var(--md-switch-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-hover-opacity: var(--md-switch-hover-state-layer-opacity, 0.08);--md-ripple-pressed-opacity: var(--md-switch-pressed-state-layer-opacity, 0.12)}}@layer hcm{@media(forced-colors: active){.unselected .handle::before{background:ButtonText}.disabled .handle::before{opacity:1}.disabled.unselected .handle::before{background:GrayText}}}@layer styles{.icons{position:relative;height:100%;width:100%}.icon{position:absolute;inset:0;margin:auto;display:flex;align-items:center;justify-content:center;fill:currentColor;transition:fill 67ms linear,opacity 33ms linear,transform 167ms cubic-bezier(0.2, 0, 0, 1);opacity:0}.disabled .icon{transition:none}.selected .icon--on,.unselected .icon--off{opacity:1}.unselected .handle:not(.with-icon) .icon--on{transform:rotate(-45deg)}.icon--off{width:var(--md-switch-icon-size, 16px);height:var(--md-switch-icon-size, 16px);color:var(--md-switch-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9))}.unselected:hover .icon--off{color:var(--md-switch-hover-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9))}.unselected:focus-within .icon--off{color:var(--md-switch-focus-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9))}.unselected:active .icon--off{color:var(--md-switch-pressed-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9))}.unselected.disabled .icon--off{color:var(--md-switch-disabled-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9));opacity:var(--md-switch-disabled-icon-opacity, 0.38)}.icon--on{width:var(--md-switch-selected-icon-size, 16px);height:var(--md-switch-selected-icon-size, 16px);color:var(--md-switch-selected-icon-color, var(--md-sys-color-on-primary-container, #21005d))}.selected:hover .icon--on{color:var(--md-switch-selected-hover-icon-color, var(--md-sys-color-on-primary-container, #21005d))}.selected:focus-within .icon--on{color:var(--md-switch-selected-focus-icon-color, var(--md-sys-color-on-primary-container, #21005d))}.selected:active .icon--on{color:var(--md-switch-selected-pressed-icon-color, var(--md-sys-color-on-primary-container, #21005d))}.selected.disabled .icon--on{color:var(--md-switch-disabled-selected-icon-color, var(--md-sys-color-on-surface, #1d1b20));opacity:var(--md-switch-disabled-selected-icon-opacity, 0.38)}}@layer hcm{@media(forced-colors: active){.icon--off{fill:Canvas}.icon--on{fill:ButtonText}.disabled.unselected .icon--off,.disabled.selected .icon--on{opacity:1}.disabled .icon--on{fill:GrayText}}}
`;let zt=class extends J{};zt.styles=[Pn];zt=p([Re("md-switch")],zt);const Ne=P`
  :host {
    --_ix-grid-cell-padding: var(--ix-grid-cell-padding, 1rem);
    --lumo-primary-color-50pct: transparent;
  }

  vaadin-grid::part(first-frozen-to-end-cell) {
    border-left: 0.063rem solid var(--_lumo-grid-border-color);
    box-shadow: -0.375rem 0 0.375rem -0.375rem #0000001a;
  }

  * {
    font-family: inherit;
  }

  vaadin-grid::part(cell) {
    cursor: var(--ix-grid-cell-pointer, pointer);
  }

  vaadin-grid::part(header-cell) {
    cursor: default;
    --vaadin-grid-cell-background: #fff;
  }

  vaadin-grid::part(row):hover {
    --vaadin-grid-cell-background: var(--ix-grid-hover-background, #f5f5f5);
  }

  vaadin-grid-cell-content {
    font-size: 14px;
    --_cell-padding: var(--pr-grid-cell-padding, 14px 10px);
  }

  .hide-column-headers::part(header-cell) {
    display: none;
  }
  .footer-button {
    display: inline-flex;
    align-items: center;
    font-weight: 600;
    font-size: 14px;
    text-transform: uppercase;
    color: #e08114;
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px 8px;
    user-select: none;
  }
  .footer-button:hover {
    text-decoration: underline;
  }

  .footer-button:focus {
    outline: 2px solid #e08114;
    outline-offset: 2px;
  }
  vaadin-grid::part(ix-disabled-cell) {
    cursor: default;
    color: var(--cp-neutral-blue-60p);
    --vaadin-grid-cell-background: var(--cp-neutral-blue-12p);
  }

  pr-grid-download-menu {
    width: 38px;
    margin-right: 2px;
  }

  pr-grid-column-filter {
    width: 36px;
  }
  .menu-item {
    background: none;
    border: none;
  }

  .menu-item:hover,
  .menu-item:focus {
    background-color: #e0e7ff;
    outline: none;
  }
  .menu {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
  }
  .grid-container {
    background-color: var(--clr-surface-container-lowest, #ffffff);
    border-radius: 8px;
    box-shadow:
      rgba(0, 0, 0, 0.12) 0px 12px 20px -12px,
      #e1e4e8 0px 0px 0px 1px inset;
    box-sizing: border-box;
    padding: 2px;
  }

  .touch-edge {
    margin: 0 -3px;
  }

  .grid-header {
    display: flex;
    padding: 1rem;
    flex-direction: column;
    // display: flex;
    // -webkit-box-pack: justify;
    // place-content: space-between;
    // -webkit-box-align: center;
    // align-items: center;
    // padding: 1rem;
    // flex-wrap: wrap;
    // gap: 18px;
  }

  .grid-menu {
    display: flex;
    align-items: center;
    margin-left: auto;
  }

  .grid-menu ix-button {
    --md-text-button-leading-space: 4px;
    --md-text-button-trailing-space: 4px;
  }

  .grid-menu span {
    color: var(--clr-primary, #e08114);
    cursor: pointer;
  }

  .header {
    font-weight: bold;
    display: flex;
    user-select: none;
    align-items: center;
    padding-right: calc(var(--_ix-grid-cell-padding) + 2px);
    position: relative;

    &:not(.frozen):not(.last).border::after {
      content: "";
      display: block;
      position: absolute;
      border: 0;
      border-right-width: var(--ix-grid-header-border-width, 2px);
      border-color: var(
        --ix-grid-header-border-color,
        var(--clr-outline, #0922411f)
      );
      border-style: solid;
      margin-right: 0;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 1;
    }

    .header-label {
      position: relative;
      text-overflow: ellipsis;
      overflow: hidden;
      flex-grow: 1;
      z-index: 2;
      padding-left: 0.25rem;
    }
  }

  .header .header-sort-icon {
    background: #fff;
    display: none;
    padding-left: 5px;
    font-size: 17px;
    color: rgba(0, 0, 0, 0.54);
    cursor: pointer;
    height: 18px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 3;
  }

  .header:hover .header-sort-icon {
    display: block;
  }

  .columns-reordering {
    opacity: 0.25;
  }

  .progress-container {
    position: relative;
    top: var(--progress-bar-top, 60px);
    z-index: 1;
  }

  span .disabled {
    color: var(--clr-on-surface-variant, rgba(9, 34, 65, 0.7));
  }

  .disable-cursor {
    cursor: default !important;
  }

  .accounts {
    display: flex;
    align-items: center;
  }

  .account-name {
    margin: 0 8px 0 3px;
  }

  vaadin-grid-cell-content {
    font-family: var(--text-small-font, sans-serif);
    font-size: var(--text-small-size, 0.875rem);
    letter-spacing: var(--text-small-letter-spacing, 0.0275em);
    line-height: var(--text-small-line-height, 1.42857143em);
    font-weight: var(--text-small-weight, normal);
    text-decoration: var(--text-small-decoration, none);
    text-transform: var(--text-small-transform, none);
    --_cell-padding: var(--ix-grid-cell-padding, 14px 10px);
  }

  vaadin-grid-cell-content > div {
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .row-controls {
    border-top: solid 1px var(--clr-border-outline, #0922411f);
    padding: 8px;
  }

  .more-pagination {
    align-items: center;
    display: flex;
    justify-content: flex-end;
  }

  .pagination {
    flex-grow: 1;
  }

  .row-limit {
    display: flex;
    padding: 8px;
  }

  .remove-all-button {
    margin-left: auto;
  }

  /* launchpad variant */
  .launchpad vaadin-grid {
    --lumo-size-xl: auto;
  }

  .launchpad {
    --ix-grid-cell-height: 44px;
    --ix-grid-cell-padding: 14px 24px;
  }

  .launchpad .grid-header {
    padding: 0.5rem 18px 0;
  }

  .launchpad .header {
    font-family: var(--text-caption-font, sans-serif);
    font-size: var(--text-caption-size, 0.75rem);
    letter-spacing: var(--text-caption-letter-spacing, 0.03333333em);
    line-height: var(--text-caption-line-height, 1.33333333em);
    font-weight: var(--text-caption-weight, normal);
    text-transform: var(--text-caption-transform, none);
    text-decoration: var(--text-caption-decoration, none);
  }

  .launchpad .grid-header h2 {
    font-family: var(--text-page-title-font, sans-serif);
    font-size: var(--text-page-title-size, 2.125rem);
    letter-spacing: var(--text-page-title-letter-spacing, 0.01029412em);
    line-height: var(--text-page-title-line-height, 1.17647059em);
    font-weight: var(--text-page-title-weight, bold);
    text-decoration: var(--text-page-title-decoration, none);
    text-transform: var(--text-page-title-transform, none);
  }

  vaadin-grid-cell-content {
    height: var(--ix-grid-cell-height, 52px);
  }

  @media only screen and (max-width: 840px) {
    .grid-header {
      display: flex;
      flex-direction: row;
      padding: 1rem;
      justify-content: space-between;
    }
    .grid-menu {
      padding-left: 0;
      margin-left: -4px;
    }
  }

  @media only screen and (max-width: 600px) {
    .grid-header {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      padding: 1rem;
      gap: 12px;
    }
    .grid-container {
      border-radius: 0;
      box-shadow: none;
      padding: 0;
      overflow: hidden;
    }
  }
  .column-max-width-set {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
  }
`,In=P`
  .dropdown-content {
    position: absolute;
    background-color: var(--clr-surface-container-lowest, #fff);
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 9;
    -webkit-box-align: center;
    align-items: center;
    cursor: pointer;
    vertical-align: middle;
    -webkit-tap-highlight-color: transparent;
    padding: 10px;
    width: 247px;
    left: -100px;
    border-radius: 16px;
  }

  .dropdown-content > div {
    margin: 0px;
    color: var(--clr-on-surface, #e08114);
    font-family: var(--text-small-font, sans-serif);
    font-size: var(--text-small-size, 0.875rem);
    letter-spacing: var(--text-small-letter-spacing, 0.0275em);
    line-height: var(--text-small-line-height, 1.42857143em);
    font-weight: var(--text-small-weight, normal);
    text-decoration: var(--text-small-decoration, none);
    text-transform: var(--text-small-transform, none);
    display: block;
    cursor: pointer;
  }

  .dropdown-content span:hover {
    background-color: #f1f1f1;
  }

  .dropdown-content label {
    display: flex;
    align-items: center;
  }

  .dropdown-content label.dragOrigin {
    background: #ff000017;
    outline: 1px #ff9d9d dashed;
  }

  .dropdown-content label p {
    width: 158px;
  }

  .dropdown-content label .draggable {
    font-size: 24px;
    cursor: move; /* fallback if grab cursor is unsupported */
    cursor: grab;
    cursor: -moz-grab;
    cursor: -webkit-grab;
  }

  .dropdown-content label .draggable path {
    fill: var(--clr-primary, #e08114);
  }
  .custom-switch {
  --md-switch-selected-track-color: #e08114;
  --md-switch-selected-hover-track-color: #e08114;
  --md-switch-selected-focus-track-color: #e08114;
  --md-switch-selected-pressed-track-color: #e08114;

  --md-switch-selected-handle-color: #ffffff;

  --md-switch-selected-hover-state-layer-color: transparent;
  --md-switch-selected-focus-state-layer-color: transparent;
  --md-switch-selected-pressed-state-layer-color: transparent;
}
  .active {
    position: absolute;
    right: 8px;
    top: 8px;
    height: 8px;
    width: 8px;
    background-color: var(--clr-critical, #f80532);
    border-radius: 50%;
  }

  .list {
    position: relative;
  }

  @media only screen and (max-width: 840px) {
    .dropdown-content {
      left: 0;
    }
  }
`,zn=[" ","Enter"],Rn=Ms`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9 4C7.9 4 7 4.9 7 6C7 7.1 7.9 8 9 8C10.1 8 11 7.1 11 6C11 4.9 10.1 4 9 4ZM7 12C7 10.9 7.9 10 9 10C10.1 10 11 10.9 11 12C11 13.1 10.1 14 9 14C7.9 14 7 13.1 7 12ZM9 20C10.1 20 11 19.1 11 18C11 16.9 10.1 16 9 16C7.9 16 7 16.9 7 18C7 19.1 7.9 20 9 20ZM17 6C17 7.1 16.1 8 15 8C13.9 8 13 7.1 13 6C13 4.9 13.9 4 15 4C16.1 4 17 4.9 17 6ZM15 10C13.9 10 13 10.9 13 12C13 13.1 13.9 14 15 14C16.1 14 17 13.1 17 12C17 10.9 16.1 10 15 10ZM13 18C13 16.9 13.9 16 15 16C16.1 16 17 16.9 17 18C17 19.1 16.1 20 15 20C13.9 20 13 19.1 13 18Z" fill="#e08114" />
</svg>`;let k=class extends K{constructor(){super(...arguments),this.columns=[],this.columnsLocalStorageKey=void 0,this.columnReorderingAllowed=!1,this.refreshDataOnColumnVisibilityChange=!0,this.isDropdownVisible=!1,this.disabledColumns=[],this.dragEvent={sourceEl:null,startId:-1,targetId:-1},this.outerInteraction=t=>{t.composedPath().includes(this)||(this.isDropdownVisible=!1)}}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this.outerInteraction),this.initializeLocalStorage()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this.outerInteraction)}get preservedColumns(){let t=[];return this.columnsLocalStorageKey&&(t=JSON.parse(localStorage.getItem(this.columnsLocalStorageKey)||"[]")),t}initializeLocalStorage(){this.preservedColumns.length>0&&(this.disabledColumns=this.preservedColumns.filter(t=>t.hidden&&this.columns.some(e=>e.name===t.name)).map(t=>t.name),this.columns.forEach((t,e)=>{this.disabledColumns.includes(t.name)&&(this.columns[e].hidden=!0)})),this.dispatchUpdate()}update(t){super.update(t),t.has("columnsLocalStorageKey")&&this.initializeLocalStorage()}toggleColumn(t){this.columns[t].hidden=!this.columns[t].hidden,this.disabledColumns=this.columns.filter(e=>e.hidden).map(e=>e.name),this.columnsLocalStorageKey&&localStorage.setItem(this.columnsLocalStorageKey,JSON.stringify([...this.columns])),this.dispatchUpdate()}updateColumn(t,e){const s=t.target.shadowRoot?.querySelector("input");this.columns[e].hidden!==!s?.checked&&this.dispatchEvent(new CustomEvent("columnVisibilityChange",{detail:{column:this.columns[e]},bubbles:!0,composed:!0})),this.columns[e].hidden=!s?.checked,this.disabledColumns=this.columns.filter(o=>o.hidden).map(o=>o.name),this.columnsLocalStorageKey&&localStorage.setItem(this.columnsLocalStorageKey,JSON.stringify([...this.columns])),this.dispatchUpdate()}dispatchUpdate(t=this.columns){this.dispatchEvent(new CustomEvent("columnFilter",{detail:{columns:t},bubbles:!0,composed:!0}))}dragstart(t){if(this.columnReorderingAllowed){const e=t.target;this.dragEvent.sourceEl=e,e.style.opacity="0.3";const i=Number(e.getAttribute("data-id"));this.dragEvent.startId=i}}dragend(){if(this.columnReorderingAllowed){if(this.dragEvent.startId!==this.dragEvent.targetId){const t=[...this.columns],e=t.splice(this.dragEvent.startId,1)[0];t.splice(this.dragEvent.targetId,0,e),this.dispatchEvent(new CustomEvent("reorderColumns",{detail:{reorderedColumns:t},bubbles:!0,composed:!0}))}this.dragEvent.sourceEl?.style.removeProperty("opacity"),this.dragEvent={sourceEl:null,startId:-1,targetId:-1}}}dragenter(t){if(this.columnReorderingAllowed){const e=t.target;if(e.classList.contains("drag-target")){const i=Number(e.getAttribute("data-id"));this.dragEvent.targetId=i}}}handleDropdownToggle(t){if(t instanceof KeyboardEvent&&!zn.includes(t.key))return;t.composedPath().includes(this.dropdown)||(this.isDropdownVisible=!this.isDropdownVisible)}render(){return g`<div class="grid-menu">
      <span
        @click=${this.handleDropdownToggle}
        @keyDown=${this.handleDropdownToggle}
        class="list list-dropdown"
      >
 <button style="background: none; border: none; padding: 0; cursor: pointer;">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3 9H7V5H3V9ZM7 14H3V10H7V14ZM7 19H3V15H7V19ZM20 14H8V10H20V14ZM8 19H20V15H8V19ZM8 9V5H20V9H8Z"
              fill="#e08114"
            />
          </svg>
        </button>
        ${this.disabledColumns.length>0?g`<div class="active"></div>`:w}
        ${this.isDropdownVisible?g` <div
              class="dropdown-content"
              @dragover=${t=>t.preventDefault()}
              @dragstart=${this.dragstart}
              @dragend=${this.dragend}
              @dragenter=${this.dragenter}
            >
              ${Et(this.columns.filter(t=>t.filterable!==!1),t=>t.name,(t,e)=>g`<div>
                  <label
                    class=${`drag-target ${this.dragEvent.startId===e?"dragOrigin":""}`}
                    draggable=${this.columnReorderingAllowed}
                    data-id=${e}
                  >
                    <md-switch
                    class="custom-switch"
                    style="transform: scale(0.75); transform-origin: left center; filter: drop-shadow(0 0px 1px #00000090);"
                      .selected=${!t.hidden}
                      @change=${i=>this.updateColumn(i,e)}
                    >
                    </md-switch>
                 <p style="color: black;">${t.header}</p>
                    ${this.columnReorderingAllowed?g`<div class="draggable">${Rn}</div>`:w}
                  </label>
                </div>`)}
            </div>`:w}
      </span>
    </div>`}};k.styles=[Ne,In];p([Rt(".dropdown-content")],k.prototype,"dropdown",void 0);p([m({type:Array})],k.prototype,"columns",void 0);p([m({type:String})],k.prototype,"columnsLocalStorageKey",void 0);p([m({type:Boolean})],k.prototype,"columnReorderingAllowed",void 0);p([m({type:Boolean})],k.prototype,"refreshDataOnColumnVisibilityChange",void 0);p([m({attribute:!1})],k.prototype,"requestGridUpdate",void 0);p([I()],k.prototype,"isDropdownVisible",void 0);p([I()],k.prototype,"disabledColumns",void 0);p([I()],k.prototype,"dragEvent",void 0);k=p([Re("pr-grid-column-filter")],k);let fe=class extends K{constructor(){super(...arguments),this.items=[],this.isDownloading=!1,this.open=!1}toggleMenu(){this.open=!this.open}closeMenu(){this.open=!1}dispatchDownload(t){this.dispatchEvent(new CustomEvent("download",{detail:t,bubbles:!0,composed:!0})),this.closeMenu()}renderMenuItems(){return!this.items||this.items.length===0?g`

        <button
          class="menu-item"
          @click=${()=>this.dispatchDownload("all")}
        >
          Download All Records
        </button>

        <button
          class="menu-item"
          @click=${()=>this.dispatchDownload("filter")}
        >
          Download Current Filter
        </button>

      `:this.items.filter(t=>!t.hidden).map(t=>g`

        <button
          class="menu-item"
          ?disabled=${t.disabled}
          @click=${()=>{t.onClick(t.name),this.closeMenu()}}
        >
          ${t.label}
        </button>

      `)}render(){return this.isDownloading?g`
        <div style="padding:0.5rem;">
          ⏳ Downloading...
        </div>
      `:g`

      <div style="position:relative">

        <button
          id="anchor"
          @click=${this.toggleMenu}
          style="background:none;border:none;cursor:pointer;"
        >

          <!-- download icon -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15 9H19L12 16L5 9H9V3H15V9ZM5 20V18H19V20H5Z"
              fill="#E08114"
            />
          </svg>

        </button>

        ${this.open?g`

              <div
                class="menu"
                style="
                  position:absolute;
                  top:30px;
                  right:0;
                  background:white;
                  border:1px solid #ddd;
                  box-shadow:0 2px 8px rgba(0,0,0,0.15);
                  z-index:100;
                  min-width:130px;
                "
              >

                ${this.renderMenuItems()}

              </div>

            `:""}

      </div>

    `}};fe.styles=[Ne];p([m({type:Array})],fe.prototype,"items",void 0);p([m({type:Boolean})],fe.prototype,"isDownloading",void 0);p([I()],fe.prototype,"open",void 0);fe=p([Re("pr-grid-download-menu")],fe);const ne={filters:"Filters",rowsPerPage:"Rows per page",viewMore:"VIEW MORE",viewLess:"VIEW LESS",add:"ADD",removeAll:"REMOVE ALL"},Nn=P`
  .slot-wrap {
    display: flex;
  }

  .slot-wrap {
    color: var(--clr-primary, #e08114);
    margin-right: 5px;
  }

  .grid-menu .filter {
    margin-top: 2px;
  }
  .filter-form {
    white-space: nowrap;
    padding: 9px;
    color: var(--clr-on-surface-variant, #092241b3);
  }
  .filter_list {
    display: flex;
    flex-direction: row;
    margin-top: -5px;
    column-gap: 10px;
    padding: 3px;
    border: none;
    background: none;
    font-size: medium;
    font-style: normal;
    font-weight: bold;
  }
  .add-filter-button {
    background: none;
    border: none;
    font-size: medium;
  }
  .add-filter-button:hover {
    cursor: pointer;
  }
  .filter-form-column {
    display: inline-block;
    vertical-align: middle;
  }

  .filter-remove span {
    margin-right: 0px;
    color: var(--clr-on-surface-variant, #092241b3);
  }

  .filter-dropdown-content {
    position: absolute;
    display: inline;
    right: 0;
    top: 78%;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 3;
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-radius: 12px;
    box-shadow:
      rgba(0, 0, 0, 0.2) 0px 5px 5px -3px,
      rgba(0, 0, 0, 0.14) 0px 8px 10px 1px,
      rgba(0, 0, 0, 0.12) 0px 3px 14px 2px;
    background-color: #ffffff;
    z-index: 10;
  }

  .filter-form input,
  .filter-form select,
  .filter-form option {
    font-family: var(--text-default-font, sans-serif);
    font-size: var(--text-default-size, 16px);
    letter-spacing: var(--text-default-letter-spacing, 0.0275em);
    line-height: var(--text-default-line-height, 1.75em);
    font-weight: var(--text-default-weight, normal);
    text-transform: var(--text-default-decoration, none);
    text-decoration: var(--text-default-transform, none);
    border-radius: 0px;
    cursor: pointer;
    box-sizing: content-box;
    background: none;
    height: 1.4375em;
    margin: 0px;
    animation-name: mui-auto-fill-cancel;
    animation-duration: 10ms;
    border: none;
    border-image: initial;
    box-sizing: border-box;
    cursor: text;
    user-select: none;
    color: currentcolor;
    -webkit-tap-highlight-color: transparent;
    display: block;
    min-width: 0px;
    width: 100%;
    height: 25px;
    border-bottom: 1px solid black;
  }

  .filter-form option {
    -webkit-tap-highlight-color: #9ca6b2;
  }

  .filter-form input:hover,
  .filter-form select:hover {
    outline: none !important;
    border-bottom: 2px solid black;
  }

  .filter-form input:focus,
  .filter-form select:focus {
    outline: none !important;
    border-bottom: 2px solid #e08114;
  }

  .filter-form select:focus {
    background-color: rgba(0, 0, 0, 0.05);
  }

  .form-group {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    height: 54px;
    justify-content: flex-end;
    font-family: var(--text-default-font, sans-serif);
  }

  .form-group label {
    font-family: var(--text-default-font, sans-serif);
    font-size: var(--text-default-size, 16px);
    letter-spacing: var(--text-default-letter-spacing, 0.0275em);
    line-height: var(--text-default-line-height, 1.75em);
    font-weight: var(--text-default-weight, normal);
    text-transform: var(--text-default-decoration, none);
    text-decoration: var(--text-default-transform, none);
    padding: 0px;
    color: #092241;
    display: block;
    transform-origin: left top;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 133%;
    transform: translate(0px, -1.5px) scale(0.75);
    transition:
      color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
      transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
      max-width 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  }

  .filter-form-group label span {
    font-family: var(--text-default-font, sans-serif);
    font-size: var(--text-default-size, 16px);
    letter-spacing: var(--text-default-letter-spacing, 0.0275em);
    line-height: var(--text-default-line-height, 1.75em);
    font-weight: var(--text-default-weight, normal);
    text-transform: var(--text-default-decoration, none);
    text-decoration: var(--text-default-transform, none);
    padding: 0px;
    color: #092241;
    display: block;
    transform-origin: left top;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 133%;
    transform: translate(0px, -1.5px) scale(0.75);
    transition:
      color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
      transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
      max-width 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  }

  .filter-form-group label:focus-within span {
    color: #e08114;
  }

  .filter-form-group {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    height: 54px;
    justify-content: space-between;
    font-family: var(--text-default-font, sans-serif);
    white-space: wrap;
  }

  option {
    font-weight: normal;
    display: block;
    min-height: 1.2em;
    padding: 0px 2px 1px;
    white-space: nowrap;
  }

  .filter-footer {
    padding: 9px;
    display: flex;
    justify-content: space-between;
  }

  .no-display {
    display: none;
  }

  .filter-local-operator-empty {
    width: 54px;
    border: none;
  }

  .grid-menu span.filter-superscript {
    position: absolute;
    top: 6px;
    left: 14px;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--text-caption-font, sans-serif);
    font-size: var(--text-caption-size, 0.75rem);
    letter-spacing: var(--text-caption-letter-spacing, 0.03333333em);
    line-height: var(--text-caption-line-height, 1.33333333em);
    font-weight: var(--text-caption-weight, normal);
    text-transform: var(--text-caption-transform, none);
    text-decoration: var(--text-caption-decoration, none);
    padding: 0;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background-color: var(--clr-primary, #e08114);
    color: var(--clr-on-primary, #fff);
  }

  .filterlist {
    width: 40px;
  }

  .filterColumnField {
    width: 150px;
  }

  .filterValueField {
    width: 190px;
  }

  .filterOperatorField {
    width: 120px;
  }

  .form-group-operator-label {
    width: 100%;
  }

  .filter-form .filterOperatorInput {
    min-width: 96px;
  }

  select:hover {
    cursor: pointer;
  }

  input:hover {
    cursor: text;
  }

  .tooltip-container {
    position: relative;
    display: flex;
    flex-direction: row;
  }

  .tool-tip {
    color: var(--clr-on-secondary, #fff);
    overflow-wrap: break-word;
    border-radius: 3px;
    background-color: var(--clr-secondary, #071454);
    padding: 5px 8px;
    font-family: var(--text-caption-font, sans-serif);
    font-size: var(--text-caption-size, 0.75rem);
    letter-spacing: var(--text-caption-letter-spacing, 0.03333333em);
    line-height: var(--text-caption-line-height, 1.33333333em);
    font-weight: var(--text-caption-weight, normal);
    text-transform: var(--text-caption-transform, none);
    text-decoration: var(--text-caption-decoration, none);

    position: absolute;
    top: 42px;
    right: 0;
    z-index: 3;
    white-space: nowrap;
    display: none;
  }

  .filter-button:hover ~ .tool-tip {
    display: block;
  }

  .tool-tip li {
    margin-left: -21px;
    overflow-wrap: break-word;
    border-radius: 3px;
    max-width: 250px;
    min-width: 200px;
    white-space: wrap;
  }

  .tool-tip p {
    margin: 0;
    padding: 0;
  }

  .grid-menu{
    align-items: center;
    display: flex;
  }

  @media only screen and (max-width: 840px) {
    .filter-dropdown-content {
      right: inherit;
      top: 0;
    }
  }

  @media only screen and (max-width: 600px) {
    .grid-menu .filter {
      display: none;
    }
    .grid-menu {
      --md-text-button-leading-space: 6px;
      --md-text-button-trailing-space: 0;
      margin-left: 4px;
    }
  }
`;let R=class extends K{constructor(){super(...arguments),this.columns=[],this.filterValueChangeDebounceTime=300,this.readParamsFromURL=!1,this.maxDate=new Date().toISOString().split("T")[0],this.isDropdownVisible=!1,this.filters=[],this.filterableColumns=[],this.filterColumns=[],this.mapSelect=!1,this.activeFilters=[],this.oldValueLength=0,this.debouncedOnFilterValueChange=(t,e)=>{clearTimeout(this.debounceEvent),this.debounceEvent=setTimeout(()=>this.onfilterValueChange(t,e),this.filterValueChangeDebounceTime)},this.closeOnOuterClick=t=>{t.composedPath().includes(this)||(this.isDropdownVisible=!1)},this.handlePopState=()=>{this.filters=this.parseFilterQueryString(),this.filters.length||(this.isDropdownVisible=!1,this.addFilter()),this.updateActiveFilters()}}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this.closeOnOuterClick),window.addEventListener("popstate",this.handlePopState)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this.closeOnOuterClick),window.removeEventListener("popstate",this.handlePopState)}firstUpdated(){this.filterableColumns=this.columns.filter(t=>t.filterable),this.filterColumns=this.filterableColumns.map(t=>t.name),this.readParamsFromURL&&(this.filters=this.parseFilterQueryString()),this.filters.length||this.addFilter(),this.updateActiveFilters(),this.dispatchUpdate(!1)}updateActiveFilters(){this.activeFilters=this.filters.filter(t=>t.value.length>0)}get filterNames(){return this.filters.map(t=>t.columnField)}get unselectedFilters(){return this.filterColumns.filter(t=>!this.filterNames.includes(t))}parseFilterQueryString(){const t=new URLSearchParams(window.location.search),e=[];return this.filterableColumns.forEach(i=>{i.filterOperators?.forEach(s=>{const o=`${i.name}_${s}`;t.has(o)&&e.push({columnField:i.name,operatorValue:s,dataType:i.dataType,value:t.get(o)??""})})}),e}dispatchUpdate(t=!0){this.dispatchEvent(new CustomEvent("rowFilter",{detail:{filters:this.filters.filter(e=>e.value.length),resetPage:t},bubbles:!0,composed:!0}))}addFilter(){const t=this.filterColumns.find(i=>!this.filterNames.includes(i))||"",e=this.filterableColumns.find(i=>i.name===t);this.filters=[...this.filters,{columnField:t,operatorValue:e?.filterOperators?.[0]||"contains",dataType:e?.dataType||"string",value:""}],this.updateActiveFilters()}clearFilters(){this.filters=[],this.addFilter(),this.dispatchUpdate()}removeFilter(t){this.filters=this.filters.filter((e,i)=>i!==t),this.dispatchUpdate(),this.filters.length||(this.isDropdownVisible=!1,this.addFilter()),this.updateActiveFilters()}onfilterColumnChange(t,e){const i=e.target.value,s=this.filterableColumns.find(o=>o.name===i);this.filters[t].columnField=i,this.filters[t].dataType=s?.dataType,this.filters[t].operatorValue=s?.filterOperators?.[0]||"contains",this.filters=[...this.filters],this.dispatchUpdate()}onfilterOperatorChange(t,e){const i=e.target.value;this.filters[t].operatorValue=i,this.filters=[...this.filters],this.dispatchUpdate()}onDatefilterValueChange(t,e){console.log("inside datefiltervaluechange"),this.filters[t].value=e,this.dispatchUpdate(),this.updateActiveFilters()}onfilterValueChange(t,e){const{value:i}=e;this.filters[t].value=i;const s=i.length;this.filters[t].columnField.length>0&&(s>=3||s<this.oldValueLength)&&this.dispatchUpdate(),this.updateActiveFilters(),this.oldValueLength=s}renderDateInput(t,e){return g`
      <input
        type="date"
        data-testid=${`filterValueInput-${e}`}
        .value=${t.value??""}
        max=${this.maxDate??""}
        name="${t.columnField}-valueDate"
        @change=${i=>this.onDatefilterValueChange(e,i)}
        @input=${i=>this.onDatefilterValueChange(e,i)}
      />
    `}renderStringInput(t,e){return g`<label class="form-group-operator-label">
      <span>Value</span>
      <input
        data-testid=${`filterValueInput-${e}`}
        placeholder="Filter value"
        @input=${i=>this.debouncedOnFilterValueChange(e,i.target)}
        .value=${t.value}
      />
    </label>`}renderFilterInputControl(t,e){switch(t.dataType){case"string":case void 0:return this.renderStringInput(t,e);case"dateTime":return this.renderDateInput(t,e);default:return w}}renderFilterInput(t,e){const i=[t.columnField,...this.unselectedFilters],s=this.filterableColumns.filter(o=>i.includes(o.name));return g`
      <div class="filter-form">
        <div class="filter-remove filter-form-column">
          <div class="form-group">
            <button
              type="button"
              data-testid="clearFilterButton"
              @click=${()=>this.removeFilter(e)}
              @keydown=${o=>{(o.key===" "||o.key==="Enter")&&this.removeFilter(e)}}
              aria-label="Clear filter"
              style="background: none; border: none; cursor: pointer; margin-bottom: 10px;"
            >
              ✕
            </button>
          </div>
        </div>
        ${this.mapSelect?g`<div
              class="filter-form-column filter-form-column-border filterColumnField"
            >
              <div class="form-group">
                <label
                  class="form-group-column-label"
                  title="select: ${t.columnField}, options: ${s.map(o=>`value=${o.name}, selected=${o.name===t.columnField}, ${o.header}
                `)}"
                  >Columns</label
                >

                <select
                  @change=${o=>this.onfilterColumnChange(e,o)}
                  .value=${t.columnField}
                  data-v=${t.columnField}
                >
                  ${s.map(o=>g`
                      <option
                        value=${o.name}
                        ?selected=${o.name===t.columnField}
                      >
                        ${o.header}
                      </option>
                    `)}
                </select>
              </div>
            </div>`:w}

        <div
          class="filter-form-column filter-form-column-border filterColumnField"
        >
          <div class="filter-form-group">
            <label class="form-group-column-label"
              ><span>Columns</span>
              <select
                data-testid=${`filterColumnInput-${e}`}
                @change=${o=>this.onfilterColumnChange(e,o)}
                .value=${t.columnField}
                data-v=${t.columnField}
              >
                ${Et(s,o=>o.name,o=>g`
                    <option
                      value=${o.name}
                      ?selected=${o.name===t.columnField}
                    >
                      ${o.header}
                    </option>
                  `)}
              </select>
            </label>
          </div>
        </div>

        <div
          class="filter-form-column filter-form-column-border filterOperatorField"
        >
          <div class="filter-form-group">
            <label class="form-group-operator-label"
              ><span>Operator</span>
              <select
                data-testid=${`filterOperatorInput-${e}`}
                class="filterOperatorInput"
                @change=${o=>this.onfilterOperatorChange(e,o)}
                .value=${t.operatorValue}
                data-v=${t.operatorValue}
              >
                ${Et(s.find(o=>o.name===t.columnField)?.filterOperators??["contains"],o=>g`
                    <option
                      value=${o}
                      ?selected=${o===t.operatorValue}
                    >
                      ${o}
                    </option>
                  `)}
              </select>
            </label>
          </div>
        </div>
        <div
          class="filter-form-column filter-form-column-border filterValueField"
        >
          <div class="filter-form-group">
            ${this.renderFilterInputControl(t,e)}
          </div>
        </div>
      </div>
    `}renderDropdown(){const t=this.filters.length>=this.filterColumns.length||this.activeFilters.length<this.filters.length;return g`
      <div class="filter-dropdown-content">
        <div class="filter-body">
          ${this.filters.map((e,i)=>this.renderFilterInput(e,i))}
        </div>

        <div class="filter-footer">
          <button
            data-testid="addFilterButton"
            class="add-filter-button"
            @click=${()=>this.addFilter()}
            ?disabled=${t}
          >
            + Add filter
          </button>

          <button
            class="add-filter-button"
            data-testid="clearAllFiltersButton"
            @click=${()=>this.clearFilters()}
            ?disabled=${this.activeFilters.length===0}
          >
            Clear all
          </button>
        </div>
      </div>
    `}render(){return g`
      <div class="grid-menu">
        <div class="filter-container tooltip-container">
          ${this.activeFilters.length>0?g`<span class="filter-superscript">
                ${this.activeFilters.length}
              </span>`:w}
          <button
            data-testid="showFiltersButton"
            class="filter_list filter-button"
            @click=${()=>this.isDropdownVisible=!this.isDropdownVisible}
            @keyDown=${()=>{this.isDropdownVisible=!this.isDropdownVisible}}
          >
            <span class="filter">${ne.filters}</span>
          </button>
          ${this.isDropdownVisible?this.renderDropdown():w}
        </div>
      </div>
    `}};R.styles=[Ne,Nn];p([m({type:Array})],R.prototype,"columns",void 0);p([m({type:Number})],R.prototype,"filterValueChangeDebounceTime",void 0);p([m({type:Boolean})],R.prototype,"readParamsFromURL",void 0);p([m({type:String})],R.prototype,"maxDate",void 0);p([I()],R.prototype,"isDropdownVisible",void 0);p([I()],R.prototype,"filters",void 0);p([I()],R.prototype,"filterableColumns",void 0);p([I()],R.prototype,"filterColumns",void 0);p([I()],R.prototype,"mapSelect",void 0);p([I()],R.prototype,"activeFilters",void 0);p([I()],R.prototype,"oldValueLength",void 0);R=p([Re("pr-grid-row-filter")],R);const kn=P`
  :host {
    --md-filled-select-text-field-input-text-size: var(
      --ix-filled-select-text-field-input-text-size,
      12px
    );
  }

  [hidden] {
    display: none !important;
  }

  .pagination {
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 10px;
    font-family: var(--text-caption-font, sans-serif);
    font-size: var(--text-caption-size, 0.75rem);
    letter-spacing: var(--text-caption-letter-spacing, 0.03333333em);
    line-height: var(--text-caption-line-height, 1.33333333em);
    font-weight: var(--text-caption-weight, normal);
    text-transform: var(--text-caption-transform, none);
    text-decoration: var(--text-caption-decoration, none);
    margin: 1.25rem 0.5rem 1.25rem 1rem;
  }

  .pagination.simple {
    margin: 0;
  }

  .pagination > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .pagination p {
    margin: 0;
  }

  .pagination-nav {
    display: flex;
    margin-left: 1.5rem;
    height: 1.5rem;
    gap: 0.5rem;
  }

  .pagination-nav > ix-icon-button {
    margin-top: -0.5rem;
  }

  .rows-per-page {
    color: var(--clr-on-surface, #092241);
  }

  ix-select {
    --md-menu-container-color: var(--bg-surface-container-lowest, #fff);
    --md-filled-select-text-field-container-color: var(
      --bg-surface-container-lowest,
      #fff
    );
    --md-filled-select-text-field-active-indicator-height: 0px;
    --md-filled-select-text-field-hover-indicator-height: 0px;
    --md-filled-field-hover-active-indicator-height: 0px;
    --md-filled-field-focus-active-indicator-height: 0px;
    --md-filled-field-bottom-space: 4px;
    --md-filled-field-top-space: 4px;

    --md-filled-select-text-field-focus-trailing-icon-color: var(
      --clr-primary,
      #e08114
    );
    --md-filled-select-text-field-focus-active-indicator-color: var(
      --md-filled-select-text-field-focus-trailing-icon-color
    );
  }

  ix-select-option {
    --md-menu-item-selected-container-color: rgba(20, 86, 224, 0.1);
  }

  @media only screen and (max-width: 600px) {
    .pagination {
      justify-content: space-between;
    }
    .pagination > div {
      gap: 0;
    }
  }
`;let Y=class extends K{constructor(){super(...arguments),this.recordCount=0,this.page=1,this.pageSize=10,this.pageSizes=[5,10,25,100],this.isSimple=!1}changePage(t){this.page+=t,this.updatePagination()}handlePageSizeSelection(t){const e=t.target,i=Number(e.value),s=(this.page-1)*this.pageSize+1,o=Math.ceil(s/i);this.updatePagination(o,i)}updatePagination(t=this.page,e=this.pageSize){this.dispatchEvent(new CustomEvent("updatePagination",{detail:{page:t,pageSize:e},bubbles:!0,composed:!0}))}render(){const t=this.page>1,e=this.recordCount>this.page*this.pageSize;return g` <div class="pagination ${this.isSimple?"simple":""}">
      <div ?hidden=${this.isSimple}>
        <p class="rows-per-page" data-testid="pr-pagination-rows-per-page">${ne.rowsPerPage}:</p>

        <select
          .value=${String(this.pageSize)}
          class="pagination__select-input"
          @change=${i=>this.handlePageSizeSelection(i)}
          selected-index=${this.pageSizes.indexOf(this.pageSize)}

        >
          ${this.pageSizes.map(i=>g`
              <option
                class="select-option"
                value=${i}
                ?selected=${i===this.pageSize}
              >
                ${i}
              </option>
            `)}
        </select>
      </div>

      <div>
        <p data-testid="pr-pagination-page-of-page">
          ${this.recordCount>0?(this.page-1)*this.pageSize+1:0} -
          ${this.page*this.pageSize>this.recordCount?g`${this.recordCount}`:g`${this.page*this.pageSize}`}
          of ${this.recordCount>0?this.recordCount:0}
        </p>

        <div class="pagination-nav">
          <button
            type="button"
            ?disabled=${!t}
            @click=${()=>t&&this.changePage(-1)}
            aria-label="Previous page"
            data-testid="pr-pagination-prev"
          >
            ◀
          </button>
          <button
            type="button"
            ?disabled=${!e}
            @click=${()=>e&&this.changePage(1)}
            aria-label="Next page"
            data-testid="pr-pagination-next"
          >
            ▶
          </button>
        </div>
      </div>
    </div>`}};Y.styles=[Ne,kn];p([m({type:Number})],Y.prototype,"recordCount",void 0);p([m({type:Number})],Y.prototype,"page",void 0);p([m({type:Number})],Y.prototype,"pageSize",void 0);p([m({type:Array})],Y.prototype,"pageSizes",void 0);p([m({type:Boolean,attribute:"simple"})],Y.prototype,"isSimple",void 0);Y=p([Re("pr-pagination")],Y);class _ extends K{constructor(){super(...arguments),this.defaultPageSize=10,this.defaultPage=1,this.originalSearchParams=void 0,this.columnReorderingAllowed=!1,this.variantClass="",this.hasSimplePagination=!1,this.theme="no-border",this.columns=[],this.rows=[],this.defaultEmptyText="No data to display",this.sortedColumn="",this.sortDirection="",this.hideHeader=!1,this.hideFilters=!1,this.rowLimit=0,this.page=this.defaultPage,this.pageSize=this.defaultPageSize,this.pageSizes=[5,10,25,100],this.recordCount=0,this.localStorageID=void 0,this.showDownload=!0,this.isDownloading=!1,this.isLoading=!1,this.downloadMenuItems=[],this.addParamsToURL=!0,this.readParamsFromURL=!1,this.refreshDataOnColumnVisibilityChange=!0,this.filterValueChangeDebounceTime=300,this.hideColumnHeaders=!1,this.preservedQueryParamKeys=[],this.filterMaxDate=new Date().toISOString().split("T")[0],this.hashedTableState="",this.showAddButton=!1,this.disableAddButton=!1,this.showViewMore=!1,this.addButtonLabel=ne.add,this.showRemoveAllButton=!1,this.disableRemoveAllButton=!1,this.removeAllButtonLabel=ne.removeAll,this.sessionStorageKey=void 0,this.useNewDatePicker=!1,this.filters=[],this.isColumnsReordering=!1,this.isExpanded=!1,this.displayColumns=[],this.sessionStorageData=void 0,this.defaultFilterKeys=["sort","order","page","size"],this.initialised=!1,this.handlePopState=()=>{this.updateSearchParamsFromUri(!0),this.dispatchChangeEvent()},this.handleUnload=()=>{sessionStorage.removeItem("urlPageSizeRead")},this.dispatchChangeEvent=()=>{const t=this.filters.reduce((e,{columnField:i,value:s})=>({...e,[i]:s}),{});this.dispatchEvent(new CustomEvent("change",{detail:{columnName:this.sortedColumn,sortOrder:this.sortDirection,page:this.page,pageSize:this.pageSize,filters:t,filtersOperators:this.filters.map(e=>({columnField:e.columnField,operator:e.operatorValue}))},bubbles:!0,composed:!0}))},this.renderColumnHeader=(t,e,i,s)=>{const o=ht({header:!0,frozen:!!t.frozenToEnd,first:i===0,last:i===s-1,border:!e?.frozenToEnd});return g`
      <div
        @click=${()=>t.sortable&&this.handleSort(t.name)}
        @keyDown=${()=>t.sortable&&this.handleSort(t.name)}
        class=${o}
      >
        <span class="header-label">${t.header}</span>
        ${t.sortable?g`<span class="header-sort-icon" title="Sort">
  ${this.sortDirection==="desc"&&this.sortedColumn===t.name?"▲":"▼"}
</span>`:w}
      </div>
    `},this.columnRenderer=(t,e,i,s)=>{ct(w,e);const o=t.bodyRenderer(s.item,s,i);let a=o;const n=!!t.maxWidth,l="column-max-width-set";n&&(a=g`
        <div class="${l}" style="max-width: ${t.maxWidth}">
          ${o}
        </div>
      `),ct(a,e),n&&requestAnimationFrame(()=>{const d=e.querySelector(`.${l}`);if(d&&d.scrollWidth>d.clientWidth&&!d.querySelector(".custom-tooltip")&&d.textContent?.trim()){const c=document.createElement("div");c.className="custom-tooltip",c.style.cssText=`
              background-color: #092241;
              font-size: 0.75rem;
              color: white;
              text-align: left;
              padding: 0.313rem 0.5rem;
              border-radius: 0.188rem;
              max-height: 31.25rem;
              overflow: hidden;
              position: absolute;
              z-index: 1000;
              display: none;
            `,c.textContent=d.textContent,d.addEventListener("mouseenter",()=>{c.style.display="flex";const h=d.getBoundingClientRect();c.style.left=`${h.left}px`,c.style.top=`${h.bottom+window.scrollY+4}px`,document.body.appendChild(c)}),d.addEventListener("mouseleave",()=>{c.remove()})}})},this.renderHeader=()=>g`
    <div class="grid-header">
      <slot name="header" style="text-align: center;"><div class="empty"></div></slot>
      ${this.hideFilters?w:g`<div class="grid-menu">
            <slot name="filters"><div class="empty"></div></slot>
            <pr-grid-column-filter
              .columns=${this.arrangedColumns}
              columnsLocalStorageKey=${ke(this.columnsLocalStorageKey)}
              @columnFilter=${t=>this.handleOnColumnFilter(t)}
              @reorderColumns=${this.reorderColumnsFromFilter}
              .columnReorderingAllowed=${this.columnReorderingAllowed}
              .refreshDataOnColumnVisibilityChange=${this.refreshDataOnColumnVisibilityChange}
              .requestGridUpdate=${()=>this.requestUpdate()}
            ></pr-grid-column-filter>
            ${this.showDownload?g`<pr-grid-download-menu
                  .items=${this.downloadMenuItems}
                  .isDownloading=${this.isDownloading}
                ></pr-grid-download-menu>`:w}
            <pr-grid-row-filter
              .columns=${this.displayColumns}
              .filterValueChangeDebounceTime=${this.filterValueChangeDebounceTime}
              .readParamsFromURL=${this.readParamsFromURL}
              .maxDate=${this.filterMaxDate}
              .useNewDatePicker=${this.useNewDatePicker}
              @rowFilter=${t=>{this.filters=t.detail.filters,t.detail.resetPage&&(this.page=this.defaultPage),this.updatePage()}}
            ></pr-grid-row-filter>
          </div>`}
    </div>
    <div class="touch-edge">
      <slot name="under-header"></slot>
    </div>
  `,this.renderRowControls=()=>this.showAddButton===!1&&this.showRemoveAllButton===!1&&this.showViewMoreLessButton===!1?w:g` <div class="row-controls row-limit">
      ${this.renderAddNewButton()} ${this.renderViewMoreLessButton()}
      ${this.renderRemoveAllButton()}
    </div>`,this.renderPaginationControls=()=>this.rowLimit>0?w:g`
      <pr-pagination
        ?simple=${this.hasSimplePagination}
        class="pagination"
        .page=${this.page}
        .pageSize=${this.pageSize}
        .pageSizes=${this.pageSizes}
        .recordCount=${this.recordCount}
        @updatePagination=${t=>{this.page=t.detail.page,this.pageSize=t.detail.pageSize,this.updateSessionStorage({pageSize:this.pageSize}),this.updatePage()}}
      ></pr-pagination>
    `}get isPersistable(){return!!this.localStorageID}get columnNames(){return this.columns.map(t=>t.name)}get columnsLocalStorageKey(){if(this.hashedTableState===""){const t=this.columns.map(({bodyRenderer:s,hidden:o,...a})=>a),e=JSON.stringify(t);let i=0;for(let s=0;s<e.length;s+=1)i=i*31+e.charCodeAt(s)>>>0;this.hashedTableState=i.toString(36)}return`pr-grid-${this.localStorageID}-${this.hashedTableState}-columns`}get arrangedColumns(){let t=[];return t=this.getColumnsToDisplayFromLocalStorage(),t.length===0&&(t=[...this.columns]),t.filter(e=>e).map(e=>({...e,width:e.width?e.width:void 0}))}connectedCallback(){super.connectedCallback?.(),window.addEventListener("popstate",this.handlePopState),window.addEventListener("beforeunload",this.handleUnload)}disconnectedCallback(){window.removeEventListener("popstate",this.handlePopState),window.removeEventListener("beforeunload",this.handleUnload),super.disconnectedCallback?.()}updateSearchParamsFromUri(t=!1){if(this.grid.getBoundingClientRect().width!==0&&this.readParamsFromURL){const e=new URL(window.location.href),i=new URLSearchParams(e.search),[s,o,a,n]=this.defaultFilterKeys,l=i.get(s),d=i.get(o),c=i.get(a),h=i.get(n);l&&d&&(this.sortedColumn=l,this.sortDirection=d),c&&(this.page=parseInt(c,10)||this.defaultPage),h&&(!this.getSessionStorageData()||!sessionStorage.getItem("urlPageSizeRead")&&this.grid.getBoundingClientRect().width>0)&&(sessionStorage.setItem("urlPageSizeRead","true"),this.pageSize=parseInt(h,10)||this.defaultPageSize,this.updateSessionStorage({pageSize:this.pageSize})),t&&this.rebuildFiltersFromUri(i)}}rebuildFiltersFromUri(t){const e=[];for(const[i,s]of t.entries()){const o=this.defaultFilterKeys.includes(i),[a,n]=i.split("_");!o&&a&&n&&e.push({columnField:a,operatorValue:n,value:s})}this.filters=e}update(t){if(!this.initialised&&this.columns.length>0&&(this.displayColumns=[...this.columns],this.checkLocalStorageUpdate(),this.initialised=!0),t.has("sessionStorageData")&&this.sessionStorageData){const e=this.sessionStorageData.pageSize||this.defaultPageSize;this.pageSize!==e&&(this.pageSize=e)}super.update(t)}firstUpdated(){this.updateSearchParamsFromUri(),this.removeOldLocalStorageValues(),this.sessionStorageData=this.getSessionStorageData()}getSessionStorageData(){if(this.sessionStorageKey){const t=sessionStorage.getItem(`grid-${this.sessionStorageKey}`);if(t)return JSON.parse(t)}}updateSessionStorage(t){const e=this.getSessionStorageData()||{};if(this.sessionStorageKey&&t){const i={...e,...t};sessionStorage.setItem(`grid-${this.sessionStorageKey}`,JSON.stringify(i)),this.sessionStorageData=i}}checkLocalStorageUpdate(){if(this.isPersistable){const t=JSON.parse(localStorage.getItem(this.columnsLocalStorageKey)||"[]");if(t.length>0){let e=!1;t.length!==this.columns.length&&(e=!0),this.columns.every(s=>t.some(o=>o.name===s.name))&&t.every(s=>this.columns.some(o=>o.name===s.name))||(e=!0),e&&this.setColumnsToLocalStorage(this.columns)}}}buildQueryFromFilters(){const t=new URLSearchParams;return this.filters.forEach(e=>{t.append(`${e.columnField}_${e.operatorValue}`,e.value)}),Object.fromEntries(t)}rebuildQueryFromMatchingQuerystringParams(){const t=new URLSearchParams;if(this.preservedQueryParamKeys.length===0)return{};const e=new URL(window.location.href);return new URLSearchParams(e.search).forEach((s,o)=>{this.preservedQueryParamKeys.includes(o)&&t.append(o,s)}),Object.fromEntries(t)}getColumnsToDisplayFromLocalStorage(){let t=[];if(this.isPersistable){const e=JSON.parse(localStorage.getItem(this.columnsLocalStorageKey)||"[]");e.length>0&&(t=this.mapColumnsWithPersistedSettings(e))}return t}mapColumnsWithPersistedSettings(t){const e=new Map(t.map(s=>[s.name,s])),i=this.columns.map(s=>{const o=e.get(s.name);return o?{...s,hidden:o.hidden,frozenToEnd:o.frozenToEnd,width:o.width||void 0}:{...s}});return i.sort((s,o)=>{const a=t.findIndex(l=>l.name===s.name),n=t.findIndex(l=>l.name===o.name);return a===-1&&n===-1?0:a===-1?1:n===-1?-1:a-n}),i}removeOldLocalStorageValues(){const t=this.findMatchingLocalStorageKeys(`pr-grid-${this.localStorageID}-`,"-columns",this.hashedTableState);for(let e=0;e<=t.length;e+=1)localStorage.removeItem(t[e])}findMatchingLocalStorageKeys(t,e,i){const s=[],o=t+i+e;for(let a=0;a<localStorage.length;a+=1){const n=localStorage.key(a);n&&n.startsWith(t)&&n.endsWith(e)&&n!==o&&s.push(n)}return s}async updatePage(t=!0){if(this.dispatchChangeEvent(),this.addParamsToURL&&t){const e={sort:this.sortedColumn,order:this.sortDirection,page:this.page.toString(),size:this.pageSize.toString(),...this.buildQueryFromFilters(),...this.rebuildQueryFromMatchingQuerystringParams()},i=new URL(window.location.href),s=new URLSearchParams(e);this.originalSearchParams||this.saveOriginalSearchParams(s);const o=new URLSearchParams([...this.originalSearchParams??[],...s]);i.search=o.toString(),window.history.pushState(null,"",i.toString())}}saveOriginalSearchParams(t){const e=new URL(window.location.href),i=new URLSearchParams(e.search);this.filters.forEach(s=>{i.delete(`${s.columnField}_${s.operatorValue}`)}),t.forEach((s,o)=>{i.delete(o)}),this.originalSearchParams=i}handleSort(t=""){this.sortedColumn!==t?this.sortDirection="asc":this.sortDirection=this.sortDirection==="asc"?"desc":"asc",this.sortedColumn=t,this.updatePage()}setColumnsToLocalStorage(t){this.isPersistable&&localStorage.setItem(this.columnsLocalStorageKey,JSON.stringify(t))}async reorderColumnsFromTable(){const t=[...this.arrangedColumns],e=t.filter(n=>n.hidden!==!0),i=t.filter(n=>n.hidden===!0),s=t.filter(n=>n.frozenToEnd===!0),o=[...e.filter(n=>n?.frozenToEnd!==!0),...i.filter(n=>n?.frozenToEnd!==!0),...s],a=Array.from(this.grid?.shadowRoot?.querySelectorAll("th")||[]);if(a.length){const n=a.map((c,h)=>({id:h,flexPosition:Number(c.style.order)})).sort((c,h)=>c.flexPosition-h.flexPosition).map(c=>c.id),l=n.every((c,h)=>h===0||c>n[h-1]);let d=[];l||(d=n.map(c=>o[c]),this.displayColumns=[...d.filter(c=>c.hidden!==!0&&c?.frozenToEnd!==!0),...i.filter(c=>c?.frozenToEnd!==!0),...s],this.isColumnsReordering=!0,await this.updateComplete,this.isColumnsReordering=!1,this.setColumnsToLocalStorage(this.displayColumns))}}async reorderColumnsFromFilter(t){this.displayColumns=[...t.detail.reorderedColumns],this.setColumnsToLocalStorage([...this.displayColumns]),this.isColumnsReordering=!0,await this.updateComplete,this.isColumnsReordering=!1}handleOnColumnFilter(t){t.detail.columns.forEach((e,i)=>{this.displayColumns[i]&&(this.displayColumns[i].hidden=e?.hidden)}),this.displayColumns=[...this.displayColumns],this.updatePage(!1)}cellPartNameGenerator(t,e){let i="";return e.item.disabled&&(i+=" ix-disabled-cell"),i}renderAddNewButton(){return this.showAddButton?g`<button
  name="add-new-button"
  class="footer-button"
  ?disabled=${this.disableAddButton}
  @click=${()=>this.onAddButtonClick()}
>
  + ${this.addButtonLabel}
</button>`:w}renderViewMore(){return this.showViewMore?g` <div class="view-more">
      <slot name="viewMore"></slot>
    </div>`:w}get showViewMoreLessButton(){return!this.showViewMore&&this.rowLimit>0&&this.rows.length>this.rowLimit}renderViewMoreLessButton(){return this.showViewMoreLessButton?g`
      <button
  class="footer-button"
  @click=${()=>{this.isExpanded=!this.isExpanded}}
>
  ${this.isExpanded?ne.viewLess:ne.viewMore}
</button>
    `:w}renderRemoveAllButton(){return this.showRemoveAllButton?g`<button
  class="footer-button remove-all-button"
  name="remove-all-button"
  ?disabled=${this.disableRemoveAllButton}
  @click=${()=>this.onRemoveAllButtonClick()}
>
  ${this.removeAllButtonLabel}
</button>`:w}renderColumns(){const t=[...this.arrangedColumns];return t.length>0?g`${t.map((e,i)=>e.hidden===!0?w:g`<vaadin-grid-column
            ${yn(()=>this.renderColumnHeader(e,t[i+1],i,t.length),this.sortDirection)}
            .renderer=${(s,o,a)=>this.columnRenderer(e,s,o,a)}
            resizable
            width=${ke(e.width)}
            min-width=${ke(e.minWidth)}
            .responsive=${e.responsive}
            ?hidden=${e.hidden}
            ?frozen-to-end=${e.frozenToEnd}
            path=${e.name}
            ?auto-width=${e.autoWidth}
            flex-grow=${ke(e.flexGrow)}
          ></vaadin-grid-column>`)}`:g`<vaadin-grid-column></vaadin-grid-column>`}renderLoading(){return g` <div
      class="progress-container"
      style="display: ${this.isLoading?"":"none"}"
    >
       <md-circular-progress indeterminate></md-circular-progress>
    </div>`}renderGrid(){if(this.isColumnsReordering)return w;const t=this.displayColumns.find(i=>i.hidden!==!0),e=this.rowLimit>0&&!this.isExpanded?this.rows.slice(0,this.rowLimit):this.rows;return g`<vaadin-grid
      class=${this.hideColumnHeaders?"hide-column-headers":""}
      .items=${t?e:[]}
      all-rows-visible
      theme=${this.theme}
      .cellPartNameGenerator=${this.cellPartNameGenerator}
      @mouseup=${this.reorderColumnsFromTable}
    >
      ${this.renderColumns()}
      <div slot="empty-state"><slot name="no-rows"></slot></div>
    </vaadin-grid>`}render(){return g`
      <div
        class=${`grid-container ${this.isColumnsReordering?"columns-reordering":""} ${this.variantClass}`}
      >
        ${this.hideHeader?w:this.renderHeader()}
        ${this.renderLoading()} ${this.renderGrid()} ${this.renderRowControls()}
        <div class="row-controls more-pagination">
          ${this.renderViewMore()} ${this.renderPaginationControls()}
        </div>
        <slot name="footer"></slot>
      </div>
    `}}_.styles=[Ne];p([Rt("vaadin-grid")],_.prototype,"grid",void 0);p([m({type:Boolean,attribute:"column-reordering-allowed"})],_.prototype,"columnReorderingAllowed",void 0);p([m({type:String})],_.prototype,"variantClass",void 0);p([m({type:Boolean,attribute:"simple-pagination"})],_.prototype,"hasSimplePagination",void 0);p([m({type:String})],_.prototype,"theme",void 0);p([m({type:Array})],_.prototype,"columns",void 0);p([m({type:Array})],_.prototype,"rows",void 0);p([m({type:String})],_.prototype,"defaultEmptyText",void 0);p([m({type:String})],_.prototype,"sortedColumn",void 0);p([m({type:String})],_.prototype,"sortDirection",void 0);p([m({type:Boolean})],_.prototype,"hideHeader",void 0);p([m({type:Boolean,attribute:"hide-filters"})],_.prototype,"hideFilters",void 0);p([m({type:Number})],_.prototype,"rowLimit",void 0);p([m({type:Number})],_.prototype,"page",void 0);p([m({type:Number})],_.prototype,"pageSize",void 0);p([m({type:Array})],_.prototype,"pageSizes",void 0);p([m({type:Number})],_.prototype,"recordCount",void 0);p([m({type:String})],_.prototype,"localStorageID",void 0);p([m({type:Boolean})],_.prototype,"showDownload",void 0);p([m({type:Boolean})],_.prototype,"isDownloading",void 0);p([m({type:Boolean})],_.prototype,"isLoading",void 0);p([m({type:Array})],_.prototype,"downloadMenuItems",void 0);p([m({type:Boolean,attribute:"add-params-to-url"})],_.prototype,"addParamsToURL",void 0);p([m({type:Boolean})],_.prototype,"readParamsFromURL",void 0);p([m({type:Boolean})],_.prototype,"refreshDataOnColumnVisibilityChange",void 0);p([m({type:Number})],_.prototype,"filterValueChangeDebounceTime",void 0);p([m({type:Boolean})],_.prototype,"hideColumnHeaders",void 0);p([m({type:Array})],_.prototype,"preservedQueryParamKeys",void 0);p([m({type:String})],_.prototype,"filterMaxDate",void 0);p([m({type:String})],_.prototype,"hashedTableState",void 0);p([m({type:Boolean})],_.prototype,"showAddButton",void 0);p([m({type:Boolean})],_.prototype,"disableAddButton",void 0);p([m({type:Boolean,attribute:"show-view-more"})],_.prototype,"showViewMore",void 0);p([m({type:String})],_.prototype,"addButtonLabel",void 0);p([m({type:Function})],_.prototype,"onAddButtonClick",void 0);p([m({type:Boolean})],_.prototype,"showRemoveAllButton",void 0);p([m({type:Boolean})],_.prototype,"disableRemoveAllButton",void 0);p([m({type:String})],_.prototype,"removeAllButtonLabel",void 0);p([m({type:Function})],_.prototype,"onRemoveAllButtonClick",void 0);p([m({type:String,attribute:"session-storage-key"})],_.prototype,"sessionStorageKey",void 0);p([m({type:Boolean})],_.prototype,"useNewDatePicker",void 0);p([I()],_.prototype,"filters",void 0);p([I()],_.prototype,"isColumnsReordering",void 0);p([I()],_.prototype,"isExpanded",void 0);p([I()],_.prototype,"displayColumns",void 0);p([I()],_.prototype,"sessionStorageData",void 0);window.customElements.define("pr-grid",_);const On=r=>{const t={active:["check_circle","Active"],invited:["mail","Invited"],declined:["do_not_disturb_on","Declined"],suspended:["warning","Suspended"],removed:["delete","Removed"]},[e,i]=t[r]||[null,null];return e&&i?g`✅`:null},Fn=[{name:"firstName",header:"First name",bodyRenderer:r=>g` <span>${r.firstName}</span>`,sortable:!0,filterable:!0,hidden:!1},{name:"lastName",header:"Last name",bodyRenderer:r=>g` <span>${r.lastName}</span>`,sortable:!0,filterable:!0},{name:"email",header:"Email",bodyRenderer:r=>g` <span>${r.email}</span>`,sortable:!0,filterable:!0},{name:"phone",header:"Phone",bodyRenderer:r=>g` <span>${r.phone}</span>`,sortable:!0},{name:"accounts",header:"Account",width:"40%",bodyRenderer:r=>g` <div class="accounts">
      ${r.accounts.map(t=>g` ${On(t.status.toLowerCase())}<span
              class="account-name"
              >${t.name}</span
            >`)}
    </div>`},{name:"actions",header:"Actions",bodyRenderer:()=>g`
      <div>
        <span>Edit</span>
        <nbsp></nbsp>
        <span>Delete</span>
      </span>`,sortable:!1,frozenToEnd:!0}],Vn=[{id:"user-id-001",firstName:"John",lastName:"Doe",email:"john.doe@google.com",phone:"+44892418222",status:"Active",accounts:[{id:"microsoft-us-001",name:"Microsoft US",status:"ACTIVE"},{id:"google-ca-002",name:"Google Canada",status:"INVITED"},{id:"amazon-us-003",name:"Amazon US",status:"INACTIVE"},{id:"meta-emea-004",name:"Meta EMEA",status:"REMOVED"}]},{id:"user-id-002",firstName:"John",lastName:"Smith",email:"john@smith.com",phone:"+447777777777",status:"Active",accounts:[{id:"microsoft-us-001",name:"Microsoft US",status:"ACTIVE"},{id:"google-ca-002",name:"Google Canada",status:"ACTIVE"}]},{id:"user-id-003",firstName:"Jane",lastName:"Smith",email:"jane.s@yahoo.com",phone:"+44867384383",status:"Active",accounts:[{id:"microsoft-us-001",name:"Microsoft US",status:"ACTIVE"},{id:"google-ca-002",name:"Google Canada",status:"ACTIVE"}]},{id:"user-id-004",firstName:"Michael",lastName:"Crout",email:"m.crout@gmail.com",phone:"+44852741827",status:"Active",accounts:[{id:"microsoft-us-001",name:"Microsoft US",status:"ACTIVE"},{id:"google-ca-002",name:"Google Canada",status:"ACTIVE"}]},{id:"user-id-005",firstName:"Brian S.",lastName:"Tropey",email:"briantropey@outlook.com",phone:"+44827463923",status:"Active",accounts:[{id:"microsoft-us-001",name:"Microsoft US",status:"ACTIVE"},{id:"google-ca-002",name:"Google Canada",status:"ACTIVE"}]},{id:"user-id-006",firstName:"Mary",lastName:"Stewart",email:"mary.stewart@gmail.com",phone:"+44837438442",status:"Active",accounts:[{id:"microsoft-us-001",name:"Microsoft US",status:"ACTIVE"},{id:"google-ca-002",name:"Google Canada",status:"ACTIVE"}]},{id:"user-id-007",firstName:"Josephina",lastName:"Miller",email:"josephinarmiller@gmail.com",phone:"+44837537812",status:"Active",accounts:[{id:"microsoft-us-001",name:"Microsoft US",status:"ACTIVE"},{id:"google-ca-002",name:"Google Canada",status:"ACTIVE"}]},{id:"user-id-008",firstName:"James",lastName:"Holmes",email:"j.holmes@yahoo.com",phone:"+44853573958",status:"Active",accounts:[{id:"microsoft-us-001",name:"Microsoft US",status:"ACTIVE"},{id:"google-ca-002",name:"Google Canada",status:"ACTIVE"}]},{id:"user-id-009",firstName:"Robert",lastName:"Collins",email:"rob.collins@gmail.com",phone:"+44384284278",status:"Active",accounts:[{id:"microsoft-us-001",name:"Microsoft US",status:"ACTIVE"},{id:"google-ca-002",name:"Google Canada",status:"ACTIVE"}]},{id:"user-id-010",firstName:"Darlene",lastName:"Lucas",email:"darlene.lucas@outlook.com",phone:"+44924284287",status:"Active",accounts:[{id:"microsoft-us-001",name:"Microsoft US",status:"ACTIVE"},{id:"google-ca-002",name:"Google Canada",status:"ACTIVE"}]},{id:"user-id-011",firstName:"Dorothy",lastName:"Villagomez",email:"dorothyvillagomez@outlook.com",phone:"+44981241282",status:"Active",accounts:[{id:"microsoft-us-001",name:"Microsoft US",status:"ACTIVE"},{id:"google-ca-002",name:"Google Canada",status:"ACTIVE"}]},{id:"user-id-012",firstName:"Richard",lastName:"Jackson",email:"ricky.jackson@gmail.com",phone:"+44772489128",status:"Active",accounts:[{id:"microsoft-us-001",name:"Microsoft US",status:"ACTIVE"},{id:"google-ca-002",name:"Google Canada",status:"ACTIVE"}]},{id:"user-id-013",firstName:"Janet",lastName:"Lewis",email:"j.lewis@gmail.com",phone:"+44218519222",status:"Active",accounts:[{id:"microsoft-us-001",name:"Microsoft US",status:"ACTIVE"},{id:"google-ca-002",name:"Google Canada",status:"ACTIVE"}]},{id:"user-id-014",firstName:"James",lastName:"Smoky",email:"Smoky@smith.com",phone:"+443333333333",status:"Active",accounts:[{id:"microsoft-us-001",name:"Microsoft US",status:"ACTIVE"},{id:"google-ca-002",name:"Google Canada",status:"ACTIVE"}]},{id:"user-id-015",firstName:"Kevin",lastName:"Walker",email:"kevin.walker@gmail.com",phone:"+44781234115",status:"Active",accounts:[{id:"microsoft-us-001",name:"Microsoft US",status:"ACTIVE"},{id:"google-ca-002",name:"Google Canada",status:"ACTIVE"}]},{id:"user-id-016",firstName:"Laura",lastName:"Green",email:"laura.green@gmail.com",phone:"+44781234116",status:"Active",accounts:[{id:"microsoft-us-001",name:"Microsoft US",status:"ACTIVE"},{id:"google-ca-002",name:"Google Canada",status:"ACTIVE"}]},{id:"user-id-017",firstName:"Patrick",lastName:"Hill",email:"patrick.hill@gmail.com",phone:"+44781234117",status:"Active",accounts:[{id:"microsoft-us-001",name:"Microsoft US",status:"ACTIVE"},{id:"google-ca-002",name:"Google Canada",status:"ACTIVE"}]},{id:"user-id-018",firstName:"Nancy",lastName:"Adams",email:"nancy.adams@gmail.com",phone:"+44781234118",status:"Active",accounts:[{id:"microsoft-us-001",name:"Microsoft US",status:"ACTIVE"},{id:"google-ca-002",name:"Google Canada",status:"ACTIVE"}]},{id:"user-id-019",firstName:"George",lastName:"Baker",email:"george.baker@gmail.com",phone:"+44781234119",status:"Active",accounts:[{id:"microsoft-us-001",name:"Microsoft US",status:"ACTIVE"},{id:"google-ca-002",name:"Google Canada",status:"ACTIVE"}]},{id:"user-id-020",firstName:"Emma",lastName:"Carter",email:"emma.carter@gmail.com",phone:"+44781234120",status:"Active",accounts:[{id:"microsoft-us-001",name:"Microsoft US",status:"ACTIVE"},{id:"google-ca-002",name:"Google Canada",status:"ACTIVE"}]},{id:"user-id-021",firstName:"Henry",lastName:"Phillips",email:"henry.phillips@gmail.com",phone:"+44781234121",status:"Active",accounts:[{id:"microsoft-us-001",name:"Microsoft US",status:"ACTIVE"},{id:"google-ca-002",name:"Google Canada",status:"ACTIVE"}]},{id:"user-id-022",firstName:"Olivia",lastName:"Parker",email:"olivia.parker@gmail.com",phone:"+44781234122",status:"Active",accounts:[{id:"microsoft-us-001",name:"Microsoft US",status:"ACTIVE"},{id:"google-ca-002",name:"Google Canada",status:"ACTIVE"}]},{id:"user-id-023",firstName:"Ryan",lastName:"Evans",email:"ryan.evans@gmail.com",phone:"+44781234123",status:"Active",accounts:[{id:"microsoft-us-001",name:"Microsoft US",status:"ACTIVE"},{id:"google-ca-002",name:"Google Canada",status:"ACTIVE"}]},{id:"user-id-024",firstName:"Sophia",lastName:"Turner",email:"sophia.turner@gmail.com",phone:"+44781234124",status:"Active",accounts:[{id:"microsoft-us-001",name:"Microsoft US",status:"ACTIVE"},{id:"google-ca-002",name:"Google Canada",status:"ACTIVE"}]},{id:"user-id-025",firstName:"Ethan",lastName:"Edwards",email:"ethan.edwards@gmail.com",phone:"+44781234125",status:"Active",accounts:[{id:"microsoft-us-001",name:"Microsoft US",status:"ACTIVE"},{id:"google-ca-002",name:"Google Canada",status:"ACTIVE"}]},{id:"user-id-026",firstName:"Chloe",lastName:"Collins",email:"chloe.collins@gmail.com",phone:"+44781234126",status:"Active",accounts:[{id:"microsoft-us-001",name:"Microsoft US",status:"ACTIVE"},{id:"google-ca-002",name:"Google Canada",status:"ACTIVE"}]},{id:"user-id-027",firstName:"Jack",lastName:"Stevens",email:"jack.stevens@gmail.com",phone:"+44781234127",status:"Active",accounts:[{id:"microsoft-us-001",name:"Microsoft US",status:"ACTIVE"},{id:"google-ca-002",name:"Google Canada",status:"ACTIVE"}]},{id:"user-id-028",firstName:"Grace",lastName:"Morris",email:"grace.morris@gmail.com",phone:"+44781234128",status:"Active",accounts:[{id:"microsoft-us-001",name:"Microsoft US",status:"ACTIVE"},{id:"google-ca-002",name:"Google Canada",status:"ACTIVE"}]},{id:"user-id-029",firstName:"Samuel",lastName:"Rogers",email:"samuel.rogers@gmail.com",phone:"+44781234129",status:"Active",accounts:[{id:"microsoft-us-001",name:"Microsoft US",status:"ACTIVE"},{id:"google-ca-002",name:"Google Canada",status:"ACTIVE"}]},{id:"user-id-030",firstName:"Lily",lastName:"Cook",email:"lily.cook@gmail.com",phone:"+44781234130",status:"Active",accounts:[{id:"microsoft-us-001",name:"Microsoft US",status:"ACTIVE"},{id:"google-ca-002",name:"Google Canada",status:"ACTIVE"}]},{id:"user-id-031",firstName:"Aaron",lastName:"Reed",email:"aaron.reed@gmail.com",phone:"+44781234131",status:"Active",accounts:[{id:"microsoft-us-001",name:"Microsoft US",status:"ACTIVE"},{id:"google-ca-002",name:"Google Canada",status:"ACTIVE"}]},{id:"user-id-032",firstName:"Bella",lastName:"Ward",email:"bella.ward@gmail.com",phone:"+44781234132",status:"Active",accounts:[{id:"microsoft-us-001",name:"Microsoft US",status:"ACTIVE"},{id:"google-ca-002",name:"Google Canada",status:"ACTIVE"}]},{id:"user-id-033",firstName:"Caleb",lastName:"Peterson",email:"caleb.peterson@gmail.com",phone:"+44781234133",status:"Active",accounts:[{id:"microsoft-us-001",name:"Microsoft US",status:"ACTIVE"},{id:"google-ca-002",name:"Google Canada",status:"ACTIVE"}]},{id:"user-id-034",firstName:"Daisy",lastName:"Gray",email:"daisy.gray@gmail.com",phone:"+44781234134",status:"Active",accounts:[{id:"microsoft-us-001",name:"Microsoft US",status:"ACTIVE"},{id:"google-ca-002",name:"Google Canada",status:"ACTIVE"}]},{id:"user-id-035",firstName:"Evan",lastName:"Ramirez",email:"evan.ramirez@gmail.com",phone:"+44781234135",status:"Active",accounts:[{id:"microsoft-us-001",name:"Microsoft US",status:"ACTIVE"},{id:"google-ca-002",name:"Google Canada",status:"ACTIVE"}]},{id:"user-id-036",firstName:"Fiona",lastName:"Barnes",email:"fiona.barnes@gmail.com",phone:"+44781234136",status:"Active",accounts:[{id:"microsoft-us-001",name:"Microsoft US",status:"ACTIVE"},{id:"google-ca-002",name:"Google Canada",status:"ACTIVE"}]},{id:"user-id-037",firstName:"Gavin",lastName:"Hunt",email:"gavin.hunt@gmail.com",phone:"+44781234137",status:"Active",accounts:[{id:"microsoft-us-001",name:"Microsoft US",status:"ACTIVE"},{id:"google-ca-002",name:"Google Canada",status:"ACTIVE"}]},{id:"user-id-038",firstName:"Hannah",lastName:"Stone",email:"hannah.stone@gmail.com",phone:"+44781234138",status:"Active",accounts:[{id:"microsoft-us-001",name:"Microsoft US",status:"ACTIVE"},{id:"google-ca-002",name:"Google Canada",status:"ACTIVE"}]},{id:"user-id-039",firstName:"Ian",lastName:"Fox",email:"ian.fox@gmail.com",phone:"+44781234139",status:"Active",accounts:[{id:"microsoft-us-001",name:"Microsoft US",status:"ACTIVE"},{id:"google-ca-002",name:"Google Canada",status:"ACTIVE"}]},{id:"user-id-040",firstName:"Julia",lastName:"Coleman",email:"julia.coleman@gmail.com",phone:"+44781234140",status:"Active",accounts:[{id:"microsoft-us-001",name:"Microsoft US",status:"ACTIVE"},{id:"google-ca-002",name:"Google Canada",status:"ACTIVE"}]},{id:"user-id-041",firstName:"Kyle",lastName:"Simmons",email:"kyle.simmons@gmail.com",phone:"+44781234141",status:"Active",accounts:[{id:"microsoft-us-001",name:"Microsoft US",status:"ACTIVE"},{id:"google-ca-002",name:"Google Canada",status:"ACTIVE"}]},{id:"user-id-042",firstName:"Lara",lastName:"Wells",email:"lara.wells@gmail.com",phone:"+44781234142",status:"Active",accounts:[{id:"microsoft-us-001",name:"Microsoft US",status:"ACTIVE"},{id:"google-ca-002",name:"Google Canada",status:"ACTIVE"}]},{id:"user-id-043",firstName:"Miles",lastName:"Foster",email:"miles.foster@gmail.com",phone:"+44781234143",status:"Active",accounts:[{id:"microsoft-us-001",name:"Microsoft US",status:"ACTIVE"},{id:"google-ca-002",name:"Google Canada",status:"ACTIVE"}]},{id:"user-id-044",firstName:"Nina",lastName:"Bryant",email:"nina.bryant@gmail.com",phone:"+44781234144",status:"Active",accounts:[{id:"microsoft-us-001",name:"Microsoft US",status:"ACTIVE"},{id:"google-ca-002",name:"Google Canada",status:"ACTIVE"}]},{id:"user-id-045",firstName:"Owen",lastName:"Perry",email:"owen.perry@gmail.com",phone:"+44781234145",status:"Active",accounts:[{id:"microsoft-us-001",name:"Microsoft US",status:"ACTIVE"},{id:"google-ca-002",name:"Google Canada",status:"ACTIVE"}]},{id:"user-id-046",firstName:"Paula",lastName:"Sanders",email:"paula.sanders@gmail.com",phone:"+44781234146",status:"Active",accounts:[{id:"microsoft-us-001",name:"Microsoft US",status:"ACTIVE"},{id:"google-ca-002",name:"Google Canada",status:"ACTIVE"}]},{id:"user-id-047",firstName:"Quinn",lastName:"Price",email:"quinn.price@gmail.com",phone:"+44781234147",status:"Active",accounts:[{id:"microsoft-us-001",name:"Microsoft US",status:"ACTIVE"},{id:"google-ca-002",name:"Google Canada",status:"ACTIVE"}]},{id:"user-id-048",firstName:"Rita",lastName:"Bennett",email:"rita.bennett@gmail.com",phone:"+44781234148",status:"Active",accounts:[{id:"microsoft-us-001",name:"Microsoft US",status:"ACTIVE"},{id:"google-ca-002",name:"Google Canada",status:"ACTIVE"}]},{id:"user-id-049",firstName:"Sean",lastName:"Wood",email:"sean.wood@gmail.com",phone:"+44781234149",status:"Active",accounts:[{id:"microsoft-us-001",name:"Microsoft US",status:"ACTIVE"},{id:"google-ca-002",name:"Google Canada",status:"ACTIVE"}]},{id:"user-id-050",firstName:"Tina",lastName:"West",email:"tina.west@gmail.com",phone:"+44781234150",status:"Active",accounts:[{id:"microsoft-us-001",name:"Microsoft US",status:"ACTIVE"},{id:"google-ca-002",name:"Google Canada",status:"ACTIVE"}]},{id:"user-id-051",firstName:"Uma",lastName:"Young",email:"uma.young@gmail.com",phone:"+44781234151",status:"Active",accounts:[{id:"microsoft-us-001",name:"Microsoft US",status:"ACTIVE"},{id:"google-ca-002",name:"Google Canada",status:"ACTIVE"}]},{id:"user-id-052",firstName:"Victor",lastName:"Diaz",email:"victor.diaz@gmail.com",phone:"+44781234152",status:"Active",accounts:[{id:"microsoft-us-001",name:"Microsoft US",status:"ACTIVE"},{id:"google-ca-002",name:"Google Canada",status:"ACTIVE"}]},{id:"user-id-053",firstName:"Wendy",lastName:"Griffin",email:"wendy.griffin@gmail.com",phone:"+44781234153",status:"Active",accounts:[{id:"microsoft-us-001",name:"Microsoft US",status:"ACTIVE"},{id:"google-ca-002",name:"Google Canada",status:"ACTIVE"}]},{id:"user-id-054",firstName:"Xavier",lastName:"Hayes",email:"xavier.hayes@gmail.com",phone:"+44781234154",status:"Active",accounts:[{id:"microsoft-us-001",name:"Microsoft US",status:"ACTIVE"},{id:"google-ca-002",name:"Google Canada",status:"ACTIVE"}]},{id:"user-id-055",firstName:"Yara",lastName:"Myers",email:"yara.myers@gmail.com",phone:"+44781234155",status:"Active",accounts:[{id:"microsoft-us-001",name:"Microsoft US",status:"ACTIVE"},{id:"google-ca-002",name:"Google Canada",status:"ACTIVE"}]},{id:"user-id-056",firstName:"Zack",lastName:"Ford",email:"zack.ford@gmail.com",phone:"+44781234156",status:"Active",accounts:[{id:"microsoft-us-001",name:"Microsoft US",status:"ACTIVE"},{id:"google-ca-002",name:"Google Canada",status:"ACTIVE"}]},{id:"user-id-057",firstName:"Alan",lastName:"Hamilton",email:"alan.hamilton@gmail.com",phone:"+44781234157",status:"Active",accounts:[{id:"microsoft-us-001",name:"Microsoft US",status:"ACTIVE"},{id:"google-ca-002",name:"Google Canada",status:"ACTIVE"}]},{id:"user-id-058",firstName:"Bianca",lastName:"Graham",email:"bianca.graham@gmail.com",phone:"+44781234158",status:"Active",accounts:[{id:"microsoft-us-001",name:"Microsoft US",status:"ACTIVE"},{id:"google-ca-002",name:"Google Canada",status:"ACTIVE"}]},{id:"user-id-059",firstName:"Carl",lastName:"Sullivan",email:"carl.sullivan@gmail.com",phone:"+44781234159",status:"Active",accounts:[{id:"microsoft-us-001",name:"Microsoft US",status:"ACTIVE"},{id:"google-ca-002",name:"Google Canada",status:"ACTIVE"}]},{id:"user-id-060",firstName:"Diana",lastName:"Russell",email:"diana.russell@gmail.com",phone:"+44781234160",status:"Active",accounts:[{id:"microsoft-us-001",name:"Microsoft US",status:"ACTIVE"},{id:"google-ca-002",name:"Google Canada",status:"ACTIVE"}]},{id:"user-id-061",firstName:"Eli",lastName:"Ortiz",email:"eli.ortiz@gmail.com",phone:"+44781234161",status:"Active",accounts:[{id:"microsoft-us-001",name:"Microsoft US",status:"ACTIVE"},{id:"google-ca-002",name:"Google Canada",status:"ACTIVE"}]},{id:"user-id-062",firstName:"Faith",lastName:"Jenkins",email:"faith.jenkins@gmail.com",phone:"+44781234162",status:"Active",accounts:[{id:"microsoft-us-001",name:"Microsoft US",status:"ACTIVE"},{id:"google-ca-002",name:"Google Canada",status:"ACTIVE"}]},{id:"user-id-063",firstName:"Gordon",lastName:"Patterson",email:"gordon.patterson@gmail.com",phone:"+44781234163",status:"Active",accounts:[{id:"microsoft-us-001",name:"Microsoft US",status:"ACTIVE"},{id:"google-ca-002",name:"Google Canada",status:"ACTIVE"}]},{id:"user-id-064",firstName:"Hazel",lastName:"Hughes",email:"hazel.hughes@gmail.com",phone:"+44781234164",status:"Active",accounts:[{id:"microsoft-us-001",name:"Microsoft US",status:"ACTIVE"},{id:"google-ca-002",name:"Google Canada",status:"ACTIVE"}]},{id:"user-id-065",firstName:"Isaac",lastName:"Flores",email:"isaac.flores@gmail.com",phone:"+44781234165",status:"Active",accounts:[{id:"microsoft-us-001",name:"Microsoft US",status:"ACTIVE"},{id:"google-ca-002",name:"Google Canada",status:"ACTIVE"}]},{id:"user-id-066",firstName:"Jade",lastName:"Washington",email:"jade.washington@gmail.com",phone:"+44781234166",status:"Active",accounts:[{id:"microsoft-us-001",name:"Microsoft US",status:"ACTIVE"},{id:"google-ca-002",name:"Google Canada",status:"ACTIVE"}]},{id:"user-id-067",firstName:"Kevin",lastName:"Butler",email:"kevin.butler@gmail.com",phone:"+44781234167",status:"Active",accounts:[{id:"microsoft-us-001",name:"Microsoft US",status:"ACTIVE"},{id:"google-ca-002",name:"Google Canada",status:"ACTIVE"}]},{id:"user-id-068",firstName:"Lena",lastName:"Snyder",email:"lena.snyder@gmail.com",phone:"+44781234168",status:"Active",accounts:[{id:"microsoft-us-001",name:"Microsoft US",status:"ACTIVE"},{id:"google-ca-002",name:"Google Canada",status:"ACTIVE"}]},{id:"user-id-069",firstName:"Martin",lastName:"Simpson",email:"martin.simpson@gmail.com",phone:"+44781234169",status:"Active",accounts:[{id:"microsoft-us-001",name:"Microsoft US",status:"ACTIVE"},{id:"google-ca-002",name:"Google Canada",status:"ACTIVE"}]},{id:"user-id-070",firstName:"Nora",lastName:"Porter",email:"nora.porter@gmail.com",phone:"+44781234170",status:"Active",accounts:[{id:"microsoft-us-001",name:"Microsoft US",status:"ACTIVE"},{id:"google-ca-002",name:"Google Canada",status:"ACTIVE"}]},{id:"user-id-071",firstName:"Oscar",lastName:"Hunter",email:"oscar.hunter@gmail.com",phone:"+44781234171",status:"Active",accounts:[{id:"microsoft-us-001",name:"Microsoft US",status:"ACTIVE"},{id:"google-ca-002",name:"Google Canada",status:"ACTIVE"}]},{id:"user-id-072",firstName:"Paige",lastName:"Gibson",email:"paige.gibson@gmail.com",phone:"+44781234172",status:"Active",accounts:[{id:"microsoft-us-001",name:"Microsoft US",status:"ACTIVE"},{id:"google-ca-002",name:"Google Canada",status:"ACTIVE"}]},{id:"user-id-073",firstName:"Quentin",lastName:"Ellis",email:"quentin.ellis@gmail.com",phone:"+44781234173",status:"Active",accounts:[{id:"microsoft-us-001",name:"Microsoft US",status:"ACTIVE"},{id:"google-ca-002",name:"Google Canada",status:"ACTIVE"}]},{id:"user-id-074",firstName:"Rose",lastName:"Fisher",email:"rose.fisher@gmail.com",phone:"+44781234174",status:"Active",accounts:[{id:"microsoft-us-001",name:"Microsoft US",status:"ACTIVE"},{id:"google-ca-002",name:"Google Canada",status:"ACTIVE"}]},{id:"user-id-075",firstName:"Steve",lastName:"Reynolds",email:"steve.reynolds@gmail.com",phone:"+44781234175",status:"Active",accounts:[{id:"microsoft-us-001",name:"Microsoft US",status:"ACTIVE"},{id:"google-ca-002",name:"Google Canada",status:"ACTIVE"}]},{id:"user-id-076",firstName:"Tara",lastName:"Jordan",email:"tara.jordan@gmail.com",phone:"+44781234176",status:"Active",accounts:[{id:"microsoft-us-001",name:"Microsoft US",status:"ACTIVE"},{id:"google-ca-002",name:"Google Canada",status:"ACTIVE"}]},{id:"user-id-077",firstName:"Ulysses",lastName:"Lawson",email:"ulysses.lawson@gmail.com",phone:"+44781234177",status:"Active",accounts:[{id:"microsoft-us-001",name:"Microsoft US",status:"ACTIVE"},{id:"google-ca-002",name:"Google Canada",status:"ACTIVE"}]},{id:"user-id-078",firstName:"Vera",lastName:"Warren",email:"vera.warren@gmail.com",phone:"+44781234178",status:"Active",accounts:[{id:"microsoft-us-001",name:"Microsoft US",status:"ACTIVE"},{id:"google-ca-002",name:"Google Canada",status:"ACTIVE"}]},{id:"user-id-079",firstName:"Will",lastName:"Cole",email:"will.cole@gmail.com",phone:"+44781234179",status:"Active",accounts:[{id:"microsoft-us-001",name:"Microsoft US",status:"ACTIVE"},{id:"google-ca-002",name:"Google Canada",status:"ACTIVE"}]},{id:"user-id-080",firstName:"Zoe",lastName:"Hayward",email:"zoe.hayward@gmail.com",phone:"+44781234180",status:"Active",accounts:[{id:"microsoft-us-001",name:"Microsoft US",status:"ACTIVE"},{id:"google-ca-002",name:"Google Canada",status:"ACTIVE"}]}],zs=[{label:"Download CSV",name:"download-csv",onClick:r=>{console.log(r)}},{label:"Download PDF",name:"download-pdf",onClick:r=>{console.log(r)}}],wl={title:"Praval/pr-grid",component:"pr-grid",enableShortcuts:!1,tags:["autodocs"],decorators:[Gs],argTypes:{hideHeader:{control:"boolean",default:!1},showDownload:{control:"boolean",default:!1},showDownloadMenu:{control:"array",default:zs},rowLimit:{type:"number",min:1,max:30,step:2},headerTitle:{control:"text",default:""},columnReorderingAllowed:{control:"boolean",default:!1},refreshDataOnColumnVisibilityChange:{control:"boolean",default:!1},showAddButton:{control:"boolean",default:!1},disableAddButton:{control:"boolean",default:!1},addButtonLabel:{control:"text",default:"Add"},onAddButtonClick:{action:"onAddButtonClick"},showRemoveAllButton:{control:"boolean",default:!1},disableRemoveAllButton:{control:"boolean",default:!1},removeAllButtonLabel:{control:"text",default:"Remove All"},onRemoveAllButtonClick:{action:"onRemoveAllButtonClick"}}},Mn=({hideHeader:r,rowLimit:t=0,downloadMenuItems:e=zs,showDownload:i=!1,headerTitle:s="Table header",columnReorderingAllowed:o=!1,refreshDataOnColumnVisibilityChange:a=!1,showAddButton:n=!1,disableAddButton:l=!1,addButtonLabel:d="Add",onAddButtonClick:c=()=>{},showRemoveAllButton:h=!1,disableRemoveAllButton:u=!1,removeAllButtonLabel:f="Remove All",onRemoveAllButtonClick:b=()=>{}})=>g`
  <pr-grid
    .columns=${Fn}
    .rows=${Vn}
    .hideHeader=${r}
    .rowLimit=${t}
    .showDownload=${i}
    .downloadMenuItems=${e}
    .localStorageID=${"pr-grid-local-storage"}
    .columnReorderingAllowed=${o}
    .refreshDataOnColumnVisibilityChange=${a}
    .showAddButton=${n}
    .disableAddButton=${l}
    .addButtonLabel=${d}
    .onAddButtonClick=${c}
    .showRemoveAllButton=${h}
    .disableRemoveAllButton=${u}
    .removeAllButtonLabel=${f}
    .onRemoveAllButtonClick=${b}
  >
    <div slot="header">
      <h3>${s}</h3>
    </div>
    <div slot="footer"></div>
  </pr-grid>
`,Ae=Mn.bind({});Ae.args={};Ae.parameters={...Ae.parameters,docs:{...Ae.parameters?.docs,source:{originalSource:`({
  hideHeader,
  rowLimit = 0,
  downloadMenuItems = menuItems,
  showDownload = false,
  headerTitle = 'Table header',
  columnReorderingAllowed = false,
  refreshDataOnColumnVisibilityChange = false,
  showAddButton = false,
  disableAddButton = false,
  addButtonLabel = 'Add',
  onAddButtonClick = () => {},
  showRemoveAllButton = false,
  disableRemoveAllButton = false,
  removeAllButtonLabel = 'Remove All',
  onRemoveAllButtonClick = () => {}
}) => html\`
  <pr-grid
    .columns=\${columns}
    .rows=\${contacts}
    .hideHeader=\${hideHeader}
    .rowLimit=\${rowLimit}
    .showDownload=\${showDownload}
    .downloadMenuItems=\${downloadMenuItems}
    .localStorageID=\${'pr-grid-local-storage'}
    .columnReorderingAllowed=\${columnReorderingAllowed}
    .refreshDataOnColumnVisibilityChange=\${refreshDataOnColumnVisibilityChange}
    .showAddButton=\${showAddButton}
    .disableAddButton=\${disableAddButton}
    .addButtonLabel=\${addButtonLabel}
    .onAddButtonClick=\${onAddButtonClick}
    .showRemoveAllButton=\${showRemoveAllButton}
    .disableRemoveAllButton=\${disableRemoveAllButton}
    .removeAllButtonLabel=\${removeAllButtonLabel}
    .onRemoveAllButtonClick=\${onRemoveAllButtonClick}
  >
    <div slot="header">
      <h3>\${headerTitle}</h3>
    </div>
    <div slot="footer"></div>
  </pr-grid>
\``,...Ae.parameters?.docs?.source}}};const xl=["Default"];export{Ae as Default,xl as __namedExportsOrder,wl as default};
