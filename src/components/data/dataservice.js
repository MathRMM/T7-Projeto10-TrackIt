import axios from "axios"

const BASE_URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit'

function createNewAccount(body) {
    /* const promise = axios.post(`${BASE_URL}/auth/sign-up`, body)
    return promise */
    return {
        createdAt: "2022-08-07T04:46:51.764Z",
        email: "777@pepe.com",
        id: 5170,
        image: "https://e7.pngegg.com/pngimages/480/197/png-clipart-meme-4chan-television-pepe-the-frog-meme-television-vertebrate-thumbnail.png",
        name: "Pepe",
        password: "pepe123",
        updatedAt: "2022-08-07T04:46:51.764Z"
    }
}

function login(body) {
     const promise = axios.post(`${BASE_URL}/auth/login`, body)
     return promise  
}

function GET_habits(token){
    const promise = axios.get(`${BASE_URL}/habits`, {headers: {'Authorization': `Bearer ${token}`}})
    return promise
}

function POST_Habit(body, token){
        const promise = axios.post(`${BASE_URL}/habits`, body, {headers: {'Authorization': `Bearer ${token}`}})
        return promise  
}

export { createNewAccount, login, GET_habits, POST_Habit }