// pages/report/index.tsx
import React, { useEffect, useState } from "react";
import ReportFilters from "@/components/report/report-filter";
import LateReportTable from "@/components/report/late-report-table";
import AttendanceDetailTable from "@/components/report/attendance-detail-table";
import OvertimeReportTable from "@/components/report/overtime-report-table";
import TotalWorkReport from "@/components/report/total-work-report";
import {
  lateData,
  overtimeData,
  attendanceDetailData
} from "@/components/report/report-data";
// import Menu from "@/components/layout/menu";
import Layout from "@/components/layout";
import axiosInterceptorInstance from "@/axios/axiosInterceptorInstance";
import dayjs from "dayjs";

const ReportPage: React.FC = () => {
  const [selectedReport, setSelectedReport] = useState("totalWork");
  const [dataReport, setDataReport] = useState<any[]>([]);

  const currentMonth = dayjs().month();
  const currentYear = dayjs().year();

  useEffect(() => {
    const fetchData = async () => {
      const user_id = JSON.parse(localStorage.getItem("user-info") || "{}");
      try {
        const response = await axiosInterceptorInstance
          .get(
            `/timekeeping/monthly-report/${user_id.id}?month=${currentMonth + 1}&year=${currentYear}`
          )
          .then((res) => res.data);

        setDataReport(response.data);
        return response.data;
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [currentMonth, currentYear]);

  return (
    <Layout>
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
      {selectedReport === "totalWork" && <TotalWorkReport data={dataReport} />}
    </Layout>
  );
};

export default ReportPage;
