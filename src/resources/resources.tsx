import {
  BsGithub,
  BsLinkedin,
  BsGlobe
} from 'react-icons/bs'

const links = [
  {
    name: 'github',
    url: 'https://github.com/gabriersdev',
    // @ts-ignore
    icon: <><BsGithub size={14}/></>
  },
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/gabrielmpribeiro',
    // @ts-ignore
    icon: <><BsLinkedin size={14}/></>
  },
  {
    name: 'portfolio',
    url: 'https://www.gabriel.lts.app.br',
    // @ts-ignore
    icon: <><BsGlobe size={14}/></>
  },
]

export {links}