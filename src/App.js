import React from 'react';
import Slidebar from './components/Slidebar';
import TopContainer from './components/TopContainer';
import DashBoardStats from './components/DashBoardStats';
import Header from './components/Header';
import SlideOverlay from './components/SlideOverlay';

function App() {
    return (
        <div className="w3-light-grey">
            <TopContainer />
            <Slidebar />
            <DashBoardStats />
            <SlideOverlay />
            <Header />
        </div>
    );
}

export default App;
