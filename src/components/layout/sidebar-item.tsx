import React from "react";

interface Props {
  title: string;
  icon: string;
}

const SidebarItem: React.FC<Props> = ({ title, icon }) => {
  return (
    <li className="hover:bg-sky-800 select-none cursor-pointer p-4">
      <a href="#" className="flex">
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
      </a>
    </li>
  );
};

export default SidebarItem;
