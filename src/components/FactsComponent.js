import React, { Component } from 'react'
class FactsSection extends Component {
    render() {
        return (
            <div className="container">
        <div className="section-title">
          <h2>Facts</h2>
          <p>Below are some of the facts from my overall career.</p>
        </div>
        <div className="row no-gutters">
          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay={300}>
            <div className="count-box">
              <i className="bi bi-building"/>
              <span data-purecounter-start={0} data-purecounter-end={5} data-purecounter-duration={1} className="purecounter" />
              <p><strong>Organization</strong> worked with</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay={400}>
            <div className="count-box">
              <i className="bi bi-journal-richtext" />
              <span data-purecounter-start={0} data-purecounter-end={6} data-purecounter-duration={1} className="purecounter" />
              <p><strong>Projects</strong> worked on</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay={500}>
            <div className="count-box">
              <i className="bi bi-terminal" />
              <span data-purecounter-start={0} data-purecounter-end={6570} data-purecounter-duration={1} className="purecounter" />
              <p><strong>Lines</strong> of code</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay={600}>
            <div className="count-box">
              <i className="bi bi-people" />
              <span data-purecounter-start={0} data-purecounter-end={28} data-purecounter-duration={1} className="purecounter" />
              <p><strong>Professionals</strong> worked with</p>
            </div>
          </div> 
        </div>
      </div>
        )
    }
}
export default FactsSection