
const NavigationDB = () => {
  return (
    <div>
      <aside className="relative bg-sidebar h-screen w-64 hidden sm:block shadow-xl">
        <div className="p-6">
          <a href="/" className="text-black text-3xl font-semibold uppercase hover:text-gray-300">Admin</a>
          <button className="w-full bg-white cta-btn font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
            <i className="fas fa-plus mr-3"></i> New Report
          </button>
        </div>
        <nav className="text-black text-base font-semibold pt-3">
          <a href="/" className="flex items-center active-nav-link text-black py-4 pl-6 nav-item">
            <i className="fas fa-tachometer-alt mr-3"></i>
            Dashboard
          </a>
          <a href="/blank" className="flex items-center text-black opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
            <i className="fas fa-sticky-note mr-3"></i>
            Blank Page
          </a>
          <a href="/tables" className="flex items-center text-black opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
            <i className="fas fa-table mr-3"></i>
            Tables
          </a>
          <a href="/forms" className="flex items-center text-black opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
            <i className="fas fa-align-left mr-3"></i>
            Forms
          </a>
          <a href="/tabs" className="flex items-center text-black opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
            <i className="fas fa-tablet-alt mr-3"></i>
            Tabbed Content
          </a>
          <a href="/calendar" className="flex items-center text-black opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
            <i className="fas fa-calendar mr-3"></i>
            Calendar
          </a>
        </nav>
        <a href="#" className="absolute w-full upgrade-btn bottom-0 active-nav-link text-black flex items-center justify-center py-4">
          <i className="fas fa-arrow-circle-up mr-3"></i>
          Upgrade to Pro!
        </a>
      </aside>
    </div>

  );
};

export default NavigationDB;
