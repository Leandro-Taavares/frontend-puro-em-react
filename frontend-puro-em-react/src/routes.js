import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import React from "react";
import ProductPages from "./pages/ProductPage";
import Detalhe from "./pages/DetalhePage";
import Contato from "./pages/Contact"
import Header from "./components/Header";
import Footer from "./components/Footer";

function AppRoutes() {
    return (
        <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={ <HomePage/> }></Route>
            <Route path="/ProductPage" element={ <ProductPages/> }></Route>
            <Route path="/DetalhePage" element={ <Detalhe/>}></Route>
            <Route path="/ContatoPage" element={<Contato/>}></Route>
        </Routes>
        <Footer />
        </BrowserRouter>
    )
}

export default AppRoutes;