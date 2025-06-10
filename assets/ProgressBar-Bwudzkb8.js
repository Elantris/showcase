import{j as r,P as o}from"./index-DCqNCng9.js";import{C as e}from"./CodeBlock-Cqr3bBQt.js";const i=()=>r.jsx(r.Fragment,{children:r.jsxs(o,{title:"Progress Bar / 條紋進度條",children:[r.jsx("div",{className:"progress-bar",children:r.jsx("div",{style:{width:"60%"}})}),r.jsx(e,{title:"CSS",language:"css",codes:`
.progress-bar {
  position: relative;
  border: 2px solid var(--color-zinc-200);
  border-radius: 16px;
  background: var(--color-zinc-700);
  width: 256px;
  height: 32px;
  overflow: hidden;

  > div {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    box-shadow: inset 0 -6px 4px 0 rgba(0, 0, 0, 0.25);
    border-radius: inherit;
    background: var(--color-violet-500);
    overflow: hidden;

    &::before {
      position: absolute;
      transform: skewX(-30deg);
      opacity: 0.5;
      inset: 0;
      background: linear-gradient(to right, transparent 75%, var(--color-zinc-200) 75%);
      background-size: 16px 100%;
      content: '';
    }
  }
}
`.trim()})]})});export{i as default};
