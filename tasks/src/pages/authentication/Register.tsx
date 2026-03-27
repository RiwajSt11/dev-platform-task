import { RegisterLeft } from "../../components/register/RegisterLeft";
import { RegisterRight } from "../../components/register/RegisterRight";

export const Register = () => {
  return (
    <>
      <div className="flex flex-row justify-between h-full py-9 pl-56.5 pr-30 bg-gray-50 ">
        <RegisterLeft />

        <RegisterRight />
      </div>
    </>
  );
};
