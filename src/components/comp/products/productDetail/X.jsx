
      
        <div
        id="default-carousel"
        className="xl:w-2/3 relative w-full p-0 lg:mb-10"
        data-carousel="slide"
        ref={carouselRef} // Attach ref to the carousel element
      >
        <div className="relative lg:h-[1000px] xl:h-[1200px] h-[600px] overflow-hidden rounded-xl mb-8">
          {images.map((item, index) => (
            <div
              className={`hidden duration-700 ease-in-out rounded-xl ${index === 0 ? "block" : "hidden"
                }`}
              data-carousel-item={index}
              key={index}
            >
              <img
                src={item}
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-xl"
                alt={`img ${index}`}
              />
            </div>
          ))}
        </div>
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current={index === 0 ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
              data-carousel-slide-to={index}
            />
          ))}
        </div>
      </div>