import { Slot } from '@radix-ui/react-slot'
import { ReactNode, InputHTMLAttributes } from 'react'

export interface TextInputRootProps {
  children: ReactNode
}

function TextInputRoot(props: TextInputRootProps) {
  return (
    <div className="flex items-center gap-3 py-4 px-3 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-300">
      {props.children}
    </div>
  )
}

export interface TextInputProps {
  children: ReactNode
}

function TextInputIcon(props: TextInputProps) {
  return <Slot className="w-6 h-6 text-gray-400">{props.children}</Slot>
}

TextInputIcon.displayName = 'textInput.Icon'

export interface TextInputInputsProps
  extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput(props: TextInputInputsProps) {
  return (
    <input
      className="bg-transparent flex-1  text-gray-100 text-xs placeholder:text-gray-400 outline-none"
      {...props}
    />
  )
}

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
}
