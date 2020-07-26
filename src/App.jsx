import React from 'react';
import { ReactSVG } from 'react-svg';
import './App.scss';

const AgencyBanner = () => (
  <div className="agency-banner">
    <h1 className="agency-banner__title">We Are the Future</h1>
    <ReactSVG src='/assets/svgs/logos/banner-logo.svg' className="agency-banner__logo" />
    <ReactSVG src='/assets/svgs/scroll-down.svg' className="agency-banner__scroller" />
  </div>
);

const App = () => (
<>
  <AgencyBanner />
</>
);

export default App;
