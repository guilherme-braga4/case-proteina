import React from 'react'
import { BotaoCustomizado, BotaoIcone } from './styles'
import { ButtonProps } from './interface'

const Botao = ({
  type,
  text,
  disabled,
  icon,
  onClick
}: ButtonProps): JSX.Element => {
  return (
    <BotaoIcone type={type} text={text} disabled={disabled} onClick={onClick}>
      {icon || text}
    </BotaoIcone>
  )
}

export default Botao
