import React from 'react'

export interface InputProps {
  name: string
  placeholder: string
  type: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
}
