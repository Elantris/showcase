import { CodeBlock, Panel } from '.'

const SlashBlock = () => {
  return (
    <div className="relative inline-flex h-12 items-center overflow-hidden rounded border-2 border-gray-300 px-8 before:absolute before:inset-0 before:scale-200 before:rotate-[30deg] before:bg-linear-[to_right,transparent_80%,var(--color-gray-500)_80%] before:bg-size-[6px_100%] before:content-['']">
      <span className="relative text-white">ABCDE</span>
    </div>
  )
}

const Slash = () => {
  return (
    <Panel title="Slash Block / 漸層斜線背景">
      <SlashBlock />

      <CodeBlock title="Tailwind">
        {`
<div className="relative inline-flex h-12 items-center overflow-hidden rounded border-2 border-gray-300 px-8 before:absolute before:inset-0 before:scale-200 before:rotate-[30deg] before:bg-linear-[to_right,transparent_80%,var(--color-gray-500)_80%] before:bg-size-[6px_100%] before:content-['']">
  <span className="relative text-white">ABCDE</span>
</div>
        `.trim()}
      </CodeBlock>

      <CodeBlock title="CSS">
        {`
.slash-box {
  position: relative;
  display: inline-flex;
  align-items: center;
  height: 48px;
  border: 1px solid var(--color-gray-300);
  border-radius: 4px;
  overflow: hidden;

  > * {
    position: relative;
    color: white;
  }

  &::before {
    content: " ";
    display: block;
    position: absolute;
    inset: 0;
    background-image: linear-gradient(to right, transparent 80%, var(--color-gray-500) 80%);
    background-size: 6px 100%;
    transform: rotate(30deg) scale(2);
  }
}
        `.trim()}
      </CodeBlock>
    </Panel>
  )
}

export default Slash
