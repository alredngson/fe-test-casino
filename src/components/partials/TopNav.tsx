import React, { type ReactElement } from "react";

import {
  ThreeBarIcon,
  Fun88Icon,
  UserHeadIcon,
  WalletIcon
} from "../../utils/icons";

const TopNav = (): ReactElement => (
  <>
    <div className="container-fluid">
      <div id="top-nav">
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
  </>
);

export default TopNav;
