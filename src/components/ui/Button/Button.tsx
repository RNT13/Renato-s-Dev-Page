'use client'

import Link from 'next/link'
import React, { forwardRef } from 'react'
import { ButtonContent, IconWrapper, StyledButton } from './ButtonStyles'

type ButtonVariants = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
type ButtonSizes = 'sm' | 'md' | 'lg'

export interface CommonButtonProps {
  variant?: ButtonVariants
  size?: ButtonSizes
  loading?: boolean
  fullWidth?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  children?: React.ReactNode
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  href?: string
  target?: React.HTMLAttributeAnchorTarget
  rel?: string
}

export type ButtonProps = CommonButtonProps & React.HTMLAttributes<HTMLButtonElement>

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      loading = false,
      fullWidth = false,
      leftIcon,
      rightIcon,
      disabled,
      children,
      href,
      target,
      rel,
      type = 'button',
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading

    const content = (
      <StyledButton
        ref={ref as React.Ref<HTMLButtonElement>}
        $variant={variant}
        $size={size}
        $loading={loading}
        $fullWidth={fullWidth}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        type={!href ? type : undefined}
        {...props}
      >
        <ButtonContent $loading={loading}>
          {leftIcon && <IconWrapper>{leftIcon}</IconWrapper>}
          {children}
          {rightIcon && <IconWrapper>{rightIcon}</IconWrapper>}
        </ButtonContent>
      </StyledButton>
    )

    if (href) {
      return (
        <Link href={href} target={target} rel={rel} legacyBehavior={false}>
          {content}
        </Link>
      )
    }

    return content
  }
)

Button.displayName = 'Button'
export default Button
