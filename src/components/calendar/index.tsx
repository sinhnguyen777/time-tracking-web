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
          <div className="absolute top-5 left-0 right-0 mx-auto my-0, text-center">
            <div className="font-bold text-base">1</div>
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
