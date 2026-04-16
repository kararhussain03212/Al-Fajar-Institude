// components/Button.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ 
  children, 
  text,
  onClick, 
  to,
  href, 
  variant = 'primary',
  size = 'md',
  className = '',
  ...props 
}) => {
  // Base styles for all buttons
  const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-300 ease-in-out cursor-pointer';
  
  // Variant styles
  const variants = {
    primary: 'bg-[#8C1515] text-white hover:bg-[#6F1111] hover:shadow-lg', // Stanford red
    secondary: 'bg-white text-[#8C1515] border-2 border-[#8C1515] hover:bg-[#8C1515] hover:text-white',
    outline: 'bg-transparent text-[#8C1515] border-2 border-[#8C1515] hover:bg-[#8C1515] hover:text-white',
  };
  
  // Size styles
  const sizes = {
    sm: 'px-6 py-2 text-sm',
    md: 'px-10 py-3 text-base',
    lg: 'px-12 py-4 text-lg',
    xl: 'px-16 py-5 text-xl',
  };

  const classes = `${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`;
  const content = children ?? text;
  const navigationTarget = to || href;
  const isInternalRoute = navigationTarget && navigationTarget.startsWith('/');

  // Render as React Router link for internal routes
  if (isInternalRoute) {
    return (
      <Link to={navigationTarget} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  // Render as anchor for external links
  if (navigationTarget) {
    return (
      <a href={navigationTarget} className={classes} {...props}>
        {content}
      </a>
    );
  }

  // Render as button
  return (
    <button type="button" onClick={onClick} className={classes} {...props}>
      {content}
    </button>
  );
};

export default Button;
