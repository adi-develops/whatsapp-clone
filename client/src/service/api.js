import axios from 'axios';

const url = 'http://localhost:8000';

export const addUser = async (data) => {
    try{
        await axios.post(`${url}/add`, data);
    }
    catch(error){
        console.log("Error when addUser API: ", error);
    }
}

export const getUsers = async () => {
    try{
        let res  = await axios.get(`${url}/users`)
        console.log(res)
        return res.data
    }
    catch(error){
        console.log("Error while getUsers API: ", error.message)
    }
}

export const setConversation = async (data) => {
    try {
        await axios.post(`${url}/conversation/add`, data);
    }
    catch(error) {
        console.log("Error while setConversation API: ", error.message)
    }
}