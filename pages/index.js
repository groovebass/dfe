import Head from 'next/head'
import Link from 'next/link'



const Home = (props) => {
    

  return (
    <div style={{minHeight: '100vh'}}>
            <Head>
              <title>Dream Factory Enterprise | Home</title>
            </Head>
            
      <div style={{ width: '90%', margin: '2rem auto' }}> 
      

          <div className='row' style={{ marginTop: '5rem' }}>
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

              <div  className='row '  >
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
              <br/> <br/>

              <div className='text-center' >
                <h2> Who we have worked with</h2>

              </div>

          </div>

            

        </div>
    </div>
  )
}




export default Home