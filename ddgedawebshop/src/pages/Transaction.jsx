import Layout from "../components/Layout"
import TransactionCard from "../components/TransactionCard"

export default function Transaction() {
  return (
    <Layout>
      <section className="transaction-section">
        <TransactionCard
          title="Transaction Completed"
          message="Your order will arrive in a few minutes"
          buttonText="Continue Shopping"
          buttonLink="/allitems"
        />
      </section>
    </Layout>
  )
}