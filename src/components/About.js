function About() {
    return (
        <div className="About">
            {/* <!-- About section --> */}
            <section id="about" class="section mt-3">
                <div class="container mt-5">
                    <div class="row text-center text-md-left">
                        <div class="col-md-3">
                            <img src="assets/imgs/Prajjwal_Subedi.png" alt="" class="img-thumbnail mb-4"/>
                        </div>
                        <div class="pl-md-4 col-md-9">
                            <h6 class="title">Prajjwal Subedi</h6>
                            <p class="subtitle">Software Development Engineer in Test</p>
                            <p>I am Prajjwal Subedi, a seasoned Software Test Engineer and SDET with over six years of
                                experience in Software Quality Assurance and Testing. My expertise lies in developing and
                                maintaining automation frameworks using tools like Selenium WebDriver, Maven, and Jenkins. I’ve
                                worked across various industries, including finance and automotive, where I’ve played a key role
                                in ensuring the quality and reliability of software products. My experience spans both manual
                                and automated testing, API testing, and working in Agile environments. I’m passionate about
                                delivering high-quality software and continuously improving testing processes.</p>
                                <a href="assets/resume/PRAJJWAL_SUBEDI_Resume.pdf"><button class="btn btn-primary rounded mt-3">DOWNLOAD CV</button></a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
  }
  
  export default About;
  