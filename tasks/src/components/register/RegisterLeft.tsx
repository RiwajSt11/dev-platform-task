import { Link } from "react-router-dom";
import { InputLayoutRegister } from "../../layouts/InputLayoutRegister";
import { EmailLayout } from "../../layouts/EmailLayout";
import { PasswordLayout } from "../../layouts/PasswordLayout";
import { useState } from "react";
import { registerUser } from "../../api/authServices";

export const RegisterLeft = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const nameParts = formData.name.trim().split(" ");
    const firstName = nameParts[0] || "";
    const lastName = nameParts.slice(1).join(" ") || undefined;

    try {
      const data = await registerUser({
        ...formData,
        firstName,
        lastName,
      } as any);
      console.log(data);
      alert("Registered successfully");
    } catch (error: any) {
      console.error(error.response?.data?.message || "Something went wrong");
    }
  };
  return (
    <div className="flex flex-col w-105 h-full">
      <div className="mb-6">
        <h1 className="text-[40px] font-semibold">Create your Account</h1>
      </div>
      <form
        className="flex flex-col items-start gap-3 mb-4"
        onSubmit={handleSubmit}
      >
        <InputLayoutRegister
          label="Full Name"
          type="text"
          placeholder="Full name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <InputLayoutRegister
          label="Phone Number"
          type="text"
          placeholder="Phone Number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <EmailLayout
          inputLayout={InputLayoutRegister}
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <PasswordLayout
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <PasswordLayout
          label="Confirm Password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <div className="flex justify-center items-center gap-3">
          <input className="w-4.5 h-4.5 accent-primary" type="checkbox" />
          <p className="font-normal">I accept terms and policy</p>
        </div>
        <button
          className="w-full h-15 bg-primary rounded-2xl text-white text-[20px] font-semibold cursor-pointer hover:brightness-95 mt-3"
          type="submit"
        >
          Sign Up
        </button>
      </form>
      <div className="text-center mt-3 font-semibold">
        <p>
          Already have an account?{" "}
          <Link to={"/login"} className="text-primary">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};
