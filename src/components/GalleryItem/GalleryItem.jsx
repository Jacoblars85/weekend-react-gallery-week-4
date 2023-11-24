function GalleryItem({ pic }) {
    
    return (
        <>
        <img height={150} width={150} src={pic.url} />
        </>
    )
}

export default GalleryItem;