import type {ElementType} from 'react'

interface MenuButtonProps {
  // 1. Mudamos o tipo de 'Icon' para 'ElementType'.
  // Agora ele aceita qualquer componente de ícone (ex: de react-icons).
  icon: ElementType
  isActive?: boolean
}

export function MenuButton({icon: Icon, isActive = false}: MenuButtonProps) {
  return (
    <div
      data-active={isActive}
      className="h-12 flex justify-center items-center border-l-2 border-transparent data-[active=true]:border-[#E0DEF2]"
    >
      {/*
        2. Removemos a propriedade 'strokeWidth'.
        As propriedades 'size' e 'color' funcionam perfeitamente com 'react-icons'.
      */}
      <Icon size={28} color={isActive ? "#E0DEF2" : "#8F8CA8"}/>
    </div>
  )
}
