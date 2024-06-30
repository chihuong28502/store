const UserDB = () => {
  return (
    <div className="w-full overflow-x-hidden border-t flex flex-col">
      <main className="w-full flex-grow p-6">
        <h1 className="text-3xl text-black pb-6">Dashboard</h1>
        <div className="w-full mt-12">
          <p className="text-xl pb-3 flex items-center">
            <i className="fas fa-list mr-3"></i> Latest Reports
          </p>
          <div className="bg-white overflow-auto">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
                    Name
                  </th>
                  <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
                    Last name
                  </th>
                  <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                    Phone
                  </th>
                  <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                    Email
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr>
                  <td className="w-1/3 text-left py-3 px-4">Lian</td>
                  <td className="w-1/3 text-left py-3 px-4">Smith</td>
                  <td className="text-left py-3 px-4">(555) 555-5555</td>
                  <td className="text-left py-3 px-4">liansmith@gmail.com</td>
                </tr>
                <tr className="bg-gray-200">
                  <td className="w-1/3 text-left py-3 px-4">Emma</td>
                  <td className="w-1/3 text-left py-3 px-4">Johnson</td>
                  <td className="text-left py-3 px-4">(555) 555-5555</td>
                  <td className="text-left py-3 px-4">emmjohnson@gmail.com</td>
                </tr>
                <tr>
                  <td className="w-1/3 text-left py-3 px-4">Oliver</td>
                  <td className="w-1/3 text-left py-3 px-4">Williams</td>
                  <td className="text-left py-3 px-4">(555) 555-5555</td>
                  <td className="text-left py-3 px-4">
                    oliverwilliams@gmail.com
                  </td>
                </tr>
                <tr className="bg-gray-200">
                  <td className="w-1/3 text-left py-3 px-4">Isabella</td>
                  <td className="w-1/3 text-left py-3 px-4">Brown</td>
                  <td className="text-left py-3 px-4">(555) 555-5555</td>
                  <td className="text-left py-3 px-4">isabrown@gmail.com</td>
                </tr>
                <tr>
                  <td className="w-1/3 text-left py-3 px-4">Mia</td>
                  <td className="w-1/3 text-left py-3 px-4">Davis</td>
                  <td className="text-left py-3 px-4">(555) 555-5555</td>
                  <td className="text-left py-3 px-4">miadavis@gmail.com</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  )
}

export default UserDB
