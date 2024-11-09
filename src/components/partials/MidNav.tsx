import React, { type ReactElement, useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

import {
  SearchIcon,
  FireIcon,
  NewIcon,
  SlotMachineIcon,
  DealerIcon,
  JackpotIcon
} from "../../utils/icons";

const MidNav = (): ReactElement => {
  const [activeNav, setActiveNav] = useState<string>("");
  const location = useLocation();

  const handleNavClick = (iconName: string) => {
    setActiveNav(iconName);
  };

  useEffect(() => {
    setActiveNav(location.pathname);
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div id="middle-nav" className="py-1">
          <div className="row text-center flex-nowrap">
            <NavLink
              id="search-icon-div"
              to="/search"
              onClick={() => handleNavClick("/search")}
              className={`col d-flex flex-column align-items-center text-decoration-none ${
                activeNav === "/search" ? "active" : ""
              }`}
            >
              <img
                src={SearchIcon}
                alt="Search Icon"
                style={{
                  filter:
                    activeNav === "/search"
                      ? "invert(33%) sepia(80%) saturate(2599%) hue-rotate(183deg) brightness(97%) contrast(104%)"
                      : ""
                }}
              />
              <div
                id="search-icon-label"
                className="text-nowrap icon-label"
                style={{ color: activeNav === "/search" ? "#00A6FF" : "grey" }}
              >
                SEARCH
              </div>
            </NavLink>
            <NavLink
              to="/start"
              onClick={() => handleNavClick("/start")}
              className={`col d-flex flex-column align-items-center text-decoration-none ${
                activeNav === "/start" ? "active" : ""
              }`}
            >
              <img
                src={FireIcon}
                alt="Start Icon"
                className="mb-1"
                style={{
                  filter:
                    activeNav === "/start"
                      ? "invert(33%) sepia(80%) saturate(2599%) hue-rotate(183deg) brightness(97%) contrast(104%)"
                      : ""
                }}
              />
              <div
                className="text-nowrap icon-label"
                style={{ color: activeNav === "/start" ? "#00A6FF" : "grey" }}
              >
                START
              </div>
            </NavLink>
            <NavLink
              to="/new"
              onClick={() => handleNavClick("/new")}
              className={`col d-flex flex-column align-items-center text-decoration-none ${
                activeNav === "/new" ? "active" : ""
              }`}
            >
              <img
                src={NewIcon}
                alt="New Icon"
                className="mb-1"
                style={{
                  filter:
                    activeNav === "/new"
                      ? "invert(33%) sepia(80%) saturate(2599%) hue-rotate(183deg) brightness(97%) contrast(104%)"
                      : ""
                }}
              />
              <div
                className="text-nowrap icon-label"
                style={{ color: activeNav === "/new" ? "#00A6FF" : "grey" }}
              >
                NEW
              </div>
            </NavLink>
            <NavLink
              to="/slots"
              onClick={() => handleNavClick("/slots")}
              className={`col d-flex flex-column align-items-center text-decoration-none ${
                activeNav === "/slots" ? "active" : ""
              }`}
            >
              <img
                src={SlotMachineIcon}
                alt="Slot Icon"
                style={{
                  filter:
                    activeNav === "/slots"
                      ? "invert(33%) sepia(80%) saturate(2599%) hue-rotate(183deg) brightness(97%) contrast(104%)"
                      : ""
                }}
              />
              <div
                className="text-nowrap icon-label"
                style={{ color: activeNav === "/slots" ? "#00A6FF" : "grey" }}
              >
                SLOTS
              </div>
            </NavLink>
            <NavLink
              to="/live"
              onClick={() => handleNavClick("/live")}
              className={`col d-flex flex-column align-items-center text-decoration-none ${
                activeNav === "/live" ? "active" : ""
              }`}
            >
              <img
                src={DealerIcon}
                alt="Live Icon"
                className="mb-1"
                style={{
                  filter:
                    activeNav === "/live"
                      ? "invert(33%) sepia(80%) saturate(2599%) hue-rotate(183deg) brightness(97%) contrast(104%)"
                      : ""
                }}
              />
              <div
                className="text-nowrap icon-label"
                style={{ color: activeNav === "/live" ? "#00A6FF" : "grey" }}
              >
                LIVE
              </div>
            </NavLink>
            <NavLink
              to="/jackpot"
              onClick={() => handleNavClick("/jackpot")}
              className={`col d-flex flex-column align-items-center text-decoration-none ${
                activeNav === "/jackpot" ? "active" : ""
              }`}
            >
              <img
                src={JackpotIcon}
                alt="Jackpot Icon"
                style={{
                  filter:
                    activeNav === "/jackpot"
                      ? "invert(33%) sepia(80%) saturate(2599%) hue-rotate(183deg) brightness(97%) contrast(104%)"
                      : ""
                }}
              />
              <div
                className="text-nowrap icon-label"
                style={{ color: activeNav === "/jackpot" ? "#00A6FF" : "grey" }}
              >
                JACKPOT
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default MidNav;
