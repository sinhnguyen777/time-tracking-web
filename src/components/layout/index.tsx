import React, { ReactNode } from "react";
import { usePathname } from "next/navigation";
import SidebarItem from "./sidebar-item";
import IconList from "./icon-list";

interface Props {
  children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  const pathname = usePathname();
  return (
    <div className="flex">
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
        <ul>
          {IconList.map((item, index) => {
            const is_active = item.link === pathname ? true : false;
            return (
              <SidebarItem
                title={item.title}
                icon={item.icon}
                link={item.link}
                active={is_active}
                key={index}
              />
            );
          })}
        </ul>
      </div>
      <main className="w-4/5 px-10">{children}</main>
    </div>
  );
};

export default Layout;
