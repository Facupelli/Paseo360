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
      <div className={s.top_buttons}>
        <p>{propertyName}</p>
        <button>Fotos</button>
        <button>Video</button>
        <button>Fotos 360°</button>
      </div>
      <div className={s.main_image}>
        <div>
          {images.length > 0 && (
            <Image
              src={images[imageIndex]}
              alt={images[imageIndex]}
              layout="fill"
              objectFit="contain"
              style={{ borderRadius: 5 }}
            />
          )}
          <div>
            <button onClick={handleNextImage}>{">"}</button>
          </div>
        </div>
        <div>
          {images.length > 0 &&
            images.map((image) => (
              <Image
                key={image}
                src={image}
                alt={image}
                width={330}
                height={127}
                objectFit="cover"
              />
            ))}
        </div>
      </div>
    </div>
  );
}
