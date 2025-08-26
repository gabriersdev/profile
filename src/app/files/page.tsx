import ListFiles from "@/components/ListFiles";

export const metadata = {
  title: 'All Files',
}

export default async function Files() {
  // @ts-ignore
  return <ListFiles className={"px-3"}/>;
}