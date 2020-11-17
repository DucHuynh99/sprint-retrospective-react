import JWT from 'jsonwebtoken';


const getToken = () => {
    return localStorage.getItem("token") || null;
}

const getUserID = () => {
    const token = getToken();
    if (!token)
        return null;
    const payload = JWT.verify(token, "1712354");
    console.log(payload);
    return payload.sub;
};

const deleteToken = () => {
    return localStorage.removeItem("token");
}

const funcs = { getUserID, getToken, deleteToken };

export default funcs;