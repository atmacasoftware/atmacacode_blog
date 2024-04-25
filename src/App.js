import './App.css';
import {Routes, BrowserRouter, Route} from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import "react-toastify/dist/ReactToastify.css"
import {ToastContainer} from "react-toastify";
import Header from "./components/Header";
import Footer from "./components/Footer";
import React from "react";


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <ToastContainer/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/:slug" element={<Blog/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
