import React, { Component } from 'react';

class Landing extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row mt-3">
          <div className="col col-md-9 col-lg-7 ml-md-auto mr-md-auto text-center">
            <div className="card">
              <div className="card-header bg-dark text-light">
                <h4 className="card-title mb-0">Welcome To React In The Desktop!</h4>
              </div>
              <div className="card-body">
                <h5 className="card-title">Happy Hacking</h5>
                <p className="card-text">
                  Everything should function as a typical React Application.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Landing;
