// pages/report/index.tsx
import LateReportTable from "@/components/report/late-report-table";
import ReportFilters from "@/components/report/report-filter";
import TotalWorkReport from "@/components/report/total-work-report";
import React, { useEffect, useState } from "react";
// import Menu from "@/components/layout/menu";
import axiosInterceptorInstance from "@/axios/axiosInterceptorInstance";
import Layout from "@/components/layout";
import dayjs from "dayjs";
import AbsentReportTable from "@/components/report/absent-report-table";

const ReportPage: React.FC = () => {
  const [selectedReport, setSelectedReport] = useState("totalWork");
  const [dataReport, setDataReport] = useState<any[]>([]);
  const [lateData, setLateData] = useState<any[]>([]);
  const [absentData, setAbsentData] = useState<any[]>([]);

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

  useEffect(() => {
    const fetchData = async () => {
      const user_id = JSON.parse(localStorage.getItem("user-info") || "{}");
      try {
        const response = await axiosInterceptorInstance
          .get(
            `/timekeeping/late-day/${user_id.id}?month=${currentMonth + 1}&year=${currentYear}`
          )
          .then((res) => res.data);

        setLateData(response.data);
        return response.data;
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [currentMonth, currentYear]);

  useEffect(() => {
    const fetchData = async () => {
      const user_id = JSON.parse(localStorage.getItem("user-info") || "{}");
      try {
        const response = await axiosInterceptorInstance
          .get(
            `/timekeeping/absent-day/${user_id.id}?month=${currentMonth + 1}&year=${currentYear}`
          )
          .then((res) => res.data);

        setAbsentData(response.data);
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
      {selectedReport === "absent" && <AbsentReportTable data={absentData} />}
      {/* {selectedReport === "attendance" && (
        <AttendanceDetailTable data={attendanceDetailData} />
      )} */}
      {selectedReport === "totalWork" && <TotalWorkReport data={dataReport} />}
    </Layout>
  );
};

export default ReportPage;
