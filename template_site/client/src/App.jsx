import React, { Suspense, } from "react";
import ReactDOM from "react-dom";


import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';

import 'leaflet/dist/leaflet.css';
import 'antd/dist/reset.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.sass";

import MainContainer from "./components/main/MainContainer";

import store from './store/store'

import serverSockets from "./services/sockets";


const serverName = 'http://localhost:3030'

serverSockets.connecting(serverName)

const App = () => (
    <Provider store={store}>
        <MainContainer />
    </Provider>
);

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App tab="home" />);

