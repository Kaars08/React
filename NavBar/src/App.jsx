import React from "react";
import NavBar from "./NavBar";
import CorporateClients from "./pages/CorporateClients";
import Vendors from "./pages/Vendor";
import OurStory from "./pages/OurStory";
import Home from "./pages/Home";
import { Route,Routes } from "react-router-dom";

function App() {
  let Component;

  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path= "/" element = {<Home />} />
          <Route path= "/CorporateClients" element =  {<CorporateClients />} />
          <Route path= "/Vendor" element = {<Vendors />} />
          <Route path= "/OurStory" element = {<OurStory />} />
        </Routes>
      </div>
    </>
  );
}

export default App;


/*
1) Venwiz has the need for Data scientists since the company essentially plays matchmaker between vendor and clients (B2B)
2) Venwiz is a digital platform enabling services procurement in the manufacturing industry, for both CapEx and MRO requirements.
3) Integration Capabilities, Security and Compliance, User Experience (UX), Digital Platform Development.
4) It has already finished its series B funding and beats 57% of its competition in the market, great place to be at after 3 years of launch.
5) AI&DS cannot disrupt , but infact aid the growth of this company, since they aim at end to end digital solutions.
6) They can use AI&DS to disrupt the sector, since vendor onboarding is a cumbersome process in B2B companies, and they aim at simplifying it.
7) Currently Interning*/
