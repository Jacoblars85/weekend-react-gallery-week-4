import GalleryItem from "../GalleryItem/GalleryItem";
import axios from 'axios';


function GalleryList({ gallery, getGallery }) {

    // got stuck here because i didnt put /gallery/like/id. i didnt have gallery in it.
    const updateLike = (e) => {
        const picId = e.target.id
        console.log('picid', picId);
        axios({
            url: `/gallery/like/${picId}`,
            method: 'PUT'
          }).then((response) => {
            getGallery();
          }).catch((error) =>{
            console.log(error, 'Error in updating gallery');
          })
    
    }
    

    return (
        <div data-testid="galleryList" className="uno-box">
        {gallery.map((pic) => {
            return (
            <div key={pic.id}>

              <GalleryItem pic={pic} updateLike={updateLike}/>
                
            </div>
            )
          })}
          </div>
    )
    
}

export default GalleryList;