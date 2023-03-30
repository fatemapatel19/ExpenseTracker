import React from 'react';
import Slidebar from './components/Slidebar';
import TopContainer from './components/TopContainer';
import DashBoardStats from './components/DashBoardStats';
import Header from './components/Header';
import SlideOverlay from './components/SlideOverlay';
// import Income from "./components/Income";
// import Expense from "./components/Expense";
// import ViewExpenses from "./components/ViewExpenses";
// import Analytics from "./components/Analytics";
// import Transaction from "./components/Transaction";
// import Tranfermoney from "./components/Tranfermoney";
function App() {
    return (
        <div className="w3-light-grey">
            <TopContainer />
            <Slidebar />
            <DashBoardStats />
            <SlideOverlay />
            <Header />
            {/* <Income/>
            <Expense/>
            <ViewExpenses/>
            <Analytics/>
            <Transaction/>
            <Tranfermoney/>
       */}
            
        </div>
    );
}

export default App;
