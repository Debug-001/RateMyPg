import React from 'react'
import { BsHouse } from 'react-icons/bs'
import { IoIosFlash } from 'react-icons/io'
import first from '../assets/first.png'
import second from '../assets/second.png'
import third from '../assets/third.png'

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
                  <a class="navbar-text" href="/">RateMyPG.com</a>
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


      {/* start of corousel section */}
      <div className="container1">
        <div className="row">
          <div className="col-md-10 col-10 mx-auto ">
            <h1>Find perfect PG as per your needs.&nbsp; 
            <span className='sub-text'>&nbsp; Fast and quick<IoIosFlash color="yellow" size={130} /></span> </h1>
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src={first} class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src={second} class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>Some representative placeholder content for the second slide.</p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src={third} class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>Some representative placeholder content for the third slide.</p>
                  </div>
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
        </div>

        {/* start of review section */}
        <div className="container1">
          <div className="row">
            <div className="col-md-10 col-10 mx-auto "><h1>thiiss</h1>
            </div>
          </div>
        </div>


      </div>
      )
}

      export default Home