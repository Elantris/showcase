import{j as t,P as m,r as c}from"./index-DCqNCng9.js";import{C as $}from"./CodeBlock-Cqr3bBQt.js";const l=1e3,d=60*l,u=60*d,M=24*u,f=({target:s})=>{const[e,i]=c.useState(Math.max(0,s-Date.now()));c.useEffect(()=>{const h=setInterval(()=>{i(Math.max(0,s-Date.now()))},1e3);return()=>{clearInterval(h)}},[s]);const o=Math.floor(e/M),r=`${Math.floor(e/u%24)}`.padStart(2,"0"),n=`${Math.floor(e/d%60)}`.padStart(2,"0"),a=`${Math.floor(e/l%60)}`.padStart(2,"0");return t.jsx(t.Fragment,{children:o?`${o}:${r}:${n}:${a}`:`${r}:${n}:${a}`})},S=()=>t.jsx(t.Fragment,{children:t.jsxs(m,{title:"Countdown / 倒數",children:[t.jsx("div",{children:t.jsx(f,{target:new Date("2026-1-1").getTime()})}),t.jsx($,{title:"TypeScript",language:"tsx",codes:`
const SECOND = 1000
const MINUTE = 60 * SECOND
const HOUR = 60 * MINUTE
const DAY = 24 * HOUR

const CountdownTimer: FC<{
  target: number
}> = ({ target }) => {
  const [rest, setRest] = useState(Math.max(0, target - Date.now()))

  useEffect(() => {
    const interval = setInterval(() => {
      setRest(Math.max(0, target - Date.now()))
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [target])

  const days = Math.floor(rest / DAY)
  const hours = \`\${Math.floor((rest / HOUR) % 24)}\`.padStart(2, '0')
  const minutes = \`\${Math.floor((rest / MINUTE) % 60)}\`.padStart(2, '0')
  const seconds = \`\${Math.floor((rest / SECOND) % 60)}\`.padStart(2, '0')

  return <>{days ? \`\${days}:\${hours}:\${minutes}:\${seconds}\` : \`\${hours}:\${minutes}:\${seconds}\`}</>
}
`.trim()})]})});export{S as default};
