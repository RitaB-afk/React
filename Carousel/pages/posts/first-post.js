import { useState } from "react";
const images = [
    "https://images.pexels.com/photos/9122851/pexels-photo-9122851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/16744869/pexels-photo-16744869/free-photo-of-the-green-gate-in-the-city-palace-in-jaipur-india.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/15277790/pexels-photo-15277790/free-photo-of-traditional-pottery-tea-set.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];
export default function FirstPost() {
    const [current, setCurrent] = useState(0);
const startingPosition = 0;
    const handleLeftClick = () => {
      const position = current > startingPosition ? current -1 : images.length - 1;
      setCurrent(position);
    }

    const handleRightClick = () => {
      const position = current < images.length -1 ? current + 1 : startingPosition;
      console.log(position)
      setCurrent(position);
    }
  return (
    <>
      <h1>My very first carousel</h1>
     <div>
        <button onClick={handleLeftClick}> left </button>
        <button onClick={handleRightClick}> right </button>
        {images.map((image, index)=>  current === index &&
              <div key={image} className="slide">
              <img src={image} alt="images" />
            </div>
         )}
     </div>
    </>
  );
}
