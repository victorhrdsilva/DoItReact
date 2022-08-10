import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import GlobalStyle from '../styled/globalStyles';
import PrivatePage from "./PrivatePage";
import Header from './Header';
import LoginPage from './LoginPage';
import Habits from './Habits';
import RegisterPage from './RegisterPage';

export default function App() {

    return (
        <>
            <GlobalStyle />
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginPage />}></Route>
                    <Route path='/register' element={<RegisterPage />}></Route>
                    <Route
                        path="/habits"
                        element={
                            <PrivatePage>
                                <Habits />
                            </PrivatePage>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </>
    )
}