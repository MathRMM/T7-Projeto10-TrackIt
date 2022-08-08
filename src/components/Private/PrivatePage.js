import UserContext from '../data/UserContext'
import CreateNewHabit from './Habits/CreateNewHabit'
import { GET_habits } from '../data/dataservice'
import { useState, useContext } from 'react'

import PrivateHeader from "./Header-Footer/PrivateHeader"
import PrivateFooter from './Header-Footer/PrivateFooter'

export default function PrivatePage({ children }) {
    const {user, authorized} = useContext(UserContext)

    function PrivateRoute() {
        return (
            <>
                < PrivateHeader image={user.image} />
                {children}
                <PrivateFooter />
            </>  
        )
}

return (
        <>
        {!authorized ? 'Não Autorizado' : <PrivateRoute/>}   
        </>
)
}



