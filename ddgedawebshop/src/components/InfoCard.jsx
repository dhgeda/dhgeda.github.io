export default function InfoCard({ image, title, description, items = [] }) {
  return (
    <article className="product-card">
      <div className="product-thumb">
        <img src={image} alt={title} />
      </div>

      <h3>{title}</h3>
      <p>{description}</p>

      {items.length > 0 && (
        <ul style={{ marginTop: "12px", textAlign: "left" }}>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </article>
  )
}