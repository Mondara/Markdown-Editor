import React from 'react';

interface Props extends React.HTMLProps<HTMLButtonElement> {
    children: React.ReactNode;
    onClick?: () => void;
    type?: 'submit' | 'reset' | 'button';
    // type?: React.ComponentProps<'button'>;
  }
  
  export const Button: React.FC<Props> = ({ children, ...buttonProps }) => {
    return (
  
      <button className="button"{...buttonProps}>
        {children}
      </button>
  
    )
  }