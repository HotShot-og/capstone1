window.onload = () => {
    header();
    navbar();
    footer();
}

function header() {
    var dheader = document.getElementById("dheader");
    dheader.innerHTML =
    `<header>
    <div class="row align-items-center">
        <div class="col-lg-4 col-sm-4 col-xs-12 mb-2 mt-2">
            <a href="../index.html"><img class="img-fluid" src="../media/logo.png" alt=""></a>
        </div>
        <div class="col-lg-4 col-sm-4 col-xs-12 mb-2 d-flex justify-content-center search-cnt">
            <input id="search-input" type="search" class="form-control" name="" id="">
            <button id="search-btn" class="btn"><i class="fa-sharp fa-solid fa-magnifying-glass"></i></button>
        </div>
        <div id="headcnt" class="col-lg-4 col-sm-4 col-xs-12 mb-2">
            <div class="">
                <a class="login" href="login.html">Login</a>
            </div>
            <div class="ms-4 me-3">
                <a class="cart-logo" href="cart.html"><i class="fa-solid fa-cart-plus fa-xl"></i></a>
            </div>
        </div>
    </div>
</header>`;
}

function navbar() {
    var dnavbar = document.getElementById("dnavbar");
    dnavbar.innerHTML = 
    `<nav id="navBar">
            <ul class="nav justify-content-center">
                <li class="nav-item">
                  <a class="nav-link" href="../index.html">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="products.html">All products</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Women
                      </a>
                    
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="products.html">All</a></li>
                        <li><a class="dropdown-item" href="dresses.html">Dresses</a></li>
                        <li><a class="dropdown-item" href="pants.html">Pants</a></li>
                        <li><a class="dropdown-item" href="skirts.html">Skirts</a></li>
                      </ul>
                </li>
                <li class="nav-item">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                       Men
                      </a>
                    
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="products.html">All</a></li>
                        <li><a class="dropdown-item" href="shirts.html">Shirts</a></li>
                        <li><a class="dropdown-item" href="pants.html">Pants</a></li>
                        <li><a class="dropdown-item" href="hoodies.html">Hoodies</a></li>
                      </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="kids.html">Kids</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="contact.html">Contact</a>
                </li>
              </ul>
        </nav>
        <nav id="togglenavBar" class="navbar navbar-expand-lg">
          <div class="container-fluid">
            <button id="toggleBtn" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            
              <ul class="navbar-nav me-auto mb2">
                <li class="nav-item">
                  <a class="nav-link" href="../index.html">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="products.html">All products</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Women
                      </a>
                    
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="products.html">All</a></li>
                        <li><a class="dropdown-item" href="dresses.html">Dresses</a></li>
                        <li><a class="dropdown-item" href="pants.html">Pants</a></li>
                        <li><a class="dropdown-item" href="skirts.html">Skirts</a></li>
                      </ul>
                </li>
                <li class="nav-item">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                       Men
                      </a>
                    
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="products.html">All</a></li>
                        <li><a class="dropdown-item" href="shirts.html">Shirts</a></li>
                        <li><a class="dropdown-item" href="pants.html">Pants</a></li>
                        <li><a class="dropdown-item" href="hoodies.html">Hoodies</a></li>
                      </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="kids.html">Kids</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="contact.html">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        `;
}

function footer() {
    var dfooter = document.getElementById("dfooter");
    dfooter.innerHTML = 
    `<footer>
          <div class="footer-links row text-center align-items-center px-0 container-fluid">
            <div class="col-lg-3 col-sm-6 col-xs-12 mt-4">
              <div>
                <h6>Women</h6>
              </div>
              <div>
                <a href="dresses.html">Dresses</a>
              </div>
              <div>
                <a href="pants.html">Pants</a>
              </div>
              <div>
                <a href="skirts.html">Skirts</a>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6 col-xs-12 mt-4">
              <div>
                <h6>Men</h6>
              </div>
              <div>
                <a href="shirts.html">Shirts</a>
              </div>
              <div>
                <a href="pants.html">Pants</a>
              </div>
              <div>
                <a href="hoodies.html">Hoodies</a>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6 col-xs-12 mt-4">
              <div>
                <h6>Kids</h6>
              </div>
              <div>
                <a href="shirts.html">Shirts</a>
              </div>
              <div>
                <a href="pants.html">Pants</a>
              </div>
              <div>
                <a href="hoodies.html">Hoodie</a>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6 col-xs-12 mt-4">
              <div>
                <h6>Links</h6>
              </div>
              <div>
                <a href="../index.html">Home</a>
              </div>
              <div>
                <a href="login.html">Login</a>
              </div>
              <div>
                <a href="contact.html">Contact Us</a>
              </div>
            </div>

          </div>
          <hr class="text-light">
          <div class="text-center text-light container-fluid copyright p-0">
            <p>© Gareeb Mart 2023-2069</p>
          </div>
        </footer>`;


}


function checkPass() {
  var email = document.getElementById("email").value;
  var pass = document.getElementById("pass").value;
  if (email == "admin@admin.com" && pass =="123456") {
    alert('Logged in successfully!!')
  }
  else {
    alert('Incorrect email or password');
  }
}