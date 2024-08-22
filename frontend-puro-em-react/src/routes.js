import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import React from "react";
import ProductPages from "./pages/ProductPage";
import Detalhe from "./pages/DetalhePage";
import Contato from "./pages/Contact"

function AppRoutes() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={ <HomePage/> }></Route>
            <Route path="/ProductPage" element={ <ProductPages/> }></Route>
            <Route path="/DetalhePage" element={ <Detalhe/>}></Route>
            <Route path="/ContatoPage" element={<Contato/>}></Route>
        </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;