import bagIconSvg from '@/Images/svg/BagIcon.svg'
function BagIcon() {
  return (
    <>
      <button data-drawer-target="drawer-navigation"
        data-drawer-show="drawer-navigation"
        aria-controls="drawer-navigation"
        className="md:w-6 w-5 active:opacity-60 focus-visible:ring-3 focus-visible:ring-sky focus-visible:outline-0 hover:opacity-80">
        <img src={bagIconSvg} alt="" />
      </button>
    </>
  )
}

export default BagIcon