import Image from "next/image";
import React, { useEffect, useState } from "react";

const ServiceImages = ({ service }: { service: any }) => {
  const [mainImage, setMainImage] = useState<string | null>(null);

  // Update main image when service result is available
  useEffect(() => {
    if (service?.result?.imageUrls?.length) {
      setMainImage(service.result.imageUrls[0]);
    }
  }, [service?.result?.imageUrls]);

  const handleThumbnailClick = (clickedImage: string) => {
    if (clickedImage === mainImage) return;
    setMainImage(clickedImage);
  };

  return (
    <div className="w-full">
      {/* Main image */}
      {mainImage && (
        <div className="w-full relative mb-4">
          <Image src={mainImage} alt="Main" height={620} width={800} />
        </div>
      )}

      {/* Thumbnails */}
      <div className="flex gap-2 overflow-x-auto">
        {service?.result?.imageUrls
          ?.filter((img: string) => img !== mainImage)
          .map((img: string, index: number) => (
            <div
              key={index}
              className="w-24 h-16 relative cursor-pointer flex-shrink-0"
              onClick={() => handleThumbnailClick(img)}
            >
              <Image
                src={img}
                alt={`Thumbnail ${index}`}
                layout="fill"
                objectFit="cover"
                className="rounded-md border"
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ServiceImages;
