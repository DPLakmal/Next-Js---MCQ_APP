import CreateMCQ from './CreateMCQ'

export default function Page() {
  return (
    <div className="grid grid-cols-[auto,1fr]">
      <div className="w-[600px]">
        <CreateMCQ />
      </div>
      <div className="">output Mcq</div>
    </div>
  )
}
