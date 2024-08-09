function Contact() {
    return (
      <div className="Contact">
            {/* <!-- Hire me section --> */}
            <section class="bg-gray p-0 section">
                <div class="container">
                    <div class="card bg-primary">
                        <div class="card-body text-light">
                            <div class="row align-items-center">
                                <div class="col-sm-9 text-center text-sm-left">
                                <h5 class="mt-3">Hire Me For Your Project</h5>
                                <p class="mb-3">Looking for a skilled QA professional to ensure the quality of your software? Let's collaborate to deliver exceptional results and elevate your project to the next level.</p>
                                </div>
                                <div class="col-sm-3 text-center text-sm-right">
                                    <a href="mailto:prajjwalsubedi95@gmail.com"><button class="btn btn-light rounded">Hire Me!</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End od Hire me section. --> */}

            {/* <!-- Contact Section --> */}
            <section id="contact" class="position-relative section">
                <div class="container text-center">
                <h6 class="subtitle">Contact</h6>
                <h6 class="section-title mb-4">Get In Touch</h6>
                <p class="mb-5 pb-4">I'd love to hear from you! Whether you have a question, need assistance, or want to discuss a project, feel free to reach out. <br />
                    Let's connect and explore how we can work together.</p>
                    <div class="contact text-left">
                        <div class="form">
                            <h6 class="subtitle">Available on Office hours</h6>
                            <h6 class="section-title mb-4">Get In Touch</h6>
                            <form>
                            <div class="form-group">
                                    <input type="text" class="form-control" id="exampleInputName"
                                        placeholder="Name" required/>
                                </div>
                                <div class="form-group">
                                    <input type="email" class="form-control" id="exampleInputEmail1"
                                        aria-describedby="emailHelp" placeholder="Enter email" required/>
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" id="exampleInputSubject"
                                        placeholder="Subject" required/>
                                </div>
                                <div class="form-group">
                                    <textarea name="contact-message" id="exampleInputMessage" cols="30" rows="5" 
                                        class="form-control" placeholder="Message"></textarea>
                                </div>
                                <button type="submit" class="btn btn-primary btn-block rounded w-lg">Send Message</button>
                            </form>
                        </div>
                        <div class="contact-infos">
                            <div class="item">
                                <i class="ti-location-pin"></i>
                                <div class="">
                                    <h5>Location</h5>
                                    <p>Broad Run, Virginia, USA</p>
                                </div>
                            </div>
                            <div class="item">
                                <i class="ti-mobile"></i>
                                <div>
                                    <h5>Phone Number</h5>
                                    <p>(571) 538-9808</p>
                                </div>
                            </div>
                            <div class="item">
                                <i class="ti-email"></i>
                                <div class="mb-0">
                                    <h5>Email Address</h5>
                                    <p>prajjwalsubedi95@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="map">
                    <iframe src="https://snazzymaps.com/embed/61257"></iframe>
                </div>
            </section>
            {/* <!-- End of Contact Section --> */}
      </div>
    );
  }
  
  export default Contact;
  