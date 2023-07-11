import  { useContext,useState,useEffect,useRef } from "react";
import React from 'react'
// import SimpleImageSlider from "react-simple-image-slider";
const images = [
  "https://user-images.githubusercontent.com/99814289/189310641-b1dbb09f-41d3-4959-8a54-5b6218042de6.png",
  "https://user-images.githubusercontent.com/99814289/189309687-905973af-e55e-4856-998c-8858fb38e880.png",
  "https://user-images.githubusercontent.com/99814289/189309777-2e27615f-fe4b-4edd-addf-3e55a43fcdf4.png",
  "https://user-images.githubusercontent.com/99814289/189309890-8f60d4d1-067b-4c45-b1ad-1dc6d1ba39aa.png",
  "https://user-images.githubusercontent.com/99814289/189310132-facceed2-4903-46ab-b9f6-96f9d0dd33c7.png",
         
      
  ];

const Project2 = () => {
   
  const [imgInd, setImgInd] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => setImgInd((prevIndex) => (prevIndex + 1) % images.length),
      2000
    );

    return () => {
      resetTimeout();
    };
  }, [imgInd]);
  return (
    <div style={{}}>
          <div className='slideshow'>
       <a href=''>
           <img src={images[imgInd]} alt={imgInd} />
           </a> 
      <div className="slider">
        {images.map((_, ind) => (
          <div
            onClick={() => setImgInd(ind)}
            className={imgInd === ind ? "active" : ""}
          />
        ))}
      </div>
        </div>
    </div>
  )
}

export default Project2

