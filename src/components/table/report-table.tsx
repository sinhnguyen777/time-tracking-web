import React from "react";

interface ReportData {
  maNV: string;
  hoTen: string;
  viTri: string;
  gioCheckinOut: string;
  ngay: string;
  thoiGianDiMuon: number;
  phep: string;
  phat: string;
}

interface Props {
  data: ReportData[];
}

const ReportTable: React.FC<Props> = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-300 text-sm">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Mã NV</th>
            <th className="border border-gray-300 px-4 py-2">Họ và tên</th>
            <th className="border border-gray-300 px-4 py-2">Vị trí</th>
            <th className="border border-gray-300 px-4 py-2">
              Giờ checkin/out
            </th>
            <th className="border border-gray-300 px-4 py-2">Ngày</th>
            <th className="border border-gray-300 px-4 py-2">
              Thời gian đi muộn (phút)
            </th>
            <th className="border border-gray-300 px-4 py-2">Phép</th>
            <th className="border border-gray-300 px-4 py-2">Phạt</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="text-center">
              <td className="border border-gray-300 px-4 py-2">{row.maNV}</td>
              <td className="border border-gray-300 px-4 py-2">{row.hoTen}</td>
              <td className="border border-gray-300 px-4 py-2">{row.viTri}</td>
              <td className="border border-gray-300 px-4 py-2">
                {row.gioCheckinOut}
              </td>
              <td className="border border-gray-300 px-4 py-2">{row.ngay}</td>
              <td className="border border-gray-300 px-4 py-2">
                {row.thoiGianDiMuon}
              </td>
              <td className="border border-gray-300 px-4 py-2">{row.phep}</td>
              <td className="border border-gray-300 px-4 py-2">{row.phat}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReportTable;
