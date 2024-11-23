import Link from "next/link";
import React from "react";

interface Props {
  title: string;
  icon: string;
  link: string;
  active: boolean;
}

const SidebarItem: React.FC<Props> = ({ title, icon, link, active }) => {
  return (
    <li
      className={`hover:bg-sky-800 select-none cursor-pointer ${active && "bg-sky-800"}`}
    >
      <Link href={link} className="flex p-4">
        <i>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
          </svg>
        </i>
        {title}
      </Link>
    </li>
  );
};

export default SidebarItem;
