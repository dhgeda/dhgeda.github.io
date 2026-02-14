import { Link } from "react-router-dom";
export default function Sidebar() {
  return (
    <nav className="sidebar">
        <Link to="/" className="active">Home</Link>
        <Link to="/allitems">All Items</Link>
        <Link to="/about">About us</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Login</Link>
        <Link to="/profile">Profile</Link>
    </nav>
  )
}