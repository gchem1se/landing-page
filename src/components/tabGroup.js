import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import "./tabGroup.scss"

const TabGroup = ({tabs, className}) => 
{
  const [activeTab, setTab] = React.useState(tabs[0]);
  const setActiveTab = (tab) => {
    setTab(tab);
  }
  
  return <div className={'tab-wrapper' + className}>
    <div className="tabs">
    {
      tabs.map((tab) => (
        <div className="tab" active={tab === activeTab ? "true" : "false"}>
        { tab }
        </div>
      )) 
    }
    </div>
    <div className="tab-nav">
    {
      tabs.map((tab) =>(
        <span className="nav-dot" active={tab === activeTab ? "true" : "false"}>
        </span>
      ))
    }
    </div>
  </div>
}

TabGroup.defaultProps = {
  tabs: [],
  className: ''
}

TabGroup.propTypes = {
  tabs: PropTypes.array,
  className: PropTypes.string
}

export default TabGroup;
