import React from "react";
import { Button, DatePicker, Form, Input, Select, Space } from "antd";
import dayjs from "dayjs";
const { Option } = Select;
import Popup from "..";

interface Props {
  title: string;
  isFormEditable: boolean;
}

const layout = {
  wrapperCol: {
    span: 28,
  },
};
const tailLayout = {
  wrapperCol: {
    span: 28,
  },
};

const CreateRequestPopup: React.FC<Props> = ({ title, isFormEditable }) => {
  const [form] = Form.useForm();

  const onFinish = (values: object) => {
    console.log(values);
  };
  const onReset = () => {
    form.resetFields();
  };

  const dateFormat = "DD/MM/YYYY";

  return (
    <Popup title={title}>
      <div>
        <Form {...layout} form={form} name="control-hooks" onFinish={onFinish} className="pt-6 px-10">
          <div className="flex flex-wrap [&>*]:w-1/2 [&>*]:px-4">
            {/* <Form.Item
                            name="fullname"
                            label="Họ và tên"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input placeholder="Nhập họ và tên nhân viên" />
                        </Form.Item> */}
            <Form.Item
              name="request-type"
              label="Loại đơn"
              rules={[
                {
                  required: true,
                  message: "Không được để trống loại đơn.",
                },
              ]}
            >
              <Select placeholder="Chọn loại đơn" allowClear>
                <Option value="code1">Đơn tăng ca</Option>
                <Option value="code2">Đơn xin nghỉ</Option>
              </Select>
            </Form.Item>
            <Form.Item name="request-title" label="Tiêu đề đơn">
              <Input placeholder="Nhập tiêu đề đơn" />
            </Form.Item>
            <Form.Item
              name="reviewer"
              label="Người duyệt"
              rules={[
                {
                  required: true,
                  message: "Không được để trống người duyệt.",
                },
              ]}
            >
              <Input placeholder="Chọn người duyệt" />
            </Form.Item>
            <Form.Item
              name="related"
              label="Người liên quan"
              rules={[
                {
                  required: true,
                  message: "Không được để trống người liên quan.",
                },
              ]}
            >
              <Input placeholder="Chọn người liên quan" />
            </Form.Item>
            <Form.Item
              name="request_start_at"
              label="Từ ngày"
              rules={[
                {
                  required: true,
                  message: "Không được để trống ngày.",
                },
              ]}
            >
              <DatePicker defaultValue={dayjs()} format={dateFormat} />
            </Form.Item>
            <Form.Item
              name="request_end_at"
              label="Đến ngày"
              rules={[
                {
                  required: true,
                  message: "Không được để trống ngày.",
                },
              ]}
            >
              <DatePicker defaultValue={dayjs()} format={dateFormat} />
            </Form.Item>
            <Form.Item name="request-note" label="Ghi chú">
              <Input placeholder="Nhập ghi chú" />
            </Form.Item>
            {isFormEditable && (
              <Form.Item name="request-status" label="Trạng thái">
                <Input defaultValue="Wait" />
              </Form.Item>
            )}
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

export default CreateRequestPopup;
