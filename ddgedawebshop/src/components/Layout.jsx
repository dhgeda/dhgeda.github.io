import Header from "./Header"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
import "../index.css";

export default function Layout({ children }) {
  return (
    <div className="site-grid">
      <Header />
      <Sidebar />
      <main className="content">{children}</main>
      <Footer />
    </div>
  )
}