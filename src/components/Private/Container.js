import styled from 'styled-components'
import { useState, useContext, useEffect } from 'react'

import UserContext from '../data/UserContext'
import CreateNewHabit from './Habits/CreateNewHabit'
import { GET_habits } from '../data/dataservice'

import './habits.css'

export default function Container() {
    const { user, setauthorized, reload, setreload } = useContext(UserContext)
    const [listHabits, setListHabits] = useState([])
    const [haveHabits, sethaveHabits] = useState(false);
    const [boxCreate, setboxCreate] = useState(false);
    

    useEffect(() => {
        console.log(user.token)
        GET_habits(user.token).then((res) => {
            console.log(typeof res.data)
            if (res.data[0] != undefined) {
                setListHabits(res.data)
                sethaveHabits(true) 
            }
        })
        .catch((req)=> {
            console.log(req.response.data)
            setauthorized(false)})
    }, [reload])


    console.log(listHabits, haveHabits)

    return (
        <Body>
            <MyHabits>
                <h1>Meus hábitos</h1>
                <button onClick={()=> setboxCreate(true)}>+</button>
            </MyHabits>
            {boxCreate? <CreateNewHabit setboxCreate={setboxCreate} token = {user.token}/>:''}
            {!haveHabits  ? 
            (<p className='text'>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>) 
            : ''}
        </Body>
    )
}

const Body = styled.div`
width: 100vw;
height: 100em;
background-color:  #E5E5E5;
margin: 70px 0;
display: flex;
flex-direction: column;
align-items: center;
overflow-y: scroll;
overflow-x: hidden;

position: relative;
`

const MyHabits = styled.div`
width: 90vw;
height: 40px;
display: flex;
justify-content: space-between;
align-items: center;
margin: 30px 0;

font-family: 'Lexend Deca';
font-size: 18px;
line-height: 22px;

color: #666666;

button{
width: 40px;
height: 35px;
background: #52B6FF;
border-radius: 6px;
border: none;
color: #fff;
font-size: 20px;
}
`

