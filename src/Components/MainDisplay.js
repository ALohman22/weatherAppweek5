import React, { useState } from "react";
import Overview from "./Overview";
import Weather from './Weather'
import Symbols from "./Symbols";
import { setIsLoading } from "../redux/slices/isLoadingSlice";
import { useDispatch } from 'react-redux'

const MainDisplay = () => {
    const dispatch = useDispatch()
    const [view, setView] = useState("Overview");
    return (
        <div className="stack">
            <div className="tab-select">
                <button onClick={() => setView("Overview")}>Overview</button>
                <button onClick={() => {
                    
                    setView("Weather")
                    
                    
                }}>
                    Current Weather at Capitol
                </button>
                <button onClick={() => {
                    dispatch(setIsLoading())
                    setView("Symbols")
                    dispatch(setIsLoading())
                    
                    }}>Symbols</button>
            </div>
            {view === "Overview" && <Overview />}
            {view === "Weather" && <Weather />}
            {view === "Symbols" && <Symbols />}
        </div>
    );
};

export default MainDisplay;
