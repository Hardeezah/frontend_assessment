import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay"


const images = [
  '/images/carousel1.png',
  '/images/carousel2.png',
  '/images/carousel3.png',
  '/images/carousel-img4.png',
  '/images/carousel-img5.png',
  // Add more images as needed
];

export function ImageCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 700, stopOnInteraction: true })
  )
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      
      orientation="vertical"
      className="w-full md:max-w-lg md:p-0 max-w-[350px]"
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="md:h-[448px] h-[336px]">
        {images.map((image, index) => (
          <CarouselItem key={index} className="pt-1 ">
            <div className="p-1">
              <Card>
                <CardContent className="relative w-[424px] h-[400px] ">
                  <Image
                    src={image}
                    alt={`carousel-img-${index}`}
                    layout="fill"
                    objectFit="contain"
                    className=""
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      
    </Carousel>
  );
}

export default ImageCarousel;
  