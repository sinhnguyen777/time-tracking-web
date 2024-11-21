import { useState, useEffect } from "react";
import Layout from "@/components/layout";
import Menu from "@/components/layout/menu";
import UserTable from "@/components/table";
// import { users } from "@/components/table/user-data";
import AccountPopup from "@/components/popup/account-popup";
import axiosInterceptorInstance from "@/axios/axiosInterceptorInstance";

const Test = () => {
  const [userList, setUserList] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  const HandleGetAllUsers = async () => {
    try {
      const response = await axiosInterceptorInstance
        .get("users")
        .then((res) => res.data);
      setUserList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    HandleGetAllUsers();
  }, []);

  return (
    <Layout>
      <Menu title="Quản lý tài khoản" />
      <div>
        <div className="flex justify-center items-center">
          <div className="flex flex-1 mr-10 border">
            <div className="flex-1">
              <input
                type="text"
                className="w-full outline-none py-2 pl-2"
                placeholder="Tìm kiếm nhân viên"
              />
            </div>
            <button className="flex justify-center items-center p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>
          </div>
          <div className="font-bold">
            <button
              type="button"
              className="flex bg-sky-500 text-white rounded-md px-4 py-2"
              onClick={() => setShowPopup(true)}
            >
              <i className="mr-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </i>
              Thêm nhân viên
            </button>
          </div>
        </div>
        <UserTable data={userList} />
        {showPopup && (
          <AccountPopup
            data={{}}
            title="Tạo mới tài khoản"
            setShowPopup={setShowPopup}
          />
        )}
      </div>
    </Layout>
  );
};

export default Test;
