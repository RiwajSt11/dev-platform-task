import { LoginLeft } from "../../components/login/LoginLeft";
import { LoginRight } from "../../components/login/LoginRight";

export const Login = () => {
  return (
    <>
      <div className="flex flex-row justify-between h-full py-17 px-55 pl-60.75 pr-30 bg-gray-50 ">
        <LoginLeft />
        <LoginRight />
      </div>
    </>
  );
};
