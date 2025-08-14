import { useEffect, useRef, useState } from "react";
import "./BaseTabs.css";

interface BaseTab {
  label: string;
  key: string;
}

interface BaseTabsProps {
  tabs: BaseTab[];
  activeTab: string;
  onTabChange: (tabKey: string) => void;
  tabWrapperRef: React.RefObject<HTMLDivElement | null>;
  tabContainerRef: React.RefObject<HTMLDivElement | null>;
}

const BaseTabs = ({
  tabs,
  activeTab,
  onTabChange,
  tabWrapperRef,
  tabContainerRef,
}: BaseTabsProps) => {
  const tabButtonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const updateIndicator = () => {
      const activeIndex = tabs.findIndex((tab) => tab.key === activeTab);
      const activeBtn = tabButtonRefs.current[activeIndex];

      if (activeBtn) {
        setIndicatorStyle({
          left: activeBtn.offsetLeft,
          width: activeBtn.offsetWidth,
        });
      }
    };

    updateIndicator();
    window.addEventListener("resize", updateIndicator);

    return () => window.removeEventListener("resize", updateIndicator);
  }, [activeTab, tabs]);

  return (
    <div className="base-tabs glass-effect" ref={tabContainerRef}>
      <div className="base-tab-btn-wrapper" ref={tabWrapperRef}>
        <div
          className="base-tab-indicator-pill glass-effect"
          style={{
            left: indicatorStyle.left,
            width: indicatorStyle.width,
          }}
        />
        {tabs.map((tab, idx) => (
          <button
            key={tab.key}
            ref={(el) => {
              tabButtonRefs.current[idx] = el;
            }}
            className={`base-tab-btn ${
              activeTab === tab.key ? "active" : ""
            }`}
            onClick={() => onTabChange(tab.key)}
            type="button"
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BaseTabs;
