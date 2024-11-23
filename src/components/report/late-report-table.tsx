import map from "lodash/map";
import React from "react";

const LateReportTable: React.FC<{ data: any }> = ({ data }) => {
  const { user } = data;
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
            {/* <th className="border border-gray-300 px-4 py-2">Phép</th>
            <th className="border border-gray-300 px-4 py-2">Phạt</th> */}
          </tr>
        </thead>
        <tbody>
          {map(data.lateDays, (row, index) => (
            <tr key={index}>
              <td className="border border-gray-300 px-4 py-2">{user.code}</td>
              <td className="border border-gray-300 px-4 py-2">
                {user.full_name}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {user.position}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {row.time_check_in} - {row.time_check_out}
              </td>
              <td className="border border-gray-300 px-4 py-2">{row.date}</td>
              <td className="border border-gray-300 px-4 py-2">
                {row.late_minutes}
              </td>
              {/* <td className="border border-gray-300 px-4 py-2">{row.phep}</td>
                <td className="border border-gray-300 px-4 py-2">{row.phat}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LateReportTable;
