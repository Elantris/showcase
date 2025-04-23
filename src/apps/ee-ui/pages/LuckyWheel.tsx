import { useState } from 'react'
import { twMerge } from 'tailwind-merge'
import Button from '../../../components/Button'
import Panel from '../components/Panel'
import '../lucky-wheel.css'

const LuckyWheel = () => {
  const [isSpinning, setIsSpinning] = useState(false)
  const [result, setResult] = useState(0)

  const spin = () => {
    if (isSpinning) {
      return
    }
    setIsSpinning(true)
    setResult(Math.floor(Math.random() * 10))
    setTimeout(() => {
      setIsSpinning(false)
    }, 5000)
  }

  return (
    <>
      <Panel title="Lucky Wheel / 幸運輪盤">
        <div className="relative min-h-80 w-full">
          <div className="lucky-wheel-wrapper">
            <div className={twMerge('plate', isSpinning ? `spinning spinning-${result}` : `rotate-to-${result}`)}>
              <div className="sector-anchor">
                <div className="sector-0">0</div>
                <div className="sector-1">1</div>
                <div className="sector-2">2</div>
                <div className="sector-3">3</div>
                <div className="sector-4">4</div>
                <div className="sector-5">5</div>
                <div className="sector-6">6</div>
                <div className="sector-7">7</div>
                <div className="sector-8">8</div>
                <div className="sector-9">9</div>
              </div>
            </div>
            <div className="frame" />
            <div className="light-1" />
            <div className="light-2" />
            <button
              id="go-button"
              onClick={() => {
                spin()
              }}
            />
          </div>
        </div>

        <p>
          <a href="https://hackmd.io/@eelayntris/B1vk4a4kex" target="_blank">
            <Button>
              <i className="fa-solid fa-file-lines" />
              {'幸運輪盤'}
            </Button>
          </a>
        </p>
      </Panel>
    </>
  )
}

export default LuckyWheel
