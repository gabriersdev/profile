import {BsGithub} from "react-icons/bs";
import Link from "next/link";

export function Footer() {
  return (
    <div className={"px-3 py-3 bg-[#2a273f] min-h-[50px]"}>
      <div className="text-[#8F8CA8] flex gap-3 items-center justify-between flex-wrap box-content">
        <Link href={"/files"}>Explore all files</Link>
        <Link
          href="https://github.com/gabriersdev/profile"
          target="_blank"
          className="flex gap-1 items-center  font-normal hover:text-[#E0DEF2]"
          rel="noreferrer"
        >
          {/*@ts-ignore*/}
          <BsGithub size={16}/>
          <span>Github</span>
        </Link>
      </div>
    </div>
  )
}
