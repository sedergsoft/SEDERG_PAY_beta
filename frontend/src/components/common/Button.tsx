// src/components/common/Button.tsx

import React from 'react'
import clsx from 'clsx'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
  fullWidth?: boolean
  icon?: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      isLoading = false,
      fullWidth = false,
      icon,
      children,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles = 'font-semibold transition-all duration-200 rounded-lg flex items-center justify-center gap-2'

    const variantStyles = {
      primary: 'bg-primary-700 text-white hover:bg-primary-800 disabled:bg-primary-400',
      secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 disabled:bg-gray-100',
      ghost: 'text-primary-700 hover:bg-primary-50 disabled:text-gray-400',
      outline: 'border-2 border-primary-700 text-primary-700 hover:bg-primary-50 disabled:border-gray-400 disabled:text-gray-400',
      danger: 'bg-red-600 text-white hover:bg-red-700 disabled:bg-red-400',
    }

    const sizeStyles = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg',
    }

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={clsx(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          fullWidth && 'w-full',
          'disabled:cursor-not-allowed',
          className
        )}
        {...props}
      >
        {isLoading ? (
          <>
            <span className='inline-block w-4 h-4 border-2 border-current border-r-transparent rounded-full animate-spin' />
            Cargando...
          </>
        ) : (
          <>
            {icon}
            {children}
          </>
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button