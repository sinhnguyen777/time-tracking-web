import { Select } from "antd";
import dayjs from "dayjs";
import "dayjs/locale/vi";
import React from "react";
dayjs.locale("vi");

interface ReportFiltersProps {
  selectedReport: string;
  onReportChange: (report: string) => void;
  onExport: () => void; // Thêm prop onExport để nhận hàm xuất file từ component cha
}

const ReportFilters: React.FC<ReportFiltersProps> = ({
  selectedReport,
  onReportChange,
  onExport
}) => {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex gap-2">
        <Select
          defaultValue={selectedReport}
          onChange={(value) => onReportChange(value)}
          options={[
            {
              value: "late",
              label: "Báo cáo đi trễ"
            },
            {
              value: "absent",
              label: "Báo cáo ngày nghỉ"
            },
            // {
            //   value: "attendance",
            //   label: "Chi tiết chấm công"
            // },
            {
              value: "totalWork",
              label: "Báo cáo tổng số công"
            }
          ]}
        />
        {/* <DatePicker locale={locale} picker="month" /> */}
      </div>
      <button
        onClick={onExport}
        className="bg-sky-500 text-white px-4 py-2 rounded hover:bg-sky-600"
      >
        Xuất file
      </button>
    </div>
  );
};

export default ReportFilters;
