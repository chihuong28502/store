import Header from './comp/HeaderDB'
import NavigationDB from './comp/NavigationDB'
import UserDB from './comp/UserDB'

function Dashboard() {
  return (
    <>
      <div className="flex h-screen bg-gray-100">
        <NavigationDB />
        <div className="flex flex-col w-full">
          <Header />
          <UserDB />
        </div>
      </div>
    </>
  )
}

export default Dashboard
