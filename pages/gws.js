import React from 'react'
import Head from 'next/head'
import Link from 'next/link'


const GoogleWorkSpace = () => {
    return (
        <div style={{minHeight: '100vh'}}>
            <Head>
              <title>DFE | Google WorkSpace</title>
            </Head>
            
            <div style={{ width: '90%', margin: '2rem auto' }}> 
            <h1 style={{ marginTop: '9rem' }}> Google WorkSpace</h1>

            <div className='row text-center gws_first_div'>
                <div className='col-md-6'style={{ paddingBottom: '1rem' }}>
                    <h2> An All in one Suite</h2>
                        <p>Make your workplace a workspace in the Cloud. <br/> Google WorkSpace is an all in one online platform,
                         <br/> that facilitates easy Colleboration among your entire team  </p>
                         <p> We are here to help you simplify how <br/> to be online and work seamlesly by using <br/> <a href='https://workspace.google.com/'> Google Tools</a></p>
                         <Link href='/contact'>
                        <a className='btn btn-primary'> Contact Us</a>
                        </Link>
                        
                </div> 
                <div className='col-md-6 text-center'>
                    <img className='google_computer' src='/gws.png' alt='google_computer' />
                </div>
            </div>



                <div className='row '>
                        <div className='col-lg-4 col-xs-12 text-center' >
                            <div className='box' >
                                <h3>Connect</h3>
                                <img src="https://img.icons8.com/color/48/000000/gmail--v2.png" alt='gmail'/>
                                    <p> Gmail : Custom business email @yourcompany</p>
                                    <ul className='gws_imgs'>
                                    <li> <img src="https://img.icons8.com/color/48/000000/google-calendar.png" alt="calendar"/></li>
                                    <li><img src="https://img.icons8.com/color/48/000000/google-hangouts-chat.png" alt="hangouts"/></li>
                                    </ul>
                                    <Link href='https://workspace.google.com/intl/en_za/features/'>
                                    <a className='btn btn-primary'> Learn More...</a>
                                    </Link>
                            </div>
                        </div>
                        <div className='col-lg-4 col-xs-12 text-center'>
                            <div className='box'>
                                <h3>Create & Colleborate</h3>
                                        <img src="https://img.icons8.com/color/48/000000/google-docs.png" alt="docs"/>
                                        <p>Docs: Documents with real-time editing</p>
                                        <ul className='gws_imgs'>
                                        <li><img src="https://img.icons8.com/color/48/000000/google-sheets.png" alt="sheets"/> </li>
                                        <li><img src="https://img.icons8.com/color/48/000000/google-forms-new-logo-1.png" alt="forms"/></li>
                                        <li><img src="https://img.icons8.com/color/48/000000/google-slides.png" alt="slides"/></li>
                                        </ul>
                                        <Link href='https://workspace.google.com/intl/en_za/features/'>
                                        <a className='btn btn-primary'> Learn More...</a>
                                        </Link>
                            </div>
                        </div>
                        <div className='col-lg-4 col-xs-12 text-center'>
                            <div className='box'>
                                <h3>Security & Control</h3>
                                    <img src="https://img.icons8.com/color/48/000000/automatic.png" alt="admin"/>
                                    <p>Admin: Manage user, device and security settings</p>
                                    <ul className='gws_imgs'>
                                    <li><img src="https://img.icons8.com/color/48/000000/safe.png" alt="vault"/> </li>
                                    </ul>
                                    <Link href='https://workspace.google.com/intl/en_za/features/'>
                                    <a className='btn btn-primary'> Learn More...</a>
                                    </Link>
                            </div>
                        </div>
                        <div className='col-lg-4 col-xs-12 text-center'>
                            <div className='box'>
                                <h3>Access & Storage</h3>
                                    <img src="https://img.icons8.com/color/48/000000/google-drive.png" alt="gdrive"/>
                                    <p>Google Drive: Secure Cloud Storage and Sharing</p>
                                    <Link href='https://workspace.google.com/intl/en_za/features/'>
                                    <a className='btn btn-primary'> Learn More...</a>
                                    </Link>
                            </div>
                        </div>
                        
                        <div className='col-lg-4 col-xs-12 text-center'>
                            <div className='box'>
                                <h3>Build</h3>
                                 <img src="https://img.icons8.com/color/48/000000/google-sites.png"/>
                                    <p>Sites: Build sites without code</p>
                                    <ul className='gws_imgs'>
                                    <li></li>
                                    </ul>
                                    <Link href='https://workspace.google.com/intl/en_za/features/'>
                                    <a className='btn btn-primary'> Learn More...</a>
                                    </Link>
                            </div>
                        </div>
                        <div className='col-lg-4 col-xs-12 text-center'>
                            <div className='box'>
                                <h3>Discover</h3>
                                <img src="https://img.icons8.com/color/50/000000/google-maps-new.png"/>
                                    <p>Locate: Search your favourite places</p>
                                    <ul className='gws_imgs'>
                                    <li></li>
                                    </ul>
                                    <Link href='https://workspace.google.com/intl/en_za/features/'>
                                    <a className='btn btn-primary'> Learn More...</a>
                                    </Link>
                            </div>
                        </div>
                    
                        <div className='gws_first_div text-center'>
                            <h2 className=' '> Our Solutions</h2>
                            <div className='row '>
                                <div className='col-md-4'>
                                <img src="https://img.icons8.com/color/48/000000/upload-2.png"/>
                                <h4>Account Set-Up & Deploy</h4>
                                   <p>We can easily set up your Google Workspace Account <br/> and get you onboard.</p>
                                   <p> Our dedicated team have neccesary skills and tools to get you set up.</p>
                                </div>
                                <div className='col-md-4'>
                                <img src="https://img.icons8.com/color/48/000000/training.png"/>
                                <h4>Training</h4>
                                <p>Training is provided after deployment to IT champions withing <br/> your organisation on how to manage your Account.</p>
                                </div>
                                <div className='col-md-4'>
                                <img src="https://img.icons8.com/color/48/000000/technical-support.png"/>
                                <h4>Post Deployment Support Services</h4>
                                <p> It is our duty to assist you with post deployment services <br/> to ensure that you aesily intergrate your organisation's <br/> processes online.</p>
                                </div>
                        </div>
                        </div>

                </div>
            </div>
        </div>
    )
}


export default GoogleWorkSpace