import { useState } from "react";
import eyesOpen from "../assets/passwordPhotos/eyes-open.png";
import eyesClosed from "../assets/passwordPhotos/eyes-closed.png";

interface PasswordLayoutProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  style1?: string;
  style2?: string;
}

export const PasswordLayout = ({
  label = "Password",
  style1,
  style2,
  ...inputProps
}: PasswordLayoutProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="text-[16px] font-semibold">
        {label} <span className="text-red-500">*</span>
      </label>
      <div
        className={`w-[85%] flex items-center border border-gray-500 rounded-2xl px-4 focus-within:border-primary transition-colors ${style1}`}
      >
        <input
          {...inputProps}
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
          className={`w-full py-3 outline-none bg-transparent ${style2}`}
          required
        />

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="mr-2"
        >
          {showPassword ? (
            <img className="w-5 h-4" src={eyesOpen} />
          ) : (
            <img className="w-5 h-4" src={eyesClosed} />
          )}
        </button>
      </div>
    </div>
  );
};
