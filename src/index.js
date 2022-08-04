import React from 'react';
import ReactDOM from 'react-dom/client';
import MarkdownInput from './components/MarkdownInput'
import './App.css';
import SeeMore from './components/SeeMore';

const App = () => (
    <div>
  <MarkdownInput />
  
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);