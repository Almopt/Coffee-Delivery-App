import React from 'react';
import { cn } from '../lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'icon';
type ButtonSize = 'default' | 'small';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right'; // New prop for icon position
  label?: string;
}

export const Button = ({
  variant = 'primary',
  size = 'default',
  icon,
  iconPosition = 'left',
  label,
  className,
  ...props
}: ButtonProps) => {
  const baseStyles = 'rounded-lg transition-colors duration-200 font-roboto';

  const variantStyles = {
    primary: 'bg-[#DBA11C] hover:bg-[#B17F15] text-white',
    secondary: 'bg-[#E8E8E8] hover:bg-[#D4D4D4] text-black',
    icon: 'bg-[#673AB7] hover:bg-[#7E57C2] text-white p-3',
  };

  const sizeStyles = {
    default: 'px-[11.25rem] py-3',
    small: 'px-2 py-[0.40625rem]',
  };

  const content = (
    <>
      {/* If there's an icon and it should be on the left */}
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}

      {/* Label */}
      {label && <span>{label}</span>}

      {/* If there's an icon and it should be on the right */}
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </>
  );

  return (
    <button
      className={cn(
        baseStyles,
        variantStyles[variant],
        variant !== 'icon' && sizeStyles[size],
        // Add flex alignment when we have both icon and label
        icon && label && 'flex items-center justify-center',
        className
      )}
      {...props}
    >
      {content}
    </button>
  );
};
