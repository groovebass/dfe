import Head from 'next/head'
import Link from 'next/link'



const Home = (props) => {
    

  return (
    <div style={{minHeight: '100vh'}}>
            <Head>
              <title>DFE | Home</title>
            </Head>
            
      <div style={{ width: '90%', margin: '2rem auto' }}> 
      

          <div className='row' style={{ marginTop: '9rem' }}>
              <div className='col-md-6'>
                    <h1>Technological and Innovative Solutions </h1>
                    <br/>
                    <br/>
                    <p> Dream Factory Enterprise is a leader in 
                    <br/>
                    <br/>
                    Educational Technology, it has helped ......</p>
                    <Link href='/about'>
                      <a className='btn btn-primary'> Learn More...</a>
                    </Link>
              </div>
              <div className='col-md-6'>
                  <img className='home_page_display_pic' src='/tech.png' alt='bouncing image' />
              </div>

              <div  className='row ' style={{ margin: '3rem auto' }} >
                    <div className='col-md-6 text-center'>
                    <img className='cloud_pic' src='/cloud.png' alt='gcloudpartner' />
                    </div>
                    <div className='col-md-6 text-center'>
                    <h2> Google Cloud <br/> Partner</h2>
                    <p> We are proud to be working with a Big <br/> tech giant on a number of projects in the <br/> Educational Sector</p>
                    <Link href='/about'>
                      <a className='btn btn-primary'> See Us here...</a>
                    </Link>
                    </div>  
              </div>
              

              <div className='text-center' >
                <h2> Our impact in the Education</h2>
                      <div className='row'>
                            <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
                              <ul className='school_impact list-inline'>
                                <li><i className="fas fa-school" aria-hidden='true'></i> 60+ Schools</li>
                                <li><i className="fas fa-chalkboard-teacher" aria-hidden='true'></i> 800+  Teachers </li>
                                <li><i className="fas fa-users" aria-hidden='true'></i> 19 900+ Learners</li>
                              </ul>
                              </div>
                       </div>
              </div>

          </div>

            

        </div>
    </div>
  )
}




export default Home