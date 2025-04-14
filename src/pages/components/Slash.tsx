import { twMerge } from 'tailwind-merge'
import { CodeBlock, Main } from '.'

const SlashBlock = () => {
  return (
    <div
      className={twMerge(
        'relative inline-flex h-12 items-center overflow-hidden rounded border-2 border-gray-300 px-8',
        "before:absolute before:inset-0 before:scale-200 before:rotate-[30deg] before:bg-linear-[to_right,transparent_80%,var(--color-gray-500)_80%] before:bg-size-[6px_100%] before:content-['']",
      )}
    >
      <span className="relative text-white">ABCDE</span>
    </div>
  )
}

const Slash = () => {
  return (
    <Main className="space-y-4">
      <SlashBlock />
      <CodeBlock>
        {`
<div
  className={twMerge(
    'relative inline-flex h-12 items-center overflow-hidden rounded border-2 border-gray-300 px-8',
    "before:absolute before:inset-0 before:scale-200 before:rotate-[30deg] before:bg-linear-[to_right,transparent_80%,var(--color-gray-500)_80%] before:bg-size-[6px_100%] before:content-['']",
  )}
>
  <span className="relative text-white">ABCDE</span>
</div>
`.trim()}
      </CodeBlock>
    </Main>
  )
}

export default Slash
