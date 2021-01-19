import React from 'react'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg  ">
                <div className="container-fluid" style={{ margin: '0 5rem' }}>
                    <a className="navbar-brand" href="/">Dream Factory Enterprise</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item ">
                        <a className="nav-link" href="/services">Services</a>
                        </li>
                        <li className="nav-item ">
                        <a className="nav-link" href="/shop">Shop</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/contact">Contact</a>
                        </li>
                    </ul>
                    </div>
                </div>
        </nav>



    )
    
}

export default NavBar