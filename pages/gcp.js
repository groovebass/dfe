import React, { useState } from 'react'
import Head from 'next/head'






const GoogleCloudPlatform = () => {



    // const [Open, setOpen] = useState(false)
    // const toggle = () => setOpen(!Open)


    return (
        <div style={{minHeight: '100vh'}}>
            <Head>
              <title>DFE | Google Cloud Platform</title>
            </Head>
            
            <div style={{ width: '90%', margin: '2rem auto' }} > 


            <h1 style={{ marginTop: '9rem' }}>Google Cloud Platform</h1>

               
                <div className='row gws_first_div'>
                <h2>Solutions</h2>
                        <div className='col-lg-4 col-xs-12 text-center' >
                            <div className='' >
                                <h3>Cloud Migration</h3>
                               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br/>
                               Tempus iaculis urna id volutpat lacus laoreet non. Id velit ut tortor pretium viverra suspendisse potenti. <br/>
                                Id aliquet lectus proin nibh nisl condimentum id venenatis a. Pretium aenean pharetra magna ac placerat. <br/>
                                Morbi quis commodo odio aenean sed adipiscing diam donec.</p>
                            </div>
                        </div>
                        <div className='col-lg-4 col-xs-12 text-center'>
                            <div className=''>
                                <h3>Application Modernisation</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br/>
                               Tempus iaculis urna id volutpat lacus laoreet non. Id velit ut tortor pretium viverra suspendisse potenti. <br/>
                                Id aliquet lectus proin nibh nisl condimentum id venenatis a. Pretium aenean pharetra magna ac placerat. <br/>
                                Morbi quis commodo odio aenean sed adipiscing diam donec.</p>
                            </div>
                        </div>
                        <div className='col-lg-4 col-xs-12 text-center'>
                            <div className=''>
                                <h3>Databases & Data Analytics</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br/>
                               Tempus iaculis urna id volutpat lacus laoreet non. Id velit ut tortor pretium viverra suspendisse potenti. <br/>
                                Id aliquet lectus proin nibh nisl condimentum id venenatis a. Pretium aenean pharetra magna ac placerat. <br/>
                                Morbi quis commodo odio aenean sed adipiscing diam donec.</p>
                            </div>
                        </div>
                        <div className='col-lg-4 col-xs-12 text-center'>
                            <div className=''>
                                <h3>Devops</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br/>
                               Tempus iaculis urna id volutpat lacus laoreet non. Id velit ut tortor pretium viverra suspendisse potenti. <br/>
                                Id aliquet lectus proin nibh nisl condimentum id venenatis a. Pretium aenean pharetra magna ac placerat. <br/>
                                Morbi quis commodo odio aenean sed adipiscing diam donec.</p>
                            </div>
                        </div>
                        

                </div>


                 <div id="circularMenu" className="circular-menu">

                    <a className='floating-btn' >
                        {/* <i className="fa fa-plus"></i> */}
                        <img src='/google-cloud-platform.png'/>
                    </a>

                    <menu className={'items-wrapper' }>
                        <a href="#" className= 'menu-item'><img src='/google-compute-engine.png'/></a>
                        <a href="#" className= 'menu-item'><img src='/cloud-storage.png'/></a>
                        <a href="#" className= 'menu-item'><img src='/networking-manager.png'/></a>
                        <a href="#" className= 'menu-item'><img src='/artificial-intelligence.png'/></a>
                        
                    </menu>

                    </div>
                                                
            
            </div>
        </div>
    )
}


export default GoogleCloudPlatform 