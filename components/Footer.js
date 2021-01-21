import React from 'react'

function Footer() {

    

    return (
        <div className='footer'>
            <div className='row text-center text-xs-center text-sm-left text-md-left'>

            <div className="col-xs-12 col-sm-4 col-md-4">
                    <h5>Get in touch </h5>
                    <ul className="list-unstyled">
                        <li><i className="fas fa-map-marker-alt" aria-hidden='true' ></i> 370B Main Rd, <br/> Observatory, <br/>  Cape Town, 7925 <br/> South Africa</li>
                        <li><i className="fas fa-phone-volume" aria-hidden='true' ></i> +27 81 773 6737</li>
                        <li><i className="fas fa-globe" aria-hidden='true' ></i> dfenterprise</li>
                    </ul>
                </div>

                <div className="col-xs-12 col-sm-4 col-md-4">
                    <h5>Dream Factory Enterprise </h5>
                    <ul className="list-unstyled">
                        <li><a href='/'>Home</a></li>
                        <li><a href='/services'>Services</a></li>
                        <li><a href='/training'>Workshop</a></li>
                        <li><a href='/shop'>Shop</a></li>
                        <li><a href='/termsOfService'>Terms of Service</a></li>


                    </ul>
                </div>
                    <div className="col-xs-12 col-sm-4 col-md-4">
                        <h5>Company</h5>
                        <ul className="list-unstyled">
                            <li><a href='/about'>About</a></li>
                            <li><a href='/careers'>Careers</a></li>
                            <li><a href='/privacy'>Privacy Policy</a></li>
                            <li><a href='/contact'>Contact Us</a></li>
                        </ul>
                    </div>
            </div>


            <div className='row text-center' >
                <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
                        <ul className='socials'> 
                                <li className="list-inline-item"><a href="#"><i className="fab fa-linkedin" aria-hidden='true'></i></a></li>
                                <li className="list-inline-item"><a href="#"><i className="fab fa-youtube" aria-hidden='true'></i></a></li>
                                <li className="list-inline-item"><a href="#" target="_blank"><i className="far fa-envelope" aria-hidden='true'></i></a></li>
                        </ul>
                </div>
            </div>

            <div className='row text-center'>
                <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center ">
                <p> Dream Factory Enterprise {new Date().getFullYear()}  © All Rights Reserved</p>

                </div>
            </div>
            
        </div>
    )
}

export default Footer
