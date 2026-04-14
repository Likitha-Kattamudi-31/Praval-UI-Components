import{a as d,i as g,A as p,b as r}from"./iframe-DznlVQe6.js";import{_ as l,n as c}from"./property-DPzhTE-K.js";import{r as u}from"./state-BRuHdIse.js";import{a as k,o as y}from"./class-map-BeVXpLCM.js";import"./preload-helper-PPVm8Dsz.js";class t extends g{constructor(){super(),this.title="Dummy Card",this.highlight=!1,this.clicks=0,this.addEventListener("click",()=>this.handleClick())}log(h){console.log("[DummyComponent]",h)}handleClick(){this.clicks++,this.log(`clicked ${this.clicks} times`)}get classes(){return{card:!0,highlight:this.highlight}}render(){return r`
      <div
        class=${k(this.classes)}
      data-clicks=${this.clicks}
      >
        <div class="title">${this.title}</div>

        <slot></slot>

        ${this.link?r`<a href=${y(this.link)}>Open Link</a>`:p}
      </div>
    `}}t.styles=d`
    .card {
      padding: 16px;
      border-radius: 10px;
      border: 1px solid #e2e8f0;
      background: white;
      transition: 0.2s;
    }

    .card.highlight {
      border-color: #2563eb;
      box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
    }

    .title {
      font-weight: bold;
      margin-bottom: 8px;
    }
  `;l([c()],t.prototype,"title",void 0);l([c({type:Boolean,reflect:!0})],t.prototype,"highlight",void 0);l([c()],t.prototype,"link",void 0);l([u()],t.prototype,"clicks",void 0);window.customElements.define("dummy-component",t);const C={title:"Praval/Dummy Component",component:"dummy-component",argTypes:{title:{control:"text"},highlight:{control:"boolean"},link:{control:"text"}}},s=({title:m,highlight:h,link:a})=>r`
  <dummy-component
    .title=${m}
    ?highlight=${h}
    .link=${a}
  >
    This is projected slot content.
  </dummy-component>
`,i=s.bind({});i.args={title:"Dummy Card",highlight:!1,link:void 0};const e=s.bind({});e.args={title:"Highlighted Card",highlight:!0,link:void 0};const n=s.bind({});n.args={title:"Card With Link",highlight:!1,link:"https://example.com"};const o=s.bind({});o.args={title:"Highlighted + Link",highlight:!0,link:"https://example.com"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`({
  title,
  highlight,
  link
}) => html\`
  <dummy-component
    .title=\${title}
    ?highlight=\${highlight}
    .link=\${link}
  >
    This is projected slot content.
  </dummy-component>
\``,...i.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`({
  title,
  highlight,
  link
}) => html\`
  <dummy-component
    .title=\${title}
    ?highlight=\${highlight}
    .link=\${link}
  >
    This is projected slot content.
  </dummy-component>
\``,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`({
  title,
  highlight,
  link
}) => html\`
  <dummy-component
    .title=\${title}
    ?highlight=\${highlight}
    .link=\${link}
  >
    This is projected slot content.
  </dummy-component>
\``,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`({
  title,
  highlight,
  link
}) => html\`
  <dummy-component
    .title=\${title}
    ?highlight=\${highlight}
    .link=\${link}
  >
    This is projected slot content.
  </dummy-component>
\``,...o.parameters?.docs?.source}}};const L=["Default","Highlighted","WithLink","HighlightedWithLink"];export{i as Default,e as Highlighted,o as HighlightedWithLink,n as WithLink,L as __namedExportsOrder,C as default};
