import React from "react";
import { Button, Form, Input, Select, Space } from "antd";
const { Option } = Select;
import Popup from "..";
import Password from "antd/es/input/Password";

interface Props {
  title: string;
}

const layout = {
  wrapperCol: {
    span: 28
  }
};
const tailLayout = {
  wrapperCol: {
    span: 28
  }
};

const AccountPopup: React.FC<Props> = ({ title }) => {
  const [form] = Form.useForm();

  const onFinish = (values: unknown) => {
    console.log(values);
  };
  const onReset = () => {
    form.resetFields();
  };

  return (
    <Popup title={title}>
      <div>
        <Form
          {...layout}
          form={form}
          name="control-hooks"
          onFinish={onFinish}
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
              name="Code"
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
              name="Creator"
              label="Người tạo"
              rules={[
                {
                  required: true
                }
              ]}
            >
              <Input disabled defaultValue="Lê Hoàng Vũ" />
            </Form.Item>
            <Form.Item
              name="Position"
              label="Vị trí"
              rules={[
                {
                  required: true
                }
              ]}
            >
              <Select placeholder="Chọn vị trí" allowClear>
                <Option value="code1">Tester</Option>
                <Option value="code2">Developer</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="username"
              label="Username"
              rules={[
                {
                  required: true
                }
              ]}
            >
              <Input placeholder="Nhập Username" />
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
              <Button htmlType="button" className="bg-red-500 text-white">
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
