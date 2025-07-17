import React from 'react'
import { Outlet, Link } from 'react-router' 

function RootLayout() {
  return (
    <>
      <header> 
        <nav>
            <article className="logo">
              <Link to="/">Logo</Link>
            </article> 
            <article className="nav-links">
                <ul className="links">
                    <li className="link">
                        <Link to="/">Home</Link></li>
                    <li className="link">
                        <Link to="/products">
                        Products
                        </Link>
                    </li>
                </ul>
            </article> 

            <article className="cart-container"> 
                <Link to="/checkout">Cart</Link>
            </article>
        </nav>
      </header> 

      <main>
        <Outlet />
      </main> 

      <footer> 
        copyright &copy;2025
      </footer>
    </>
  )
}

export default RootLayout
