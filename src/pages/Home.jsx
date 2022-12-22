import React from 'react'
import { FcViewDetails } from 'react-icons/fc'
import { FcHome } from 'react-icons/fc'
import review from '../assets/review.png'
import { BsHouse } from 'react-icons/bs'
import { RxAvatar } from 'react-icons/rx'
import { AiOutlineStar } from 'react-icons/ai'
import { AiFillStar } from 'react-icons/ai'
import footer_logo from '../assets/footer_logo.jpg';
import { useAuth0 } from "@auth0/auth0-react";
import './home.css'


const Home = () => {

  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

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
                        <a class="nav-link" href="/about">About</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="/explore">Explore</a>
                      </li>
                      {isAuthenticated &&

                        <li className='user-info'>
                          <p>Welcome! {user.name}</p>
                        </li>
                      }

                      {isAuthenticated ? (
                        <li>
                          <button type="button" className='btn btn-outline-dark' onClick={() => logout({ returnTo: window.location.origin })}>Log Out</button>
                        </li>
                      ) : (
                        <li>
                          <button type="button" className='btn btn-outline-dark' onClick={() => loginWithRedirect()}>Login</button>
                        </li>
                      )}
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
              <input type="text" class="form-control" placeholder='Search for your School or PG' col-100 aria-describedby="basic-addon1" />
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
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-10  col-12 mx-auto">
            <h3 class="text-center main-heading pb-5">Most Reviewed PG's</h3>
            <div class="row">
              <div class="col-md-4">
                <a href="/explore">
                  <div class="box" href="/explore">
                    <div class="our-services settings">
                      <div className="icon"> <img class="main-img" src="https://ncr.christuniversity.in/uploads/userfiles/image/hostel/christresidenceA2.jpg" alt='' />
                        <h5 style={{ "margin-left": "-.1rem" }}>Christ Residence Hall </h5>
                        <h4> Rating: 4/5</h4>
                        <p>Location : Marium Nagar, 100m from college building</p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div class="col-md-4">
                <a href="/explore">
                  <div class="box">
                    <div class="our-services settings">
                      <div class="icon"> <img class="main-img" src="https://ncr.christuniversity.in/uploads/userfiles/image/hostel/stkuriakoseA.jpg" alt='' />
                        <h5>St KURIAKOSE ELIAS HALL
                        </h5>
                        <h4> Rating: 4/5
                        </h4>
                        <p>Location: Marium Nagar, 120m from college building</p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div class="col-md-4">
                <a href="/explore">
                  <div class="box">
                    <div class="our-services settings">
                      <div class="icon"> <img class="main-img" src="https://ncr.christuniversity.in/uploads/userfiles/image/hostel/CHRISTAPARTMENT(1).jpg" alt='' />
                        <h5>CHRIST RESIDENCE HALL
                        </h5>
                        <h4> Rating: 5/5
                        </h4>
                        <p>Location: Marium nagar, 150m from college building</p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4">
                <a href="/explore">
                  <div class="box">
                    <div class="our-services settings">
                      <div class="icon"> <img class="main-img" src="https://ncr.christuniversity.in/uploads/userfiles/image/hostel/STMARYHOSTEL.jpg" alt='' />
                        <h5>St MARY'S RESIDENCE HALL
                        </h5>
                        <h4> Rating: 4/5
                        </h4>
                        <p>Location: Marium Nagar, 50m from college building</p>
                      </div>
                    </div>
                  </div>
                </a>

              </div>
              <div class="col-md-4">
                <a href="/explore">
                  <div class="box">
                    <div class="our-services settings">
                      <div class="icon"> <img class="main-img" src="https://ncr.christuniversity.in/uploads/userfiles/temp2.jpg" alt='' />
                        <h5 className="text1" style={{ "margin-left": "-10rem" }}>Christ  Hall</h5>
                        <h4> Rating: 4/5 </h4>
                        <p>Location: Marium Nagar, 100m from college building </p>
                      </div>
                    </div>
                  </div>
                </a>

              </div>
              <div class="col-md-4">
                <a href="/explore">
                  <div class="box">
                    <div class="our-services settings">
                      <div class="icon"> <img class="main-img" src="https://ncr.christuniversity.in/uploads/userfiles/ST%20JOSEPH%202(1).jpg" alt='' />
                        <h5 className="text1" style={{ "margin-left": "6.5rem", "padding-right": "3rem" }}>St JOSEPH'S RESIDENCE HALL
                        </h5>
                        <h4> Rating: 3/5
                        </h4>
                        <p className='p1-text'>Location: Marium Nagar</p>
                      </div>
                    </div>
                  </div>
                </a>

              </div>
              <div class="col-md-4">
                <a href="/explore">
                  <div class="box">
                    <div class="our-services settings">
                      <div class="icon"> <img class="main-img" src="https://ncr.christuniversity.in/uploads/userfiles/image/hostel/Ezstays%20update/KALPANA_COTTAGE_B.jpg" alt='' />
                        <h5>Ezstays - Kalpana Cottage
                        </h5>
                        <h4> Rating: 4/5
                        </h4>
                        <p className='p2-text'>Location: 1.5km from College</p>
                      </div>
                    </div>
                  </div>
                </a>

              </div>
              <div class="col-md-4">
                <a href="/explore">
                  <div class="box">
                    <div class="our-services settings">
                      <div class="icon">
                        <img class="main-img" src="https://ncr.christuniversity.in/uploads/userfiles/image/hostel/Ezstays%20update/KALPANA_COTTAGE_C.jpg" alt='' />
                        <h5>Ezstays - Sarojini Mansion
                        </h5>
                        <h4> Rating: 4/5
                        </h4>
                        <p className='p3-text'>Location: 5km from college</p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div class="col-md-4">
                <a href="/explore">
                  <div class="box">
                    <div class="our-services settings">
                      <div class="icon"> <img class="main-img" src="https://ncr.christuniversity.in/uploads/userfiles/image/hostel/Ezstays%20update/LINCON_REGULAR.jpg" alt='' />
                        <h5 >Ezstays - Vallabh Bhai Residency
                        </h5>
                        <h4> Rating: 3/5
                        </h4>
                        <p className='p4-text'>Location: 5km from college</p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* start of recent reviews section */}
      <div class="container-fluid mt-2" style={{ "background-color": "aliceblue" }}>
        <div class="row">
          <div class="col-md-12  col-10 mx-auto">
            <h3 class="text-center main-heading pb-5 mb-5">Recent Reviews</h3>
            <div class="row">
              <div class="col-md-4">
                <div class="box">
                <a href="/explore">
                  <div class="review settings">
                    <h6> <RxAvatar className='review-icon' size={25} />Syed Mohd. Haider, GB ROAD University</h6>
                    <p>12-02-2020</p>
                    <div className="stars">
                      < AiFillStar className='review-stars' size={17} />
                      < AiFillStar className='review-stars' size={17} />
                      < AiFillStar className='review-stars' size={17} />
                      < AiFillStar className='review-stars' size={17} />
                      < AiOutlineStar className='review-stars' size={17} />
                    </div>
                    <h2>Hi, I'm wanting to say that mera jindagi barbad ho gya, cries in 4k60fps no gf, no motivation, just a matrix pupet</h2>
                  </div>
                  </a>
                </div>
              </div>
              <div class="col-md-4">
                <div class="box">
                  <a href="/explore">
                  <div class="review settings">
                    <h6><RxAvatar className='review-icon' size={25} />Anupam Anand, Cambridge University</h6>
                    <p>15-05-1947</p>
                    <div className="stars">
                      < AiFillStar className='review-stars' size={17} />
                      < AiFillStar className='review-stars' size={17} />
                      < AiFillStar className='review-stars' size={17} />
                      < AiOutlineStar className='review-stars' size={17} />
                      < AiOutlineStar className='review-stars' size={17} />
                    </div>
                    <h2>Hey, My name is anupam and I'm gay right activist from Marium nagar. I go to christ university and that's the biggest mistake of my life taking admission here in the first place</h2>
                  </div>
                  </a>
                </div>
              </div>
              <div class="col-md-4">
                <div class="box">
                <a href="/explore">
                  <div class="review settings">
                    <h6> <RxAvatar className='review-icon' size={25} />Harnoor Chutiya, Florida University</h6>
                    <p>6-9-2069</p>
                    <div className="stars">
                      < AiOutlineStar className='review-stars' size={17} />
                      < AiOutlineStar className='review-stars' size={17} />
                      < AiFillStar className='review-stars' size={17} />
                      < AiFillStar className='review-stars' size={17} />
                      < AiFillStar className='review-stars' size={17} />
                    </div>
                    <h2>Im simply chutiya, baap ka paisa udake us gya padhne, phir ek chomu type ladki ko gf bana liya because koi bhav nhi deta tha</h2>
                  </div>
                  </a>
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
            <h3 class="footer-text text-center main-heading">RateMyPg.com</h3>
            <ul className='footer-links'>
              <li>
                <a class="text-center" href="/">About us</a>
              </li>
              <li>
                <a href="/">Help</a>
              </li>
              <li>
                <a href="/tc">Terms and condition</a>
              </li>
              <li>
                <a href="/privacy">Privacy policy</a>
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