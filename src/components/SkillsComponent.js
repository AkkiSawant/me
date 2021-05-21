import React, { Component } from 'react'
class SkillsSection extends Component {
    render(){
        return (
            <div className="container">
        <div className="section-title">
          <h2>Skills</h2>
          <p>A skill is the learned ability to perform an action with determined results with good execution often within a given amount of time, energy, or both.</p>
        </div>
        <div className="row skills-content">
          <div className="col-lg-6" data-aos="fade-up">
            <div className="progress">
              <span className="skill">JAVA <i className="val">90%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>
            <div className="progress">
              <span className="skill">JavaScript <i className="val">70%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>
            <div className="progress">
              <span className="skill">SQL <i className="val">65%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow={65} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
            <div className="progress">
              <span className="skill">Spring <i className="val">80%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>
            <div className="progress">
              <span className="skill">NodeJS <i className="val">50%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>
            <div className="progress">
              <span className="skill">Mocha/Chai <i className="val">55%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow={55} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>
          </div>
        </div>
      </div>
        )
    }
}
export default SkillsSection