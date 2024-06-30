import Footer from '../Footer'
import Header from '../HeaderDB'
import NavigationDB from '../NavigationDB'
import TabsDB from '../TabsDB'

function TabsDBPage() {
  return (
    <div>
      <div className="flex h-screen bg-gray-100">
        <NavigationDB />
        <div className="flex flex-col w-full">
          <Header />
          <TabsDB />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default TabsDBPage
