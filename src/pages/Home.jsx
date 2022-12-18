import React from 'react'
import {BsHouse} from 'react-icons/bs'




const Home = () => {
  return (
    <div className="containe-fluid navbar-style py-4" >
      <div className="row">
        <div className="col-md-12 col-12 ">
          <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
              <div className="icon">
                <BsHouse color="black" size={26}/>
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
  )
}

export default Home