import { useState, useEffect, Dispatch, SetStateAction } from "react";
import CalendarCell from "./calendar-cell";
import dayjs, { Dayjs } from "dayjs";
import axiosInterceptorInstance from "@/axios/axiosInterceptorInstance";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

interface Props {
  selectedMonth: Dayjs;
  setCalendarMonth: Dispatch<SetStateAction<Dayjs>>;
}

const CustomCalendar: React.FC<Props> = ({
  selectedMonth,
  setCalendarMonth
}) => {
  const currentDate = selectedMonth;
  const [currentMonth, setCurrentMonth] = useState<number>(currentDate.month());
  const [currentYear, setCurrentYear] = useState<number>(currentDate.year());
  const [userTimeKeeping, setUserTimeKeeping] = useState([]);

  const HandleGetUserTimeKeeping = async () => {
    const user_id = JSON.parse(localStorage.getItem("user-info") || "{}").id;
    try {
      const response = await axiosInterceptorInstance
        .get(
          `/timekeeping/monthly-report/${user_id}?month=${currentMonth + 1}&year=${currentYear}`
        )
        .then((res) => res.data);
      setUserTimeKeeping(response.data.records);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    HandleGetUserTimeKeeping();
  }, [currentMonth, currentYear]);

  useEffect(() => {
    setCalendarMonth(
      dayjs(`${currentYear}-${String(currentMonth + 1).padStart(2, "0")}`)
    );
  }, [currentMonth, currentYear]);

  useEffect(() => {
    setCurrentMonth(currentDate.month());
    setCurrentYear(currentDate.year());
  }, [selectedMonth]);

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
          <div className="text-sm">
            {`${String(firstDayOfMonth).padStart(2, "0")}/${String(currentMonth + 1).padStart(2, "0")}/${currentYear} - ${String(lastDayOfMonth).padStart(2, "0")}/${String(currentMonth + 1).padStart(2, "0")}/${currentYear}`}
          </div>
        </div>
        <div className="overflow-auto">
          <div>
            <div className="flex [&>*]:flex-1 text-center w-[1500px] [&>div]:py-2 [&>div]:border-x [&>div]:border-t sticky top-0 bg-white z-[999]">
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
                week.map((day, index) => {
                  if (day) {
                    let late_time = 0;
                    let status = "";
                    let time_check_in = "";
                    let time_check_out = "";
                    userTimeKeeping.map((info) => {
                      const date = dayjs(info["date"]).date();
                      if (date === day) {
                        late_time = info["late_minutes"];
                        status = info["status"];
                        if (info["time_check_in"] && info["time_check_out"]) {
                          time_check_in = dayjs
                            .utc(info["time_check_in"])
                            .format("HH:mm");
                          time_check_out = dayjs
                            .utc(info["time_check_out"])
                            .format("HH:mm");
                        } else {
                          time_check_in = "00:00";
                          time_check_out = "00:00";
                        }
                      }
                    });
                    return (
                      <CalendarCell
                        date={dayjs(
                          new Date(currentYear, currentMonth, day)
                        ).format("DD/MM/YYYY")}
                        lateTime={late_time}
                        status={status}
                        key={index}
                        dayInMonth={day}
                        checkInAt={time_check_in}
                        checkOutAt={time_check_out}
                        month={currentMonth + 1}
                      />
                    );
                  } else {
                    return (
                      <div
                        className="w-[calc(100%/7)] py-6 border relative rounded bg-sky-100"
                        key={index}
                      ></div>
                    );
                  }
                })
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
