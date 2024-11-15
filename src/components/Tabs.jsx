import React, { useState, useRef, useEffect } from 'react';

export const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);
  const [changing, setChanging] = useState(false);
  const [underlineWidth, setUnderlineWidth] = useState(0);
  const [underlineLeft, setUnderlineLeft] = useState(0);
  const tabRefs = useRef([]);

  useEffect(() => {
    const index = children.findIndex((child) => child.props.label === activeTab);
    const { width, left } = tabRefs.current[index].getBoundingClientRect();
    setUnderlineWidth(width);
    setUnderlineLeft(left);
  }, [activeTab, children]);

  const handleClick = (tab) => {
    setChanging(true);
    setTimeout(()=>{
      setActiveTab(tab);
      setChanging(false);
    }, 500);
    

  }

  return (
    <div className="tab gradient-box" >
      <div className="tab_list">
        {children.map((child, index) => (
          <h4
            key={child.props.label}
            ref={(el) => (tabRefs.current[index] = el)}
            className={child.props.label === activeTab ? 'actve' : ''}
            onClick={() => handleClick(child.props.label)}
          >
            {child.props.label}
          </h4>
        ))}
        <div
          className="underline"
          style={{ width: underlineWidth, left: underlineLeft - 10 }}
        />
      </div>
      <hr />
      <div className="tab_content">
        {children.map((child) => (
          child.props.label === activeTab && <div key={child.props.label} className={`animated ${changing ? 'disable' : ''}`}>{child.props.children}</div>
        ))}
      </div>
    </div>
  );
}

export const Tab = ({ label, children }) => {
  return <>{children}</>;
}