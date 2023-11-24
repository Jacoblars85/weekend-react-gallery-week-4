import { useState } from 'react';

function GalleryItem({ pic }) {
    const [isPicture, setIsPicture] = useState(false)

    const togglePicture = () => {
      setIsPicture(!isPicture)
    }
  
    const displayText = () => {
      if (isPicture) {
        return (
            <>
            <h5>{pic.title}</h5>

            <p>{pic.description}</p>
            </>
        )
      } else {
        return (
            <>
            <img height={150} width={150} src={pic.url} />
            </>
        )
      }
    }
    
    return (
        <ul onClick={togglePicture}>
          {displayText()}
        </ul>
    )
}

export default GalleryItem;