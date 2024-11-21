import React, { Dispatch, SetStateAction } from "react";
import { Button, Form, Input, Space } from "antd";
import Popup from "..";
import Password from "antd/es/input/Password";

interface Props {
  title: string;
  setShowPopup: Dispatch<SetStateAction<boolean>>;
  data: any;
}

const layout = {
  wrapperCol: {
    span: 24
  }
};
const tailLayout = {
  wrapperCol: {
    span: 24
  }
};

const AccountPopup: React.FC<Props> = ({ title, setShowPopup, data }) => {
  const [form] = Form.useForm();

  const onFinish = (values: unknown) => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  const initialValues = {
    fullname: data.full_name,
    code: data.code,
    email: data.email,
    position: data.position
  };

  return (
    <Popup title={title} setShowPopup={setShowPopup}>
      <div>
        <Form
          {...layout}
          form={form}
          name="control-hooks"
          onFinish={onFinish}
          initialValues={initialValues}
          className="pt-6 px-10"
        >
          <div className="flex flex-wrap [&>*]:w-1/2 [&>*]:px-4">
            <Form.Item
              name="fullname"
              label="Họ và tên"
              rules={[
                {
                  required: true
                }
              ]}
            >
              <Input placeholder="Nhập họ và tên nhân viên" />
            </Form.Item>
            <Form.Item
              name="code"
              label="Mã nhân viên"
              rules={[
                {
                  required: true
                }
              ]}
            >
              <Input placeholder="Nhập mã nhân viên" />
            </Form.Item>
            <Form.Item
              name="position"
              label="Vị trí"
              rules={[
                {
                  required: true
                }
              ]}
            >
              <Input placeholder="Nhập vị trí" />
            </Form.Item>
            <Form.Item
              name="email"
              label="Email"
              rules={[
                {
                  required: true
                }
              ]}
            >
              <Input placeholder="Nhập Email" />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true
                }
              ]}
            >
              <Password placeholder="Nhập Password" />
            </Form.Item>
            <Form.Item
              name="confirm-password"
              label="Confirm Password"
              rules={[
                {
                  required: true
                }
              ]}
            >
              <Password placeholder="Nhập lại Password" />
            </Form.Item>
          </div>
          <Form.Item {...tailLayout}>
            <Space className="justify-center w-full">
              <Button type="primary" htmlType="submit">
                Lưu
              </Button>
              <Button
                htmlType="button"
                onClick={() => setShowPopup(false)}
                className="text-red-500 border-red-500"
              >
                Hủy bỏ
              </Button>
              <Button htmlType="button" onClick={onReset}>
                Reset thông tin
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </Popup>
  );
};

export default AccountPopup;
