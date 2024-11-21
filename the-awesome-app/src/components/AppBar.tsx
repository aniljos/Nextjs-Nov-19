'use client'
import { AppThemeContext } from "@/state/context/AppThemeContext";
import Link from "next/link";
import { useContext } from "react";
export default function AppBar() {

    const theme = useContext(AppThemeContext);

    function changeTheme(){
        theme.changeMode(theme.mode === "dark"? 'light' : 'dark');
    }

    return (
        <nav className={`navbar navbar-${theme.mode} bg-${theme.mode}`}>
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
                    <li className="nav-item">
                        <button className="btn btn-warning" onClick={changeTheme}>Switch Theme</button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}