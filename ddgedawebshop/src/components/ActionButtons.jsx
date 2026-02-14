export default function ActionButtons({ children }) {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "30px",
        display: "flex",
        gap: "12px",
        justifyContent: "center"
      }}
    >
      {children}
    </div>
  )
}
