import React, { useState } from "react";
import CreateRequestPopup from "../popup/create-request-popup";
import ConfirmationPopup from "../popup/confirmation-popup";

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
  const [showPopup, setShowPopup] = useState(false);
  const [showConfirmPopup, setShowConfirmPopup] = useState(false);
  const [currentPopupId, setCurrentPopupId] = useState(0);

  return (
    <div className="overflow-x-auto mt-4">
      {showPopup && (
        <CreateRequestPopup
          setShowPopup={setShowPopup}
          data={data[currentPopupId]}
          title="Tạo mới đơn từ"
          isFormEditable={false}
        />
      )}
      {showConfirmPopup && (
        <ConfirmationPopup
          title="Xóa đơn"
          name={data[currentPopupId].loaiDon}
          setShowPopup={setShowConfirmPopup}
        />
      )}
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
                <button
                  onClick={() => {
                    setShowPopup(true);
                    setCurrentPopupId(index);
                  }}
                  className="text-blue-500 hover:underline mx-2"
                >
                  ✏️
                </button>
                <button
                  onClick={() => {
                    setShowConfirmPopup(true);
                    setCurrentPopupId(index);
                  }}
                  className="text-red-500 hover:underline mx-2"
                >
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
