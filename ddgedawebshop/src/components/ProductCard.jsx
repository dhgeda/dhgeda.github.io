export default function ProductCard({ image, title, description }) {
  return (
    <article className="product-card">
      <div className="product-thumb">
        <img src={image} alt={title} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href="/products" className="btn">View details</a>
    </article>
  )
}