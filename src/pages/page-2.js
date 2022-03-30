import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Button from "../components/Button"
import TabGroup from "../components/tabGroup"

import "./page-2.scss"

const SecondPage = () => (
  <Layout>
    <Seo title="Page two" />
    <br />
    <section className="titleSection">
      Lorem ipsum dolor sit amet, consectetur
      <br />
      <Button text={"Act now!"}></Button>
    </section>
    <section className="CTASection">
      <TabGroup
        tabs={[
          <div>
            <h3>Lorem ipsum dolor sit amet</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            </p>
          </div>
        ]}
      />
    </section>
  </Layout>
)

export default SecondPage
