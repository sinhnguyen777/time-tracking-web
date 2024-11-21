import React from "react";
import { Calendar, ConfigProvider } from "antd";
import locale from "antd/locale/vi_VN";
import dayjs from "dayjs";

import "dayjs/locale/vi";
dayjs.locale("vi");
const AppCalendar: React.FC = () => {
  const dateCellRender = (value: any) => {
    const day = value.date();
    return (
      <div style={{ position: "relative" }}>
        {day % 2 === 0 && (
          <div
            style={{
              position: "absolute",
              top: 20,
              left: 0,
              right: 0,
              margin: "0 auto",
              textAlign: "center"
            }}
          >
            <div>test</div>
          </div>
        )}
      </div>
    );
  };
  return (
    <ConfigProvider locale={locale}>
      <Calendar cellRender={dateCellRender} />
    </ConfigProvider>
  );
};

export default AppCalendar;
