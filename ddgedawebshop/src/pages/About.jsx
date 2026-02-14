import Layout from "../components/Layout"
import InfoCard from "../components/InfoCard"
import "../index.css";
import logo from "../assets/logo2.png"
import ceo from "../assets/josh.jpg"

export default function About() {
  return (
    <Layout>
      <section className="product-list">
        <h2>Our Products</h2>

        <div className="products-grid">
          <InfoCard
            image={logo}
            title="Company History"
            description="Founded in 2010, Fried Days has been serving delicious and crispy fried chicken to customers across the country."
            items={[
              "Over 50 locations nationwide",
              "Committed to quality ingredients",
              "Award-winning recipes"
            ]}
          />

          <InfoCard
            image={ceo}
            title="Dwyane Geda"
            description="CEO"
            items={[
              "Founder and CEO",
              "2nd Year BSITWMA - FEU Institute of Technology"
            ]}
          />
        </div>
      </section>
    </Layout>
  )
}