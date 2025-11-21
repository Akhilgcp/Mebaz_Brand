import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './webpage/LandingPage';

// Slide Imports
import Slide1_Title from './slides/Slide1_Title';
import Slide2_About from './slides/Slide2_About';
import Slide3_Market from './slides/Slide3_Market';
import Slide4_Challenges from './slides/Slide4_Challenges';
import Slide5_Opportunities from './slides/Slide5_Opportunities';
import Slide6_Analytics from './slides/Slide6_Analytics';
import Slide7_Customer360 from './slides/Slide7_Customer360';
import Slide8_BrandPerception from './slides/Slide8_BrandPerception';
import Slide9_AISolutions from './slides/Slide9_AISolutions';
import Slide10_Marketing from './slides/Slide10_Marketing';
import Slide11_Loyalty from './slides/Slide11_Loyalty';
import Slide12_Website from './slides/Slide12_Website';
import Slide13_Roadmap from './slides/Slide13_Roadmap';
import Slide14_Impact from './slides/Slide14_Impact';
import Slide15_Recommendations from './slides/Slide15_Recommendations';
import Slide16_AIDemo from './slides/Slide16_AIDemo';
import Slide17_AIContent from './slides/Slide17_AIContent';

const DeckRoute = ({ component: Component }) => (
  <Layout totalSlides={17}>
    <Component />
  </Layout>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        {/* Pitch Deck Routes */}
        <Route path="/deck/slide/1" element={<DeckRoute component={Slide1_Title} />} />
        <Route path="/deck/slide/2" element={<DeckRoute component={Slide2_About} />} />
        <Route path="/deck/slide/3" element={<DeckRoute component={Slide3_Market} />} />
        <Route path="/deck/slide/4" element={<DeckRoute component={Slide4_Challenges} />} />
        <Route path="/deck/slide/5" element={<DeckRoute component={Slide5_Opportunities} />} />
        <Route path="/deck/slide/6" element={<DeckRoute component={Slide6_Analytics} />} />
        <Route path="/deck/slide/7" element={<DeckRoute component={Slide7_Customer360} />} />
        <Route path="/deck/slide/8" element={<DeckRoute component={Slide8_BrandPerception} />} />
        <Route path="/deck/slide/9" element={<DeckRoute component={Slide9_AISolutions} />} />
        <Route path="/deck/slide/10" element={<DeckRoute component={Slide10_Marketing} />} />
        <Route path="/deck/slide/11" element={<DeckRoute component={Slide11_Loyalty} />} />
        <Route path="/deck/slide/12" element={<DeckRoute component={Slide12_Website} />} />
        <Route path="/deck/slide/13" element={<DeckRoute component={Slide13_Roadmap} />} />
        <Route path="/deck/slide/14" element={<DeckRoute component={Slide14_Impact} />} />
        <Route path="/deck/slide/15" element={<DeckRoute component={Slide16_AIDemo} />} />
        <Route path="/deck/slide/16" element={<DeckRoute component={Slide17_AIContent} />} />
        <Route path="/deck/slide/17" element={<DeckRoute component={Slide15_Recommendations} />} />

        {/* Redirects */}
        <Route path="/deck" element={<Navigate to="/deck/slide/1" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
