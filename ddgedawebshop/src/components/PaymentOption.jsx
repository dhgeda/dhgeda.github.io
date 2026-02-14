export default function PaymentOption({ id, label, value, checked, onChange }) {
  return (
    <div className="payment-option">
      <input
        type="radio"
        id={id}
        name="payment-method"
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  )
}