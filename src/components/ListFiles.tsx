import {explorerFiles} from "@/components/Explorer";
import Link from "next/link";

export default function ListFiles({className = ""}: {className?: string}) {
  return (
    <ul className={className}>
      <li className={"text-md font-semibold text-blue-200"}>Explore</li>
      {
        Object.entries(explorerFiles).map(([key, value], index) => {
          return (<li key={index} className={"text-white"}><Link href={key} className={"underline"}>{value["title"]}</Link></li>)
        })
      }
    </ul>
  )
}