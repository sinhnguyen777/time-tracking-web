interface Props {
  dayInMonth: number;
  month: number;
}

const CalendarCell: React.FC<Props> = ({ dayInMonth, month }) => {
  return (
    <div className="w-[calc(100%/7)] border rounded text-sm">
      <div className="flex justify-between p-2 border-b">
        <div className="font-bold">
          {dayInMonth.toString().padStart(2, "0")}/{month}
        </div>
        <div>09:00 - 18:00</div>
      </div>
      <div className="grid grid-cols-2">
        <div className="col-start-1 font-bold text-lg border-b flex justify-center items-center py-4 px-2">
          1
        </div>
        <div className="col-start-1 py-4 px-2 flex justify-center items-center">
          Muộn: 0 phút
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
