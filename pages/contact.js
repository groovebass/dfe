import React from 'react'
import Head from 'next/head'


const Contact = () => {
    return (
        <div style={{minHeight: '100vh'}}>
            <Head>
              <title>DFE | Contact</title>
            </Head>
            
            <div style={{ width: '90%', margin: '2rem auto' }}> 
            <h1 style={{ marginTop: '9rem' }}> Contact</h1>
            <div className="thm-container">
                        <div className="row">
                        <div className="col-md-8">
                            <div className="contact-form-content">
                                <div className="title">
                                    
                                    <h2 style={{color: 'black'}}>Send Message</h2>
                                </div>
                                <form action="" className="contact-form" >
                                    <input type="text" name="name" placeholder="Your full name"/>
                                    <input type="text" name="email" placeholder="Your email address"/>
                                    <textarea name="message" placeholder="Type your message"></textarea>
                                    <button type="submit" className="thm-btn btn-primary">Submit Now</button>
                                    <div className="form-result"></div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="contact-info text-center">
                                <div className="title text-center">
                                  
                                    <h2>Details</h2>
                                </div>
                                <div className="single-contact-info">
                                    <h4>Address</h4>
                                    <p><i className="fas fa-map-marker-alt" aria-hidden='true' ></i> 370B Main Rd, <br/> Observatory, <br/>  Cape Town, 7925 <br/> South Africa</p>
                                </div>
                                <div className="single-contact-info">
                                    <h4>Phone</h4>
                                    <p><i className="fas fa-phone-volume" aria-hidden='true' ></i> +27 81 773 6737</p>
                                </div>
                                <div className="single-contact-info">
                                    <h4>Online</h4>
                                    <p><i className="fas fa-globe" aria-hidden='true' ></i> <a href='https://dfenterprise.africa'>dfenterprise.africa</a> </p>
                                </div>
                                <div className="single-contact-info">
                                    <h4>Email</h4>
                                    <p><i className="far fa-envelope" aria-hidden='true'></i> info@dfenterprise.africa</p>
                                </div>
                                <div className="single-contact-info">
                                    <h4>Follow</h4>
                                    <div className="social">
                                        <a href="#" ><i className="fab fa-linkedin" aria-hidden='true'></i></a>  
                                        <a href="#" ><i className="fab fa-youtube" aria-hidden='true'></i></a> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

        </div>
    </div>
                    
                   
    )
}


export default Contact