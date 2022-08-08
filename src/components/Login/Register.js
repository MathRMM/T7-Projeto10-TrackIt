import { Link, useNavigate } from 'react-router-dom'
import { createNewAccount } from '../data/dataservice'
import { useState } from 'react'

import Logo from './Logo.svg'

export default function WindowRegister() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('')
    const [password, setPassword] = useState('');
    const [image, setimage] = useState('');
    const navigate = useNavigate();

    function handleForm(e, email, name, image, password) {
        e.preventDefault()
        const body = {
            'email': email,
            'name': name,
            'image': image,
            'password': password
        }
        sendForm(body)
    }

    function sendForm(body){
        console.log(body)
        /* createNewAccount(body).then((res)=> console.log(res)) */
        const res = createNewAccount()
        console.log(res)
        navigate('/')
    }

    return (
        <div className='loginPage centerAling'>
            <header>
                <img src={Logo} />
            </header>
            <form className='centerAling' onSubmit={(e) => handleForm(e, email, name, image, password)}>
                <input type="email"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder={'email'}
                    required />
                <input type="password" name="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder={'senha'}
                    required />
                <input type="text" name="name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder={'name'}
                    required />
                <input type="url" name="url"
                    value={image}
                    onChange={e => setimage(e.target.value)}
                    placeholder={'foto'}
                    required />
                <button>Entrar</button>
            </form>
            <Link to={'/'}>
                <h1>Já tem uma conta? Faça login!</h1>
            </Link>
        </div>
    )
}