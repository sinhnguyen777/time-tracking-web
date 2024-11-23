import React from "react";

const OvertimeReportTable: React.FC<{ data: any[] }> = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-300 text-sm">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Mã NV</th>
            <th className="border border-gray-300 px-4 py-2">Họ và tên</th>
            <th className="border border-gray-300 px-4 py-2">Vị trí</th>
            <th className="border border-gray-300 px-4 py-2">Giờ tăng ca</th>
            <th className="border border-gray-300 px-4 py-2">Ngày</th>
            <th className="border border-gray-300 px-4 py-2">
              Thời gian tăng ca (giờ)
            </th>
            <th className="border border-gray-300 px-4 py-2">
              Tính công tăng ca x1.5
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td className="border border-gray-300 px-4 py-2">{row.maNV}</td>
              <td className="border border-gray-300 px-4 py-2">{row.hoTen}</td>
              <td className="border border-gray-300 px-4 py-2">{row.viTri}</td>
              <td className="border border-gray-300 px-4 py-2">
                {row.gioTangCa}
              </td>
              <td className="border border-gray-300 px-4 py-2">{row.ngay}</td>
              <td className="border border-gray-300 px-4 py-2">
                {row.thoiGianTangCa}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {row.tinhCongTangCa}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OvertimeReportTable;
