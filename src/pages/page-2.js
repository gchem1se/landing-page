import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Button from "../components/Button"

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
      <h3>Se ni' mondo esistesse</h3>
      <h4>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor
      </h4>
      <h3>Be healthy in YOUR environment</h3>
      <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
      <h3>Go green to get greens</h3>
      <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
    </section>
  </Layout>
)

export default SecondPage
