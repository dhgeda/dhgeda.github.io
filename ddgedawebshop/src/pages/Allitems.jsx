import Layout from "../components/Layout"
import ProductsGrid from "../components/ProductsGrid"
import Pagination from "../components/Pagination"

import curry from "../assets/spicycurry.jpg"
import sandwich from "../assets/Chicken_sandwich.jpg"
import pininyahan from "../assets/Pininyahang-Manok2.png"
import tenders from "../assets/tenders.jpg"
import wings from "../assets/chickenwings.jpg"
import enchiladas from "../assets/chickenenchiladas.jpg"
import stirfry from "../assets/chickenstirfry.jpg"
import alfredo from "../assets/chicken_alfredo.jpg"

import chicken from "../assets/friedchicken.jpg"
import nuggets from "../assets/nuggets.jpg"
import fingers from "../assets/chickenfingers.jpg"

export default function AllItems() {
  const page = new URLSearchParams(window.location.search).get("page") || "1"

  const page1Products = [
    { image: curry, title: "Chicken Curry", description: "Slow-simmered chicken curry with ultra-tender meat and deep, aromatic flavors." },
    { image: sandwich, title: "Chicken Sandwich", description: "Crave-worthy chicken sandwich with a crunchy bite and tender center." },
    { image: pininyahan, title: "Pininyahang Manok", description: "Classic Pininyahan Manok elevated with ultra-tender, flavorful chicken and soup." },
    { image: tenders, title: "Chicken Tenders", description: "Slow-marinated, expertly cooked, and finished with a crunch that speaks for itself." },
    { image: wings, title: "Chicken Wings", description: "Spicy and crispy chicken wings with a satisfying crunch." },
    { image: enchiladas, title: "Chicken Enchiladas", description: "Delicious chicken enchiladas with a rich, flavorful sauce and tender chicken." },
    { image: stirfry, title: "Chicken Stir Fry", description: "Delicious chicken stir fry with a rich, flavorful sauce and tender chicken." },
    { image: alfredo, title: "Chicken Alfredo", description: "Delicious chicken alfredo with a rich, creamy sauce and tender chicken." }
  ]

  const page2Products = [
    { image: chicken, title: "Fried Chicken", description: "Top-of-the-line juicy and tender fried chicken." },
    { image: nuggets, title: "Chicken Nuggets", description: "Small bits that keeps the juicy and tender texture." },
    { image: fingers, title: "Chicken Fingers", description: "Crispy long strips of chicken." }
  ]

  const products = page === "2" ? page2Products : page1Products

  return (
    <Layout>
      <section className="product-list">
        <h2>All Products</h2>
        <ProductsGrid products={products} />
      </section>

      <Pagination pages={[1, 2]} />
    </Layout>
  )
}