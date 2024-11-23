import React, { Dispatch, SetStateAction } from "react";
import Popup from "..";

interface DataProps {
  late: number;
  checkin: string;
  checkout: string;
  date: string;
}

interface Props {
  title: string;
  setShowPopup: Dispatch<SetStateAction<boolean>>;
  data: DataProps;
}

const TimeKeepingDetailsPopup: React.FC<Props> = ({
  title,
  setShowPopup,
  data
}) => {
  const user_info = JSON.parse(localStorage.getItem("user-info") || "{}");
  console.log(user_info);
  return (
    <Popup title={title} setShowPopup={setShowPopup}>
      <div>
        <div className="[&_span]:font-bold p-4 pr-20">
          <div>
            <span>Ngày: {data.date}</span>
          </div>
          <div>
            <span>Họ và tên</span>: {user_info["full_name"]}
          </div>
          <div>
            <span>Mã nhân viên</span>: {user_info["code"]}
          </div>
          <div>
            <span>Vị trí</span>: {user_info["position"]}
          </div>
          <div>
            <span>Giờ check-in</span>: {data.checkin}
          </div>
          <div>
            <span>Giờ check-out</span>: {data.checkout}
          </div>
          <div>
            <span>Số phút trễ</span>: {data.late}
          </div>
        </div>
        <div className="px-4 pb-4">
          <button
            type="button"
            onClick={() => setShowPopup(false)}
            className="bg-sky-600 text-white w-full py-2 rounded-md"
          >
            OK
          </button>
        </div>
      </div>
    </Popup>
  );
};

export default TimeKeepingDetailsPopup;
