import React from "react";
import logo from "../logo.svg";
import banner from "../assets/banner.jpg";
import "../css/Home.css";

class Home extends React.Component {
  render() {
    return (
      <div>
        <header>
          <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#">
              <img
                src={logo}
                width="30"
                height="30"
                class="d-inline-block align-top"
                alt=""
              ></img>
              Bootstrap
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
            <img src={banner} width="100%" class="img-fluid" alt=""></img>
            <div class="header-text">
              <h1>Coffee..</h1>
              <h3>
                Coffee is a beverage that puts one to sleep when not drank.
                ...Annonyms
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

          <div class="row noPadding noMargin">
            <div class="col-lg-4">
              <img
                src={logo}
                width="40%"
                height="40%"
                class="img-fluid"
                alt=""
              ></img>
              <h2>Heading</h2>
              <div class="row noPadding noMargin">
                <p class="col-sm-3 col-lg-0"></p>
                <p class="col-sm-6 col-lg-12">
                  Donec sed odio dui. Etiam porta sem malesuada magna mollis
                  euismod. Nullam id dolor id nibh ultricies vehicula ut id
                  elit. Morbi leo risus, porta ac consectetur ac, vestibulum at
                  eros. Praesent commodo cursus magna.
                </p>
                <p class="col-sm-3 col-lg-0"></p>
              </div>
            </div>

            <div class="col-lg-4">
              <img
                src={logo}
                width="40%"
                height="40%"
                class="img-fluid"
                alt=""
              ></img>
              <h2>Heading</h2>
              <div class="row noPadding noMargin">
                <p class="col-sm-3 col-lg-0"></p>
                <p class="col-sm-6 col-lg-12">
                  Donec sed odio dui. Etiam porta sem malesuada magna mollis
                  euismod. Nullam id dolor id nibh ultricies vehicula ut id
                  elit. Morbi leo risus, porta ac consectetur ac, vestibulum at
                  eros. Praesent commodo cursus magna.
                </p>
                <p class="col-sm-3 col-lg-0"></p>
              </div>
            </div>

            <div class="col-lg-4">
              <img
                src={logo}
                width="40%"
                height="40%"
                class="img-fluid"
                alt=""
              ></img>
              <h2>Heading</h2>
              <div class="row noPadding noMargin">
                <p class="col-sm-3 col-lg-0"></p>
                <p class="col-sm-6 col-lg-12">
                  Donec sed odio dui. Etiam porta sem malesuada magna mollis
                  euismod. Nullam id dolor id nibh ultricies vehicula ut id
                  elit. Morbi leo risus, porta ac consectetur ac, vestibulum at
                  eros. Praesent commodo cursus magna.
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
