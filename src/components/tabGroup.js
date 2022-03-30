import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import "./tabGroup.scss"

const TabGroup = ({tabs, className}) => 
{
  const [activeTab, setActiveTab] = React.useState(tabs[0]);
  const coords = React.useRef(0);

  const handleInteractionStart = (e) => {
    if(e._reactName === "onTouchStart"){
      coords.current = e.touches[0].clientX;
    }
    else if(e._reactName === "onMouseDown"){
      coords.current = e.clientX;
    }
  }

  const handleInteractionEnd = (e) => {
    if(e._reactName === "onTouchEnd"){
      if(e.touches[0].clientX > coords.current){
      }else if(e.touches[0].clientX < coords.current){
        setActiveTab(tabs[(tabs.indexOf(activeTab) + 1) % tabs.length])
      }
    }
    else if(e._reactName === "onMouseUp"){
      if(e.clientX > coords.current){
      }else if(e.clientX < coords.current){
        setActiveTab(tabs[(tabs.indexOf(activeTab) + 1) % tabs.length])
      }
    }
  }
 
  return <div className={'tab-wrapper' + className} onTouchStart={handleInteractionStart} onTouchEnd={handleInteractionEnd} onMouseDown={handleInteractionStart} onMouseUp={handleInteractionEnd}>
    <div className="tabs">
    {
      tabs.map((tab) => (
        <div className={ "tab " + (tab !== activeTab ? "hide" : "") } active={tab === activeTab ? "true" : "false"}>
        { tab }
        </div>
      )) 
    }
    </div>
    <div className="tab-nav">
    {
      tabs.map((tab) =>(
        <span className={"nav-dot"} active={tab === activeTab ? "true" : "false"}>
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
