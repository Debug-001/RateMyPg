import React from 'react'
import { BsHouse } from 'react-icons/bs'
import { FcViewDetails } from 'react-icons/fc'
import { FcHome } from 'react-icons/fc'
import review from '../assets/review.png'
import footer_logo from '../assets/footer_logo.jpg';

const Home = () => {
  return (
    <div>
      {/* navbar section starts */}
      <div className="container-fullwidth">
        <div className="container-fluid navbar-style py-4" >
          <div className="row">
            <div className="col-md-12 col-12 ">
              <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                  <div className="icon">
                    <BsHouse color="black" size={26} />
                  </div>
                  <a class="navbar-brand" style={{ "font-size": "2.2rem" }} href="/">RateMyPG.com</a>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                      <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="/">Home</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="/">Link</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="/">About</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="/">Explore</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* start of input section */}
      <div className="container1-fullwidth">
        <div className="row">
          <div className="col-md-12 col-10 ">
            <h1>THE #1 SITE FOR CHRIST PG REVIEWS</h1>
            <div class="input-group mb-3 mx-auto">
              <input type="text" class="form-control" placeholder='Search for your School or Dorm' col-100 aria-describedby="basic-addon1" />
            </div>
          </div>
        </div>
      </div>

      {/* star of grid section */}
      <div class="container-fluid" style={{ "background-color": "aliceblue" }}>
        <div class="row">
          <div class="col-md-10 col-12 mx-auto">
            <div class="row">
              <div class="col-md-6 col-12 hero-text order-1">
                <h1>Choosing a dorm just got easier</h1>
                <h2> <FcHome size={38} /> Read student reviews</h2>
                <p>How was your experience at your dorm? You can help incoming freshmen and other classmates by writing a completely anonymous review and adding photos. We just require that you sign in with your email.</p>
                <h2><FcViewDetails size={38} />  Write an anonymous review</h2>
                <p>We've collected reviews for over 1,000 dorms in the United States. Find your school and browse our student-generated reviews to help you find your next dorm.</p>
              </div>
              <div class="col-md-6 col-12 hero-text order-md-1 order-0">
                <figure>
                  <img class="img" src={review} alt="herosection_image" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* start of review grid section */}
      <div class="container-fluid mt-2">
        <div class="row">
          <div class="col-md-10  col-12 mx-auto">
            <h3 class="text-center main-heading">Most Reviewed Schools</h3>
            <div class="row">
              <div class="col-md-4">
                <div class="box">
                  <div class="our-services settings">
                    <div class="icon"> <img src="" /> </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="box">
                  <div class="our-services speedup">
                    <div class="icon"> <img src="" /> </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="box">
                  <div class="our-services privacy">
                    <div class="icon"> <img src="" /> </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4">
                <div class="box">
                  <div class="our-services backups">
                    <div class="icon"> <img src="" /> </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="box">
                  <div class="our-services ssl">
                    <div class="icon"> <img src="" /> </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="box">
                  <div class="our-services database">
                    <div class="icon"> <img src="" /> </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="box">
                  <div class="our-services database">
                    <div class="icon"> <img src="" /> </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="box">
                  <div class="our-services database">
                    <div class="icon"> <img src="" /> </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="box">
                  <div class="our-services database">
                    <div class="icon"> <img src="" /> </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* start of recent reviews section */}
      <div class="container-fluid mt-2" style={{ "background-color": "aliceblue" }}>
        <div class="row">
          <div class="col-md-10  col-12 mx-auto">
            <h3 class="text-center main-heading">Recent Reviews</h3>
            <div class="row">
              <div class="col-md-4">
                <div class="box">
                  <div class="our-services settings">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, temporibus!</p>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="box">
                  <div class="our-services speedup">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, sint!</p>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="box">
                  <div class="our-services privacy">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, similique.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* start of footer section */}
      <div class="container-fluid mt-" style={{ "background-color": "white" }}>
        <div class="row">
          <div class="col-md-10  col-12 mx-auto">
            <img className="footer-logo" src={footer_logo} alt="footer-logo" />
          <h3 class= "footer-text text-center main-heading">RateMyPg.com</h3>
          <ul className='footer-links'>
            <li>
              <a class= "text-center" href="/">About us</a>
            </li>
            <li>
              <a href="/">Help</a>
            </li>
            <li>
              <a href="/">Terms and condition</a>
            </li>
            <li>
              <a href="/">Privacy policy</a>
            </li>
          </ul>
          <p className="footer-sub-text text-center">2022 RateMyPG.  &nbsp; All Rights Reserved.</p>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Home