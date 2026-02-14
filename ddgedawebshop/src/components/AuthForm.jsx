export default function AuthForm({ title, onSubmit, children, footer }) {
  return (
    <section className="auth-form-section">
      <h2>{title}</h2>

      <form
        className="auth-form"
        onSubmit={(e) => {
          e.preventDefault()
          onSubmit?.()
        }}
      >
        {children}

        <button type="submit" className="btn">
          {title}
        </button>
      </form>

      {footer && <p className="auth-link">{footer}</p>}
    </section>
  )
}