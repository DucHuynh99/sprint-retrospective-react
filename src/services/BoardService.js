import axios from 'axios';

const API_URL = "https://sprint-retrospective-api.herokuapp.com";
// const API_URL = "http://localhost:5000";

async function getBoards(userID) {
    try {
        const res = await axios.get(`${API_URL}/boards/${userID}`);
        if (res.status === 200) {
            return res.data;
        } else {
            return null;
        }
    } catch (error) {
        console.log(error);
        return null;
    }
}

async function deleteBoard(boardID) {
    try {
        await axios.delete(`${API_URL}/boards/${boardID}`);
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}

async function addBoard(boardName, userID) {
    try {
        const res = await axios.post(`${API_URL}/boards/add`, { boardName, userID });
        if (res.status === 200)
            return res.data;
        else
            return null;
    } catch (error) {
        console.log(error);
        return null;
    }
}

async function getByID(boardID) {
    try {
        const res = await axios.get(`${API_URL}/boards/get-by-id/${boardID}`);
        if (res.status === 200)
            return res.data;
        else
            return null;
    } catch (error) {
        console.log(error);
        return null;
    }
}

async function getBoardDetail(boardID) {
    try {
        const res = await axios.get(`${API_URL}/boards/details/${boardID}`);
        if (res.status === 200)
            return res.data;
        else
            return null;
    } catch (error) {
        console.log(error);
        return null;
    }
}

async function addWentWell(boardID, info) {
    try {
        const res = await axios.post(`${API_URL}/boards/add-went-well/`, { boardID, info });
        if (res.status === 200)
            return res.data;
        else
            return null;
    } catch (error) {
        console.log(error);
        return null;
    }
}

async function addToImprove(boardID, info) {
    try {
        const res = await axios.post(`${API_URL}/boards/add-to-improve/`, { boardID, info });
        if (res.status === 200)
            return res.data;
        else
            return null;
    } catch (error) {
        console.log(error);
        return null;
    }
}

async function addActionItem(boardID, info) {
    try {
        const res = await axios.post(`${API_URL}/boards/add-action-item/`, { boardID, info });
        if (res.status === 200)
            return res.data;
        else
            return null;
    } catch (error) {
        console.log(error);
        return null;
    }
}

async function deleteBoardDetail(boardID, column, info) {
    try {
        const res = await axios.post(`${API_URL}/boards/delete-board-detail/`, { boardID, column, info });
        if (res.status === 200)
            return res.data;
        else
            return null;
    } catch (error) {
        console.log(error);
        return null;
    }
}

async function updateBoardName(boardID, newName) {
    try {
        const res = await axios.post(`${API_URL}/boards/update-board-name/`, { boardID, newName });
        if (res.status === 200)
            return res.data;
        else
            return null;
    } catch (error) {
        console.log(error);
        return null;
    }
}

async function updateItemContent(boardID, column, oldInfo, newInfo) {
    try {
        const res = await axios.post(`${API_URL}/boards/update-board-detail`, { boardID, column, oldInfo, newInfo });
        if (res.status === 200)
            return res.data;
        else
            return null;
    } catch (error) {
        console.log(error);
        return null;
    }
}

const funcs = { getBoards, getByID, addBoard, getBoardDetail, addWentWell, addToImprove, addActionItem, deleteBoard, deleteBoardDetail, updateBoardName, updateItemContent };


export default funcs;