import React from 'react'
import ReactDom from 'react-dom'

const name='Md Adil Alam';
const img1="https://picsum.photos/400/400";
const img11="https://picsum.photos/300/400";
const img111="https://picsum.photos/500/400";
const img1111="https://picsum.photos/600/400";
const img11111="https://picsum.photos/350/400";
const links="https://www.youtube.com/watch?v=z-Z5radvnOA&list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ&index=15";

ReactDom.render(
 <>
 <h1 contentEditable="true">My Name is: {name}</h1>
 <img src={img1} alt="randomImages"/>
 <img src={img11} alt="randomImages"/>
 <img src={img111} alt="randomImages"/>
 <img src={img1111} alt="randomImages"/>
 <a href={links}>
  <img src={img11111} alt="randomImages"/>
  </a>

 </>,
document.getElementById('root')
);