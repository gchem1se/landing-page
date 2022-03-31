import * as React from "react"
import _ from "lodash"
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

const TabGroup = ({tabs, className, id, offset}) => 
{
  const [activeTab, setActiveTab] = React.useState(tabs[0]);
  let coords;
  let swipe = "";

  const nextTab = () => {
        setActiveTab(tabs[(tabs.indexOf(activeTab) + 1) % tabs.length])
  }

  const prevTab = () => {
        setActiveTab(tabs[((tabs.indexOf(activeTab) - 1) % tabs.length + tabs.length) % tabs.length]) 
  }

  const handleTouchStart = (e) => {
    if(e._reactName === "onTouchStart"){
      coords = e.touches[0].clientX
    }
  }

  const handleTouchEnd = (e) => {
    if(swipe === "left"){
      nextTab();
    }
    else if(swipe === "right"){
      prevTab();
    }
  }


  const _handleWheel = (e) => {
    if(e.deltaY > 0) nextTab();
    else prevTab();
  }

  const handleWheel = _.debounce(_handleWheel, 50);

  const handleTouchMove = (e) => {
    swipe = ""
    if(e._reactName === "onTouchMove"){
      let diff = e.touches[0].clientX - coords;
      if(Math.abs(diff) > offset && diff > 0){
        swipe = "right"
      }else if(Math.abs(diff) > offset && diff < 0){
        swipe = "left"
      }
    }
  }
 
  return <div className={'tab-wrapper ' + className} id={id} 
      onTouchStart={handleTouchStart} 
      onTouchMove={handleTouchMove} 
      onTouchEnd={handleTouchEnd} 
      onWheel={(e) => handleWheel(e)}
    >
    <AnimatePresence initial={false}>
    <div className="tabs">
    {
      tabs.map((tab) => (
        tab === activeTab && 
          (<motion.div
            key={tab.id}
            {...merge({}, default_props, tab.properties)}
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
  className: '',
  id: '',
  offset: 100
}

TabGroup.propTypes = {
  tabs: PropTypes.array,
  className: PropTypes.string,
  id: PropTypes.string,
  offset: PropTypes.number
}

export default TabGroup;
