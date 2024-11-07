import React, { type ReactElement } from "react";
import { createRoot } from "react-dom/client";

import ThreeBarIcon from "./assets/svg_icons/3BAR.svg";
import Fun88Icon from "./assets/logos/F1M5_Logo.webp";
import UserHeadIcon from "./assets/svg_icons/userhead.svg";
import WalletIcon from "./assets/svg_icons/wallet.svg";
import CarouselBanner from "./assets/Frame 18.webp";
import BellIcon from "./assets/svg_icons/bell-svgrepo-com 1.svg";
import SearchIcon from "./assets/svg_icons/search-925.svg";
import FireIcon from "./assets/svg_icons/fire-svgrepo-com 1.svg";
import NewIcon from "./assets/svg_icons/NEW.svg";
import SlotMachineIcon from "./assets/svg_icons/slotmachine.svg";
import DealerIcon from "./assets/svg_icons/casino-dealer-illustration-2-svgrepo-com 1.svg";
import JackpotIcon from "./assets/svg_icons/jackpots.svg";
import SportsIcon from "./assets/svg_icons/SPORTS.svg";
import FavoritesIcon from "./assets/svg_icons/FAVE.svg";
import InviteIcon from "./assets/svg_icons/INVITE.svg";
import LiveIcon from "./assets/svg_icons/LIVE.svg";
import CashierIcon from "./assets/svg_icons/CASHIER.svg";

import "./styles/style.css";

const App = (): ReactElement => (
  <>
    <div id="app">
      {/* top navbar */}
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
              <div
                id="wallet-label"
                className="text-nowrap icon-label fw-bolder pe-2 mx-2"
              >
                $1990.6
              </div>
              <div className="d-flex align-items-center">
                <img src={WalletIcon} alt="Wallet Icon" className="mb-1" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* banner */}
      <div className="container-fluid px-3 py-1">
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

      {/* notif text */}
      <div className="container-fluid pt-1">
        <div id="notif-text" className="bg-light">
          <div className="row text-center flex-nowrap">
            <div className="col d-flex flex-row align-items-center">
              <div id="notif-label" className="pe-1 align-items-center">
                <img src={BellIcon} alt="Bell Icon" className="mb-1" />
              </div>
              <div className="text-nowrap notif-label">
                LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ELIT EMUR
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mid nav */}
      <div className="container-fluid py-1">
        <div id="middle-nav" className="bg-light py-2">
          <div className="row text-center flex-nowrap">
            <div
              id="search-icon-div"
              className="col d-flex flex-column align-items-center"
            >
              <img src={SearchIcon} alt="Search Icon" />
              <div id="search-icon-label" className="text-nowrap icon-label">
                SEARCH
              </div>
            </div>
            <div className="col d-flex flex-column align-items-center">
              <img src={FireIcon} alt="Start Icon" />
              <div className="text-nowrap icon-label">START</div>
            </div>
            <div className="col d-flex flex-column align-items-center">
              <img src={NewIcon} alt="New Icon" />
              <div className="text-nowrap icon-label">NEW</div>
            </div>
            <div className="col d-flex flex-column align-items-center">
              <img src={SlotMachineIcon} alt="Slot Icon" />
              <div className="text-nowrap icon-label">SLOTS</div>
            </div>
            <div className="col d-flex flex-column align-items-center">
              <img src={DealerIcon} alt="Live Icon" />
              <div className="text-nowrap icon-label">LIVE</div>
            </div>
            <div className="col d-flex flex-column align-items-center">
              <img src={JackpotIcon} alt="Jackpot Icon" />
              <div className="text-nowrap icon-label">JACKPOT</div>
            </div>
          </div>
        </div>
      </div>

      {/* bottom nav */}
      <div className="container-fluid fixed-bottom">
        <div id="bottom-nav" className="bg-light py-2">
          <div className="row text-center flex-nowrap">
            <div className="col d-flex flex-column align-items-center">
              <img src={SportsIcon} alt="Sports Icon" />
              <div className="text-nowrap icon-label">SPORTS</div>
            </div>
            <div className="col d-flex flex-column align-items-center">
              <img src={FavoritesIcon} alt="Favorites Icon" />
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
              <img src={CashierIcon} alt="Cashier Icon" />
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
