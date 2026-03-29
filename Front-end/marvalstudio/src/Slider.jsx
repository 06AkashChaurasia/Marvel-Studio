import React from 'react';
import sli1 from './assets/slide1.png';
import sli2 from './assets/slide2.png';
import sli3 from './assets/slide3.png';
import sli4 from './assets/slide4.png';
import sli5 from './assets/slide5.png';

export default function Slider() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 p-0">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-bs-ride="carousel" // Auto-ride on page load
              data-bs-interval="2600" // 5000ms or 5 seconds for auto slide interval
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to={0}
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                />
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to={1}
                  aria-label="Slide 2"
                />
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to={2}
                  aria-label="Slide 3"
                />
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to={3}
                  aria-label="Slide 4"
                />
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to={4}
                  aria-label="Slide 5"
                />
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={sli1} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={sli2} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={sli3} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={sli4} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={sli5} className="d-block w-100" alt="..." />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
