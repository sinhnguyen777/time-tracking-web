import Calendar from "@/components/calendar";
import Layout from "@/components/layout";
import Menu from "@/components/layout/menu";
import TimeKeepingDetails from "@/components/popup/calendar-popup";

const Test = () => {
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
          <div className="font-bold">
            <button
              type="button"
              className="flex bg-sky-500 text-white rounded-md px-4 py-2"
            >
              <i className="mr-1">
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
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                  />
                </svg>
              </i>
              Chọn tháng
            </button>
          </div>
        </div>
        <Calendar />
        <TimeKeepingDetails />
      </div>
    </Layout>
  );
};

export default Test;
