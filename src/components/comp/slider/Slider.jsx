import { useEffect, useRef } from 'react';
import { Carousel } from 'flowbite';
import dataSlider from '../../../data/dataSlider';

function Slider() {
  const carouselRef = useRef(null);
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);

  useEffect(() => {
    const carouselElement = carouselRef.current;

    const items = dataSlider.map((_, index) => ({
      position: index,
      el: carouselElement.querySelector(`[data-carousel-item="${index}"]`),
    }));

    const indicators = dataSlider.map((_, index) => ({
      position: index,
      el: carouselElement.querySelector(`[data-carousel-slide-to="${index}"]`),
    }));

    const options = {
      defaultPosition: 0, // Bắt đầu từ vị trí đầu tiên (nút 1)
      interval: 3000, // 3 giây
      indicators: {
        activeClasses: 'bg-white dark:bg-gray-800',
        inactiveClasses: 'bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800',
        items: indicators,
      },
      onNext: () => {
        console.log('next slider item is shown');
      },
      onPrev: () => {
        console.log('previous slider item is shown');
      },
      onChange: () => {
        console.log('new slider item has been shown');
      },
    };

    const carousel = new Carousel(carouselElement, items, options);

    // Bắt đầu tự động chạy carousel
    carousel.cycle();


    const handlePrevClick = () => carousel.prev();
    const handleNextClick = () => carousel.next();

    const prevButton = prevButtonRef.current;
    const nextButton = nextButtonRef.current;

    if (prevButton) {
      prevButton.addEventListener('click', handlePrevClick);
    }

    if (nextButton) {
      nextButton.addEventListener('click', handleNextClick);
    }

    return () => {
      carousel.pause();

      if (prevButton) {
        prevButton.removeEventListener('click', handlePrevClick);
      }

      if (nextButton) {
        nextButton.removeEventListener('click', handleNextClick);
      }
    };
  }, [dataSlider]);

  return (
    <div id="default-carousel" className="relative w-full pt-[64px]" data-carousel="slide" ref={carouselRef}>
      <div className="relative h-56 overflow-hidden md:h-[40rem]">
        {dataSlider.map((item, index) => (
          <div
            className={`duration-700 ease-in-out ${index === 0 ? 'block' : 'hidden'}`}
            data-carousel-item={index}
            key={index}
          >
            <img
              src={item.bgImage}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt={item.title}
            />
            <div className="absolute font-bold opacity-[1.1] text-white md:text-[1rem] text-[0.5rem] px-4 leading-relaxed m-0 -translate-x-1/2 left-1/2 md:bottom-[10%] bottom-[15%] md:w-[60%] w-[85%]">
              <p className="text-center md:text-[1.2rem] text-[0.7rem]">{item.title}</p>
              <p className="text-center md:text-[1.2rem] text-[0.7rem]">{item.subTitle}</p>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {dataSlider.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${index === 0 ? 'bg-white' : 'bg-gray-400'}`}
            aria-current={index === 0 ? 'true' : 'false'}
            aria-label={`Slide ${index + 1}`}
            data-carousel-slide-to={index}
          />
        ))}
      </div>
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        ref={prevButtonRef}
      >
        <svg
          className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 1 1 5l4 4"
          />
        </svg>
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        ref={nextButtonRef}
      >
        <svg
          className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m1 9 4-4-4-4"
          />
        </svg>
      </button>
    </div>
  );
}

export default Slider;
