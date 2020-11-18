import React, { useState } from 'react';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';

import Login from './Login';
import Register from './Register';
import HomePage from './HomePage';
import BoardDetailPage from './BoardDetailPage';

import tokenService from './services/token-service';

export default function App(props) {
    const [userID, setUserID] = useState(tokenService.getUserID);
    const history = useHistory();

    return (
        <Switch>
            <Route exact path="/login">
                {
                    userID ?
                        <Redirect to="/" /> :
                        <Login
                            onSuccess={() => {
                                setUserID(tokenService.getUserID);
                            }}
                        />
                }
            </Route>

            <Route exact path="/register">
                {
                    userID ?
                        <Redirect to="/" /> :
                        <Register
                            onSuccess={() => {
                                history.replace("/login");
                            }}
                        />
                }
            </Route>

            <Route path="/board-detail/:boardID">
                <BoardDetailPage userID={userID} />
            </Route>

            <Route path="/board-detail">
                <Redirect to="/login" />
            </Route>

            <Route exact path="/">
                {
                    userID ?
                        <HomePage userID={userID}
                            logoutAction={() => {
                                tokenService.deleteToken();
                                setUserID(null);
                            }}
                        /> :
                        <Redirect to="/login" />
                }
            </Route>
        </Switch >
    );
};