import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Experience from "./pages/experience";

function App() {
    return (
        <div className="App">
            <Router>
                <Route>
                    <Route path="/experience" element={<Experience />}></Route>
                </Route>
            </Router>
        </div>
    );
}

export default App;
