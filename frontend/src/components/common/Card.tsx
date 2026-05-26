// src/components/common/Card.tsx

import React from 'react'
import clsx from 'clsx'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  shadow?: 'sm' | 'md' | 'lg' | 'none'
  padding?: 'sm' | 'md' | 'lg'
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ shadow = 'md', padding = 'md', className, children, ...props }, ref) => {
    const shadowStyles = {
      sm: 'shadow-sm',
      md: 'shadow-md',
      lg: 'shadow-lg',
      none: 'shadow-none',
    }

    const paddingStyles = {
      sm: 'p-3',
      md: 'p-6',
      lg: 'p-8',
    }

    return (
      <div
        ref={ref}
        className={clsx(
          'bg-white rounded-lg border border-gray-200 transition-all duration-200',
          shadowStyles[shadow],
          paddingStyles[padding],
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

export default Card