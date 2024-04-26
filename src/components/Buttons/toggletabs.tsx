import React from "react";

interface ToggleTabsProps {
  tabs: Tab[];
  activeTab: string;
  setActiveTab: (tabName: string) => void;
}

export const ToggleTabs: React.FC<ToggleTabsProps> = ({
  tabs,
  activeTab,
  setActiveTab,
}) => {
  return (
    <div className=" flex-1 flex justify-center items-center h-[62px] md:w-[429px] w-[357px] border-2 border-mygray-50 bg-mygray-60 rounded-xl mx-1 p-2">
      <div className="flex w-full justify-between">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`flex-1 flex justify-center items-center px-4 font-medium text-[22.86] py-2 rounded-md md:px-6  ${
              activeTab === tab.name
                ? "bg-white shadow-md"
                : "text-mygray-80 bg-transparent"
            } focus:outline-none`}
          >
            {tab.name}
          </button>
        ))}
      </div>
    </div>
  );
};
