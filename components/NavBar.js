import React from 'react'
import Link from 'next/link'



const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark  ">
                <div className="container-fluid" style={{ margin: '0 5rem' }}>
                    <a className="navbar-brand" href="/">
                    <img className='dfe_logo'src="/dfe.jpg" alt="dfe logo" width="70" height="64" />
                    </a>
                    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav justify">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>

                        <li className=" dropdown ">
                        <Link href='/services'> 
                        <a className="nav-item nav-link " >
                        Services
                        </a>
                        </Link>
                        
                        <ul className="dropdown-content" >
                            <li> <Link href='/gws'>Google Workspace </Link></li>
                            <li> <Link href='/gcp'>Google Cloud Platform </Link></li>
                            <li> <Link href='/workshops'>Workshops & Tainings </Link></li>
                            <li> <Link href='/consult'>Consultancy Services </Link></li>
                           
                        </ul>
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