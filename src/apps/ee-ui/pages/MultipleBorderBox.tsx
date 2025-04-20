import CodeBlock from '../components/CodeBlock'
import Panel from '../components/Panel'

const MultipleBorderBox = () => {
  return (
    <>
      <Panel title="Multiple Border Box / 多層邊框">
        <div className="multiple-border-box demo">Multiple borders</div>

        <CodeBlock
          title="CSS"
          language="css"
          codes={`
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
`.trim()}
        />
      </Panel>
    </>
  )
}

export default MultipleBorderBox
