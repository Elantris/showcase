import { FC, useEffect, useState } from 'react'
import CodeBlock from '../components/CodeBlock'
import Panel from '../components/Panel'

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
  const hours = `${Math.floor((rest / HOUR) % 24)}`.padStart(2, '0')
  const minutes = `${Math.floor((rest / MINUTE) % 60)}`.padStart(2, '0')
  const seconds = `${Math.floor((rest / SECOND) % 60)}`.padStart(2, '0')

  return <>{days ? `${days}:${hours}:${minutes}:${seconds}` : `${hours}:${minutes}:${seconds}`}</>
}

const Countdown = () => {
  return (
    <>
      <Panel title="Countdown / 倒數">
        <div>
          <CountdownTimer target={new Date('2026-1-1').getTime()} />
        </div>

        <CodeBlock
          title="TypeScript"
          language="tsx"
          codes={`
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
`.trim()}
        />
      </Panel>
    </>
  )
}

export default Countdown
