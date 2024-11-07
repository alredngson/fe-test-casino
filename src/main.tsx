import React, { type ReactElement } from "react";
import { createRoot } from "react-dom/client";

import FavoritesIcon from "./assets/svg_icons/FAVE.svg";
import ThreeBarIcon from "./assets/svg_icons/3BAR.svg";
import Fun88Icon from "./assets/logos/F1M5_Logo.webp";
import UserHeadIcon from "./assets/svg_icons/userhead.svg";
import WalletIcon from "./assets/svg_icons/wallet.svg";
import CarouselBanner from "./assets/Frame 18.webp";

import "./styles/style.css";

const App = (): ReactElement => (
  <>
    <div id="app">
      <div className="container-fluid py-3">
        <div id="top-nav" className="bg-light">
          <div className="row text-center flex-nowrap">
            <div className="col d-flex flex-row">
              <div>
                <img src={ThreeBarIcon} alt="ThreeBar Icon" className="mb-1" />
              </div>
              <div className="px-2">
                <img src={Fun88Icon} alt="Fun88 Icon" className="mb-1" />
              </div>
            </div>

            <div className="col d-flex flex-row-reverse align-items-center px-1">
              <div className="d-flex align-items-center pe-2">
                <img src={UserHeadIcon} alt="UserHead Icon" className="mb-1" />
              </div>
              <div className="text-nowrap icon-label fw-bolder wallet-label pe-2 mx-2">
                $1990.6
              </div>
              <div className="d-flex align-items-center">
                <img src={WalletIcon} alt="Wallet Icon" className="mb-1" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid px-3">
        <div
          id="carousel-banner"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={CarouselBanner}
                className="d-block w-100"
                alt="Banner"
              />
            </div>
            <div className="carousel-item">
              <img
                src={CarouselBanner}
                className="d-block w-100"
                alt="Banner"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid fixed-bottom">
        <div id="bottom-nav" className="bg-light py-2">
          <div className="row text-center flex-nowrap">
            <div className="col d-flex flex-column align-items-center">
              <img src={FavoritesIcon} alt="Sports Icon" className="mb-1" />
              <div className="text-nowrap icon-label">SPORTS</div>
            </div>
            <div className="col d-flex flex-column align-items-center">
              <img src={FavoritesIcon} alt="Favorites Icon" className="mb-1" />
              <div className="text-nowrap icon-label">FAVORITES</div>
            </div>
            <div className="col d-flex flex-column align-items-center">
              <img src={FavoritesIcon} alt="Invite Icon" className="mb-1" />
              <div className="text-nowrap icon-label">INVITE</div>
            </div>
            <div className="col d-flex flex-column align-items-center">
              <img src={FavoritesIcon} alt="Casino Icon" className="mb-1" />
              <div className="text-nowrap icon-label">CASINO LIVE</div>
            </div>
            <div className="col d-flex flex-column align-items-center">
              <img src={FavoritesIcon} alt="Cashier Icon" className="mb-1" />
              <div className="text-nowrap icon-label">CASHIER</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(<App />);
