import {GistContent} from '@/components/GistContent'

export const metadata = {
  title: 'VSCode Extensions',
}

export default async function Extensions() {
  // @ts-ignore
  return <GistContent gistUrl="https://gist.githubusercontent.com/gabriersdev/7ec88ddde489c9e39d30d350e6d16d01/raw/02aafc0231859bda5601eec204e574052ca06e9b/vs-code-extensions.txt"/>
}