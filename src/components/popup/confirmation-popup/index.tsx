import React, { Dispatch, SetStateAction } from "react";
import { Button } from "antd";
import Popup from "..";

interface Props {
  title: string;
  name: string;
  setShowPopup: Dispatch<SetStateAction<boolean>>;
}

const ConfirmationPopup: React.FC<Props> = ({ title, name, setShowPopup }) => {
  return (
    <Popup title={title} setShowPopup={setShowPopup}>
      <div className="py-4 px-10">
        <div className="font-bold">
          Bạn chắc chắn muốn {title.toLowerCase()}{" "}
          <span className="text-red-500">{name}</span>?
        </div>
        <div className=" flex justify-between mt-4">
          <Button type="primary" htmlType="button">
            Xác nhận
          </Button>
          <Button
            onClick={() => setShowPopup(false)}
            htmlType="button"
            className="text-red-500 border-red-500"
          >
            Hủy bỏ
          </Button>
        </div>
      </div>
    </Popup>
  );
};

export default ConfirmationPopup;
