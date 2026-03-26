import { RegisterLeft } from "../../components/register/RegisterLeft";
import { RegisterRight } from "../../components/register/RegisterRight";
import { NavbarForLogin } from "../../layouts/NavbarForLogin";

export const Register = () => {
  return (
    <>
      <NavbarForLogin />
      <div className="flex flex-row justify-between h-full py-9 pl-56.5 pr-30 bg-gray-50 ">
        <RegisterLeft />

        <RegisterRight />
      </div>
    </>
  );
};
