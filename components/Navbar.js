export default function Home() {
  return (
    <div className="flex justify-between w-full py-5 pb-10">
        <div className="hover:bg-neutral-800 cursor-pointer rounded-md px-2 py-1
hover:bg-neutral-800 cursor-pointer rounded-md px-2 py-1">
            Home
        </div>
        <div className="flex space-x-3">
        <a href="#"><div className="hover:bg-neutral-800 cursor-pointer rounded-md px-2 py-1">About</div></a>
        <a href="https://github.com/sudo-logic/" target="_blank" rel="noreferrer"><div className="hover:bg-neutral-800 cursor-pointer rounded-md px-2 py-1">Projects</div></a>
        </div>
    </div>
  )
}
