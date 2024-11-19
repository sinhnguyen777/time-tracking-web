const TimeKeepingDetails = () => {
  return (
    <div className="absolute w-full h-full top-0 left-0 bg-slate-700 bg-opacity-50">
      <div className="w-1/4 shadow rounded-md absolute top-1/2 left-1/2 bg-white -translate-x-1/2 -translate-y-1/2">
        <div className="p-4 rounded-t-md font-bold flex bg-sky-600 text-white justify-between items-center">
          <div>Chi tiết chấm công</div>
          <div>
            <button className="flex items-center">
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
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="[&_span]:font-bold p-4">
          <div>
            <span>Ngày: 11/11/2011</span>
          </div>
          <div>
            <span>Họ và tên</span>: Chí Phèo
          </div>
          <div>
            <span>Mã nhân viên</span>: E001
          </div>
          <div>
            <span>Vị trí</span>: Developer
          </div>
          <div>
            <span>Giờ check-in</span>: 8:00
          </div>
          <div>
            <span>Giờ check-out</span>: 17:00
          </div>
          <div>
            <span>Tổng giờ làm</span>: 8 giờ
          </div>
          <div>
            <span>Công ngày</span>: 1
          </div>
        </div>
        <div className="px-4 pb-4">
          <button type="button" className="bg-sky-600 text-white w-full py-2">
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default TimeKeepingDetails;
