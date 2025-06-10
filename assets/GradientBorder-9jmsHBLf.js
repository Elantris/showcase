import{j as e,P as r,B as i}from"./index-DCqNCng9.js";import{C as a}from"./CodeBlock-Cqr3bBQt.js";const d=()=>e.jsx(e.Fragment,{children:e.jsxs(r,{title:"Gradient Border / 漸層邊框",children:[e.jsx("div",{className:"gradient-border demo",children:e.jsx("div",{children:"Background with Mask"})}),e.jsx("p",{children:e.jsx("a",{href:"https://hackmd.io/@eelayntris/HJwq-jPeJx",target:"_blank",children:e.jsxs(i,{children:[e.jsx("i",{className:"fa-solid fa-file-lines"}),"用 CSS 實作漸層邊框"]})})}),e.jsx(a,{title:"CSS",language:"css",codes:`
.gradient-border {
  position: relative;
  padding: 8px;

  &::before {
    position: absolute;
    mask-image: linear-gradient(white, white), linear-gradient(white, white);
    mask-clip: padding-box, border-box;
    mask-composite: exclude, add;
    inset: 0;
    border-width: 8px;
    border-style: solid;
    border-color: transparent;
    border-radius: 16px;
    background-image: linear-gradient(
      to right,
      var(--color-cyan-300),
      var(--color-indigo-300),
      var(--color-fuchsia-300)
    );
    background-origin: border-box;
    content: '';
  }
}

.gradient-border.demo {
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 3/2;
  width: 15rem;
  color: white;
}
`.trim()})]})});export{d as default};
