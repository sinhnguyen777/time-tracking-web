import React, { Dispatch, SetStateAction, useState, useEffect } from "react";
import Router from "next/router";
import { Button, Form, Input, Space } from "antd";
import dayjs, { Dayjs } from "dayjs";
import Popup from "..";
import CameraInput from "./camera";
import HandleCheckin from "@/services/handle-checkin";
import HandleCheckout from "@/services/handle-checkout";

interface Props {
  title: string;
  setShowPopup: Dispatch<SetStateAction<boolean>>;
}

const layout = {
  wrapperCol: {
    span: 24
  }
};

const TimeKeepingPopup: React.FC<Props> = ({ title, setShowPopup }) => {
  const [currentTime, setCurrentTime] = useState<Dayjs>(dayjs());
  const [form] = Form.useForm();

  const Checkin = () => {
    form.validateFields().then(async () => {
      await HandleCheckin();
      setShowPopup(false);
      Router.reload();
    });
  };

  const Checkout = () => {
    form.validateFields().then(async () => {
      await HandleCheckout();
      setShowPopup(false);
      Router.reload();
    });
  };

  const dateFormat = "DD/MM/YYYY HH:mm:ss";

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setCurrentTime(dayjs());
    }, 1000);

    return () => clearInterval(timeInterval);
  }, []);

  const initialValue = {
    check_at: currentTime.format(dateFormat)
  };

  useEffect(() => {
    form.setFieldsValue({ check_at: currentTime.format(dateFormat) });
  }, [currentTime]);

  return (
    <Popup title={title} setShowPopup={setShowPopup}>
      <div>
        <Form
          {...layout}
          form={form}
          name="control-hooks"
          initialValues={initialValue}
          className="pt-6 px-10"
        >
          <div>
            <Form.Item
              name="camera"
              valuePropName="value"
              getValueFromEvent={(value) => value}
              className="[&_.ant-form-item-explain-error]:flex [&_.ant-form-item-explain-error]:justify-center"
              rules={[
                {
                  required: true,
                  message: "Bạn phải chụp ảnh"
                }
              ]}
            >
              <CameraInput />
            </Form.Item>
            <Form.Item
              name="check_at"
              label="Ngày chấm công"
              rules={[
                {
                  required: true
                }
              ]}
            >
              <Input disabled />
            </Form.Item>
          </div>
          <Form.Item>
            <Space className="justify-center w-full">
              <Button type="primary" onClick={Checkin} htmlType="button">
                Check-in
              </Button>
              <Button type="primary" onClick={Checkout} htmlType="button">
                Check-out
              </Button>
              <Button
                htmlType="button"
                onClick={() => setShowPopup(false)}
                className="text-red-500 border-red-500"
              >
                Hủy
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </Popup>
  );
};

export default TimeKeepingPopup;
