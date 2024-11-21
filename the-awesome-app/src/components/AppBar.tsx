import Link from "next/link";
export default function AppBar() {

    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" href="/">Next</Link>
                <ul className="nav">
                    <li className="nav-item">
                        <Link className="nav-link " href="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="/products">Products</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="/gadgets">Gadgets</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="/viewcart">View Cart</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="/login">Login</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}