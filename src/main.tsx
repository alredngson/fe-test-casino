import React, { type ReactElement } from "react";
import { createRoot } from "react-dom/client";

import FavoritesIcon from "./assets/svg_icons/FAVE.svg";

import "./styles/style.css";

const App = (): ReactElement => (
  <>
    <div className="container-fluid fixed-bottom">
      <div id="bottom-nav" className="bg-light py-2">
        <div className="row text-center flex-nowrap">
          <div className="col d-flex flex-column align-items-center">
            <img src={FavoritesIcon} alt="Sports Icon" className="mb-1" />
            <div className="text-nowrap nav-icon-label">SPORTS</div>
          </div>
          <div className="col d-flex flex-column align-items-center">
            <img src={FavoritesIcon} alt="Favorites Icon" className="mb-1" />
            <div className="text-nowrap nav-icon-label">FAVORITES</div>
          </div>
          <div className="col d-flex flex-column align-items-center">
            <img src={FavoritesIcon} alt="Invite Icon" className="mb-1" />
            <div className="text-nowrap nav-icon-label">INVITE</div>
          </div>
          <div className="col d-flex flex-column align-items-center">
            <img src={FavoritesIcon} alt="Casino Icon" className="mb-1" />
            <div className="text-nowrap nav-icon-label">CASINO LIVE</div>
          </div>
          <div className="col d-flex flex-column align-items-center">
            <img src={FavoritesIcon} alt="Cashier Icon" className="mb-1" />
            <div className="text-nowrap nav-icon-label">CASHIER</div>
          </div>
        </div>
      </div>
    </div>
  </>
);

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(<App />);
