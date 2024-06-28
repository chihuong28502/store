import CalendarDB from '../CalendarDB'
import Footer from '../Footer'
import Header from '../HeaderDB'
import NavigationDB from '../NavigationDB'

function CalendarDBPage() {
  return (
    <div>
      <div className="flex h-screen bg-gray-100">
        <NavigationDB />
        <div className="flex flex-col w-full">
          <Header />
          <CalendarDB />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default CalendarDBPage