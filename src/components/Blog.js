function Blog() {
    return (
        <div className="Blog">
            {/* <!-- Blog Section --> */}
            <section id="blog" class="section">
                <div class="container text-center">
                <h6 class="subtitle">My Blogs</h6>
                <h6 class="section-title mb-4">Recent Posts</h6>
                <p class="mb-5 pb-4">Explore insightful articles on the latest trends, best practices, and expert tips in QA testing. Stay updated with the evolving world of software quality assurance, and enhance your testing knowledge. <br />
                    Dive into topics that matter most to QA professionals.</p>
                    <div class="row text-left">
                        <div class="col-md-4">
                            <div class="card border mb-4">
                                <img src="assets/imgs/Blog/The_Evolution_of_QA.png" alt="" class="card-img-top w-100"/>
                                <div class="card-body">
                                    <h5 class="card-title">The Evolution of QA: From Manual Testing to Automation</h5>
                                    <div class="post-details">
                                        <a href="https://www.linkedin.com/in/prajjwalsubedi">Posted By: Prajjwal Subedi</a>
                                    </div>
                                    <p>
                                    QA has transformed from manual testing to advanced automation, improving speed, scalability, and accuracy. With AI and continuous integration, QA now plays a crucial role in delivering high-quality software rapidly and efficiently.</p>
                                    <a href="https://www.linkedin.com/pulse/evolution-qa-from-manual-testing-automation-prajjwal-subedi-pcqge">Read More..</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
  }
  
  export default Blog;
  