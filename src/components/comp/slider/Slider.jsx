import dataSlider from "../../../data/dataSlider"

function Slider() {

  return (
    <>
      <div id="default-carousel" className="relative w-full" data-carousel="slide">
        {/* Carousel wrapper */}
        <div className="relative h-56 overflow-hidden md:h-[40rem]">
          {/* Item 1 */}
          {dataSlider.map((item, index) => (
            <div className={`hidden duration-700 ease-in-out ${index === 0 ? 'block' : 'hidden'}`} data-carousel-item key={index}>
              <img
                src={item.bgImage}
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt={item.title}
              />
              <div className="fillter absolute font-bold opacity-[1.1] text-white md:text-[1rem] text-[0.5rem] px-4 leading-relaxed m-0 -translate-x-1/2 left-1/2  md:bottom-[10%] bottom-[15%] md:w-[60%] w-[85%]">
                <p className="text-center  md:text-[1.2rem] text-[0.7rem]">{item.title}</p>
                <p className="text-center  md:text-[1.2rem] text-[0.7rem]">{item.subTitle}</p>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Slider indicators */}
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
        {/* Slider controls */}
        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
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

          {/* Your previous button content */}
        </button>
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
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

          {/* Your next button content */}
        </button>
      </div>


    </>
  )
}

export default Slider