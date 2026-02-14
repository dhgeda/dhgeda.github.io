export default function TransactionCard({ title, message, buttonText, buttonLink }) {
  return (
    <div className="transaction-card">
      <h2>{title}</h2>
      <p>{message}</p>
      <a href={buttonLink} className="btn">{buttonText}</a>
    </div>
  )
}