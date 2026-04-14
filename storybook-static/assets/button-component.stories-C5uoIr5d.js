import{b as p,A as c,a as v,i as F}from"./iframe-DznlVQe6.js";import{_ as l,n as d}from"./property-DPzhTE-K.js";import{f as K,i as D,m as Q,a as V,b as j,d as G}from"./circular-progress-BzeGXRn4.js";import{e as X,o as S}from"./class-map-BeVXpLCM.js";import{t as f}from"./custom-element-C-crYl4r.js";import{a as Z,e as N,d as ee}from"./story-helpers-Dsz32Ejl.js";import"./pr-icon-BQZ4PSas.js";import"./preload-helper-PPVm8Dsz.js";import"./state-BRuHdIse.js";function te(n){return(e,t)=>{const{slot:a,selector:o}=n??{},r="slot"+(a?`[name=${a}]`:":not([name])");return Z(e,t,{get(){const i=this.renderRoot?.querySelector(r),u=i?.assignedElements(n)??[];return o===void 0?u:u.filter(y=>y.matches(o))}})}}const U=Symbol.for(""),ae=n=>{if(n?.r===U)return n?._$litStatic$},g=(n,...e)=>({_$litStatic$:e.reduce((t,a,o)=>t+(r=>{if(r._$litStatic$!==void 0)return r._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${r}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(a)+n[o+1],n[0]),r:U}),q=new Map,oe=n=>(e,...t)=>{const a=t.length;let o,r;const i=[],u=[];let y,m=0,R=!1;for(;m<a;){for(y=e[m];m<a&&(r=t[m],(o=ae(r))!==void 0);)y+=o+e[++m],R=!0;m!==a&&u.push(r),i.push(y),m++}if(m===a&&i.push(e[a]),R){const P=i.join("$$lit$$");(e=q.get(P))===void 0&&(i.raw=i,q.set(P,e=i)),t=u}return n(e,...t)},re=oe(p);class ne extends K{constructor(){super(...arguments),this.prevData={}}render(e){return c}update(e,[t]){var a;this.element!==e.element&&(this.element=e.element),this.host=((a=e.options)===null||a===void 0?void 0:a.host)||this.element,this.apply(t),this.groom(t),this.prevData={...t}}apply(e){if(!e)return;const{prevData:t,element:a}=this;for(const o in e){const r=e[o];r!==t[o]&&(a[o]=r)}}groom(e){const{prevData:t,element:a}=this;if(t)for(const o in t)(!e||!(o in e)&&a[o]===t[o])&&(a[o]=void 0)}}class le extends ne{constructor(){super(...arguments),this.eventData={}}apply(e){if(e)for(const t in e){const a=e[t];a!==this.eventData[t]&&this.applyEvent(t,a)}}applyEvent(e,t){const{prevData:a,element:o}=this;this.eventData[e]=t,a[e]&&o.removeEventListener(e,this,t),o.addEventListener(e,this,t)}groom(e){const{prevData:t,element:a}=this;if(t)for(const o in t)(!e||!(o in e)&&a[o]===t[o])&&this.groomEvent(o,t[o])}groomEvent(e,t){const{element:a}=this;delete this.eventData[e],a.removeEventListener(e,this,t)}handleEvent(e){const t=this.eventData[e.type];typeof t=="function"?t.call(this.host,e):t.handleEvent(e)}disconnected(){const{eventData:e,element:t}=this;for(const a in e){const o=a.slice(1),r=e[a];t.removeEventListener(o,this,r)}}reconnected(){const{eventData:e,element:t}=this;for(const a in e){const o=a.slice(1),r=e[a];t.addEventListener(o,this,r)}}}class ie extends le{apply(e){if(!e)return;const{prevData:t,element:a}=this;for(const o in e){const r=e[o];if(r===t[o])continue;const i=o.slice(1);switch(o[0]){case"@":this.eventData[i]=r,this.applyEvent(i,r);break;case".":a[i]=r;break;case"?":r?a.setAttribute(i,""):a.removeAttribute(i);break;default:r!=null?a.setAttribute(o,String(r)):a.removeAttribute(o);break}}}groom(e){const{prevData:t,element:a}=this;if(t)for(const o in t){const r=o.slice(1);if(!e||!(o in e)&&a[r]===t[o])switch(o[0]){case"@":this.groomEvent(r,t[o]);break;case".":a[r]=void 0;break;case"?":a.removeAttribute(r);break;default:a.removeAttribute(o);break}}}}const H=X(ie);const z=v`:host{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end);box-sizing:border-box;cursor:pointer;display:inline-flex;gap:8px;min-height:var(--_container-height);outline:none;padding-block:calc((var(--_container-height) - max(var(--_label-text-line-height),var(--_icon-size)))/2);padding-inline-start:var(--_leading-space);padding-inline-end:var(--_trailing-space);place-content:center;place-items:center;position:relative;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);text-overflow:ellipsis;text-wrap:nowrap;user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0);vertical-align:top;--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host(:is([disabled],[soft-disabled])){cursor:default;pointer-events:none}.button{border-radius:inherit;cursor:inherit;display:inline-flex;align-items:center;justify-content:center;border:none;outline:none;-webkit-appearance:none;vertical-align:middle;background:rgba(0,0,0,0);text-decoration:none;min-width:calc(64px - var(--_leading-space) - var(--_trailing-space));width:100%;z-index:0;height:100%;font:inherit;color:var(--_label-text-color);padding:0;gap:inherit;text-transform:inherit}.button::-moz-focus-inner{padding:0;border:0}:host(:hover) .button{color:var(--_hover-label-text-color)}:host(:focus-within) .button{color:var(--_focus-label-text-color)}:host(:active) .button{color:var(--_pressed-label-text-color)}.background{background:var(--_container-color);border-radius:inherit;inset:0;position:absolute}.label{overflow:hidden}:is(.button,.label,.label slot),.label ::slotted(*){text-overflow:inherit}:host(:is([disabled],[soft-disabled])) .label{color:var(--_disabled-label-text-color);opacity:var(--_disabled-label-text-opacity)}:host(:is([disabled],[soft-disabled])) .background{background:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}@media(forced-colors: active){.background{border:1px solid CanvasText}:host(:is([disabled],[soft-disabled])){--_disabled-icon-color: GrayText;--_disabled-icon-opacity: 1;--_disabled-container-opacity: 1;--_disabled-label-text-color: GrayText;--_disabled-label-text-opacity: 1}}:host([has-icon]:not([trailing-icon])){padding-inline-start:var(--_with-leading-icon-leading-space);padding-inline-end:var(--_with-leading-icon-trailing-space)}:host([has-icon][trailing-icon]){padding-inline-start:var(--_with-trailing-icon-leading-space);padding-inline-end:var(--_with-trailing-icon-trailing-space)}::slotted([slot=icon]){display:inline-flex;position:relative;writing-mode:horizontal-tb;fill:currentColor;flex-shrink:0;color:var(--_icon-color);font-size:var(--_icon-size);inline-size:var(--_icon-size);block-size:var(--_icon-size)}:host(:hover) ::slotted([slot=icon]){color:var(--_hover-icon-color)}:host(:focus-within) ::slotted([slot=icon]){color:var(--_focus-icon-color)}:host(:active) ::slotted([slot=icon]){color:var(--_pressed-icon-color)}:host(:is([disabled],[soft-disabled])) ::slotted([slot=icon]){color:var(--_disabled-icon-color);opacity:var(--_disabled-icon-opacity)}.touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) 0}:host([touch-target=none]) .touch{display:none}
`;function W(n){n.addInitializer(e=>{const t=e;t.addEventListener("click",async a=>{const{type:o,[D]:r}=t,{form:i}=r;if(!(!i||o==="button")&&(await new Promise(u=>{setTimeout(u)}),!a.defaultPrevented)){if(o==="reset"){i.reset();return}i.addEventListener("submit",u=>{Object.defineProperty(u,"submitter",{configurable:!0,enumerable:!0,get:()=>t})},{capture:!0,once:!0}),r.setFormValue(t.value),i.requestSubmit()}})})}const se=Q(V(F));class s extends se{get name(){return this.getAttribute("name")??""}set name(e){this.setAttribute("name",e)}get form(){return this[D].form}constructor(){super(),this.disabled=!1,this.softDisabled=!1,this.href="",this.download="",this.target="",this.trailingIcon=!1,this.hasIcon=!1,this.type="submit",this.value="",this.addEventListener("click",this.handleClick.bind(this))}focus(){this.buttonElement?.focus()}blur(){this.buttonElement?.blur()}render(){const e=this.disabled||this.softDisabled,t=this.href?this.renderLink():this.renderButton(),a=this.href?"link":"button";return p`
      ${this.renderElevationOrOutline?.()}
      <div class="background"></div>
      <md-focus-ring part="focus-ring" for=${a}></md-focus-ring>
      <md-ripple
        part="ripple"
        for=${a}
        ?disabled="${e}"></md-ripple>
      ${t}
    `}renderButton(){const{ariaLabel:e,ariaHasPopup:t,ariaExpanded:a}=this;return p`<button
      id="button"
      class="button"
      ?disabled=${this.disabled}
      aria-disabled=${this.softDisabled||c}
      aria-label="${e||c}"
      aria-haspopup="${t||c}"
      aria-expanded="${a||c}">
      ${this.renderContent()}
    </button>`}renderLink(){const{ariaLabel:e,ariaHasPopup:t,ariaExpanded:a}=this;return p`<a
      id="link"
      class="button"
      aria-label="${e||c}"
      aria-haspopup="${t||c}"
      aria-expanded="${a||c}"
      aria-disabled=${this.disabled||this.softDisabled||c}
      tabindex="${this.disabled&&!this.softDisabled?-1:c}"
      href=${this.href}
      download=${this.download||c}
      target=${this.target||c}
      >${this.renderContent()}
    </a>`}renderContent(){const e=p`<slot
      name="icon"
      @slotchange="${this.handleSlotChange}"></slot>`;return p`
      <span class="touch"></span>
      ${this.trailingIcon?c:e}
      <span class="label"><slot></slot></span>
      ${this.trailingIcon?e:c}
    `}handleClick(e){if(this.softDisabled||this.disabled&&this.href){e.stopImmediatePropagation(),e.preventDefault();return}!j(e)||!this.buttonElement||(this.focus(),G(this.buttonElement))}handleSlotChange(){this.hasIcon=this.assignedIcons.length>0}}W(s);s.formAssociated=!0;s.shadowRootOptions={mode:"open",delegatesFocus:!0};l([d({type:Boolean,reflect:!0})],s.prototype,"disabled",void 0);l([d({type:Boolean,attribute:"soft-disabled",reflect:!0})],s.prototype,"softDisabled",void 0);l([d()],s.prototype,"href",void 0);l([d()],s.prototype,"download",void 0);l([d()],s.prototype,"target",void 0);l([d({type:Boolean,attribute:"trailing-icon",reflect:!0})],s.prototype,"trailingIcon",void 0);l([d({type:Boolean,attribute:"has-icon",reflect:!0})],s.prototype,"hasIcon",void 0);l([d()],s.prototype,"type",void 0);l([d({reflect:!0})],s.prototype,"value",void 0);l([N(".button")],s.prototype,"buttonElement",void 0);l([te({slot:"icon",flatten:!0})],s.prototype,"assignedIcons",void 0);class de extends s{}const ce=v`:host{--_container-height: var(--md-text-button-container-height, 40px);--_disabled-label-text-color: var(--md-text-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-text-button-disabled-label-text-opacity, 0.38);--_focus-label-text-color: var(--md-text-button-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-label-text-color: var(--md-text-button-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-color: var(--md-text-button-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-text-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-text-button-label-text-color, var(--md-sys-color-primary, #6750a4));--_label-text-font: var(--md-text-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-text-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-text-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-text-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-label-text-color: var(--md-text-button-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-color: var(--md-text-button-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-text-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-text-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-text-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-text-button-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-icon-color: var(--md-text-button-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-color: var(--md-text-button-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-text-button-icon-size, 18px);--_pressed-icon-color: var(--md-text-button-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_container-shape-start-start: var(--md-text-button-container-shape-start-start, var(--md-text-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-text-button-container-shape-start-end, var(--md-text-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-text-button-container-shape-end-end, var(--md-text-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-text-button-container-shape-end-start, var(--md-text-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_leading-space: var(--md-text-button-leading-space, 12px);--_trailing-space: var(--md-text-button-trailing-space, 12px);--_with-leading-icon-leading-space: var(--md-text-button-with-leading-icon-leading-space, 12px);--_with-leading-icon-trailing-space: var(--md-text-button-with-leading-icon-trailing-space, 16px);--_with-trailing-icon-leading-space: var(--md-text-button-with-trailing-icon-leading-space, 16px);--_with-trailing-icon-trailing-space: var(--md-text-button-with-trailing-icon-trailing-space, 12px);--_container-color: none;--_disabled-container-color: none;--_disabled-container-opacity: 0}
`;let B=class extends de{};B.styles=[z,ce];B=l([f("md-text-button")],B);class pe extends F{connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}render(){return p`<span class="shadow"></span>`}}const be=v`:host,.shadow,.shadow::before,.shadow::after{border-radius:inherit;inset:0;position:absolute;transition-duration:inherit;transition-property:inherit;transition-timing-function:inherit}:host{display:flex;pointer-events:none;transition-property:box-shadow,opacity}.shadow::before,.shadow::after{content:"";transition-property:box-shadow,opacity;--_level: var(--md-elevation-level, 0);--_shadow-color: var(--md-elevation-shadow-color, var(--md-sys-color-shadow, #000))}.shadow::before{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 3,1) + 2*clamp(0,var(--_level) - 4,1))) calc(1px*(2*clamp(0,var(--_level),1) + clamp(0,var(--_level) - 2,1) + clamp(0,var(--_level) - 4,1))) 0px var(--_shadow-color);opacity:.3}.shadow::after{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 1,1) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(3*clamp(0,var(--_level),2) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(clamp(0,var(--_level),4) + 2*clamp(0,var(--_level) - 4,1))) var(--_shadow-color);opacity:.15}
`;let A=class extends pe{};A.styles=[be];A=l([f("md-elevation")],A);class ue extends s{renderElevationOrOutline(){return p`<md-elevation part="elevation"></md-elevation>`}}const ve=v`:host{--_container-color: var(--md-elevated-button-container-color, var(--md-sys-color-surface-container-low, #f7f2fa));--_container-elevation: var(--md-elevated-button-container-elevation, 1);--_container-height: var(--md-elevated-button-container-height, 40px);--_container-shadow-color: var(--md-elevated-button-container-shadow-color, var(--md-sys-color-shadow, #000));--_disabled-container-color: var(--md-elevated-button-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-elevation: var(--md-elevated-button-disabled-container-elevation, 0);--_disabled-container-opacity: var(--md-elevated-button-disabled-container-opacity, 0.12);--_disabled-label-text-color: var(--md-elevated-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-elevated-button-disabled-label-text-opacity, 0.38);--_focus-container-elevation: var(--md-elevated-button-focus-container-elevation, 1);--_focus-label-text-color: var(--md-elevated-button-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-container-elevation: var(--md-elevated-button-hover-container-elevation, 2);--_hover-label-text-color: var(--md-elevated-button-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-color: var(--md-elevated-button-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-elevated-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-elevated-button-label-text-color, var(--md-sys-color-primary, #6750a4));--_label-text-font: var(--md-elevated-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-elevated-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-elevated-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-elevated-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-container-elevation: var(--md-elevated-button-pressed-container-elevation, 1);--_pressed-label-text-color: var(--md-elevated-button-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-color: var(--md-elevated-button-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-elevated-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-elevated-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-elevated-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-elevated-button-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-icon-color: var(--md-elevated-button-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-color: var(--md-elevated-button-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-elevated-button-icon-size, 18px);--_pressed-icon-color: var(--md-elevated-button-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_container-shape-start-start: var(--md-elevated-button-container-shape-start-start, var(--md-elevated-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-elevated-button-container-shape-start-end, var(--md-elevated-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-elevated-button-container-shape-end-end, var(--md-elevated-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-elevated-button-container-shape-end-start, var(--md-elevated-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_leading-space: var(--md-elevated-button-leading-space, 24px);--_trailing-space: var(--md-elevated-button-trailing-space, 24px);--_with-leading-icon-leading-space: var(--md-elevated-button-with-leading-icon-leading-space, 16px);--_with-leading-icon-trailing-space: var(--md-elevated-button-with-leading-icon-trailing-space, 24px);--_with-trailing-icon-leading-space: var(--md-elevated-button-with-trailing-icon-leading-space, 24px);--_with-trailing-icon-trailing-space: var(--md-elevated-button-with-trailing-icon-trailing-space, 16px)}
`;const M=v`md-elevation{transition-duration:280ms}:host(:is([disabled],[soft-disabled])) md-elevation{transition:none}md-elevation{--md-elevation-level: var(--_container-elevation);--md-elevation-shadow-color: var(--_container-shadow-color)}:host(:focus-within) md-elevation{--md-elevation-level: var(--_focus-container-elevation)}:host(:hover) md-elevation{--md-elevation-level: var(--_hover-container-elevation)}:host(:active) md-elevation{--md-elevation-level: var(--_pressed-container-elevation)}:host(:is([disabled],[soft-disabled])) md-elevation{--md-elevation-level: var(--_disabled-container-elevation)}
`;let I=class extends ue{};I.styles=[z,M,ve];I=l([f("md-elevated-button")],I);class me extends s{renderElevationOrOutline(){return p`<md-elevation part="elevation"></md-elevation>`}}const he=v`:host{--_container-color: var(--md-filled-button-container-color, var(--md-sys-color-primary, #6750a4));--_container-elevation: var(--md-filled-button-container-elevation, 0);--_container-height: var(--md-filled-button-container-height, 40px);--_container-shadow-color: var(--md-filled-button-container-shadow-color, var(--md-sys-color-shadow, #000));--_disabled-container-color: var(--md-filled-button-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-elevation: var(--md-filled-button-disabled-container-elevation, 0);--_disabled-container-opacity: var(--md-filled-button-disabled-container-opacity, 0.12);--_disabled-label-text-color: var(--md-filled-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-button-disabled-label-text-opacity, 0.38);--_focus-container-elevation: var(--md-filled-button-focus-container-elevation, 0);--_focus-label-text-color: var(--md-filled-button-focus-label-text-color, var(--md-sys-color-on-primary, #fff));--_hover-container-elevation: var(--md-filled-button-hover-container-elevation, 1);--_hover-label-text-color: var(--md-filled-button-hover-label-text-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-color: var(--md-filled-button-hover-state-layer-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-opacity: var(--md-filled-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-filled-button-label-text-color, var(--md-sys-color-on-primary, #fff));--_label-text-font: var(--md-filled-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-filled-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-filled-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-container-elevation: var(--md-filled-button-pressed-container-elevation, 0);--_pressed-label-text-color: var(--md-filled-button-pressed-label-text-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-color: var(--md-filled-button-pressed-state-layer-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-opacity: var(--md-filled-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-filled-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-filled-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-filled-button-focus-icon-color, var(--md-sys-color-on-primary, #fff));--_hover-icon-color: var(--md-filled-button-hover-icon-color, var(--md-sys-color-on-primary, #fff));--_icon-color: var(--md-filled-button-icon-color, var(--md-sys-color-on-primary, #fff));--_icon-size: var(--md-filled-button-icon-size, 18px);--_pressed-icon-color: var(--md-filled-button-pressed-icon-color, var(--md-sys-color-on-primary, #fff));--_container-shape-start-start: var(--md-filled-button-container-shape-start-start, var(--md-filled-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-filled-button-container-shape-start-end, var(--md-filled-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-filled-button-container-shape-end-end, var(--md-filled-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-filled-button-container-shape-end-start, var(--md-filled-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_leading-space: var(--md-filled-button-leading-space, 24px);--_trailing-space: var(--md-filled-button-trailing-space, 24px);--_with-leading-icon-leading-space: var(--md-filled-button-with-leading-icon-leading-space, 16px);--_with-leading-icon-trailing-space: var(--md-filled-button-with-leading-icon-trailing-space, 24px);--_with-trailing-icon-leading-space: var(--md-filled-button-with-trailing-icon-leading-space, 24px);--_with-trailing-icon-trailing-space: var(--md-filled-button-with-trailing-icon-trailing-space, 16px)}
`;let O=class extends me{};O.styles=[z,M,he];O=l([f("md-filled-button")],O);class fe extends s{renderElevationOrOutline(){return p`<div class="outline"></div>`}}const ye=v`:host{--_container-height: var(--md-outlined-button-container-height, 40px);--_disabled-label-text-color: var(--md-outlined-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-outlined-button-disabled-label-text-opacity, 0.38);--_disabled-outline-color: var(--md-outlined-button-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-outlined-button-disabled-outline-opacity, 0.12);--_focus-label-text-color: var(--md-outlined-button-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-label-text-color: var(--md-outlined-button-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-color: var(--md-outlined-button-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-outlined-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-outlined-button-label-text-color, var(--md-sys-color-primary, #6750a4));--_label-text-font: var(--md-outlined-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-outlined-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-outlined-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-outlined-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_outline-color: var(--md-outlined-button-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-outlined-button-outline-width, 1px);--_pressed-label-text-color: var(--md-outlined-button-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_pressed-outline-color: var(--md-outlined-button-pressed-outline-color, var(--md-sys-color-outline, #79747e));--_pressed-state-layer-color: var(--md-outlined-button-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-outlined-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-outlined-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-outlined-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-outlined-button-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-icon-color: var(--md-outlined-button-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-color: var(--md-outlined-button-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-outlined-button-icon-size, 18px);--_pressed-icon-color: var(--md-outlined-button-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_container-shape-start-start: var(--md-outlined-button-container-shape-start-start, var(--md-outlined-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-outlined-button-container-shape-start-end, var(--md-outlined-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-outlined-button-container-shape-end-end, var(--md-outlined-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-outlined-button-container-shape-end-start, var(--md-outlined-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_leading-space: var(--md-outlined-button-leading-space, 24px);--_trailing-space: var(--md-outlined-button-trailing-space, 24px);--_with-leading-icon-leading-space: var(--md-outlined-button-with-leading-icon-leading-space, 16px);--_with-leading-icon-trailing-space: var(--md-outlined-button-with-leading-icon-trailing-space, 24px);--_with-trailing-icon-leading-space: var(--md-outlined-button-with-trailing-icon-leading-space, 24px);--_with-trailing-icon-trailing-space: var(--md-outlined-button-with-trailing-icon-trailing-space, 16px);--_container-color: none;--_disabled-container-color: none;--_disabled-container-opacity: 0}.outline{inset:0;border-style:solid;position:absolute;box-sizing:border-box;border-color:var(--_outline-color);border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}:host(:active) .outline{border-color:var(--_pressed-outline-color)}:host(:is([disabled],[soft-disabled])) .outline{border-color:var(--_disabled-outline-color);opacity:var(--_disabled-outline-opacity)}@media(forced-colors: active){:host(:is([disabled],[soft-disabled])) .background{border-color:GrayText}:host(:is([disabled],[soft-disabled])) .outline{opacity:1}}.outline,md-ripple{border-width:var(--_outline-width)}md-ripple{inline-size:calc(100% - 2*var(--_outline-width));block-size:calc(100% - 2*var(--_outline-width));border-style:solid;border-color:rgba(0,0,0,0)}
`;let T=class extends fe{};T.styles=[z,ye];T=l([f("md-outlined-button")],T);class ge extends s{renderElevationOrOutline(){return p`<md-elevation part="elevation"></md-elevation>`}}const xe=v`:host{--_container-color: var(--md-filled-tonal-button-container-color, var(--md-sys-color-secondary-container, #e8def8));--_container-elevation: var(--md-filled-tonal-button-container-elevation, 0);--_container-height: var(--md-filled-tonal-button-container-height, 40px);--_container-shadow-color: var(--md-filled-tonal-button-container-shadow-color, var(--md-sys-color-shadow, #000));--_disabled-container-color: var(--md-filled-tonal-button-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-elevation: var(--md-filled-tonal-button-disabled-container-elevation, 0);--_disabled-container-opacity: var(--md-filled-tonal-button-disabled-container-opacity, 0.12);--_disabled-label-text-color: var(--md-filled-tonal-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-tonal-button-disabled-label-text-opacity, 0.38);--_focus-container-elevation: var(--md-filled-tonal-button-focus-container-elevation, 0);--_focus-label-text-color: var(--md-filled-tonal-button-focus-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-container-elevation: var(--md-filled-tonal-button-hover-container-elevation, 1);--_hover-label-text-color: var(--md-filled-tonal-button-hover-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-state-layer-color: var(--md-filled-tonal-button-hover-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-state-layer-opacity: var(--md-filled-tonal-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-filled-tonal-button-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_label-text-font: var(--md-filled-tonal-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-tonal-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-filled-tonal-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-filled-tonal-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-container-elevation: var(--md-filled-tonal-button-pressed-container-elevation, 0);--_pressed-label-text-color: var(--md-filled-tonal-button-pressed-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_pressed-state-layer-color: var(--md-filled-tonal-button-pressed-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_pressed-state-layer-opacity: var(--md-filled-tonal-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-filled-tonal-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-filled-tonal-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-filled-tonal-button-focus-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-icon-color: var(--md-filled-tonal-button-hover-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_icon-color: var(--md-filled-tonal-button-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_icon-size: var(--md-filled-tonal-button-icon-size, 18px);--_pressed-icon-color: var(--md-filled-tonal-button-pressed-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_container-shape-start-start: var(--md-filled-tonal-button-container-shape-start-start, var(--md-filled-tonal-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-filled-tonal-button-container-shape-start-end, var(--md-filled-tonal-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-filled-tonal-button-container-shape-end-end, var(--md-filled-tonal-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-filled-tonal-button-container-shape-end-start, var(--md-filled-tonal-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_leading-space: var(--md-filled-tonal-button-leading-space, 24px);--_trailing-space: var(--md-filled-tonal-button-trailing-space, 24px);--_with-leading-icon-leading-space: var(--md-filled-tonal-button-with-leading-icon-leading-space, 16px);--_with-leading-icon-trailing-space: var(--md-filled-tonal-button-with-leading-icon-trailing-space, 24px);--_with-trailing-icon-leading-space: var(--md-filled-tonal-button-with-trailing-icon-leading-space, 24px);--_with-trailing-icon-trailing-space: var(--md-filled-tonal-button-with-trailing-icon-trailing-space, 16px)}
`;let L=class extends ge{};L.styles=[z,M,xe];L=l([f("md-filled-tonal-button")],L);var Y;class b extends F{get form(){return this[D].form}set form(e){this.setAttribute("form",e)}get buttonElement(){return this.shadowRoot?.querySelector(".md-button")?.shadowRoot?.querySelector(".button")}get name(){return this.getAttribute("name")??""}set name(e){this.setAttribute("name",e)}focus(){this.buttonElement.focus()}blur(){this.buttonElement.blur()}constructor(){super(),this.value="",this[Y]=this.attachInternals(),this.type="submit",this.disabled=!1,this.submitting=!1,this.href=void 0,this.target="",this.trailingIcon=!1,this.hasIcon=!1,this.appearance="filled",this.handleActivationClick=e=>{!j(e)||!this.buttonElement||(this.focus(),G(this.buttonElement))},this.tags={elevated:g`md-elevated-button`,filled:g`md-filled-button`,"filled-tonal":g`md-filled-tonal-button`,outlined:g`md-outlined-button`,text:g`md-text-button`},this.addEventListener("click",this.handleActivationClick)}get ariaAttributes(){const e={};for(const t of this.getAttributeNames())t.startsWith("aria-")&&(e[t]=this.getAttribute(t)||"");return e}render(){if(this.appearance==="anchor")return p`<a
        target=${S(this.target)}
        href=${S(this.href)}
        ${H(this.ariaAttributes)}
        >${this.value?this.value:c}<slot></slot
      ></a>`;const e=this.tags?.[this.appearance]||this.tags.outlined;return re`
    <${e}
      ?disabled=${this.disabled||this.submitting}
      target=${S(this.target)}
      href=${S(this.href)}
      ?trailing-icon=${this.trailingIcon}
      ?has-icon=${this.hasIcon}
      value="${this.value}"
      type=${this.type}
      class="md-button"
      ${H(this.ariaAttributes)}
    >
      <div class="slot-wrap">
        ${this.submitting?p`<md-circular-progress indeterminate></md-circular-progress>`:p`<slot></slot>`}
      </div>
      ${this.hasIcon?p`<slot slot="icon" name="icon"></slot>`:c}
    </${e}>`}}Y=D;W(b);b.formAssociated=!0;b.shadowRootOptions={mode:"open",delegatesFocus:!0};l([d()],b.prototype,"value",void 0);l([d()],b.prototype,"type",void 0);l([d({type:Boolean,reflect:!0})],b.prototype,"disabled",void 0);l([d({type:Boolean,reflect:!0})],b.prototype,"submitting",void 0);l([d()],b.prototype,"href",void 0);l([d()],b.prototype,"target",void 0);l([d({type:Boolean,attribute:"trailing-icon"})],b.prototype,"trailingIcon",void 0);l([d({type:Boolean,attribute:"has-icon"})],b.prototype,"hasIcon",void 0);l([d()],b.prototype,"appearance",void 0);class J extends b{}J.styles=v`
    .md-button {
      display: flex;
      --md-circular-progress-size: 24px;
    }

    .slot-wrap {
      font-family: var(
        --pr-button-font-family,
        var(--root-secondary-font, 'sans-serif')
      );
      font-weight: var(--pr-button-font-weight, bold);
      text-transform: var(--pr-button-text-transform, uppercase);
      position: relative;
      letter-spacing: var(--pr-button-letter-spacing, 1.25px);
    }

    :host {
      overflow: hidden;
    }

    :host(.login) {
      --md-filled-button-pressed-state-layer-color: var(
        --clr-secondary,
        #071454
      );
      --md-filled-button-pressed-state-layer-opacity: 1;
      --md-filled-button-hover-state-layer-color: var(--clr-secondary, #071454);
      --md-filled-button-hover-state-layer-opacity: 1;
      --md-filled-button-container-shape: 0;
    }

    :host(.critical),
    :host(.cancel) {
      --md-outlined-button-pressed-outline-color: var(
        --pr-button-pressed-clr-critical-outline,
        var(--clr-critical, #db0028)
      );

      --md-sys-color-on-primary: var(
        --pr-button-clr-on-critical,
        var(--clr-on-critical, #fff)
      );
      --md-sys-color-primary: var(
        --pr-button-clr-critical,
        var(--clr-critical, #db0028)
      );
      --md-outlined-button-outline-color: var(
        --pr-button-clr-critical-outline,
        var(--clr-critical, #db0028)
      );
      --md-filled-button-hover-state-layer-color: var(
        --pr-button-clr-critical-hover,
        var(--clr-critical-hover, #f83b3a)
      );
    }
  `;window.customElements.define("pr-button",J);const Fe={title:"Praval/pr-button",component:"pr-button",enableShortcuts:!1,tags:["autodocs"],parameters:{docs:{description:{component:"This is a custom button built with Lit."}}},decorators:[ee],argTypes:{slot:{control:"text"},disabled:{control:"boolean"},appearance:{control:"select",options:["elevated","filled","filled-tonal","outlined","text"]},onClick:{action:"clicked"}}},h=({slot:n="Submit",appearance:e="filled",disabled:t,href:a,target:o,onClick:r})=>p`
  <pr-button
    target=${o}
    appearance=${e}
    ?disabled=${t}
    href=${a}
    aria-label="pr-button example"
    role=${a?"link":"button"}
    @click=${r}
  >
    ${n}
  </pr-button>
`,C=h.bind({}),x=h.bind({});x.args={appearance:"elevated"};const _=h.bind({});_.args={appearance:"filled"};const w=h.bind({});w.args={appearance:"filled-tonal"};const $=h.bind({});$.args={appearance:"outlined"};const k=h.bind({});k.args={appearance:"text"};const E=h.bind({});E.args={disabled:!0};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`({
  slot = 'Submit',
  appearance = 'filled',
  disabled,
  href,
  target,
  onClick
}) => html\`
  <pr-button
    target=\${target}
    appearance=\${appearance}
    ?disabled=\${disabled}
    href=\${href}
    aria-label="pr-button example"
    role=\${href ? 'link' : 'button'}
    @click=\${onClick}
  >
    \${slot}
  </pr-button>
\``,...C.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`({
  slot = 'Submit',
  appearance = 'filled',
  disabled,
  href,
  target,
  onClick
}) => html\`
  <pr-button
    target=\${target}
    appearance=\${appearance}
    ?disabled=\${disabled}
    href=\${href}
    aria-label="pr-button example"
    role=\${href ? 'link' : 'button'}
    @click=\${onClick}
  >
    \${slot}
  </pr-button>
\``,...x.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`({
  slot = 'Submit',
  appearance = 'filled',
  disabled,
  href,
  target,
  onClick
}) => html\`
  <pr-button
    target=\${target}
    appearance=\${appearance}
    ?disabled=\${disabled}
    href=\${href}
    aria-label="pr-button example"
    role=\${href ? 'link' : 'button'}
    @click=\${onClick}
  >
    \${slot}
  </pr-button>
\``,..._.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`({
  slot = 'Submit',
  appearance = 'filled',
  disabled,
  href,
  target,
  onClick
}) => html\`
  <pr-button
    target=\${target}
    appearance=\${appearance}
    ?disabled=\${disabled}
    href=\${href}
    aria-label="pr-button example"
    role=\${href ? 'link' : 'button'}
    @click=\${onClick}
  >
    \${slot}
  </pr-button>
\``,...w.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`({
  slot = 'Submit',
  appearance = 'filled',
  disabled,
  href,
  target,
  onClick
}) => html\`
  <pr-button
    target=\${target}
    appearance=\${appearance}
    ?disabled=\${disabled}
    href=\${href}
    aria-label="pr-button example"
    role=\${href ? 'link' : 'button'}
    @click=\${onClick}
  >
    \${slot}
  </pr-button>
\``,...$.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`({
  slot = 'Submit',
  appearance = 'filled',
  disabled,
  href,
  target,
  onClick
}) => html\`
  <pr-button
    target=\${target}
    appearance=\${appearance}
    ?disabled=\${disabled}
    href=\${href}
    aria-label="pr-button example"
    role=\${href ? 'link' : 'button'}
    @click=\${onClick}
  >
    \${slot}
  </pr-button>
\``,...k.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`({
  slot = 'Submit',
  appearance = 'filled',
  disabled,
  href,
  target,
  onClick
}) => html\`
  <pr-button
    target=\${target}
    appearance=\${appearance}
    ?disabled=\${disabled}
    href=\${href}
    aria-label="pr-button example"
    role=\${href ? 'link' : 'button'}
    @click=\${onClick}
  >
    \${slot}
  </pr-button>
\``,...E.parameters?.docs?.source}}};const Me=["Default","Elevated","Filled","FilledTonal","Outlined","Text","Disabled"];export{C as Default,E as Disabled,x as Elevated,_ as Filled,w as FilledTonal,$ as Outlined,k as Text,Me as __namedExportsOrder,Fe as default};
