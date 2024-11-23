import { map } from "lodash";
import React from "react";

const AbsentReportTable: React.FC<{ data: any }> = ({ data }) => {
  console.log("data", data);
  const { user } = data;
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-300 text-sm">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Mã NV</th>
            <th className="border border-gray-300 px-4 py-2">Họ và tên</th>
            <th className="border border-gray-300 px-4 py-2">Vị trí</th>
            <th className="border border-gray-300 px-4 py-2">Lý do</th>
            <th className="border border-gray-300 px-4 py-2">Ngày</th>
            {/* <th className="border border-gray-300 px-4 py-2">
              Thời gian đi muộn (phút)
            </th> */}
            {/* <th className="border border-gray-300 px-4 py-2">Phép</th>
            <th className="border border-gray-300 px-4 py-2">Phạt</th> */}
          </tr>
        </thead>
        <tbody>
          {map(data.absentDays, (row, index) => {
            return (
              <tr key={index}>
                <td className="border border-gray-300 px-4 py-2">
                  {user.code}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {user.full_name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {user.position}
                </td>
                <td className="border border-gray-300 px-4 py-2">{row.note}</td>
                <td className="border border-gray-300 px-4 py-2">{row.date}</td>
                {/* <td className="border border-gray-300 px-4 py-2">
                  {row.thoiGianDiMuon}
                </td> */}
                {/* <td className="border border-gray-300 px-4 py-2">{row.phep}</td>
                <td className="border border-gray-300 px-4 py-2">{row.phat}</td> */}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AbsentReportTable;
