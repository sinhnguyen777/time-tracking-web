import { Typography } from "antd";
import dayjs from "dayjs";
import React from "react";

interface TotalWorkReportProps {
  data: any;
}

const TotalWorkReport: React.FC<TotalWorkReportProps> = ({ data }) => {
  return (
    <>
      <div style={{ margin: "20px" }}>
        <Typography.Title level={4}>
          Báo cáo tổng số công tháng {dayjs().month() + 1}
        </Typography.Title>
      </div>
      <div style={{ margin: "20px", fontSize: "16px", lineHeight: "24px" }}>
        <p>
          <strong>Mã NV:</strong> {data.code}
        </p>
        <p>
          <strong>Họ và tên:</strong> {data.name}
        </p>
        <p>
          <strong>Vị trí:</strong> {data.position}
        </p>
        <p>
          <strong>Công tiêu chuẩn:</strong> {data.standardWorkDays}
        </p>
        <p>
          <strong>Tổng số ngày làm việc:</strong> {data.totalWorkingDays}
        </p>
        <p>
          <strong>Tổng số ngày đi trễ:</strong> {data.totalLateDays}
        </p>
        <p>
          <strong>Tổng số ngày nghỉ:</strong> {data.totalAbsentDays}
        </p>
        <p>
          <strong>Tổng số phút trễ:</strong> {data.totalLateMinutes}
        </p>

        <hr />
        <p style={{ fontWeight: "bold", color: "red" }} className="pt-3">
          <strong>Tổng công:</strong> {data.totalDays}
        </p>
      </div>
    </>
  );
};

export default TotalWorkReport;
