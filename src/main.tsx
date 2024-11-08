import React, { type ReactElement } from "react";
import { createRoot } from "react-dom/client";

import {
  BottomNav,
  CarouselBanner,
  ContentSection,
  MidNav,
  NotifText,
  TopNav
} from "./components";

import "./styles/style.css";

const App = (): ReactElement => (
  <>
    <div id="app" className="d-flex flex-column min-vh-100 p-1">
      <div className="row row-cols-1">
        <div className="col py-1">
          <TopNav />
        </div>
        <div className="col py-1">
          <CarouselBanner />
        </div>
        <div className="col py-1">
          <NotifText />
        </div>
        <div className="col">
          <MidNav />
        </div>
        <div className="col">
          <ContentSection />
        </div>
      </div>
      <div className="mt-auto">
        <BottomNav />
      </div>
    </div>
  </>
);

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(<App />);
