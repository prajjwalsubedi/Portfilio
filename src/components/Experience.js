function Experience() {
    return (
        <div className="Experience">
            {/* <!-- Experience section --> */}
            <section id="experience" class="section">
                <div class="container text-center">
                    <h6 class="subtitle">Experience</h6>
                    <h6 class="section-title mb-4">Highlights of My Professional Journey</h6>
                    <p class="mb-5 pb-4">Explore key roles and projects that showcase my expertise in software testing and
                        quality assurance.</p>
                    <div class="row">
                        <div class="col-sm-4">
                            <div class="card testmonial-card border">
                                <div class="card-body">
                                    <h1 class="title">Software Development Engineer in Test</h1>
                                    <h1 class="subtitle">Apartments.com</h1>
                                    <p><br />December 2022 - Present<br />Worked with agile teams to develop automation frameworks
                                        and scripts using Java, Selenium, and Maven. Conducted browser compatibility and
                                        regression tests, managed API testing with REST Assured and Postman.
                                    </p>
                                    <button class="btn btn-primary rounded" type="button" data-toggle="modal" data-target="#sdet">Learn More</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="card testmonial-card border">
                                <div class="card-body">
                                    <h1 class="title">Test Automation Engineer</h1>
                                    <h1 class="subtitle">General Motors</h1>
                                    <p><br />July 2020 - December 2022<br />Automated regression and functional test suites using
                                        Selenium and TestNG. Managed test execution across platforms with Selenium Grid,
                                        integrated Jenkins for continuous integration and deployment.<br />
                                    </p>
                                    <button class="btn btn-primary rounded" type="button" data-toggle="modal" data-target="#testAutomationEngineer">Learn More</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="card testmonial-card border">
                                <div class="card-body">
                                    <h1 class="title">QA Engineer</h1>
                                    <h1 class="subtitle">Bank of New York</h1>
                                    <p><br />January 2018 - June 2020<br />Executed manual and automated tests, developed automation
                                        scripts for web applications, and integrated tests with Jenkins. Created and maintained
                                        test data and scripts for thorough functional and regression testing.
                                    </p>
                                    <button class="btn btn-primary rounded" type="button" data-toggle="modal" data-target="#qaEngineer">Learn More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* < />!-- Modals --> */}
            <div class="modal" tabindex="-1" role="dialog" id="sdet">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title fs-5" id="staticBackdropLabel">Software Development Engineer in Test <br /></h4>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <h5 class="modal-title fs-5" id="staticBackdropLabel">Apartments.com<br /></h5>
                            <p><strong>December 2022 - Present</strong></p>
                            <ul>
                                <li>Worked in agile scrum methodology. Attended daily standup meetings.</li>
                                <li>Created automation test scripts using data-driven framework and Page Object Model with
                                    Selenium WebDriver, Java, and Maven.</li>
                                <li>Developed automation frameworks using Java, Selenium, and Maven.</li>
                                <li>Prepared test design approaches by collaborating with the team and developers.</li>
                                <li>Utilized Page Object Model, UI Mapping, and Selenium Data Driven with CSV and CSS Selectors.
                                </li>
                                <li>Executed browser compatibility and regression tests with Selenium WebDriver for every new
                                    build release.</li>
                                <li>Developed Selenium scripts in TestNG for parameterization using Data Provider annotation.
                                </li>
                                <li>Used Git for version control of automation scripts.</li>
                                <li>Tested REST API Web Services with REST plug-in and Postman tool.</li>
                                <li>Performed BDD with Data Driven Test Automation Framework using Cucumber and Gherkins
                                    language.</li>
                                <li>Generated automation scripts for both REST and SOAP Web Services using Java and REST
                                    Assured.</li>
                                <li>Used log4J for logging during test execution.</li>
                                <li>Reviewed Selenium automation scripts.</li>
                                <li>Executed test cases locally, on VM machines, and using Selenium GRID.</li>
                                <li>Performed data-driven testing using Selenium WebDriver, TestNG, and JDBC Connections.</li>
                                <li>Used Maven for building and running the automation framework and sending automation reports
                                    via email.</li>
                                <li>Performed sanity tests for integrated components to determine eligibility for regression
                                    testing.</li>
                                <li>Used Apache Maven for project builds.</li>
                                <li>Detected defects, communicated with developers using JIRA.</li>
                                <li>Executed Selenium test scripts across different browsers and checked compatibility.</li>
                                <li>Ensured clear communication on requirements and defect reports with software engineers.</li>
                                <li>Troubleshot web page issues using browser-based developer tools.</li>
                            </ul>
                            <p><strong>Environment:</strong> Java, Selenium WebDriver, TestNG, Jenkins, Fire Path, Firebug,
                                Eclipse, HTML, XML, XPath, Quality Center, Internet Explorer, Chrome, Oracle, Windows.</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal" tabindex="-1" role="dialog" id="testAutomationEngineer">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title fs-5" id="staticBackdropLabel">Test Automation Engineer</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <h5 class="modal-title fs-5" id="staticBackdropLabel">General Motors, IL</h5>
                            <p><strong>July 2020 - December 2022</strong></p>
                            <ul>
                                <li>Worked in an agile development environment with iterative releases and extensive coordination between developers, testers, and business analysts.</li>
                                <li>Extensively automated regression and functional test suites using Selenium WebDriver and TestNG Annotations.</li>
                                <li>Converted automation scripts to a new framework using Selenium WebDriver, Java, and TestNG.</li>
                                <li>Wrote Selenium scripts for taking screenshots and handled mouse movements and hover actions using Selenium Actions class.</li>
                                <li>Created data-driven and batch tests with Selenium WebDriver and performed exception handling.</li>
                                <li>Used Maven and Selenium Grid for executing test suites on different platforms and browsers in parallel.</li>
                                <li>Expert in grouping test suites, cases, and methods for regression and functional testing using TestNG Annotations like Groups, Parameter, Data Provider, and Tags.</li>
                                <li>Managed dependencies and created test profiles using Maven for sanity and regression testing.</li>
                                <li>Integrated Jenkins with Git for automated build schedules and version control.</li>
                                <li>Utilized Linux/Unix commands for GitHub operations through the command line.</li>
                                <li>Worked on distributed test automation execution as part of Continuous Integration using Selenium Grid and Jenkins.</li>
                                <li>Practiced Agile Scrum and delivered test automation on time, ensuring build quality and coordinating testing activities.</li>
                                <li>Participated in audit meetings and contributed to achieving QA testing goals.</li>
                                <li>Tested application compatibility with Internet Explorer, Firefox, and Safari.</li>
                                <li>Participated in Daily Scrum, Stand-up, walkthrough, and weekly assessment meetings with business analysts and developers.</li>
                            </ul>
                            <p><strong>Environment:</strong> Jira, Selenium WebDriver, TestNG, Oracle, Java, Ruby on Rails, HTML, XML, SQL, Windows, and Linux.</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div><div class="modal" tabindex="-1" role="dialog" id="qaEngineer">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title fs-5" id="staticBackdropLabel">QA Engineer</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <h5 class="modal-title fs-5" id="staticBackdropLabel">Bank of New York, NJ</h5>
                            <p><strong>January 2018 – June 2020</strong></p>
                            <ul>
                                <li>Executed manual and automated tests and reported defects by running automated tests.</li>
                                <li>Reviewed results of all tests and reported anomalies into the defect tracking database.</li>
                                <li>Created and enhanced test scripts to handle changes in the GUI and test environment using Selenium WebDriver and TestNG.</li>
                                <li>Developed automation scripts for new enhancements using Selenium WebDriver and TestNG.</li>
                                <li>Automated regression test cases using Selenium WebDriver.</li>
                                <li>Created a Modular Driven Automation Framework from scratch.</li>
                                <li>Automated web application testing using Java Selenium framework in an Agile environment.</li>
                                <li>Reviewed test cases with development teams and product management; modified test cases based on feedback.</li>
                                <li>Created XML-based test suites and integrated them with Jenkins for regular execution of automation scripts.</li>
                                <li>Prepared test data for simultaneous and combined Trade testing, and created test cases and scripts based on functional specifications.</li>
                                <li>Updated and maintained existing Selenium scripts.</li>
                                <li>Created positive and negative assertions based on business requirements.</li>
                                <li>Used Jenkins for continuous integration to schedule and run automated test scripts.</li>
                                <li>Managed build processes using Git for each release, QA, Integration, and staging environments.</li>
                                <li>Participated actively in daily Scrum meetings and bi-weekly Sprint releases.</li>
                            </ul>
                            <p><strong>Environment:</strong> Java, Selenium WebDriver, JUnit, Jenkins, Fire Path, Firebug, Eclipse, HTML, XML, XPath, Quality Center, Internet Explorer, Chrome, Oracle, Windows.</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* <!-- End Of Modals --> */}
            {/* <!-- End of Experience section --> */}

        </div>
    );
  }
  
  export default Experience;

  