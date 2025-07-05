// ImageGallery.tsx
import { Box } from "@mui/material";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import image1 from "../../assets/carousel/1.png";
import image2 from "../../assets/carousel/2.jpg";
import image3 from "../../assets/carousel/3.jpg";
import image4 from "../../assets/carousel/4.jpg";
import image5 from "../../assets/carousel/5.jpg";

const ImageCarousel = () => {
  const images = [image1, image2, image3, image4, image5];
  const galleryItems = images.map((url) => ({
    original: url,
    thumbnail: url,
  }));

  return (
    <Box sx={{ width: "100%", height: "auto", maxHeight: "60vh", mx: "auto" }}>
      <ImageGallery
        items={galleryItems}
        autoPlay
        slideInterval={4000}
        infinite
        showPlayButton={false}
        showFullscreenButton={false}
        showThumbnails={false}
        showNav={true}
        showBullets={true}
        renderItem={(item) => (
          <img
            src={item.original}
            alt=""
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "60vh",
              objectFit: "cover",
            }}
          />
        )}
      />
    </Box>
  );
};

export default ImageCarousel;
