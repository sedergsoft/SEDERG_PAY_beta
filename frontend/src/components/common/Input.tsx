// src/components/common/Input.tsx

import React from 'react'
import clsx from 'clsx'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
  icon?: React.ReactNode
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, icon, className, type = 'text', ...props }, ref) => {
    return (
      <div className='w-full'>
        {label && (
          <label className='block text-sm font-medium text-gray-700 mb-2'>
            {label}
            {props.required && <span className='text-red-500'>*</span>}
          </label>
        )}
        <div className='relative'>
          <input
            ref={ref}
            type={type}
            className={clsx(
              'w-full px-4 py-2 border rounded-lg transition-colors',
              'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent',
              error ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-white',
              icon && 'pl-10',
              className
            )}
            {...props}
          />
          {icon && <div className='absolute left-3 top-2.5 text-gray-500'>{icon}</div>}
        </div>
        {error && <p className='mt-1 text-sm text-red-500'>{error}</p>}
        {helperText && !error && <p className='mt-1 text-sm text-gray-500'>{helperText}</p>}
      </div>
    )
  }
)

Input.displayName = 'Input'

export default Input