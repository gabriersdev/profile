import shiki from "shiki";
import {CodePreview} from "@/components/CodePreview";
import {links} from "@/resources/resources";
import TextFormatter from "@/lib/text-formatter";

export const revalidate = 1800 // revalidate every 30 minutes
export const metadata = {
  title: 'Linktree',
}

export default async function LinkTreeConfig() {
  const highlighter = await shiki.getHighlighter({
    theme: 'rose-pine-moon',
  });
  
  const linksArray = links.map(l => {
    return {"url": l?.["url"], "name": l?.["name"]}
  });
  
  const code = highlighter.codeToHtml(`
  
  # Linktree
  Social links
  
  ${
    [...linksArray].sort((a,b) => a.name.localeCompare(b.name)).map(link => {
      return `## ${TextFormatter.capitalize(link.name)}\n     <${link.url}>`;
    }).join('\n\n  ')
  }
  
  `, {lang: 'md'});
  
  return <CodePreview raw={code} code={code}/>
}
