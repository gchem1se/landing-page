import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import TabGroup from "../components/tabGroup"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Button from "../components/Button"
import Bullet from "../components/Bullet"

import { faTree } from "@fortawesome/free-solid-svg-icons"

import "./index.scss"

const tabs = [
  {
    id: 1,
    properties: {},
    content: (
      <div className="tab-1" >
        <Bullet icon={faTree} title="Se ni' mondo esistesse" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"/>
        <Bullet icon={faTree} title="Be healthy in YOUR environment" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"/>
        <Bullet icon={faTree} title="Go green to get greens" text="In sostanza questa, essendo la terza, è figa per induzione"/>
      </div>
    )
  },
  {
    id: 2,
    properties: {
      
    },
    content: (
      <div className="tab-1" >
        <Bullet icon={faTree} title="Se ni' mondo esistesse" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"/>
        <Bullet icon={faTree} title="Be healthy in YOUR environment" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"/>
        <Bullet icon={faTree} title="Go green to get greens" text="In sostanza questa, essendo la terza, è figa per induzione"/>
      </div>
    )
  }
]

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <section className="titleSection">
      Lorem ipsum dolor sit amet, consectetur
      <br />
      <Button text={"Act now!"}></Button>
    </section>

    <TabGroup
      className="carousel"
      tabs={tabs}/>
  </Layout>
)

export default IndexPage
