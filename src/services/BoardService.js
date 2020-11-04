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

async function deleteBoard(boardID) {
    try {
        await axios.delete(`https://sprint-retrospective-api.herokuapp.com/boards/${boardID}`);
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}


const funcs = { getBoards, deleteBoard };


export default funcs;