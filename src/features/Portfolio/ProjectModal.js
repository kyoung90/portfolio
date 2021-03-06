import React from "react";
import { StackContainer } from "./StackContainer";

export const ProjectModal = props => {
  return (
    <div
      className="portfolio-modal modal fade"
      id={`portfolioModal${props.id}`}
      tabIndex="-1"
      role="dialog"
      aria-labelledby={`portfolioModal${props.id}Label`}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl" role="document">
        <div className="modal-content">
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">
              <i className="fa fa-times"></i>
            </span>
          </button>
          <div className="modal-body text-center">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <a href={props.link}>
                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">
                      {props.name}
                    </h2>
                  </a>
                  <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon">
                      <i className="fa fa-star"></i>
                    </div>
                    <div className="divider-custom-line"></div>
                  </div>
                  <a href={props.link}>
                    <img
                      className="img-fluid rounded mb-5 portfolio-img"
                      src={`./assets/${props.image_name}`}
                      alt=""
                    />
                  </a>
                  <StackContainer stack={props.stack} />
                  {props.description}

                  <div className="d-flex justify-content-around">
                    <button
                      className="btn btn-primary"
                      href="#"
                      data-dismiss="modal"
                    >
                      <i className="fa fa-times fa-fw"></i>
                      Close
                    </button>
                    {props.github_link && (
                      <button
                        className="btn btn-primary"
                        onClick={() => window.open(props.github_link, "_blank")}
                      >
                        <i className="fa fa-github fa-lg" aria-hidden={true}></i>{" "}
                        GitHub
                      </button>
                    )}
                    <button
                      className="btn btn-primary"
                      onClick={() => window.open(props.link, "_blank")}
                    >
                      <i className="fa fa-arrow-right" aria-hidden={true}></i>{" "}
                      Live
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
