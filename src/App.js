import './App.css';
import React from "react";
import NavBar from "./components/NavBar/NavBar";
import store from "./Redux/Store";
import {Provider} from "react-redux";
import Main from "./components/Main/Main";
import {Route, Routes} from 'react-router-dom';



function App() {
    return (
        <Provider store={store}>
            <div className='App'>
                <NavBar/>
                <Routes>
                    <Route path="/task/:idCat" element={<Main/>}/>
                </Routes>
            </div>
        </Provider>
    );
}
export default App;
