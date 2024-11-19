import React from "react";
import Popup from "..";

interface Props {
  title: string;
  name: string;
}

const ConfirmationPopup: React.FC<Props> = ({ title, name }) => {
  return (
    <Popup title={title}>
      <div className="py-4 px-10">
        <div className="font-bold">
          Bạn chắc chắn muốn {title.toLowerCase()} <span className="text-red-500">{name}</span>?
        </div>
        <div className=" flex justify-between mt-4">
          <button type="button" className="bg-sky-600 text-white px-4 py-2">
            Xác nhận
          </button>
          <button type="button" className="bg-slate-400 text-white px-4 py-2">
            Hủy bỏ
          </button>
        </div>
      </div>
    </Popup>
  );
};

export default ConfirmationPopup;
