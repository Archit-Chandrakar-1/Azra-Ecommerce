import React, { ButtonHTMLAttributes, forwardRef } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', size = 'md', ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-sm text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-gold/50 disabled:pointer-events-none disabled:opacity-50 tracking-widest uppercase";
    
    const variants = {
      primary: "bg-gold text-white hover:bg-[#B8962D] shadow-sm",
      secondary: "bg-olive text-cream hover:bg-[#2F3A28] shadow-sm",
      outline: "border border-gold text-gold hover:bg-gold hover:text-white",
      ghost: "hover:bg-gold/10 text-gold",
    };

    const sizes = {
      sm: "h-10 px-4 text-xs",
      md: "h-12 px-8",
      lg: "h-14 px-10 text-base",
    };

    const compClass = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    return (
      <button
        ref={ref}
        className={compClass}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
export { Button };
