import { CodeBlock, Panel } from '.'
import Button from '../../components/Button'

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
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  padding: 0 16px;
  border: 1px solid var(--color-gray-300);
  border-radius: 4px;
  overflow: hidden;

  > * {
    position: relative;
    color: white;
  }

  &::before {
    content: ' ';
    display: block;
    position: absolute;
    inset: 0;
    background-image: linear-gradient(to right, transparent 80%, var(--color-gray-500) 80%);
    background-size: 6px 100%;
    transform: rotate(30deg) scale(2);
  }
}
    `.trim()}
        />
      </Panel>
    </>
  )
}

export default SlashBox
