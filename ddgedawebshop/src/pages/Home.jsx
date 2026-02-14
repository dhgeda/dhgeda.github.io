import Layout from "../components/Layout"
import ProductsGrid from "../components/ProductsGrid"

import chicken from "../assets/friedchicken.jpg"
import nuggets from "../assets/nuggets.jpg"
import fingers from "../assets/chickenfingers.jpg"

export default function Home() {
  const products = [
    {
      image: chicken,
      title: "Fried Chicken",
      description: "Top-of-the-line juicy and tender fried chicken."
    },
    {
      image: nuggets,
      title: "Chicken Nuggets",
      description: "Small bits that keeps the juicy and tender texture."
    },
    {
      image: fingers,
      title: "Chicken Fingers",
      description: "Crispy long strips of chicken."
    }
  ]

  return (
    <Layout>
      <section className="featured">
        <h2>Best sellers</h2>
        <ProductsGrid products={products} />
      </section>
    </Layout>
  )
}
