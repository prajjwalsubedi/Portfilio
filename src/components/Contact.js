import React, { useState } from 'react';

function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const sendMail = (e) => {
        e.preventDefault(); // Prevent form submission which causes page reload

        const mailtoLink = `mailto:${encodeURIComponent(email)}`
            + `?cc=prajjwalsubedi95@gmail.com`
            + `&subject=${encodeURIComponent(subject)}`
            + `&body=${encodeURIComponent(message)}`;

        window.location.href = mailtoLink;
    };

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
                <h6 className="subtitle">Available on Office hours</h6>
                <h6 className="section-title mb-4">Get In Touch</h6>
                <form onSubmit={sendMail}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Subject"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <textarea
                            className="form-control"
                            cols="30"
                            rows="5"
                            placeholder="Message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block rounded w-lg">
                        Send Message
                    </button>
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
                <div id="map">
                    <iframe src="https://snazzymaps.com/embed/61257"></iframe>
                </div>
            </section>
            {/* <!-- End of Contact Section --> */}
      </div>
    );
  }
  
  export default Contact;
  