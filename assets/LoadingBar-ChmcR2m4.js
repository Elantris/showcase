import{j as i,P as t,B as a}from"./index-XnEKkOzR.js";import{C as s}from"./CodeBlock-nzHtFsxY.js";const o=()=>i.jsx(i.Fragment,{children:i.jsxs(t,{title:"Loading Bar / 純 CSS 進度條",children:[i.jsxs("div",{className:"loading-bar",children:[i.jsx("div",{}),i.jsx("div",{})]}),i.jsx("p",{children:i.jsx("a",{href:"https://hackmd.io/@eelayntris/Hy9JhyIDyx",target:"_blank",children:i.jsxs(a,{children:[i.jsx("i",{className:"fa-solid fa-file-lines"}),"用 CSS 實作載入動畫"]})})}),i.jsx(s,{title:"CSS",language:"css",codes:`
.loading-bar {
  position: relative;
  border: 2px solid black;
  border-radius: 8px;
  background: white;
  width: 256px;
  height: 40px;
  overflow: hidden;

  > div:first-child {
    position: absolute;
    top: 4px;
    bottom: 4px;
    left: 0;
    animation: grow-width 5s steps(10, jump-start) infinite;
    background: black;
  }

  > div:last-child {
    position: absolute;
    inset: 0;
    background-image: linear-gradient(to right, white 25%, transparent 25%, transparent 75%, white 75%);
    background-size: 10% 100%;
  }
}

@keyframes grow-width {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
`.trim()})]})});export{o as default};
