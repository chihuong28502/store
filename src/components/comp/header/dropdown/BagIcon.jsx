/* eslint-disable react/prop-types */
import bagIconSvg from '@/Images/svg/BagIcon.svg'
function BagIcon({ onClick }) {
  return (
    <>
      <button
        onClick={onClick}
        className="md:w-6 w-5 active:opacity-60 focus-visible:ring-3 focus-visible:ring-sky focus-visible:outline-0 hover:opacity-80">
        <img src={bagIconSvg} alt="" />
      </button>
    </>
  )
}

export default BagIcon