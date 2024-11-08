import React, { type ReactElement } from "react";

import { BellIcon } from "../../utils/icons";

const NotifText = (): ReactElement => (
  <>
    <div className="container-fluid">
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
  </>
);

export default NotifText;
