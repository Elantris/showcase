import { FC, ReactNode, useState } from 'react'
import { Prism } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

const CodeBlock: FC<{
  title: ReactNode
  language: string
  codes: string
}> = ({ title, language, codes }) => {
  const [isCopied, setIsCopied] = useState(false)

  const handleCopy = () => {
    try {
      navigator.clipboard.writeText(codes)
      setIsCopied(true)
      setTimeout(() => {
        setIsCopied(false)
      }, 1000)
    } catch {
      console.error('Failed to copy text')
    }
  }

  return (
    <div className="w-full rounded-lg border border-transparent bg-zinc-800 p-4 transition-all hover:border-zinc-500">
      <div className="flex items-center gap-2 transition-all">
        <div className="grow border-b border-zinc-500 text-lg text-violet-300">{title}</div>
        <button
          className="inline-flex size-8 cursor-pointer items-center justify-center rounded border border-zinc-500 transition-all hover:border-violet-500 hover:bg-violet-500"
          onClick={() => handleCopy()}
        >
          {isCopied ? <i className="fa-solid fa-check text-green-500" /> : <i className="fa-solid fa-copy" />}
        </button>
      </div>

      <Prism language={language} style={oneDark}>
        {codes}
      </Prism>
    </div>
  )
}

export default CodeBlock
