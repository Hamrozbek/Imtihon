import { useEffect, useState } from 'react'
import { Heading, Text } from '../../components'
import DashboardItem from '../../modules/DashboardItem'
import { AddIcon, DeletIcon, EditIcon } from '../../assets/icons'
import TabelsProject from '../../modules/TabelsProject'

const Tables = () => {
  const [users, setUsers] = useState([])
  const [editUserId, setEditUserId] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [searchQuary, setSearchQuary] = useState("")
  const [newUser, setNewUser] = useState({
    img: "",
    name: "",
    surname: "",
    email: "",
    func: "Manager",
    role: "Organization",
    status: "Online",
    date: new Date().toLocaleDateString()
  })

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("users")) || []
    setUsers(saved)
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser(prev => ({ ...prev, [name]: value }));
  }
  // search part 
  const handleSearch = (e) => {
    setSearchQuary(e.target.value)
  }

  const filteredUsers = users.filter(user =>
    `${user.name} ${user.surname}`.toLowerCase().includes(searchQuary.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuary.toLowerCase()) ||
    user.func.toLowerCase().includes(searchQuary.toLowerCase()) ||
    user.role.toLowerCase().includes(searchQuary.toLowerCase()) ||
    user.status.toLowerCase().includes(searchQuary.toLowerCase())
  )

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setNewUser(prev => ({ ...prev, img: reader.result }));
      reader.readAsDataURL(file);
    }
  }


  // Add or Update
  const addOrUpdateUser = () => {
    if (!newUser.img || !newUser.name.trim() || !newUser.surname.trim()) {
      alert("Iltimos, to'liq ma'lumot kiriting!")
      return
    }

    let updatedUsers
    if (editUserId) {
      updatedUsers = users.map(item =>
        item.id === editUserId ? { ...newUser, id: editUserId } : item
      )
      setEditUserId(null)
    } else {
      const userToAdd = {
        ...newUser,
        id: users.length ? users[users.length - 1].id + 1 : 1,
        date: new Date().toLocaleDateString()
      }
      updatedUsers = [...users, userToAdd]
    }

    setUsers(updatedUsers)
    localStorage.setItem("users", JSON.stringify(updatedUsers))
    setNewUser({
      img: "",
      name: "",
      surname: "",
      email: "",
      func: "Manager",
      role: "Organization",
      status: "Online",
      date: new Date().toLocaleDateString()
    })
    setIsModalOpen(false)
  }

  // Delete
  const deleteUser = (id) => {
    if (window.confirm("O'chirmoqchisizmi?")) {
      const updated = users.filter(item => item.id !== id)
      setUsers(updated)
      localStorage.setItem("users", JSON.stringify(updated))
    }
  }

  // Edit
  const editUser = (id) => {
    const user = users.find(item => item.id === id)
    setNewUser(user)
    setEditUserId(id)
    setIsModalOpen(true)
  }

  // Toggle Status
  const toggleStatus = (id) => {
    const updated = users.map(item =>
      item.id === id ? { ...item, status: item.status === "Online" ? "Offline" : "Online" } : item
    )
    setUsers(updated)
    localStorage.setItem("users", JSON.stringify(updated))
  }

  return (
    <div className='containers'>
      <DashboardItem type={"text"} name={"search-input"} placeholder={"Type here..."} text={"Tables"} item={"Tables"} onChange={handleSearch} />
      <div className='pt-[20px] px-[10px]'>
        <div className='bgg rounded-[20px] p-[15px]'>
          <div className='flex justify-between items-center'>
            <Heading extraClass={"!text-[18px]"} tag={"h2"} title={"Authors Table"} />
            <button onClick={() => setIsModalOpen(true)} className='text-white cursor-pointer'><AddIcon /></button>
          </div>
          <div className="pt-5">
            <table className="min-w-full">
              <thead>
                <tr className="text-gray-400 text-[12px] border-b border-gray-700">
                  <th className="py-2 text-left">AUTHOR</th>
                  <th className="py-2 text-left">FUNCTION</th>
                  <th className="py-2 text-left">STATUS</th>
                  <th className="py-2 text-left">EMPLOYED</th>
                  <th className="py-2 text-left">ACTIONS</th>
                </tr>
              </thead>
              <tbody className="text-white">
                {filteredUsers.length > 0 ? (
                  filteredUsers.map(user => (
                    <tr key={user.id} className="border-b border-[#56577A]">
                      <td>
                        <div className='py-1 flex items-center gap-[5px]'>
                          <img className='object-cover w-[30px] h-[30px] rounded-[8px]' src={user.img} alt="img" width={30} height={30} />
                          <div>
                            <p className="font-normal text-[14px]">{user.name} {user.surname}</p>
                            <p className="text-[#A0AEC0] text-[12px]">{user.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-1">
                        <p className='font-normal text-[14px]'>{user.func}</p>
                        <p className="text-[#A0AEC0] text-[14px]">{user.role}</p>
                      </td>
                      <td className="py-1">
                        <button onClick={() => toggleStatus(user.id)} className={`cursor-pointer rounded-[8px] text-[14px] ${user.status === "Online"
                          ? "bg-[#01B574] text-white border px-[8.5px] border-[#01B574]"
                          : "border border-white text-white px-[7px]"}`}>
                          {user.status}
                        </button>
                      </td>
                      <td className='font-normal text-[14px]'>{user.date}</td>
                      <td>
                        <div className='flex items-center gap-[20px]'>
                          <button onClick={() => editUser(user.id)} className='cursor-pointer'><EditIcon /></button>
                          <button onClick={() => deleteUser(user.id)} className='cursor-pointer'><DeletIcon /></button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className='py-3 text-white text-center'>Hech qanday foydalanuvchi yo‘q</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Modal */}
          {isModalOpen && (
            <div className='fixed inset-0 bg-black flex justify-center items-center z-50'>
              <div className="bg-white p-6 rounded-[10px] w-[500px]">
                <form autoComplete='off' onChange={handleChange} className=' flex flex-col gap-3'>
                  <div className='relative w-[100px] h-[100px] mx-auto rounded-full border overflow-hidden'>
                    <input type="file" name='img' onChange={handleFileChange} className='absolute inset-0 opacity-0 cursor-pointer' />
                    {newUser.img && (
                      <img src={newUser.img} alt="avatar img" className='w-[100px] h-[100px] object-cover rounded-full' />
                    )}
                  </div>
                  <input type="text" name='name' placeholder='Ism kiriting' value={newUser.name} className='border rounded-[10px] px-3 py-2 outline-none' />
                  <input type="text" name='surname' placeholder='Familiya kiriting' value={newUser.surname} className='border rounded-[10px] px-3 py-2 outline-none' />
                  <input type="email" name='email' placeholder='Email kiriting' value={newUser.email} className='border rounded-[10px] px-3 py-2 outline-none' />
                  <select name='func' value={newUser.func} className='border rounded-[10px] px-3 py-2'>
                    <option value="Manager">Manager</option>
                    <option value="Programmer">Programmer</option>
                    <option value="Executive">Executive</option>
                    <option value="Designer">Designer</option>
                  </select>
                  <select name="role" value={newUser.role} className='border rounded-[10px] px-3 py-2'>
                    <option value="Organization">Organization</option>
                    <option value="Developer">Developer</option>
                    <option value="Projects">Projects</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                  </select>
                  <select name="status" value={newUser.status} className='border rounded-[10px] px-3 py-2'>
                    <option value="Online">Online</option>
                    <option value="Offline">Offline</option>
                  </select>
                  <div className='flex gap-2 justify-end'>
                    <button onClick={addOrUpdateUser} className='bg-blue-500 text-white px-4 py-2 rounded-[10px] hover:bg-blue-800'>
                      {editUserId ? "Update" : "Add"}
                    </button>
                    <button onClick={() => setIsModalOpen(false)} className='bg-gray-400 text-white px-4 py-2 rounded-[10px] hover:bg-gray-800'>Yopish</button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
        <TabelsProject />
      </div>
      <div className="bottom-0 right-0 pt-[170px] pb-[30px] px-[20px] flex items-center justify-between">
        <Text title={"@ 2021, Made with ❤️ by Simmmple & Creative Tim for a better web"} />
        <div className="flex items-center gap-[30px]">
          <Text title={"Marketplace"} />
          <Text title={"Blog"} />
          <Text title={"License"} />
        </div>
      </div>
    </div>
  )
}

export default Tables
