import { Main } from '.'

const PureCssLoadingBar = () => {
  return (
    <div className="relative h-12 w-64 overflow-hidden rounded-lg border-2 border-black bg-white">
      <div className="animate-grow-width absolute top-1 bottom-1 left-0 bg-black" />
      <div className="absolute inset-0 bg-linear-[to_right,white_0%,white_25%,transparent_25%,transparent_75%,white_75%] from-white to-white bg-size-[10%_100%]" />
    </div>
  )
}

const Loading = () => {
  return (
    <Main>
      <PureCssLoadingBar />
    </Main>
  )
}

export default Loading
