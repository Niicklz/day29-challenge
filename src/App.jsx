import React, { useState } from "react";
import "./style.css";
export const App = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [positionX, setPositionX] = useState(0)
  const [positionY, setPositionY] = useState(0)
  const [counter, setCounter] = useState(0)

  const likePhoto = (e) => {
    setCounter((counter)=> counter+=1)
    let offsetLeft = e.target.offsetLeft;
    let offsetTop = e.target.offsetTop;
    
    setPositionX(e.clientX - offsetLeft)
    setPositionY(e.clientY - offsetTop)
    setIsClicked(true)
    
  
  

    

    

    setTimeout(()=> {
    setIsClicked(false)
   
     }, 500)
  };
  return (
    <div className="container" onDoubleClick={likePhoto} >
        <h1>Double click on the image to <span className="material-symbols-outlined"> favorite </span> it
</h1>
<p className="counter">You liked it {counter} times</p>
      <figure className="image">
        {isClicked && (
          <span className="material-symbols-outlined" style={{top: `${positionY}px`, left: `${positionX}px`, pointerEvents: "none"}}>favorite</span>
        )}
      </figure>
    </div>
  );
};
