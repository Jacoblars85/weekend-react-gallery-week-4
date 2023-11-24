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