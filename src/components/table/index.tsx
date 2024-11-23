import React, { useState } from "react";
import dayjs from "dayjs";
import AccountPopup from "@/components/popup/account-popup";
import { EyeOutlined } from "@ant-design/icons";

interface UserInterface {
  code: string;
  full_name: string;
  phone: string;
  position: string;
  email: string;
  createdAt: string;
}

interface Props {
  data: Array<UserInterface>;
}

const UserTable: React.FC<Props> = ({ data }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [currentPopupId, setCurrentPopupId] = useState(0);
  const dateFormat = "DD/MM/YYYY";
  return (
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">STT</th>
            <th className="border border-gray-300 px-4 py-2">Mã NV</th>
            <th className="border border-gray-300 px-4 py-2">Họ và tên</th>
            <th className="border border-gray-300 px-4 py-2">Vị trí</th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">Số điện thoại</th>
            <th className="border border-gray-300 px-4 py-2">Ngày tạo</th>
            <th className="border border-gray-300 px-4 py-2">Tác vụ</th>
          </tr>
        </thead>
        <tbody>
          {showPopup && (
            <AccountPopup
              data={data[currentPopupId]}
              title="Thông tin nhân viên"
              setShowPopup={setShowPopup}
            />
          )}
          {data.map((user, index) => (
            <tr key={index} className="text-center">
              <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
              <td className="border border-gray-300 px-4 py-2">{user.code}</td>
              <td className="border border-gray-300 px-4 py-2">
                {user.full_name}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {user.position}
              </td>
              <td className="border border-gray-300 px-4 py-2">{user.email}</td>
              <td className="border border-gray-300 px-4 py-2">{user.phone}</td>
              <td className="border border-gray-300 px-4 py-2">
                {dayjs(user.createdAt).format(dateFormat)}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <button
                  onClick={() => {
                    setShowPopup(true);
                    setCurrentPopupId(index);
                  }}
                  className="text-blue-500 hover:underline mx-2"
                >
                  <EyeOutlined />
                </button>
                {/* <button className="text-red-500 hover:underline mx-2">
                  🗑️
                </button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 flex justify-between items-center">
        <p>Có {data.length} kết quả</p>
        <div>
          <button className="mx-1 px-2 py-1 border">{"<"}</button>
          <button className="mx-1 px-2 py-1 border bg-green-500 text-white">
            1
          </button>
          <button className="mx-1 px-2 py-1 border">2</button>
          <button className="mx-1 px-2 py-1 border">...</button>
          <button className="mx-1 px-2 py-1 border">{">"}</button>
        </div>
      </div>
    </div>
  );
};

export default UserTable;
