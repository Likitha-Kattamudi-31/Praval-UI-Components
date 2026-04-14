import{a as s,b as i}from"./iframe-DznlVQe6.js";const l=(r,t,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(r,t,e),e);function d(r,t){return(e,o,c)=>{const n=a=>a.renderRoot?.querySelector(r)??null;return l(e,o,{get(){return n(this)}})}}const u=s`
  html {
    font-family: Helvetica, Arial, sans-serif;
    color: #333;
  }
  .borders {
    margin-top: 5px;
    margin-left: 30px;
    margin-right: 30px;
  }
`,b=r=>i`<style>
      ${u}
    </style>
    <div class="borders">${r()}</div> `;export{l as a,b as d,d as e};
