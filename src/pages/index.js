import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import TabGroup from "../components/tabGroup"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Button from "../components/Button"
import Input from "../components/Input"
import Bullet from "../components/Bullet"

import { faTree, faBolt, faGear } from "@fortawesome/free-solid-svg-icons"

import "./index.scss"

const tabs = [
  {
    id: 1,
    properties: {},
    content: (
      <div className="tab-1" >
        <Bullet icon={faBolt} title="Smarter energy leads to less expenses" text="Many companies have started to adopt renewable energy sources, which leads to more energy for less money."/>
        <Bullet icon={faTree} title="Produce without taking from the earth" text="Resources provided by our planet are limited, and they're going to run short unless you do something about it."/>
        <Bullet icon={faGear} title="Recycle materials as much as you can" text='As demonstrated by tech leaders like Google, use materials made by "safe chemistry" and recycling materials has also helped reducing their environmental impact.'/>
      </div>
    )
  },
  {
    id: 2,
    properties: {
      initial: {
        height: "auto"
      },
      animate: {
        height: "80vh"
      },
      exit: {
        height: "auto"
      }
    },
    content: (
      <div className="tab-1" >
        <Bullet icon={faTree} title="Se ni' mondo esistesse" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"/>
        <Bullet icon={faTree} title="Be healthy in YOUR environment" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"/>
        <Bullet icon={faTree} title="Go green to get greens" text="In sostanza questa, essendo la terza, è figa per induzione"/>
      </div>
    )
  },
  {
    id: 3,
    properties: {
      
    },
    content: (
      <form className="tab-3" >
        <Input type="text" className="form-field" placeholder="Company Name" />
        <Input type="text" className="form-field" placeholder="Feedback Email" />
        <Input type="text" className="form-field" placeholder="Title" />
        <Button type="submit" >Start now!</Button>
      </form>
    )
  }
]

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <section className="titleSection">
      <div className="content">
        <h3>Leave a mark by not leaving a footprint</h3>
        <p> 
          Here at Greenprint we help companies find their better self by giving back to the world what the world has given to them.
          <br/><br/>
          We are living in a period of environmental crisis, so we strive to make you run your business and at the same time help our planet.
        </p>
        <a href="#carousel"><Button text={"Act now!"} className="CTA-btn"></Button></a>
      </div>
    </section>

    <TabGroup
      className="carousel"
      id="carousel"
      tabs={tabs}
    />
  </Layout>
)

export default IndexPage
