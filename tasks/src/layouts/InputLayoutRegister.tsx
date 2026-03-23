import React, { type ChangeEvent } from "react";
interface InputLayoutProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const InputLayoutRegister = ({
  label,
  ...inputProps
}: InputLayoutProps) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="text-[16px] font-semibold">
        {label} <span className="text-red-500">*</span>
      </label>
      <input
        {...inputProps}
        className="w-[85%] border border-gray-500 rounded-2xl px-4 py-3 bg-gray-50 outline-none focus:border-primary transition-colors"
        required
      />
    </div>
  );
};
