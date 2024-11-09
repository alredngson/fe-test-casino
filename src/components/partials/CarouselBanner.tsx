import React, { type ReactElement } from 'react'

import { CarouselBannerIcon } from '../../utils/icons'

const CarouselBanner = (): ReactElement => (
  <>
    <div className="container-fluid">
      <div
        id="carousel-banner"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={CarouselBannerIcon}
              className="d-block w-100"
              alt="Banner"
            />
          </div>
          <div className="carousel-item">
            <img
              src={CarouselBannerIcon}
              className="d-block w-100"
              alt="Banner"
            />
          </div>
        </div>
      </div>
    </div>
  </>
)

export default CarouselBanner
