import{j as e,P as o}from"./index-XnEKkOzR.js";import{C as r}from"./CodeBlock-nzHtFsxY.js";const t=()=>e.jsx(e.Fragment,{children:e.jsxs(o,{title:"Multiple Border Box / 多層邊框",children:[e.jsx("div",{className:"multiple-border-box demo",children:"Multiple borders"}),e.jsx(r,{title:"CSS",language:"css",codes:`
.multiple-border-box {
  position: relative;
  outline: 4px solid var(--color-violet-500);
  border: 4px solid var(--color-cyan-500);
  border-radius: 16px;
  padding: 8px;
  overflow: hidden;

  &::before {
    position: absolute;
    inset: 4px;
    outline: 4px solid var(--color-yellow-500);
    border: 4px solid var(--color-sky-500);
    border-radius: 8px;
    content: '';
  }
}

.multiple-border-box.demo {
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 3/2;
  width: 15rem;
}
`.trim()})]})});export{t as default};
