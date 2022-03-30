import * as React from "react"
import Layout from "../components/layout"
import Bullet from "../components/Bullet"
import Seo from "../components/seo"
import Button from "../components/Button"
import TabGroup from "../components/tabGroup"

import "./page-2.scss"
import { faTree } from "@fortawesome/free-solid-svg-icons"

const props1 = {
  icon: faTree,
  title: "Coso 1 delle cose positive",
  text: "Abiajbjk, feka fnafjapoj fuefika foanf, awfiohawfon afwl. Ainf aef ff"
};
const props2 = {
  icon: faTree,
  title: "Questa pure è positiva, chissà come mai!",
  text: "Un giorno un uomo tornava a casa e disse questa cosa. Quell'uomo era Jon Snow"
};
const props3 = {
  icon: faTree,
  title: "Ta-dan, va che figo",
  text: "In sostanza questa, essendo la terza, è figa per induzione"
};

const SecondPage = () => (
  <Layout>
    <Seo title="Page two" />
    <section className="titleSection">
      Lorem ipsum dolor sit amet, consectetur
      <br />
      <Button text={"Act now!"}></Button>
    </section>
    <section className="CTASection">
      <TabGroup
        tabs={[
          <div>   
            <Bullet props={props1} />
            <Bullet props={props2} />
            <Bullet props={props3} />
          </div>
        ]}
      />
    </section>
  </Layout>
)

export default SecondPage
