import { Routes, Route } from 'react-router-dom'
import UserContext from './data/UserContext'
import {useState} from 'react'

import WindowLogin from './Login/WindowLogin'
import Register from './Login/Register'
import PrivatePage from './Private/PrivatePage'
import Container from './Private/Container'

export default function App() {
    const [user, setuser] = useState({});
    const [authorized, setauthorized] = useState(true);
    const [reload, setreload] = useState(false);

    return (
        <UserContext.Provider value={{
            user, setuser,
            authorized, setauthorized,
            reload, setreload}}>
        <Routes>
            <Route path="/cadastro" element={<Register />} />
           
                <Route path="/" element={<WindowLogin />} />
                <Route path='/habito' element={
                    <PrivatePage>
                        <Container />
                    </PrivatePage>
                } />
        </Routes>
        </UserContext.Provider>
    )
}