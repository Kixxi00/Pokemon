'use client'

import { FC, ButtonHTMLAttributes } from 'react'
import { Button } from './button'

export interface DeleteButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

const DeleteButton: FC<DeleteButtonProps> = ({ className, ...props }) => {
  return (
    <Button
      variant={'outline'}
      className={`w-40 p-2 rounded-md  transition-all ease-in-out duration-150 ${className}`}
      {...props}
    >
      DELETE
    </Button>
  )
}

export { DeleteButton }
