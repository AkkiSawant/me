import React, { Component } from 'react'
class ResumeSection extends Component {
    render() {
        return (
            <div className="container">
            <div className="section-title">
              <h2>Resume</h2>
              <p>Experienced Senior Software Engineer having experience working for different organisations. Carrying experience from different domain and architectures with desire to learn new technology and frameworks, meet new people and work with skilled professional.</p>
            </div>
            <div className="row">
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
                <h3 className="resume-title">Professional Experience</h3>
                <div className="resume-item">
                  <h4>Senior Software Engineer</h4>
                  <h5>2020 - Present</h5>
                  <p><em>Baker Hughes </em></p>
                  <ul>
                    <li>Responsible for creating REST services using NodeJS along with Postgres deployed as a SaaS on top of which other services and application are built. </li>
                    <li>Being a team lead for a team which were responsible for handling 4 services in Digital Ecosystem </li>
                    <li>Using Typescript with NodeJS for creation of services.</li>
                    <li>Following TDD approach for application and writing unit test cases using chai and mocha.</li>
                    <li>Following Agile methodology and completely adhering to SCRUM rules.</li>
                  </ul>
                </div>
                <div className="resume-item">
                  <h4>Associate Software Developer</h4>
                  <h5>2019 - 2020</h5>
                  <p><em>J.P. Morgan </em></p>
                  <ul>
                    <li>Working on MIFID2 regulatory reports for Europe and Brexit changes.</li>
                    <li>Implementation of Version1.6, 1.7 transformation logic for different reports.</li>
                    <li>Involvement with BA to understand the business and creation of business logic.</li>
                    <li>Providing support for UAT and PROD issues and being part of weekly release cycle.</li>
                  </ul>
                </div>
                <div className="resume-item">
                  <h4>Analyst Software Developer</h4>
                  <h5>2017 - 2019</h5>
                  <p><em>TIAA </em></p>
                  <ul>
                    <li>Working on Filehub which acts as a file orchestration module, validation of the files and applying changes to the file, creating custom report for individual clients.</li>
                    <li>Involves rapid development as the requirements are client centric and can effect the business.</li>
                    <li>Taking care of requirements of more than 60clients/Institution's payroll data.</li>
                    <li>Replaced 4 contract workers on completing 6 months in the project.</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
                <div className="resume-item">
                  <h4>Software Engineer</h4>
                  <h5>2016 - 2017</h5>
                  <p><em>Citiustech Pvt. Ltd. </em></p>
                  <ul>
                    <li>Creating website in Java Spring that would act as wizard for configuring an ldap server that would in turn produce an XMLfile. </li>
                    <li>Working with team of 8 skilled professional in both frontend and backedend technologies which include Springboot, SpringMVC, Angular1.5. </li>
                    <li>Following Agile methodology of software development.</li>
                    <li>Learning the technologies that would be used in the project along with finding alternatives to make things more stable and better.</li>
                  </ul>
                </div>
                <div className="resume-item">
                  <h4>Software Developer</h4>
                  <h5>2013 - 2016</h5>
                  <p><em>Logixal Solutions Pvt Ltd </em></p>
                  <ul>
                    <li>Worked in 2 projects and 2 in house initiatives which gave the opportunity to work for the clientend as well as the freedom to try my own thinking. </li>
                    <li>Creating B2BAccelerators for the organizations which consists of basic B2B functionality like audit history buying and approval workflow</li>
                    <li>The accelerator would enable the organization to reduced development time forupcoming B2B requirements by providing a base to start off.</li>
                  </ul>
                </div>
                <h3 className="resume-title">Education</h3>
                <div className="resume-item">
                  <h4>Master of Engineering </h4>
                  <h5>2009 - 2013</h5>
                </div>
              </div>
            </div>
          </div>
        )
    }
}
export default ResumeSection