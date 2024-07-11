import logo from '../../assets/logo.png'
import { Bell, CircleUser, Mail, Search } from "lucide-react"

function AdminNavbar() {
  return (
    <nav className="bg-gray-800 px-4">
    <div className="container mx-auto flex justify-between items-center">
      <span>
      <img src={logo} height={100} width={100} alt="" className="rounded" />
      </span>
      <div className="relative justify-items-end space-x-10 ">
    <input
      type="text"
      className="pl-10 pr-4 py-2 border rounded w-full bg-gray-200"
      placeholder="Search..."
    />
    <Search className="absolute right-5 top-1/2 transform -translate-y-1/2" />
  </div>
      <div className="flex space-x-4">
        <Bell />
        <Mail />
        <CircleUser />
       
      </div>
    </div>
  </nav>
  )
}

export default AdminNavbar