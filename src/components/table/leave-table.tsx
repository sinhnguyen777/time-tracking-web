import React from "react";

interface LeaveInterface {
  maDon: string;
  loaiDon: string;
  nguoiLQ: string;
  trangThai: string;
  ngayTao: string;
  ngayDuyet: string;
}

interface Props {
  data: Array<LeaveInterface>;
}

const LeaveTable: React.FC<Props> = ({ data }) => {
  return (
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">STT</th>
            <th className="border border-gray-300 px-4 py-2">Mã đơn</th>
            <th className="border border-gray-300 px-4 py-2">Loại đơn</th>
            <th className="border border-gray-300 px-4 py-2">
              Người liên quan
            </th>
            <th className="border border-gray-300 px-4 py-2">Trạng thái</th>
            <th className="border border-gray-300 px-4 py-2">Ngày tạo</th>
            <th className="border border-gray-300 px-4 py-2">Ngày duyệt</th>
            <th className="border border-gray-300 px-4 py-2">Tác vụ</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => (
            <tr key={index} className="text-center">
              <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
              <td className="border border-gray-300 px-4 py-2">{user.maDon}</td>
              <td className="border border-gray-300 px-4 py-2">
                {user.loaiDon}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {user.nguoiLQ}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {user.trangThai}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {user.ngayTao}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {user.ngayDuyet}
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

export default LeaveTable;
