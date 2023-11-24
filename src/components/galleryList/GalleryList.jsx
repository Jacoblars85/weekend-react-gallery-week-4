import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({ gallery }) {


    return (
        gallery.map((pic) => {
            return (
            <div key={pic.id}>
              <GalleryItem pic={pic} />
                
                <br />
                
              <button>love it!</button>

              <p>people love this!</p>
            </div>
            )
          })
    )
    
}

export default GalleryList;