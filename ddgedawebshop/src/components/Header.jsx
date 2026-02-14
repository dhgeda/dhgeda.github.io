import logo from "../assets/logo2.png"
import bag from "../assets/paper-bag.png"

export default function Header() {
  return (
    <header className="site-header">
      <div className="brand">
        <img src={logo} alt="Fried Days logo" className="logo" />
        <h1>Fried Days</h1>
      </div>
      <a href="/bag" className="bag-btn">
        <img src={bag} alt="bag" />
      </a>
    </header>
  )
}