import React from 'react';

interface ToggleTabsProps {
  tabs: Tab[];
  activeTab: string;
  setActiveTab: (tabName: string) => void;
}

export const ToggleTabs: React.FC<ToggleTabsProps> = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <div className=" flex justify-center items-center h-[62px] w-[384px] border-2 border-mygray-50 bg-mygray-60 rounded-xl p-1">
      {tabs.map((tab) => (
        <button
          key={tab.name}
          onClick={() => setActiveTab(tab.name)}
          className={`px-4 py-2 rounded-md h-[42.12px] w-[119.29px] ${
            activeTab === tab.name ? 'bg-white shadow-md' : 'text-gray-500 bg-transparent'
          } focus:outline-none`}
        >
          {tab.name}
        </button>
      ))}
    </div>
  );
};
