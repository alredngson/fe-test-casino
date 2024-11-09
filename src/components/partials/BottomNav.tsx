import React, { type ReactElement, useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

import {
  SportsIcon,
  FavoritesIcon,
  InviteIcon,
  LiveIcon,
  CashierIcon
} from '../../utils/icons'

const BottomNav = (): ReactElement => {
  const [activeNav, setActiveNav] = useState<string>('')
  const location = useLocation()

  const handleNavClick = (iconName: string) => {
    setActiveNav(iconName)
  }

  useEffect(() => {
    setActiveNav(location.pathname)
  }, [location.pathname])

  return (
    <>
      <div className="container-fluid">
        <div id="bottom-nav" className="bg-light">
          <div className="row text-center flex-nowrap">
            <div className="col d-flex flex-column align-items-center">
              <img src={SportsIcon} alt="Sports Icon" />
              <div className="text-nowrap icon-label">SPORTS</div>
            </div>
            <NavLink
              to="/favorites"
              onClick={() => handleNavClick('/favorites')}
              className={`col d-flex flex-column align-items-center text-decoration-none ${
                activeNav === '/favorites' ? 'active' : ''
              }`}
            >
              <img
                src={FavoritesIcon}
                alt="Favorites Icon"
                className="mb-1"
                style={{
                  filter:
                    activeNav === '/favorites'
                      ? 'invert(33%) sepia(80%) saturate(2599%) hue-rotate(183deg) brightness(97%) contrast(104%)'
                      : ''
                }}
              />
              <div
                className="text-nowrap icon-label"
                style={{
                  color: activeNav === '/favorites' ? '#00A6FF' : 'grey'
                }}
              >
                FAVORITES
              </div>
            </NavLink>
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
}

export default BottomNav
