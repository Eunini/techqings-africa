'use client';

import React, { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface EmblaCarouselProps {
  children: React.ReactNode[];
  className?: string;
}

export default function EmblaCarousel({ children, className = '' }: EmblaCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: false,
    skipSnaps: false,
  });
  
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setPrevBtnDisabled(!emblaApi.canScrollPrev());
      setNextBtnDisabled(!emblaApi.canScrollNext());
    };

    emblaApi.on('select', onSelect);
    onSelect();

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  // Always show carousel
  return (
    <div className={`relative ${className}`}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4 sm:gap-6 md:gap-8">
          {children.map((child, idx) => (
            <div key={idx} className="flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.333%] lg:flex-[0_0_33.333%] xl:flex-[0_0_25%] min-w-0 h-full">
              <div className="h-full">
                {child}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      {!prevBtnDisabled || !nextBtnDisabled ? (
        <div className="flex gap-2 justify-center mt-6 sm:mt-8">
          <button
            onClick={scrollPrev}
            disabled={prevBtnDisabled}
            aria-label="Previous slide"
            className={`p-2 rounded-full transition-all ${
              prevBtnDisabled
                ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                : 'bg-primary text-white hover:bg-purple-700'
            }`}
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={scrollNext}
            disabled={nextBtnDisabled}
            aria-label="Next slide"
            className={`p-2 rounded-full transition-all ${
              nextBtnDisabled
                ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                : 'bg-primary text-white hover:bg-purple-700'
            }`}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      ) : null}
    </div>
  );
}
