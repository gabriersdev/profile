import {BsGithub} from "react-icons/bs";

export function Footer() {
  return (
    <div className="px-3 py-2 text-[#8F8CA8] flex gap-3 items-center justify-end bg-[#2a273f]">
      <a
        href="https://github.com/gabriersdev/profile"
        target="_blank"
        className="flex gap-1 items-center  font-normal hover:text-[#E0DEF2]"
        rel="noreferrer"
      >
        {/*@ts-ignore*/}
        <BsGithub size={16}/>
        <span>Github</span>
      </a>
    </div>
  )
}
