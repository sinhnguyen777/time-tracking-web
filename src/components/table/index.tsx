import React from "react";

interface UserInterface {
  maNV: string;
  hoTen: string;
  viTri: string;
  username: string;
  nguoiTao: string;
  ngayTao: string;
}

interface Props {
  data: Array<UserInterface>;
}

const UserTable: React.FC<Props> = ({ data }) => {
  return (
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">STT</th>
            <th className="border border-gray-300 px-4 py-2">Mã NV</th>
            <th className="border border-gray-300 px-4 py-2">Họ và tên</th>
            <th className="border border-gray-300 px-4 py-2">Vị trí</th>
            <th className="border border-gray-300 px-4 py-2">Username</th>
            <th className="border border-gray-300 px-4 py-2">Password</th>
            <th className="border border-gray-300 px-4 py-2">Người tạo</th>
            <th className="border border-gray-300 px-4 py-2">Ngày tạo</th>
            <th className="border border-gray-300 px-4 py-2">Tác vụ</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => (
            <tr key={index} className="text-center">
              <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
              <td className="border border-gray-300 px-4 py-2">{user.maNV}</td>
              <td className="border border-gray-300 px-4 py-2">{user.hoTen}</td>
              <td className="border border-gray-300 px-4 py-2">{user.viTri}</td>
              <td className="border border-gray-300 px-4 py-2">
                {user.username}
              </td>
              <td className="border border-gray-300 px-4 py-2">******</td>
              <td className="border border-gray-300 px-4 py-2">
                {user.nguoiTao}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {user.ngayTao}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <button className="text-blue-500 hover:underline mx-2">
                  ✏️
                </button>
                <button className="text-red-500 hover:underline mx-2">
                  🗑️
                </button>
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
