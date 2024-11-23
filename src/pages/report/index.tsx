// pages/report/index.tsx
import LateReportTable from "@/components/report/late-report-table";
import ReportFilters from "@/components/report/report-filter";
import TotalWorkReport from "@/components/report/total-work-report";
import React, { useEffect, useState } from "react";
// import Menu from "@/components/layout/menu";
import axiosInterceptorInstance from "@/axios/axiosInterceptorInstance";
import Layout from "@/components/layout";
import dayjs from "dayjs";
import { utils, writeFile } from "xlsx";
import AbsentReportTable from "@/components/report/absent-report-table";
import { map } from "lodash";
import BarChart from "@/components/chart";
import { Typography } from "antd";

const ReportPage: React.FC = () => {
  const [selectedReport, setSelectedReport] = useState("totalWork");
  const [dataReport, setDataReport] = useState<any[]>([]);
  const [lateData, setLateData] = useState<{ lateDays: any[] }>({
    lateDays: []
  });
  const [absentData, setAbsentData] = useState<{
    absentDay: any[];
  }>({
    absentDay: []
  });

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

  const handleExportToExcel = () => {
    let dataToExport: any = [];
    let reportName = "";

    switch (selectedReport) {
      case "late":
        dataToExport = formatLateData(lateData);
        reportName = "Báo cáo đi trễ";
        break;
      case "absent":
        dataToExport = formatAbsentData(absentData);
        reportName = "Báo cáo ngày nghỉ";
        break;
      default:
        break;
    }

    if (dataToExport.length > 0) {
      exportToExcel(dataToExport, reportName);
    } else {
      console.error("Không có dữ liệu để xuất");
      alert("Không có bảng dữ liệu để xuất");
    }
  };

  // Hàm format dữ liệu đi trễ
  const formatLateData = (data: any) => {
    const { lateDays } = data;
    return map(lateDays, (item) => ({
      "Mã NV": data?.user?.code,
      "Họ và tên": data?.user?.full_name,
      "Vị trí": data?.user?.position,
      "Giờ checkin/out": `${item.time_check_in} - ${item.time_check_out}`,
      Ngày: item.date,
      "Thời gian đi muộn (phút)": item.late_minutes
    }));
  };

  const formatAbsentData = (data: any) => {
    const { absentDays } = data;

    return map(absentDays, (item) => ({
      "Mã NV": data?.user?.code,
      "Họ và tên": data?.user?.full_name,
      "Vị trí": data?.user?.position,
      Ngày: item.date,
      "Lý do": item.note
    }));
  };

  const exportToExcel = (data: any[], reportName: string) => {
    const ws = utils.json_to_sheet(data);
    const wb = utils.book_new();
    utils.book_append_sheet(wb, ws, reportName);
    writeFile(wb, `${reportName}.xlsx`);
  };

  return (
    <Layout>
      <ReportFilters
        selectedReport={selectedReport}
        onReportChange={setSelectedReport}
        onExport={handleExportToExcel}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px"
        }}
      >
        <div>
          {selectedReport === "totalWork" && (
            <div style={{ margin: "20px" }}>
              <Typography.Title level={4}>
                Báo cáo tổng số công tháng {dayjs().month() + 1}
              </Typography.Title>
            </div>
          )}
          {selectedReport === "totalWork" && (
            <TotalWorkReport data={dataReport} />
          )}
        </div>

        <div style={{ width: "65%" }}>
          <BarChart />
        </div>
      </div>
      {selectedReport === "late" && <LateReportTable data={lateData} />}
      {selectedReport === "absent" && <AbsentReportTable data={absentData} />}
    </Layout>
  );
};

export default ReportPage;
