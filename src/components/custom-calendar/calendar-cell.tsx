interface Props {
  dayInMonth: number;
  month: number;
  lateTime: number;
  status: string;
  checkInAt: string;
  checkOutAt: string;
}

const CalendarCell: React.FC<Props> = ({
  dayInMonth,
  month,
  lateTime,
  status,
  checkInAt,
  checkOutAt
}) => {
  return (
    <div
      className={`w-[calc(100%/7)] border rounded text-sm 
      ${(status === "late" || status === "early") && "calendar-cell-late"} 
      ${status === "working" && "calendar-cell-working"}
      ${status === "leave" && "calendar-cell-leave"}}`}
    >
      <div className="flex justify-between p-2 border-b calendar-cell-title">
        <div className="font-bold">
          {dayInMonth.toString().padStart(2, "0")}/{month}
        </div>
        <div>
          {checkInAt} - {checkOutAt}
        </div>
      </div>
      <div className="grid grid-cols-2 calendar-cell-body h-36">
        <div className="col-start-1 font-bold text-lg border-b flex justify-center items-center py-4 px-2">
          1
        </div>
        <div className="col-start-1 py-4 px-2 flex justify-center items-center text-center">
          {status === "early" ? "Về sớm" : "Muộn"}: {lateTime} phút
        </div>
        <div className="col-start-2 row-start-1 row-span-2 border-l p-2">
          <div>09:00 - 12:00</div>
          <div>13:00 - 18:00</div>
        </div>
      </div>
    </div>
  );
};

export default CalendarCell;
