import { useEffect, useState } from "react";
import Layout from "@/components/layout";
import Menu from "@/components/layout/menu";
import axiosInterceptorInstance from "@/axios/axiosInterceptorInstance";
// import Calendar from "@/components/calendar";
import TimeKeepingPopup from "@/components/popup/timekeeping-popup";
import { Button } from "antd";
// import AccountPopup from "@/components/popup/account-popup";
// import ConfirmationPopup from "@/components/popup/confirmation-popup";
// import CreateRequestPopup from "@/components/popup/create-request-popup";
// import TimeKeepingDetailsPopup from "@/components/popup/timekeeping-details-popup";
// import BarChart from "@/components/chart";

const Test = () => {
  const [showPopup, setShowPopup] = useState(false);

  const getData = async () => {
    try {
      const response = await axiosInterceptorInstance.get("/users"); // Replace with your API endpoint
      // Handle the response data here
      console.log(response.data);
    } catch (error) {
      // Handle the error here
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Layout>
      <Menu title="Tổng quan" />
      <div>
        <div className="flex justify-center items-center">
          <div className="flex flex-1 mr-10 border">
            <div className="flex-1">
              <input
                type="text"
                className="w-full outline-none py-2 pl-2"
                placeholder="Tìm kiếm ngày chấm công"
              />
            </div>
            <button className="flex justify-center items-center p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>
          </div>
          <div>
            <Button
              type="primary"
              htmlType="button"
              className="py-5 text-base"
              onClick={() => setShowPopup(true)}
            >
              Chấm công
            </Button>
          </div>
        </div>
        {/* <Calendar /> */}
        {/* <TimeKeepingDetailsPopup title="Chi tiết chấm công" /> */}
        {/* <ConfirmationPopup title="Xóa tài khoản" name="đạt" /> */}
        {/* <AccountPopup title="Tạo mới tài khoản" /> */}
        {/* <CreateRequestPopup title="Tạo mới đơn từ" isFormEditable={false} /> */}
        {/* <CreateRequestPopup title="Chi tiết đơn từ" isFormEditable={true} /> */}
        {showPopup && (
          <TimeKeepingPopup
            title="Chấm công trên web"
            setShowPopup={setShowPopup}
          />
        )}
        {/* <BarChart /> */}
      </div>
    </Layout>
  );
};

export default Test;
