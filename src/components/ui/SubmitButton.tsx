'use client'

import { FC, ButtonHTMLAttributes } from 'react'
import { Button } from './button'

export interface SubmitButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

const SubmitButton: FC<SubmitButtonProps> = ({ className, ...props }) => {
  return (
    <Button
      type='submit'
      variant={'secondary'}
      className={`w-40 p-2 bg-secondary rounded-md transition-all ease-in-out duration-150 hover:bg-primary ${className}`}
      {...props}
    >
      SAVE
    </Button>
  )
}

export { SubmitButton }
