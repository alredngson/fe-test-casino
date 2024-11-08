import React, { type ReactElement } from "react";

import {
  SearchIcon,
  FireIcon,
  NewIcon,
  SlotMachineIcon,
  DealerIcon,
  JackpotIcon
} from "../../utils/icons";

const MidNav = (): ReactElement => (
  <>
    <div className="container-fluid">
      <div id="middle-nav" className="py-1">
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
  </>
);

export default MidNav;
