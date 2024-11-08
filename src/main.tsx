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
    <div id="app" className="p-1">
      <TopNav />
      <CarouselBanner />
      <NotifText />
      <MidNav />
      <ContentSection />
      <BottomNav />
    </div>
  </>
);

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(<App />);
