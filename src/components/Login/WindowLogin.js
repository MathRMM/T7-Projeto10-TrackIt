import { Link, useNavigate } from 'react-router-dom'
import {useState, useContext} from 'react'
import {login} from '../data/dataservice'

import UserContext from '../data/UserContext'
import Logo from './Logo.svg'
import './windowLogin.css'

export default function WindowLogin() {
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    const navigate = useNavigate()
    const {user, setuser} = useContext(UserContext)

    function handleForm(e, email, password) {
        e.preventDefault()
        const body = {
            'email': email,
            'password': password
        }
        sendForm(body)
    }


    function sendForm(body){
        login(body).then((res)=>{
            console.log(res)
            setuser(res.data)
            navigate('/habito')
        }).catch((req)=>console.log(req.response))
    }


    function saveContext(res){
        
    }

    return (
        <div className='loginPage centerAling'>
            <header>
                <img src={Logo} />
            </header>
            <form className='centerAling' onSubmit={(e)=> handleForm(e , email, password)}>
                <input type="email"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder={'email'}
                    required />
                <input type="password" name="password"
                    value={password}
                    onChange={e => setpassword(e.target.value)}
                    placeholder={'senha'}
                    required />
                <button>Entrar</button>
            </form>

            <Link to={'/cadastro'}>
                <h1>Não tem uma conta? Cadastre-se!</h1>
            </Link>
        </div>
    )
}