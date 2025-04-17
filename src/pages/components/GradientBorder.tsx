import { CodeBlock, Panel } from '.'
import Button from '../../components/Button'

const GradientBorder = () => {
  return (
    <>
      <Panel title="漸層邊框 / Gradient Border">
        <div className="gradient-border">
          <div>Background with Mask</div>
        </div>

        <p>
          <a href="https://hackmd.io/@eelayntris/HJwq-jPeJx" target="_blank">
            <Button>
              <i className="fa-solid fa-file-lines" />
              {'用 CSS 實作漸層邊框'}
            </Button>
          </a>
        </p>

        <CodeBlock
          title="CSS"
          language="css"
          codes={`
.gradient-border {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15rem;
  aspect-ratio: 3/2;
  color: white;
  position: relative;
  padding: 8px;
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-width: 8px;
    border-style: solid;
    border-color: transparent;
    border-radius: 16px;
    background-image: linear-gradient(
      to right,
      var(--color-cyan-300),
      var(--color-indigo-300),
      var(--color-fuchsia-300)
    );
    background-origin: border-box;
    mask-image: linear-gradient(white, white), linear-gradient(white, white);
    mask-clip: padding-box, border-box;
    mask-composite: exclude, add;
  }
}
`.trim()}
        />
      </Panel>
    </>
  )
}

export default GradientBorder
