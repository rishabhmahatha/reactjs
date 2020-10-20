import React from "react";
import logo from "../assets/logo.png";
import banner from "../assets/banner.png";
import cappuccino from "../assets/cappuccino.png";
import latte from "../assets/latte.png";
import espresso from "../assets/espresso.png";
import "../css/Home.css";

class Home extends React.Component {
  render() {
    return (
      <div>
        <header>
          <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#" style={{marginTop:"5px"}}>
              <img
                src={logo}
                width="40"
                height="40"
                style={{marginBottom:"5px"}}
                class="d-inline-block"
                alt=""
              ></img>
              Coffee
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#">
                    Home <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    About <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Gallary <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Contact Us <span class="sr-only">(current)</span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </header>

        <article style={{ marginTop: "50px" }}>
          <div class="header-container">
            <img src={banner} width= "100%" class="img-fluid" alt=""></img>
            <div class="header-text" style={{}}>
              <h1 class = "header-font">Coffee..</h1>
              <h3 class = "subHeader-font">
                Coffee is a beverage that puts one to sleep when not drank.
              </h3>
            </div>
          </div>
          <p class="paragraph">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>

          <div
            class="fixImagePosition"
            style={{
              height: "100vh",
            
              
            }}
          ></div>

          <div class="row noPadding noMargin"  style={{marginTop : 20}}>
            <div class="col-lg-4">
              <img
                src={cappuccino}
                width="50%"
                height="50%"
                class="img-fluid"
                alt=""
              ></img>
              <h2>Cappuccino</h2>
              <div class="row noPadding noMargin">
                <p class="col-sm-3 col-lg-0"></p>
                <p class="col-sm-6 col-lg-12">
               Cappuccino is an Italian coffee-based drink prepared with espresso, hot milk, and milk foam. But do you know where the drink - and the word - comes from? And would you believe this hot new beverage sweeping the nation is actually a hundred years old? </p>
                <p class="col-sm-3 col-lg-0"></p>
              </div>
            </div>

            <div class="col-lg-4">
              <img
                src={latte}
                width="50%"
                height="50%"
                class="img-fluid"
                alt=""
              ></img>
              <h2>Latte</h2>
              <div class="row noPadding noMargin">
                <p class="col-sm-3 col-lg-0"></p>
                <p class="col-sm-6 col-lg-12">
                Caffè latte is a coffee-based drink made primarily from espresso and steamed milk. It consists of one-third espresso, two-thirds heated milk and about 1cm of foam. Traditionally the cafe latte is a ratio of two parts coffee and one part steamed milk.
                </p>
                <p class="col-sm-3 col-lg-0"></p>
              </div>
            </div>

            <div class="col-lg-4">
              <img
                src={espresso}
                width="50%"
                height="50%"
                class="img-fluid"
                alt=""
              ></img>
              <h2>Espresso</h2>
              <div class="row noPadding noMargin">
                <p class="col-sm-3 col-lg-0"></p>
                <p class="col-sm-6 col-lg-12">
                Espresso coffee can be made with a wide variety of coffee beans and roast levels. Espresso is generally thicker than coffee brewed by other methods, has a higher concentration of suspended and dissolved solids, and has crema on top.
                </p>
                <p class="col-sm-3 col-lg-0"></p>
              </div>
            </div>
          </div>
        </article>

        <footer class="footer">Copyright &copy; 2020</footer>
      </div>
    );
  }
}

export default Home;
