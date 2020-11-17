import axios from 'axios';

const API_URL = "https://sprint-retrospective-api.herokuapp.com";
// const API_URL = "http://localhost:5000";

async function getUser(userID) {
    try {
        const res = await axios.get(`${API_URL}/users/${userID}`);
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
        const res = await axios.post(`${API_URL}/users/register`, { email, password, firstName, lastName });
        if (res.status === 201) {
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
        const res = await axios.post(`${API_URL}/users/`, { email, password });
        if (res.status === 200) {
            localStorage.setItem("token", res.data);
            return res.data;
        } else {
            return null;
        }
    } catch (error) {
        console.log(error);
    }
}

async function loginWithGoogle(tokenId) {
    try {
        const res = await axios.post(`${API_URL}/users/login-with-google`, { tokenId });
        if (res.status === 200) {
            localStorage.setItem("token", res.data);
            return res.data;
        } else {
            return null;
        }
    } catch (error) {
        console.log(error);
    }
}

async function loginWithFacebook(id, accessToken) {
    try {
        const res = await axios.post(`${API_URL}/users/login-with-facebook`, { id, accessToken });
        if (res.status === 200) {
            localStorage.setItem("token", res.data);
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
        const res = await axios.put(`${API_URL}/users/update`, { firstName, lastName });
        if (res.status === 200) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.log(error);
    }
}


const funcs = { login, loginWithGoogle, loginWithFacebook, register, getUser, update };
export default funcs;