import React from 'react'
import { BsHouse } from 'react-icons/bs'
import footer_logo from '../assets/footer_logo.jpg';
import '../pages/explore.css'
import {BiImageAlt} from 'react-icons/bi'
// import {BsArrowLeft} from 'react-icons/bs'


const Explore = () => {
  return (
    <div>
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
                      <a class="btn btn-outline-dark" href="/signup" role="button">SignUp</a>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Pg review section */}
      <div className="container2-fullwidth">
        <div className="main">
          <div className="col-md-12 col-12">
            <h3>Christ Residence Hall  </h3></div>
            <div><button className='button' type="btn btn-primary"> <BiImageAlt size={25}/>0 photos</button>
          </div>
          </div>
          </div>

        <div className="container">

        </div>
          {/* <div className="row">
          <div className="col-md-12 col-12 mt-5 pt-3">
            <a href='/'>
           <h6><BsArrowLeft size={16}/>&nbsp;All Christ Univeristy Dorms
           </h6>
           </a>
          </div>
          </div>
        </div>
      </div> */}


      <div class="container-fluid mt-5 bh-gray-5">
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

export default Explore