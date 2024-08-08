function App() {
  return (
    <div className="App">
       {/* <!-- Page navigation --> */}
    <nav class="navbar navbar-expand-lg navbar-light fixed-top" data-spy="affix" data-offset-top="0">
        <div class="container">
            <a class="navbar-brand" href="#"><img src="assets/imgs/logo.svg" alt="/"></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto align-items-center">
                    <li class="nav-item">
                        <a class="nav-link" href="#home">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#about">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#service">Service</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#experience">Experience</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#testmonial">Testmonial</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#blog">Blog</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#contact">Contact</a>
                    </li>
                    <li class="nav-item">
                        <a class="- btn btn-primary rounded ml-4" href="components.html">Copmonents</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    {/* <!-- End of page navigation -->

    <!-- Page Header --> */}
    <header class="header" id="home">
        <div class="container">
            <div class="infos">
                <h6 class="subtitle">Hello, I'm</h6>
                <h6 class="title">Prajjwal Subedi</h6>
                <p>Software Development Engineer in Test</p>

                <div class="buttons pt-3">
                    <button class="btn btn-primary rounded">HIRE ME</button>
                    <button class="btn btn-dark rounded">DOWNLOAD CV</button>
                </div>

                <div class="socials mt-4">
                    <a class="social-item" href="https://www.linkedin.com/in/prajjwalsubedi/"><i class="ti-linkedin"></i></a>
                    <a class="social-item" href="https://github.com/prajjwalsubedi"><i class="ti-github"></i></a>
                    <a class="social-item" href="https://twitter.com/prazwolsubedi"><i class="ti-twitter"></i></a>
                </div>
            </div>
            <div class="img-holder">
                <img src="assets/imgs/man.svg" alt=""/>
            </div>
        </div>

        {/* <!-- Header-widget -->
        <!-- <div class="widget">
            <div class="widget-item">
                <h2>200+</h2>
                <p>Successful Deployments</p>
            </div>
            <div class="widget-item">
                <h2>456</h2>
                <p>Project Completed</p>
            </div>
            <div class="widget-item">
                <h2>789</h2>
                <p>Awards Won</p>
            </div>
        </div> --> */}
    </header>
    {/* <!-- End of Page Header --> */}
    </div>
  );
}

export default App;
