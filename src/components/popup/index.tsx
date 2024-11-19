import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  title: string;
}

const Popup: React.FC<Props> = ({ children, title }) => {
  return (
    <div className="absolute w-full h-full top-0 left-0 bg-slate-700 bg-opacity-50">
      <div className="w-fit shadow rounded-md absolute top-1/2 left-1/2 bg-white -translate-x-1/2 -translate-y-1/2">
        <div className="p-4 rounded-t-md font-bold flex bg-sky-600 text-white justify-between items-center">
          <div>{title}</div>
          <div>
            <button className="flex items-center">
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
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Popup;
