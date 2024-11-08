import React, { type ReactElement } from "react";

import { BadWolfIcon } from "../utils/icons";

const ContentSection = (): ReactElement => (
  <>
    <div className="container-fluid">
      <div className="row row-cols-4">
        <div className="col p-1">
          <img src={BadWolfIcon} className="card-img-top" alt="Game Icon" />
        </div>
        <div className="col p-1">
          <img src={BadWolfIcon} className="card-img-top" alt="Game Icon" />
        </div>
        <div className="col p-1">
          <img src={BadWolfIcon} className="card-img-top" alt="Game Icon" />
        </div>
        <div className="col p-1">
          <img src={BadWolfIcon} className="card-img-top" alt="Game Icon" />
        </div>
        <div className="col p-1">
          <img src={BadWolfIcon} className="card-img-top" alt="Game Icon" />
        </div>
        <div className="col p-1">
          <img src={BadWolfIcon} className="card-img-top" alt="Game Icon" />
        </div>
      </div>
    </div>
  </>
);

export default ContentSection;
