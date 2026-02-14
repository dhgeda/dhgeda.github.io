export default function Pagination({ pages = [], basePath = "/allitems" }) {
  return (
    <div className="pagination">
      {pages.map((page) => (
        <a key={page} href={`${basePath}?page=${page}`}>
          {page}
        </a>
      ))}
    </div>
  )
}