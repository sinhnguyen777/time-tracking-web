import React from "react";
import { Button, Form, Input, Space } from "antd";
import dayjs from "dayjs";
import Popup from "..";

interface Props {
  title: string;
}

const layout = {
  wrapperCol: {
    span: 28
  }
};

const TimeKeepingPopup: React.FC<Props> = ({ title }) => {
  const [form] = Form.useForm();

  const onFinish = (values: object) => {
    console.log(values);
  };

  const dateFormat = "DD/MM/YYYY HH:mm:ss";

  const initialValue = {
    check_at: dayjs().format(dateFormat)
  };

  return (
    <Popup title={title}>
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
              <Button htmlType="button" className="text-red-500 border-red-500">
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
