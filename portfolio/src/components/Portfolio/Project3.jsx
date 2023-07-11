import  { useContext,useState,useEffect,useRef } from "react";
import React from 'react'
// import SimpleImageSlider from "react-simple-image-slider";
const images = [
  "https://user-images.githubusercontent.com/99814289/189511137-0ef08021-aa3c-46f7-b003-eba9c8848142.png",
  "https://user-images.githubusercontent.com/99814289/189511449-aa1c298d-fcfa-4251-9053-04f95b3b91ff.png",
  "https://user-images.githubusercontent.com/99814289/189511164-36725055-5031-459e-9772-643f688c32e8.png",
  "https://user-images.githubusercontent.com/99814289/189511177-f9f9f096-2b63-4f58-a6b9-445ebf473537.png",
  "https://user-images.githubusercontent.com/99814289/189511191-b8be141a-abf7-4284-8c1a-d074e8aa45a1.png",
  "https://user-images.githubusercontent.com/99814289/189511200-2cdab1e9-be2e-45a6-b1d1-2604e9b218a7.png",
       
      
  ];

const Project3 = () => {
   
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

export default Project3
