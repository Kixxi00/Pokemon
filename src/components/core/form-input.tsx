'use client'
import { FC, ChangeEvent } from 'react'
import DatePicker, { ReactDatePicker } from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import CopyToClipboardButton from '../ui/clipboard-button'
import Toggle from './Toggle/Toggle'

export interface FormInputProps {
  name: string
  value: any
  handleChange: (name: string, value: any) => void
  className?: string
  required?: boolean
}

const FormInput: FC<FormInputProps> = ({
  name,
  value,
  handleChange,
  className
}) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleChange(name, e.target.value)
  }

  const onChangeDatePicker = (date: Date | null) => {
    handleChange(name, date)
  }

  let inputElement: JSX.Element

  if (typeof value === 'boolean') {
    inputElement = (
      <Toggle
        checked={value}
        text={value.toString()}
        onChange={(e: any) => {
          handleChange(name, e.target.checked)
        }}
      />
    )
  } else {
    const inputType =
      typeof value === 'number'
        ? 'number'
        : typeof value === 'object' && value instanceof Date
          ? 'date'
          : 'text'

    inputElement =
      inputType === 'date' ? (
        <DatePicker
          required={typeof inputType !== null}
          showTimeInput={true}
          selected={value}
          onChange={onChangeDatePicker}
          className='rounded-md h-10 w-full px-2 border-2 border-accent'
          disabled={name === 'id'}
        />
      ) : (
        <input
          className='rounded-md h-10 w-full px-2 border-2 border-accent'
          required={typeof inputType !== null}
          value={value}
          onChange={onChange}
          disabled={name === 'id'}
          type={inputType}
        />
      )
  }

  return (
    <div className={`flex flex-col w-80 mx-auto gap-1 rounded-md ${className}`}>
      <p className='rounded py-1 text-primary italic text-clip px-2'>
        {name.toUpperCase()}
      </p>
      <div className='flex'>
        {inputElement}
        <CopyToClipboardButton value={value} className='w-8' />
      </div>
    </div>
  )
}

export { FormInput }
