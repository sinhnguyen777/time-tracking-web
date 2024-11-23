import React from "react";

const AttendanceDetailTable: React.FC<{ data: any[] }> = ({ data }) => {
  return (
    <table className="table-auto w-full border border-gray-200">
      <thead className="bg-gray-100">
        <tr>
          <th className="border px-4 py-2">Thứ</th>
          <th className="border px-4 py-2">Ngày</th>
          <th className="border px-4 py-2">Checkin</th>
          <th className="border px-4 py-2">Checkout</th>
          <th className="border px-4 py-2">Đi muộn</th>
          <th className="border px-4 py-2">Về sớm</th>
          <th className="border px-4 py-2">Tăng ca</th>
          <th className="border px-4 py-2">Làm bù</th>
          <th className="border px-4 py-2">Giờ làm</th>
          <th className="border px-4 py-2">Công làm</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index} className="text-center">
            <td className="border px-4 py-2">{row.thu}</td>
            <td className="border px-4 py-2">{row.ngay}</td>
            <td className="border px-4 py-2">{row.checkin}</td>
            <td className="border px-4 py-2">{row.checkout}</td>
            <td className="border px-4 py-2">{row.diMuon}</td>
            <td className="border px-4 py-2">{row.veSom}</td>
            <td className="border px-4 py-2">{row.tangCa}</td>
            <td className="border px-4 py-2">{row.lamBu}</td>
            <td className="border px-4 py-2">{row.gioLam}</td>
            <td className="border px-4 py-2">{row.congLam}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AttendanceDetailTable;
