import SidebarItem from "./sidebar-item";
import IconList from "./icon-list";

const Sidebar = () => {
  return (
    <div className="bg-sky-600 w-1/5 text-white h-lvh [&_i]:mr-3">
      <div className="flex p-4 [&>*]:cursor-pointer">
        <i>
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
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </i>
        <div>Logo</div>
      </div>
      <ul className="">
        <SidebarItem title="Tổng quan" icon={IconList.Home} />
        <SidebarItem title="Quản lý tài khoản" icon={IconList.User} />
        <SidebarItem title="Quản lý chấm công" icon={IconList.Clock} />
        <SidebarItem title="Quản lý đơn từ" icon={IconList.Calendar} />
        <SidebarItem title="Báo cáo thống kê" icon={IconList.Statistic} />
        <SidebarItem title="Đăng xuất" icon={IconList.LogOut} />
      </ul>
    </div>
  );
};

export default Sidebar;
