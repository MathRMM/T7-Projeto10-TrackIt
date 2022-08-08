import styled from 'styled-components'
import { useState, useContext } from 'react'

import { ThreeDots } from 'react-loader-spinner'
import UserContext from '../../data/UserContext'
import { POST_Habit } from '../../data/dataservice'

function saveDays(id, idDays, setidDays) {
    idDays.push(id)
    setidDays(idDays)
    console.log(id, idDays)
}

function Send_Habit(name, idDays, token, reload, setreload ) {
    const body = {
        'name': name,
        'days': idDays // segunda, quarta e sexta
    }
    console.log(body)
    POST_Habit(body, token).then((res)=>{
        console.log(res)
        setreload(!reload)})
}

export default function CreateNewHabit({ setboxCreate, token }) {

    function BoxCreate() {
        const [name, setName] = useState('')
        const [idDays, setidDays] = useState([]);
        const {reload, setreload } = useContext(UserContext)

        function Button({ children, id }) {
            const [clicked, setclicked] = useState(false);
            return (
                <>
                    {clicked ? (
                        <button className='day click'>{children}</button>
                    )
                        : (
                            <button className='day' onClick={() => {
                                saveDays(id, idDays, setidDays)
                                setclicked(true)}}>{children}</button>
                        )}
                </>
            )
        }

        return (
            <div className='newHabit'>
                <div>
                    <form>
                        <input type='text' name='name'
                            placeholder='nome do hábito'
                            value={name}
                            onChange={(e) => setName(e.target.value)} />
                    </form>
                    <Button id={0}>D</Button>
                    <Button id={1}>S</Button>
                    <Button id={2}>T</Button>
                    <Button id={3}>Q</Button>
                    <Button id={4}>Q</Button>
                    <Button id={5}>S</Button>
                    <Button id={6}>S</Button>
                </div>
                <div className='actions'>
                    <button className='cancel' onClick={(() => setboxCreate(false))}>Cancelar</button>
                    <button className='save' onClick={() => Send_Habit(name, idDays, token, reload, setreload )}>Salvar</button>
                </div>
            </div>
        )
    }

    return (
        <CreateHabit>
             <BoxCreate />
        </CreateHabit>
    )
}

const CreateHabit = styled.div`
width: 90vw;
    
`