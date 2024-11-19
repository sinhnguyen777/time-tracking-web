// pages/report/index.tsx
import React, { useState } from "react";
import ReportFilters from "@/components/report/report-filter";
import LateReportTable from "@/components/report/late-report-table";
import AttendanceDetailTable from "@/components/report/attendance-detail-table";
import OvertimeReportTable from "@/components/report/overtime-report-table";
import {
  lateData,
  overtimeData,
  attendanceDetailData
} from "@/components/report/report-data";
import Menu from "@/components/layout/menu";
import Layout from "@/components/layout";

const ReportPage = () => {
  const [selectedReport, setSelectedReport] = useState("late");

  return (
    <Layout>
      <Menu title="Báo cáo thống kê" />
      <ReportFilters
        selectedReport={selectedReport}
        onReportChange={setSelectedReport}
      />
      {selectedReport === "late" && <LateReportTable data={lateData} />}
      {selectedReport === "overtime" && (
        <OvertimeReportTable data={overtimeData} />
      )}
      {selectedReport === "attendance" && (
        <AttendanceDetailTable data={attendanceDetailData} />
      )}
    </Layout>
  );
};

export default ReportPage;
