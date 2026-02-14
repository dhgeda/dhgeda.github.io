import Layout from "../components/Layout"
import ProductsGrid from "../components/ProductsGrid"
import ActionButtons from "../components/ActionButtons"

import enchiladas from "../assets/chickenenchiladas.jpg"
import alfredo from "../assets/chicken_alfredo.jpg"

export default function Bag() {
  const cartItems = [
    {
      image: enchiladas,
      title: "Chicken Enchiladas",
      description:
        "Delicious chicken enchiladas with a rich, flavorful sauce and tender chicken."
    },
    {
      image: alfredo,
      title: "Chicken Alfredo",
      description:
        "Delicious chicken alfredo with a rich, creamy sauce and tender chicken."
    }
  ]

  return (
    <Layout>
      <section className="shopping-bag">
        <h2>Your Cart</h2>

        {cartItems.length > 0 ? (
          <ProductsGrid products={cartItems} />
        ) : (
          <p style={{ textAlign: "center", padding: "40px", color: "#666" }}>
            Your cart is empty.
          </p>
        )}

        <ActionButtons>
          <a href="/allitems" className="btn">Continue Shopping</a>
          <a href="/checkout" className="btn">Checkout</a>
        </ActionButtons>
      </section>
    </Layout>
  )
}
