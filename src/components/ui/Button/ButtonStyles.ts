import { media } from '@/styles/theme'
import styled, { css } from 'styled-components'

interface StyledButtonProps {
  $variant: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
  $size: 'sm' | 'md' | 'lg'
  $loading: boolean
  $fullWidth: boolean
}

const buttonVariants = {
  primary: css`
    background-color: ${({ theme }) => theme.colors.baseBlue.base};
    color: ${({ theme }) => theme.colors.textColor};
    border: 2px solid ${({ theme }) => theme.colors.baseBlue.base};

    &:hover:not(:disabled) {
      background-color: ${({ theme }) => theme.colors.baseBlue.dark};
      border-color: ${({ theme }) => theme.colors.baseBlue.dark};
      transform: translateY(-1px);
    }

    &:active:not(:disabled) {
      background-color: ${({ theme }) => theme.colors.baseBlue.dark20};
      transform: translateY(0);
    }
  `,

  secondary: css`
    background-color: ${({ theme }) => theme.colors.baseGreen.base};
    color: ${({ theme }) => theme.colors.textColor};
    border: 2px solid ${({ theme }) => theme.colors.baseGreen.base};

    &:hover:not(:disabled) {
      background-color: ${({ theme }) => theme.colors.baseGreen.dark};
      border-color: ${({ theme }) => theme.colors.baseGreen.dark};
      transform: translateY(-1px);
    }

    &:active:not(:disabled) {
      background-color: ${({ theme }) => theme.colors.baseGreen.dark20};
      transform: translateY(0);
    }
  `,

  outline: css`
    background-color: transparent;
    color: ${({ theme }) => theme.colors.baseBlue.base};
    border: 2px solid ${({ theme }) => theme.colors.baseBlue.base};

    &:hover:not(:disabled) {
      background-color: ${({ theme }) => theme.colors.baseBlue.base};
      color: ${({ theme }) => theme.colors.textColor};
      transform: translateY(-1px);
    }

    &:active:not(:disabled) {
      background-color: ${({ theme }) => theme.colors.baseBlue.dark};
      transform: translateY(0);
    }
  `,

  ghost: css`
    background-color: transparent;
    color: ${({ theme }) => theme.colors.textColor};
    border: 2px solid transparent;

    &:hover:not(:disabled) {
      transform: translateY(-2px);
    }

    &:active:not(:disabled) {
      transform: translateY(0);
    }
  `,

  danger: css`
    background-color: ${({ theme }) => theme.colors.baseRed.base};
    color: ${({ theme }) => theme.colors.textColor};
    border: 2px solid ${({ theme }) => theme.colors.baseRed.base};

    &:hover:not(:disabled) {
      background-color: ${({ theme }) => theme.colors.baseRed.dark};
      border-color: ${({ theme }) => theme.colors.baseRed.dark};
      transform: translateY(-1px);
    }

    &:active:not(:disabled) {
      background-color: ${({ theme }) => theme.colors.baseRed.dark20};
      transform: translateY(0);
    }
  `
}

const buttonSizes = {
  sm: css`
    padding: 8px 16px;
    font-size: 12px;
    min-height: 26px;
  `,

  md: css`
    padding: 10px 20px;
    font-size: 14px;
    min-height: 34px;
  `,

  lg: css`
    padding: 14px 28px;
    font-size: 16px;
    min-height: 42px;
  `
}

export const StyledButton = styled.button<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: inherit;
  font-weight: 600;
  line-height: 1;
  text-decoration: none;
  text-align: center;
  white-space: nowrap;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  position: relative;
  overflow: hidden;

  ${({ $size }) => buttonSizes[$size]}
  ${({ $variant }) => buttonVariants[$variant]}

  ${({ $fullWidth }) =>
    $fullWidth &&
    css`
      width: 100%;
    `}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  ${({ $loading }) =>
    $loading &&
    css`
      cursor: not-allowed;

      &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 16px;
        height: 16px;
        margin: -8px 0 0 -8px;
        border: 2px solid transparent;
        border-top: 2px solid currentColor;
        border-radius: 50%;
        animation: spin 1s linear infinite;
      }

      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    `}

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.baseBlue.base};
    outline-offset: 2px;
  }

  ${media.mobile} {
    ${({ $size }) => $size === 'lg' && buttonSizes.md}
    ${({ $size }) => $size === 'md' && buttonSizes.sm}
  }
`

export const ButtonContent = styled.span<{ $loading: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  opacity: ${({ $loading }) => ($loading ? 0 : 1)};
  transition: opacity 0.2s ease-in-out;
`

export const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 1em;
    height: 1em;
  }
`
