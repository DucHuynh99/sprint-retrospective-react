import axios from 'axios';

async function getUser(userID) {
    try {
        const res = await axios.get(`https://sprint-retrospective-api.herokuapp.com/users/${userID}`);
        if (res.status === 200) {
            return res.data;
        } else {
            return null;
        }
    } catch (error) {
        console.log(error);
    }
}

async function register(email, password, firstName, lastName) {
    try {
        const res = await axios.post(`https://sprint-retrospective-api.herokuapp.com/users/register`, { email, password, firstName, lastName });
        if (res.status === 200) {
            return res.data;
        } else {
            return null;
        }
    } catch (error) {
        console.log(error);
    }
}

async function login(email, password) {
    try {
        const res = await axios.post(`https://sprint-retrospective-api.herokuapp.com/users/`, { email, password });
        if (res.status === 200) {
            return res.data;
        } else {
            return null;
        }
    } catch (error) {
        console.log(error);
    }
}

async function update(firstName, lastName) {
    try {
        const res = await axios.put(`https://sprint-retrospective-api.herokuapp.com/users/update`, { firstName, lastName });
        if (res.status === 200) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.log(error);
    }
}


const funcs = { login, register, getUser, update };


export default funcs;