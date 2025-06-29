"use client";
import { useServiceQuery } from "@/redux/features/services/services.api";
import Container from "@/utils/Container";
import Image from "next/image";
import { useState } from "react";

const ServiceDetailsPage = ({ params }: { params: any }) => {
  const id = params.id;
  const { data: service } = useServiceQuery(id);
  const [mainImage, setMainImage] = useState(service?.result?.imageUrls?.[0]);

  console.log(service?.result);

  const handleThumbnailClick = (clickedImage: string) => {
    if (clickedImage === mainImage) return;
    const newImages = service?.result?.imageUrls?.filter(
      (img: string) => img !== clickedImage
    );
    newImages.unshift(clickedImage); // move clicked image to front
    setMainImage(clickedImage);
  };

  return (
    <Container>
      <div className="grid grid-cols-2 gap-6">
        <div className="w-full">
          {/* Main image */}
          <div className="w-full relative mb-4">
            <Image src={mainImage} alt="Main" height={620} width={800} />
          </div>

          {/* Thumbnails */}
          <div className="flex gap-2 overflow-x-auto">
            {service?.result?.imageUrls
              .filter((img: string) => img !== mainImage)
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
        <div className="w-full bg-primary p-6">
          <h1>{service?.result?.serviceName}</h1>
          <h1>{service?.result?.price}</h1>
          <h1>{service?.result?.overView}</h1>
          <h1>{service?.result?.description}</h1>
          <h1>{service?.result?.avgRating || "no reviews found"}</h1>
        </div>
      </div>
    </Container>
  );
};

export default ServiceDetailsPage;
