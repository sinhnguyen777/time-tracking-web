import { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "@/assets/images/favicon.png";

interface UserCredentials {
  username: string;
  password: string;
}

const Login = () => {
  const [credentials, setCredentials] = useState<UserCredentials>({
    username: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [passwordInputType, setPasswordInputType] = useState("password");

  const GetCredentials = () => {
    console.log(credentials);
  };

  const ToggleShowPassword = () => {
    if (passwordInputType === "password") {
      setPasswordInputType("text");
    } else {
      setPasswordInputType("password");
    }
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="h-lvh flex justify-center items-center bg-sky-500">
      <div className=" size-fit bg-white p-8 rounded-lg [&>*]:my-4">
        <div className="w-40 mx-auto">
          <Image className="max-w-full max-h-full" src={Logo} alt="Logo" />
        </div>
        <h1 className="font-bold text-2xl">
          Đăng nhập hệ thống quản lý chấm công
        </h1>
        <form
          className="[&>div]:my-6"
          onSubmit={(e) => {
            e.preventDefault();
            GetCredentials();
          }}
        >
          <div className="relative">
            <input
              type="text"
              id="user-input"
              value={credentials.username}
              onChange={(e) =>
                setCredentials((prev) => ({
                  ...prev,
                  username: e.target.value,
                }))
              }
              className="peer outline-none border-b min-w-full py-2.5"
              required
            />
            <label
              htmlFor="user-input"
              className="absolute left-0 top-2.5 select-none cursor-text text-gray-500 peer-focus:text-sky-600 peer-valid:text-sky-600 peer-focus:-top-4 peer-valid:-top-4 peer-focus:text-sm peer-valid:text-sm transition-all"
            >
              Username
            </label>
          </div>
          <div className="relative">
            <input
              type={passwordInputType}
              id="password-input"
              value={credentials.password}
              onChange={(e) =>
                setCredentials((prev) => ({
                  ...prev,
                  password: e.target.value,
                }))
              }
              className="peer outline-none border-b min-w-full py-2.5"
              required
            />
            <label
              htmlFor="password-input"
              className="absolute left-0 top-2.5 select-none cursor-text text-gray-500 peer-focus:text-sky-600 peer-valid:text-sky-600 peer-focus:-top-4 peer-valid:-top-4 peer-focus:text-sm peer-valid:text-sm transition-all"
            >
              Password
            </label>
            <button type="button" onClick={ToggleShowPassword}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`size-6 absolute top-2.5 right-0 ${showPassword ? "text-sky-600" : ""}`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </button>
          </div>
          <div className="w-fit mx-auto">
            <button
              type="submit"
              className="border px-4 py-2 bg-sky-500 text-slate-50"
            >
              Đăng Nhập
            </button>
          </div>
        </form>
        <div className="w-fit mx-auto">
          <a href="#" className="text-sky-600 underline">
            Quên mật khẩu
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
