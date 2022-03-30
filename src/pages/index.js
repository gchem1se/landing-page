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

const props1 = {
  icon: faTree,
  iconClassName: "bullet-icon",
  title: "Coso 1 delle cose positive",
  text: "Abiajbjk, feka fnafjapoj fuefika foanf, awfiohawfon afwl. Ainf aef ff"
};
const props2 = {
  icon: faTree,
  iconClassName: "bullet-icon",
  title: "Questa pure è positiva, chissà come mai!",
  text: "Un giorno un uomo tornava a casa e disse questa cosa. Quell'uomo era Jon Snow"
};
const props3 = {
  icon: faTree,
  iconClassName: "bullet-icon",
  title: "Ta-dan, va che figo",
  text: "In sostanza questa, essendo la terza, è figa per induzione"
};

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
      tabs={
      [
        <div className="tab-1">
          <Bullet props={props1}/>
          <Bullet props={props2}/>
          <Bullet props={props3}/>
        </div>,
        <div className="tab-1">
          <Bullet props={props1}/>
          <Bullet props={props2}/>
          <Bullet props={props3}/>
        </div>
      ]
    }/>
  </Layout>
)

export default IndexPage
