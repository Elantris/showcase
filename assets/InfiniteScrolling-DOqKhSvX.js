import{j as e,P as l,r as s}from"./index-DCqNCng9.js";import{C as u}from"./CodeBlock-Cqr3bBQt.js";const f=r=>{const[t,c]=s.useState(null);return s.useEffect(()=>{if(!t)return;const n=new IntersectionObserver(r);return n.observe(t),()=>n.unobserve(t)},[r,t]),{setTarget:c}},g=()=>{const r=s.useRef(null),[t,c]=s.useState(Array.from({length:10},()=>Math.floor(Math.random()*1e4))),{setTarget:n}=f(o=>{o.forEach(a=>{a.isIntersecting&&t.length<100&&c(i=>i.concat(Array.from({length:10},()=>Math.floor(Math.random()*1e4))))})});return s.useEffect(()=>{r.current&&n(r.current)},[n]),e.jsxs(e.Fragment,{children:[t.map((o,a)=>e.jsxs("div",{className:"flex size-40 flex-col items-center justify-center gap-2 bg-gray-500",children:[e.jsx("div",{className:"text-lg font-bold",children:a+1}),e.jsx("div",{children:o})]},a)),e.jsx("div",{ref:r,className:"h-10",children:"END"})]})},m=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Infinite Scrolling / 無限捲動",children:e.jsx(u,{title:"TypeScript",language:"typescript",codes:`
const useInteractionObserver = (callback: IntersectionObserverCallback) => {
  const [target, setTarget] = useState<Element | null>(null)

  useEffect(() => {
    if (!target) {
      return
    }

    const observer = new IntersectionObserver(callback)

    observer.observe(target)
    return () => observer.unobserve(target)
  }, [callback, target])

  return {
    setTarget,
  }
}
`.trim()})}),e.jsx(l,{children:e.jsx(g,{})})]});export{m as default};
