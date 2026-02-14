import { useState } from "react"
import Layout from "../components/Layout"
import PaymentOption from "../components/PaymentOption"
import { useNavigate } from "react-router-dom"

export default function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState("credit-card")
  const navigate = useNavigate()

  const handleChange = (e) => setPaymentMethod(e.target.value)
  const handleCheckout = () => {
    console.log("Checkout with:", paymentMethod)

    // later: process payment, update order state
    navigate("/transaction")
  }

  const options = [
    { id: "credit-card", label: "Credit/Debit Card", value: "credit-card" },
    { id: "paypal", label: "PayPal", value: "paypal" },
    { id: "bank-transfer", label: "Bank Transfer", value: "bank-transfer" },
    { id: "google-pay", label: "Google Pay", value: "google-pay" },
    { id: "apple-pay", label: "Apple Pay", value: "apple-pay" }
  ]

  return (
    <Layout>
      <section className="checkout-section">
        <h2>Checkout</h2>

        <div className="checkout-form">
          <h3>Payment Method</h3>
          <fieldset className="payment-methods">
            {options.map((opt) => (
              <PaymentOption
                key={opt.id}
                {...opt}
                checked={paymentMethod === opt.value}
                onChange={handleChange}
              />
            ))}
          </fieldset>
        </div>

        <div style={{ textAlign: "center", marginTop: 20 }}>
          <button className="btn checkout-btn" onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      </section>
    </Layout>
  )
}
