import Button from '../../../components/Button'
import CodeBlock from '../components/CodeBlock'
import Panel from '../components/Panel'

const SlashBox = () => {
  return (
    <>
      <Panel title="Slash Box / 漸層斜線背景">
        <div className="slash-box">
          <span>ABCDE</span>
        </div>

        <p>
          <a href="https://hackmd.io/@eelayntris/ryX8m2e06" target="_blank">
            <Button>
              <i className="fa-solid fa-file-lines" />
              {'用 CSS 漸層實作斜線背景'}
            </Button>
          </a>
        </p>

        <CodeBlock
          title="CSS"
          language="css"
          codes={`
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
`.trim()}
        />
      </Panel>

      <Panel title="格狀背景">
        <div className="lattice-box demo">
          <span>ABCDE</span>
        </div>

        <CodeBlock
          title="CSS"
          language="css"
          codes={`
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
`.trim()}
        />
      </Panel>
    </>
  )
}

export default SlashBox
