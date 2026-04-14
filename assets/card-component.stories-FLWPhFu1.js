import{a as g,i as p,A as m,b as h}from"./iframe-DznlVQe6.js";import{_ as r,n as c}from"./property-DPzhTE-K.js";import{r as k}from"./state-BRuHdIse.js";import{a as u,o as $}from"./class-map-BeVXpLCM.js";import"./preload-helper-PPVm8Dsz.js";class t extends p{constructor(){super(),this.title="Dummy Card",this.highlight=!1,this.clicks=0,this.addEventListener("click",()=>this.handleClick())}log(s){console.log("[DummyComponent]",s)}handleClick(){this.clicks++,this.log(`clicked ${this.clicks} times`)}get classes(){return{card:!0,highlight:this.highlight}}render(){return h`
      <div
        class=${u(this.classes)}
      data-clicks=${this.clicks}
      >
        <div class="title">${this.title}</div>

        <slot></slot>

        ${this.link?h`<a href=${$(this.link)}>Open Link</a>`:m}
      </div>
    `}}t.styles=g`
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
  `;r([c()],t.prototype,"title",void 0);r([c({type:Boolean,reflect:!0})],t.prototype,"highlight",void 0);r([c()],t.prototype,"link",void 0);r([k()],t.prototype,"clicks",void 0);window.customElements.define("card-component",t);const y={title:"Praval/Card Component",component:"card-component",argTypes:{title:{control:"text"},highlight:{control:"boolean"},link:{control:"text"}}},l=({title:a,highlight:s,link:d})=>h`
  <card-component
    .title=${a}
    ?highlight=${s}
    .link=${d}
  >
    This is projected slot content.
  </card-component>
`,i=l.bind({});i.args={title:"Dummy Card",highlight:!1,link:void 0};const e=l.bind({});e.args={title:"Highlighted Card",highlight:!0,link:void 0};const n=l.bind({});n.args={title:"Card With Link",highlight:!1,link:"https://example.com"};const o=l.bind({});o.args={title:"Highlighted + Link",highlight:!0,link:"https://example.com"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`({
  title,
  highlight,
  link
}) => html\`
  <card-component
    .title=\${title}
    ?highlight=\${highlight}
    .link=\${link}
  >
    This is projected slot content.
  </card-component>
\``,...i.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`({
  title,
  highlight,
  link
}) => html\`
  <card-component
    .title=\${title}
    ?highlight=\${highlight}
    .link=\${link}
  >
    This is projected slot content.
  </card-component>
\``,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`({
  title,
  highlight,
  link
}) => html\`
  <card-component
    .title=\${title}
    ?highlight=\${highlight}
    .link=\${link}
  >
    This is projected slot content.
  </card-component>
\``,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`({
  title,
  highlight,
  link
}) => html\`
  <card-component
    .title=\${title}
    ?highlight=\${highlight}
    .link=\${link}
  >
    This is projected slot content.
  </card-component>
\``,...o.parameters?.docs?.source}}};const L=["Default","Highlighted","WithLink","HighlightedWithLink"];export{i as Default,e as Highlighted,o as HighlightedWithLink,n as WithLink,L as __namedExportsOrder,y as default};
