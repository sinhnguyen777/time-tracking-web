import React from "react";
import Popup from "..";

interface Props {
  title: string;
}

const TimeKeepingDetailsPopup: React.FC<Props> = ({ title }) => {
  return (
    <Popup title={title}>
      <div>
        <div className="[&_span]:font-bold p-4 pr-20">
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
    </Popup>
  );
};

export default TimeKeepingDetailsPopup;
