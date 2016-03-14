import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import './todo/index';

import '../node_modules/bootstrap/dist/js/bootstrap.js';
import '../node_modules/bootstrap/scss/bootstrap.scss';
import './msme.scss'

//class LoginForm extends React.Component {
//    render() {
//        return (
//            <div className="container-fluid loginform">
//                <div className="row">
//                    <div className="card card-block col-xs-4 col-xs-offset-4">
//                        <form>
//                            <div className="form-group">
//                                <label htmlFor="usernameInput">Username</label>
//                                <input type="text" className="form-control" id="usernameInput" placeholder="abcde12"></input>
//                            </div>
//                            <div className="form-group">
//                                <label htmlFor="passwordInput">Password</label>
//                                <input type="password" className="form-control" id="passwordInput" placeholder="Password"></input>
//                            </div>
//                            <div className="text-xs-right">
//                                <button type="submit" className="btn btn-primary">Log in</button>
//                            </div>
//                        </form>
//                    </div>
//                </div>
//            </div>
//        );
//    }
//}
//
//function render() {
//    ReactDOM.render(
//        <LoginForm />,
//        document.body
//    )
//}
//
//render();

import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './todo/reducers'
import App from './todo/components/App'

let store = createStore(todoApp);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.body
);