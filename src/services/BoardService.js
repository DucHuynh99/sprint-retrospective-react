import axios from 'axios';

async function getBoards(userID) {
    try {
        const res = await axios.get(`https://sprint-retrospective-api.herokuapp.com/boards/${userID}`);
        if (res.status === 200) {
            return res.data;
        } else {
            return null;
        }
    } catch (error) {
        console.log(error);
    }
}


const funcs = { getBoards };


export default funcs;