import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Greeter from './components/Greeter';
import LikeButtton from './components/LikeButton'
import Counter from './components/Counter'

import reportWebVitals from './reportWebVitals';

/// inline function ===> inline javascript ===> 
const Display = (props) => {

  const likes = []  // [<LIkeButton />, <LIkeButton />]

  for(var i= 0; i < 1; i++) {
    likes.push(<LikeButtton />)
  }
 
  var propData = {
    name: "Mike", 
    lastName: "Denton",
    course: "full stack",
    semester:"fall",
    year:"2000"
  }

  // script outside the render..
  return <div className='container'>
          <Greeter 
            {...propData}
            />
         { likes }
         <Counter />
        </div>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <>
          <Display />
        </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
