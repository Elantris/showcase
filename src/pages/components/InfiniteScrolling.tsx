import { useEffect, useRef, useState } from 'react'
import { CodeBlock, Panel } from '.'

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

const InfiniteSection = () => {
  const controllerRef = useRef<HTMLDivElement | null>(null)
  const [data, setData] = useState(Array.from({ length: 10 }, () => Math.floor(Math.random() * 10000)))
  const { setTarget } = useInteractionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (data.length < 100)
          setData((prev) => prev.concat(Array.from({ length: 10 }, () => Math.floor(Math.random() * 10000))))
      }
    })
  })

  useEffect(() => {
    if (!controllerRef.current) {
      return
    }
    setTarget(controllerRef.current)
  }, [setTarget])

  return (
    <>
      {data.map((v, i) => (
        <div key={i} className="flex size-40 flex-col items-center justify-center gap-2 bg-gray-500">
          <div className="text-lg font-bold">{i + 1}</div>
          <div>{v}</div>
        </div>
      ))}
      <div ref={controllerRef} className="h-10">
        END
      </div>
    </>
  )
}

const InfiniteScrolling = () => {
  return (
    <>
      <Panel title="Infinite Scrolling / 無限捲動">
        <CodeBlock
          title="TypeScript"
          language="typescript"
          codes={`
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
        `.trim()}
        />
      </Panel>

      <Panel>
        <InfiniteSection />
      </Panel>
    </>
  )
}

export default InfiniteScrolling
