import React, { Dispatch, SetStateAction } from "react";
import { Button, Form, Input, Space } from "antd";
import dayjs from "dayjs";
import Popup from "..";
import CameraInput from "./camera";

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
  const [form] = Form.useForm();

  const onFinish = (values: object) => {
    console.log(values);
  };

  const dateFormat = "DD/MM/YYYY HH:mm:ss";

  const initialValue = {
    check_at: dayjs().format(dateFormat)
  };

  return (
    <Popup title={title} setShowPopup={setShowPopup}>
      <div>
        <Form
          {...layout}
          form={form}
          name="control-hooks"
          onFinish={onFinish}
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
              <Button type="primary" htmlType="submit">
                Chấm công
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
