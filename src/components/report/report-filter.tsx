import React from "react";

interface ReportFiltersProps {
  selectedReport: string;
  onReportChange: (report: string) => void;
}

const ReportFilters: React.FC<ReportFiltersProps> = ({
  selectedReport,
  onReportChange
}) => {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex gap-2">
        <select
          value={selectedReport}
          onChange={(e) => onReportChange(e.target.value)}
          className="bg-sky-500 text-white px-4 py-2 rounded hover:bg-sky-600"
        >
          <option value="late">Báo cáo đi muộn</option>
          <option value="overtime">Báo cáo tăng ca</option>
          <option value="attendance">Chi tiết chấm công</option>
          <option value="totalWork">Báo cáo tổng số công</option>
        </select>
        <input
          type="date"
          className="border border-gray-300 px-4 py-2 rounded"
        />
        <input
          type="date"
          className="border border-gray-300 px-4 py-2 rounded"
        />
      </div>
      <button className="bg-sky-500 text-white px-4 py-2 rounded hover:bg-sky-600">
        Xuất file
      </button>
    </div>
  );
};

export default ReportFilters;
