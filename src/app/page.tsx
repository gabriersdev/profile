import Markdown from 'react-markdown'

export const revalidate = 1800
export const metadata = {
  title: 'Home',
}

export default async function Home() {
  const README = await fetch(`https://raw.githubusercontent.com/gabriersdev/gabriersdev/master/README.md`);
  
  let markdown = await README.text();
  if (markdown) markdown = markdown.replace(/<\!\--.*--\>\s*/g, '');
  
  return (
    <div className={"text-white font-inter [&>:is(h1,h2,h3,h4,h5,h6)]:font-semibold [&>:is(h1,h2,h3,h4,h5,h6)]:font-inter-tight [&_h1]:text-4xl [&_h1]:mb-4 [&_h2]:text-[22.5px] [&_h2]:mb-2 [&_h2]:mt-4 overflow-scroll min-h-[100vh] [&_*]:leading-6"}>
      <Markdown>{markdown}</Markdown>
    </div>
  )
}
