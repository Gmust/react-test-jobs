import React from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from "./mainPage/MainPage";
import DetailedPage from "./detailedPage/DetailedPage";
import ErrorPage from "./ErrorPage";

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<MainPage/>} />
            <Route path='/jobs/:id' element={<DetailedPage/>} />
            <Route path={'*'} element={<ErrorPage/>} />
        </Routes>
    );
};

export default Router;