import { useState, useEffect } from 'react'
import '../assets/ImageSlider.css'

function ImageSlider({images}) {
  
  const [index, setIndex] = useState(0);
  const activeImage = images[index]

  function preloadImage(src) {
    const img = new Image();
    img.src = src;
  }
  
  useEffect(() => {
    const remainingImages = images.slice(1);
    remainingImages.forEach(preloadImage);
  }, []);
  
  function updateIndex(i) {
    let newIndex = index;
    newIndex += i;
    if (newIndex < 0) {
      newIndex = images.length + newIndex;
    } if (newIndex >= images.length) {
      newIndex = newIndex - images.length;
      
    }
    setIndex(newIndex);
  }
  function nextImage() {
    updateIndex(1);
  }
  function prevImage() {
    updateIndex(-1);
  }
  return (
    <>
    <div className="imageSlide">
      <button className="leftButton" onClick={prevImage}>←</button>
      <button className="rightButton" onClick={nextImage}>→</button>
      <img src={activeImage} alt={`Slide ${index}`} />
    </div>

    </>
  )
}

export default ImageSlider
