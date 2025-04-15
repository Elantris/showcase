import { CodeBlock, Panel } from '.'

const LoadingBar = () => {
  return (
    <div className="relative h-10 w-64 overflow-hidden rounded-lg border-2 border-black bg-white">
      <div className="animate-grow-width absolute top-1 bottom-1 left-0 bg-black" />
      <div className="absolute inset-0 bg-linear-[to_right,white_25%,transparent_25%,transparent_75%,white_75%] from-white to-white bg-size-[10%_100%]" />
    </div>
  )
}

const Loading = () => {
  return (
    <Panel title="Loading / 純 CSS 進度條">
      <LoadingBar />

      <CodeBlock
        title="Tailwind"
        language="html"
        codes={`
<div className="relative h-10 w-64 overflow-hidden rounded-lg border-2 border-black bg-white">
  <div className="animate-grow-width absolute top-1 bottom-1 left-0 bg-black" />
  <div className="absolute inset-0 bg-linear-[to_right,white_25%,transparent_25%,transparent_75%,white_75%] from-white to-white bg-size-[10%_100%]" />
</div>
        `.trim()}
      />

      <CodeBlock
        title="index.css"
        language="css"
        codes={`
@theme {
  --animate-grow-width: grow-width 5s steps(10, jump-start) infinite;

  @keyframes grow-width {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
}
        `.trim()}
      />
    </Panel>
  )
}

export default Loading
