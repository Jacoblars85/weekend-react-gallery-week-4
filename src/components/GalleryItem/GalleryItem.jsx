import { useState } from 'react';

function GalleryItem({ pic, updateLike }) {
    const [isPicture, setIsPicture] = useState(false)

    const togglePicture = () => {
      setIsPicture(!isPicture)
    }
  
    const displayText = () => {
      if (isPicture) {
        return (
            <div className='description'>
            <p data-testid="description" >{pic.description}</p>
            </div>
        )
      } else {
        return (
            <div>
            <img src={pic.url} />
            </div>
        )
      }
    }
    
    return (
        <div data-testid="galleryItem" className="single-box">

            <h5>{pic.title}</h5>

        <ul data-testid="toggle" onClick={togglePicture}> {displayText()} </ul>

        <button 
              data-testid="like" id={pic.id} 
              onClick={updateLike}>love it!</button>

              <p>{pic.likes > 0 ? `${pic.likes} people love this!` : `No people love this :(`}</p>
        </div>
    )
}

export default GalleryItem;