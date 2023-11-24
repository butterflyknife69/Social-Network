import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  { id: 1, message: 'Hi ,how are you men?', LikesCount: 7 },
  { id: 2, message: 'Hi ,how are you men?', LikesCount: 8 },
  { id: 3, message: 'Hi ,how are you men?', LikesCount: 44 },
  { id: 4, message: 'Hi ,how are you men?', LikesCount: 22 },
  { id: 5, message: 'It my first post', LikesCount: 24 }

]

let dialogs = [
  { id: 1, name: 'Dimych' },
  { id: 2, name: 'Andrey' },
  { id: 3, name: 'Sveta' },
  { id: 4, name: 'Sasha' },
  { id: 5, name: 'Viktor' },
  { id: 6, name: 'Valera' }
]
let messages = [
  { id: 1, message: 'Hi' },
  { id: 2, message: 'How is yor it-kamasutra' },
  { id: 3, message: 'Yoo' },
  { id: 4, message: 'Yoo' },
  { id: 4, message: 'Yoo' },
  { id: 5, message: 'Yoo' }
]
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
