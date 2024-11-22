import React, { useState } from "react";
import Layout from "@/components/layout";
// import Menu from "@/components/layout/menu";
import CustomCalendar from "@/components/custom-calendar";
import TimeKeepingPopup from "@/components/popup/timekeeping-popup";
import { Button, DatePicker } from "antd";
import locale from "antd/es/date-picker/locale/vi_VN";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/vi";
dayjs.locale("vi");
// import BarChart from "@/components/chart";

const Test = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [CalendarMonth, setCalendarMonth] = useState<Dayjs>(dayjs());

  const onSelectMonth = (date: Dayjs) => {
    setCalendarMonth(date);
  };

  return (
    <Layout>
      <div className="flex flex-col h-full">
        <div className="flex justify-end items-center mb-4">
          {/* <div className="flex flex-1 border mr-4">
            <div className="flex-1">
              <input
                type="text"
                className="w-full outline-none py-2 pl-2"
                placeholder="Tìm kiếm ngày chấm công"
              />
            </div>
            <button className="flex justify-center items-center p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>
          </div> */}
          <div className="mr-4">
            <DatePicker
              picker="month"
              value={CalendarMonth}
              defaultValue={CalendarMonth}
              locale={locale}
              onChange={onSelectMonth}
              allowClear={false}
            />
          </div>
          <div>
            <Button
              type="primary"
              htmlType="button"
              className="py-5 text-base"
              onClick={() => setShowPopup(true)}
            >
              Chấm công
            </Button>
          </div>
        </div>
        <CustomCalendar
          selectedMonth={CalendarMonth}
          setCalendarMonth={setCalendarMonth}
        />
        {showPopup && (
          <TimeKeepingPopup
            title="Chấm công trên web"
            setShowPopup={setShowPopup}
          />
        )}
        {/* <BarChart /> */}
      </div>
    </Layout>
  );
};

export default Test;
