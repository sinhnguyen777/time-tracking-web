import React from "react";
import { totalWorkReportData } from "./report-data";

const TotalWorkReport = () => {
  const data = totalWorkReportData;

  return (
    <div style={{ margin: "20px", fontSize: "16px", lineHeight: "24px" }}>
      <p>
        <strong>Mã NV:</strong> {data.maNV}
      </p>
      <p>
        <strong>Họ và tên:</strong> {data.hoTen}
      </p>
      <p>
        <strong>Vị trí:</strong> {data.viTri}
      </p>
      <p>
        <strong>Công tiêu chuẩn:</strong> {data.congTieuChuan}
      </p>
      <p>
        <strong>Công thực tế:</strong> {data.congThucTe}
      </p>
      <p>
        <strong>Số ngày phép đến tháng 2:</strong> {data.phepDenThang2}
      </p>
      <p>
        <strong>Số ngày phép tháng 3 sử dụng:</strong> {data.phepThang3}
      </p>
      <p>
        <strong>Số ngày phép còn lại:</strong> {data.phepConLai}
      </p>
      <p>
        <strong>Tăng ca:</strong> {data.tangCa}
      </p>
      <p>
        <strong>Làm bù:</strong> {data.lamBu}
      </p>
      <p>
        <strong>Nghỉ phép:</strong> {data.nghiPhep}
      </p>
      <p className="pb-3">
        <strong>Nghỉ không phép:</strong> {data.nghiKhongPhep}
      </p>
      <hr />
      <p style={{ fontWeight: "bold", color: "red" }} className="pt-3">
        <strong>Tổng công:</strong> {data.tongCong}
      </p>
    </div>
  );
};

export default TotalWorkReport;
