import { useState } from "react";
import CalendarCell from "./calendar-cell";

const CustomCalendar = () => {
  const currentDate = new Date();
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());

  const getMonthData = (year: number, month: number) => {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const startDay = new Date(year, month, 1).getDay();

    const calendar: (number | null)[][] = [];
    let week: (number | null)[] = [];

    for (let i = 0; i < startDay; i++) {
      week.push(null);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      week.push(day);
      if (week.length === 7) {
        calendar.push(week);
        week = [];
      }
    }

    if (week.length) {
      while (week.length < 7) {
        week.push(null);
      }
      calendar.push(week);
    }

    return calendar;
  };
  const RenderCalendar = () => {
    const monthData = getMonthData(currentYear, currentMonth);
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDate();
    const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const HandleChangeMonthLeft = () => {
      setCurrentMonth((prev) => prev - 1);
      if (currentMonth < 1) {
        setCurrentYear((prev) => prev - 1);
        setCurrentMonth(11);
      }
    };

    const HandleChangeMonthRight = () => {
      setCurrentMonth((prev) => prev + 1);
      if (currentMonth > 10) {
        setCurrentYear((prev) => prev + 1);
        setCurrentMonth(0);
      }
    };

    return (
      <>
        <div className="text-center pb-2">
          <div className="font-bold text-xl flex justify-center items-center [&>*]:mx-2">
            <button
              type="button"
              onClick={HandleChangeMonthLeft}
              className="scale-75"
            >
              <i>
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
                    d="M15.75 19.5 8.25 12l7.5-7.5"
                  />
                </svg>
              </i>
            </button>
            {`T${currentMonth + 1}/${currentYear}`}
            <button
              type="button"
              onClick={HandleChangeMonthRight}
              className="scale-75"
            >
              <i>
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
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </i>
            </button>
          </div>
          <div className="text-sm">{`${firstDayOfMonth}/${currentMonth + 1}/${currentYear} - ${lastDayOfMonth}/${currentMonth + 1}/${currentYear}`}</div>
        </div>
        <div className="overflow-auto">
          <div>
            <div className="flex [&>*]:flex-1 text-center w-[1500px] [&>div]:py-2 [&>div]:border-x [&>div]:border-t">
              <div>Chủ nhật</div>
              <div>Thứ hai</div>
              <div>Thứ ba</div>
              <div>Thứ tư</div>
              <div>Thứ năm</div>
              <div>Thứ sáu</div>
              <div>Thứ bảy</div>
            </div>
            <div className="flex flex-wrap w-[1500px]">
              {monthData.map((week) =>
                week.map((day, index) =>
                  day ? (
                    <CalendarCell
                      key={index}
                      dayInMonth={day}
                      month={currentMonth + 1}
                    />
                  ) : (
                    <div
                      className="w-[calc(100%/7)] py-6 border relative rounded bg-sky-100"
                      key={index}
                    ></div>
                  )
                )
              )}
            </div>
          </div>
        </div>
      </>
    );
  };
  return <RenderCalendar />;
};

export default CustomCalendar;
