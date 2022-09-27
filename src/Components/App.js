import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import GlobalStyle from '../styled/globalStyles';
import PrivatePage from "./PrivatePage";
import LoginPage from './LoginPage';
import Habits from './Habits/Habits';
import Today from './Today';
import RegisterPage from './RegisterPage';
import UserContext from '../contexts/UserContext';

export default function App() {
    const [loading, setLoading] = useState(false)
    const [reload, setReload] = useState(0)

    return (
        <>
            <GlobalStyle />
            <UserContext.Provider value={{ loading, setLoading, reload, setReload }}>
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
                        <Route
                            path="/today"
                            element={
                                <PrivatePage>
                                    <Today />
                                </PrivatePage>
                            }
                        />
                    </Routes>
                </BrowserRouter>
            </UserContext.Provider>
        </>
    )
}