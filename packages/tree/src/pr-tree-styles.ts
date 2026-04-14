import { css } from 'lit';

export const PrTreeStyles = css`
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
`;
