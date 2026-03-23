import React from "react";
// Ensure these components are imported correctly in the parent component instead

// 1. Define the props that BOTH Layout components share
interface SharedInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type: string;
  placeholder: string;
  name: string;
  required?: boolean;
}

// 2. Update the Layout props to expect a component that uses SharedInputProps
interface EmailLayoutProps extends React.InputHTMLAttributes<HTMLInputElement> {
  inputLayout: React.ComponentType<SharedInputProps>;
}

export const EmailLayout = ({ inputLayout: Component, ...props }: EmailLayoutProps) => {
  return (
    <Component
      label="Email"
      type="email"
      placeholder="Enter your mail address"
      name="email"
      required
      {...props}
    />
  );
};
