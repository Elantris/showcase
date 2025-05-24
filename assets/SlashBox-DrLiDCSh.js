import{j as e,P as r,B as t}from"./index-XnEKkOzR.js";import{C as i}from"./CodeBlock-nzHtFsxY.js";const s=()=>e.jsxs(e.Fragment,{children:[e.jsxs(r,{title:"Slash Box / 漸層斜線背景",children:[e.jsx("div",{className:"slash-box",children:e.jsx("span",{children:"ABCDE"})}),e.jsx("p",{children:e.jsx("a",{href:"https://hackmd.io/@eelayntris/ryX8m2e06",target:"_blank",children:e.jsxs(t,{children:[e.jsx("i",{className:"fa-solid fa-file-lines"}),"用 CSS 漸層實作斜線背景"]})})}),e.jsx(i,{title:"CSS",language:"css",codes:`
.slash-box {
  display: inline-flex;
  position: relative;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--color-gray-300);
  border-radius: 4px;
  padding: 0 16px;
  height: 48px;
  overflow: hidden;

  > * {
    position: relative;
    color: white;
  }

  &::before {
    display: block;
    position: absolute;
    transform: rotate(30deg) scale(2);
    inset: 0;
    background-image: linear-gradient(to right, transparent 80%, var(--color-gray-500) 80%);
    background-size: 6px 100%;
    content: ' ';
  }
}
`.trim()})]}),e.jsxs(r,{title:"格狀背景",children:[e.jsx("div",{className:"lattice-box demo",children:e.jsx("span",{children:"ABCDE"})}),e.jsx(i,{title:"CSS",language:"css",codes:`
.lattice-box {
  display: inline-flex;
  position: relative;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--color-gray-300);
  border-radius: 4px;
  overflow: hidden;

  > * {
    position: relative;
    color: white;
  }

  &::before {
    display: block;
    position: absolute;
    opacity: 0.75;
    inset: 0;
    background-image:
      linear-gradient(to right, transparent 70%, var(--color-gray-500) 70%),
      linear-gradient(to bottom, transparent 70%, var(--color-gray-500) 70%);
    background-size: 1rem 1rem;
    content: ' ';
  }
}
.lattice-box.demo {
  width: 6rem;
  height: 4rem;
}
`.trim()})]})]});export{s as default};
