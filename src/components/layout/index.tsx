import React, { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import SidebarItem from "./sidebar-item";
import IconList from "./icon-list";
import HandleLogout from "@/services/handle-logout";
import Image from "next/image";

interface Props {
  children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div className="flex">
      <div className="bg-sky-600 w-1/5 text-white h-lvh [&_i]:mr-3">
        <div className="flex p-4 [&>*]:cursor-pointer">
          <Image src={"/logo_full_white.png"} alt="" width={150} height={50} />
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
          <li className={"hover:bg-sky-800 select-none cursor-pointer"}>
            <button
              type="button"
              onClick={() => {
                HandleLogout(router);
              }}
              className="flex p-4"
            >
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
                    d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
                  />
                </svg>
              </i>
              Đăng xuất
            </button>
          </li>
        </ul>
      </div>
      <main className="w-4/5 px-10 h-lvh pt-6">{children}</main>
    </div>
  );
};

export default Layout;
