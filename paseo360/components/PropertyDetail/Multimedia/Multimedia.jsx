import { useState, useEffect } from "react";
import Image from "next/image";
import s from "./Multimedia.module.scss";

export default function Multimedia({
  propertyName,
  propertyImages,
  tour_images,
}) {
  const [images, setImages] = useState([]);
  const [imageIndex, setImageIndex] = useState(0);

  const handleNextImage = () => {
    const length = images.length;
    if (imageIndex === length - 1) {
      setImageIndex(0);
    } else {
      setImageIndex(imageIndex + 1);
    }
  };

  useEffect(() => {
    setImages(propertyImages);
  }, []);

  return (
    <div className={s.container}>
      <TopButtons propertyName={propertyName} />
      <div className={s.media_container}>
        <div className={s.main_image}>
          {images.length > 0 && (
            <Image
              src={images[imageIndex]}
              alt={images[imageIndex]}
              layout="fill"
              objectFit="contain"
              style={{ borderRadius: 4 }}
            />
          )}
          <div className={s.next_btn_container}>
            <button onClick={handleNextImage}>{">"}</button>
          </div>
        </div>
        <div className={s.thumbs_container}>
          {images.length > 0 &&
            images.map((image, i) => (
              <div
                key={image}
                className={
                  i === imageIndex ? s.img_container_active : s.img_container
                }
              >
                <Image
                  src={image}
                  alt={image}
                  width={210}
                  height={100}
                  objectFit="cover"
                  style={{
                    borderRadius: 4,
                  }}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

const TopButtons = ({ propertyName }) => {
  return (
    <div className={s.top_buttons}>
      <p>{propertyName}</p>
      <button>Fotos</button>
      <button>Video</button>
      <button>Fotos 360°</button>
    </div>
  );
};
