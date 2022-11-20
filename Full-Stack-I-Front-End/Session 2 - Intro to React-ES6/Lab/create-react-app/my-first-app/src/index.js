import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Greeter from './Greeter';
import LikeButton from './LikeButton';


const Display = function () {

  const likes = []
  for (var i=0; i < 10; i++) {
    likes.push(<LikeButton />)
  }

  return <div class="container">
     <Greeter /> 
    { likes }
  </div>
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Display />
  </React.StrictMode>
);


