import React from "react";
import { Calendar, ConfigProvider } from "antd";
import locale from "antd/locale/vi_VN";
import dayjs from "dayjs";

import "dayjs/locale/vi";
dayjs.locale("vi");
const AppCalendar: React.FC = () => {
  return (
    <ConfigProvider locale={locale}>
      <Calendar />
    </ConfigProvider>
  );
};

export default AppCalendar;
