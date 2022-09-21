import  { useContext,useState,useEffect,useRef } from "react";
import React from 'react'
// import SimpleImageSlider from "react-simple-image-slider";
const images = [
  "https://user-images.githubusercontent.com/56001279/155868693-32562dc5-7a38-457b-ad46-57a7ee7e99b1.png",
  "https://user-images.githubusercontent.com/56001279/155868732-939f33b0-fbae-41bc-af19-8e420b64d865.png",
  "https://user-images.githubusercontent.com/56001279/155868742-a400ee5a-9d71-4dcc-a4ea-04f76cd6fb21.png",
  "https://user-images.githubusercontent.com/56001279/155868754-4b405e49-1f02-4a7b-9e34-b729718e4e75.png",
  "https://user-images.githubusercontent.com/56001279/155868767-21c9e962-74d4-4f8c-9357-3d2f30386361.png",
  "https://user-images.githubusercontent.com/56001279/155868779-c6ae44ec-8e64-47d6-b2d3-b485c2b98e9f.png",
  "https://user-images.githubusercontent.com/56001279/155868788-4a165325-3499-4568-9cc3-4d7760234dcc.png",
  "https://user-images.githubusercontent.com/56001279/155868801-7b866ed3-f50c-49a1-b788-a2f8bfa42fa4.png" ,           
      
  ];

const Project1 = () => {
   
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

export default Project1
