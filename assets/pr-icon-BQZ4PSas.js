import{i,b as n,a as o}from"./iframe-DznlVQe6.js";import{_ as r,n as d}from"./property-DPzhTE-K.js";import{t as c}from"./custom-element-C-crYl4r.js";class h extends i{render(){return n`<slot></slot>`}connectedCallback(){if(super.connectedCallback(),this.getAttribute("aria-hidden")==="false"){this.removeAttribute("aria-hidden");return}this.setAttribute("aria-hidden","true")}}const f=o`:host{font-size:var(--md-icon-size, 24px);width:var(--md-icon-size, 24px);height:var(--md-icon-size, 24px);color:inherit;font-variation-settings:inherit;font-weight:400;font-family:var(--md-icon-font, Material Symbols Outlined);display:inline-flex;font-style:normal;place-items:center;place-content:center;line-height:1;overflow:hidden;letter-spacing:normal;text-transform:none;user-select:none;white-space:nowrap;word-wrap:normal;flex-shrink:0;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale}::slotted(svg){fill:currentColor}::slotted(*){height:100%;width:100%}
`;let t=class extends h{};t.styles=[f];t=r([c("md-icon")],t);class s extends i{constructor(){super(...arguments),this.filled=!1}connectedCallback(){if(super.connectedCallback(),this.getAttribute("aria-hidden")==="false"){this.removeAttribute("aria-hidden");return}this.setAttribute("aria-hidden","true")}render(){return n`<md-icon ?filled=${this.filled}><slot></slot></md-icon>`}}r([d({type:Boolean,reflect:!0})],s.prototype,"filled",void 0);class a extends s{}a.styles=o`
    :host {
      font-size: var(--pr-icon-font-size);
      height: var(--pr-icon-font-size);
      line-height: var(--pr-icon-line-height);
      width: var(--pr-icon-font-size);
    }

    md-icon {
      font-size: var(--pr-icon-font-size);
      height: var(--pr-icon-font-size);
      line-height: var(--pr-icon-line-height);
      width: var(--pr-icon-font-size);
    }

    md-icon[filled] {
      font-variation-settings: 'FILL' 1;
    }
  `;customElements.define("pr-icon",a);
