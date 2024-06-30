function DropDownUser() {
  return (
    <>
      <button
        type="button"
        className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
        id="user-menu-button"
        aria-expanded="false"
        data-dropdown-toggle="user-dropdown"
        data-dropdown-placement="bottom"
      >
        <span className="sr-only">Open user menu</span>
        <img
          className="w-8 h-8 rounded-full"
          src="https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-6/338697223_1516748275481535_6879214555229130855_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGY_OltjCVMGSc1hnpApVMRixrhUaOkLzWLGuFRo6QvNX7_Xp2VvnVhCy6zSa9K7CDEXd1K1ua-l9p1mgi0095k&_nc_ohc=dAnzoZKRZqQQ7kNvgGy36W4&_nc_ht=scontent.fhan20-1.fna&oh=00_AYDVdtAWTUmv63vKZ2yprIY07G_9av3QW4MvU7EH-Jzhtw&oe=666F4F9F"
          alt="user photo"
        />
      </button>
      {/* Dropdown menu */}
      <div
        className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
        id="user-dropdown"
      >
        <div className="px-4 py-3">
          <span className="block text-sm text-gray-900 dark:text-white">
            Bonnie Green
          </span>
          <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
            name@flowbite.com
          </span>
        </div>
        <ul className="py-2" aria-labelledby="user-menu-button">
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Settings
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Earnings
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default DropDownUser
