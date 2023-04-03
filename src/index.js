import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './App';
import './styles.css';

const mountNode = document.getElementById('app');
const root = ReactDOMClient.createRoot(mountNode);
root.render(<App name='James' />);
