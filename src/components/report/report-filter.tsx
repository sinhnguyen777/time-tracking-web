import React from "react";
import { Select, DatePicker } from "antd";
import locale from "antd/es/date-picker/locale/vi_VN";
import dayjs from "dayjs";
import "dayjs/locale/vi";
dayjs.locale("vi");

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
        <Select
          defaultValue={selectedReport}
          onChange={(value) => onReportChange(value)}
          options={[
            {
              value: "late",
              label: "Báo cáo đi muộn"
            },
            {
              value: "overtime",
              label: "Báo cáo tăng ca"
            },
            {
              value: "attendance",
              label: "Chi tiết chấm công"
            },
            {
              value: "totalWork",
              label: "Báo cáo tổng số công"
            }
          ]}
        />
        <DatePicker locale={locale} picker="month" />
      </div>
      <button className="bg-sky-500 text-white px-4 py-2 rounded hover:bg-sky-600">
        Xuất file
      </button>
    </div>
  );
};

export default ReportFilters;
