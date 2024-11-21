import Layout from "@/components/layout";
import Menu from "@/components/layout/menu";
import { Button, Form, Input, Space, TimePicker } from "antd";
import dayjs from "dayjs";

const layout = {
  wrapperCol: {
    span: 10
  },
  labelCol: {
    span: 10
  }
};

const tailLayout = {
  wrapperCol: {
    span: 24
  }
};

const TimeTrackingManagement = () => {
  const [form] = Form.useForm();

  const onFinish = (values: object) => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  const timeFormat = "HH:mm";

  const initialValues = {
    "annual-leave": 12,
    "worked-adequate": 1,
    "worked-short": 1,
    "worked-overtime": 1.5,
    "worked-compensate": 1,
    "workday-status": "Đi sớm",
    "check-in-time": dayjs("8:30", timeFormat),
    "check-out-time": dayjs("17:30", timeFormat),
    "leave-with-salary": 1
  };
  return (
    <Layout>
      <Menu title="Thiết lập chấm công" />
      <div className="bg-blue-50 pb-1">
        <Form
          {...layout}
          form={form}
          name="control-hooks"
          onFinish={onFinish}
          initialValues={initialValues}
          className="pt-6 px-10"
        >
          <div className="[&>*]:mb-4">
            <Form.Item
              name="annual-leave"
              label="Ngày nghỉ phép thâm niên trong năm"
              rules={[
                {
                  required: true,
                  message: "Không được để trống mục này."
                }
              ]}
            >
              <Input placeholder="Nhập số ngày nghỉ phép thâm niên trong năm" />
            </Form.Item>
            <Form.Item
              name="worked-adequate"
              label="Số công làm đủ 8 giờ/ngày"
              rules={[
                {
                  required: true,
                  message: "Không được để trống mục này."
                }
              ]}
            >
              <Input placeholder="Nhập số công làm đủ 8 giờ/ngày" />
            </Form.Item>
            <Form.Item
              name="worked-short"
              label="Số công làm không đủ 8 giờ/ngày"
              rules={[
                {
                  required: true,
                  message: "Không được để trống mục này."
                }
              ]}
            >
              <Input
                placeholder="Nhập số công làm không đủ 8 giờ/ngày"
                addonAfter="/ 8 * số giờ làm"
              />
            </Form.Item>
            <Form.Item
              name="worked-overtime"
              label="Số công tăng ca"
              rules={[
                {
                  required: true,
                  message: "Không được để trống mục này."
                }
              ]}
            >
              <Input
                placeholder="Nhập số công tăng ca"
                addonAfter="/ 8 * số giờ tăng ca"
              />
            </Form.Item>
            <Form.Item
              name="worked-compensate"
              label="Số công làm bù"
              rules={[
                {
                  required: true,
                  message: "Không được để trống mục này."
                }
              ]}
            >
              <Input
                placeholder="Nhập số công làm bù"
                addonAfter="/ 8 * số giờ làm bù"
              />
            </Form.Item>
            {/* <Form.Item
                            name="workday-status"
                            label="Trạng thái ngày công"
                            rules={[
                                {
                                    required: true,
                                    message: "Không được để trống mục này."
                                }
                            ]}
                        >
                            <Input placeholder="Nhập danh sách các trạng thái" />
                        </Form.Item> */}
            <Form.Item
              name="check-in-time"
              label="Giờ check-in quy định"
              rules={[
                {
                  required: true,
                  message: "Không được để trống mục này."
                }
              ]}
            >
              <TimePicker
                placeholder="Chọn giờ check-in quy định"
                format={timeFormat}
              />
            </Form.Item>
            <Form.Item
              name="check-out-time"
              label="Giờ check-out quy định"
              rules={[
                {
                  required: true,
                  message: "Không được để trống mục này."
                }
              ]}
            >
              <TimePicker
                placeholder="Chọn giờ check-out quy định"
                format={timeFormat}
              />
            </Form.Item>
            <Form.Item
              name="leave-with-salary"
              label="Số ngày nghỉ phép có lương trong tháng"
              rules={[
                {
                  required: true,
                  message: "Không được để trống mục này."
                }
              ]}
            >
              <Input placeholder="Nhập số ngày nghỉ phép có lương trong tháng" />
            </Form.Item>
          </div>
          <Form.Item {...tailLayout}>
            <Space className="justify-around w-full [&>*]:w-1/4">
              <Button type="primary" htmlType="submit" className="w-full">
                Lưu
              </Button>
              <Button
                htmlType="button"
                className="text-red-500 border-red-500 w-full"
                onClick={onReset}
              >
                Hủy bỏ
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </Layout>
  );
};

export default TimeTrackingManagement;
