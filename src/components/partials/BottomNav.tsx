import React, { type ReactElement } from 'react'

import {
  SportsIcon,
  FavoritesIcon,
  InviteIcon,
  LiveIcon,
  CashierIcon
} from '../../utils/icons'

const BottomNav = (): ReactElement => (
  <>
    <div className="container-fluid">
      <div id="bottom-nav" className="bg-light">
        <div className="row text-center flex-nowrap">
          <div className="col d-flex flex-column align-items-center">
            <img src={SportsIcon} alt="Sports Icon" />
            <div className="text-nowrap icon-label">SPORTS</div>
          </div>
          <div
            className="col d-flex flex-column align-items-center text-decoration-none"
            data-bs-toggle="offcanvas"
            data-bs-target="#favoritesDrawer"
            aria-controls="favoritesDrawer"
            style={{ cursor: 'pointer' }}
          >
            <img src={FavoritesIcon} alt="Favorites Icon" className="mb-1" />
            <div className="text-nowrap icon-label">FAVORITES</div>
          </div>
          <div className="col d-flex flex-column align-items-center">
            <img src={InviteIcon} alt="Invite Icon" />
            <div className="text-nowrap icon-label">INVITE</div>
          </div>
          <div className="col d-flex flex-column align-items-center">
            <img src={LiveIcon} alt="Casino Icon" />
            <div className="text-nowrap icon-label">CASINO LIVE</div>
          </div>
          <div className="col d-flex flex-column align-items-center">
            <img src={CashierIcon} alt="Cashier Icon" className="mb-1" />
            <div className="text-nowrap icon-label">CASHIER</div>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default BottomNav
