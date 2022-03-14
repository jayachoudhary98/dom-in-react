import React from 'react'

export const Slider = () => {
  return (
    <div>
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img height={'600px'} src="https://img.freepik.com/free-vector/watercolor-world-cancer-day-sale-horizontal-banner_23-2149226145.jpg?w=1060" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img height={'600px'} src="https://img.freepik.com/free-vector/watercolor-world-cancer-day-social-media-promo-template_23-2149226140.jpg?w=996" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img height={'600px'} src="https://img.freepik.com/free-vector/watercolor-world-cancer-day-business-brochure-template_23-2149226143.jpg?w=1060" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}
