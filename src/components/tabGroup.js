import * as React from "react"
import PropTypes from "prop-types"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "gatsby"

import "./tabGroup.scss"

const TabGroup = ({tabs, className}) => 
{
  const [activeTab, setActiveTab] = React.useState(tabs[0]);
  const coords = React.useRef(0);
  const swipe = React.useRef("");

  const handleInteractionStart = (e) => {
    if(e._reactName === "onTouchStart"){
      coords.current = e.touches[0].clientX;
    }
    else if(e._reactName === "onMouseDown"){
      coords.current = e.clientX;
    }
  }

  const handleTouchUp = (e) => {
    if(swipe.current === "left"){
        setActiveTab(tabs[(tabs.indexOf(activeTab) + 1) % tabs.length])
    }
    else if(swipe.current === "right"){
  
    }
  }

  const handleInteractionEnd = (e) => {
    if(e._reactName === "onTouchMove"){
      if(e.touches[0].clientX > coords.current){
      }else if(e.touches[0].clientX < coords.current){
        swipe.current = "left"
      }
    }
    else if(e._reactName === "onMouseUp"){
      if(e.clientX > coords.current){
      }else if(e.clientX < coords.current){
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
              className={ "tab" } 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              active
            >
        { tab }
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
