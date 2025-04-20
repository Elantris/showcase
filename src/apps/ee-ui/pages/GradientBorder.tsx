import Button from '../../../components/Button'
import CodeBlock from '../components/CodeBlock'
import Panel from '../components/Panel'

const GradientBorder = () => {
  return (
    <>
      <Panel title="Gradient Border / 漸層邊框">
        <div className="gradient-border demo">
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
  position: relative;
  padding: 8px;

  &::before {
    position: absolute;
    mask-image: linear-gradient(white, white), linear-gradient(white, white);
    mask-clip: padding-box, border-box;
    mask-composite: exclude, add;
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
    content: '';
  }
}

.gradient-border.demo {
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 3/2;
  width: 15rem;
  color: white;
}
`.trim()}
        />
      </Panel>
    </>
  )
}

export default GradientBorder
