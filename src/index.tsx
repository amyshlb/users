import * as React from 'react';
import * as ReactDOM from 'react-dom/client'; // Using createRoot for React 18+
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom'
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
