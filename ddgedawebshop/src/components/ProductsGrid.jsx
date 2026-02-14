import ProductCard from "./ProductCard"

export default function ProductsGrid({ products }) {
  return (
    <div className="products-grid">
      {products.map((p, index) => (
        <ProductCard key={index} {...p} />
      ))}
    </div>
  )
}