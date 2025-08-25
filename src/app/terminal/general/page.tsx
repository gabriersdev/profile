import shiki from "shiki";
import {CodePreview} from "@/components/CodePreview";

export const revalidate = 1800 // revalidate every 30 minutes
export const metadata = {
  title: 'Terminal',
}

export default async function General() {
  const highlighter = await shiki.getHighlighter({
    theme: 'rose-pine-moon',
  })
  
  const code = highlighter.codeToHtml("## general", {lang: 'md'})
  
  return <CodePreview code={code} />
}
