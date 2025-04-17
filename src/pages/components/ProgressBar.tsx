import { CodeBlock, Panel } from '.'

const ProgressBar = () => {
  return (
    <>
      <Panel title="Progress Bar / 條紋進度條">
        <div className="progress-bar">
          <div style={{ width: '60%' }} />
        </div>

        <CodeBlock
          title="CSS"
          language="css"
          codes={`
.progress-bar {
  position: relative;
  width: 256px;
  height: 32px;
  overflow: hidden;
  border-radius: 16px;
  border: 2px solid var(--color-zinc-200);
  background: var(--color-zinc-700);

  > div {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    border-radius: inherit;
    background: var(--color-violet-500);
    box-shadow: inset 0 -6px 4px 0 rgba(0, 0, 0, 0.25);

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      transform: skewX(-30deg);
      background: linear-gradient(to right, transparent 75%, var(--color-zinc-200) 75%);
      background-size: 16px 100%;
      opacity: 0.5;
    }
  }
}
`.trim()}
        />
      </Panel>
    </>
  )
}

export default ProgressBar
