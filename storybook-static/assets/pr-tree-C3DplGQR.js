import{_ as t,n as i}from"./property-DPzhTE-K.js";import{a as k,i as f,b as p,A as u}from"./iframe-DznlVQe6.js";import{r as b}from"./state-BRuHdIse.js";import{e as N}from"./story-helpers-Dsz32Ejl.js";import"./pr-icon-BQZ4PSas.js";function v(c,e){if(c.id===e)return c;if(!c.children)return null;for(const o of c.children){const n=v(o,e);if(n)return n}return null}function g(c,e,o=!0){function n(a,d=!1){a.checked=d,a.indeterminate=!1,a.children&&a.children.forEach(h=>{h.disabled=a.checked,n(h,d)})}function r(a){if(a.parentId){const d=v(e,a.parentId);d&&d.children&&(d.children.every(h=>h.checked)&&o?(d.checked=!0,d.indeterminate=!1):d.children.some(h=>h.checked)||d.children.some(h=>h.indeterminate)?(d.checked=!1,d.indeterminate=!0):(d.checked=!1,d.indeterminate=!1),r(d))}}n(c,c.checked),r(c)}const m=k`
  :host {
    --pr-tree-icon-spacing: 0.7rem;
    --pr-tree-icon-size: 1.2rem;
  }
  md-checkbox {
    --md-checkbox-outline-color: var(
      --pr-tree-node-outline-colour,
      rgb(91, 107, 124)
    );
  }
  md-checkbox[indeterminate] {
    --md-checkbox-selected-container-color: var(
      --pr-tree-indeterminate-node-background-color,
      #53657a
    );
    --md-checkbox-selected-hover-container-color: var(
      --pr-tree-indeterminate-node-background-color,
      #53657a
    );
  }
  .inherited {
    display: flex;
    cursor: default;
    background: var(--pr-tree-inherited-node-background-color, #53657a);
    margin-right: var(--pr-tree-icon-spacing, 0.7rem);
    height: var(--pr-tree-inherited-node-height, 18px);
    width: var(--pr-tree-inherited-node-width, 15px);
    border-radius: var(--pr-tree-inherited-node-border-radius, 2px);
    color: var(--pr-tree-inherited-node-icon-color, #ffffff);
    --pr-icon-font-size: var(--pr-tree-inherited-node-icon-font-size, 18px);
  }
  .wrapper {
    align-items: center;
    display: flex;
    border-left: var(--pr-tree-indent-width, 3px) solid transparent;
  }
  .icon {
    display: flex;
    color: var(--md-icon-button-icon-color);
    margin-right: var(--pr-tree-icon-spacing, 0.7rem);
    font-size: var(--pr-tree-icon-size, 1.2rem);
  }
  .label {
    color: var(--pr-tree-label-text-color, var(--clr-on-surface, #092241));
    flex-grow: 1;
    padding-top: 8px;
    padding-bottom: 8px;
  }
  .label-single-line {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .label-multi-line {
    overflow-wrap: break-word;
  }
  .item-checkbox {
    display: flex;
    margin-right: var(--pr-tree-icon-spacing, 0.7rem);
  }
  .selected {
    background-color: var(
      --pr-tree-active-background-color,
      var(--clr-primary-subtle, #1456e01a)
    );
    border-left: 3px solid
      var(--pr-tree-active-border-color, var(--clr-primary, #1456e0));
  }
.chevron{
    border: 0px;
    background: none;
    font-size: larger;        
}
  .cursor-pointer {
    cursor: pointer;
  }
  .cursor-default {
    cursor: default;
  }
  .disabled {
    opacity: 0.5;
    pointer-events: none;
  }
  .disabled .label {
    color: var(--pr-tree-disabled-text-color, #999);
  }
`;class s extends f{constructor(){super(...arguments),this.isActiveTreeNode=!1,this.isExpanded=!1,this.isSelected=!1,this.level=0,this.checkboxEnabled=!1,this.appearance="default",this.hasIcon=!1,this.removeChevron=!1,this.allowMultiLine=!1,this.scrollToActive=!1,this.disabled=!1,this.selectNodeOnClick=!1,this._hasScrolledToActive=!1}hasChildren(){return this.node.children!==void 0&&this.node.children.length>0}getChevron(){return p`<div
      style=${`${this.hasChildren()?"":"visibility:hidden"}`}
    >
  <button
  class="chevron"
  @click=${()=>this.onNodeToggle(this.node)}
  aria-label="Toggle node"
>
  ${this.isExpanded?"▾":"▸"}
</button>
    </div>`}renderCheckbox(){return this.node.disabled?p` <span class="inherited" style={{fontSize:22}} aria-hidden="true">▴</span>`:p`<input
       label=""
  type="checkbox"
  class="item-checkbox"
  .checked=${this.node.checked}
  @click=${()=>this.onNodeCheck(this.node)}
  .indeterminate=${this.node.indeterminate}
/>`}onNodeClick(e){const o=new CustomEvent("on-tree-node-click",{detail:{message:{node:e,id:e.id,label:e.label,parentId:e.parentId}}});this.dispatchEvent(o)}onNodeToggle(e){const o=new CustomEvent("on-tree-node-toggle",{detail:{message:{node:e,id:e.id,label:e.label,parentId:e.parentId}}});this.dispatchEvent(o)}onNodeCheck(e){e.checked?(e.checked=!1,e.indeterminate=!1):(e.checked=!0,e.indeterminate=!1);const o=new CustomEvent("on-tree-node-check",{detail:{message:{node:e,id:e.id}}});this.dispatchEvent(o)}handleNodeClick(e){if(!(this.disabled||e.disabled)){if(this.selectNodeOnClick){this.onNodeCheck(e);return}this.checkboxEnabled?this.onNodeToggle(e):this.onNodeClick(e)}}render(){const e=this.isSelected?"selected":"",o=this.disabled||this.node.disabled,n=o?"disabled":"",r=o?"cursor-default":"cursor-pointer",a=this.node.icon?this.node.icon:"account_box";return p`<div
      class="tree-node-container"
      ?active-tree-node=${this.isActiveTreeNode}
      aria-expanded=${!!this.node.expanded}
      aria-selected=${this.isSelected}
      aria-disabled=${o}
      data-id=${this.node.id}
      role="treeitem"
    >
      <div
        class="wrapper ${e} ${r} ${n}"
        style="padding-left: calc(var(--pr-tree-icon-size) * ${this.level})"
      >
        ${this.removeChevron?u:this.getChevron()}
        ${this.checkboxEnabled?this.renderCheckbox():u}
        ${this.hasIcon?p`<pr-icon class="icon" 
              >${a}</pr-icon
            >`:u}
        <div
          class="label ${this.allowMultiLine?"label-multi-line":"label-single-line"}"
          @click=${()=>this.handleNodeClick(this.node)}
          @keyup=${()=>this.handleNodeClick(this.node)}
        >
          ${this.node.label}
        </div>
      </div>
      <slot></slot>
    </div>`}updated(){var e;if(this.scrollToActive&&!this._hasScrolledToActive){const o=(e=this.shadowRoot)===null||e===void 0?void 0:e.querySelector("[active-tree-node]");o?.scrollIntoView({behavior:"smooth",block:"start"}),this._hasScrolledToActive=!0}this.isSelected&&this.dispatchEvent(new CustomEvent("selected-node-ref",{detail:this._treeNodeContainer,bubbles:!0,composed:!0}))}}s.styles=[m];t([i({type:Boolean})],s.prototype,"isActiveTreeNode",void 0);t([i({type:Boolean})],s.prototype,"isExpanded",void 0);t([i({type:Boolean})],s.prototype,"isSelected",void 0);t([i({type:Number})],s.prototype,"level",void 0);t([i({type:Object})],s.prototype,"node",void 0);t([i({type:Boolean})],s.prototype,"checkboxEnabled",void 0);t([i({type:String})],s.prototype,"appearance",void 0);t([i({type:Boolean})],s.prototype,"hasIcon",void 0);t([i({type:Boolean})],s.prototype,"removeChevron",void 0);t([i({type:Boolean})],s.prototype,"allowMultiLine",void 0);t([i({type:Boolean})],s.prototype,"scrollToActive",void 0);t([i({type:Boolean})],s.prototype,"disabled",void 0);t([i({type:Boolean})],s.prototype,"selectNodeOnClick",void 0);t([b()],s.prototype,"_hasScrolledToActive",void 0);t([N(".tree-node-container")],s.prototype,"_treeNodeContainer",void 0);customElements.define("pr-tree-node",s);class l extends f{constructor(){super(...arguments),this.ariaLabel="tree",this.selectedNodeId="",this.checkboxesEnabled=!1,this.appearance="default",this.hasIcons=!1,this.removeChevron=!1,this.allowMultiLine=!1,this.rollup=!0,this.selectNodeOnClick=!1,this._activeItemId="",this._selectedNodeId=""}connectedCallback(){super.connectedCallback(),this._activeItemId=this.selectedNodeId,this._selectedNodeId=this.selectedNodeId,this._rootNode=this.rootNode}onTreeNodeClick(e){this.dispatchEvent(new CustomEvent("on-tree-node-selected",{detail:{message:e.detail.message}})),this._selectedNodeId=e.detail.message.id}dispatchTreeNodeExpandToggle(e){this.dispatchEvent(new CustomEvent("on-tree-node-expand-toggle",{detail:{message:e.detail.message}}))}onTreeNodeToggle(e){const o={...this._rootNode},{node:n}=e.detail.message;n.expanded=!n.expanded,this.rootNode=o,this._activeItemId=n.id,this.dispatchTreeNodeExpandToggle(e)}onTreeNodeCheck(e){const{node:o}=e.detail.message;g(o,this._rootNode,this.rollup),this._rootNode=structuredClone(this._rootNode),this.rootNode=this._rootNode,this.dispatchEvent(new CustomEvent("on-tree-node-checked",{detail:{message:e.detail.message}}))}renderNodes(e=[],o=0){const n=[];for(const r of e){const a=p`<pr-tree-node
        .level=${o}
        .node=${r}
        .appearance=${this.appearance}
        .selectNodeOnClick=${this.selectNodeOnClick}
        ?isActiveTreeNode=${this._activeItemId===r.id}
        ?isExpanded=${!!r.expanded}
        ?isSelected=${this._selectedNodeId===r.id}
        ?checkboxEnabled=${this.checkboxesEnabled}
        ?hasIcon=${this.hasIcons}
        ?removeChevron=${this.removeChevron}
        ?allowMultiLine=${this.allowMultiLine}
        ?disabled=${!!r.disabled}
        @on-tree-node-click=${this.onTreeNodeClick}
        @on-tree-node-toggle=${this.onTreeNodeToggle}
        @on-tree-node-check=${this.onTreeNodeCheck}
      >
        ${r.expanded?this.renderNodes(r.children,o+1):u}
      </pr-tree-node>`;n.push(a)}return n}expandActiveTreeNode(){const e=v(this._rootNode,this._activeItemId)||this._rootNode;let o=0;const n=1e3;if(!e.parentId)return;let r=v(this._rootNode,e.parentId);for(;r&&o<n&&(r.expanded=!0,!!r.parentId);)r=v(this._rootNode,r.parentId),o+=1}render(){return this.expandActiveTreeNode(),p`<div
      aria-label=${this.ariaLabel}
      class="pr-tree-container"
      role="tree"
    >
      ${this.renderNodes(this._rootNode.children,0)}
    </div>`}}l.styles=[m];t([i({type:String})],l.prototype,"ariaLabel",void 0);t([i({type:Object})],l.prototype,"rootNode",void 0);t([i({type:String})],l.prototype,"selectedNodeId",void 0);t([i({type:Boolean})],l.prototype,"checkboxesEnabled",void 0);t([i({type:String})],l.prototype,"appearance",void 0);t([i({type:Boolean})],l.prototype,"hasIcons",void 0);t([i({type:Boolean})],l.prototype,"removeChevron",void 0);t([i({type:Boolean})],l.prototype,"allowMultiLine",void 0);t([i({type:Boolean})],l.prototype,"rollup",void 0);t([i({type:Boolean})],l.prototype,"selectNodeOnClick",void 0);t([b()],l.prototype,"_activeItemId",void 0);t([b()],l.prototype,"_rootNode",void 0);t([b()],l.prototype,"_selectedNodeId",void 0);customElements.define("pr-tree",l);
