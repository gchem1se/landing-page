import * as React from "react"
import PropTypes from "prop-types"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "gatsby"
import { merge } from "lodash"

import "./tabGroup.scss"

const default_props = {
  className: "tab",
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  active: true
}

const TabGroup = ({tabs, className}) => 
{
  const [activeTab, setActiveTab] = React.useState(tabs[0]);
  let coords;
  let swipe = "";

  const handleInteractionStart = (e) => {
    if(e._reactName === "onTouchStart"){
      coords = e.touches[0].clientX
    }
    else if(e._reactName === "onMouseDown"){
      coords = e.clientX
    }
  }

  const handleTouchUp = (e) => {
    if(swipe === "left"){
        setActiveTab(tabs[(tabs.indexOf(activeTab) + 1) % tabs.length])
    }
    else if(swipe === "right"){
  
    }
  }

  const handleInteractionEnd = (e) => {
    swipe = ""
    if(e._reactName === "onTouchMove"){
      if(e.touches[0].clientX > coords - 50){
      }else if(e.touches[0].clientX < coords){
        swipe = "left"
      }
    }
    else if(e._reactName === "onMouseUp"){
      if(e.clientX > coords){
      }else if(e.clientX < coords - 50){
        setActiveTab(tabs[(tabs.indexOf(activeTab) + 1) % tabs.length])
      }
    }
  }

 
  return <div className={'tab-wrapper ' + className} onTouchStart={handleInteractionStart} onTouchMove={handleInteractionEnd} onMouseDown={handleInteractionStart} onMouseUp={handleInteractionEnd} onTouchEnd={handleTouchUp}>
    <AnimatePresence initial={false}>
    <div className="tabs">
    {
      tabs.map((tab) => (
        tab === activeTab && 
          (<motion.div
            key={tab.id}
            {...merge(default_props, tab.properties)}
            >
        { tab.content }
        </motion.div>)
      )) 
    }
    </div>
    </AnimatePresence>
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
