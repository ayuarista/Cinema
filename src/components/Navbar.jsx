import { Link } from "react-router-dom"
import "../css/Navbar.css"
import logo from "../assets/logo.svg"
function Navbar(){
    return <nav className="navbar">
        <div className="navbar-brand">
            <img src={logo} alt="" className="logo"/>
            <Link to="/">Movie App</Link>
        </div>
        <div className="navbar-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/favorites" className="nav-link">Favorite</Link>
        </div>
    </nav>
}
export default Navbar