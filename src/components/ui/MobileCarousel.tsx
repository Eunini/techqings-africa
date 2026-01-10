'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface MobileCarouselProps {
  children: React.ReactNode[];
  visibleOnDesktop?: boolean;
}

export default function MobileCarousel({ children, visibleOnDesktop = true }: MobileCarouselProps) {
  return (
    <>
      {/* Mobile Carousel */}
      <div className="lg:hidden w-full">
        <Swiper
          modules={[Navigation, Pagination]}
          pagination={{ clickable: true }}
          navigation={true}
          spaceBetween={16}
          slidesPerView={1.2}
          breakpoints={{
            640: {
              slidesPerView: 1.5,
              spaceBetween: 24,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
          }}
          className="w-full"
        >
          {children.map((child, index) => (
            <SwiperSlide key={index} className="!h-auto flex items-stretch">
              {child}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop Grid */}
      {visibleOnDesktop && (
        <div className="hidden lg:grid grid-cols-3 xl:grid-cols-4 gap-8 w-full">
          {children}
        </div>
      )}
    </>
  );
}
