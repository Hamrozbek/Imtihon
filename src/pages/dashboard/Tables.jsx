import { useEffect, useState } from 'react'
import { Heading } from '../../components'
import DashboardItem from '../../modules/DashboardItem'
import { AddIcon, DeletIcon, EditIcon } from '../../assets/icons'

const Tables = () => {
  const [users, setUsers] = useState([])

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

  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("users")) || []
    setUsers(savedUser)
  }, [])

  const handleChange = (e) => {
    const { name, value, files } = e.target
    if (name === "img" && files && files[0]) {
      const imgURL = URL.createObjectURL(files[0])
      setNewUser({ ...newUser, img: imgURL })
    } else {
      setNewUser({ ...newUser, [name]: value })
    }
  }

  const addUser = () => {
    if (!newUser.img) {
      alert("Iltimos rasm kiriting")
      return
    }
    if (!newUser.name.trim() || !newUser.surname.trim()) {
      alert("Iltimos ism familiya kiritng")
      return
    }

    const userToAdd = {
      ...newUser,
      date: new Date().toLocaleDateString(),
    }

    const updatedUsers = [...users, userToAdd]
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

  const toggleStatus = (index) => {
    const updatedUsers = users.map((user, i) => {
      if(i === index){
        return{
          ...user,
          status: user.status === "Online" ? "Offline" : "Online"
        }
      }
      return user
    })
    setUsers(updatedUsers)
    localStorage.setItem("users", JSON.stringify(updatedUsers))
  } 

  return (
    <div className='containers'>
      <DashboardItem type={"text"} name={"search-input"} placeholder={"Type here..."} text={"Tables"} item={"Tables"} />
      <div className='pt-[20px] px-[10px]'>
        <div className='bgg rounded-[20px] p-[15px]'>
          <div className='flex justify-between items-center'>
            <Heading extraClass={"!text-[18px]"} tag={"h2"} title={"Authors Table"} />
            <button onClick={() => setIsModalOpen(true)} className='text-white cursor-pointer'><AddIcon /></button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="text-gray-400 text-[12px] border-b border-gray-700">
                  <th className="py-2 text-left">AUTHOR</th>
                  <th className="py-2 text-left">FUNCTION</th>
                  <th className="py-2 text-left">STATUS</th>
                  <th className="py-2 text-left">EMPLOYED</th>
                  <th className="py-2 text-left">Actions </th>
                </tr>
              </thead>
              <tbody className="text-white">
                {users.map((item, id) => (
                  <tr key={id} className="border-b border-[#56577A]">
                    <td>
                      <div className='py-1 flex items-center gap-[5px]'>
                        <img className='object-cover' src={item.img} alt="img" width={30} height={30} />
                        <div>
                          <p className="font-normal text-[14px]">{item.name} {item.surname}</p>
                          <p className="text-[#A0AEC0] text-[12px]">{item.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-1">
                      <p className='font-normal text-[14px]'>{item.func}</p>
                      <p className="text-[#A0AEC0] text-[14px]">{item.role}</p>
                    </td>
                    <td className="py-1">
                      <button onClick={() => toggleStatus(id)} className={`cursor-pointer rounded-[8px] text-[14px] px-[10px] ${item.status === "Online"
                        ? "bg-[#01B574] text-white border border-[#01B574]"
                        : "border border-white text-white"}`}>
                        {item.status}
                      </button>
                    </td>
                    <td className='font-normal text-[14px]'>{item.date}</td>
                    <td>
                      <div className='flex items-center gap-[20px]'>
                        <button className='cursor-pointer'><EditIcon /></button>
                        <button className='cursor-pointer'><DeletIcon /></button>
                      </div>
                    </td>
                  </tr>
                ))}

                {users.length === 0 && (
                  <tr>
                    <td colSpan={5} className='py-6 text-white text-center'>Hech qanday foydalanuvchi yuq</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {isModalOpen && (
            <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
              <div className="bg-white p-6 rounded-[10px] w-[500px] flex flex-col gap-3">
                <input type="file" accept='image/*' name='img' onChange={handleChange} className='border rounded-[10px] px-3 py-2' />
                {newUser.img && (
                  <img src={newUser.img} alt="avatar img" className='w-[30px] h-[30px] object-cover rounded-full' />
                )}
                <input type="text" name='name' placeholder='Ism kiriting' value={newUser.name} onChange={handleChange} className='border rounded-[10px] px-3 py-2 outline-none' />
                <input type="text" name='surname' placeholder='Familiya kiriting' value={newUser.surname} onChange={handleChange} className='border rounded-[10px] px-3 py-2 outline-none' />
                <input type="email" name='email' placeholder='Email kiriting' value={newUser.email} onChange={handleChange} className='border rounded-[10px] px-3 py-2 outline-none' />
                <select name='func' value={newUser.func} onChange={handleChange} className='border rounded-[10px] px-3 py-2'>
                  <option value="Manager">Manager</option>
                  <option value="Programmer">Programmer</option>
                  <option value="Executive">Executive</option>
                  <option value="Designer">Designer</option>
                </select>
                <select name="role" value={newUser.role} onChange={handleChange} className='border rounded-[10px] px-3 py-2'>
                  <option value="Organization">Organization</option>
                  <option value="Developer">Developer</option>
                  <option value="Projects">Projects</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                </select>
                <select name="status" value={newUser.status} onChange={handleChange} className='border rounded-[10px] px-3 py-2'>
                  <option value="Online">Online</option>
                  <option value="Offline">Offline</option>
                </select>
                <div className='flex gap-2 justify-end'>
                  <button onClick={addUser} className='bg-blue-500 text-white px-4 py-2 rounded-[10px] hover:bg-blue-800'>Add</button>
                  <button onClick={() => setIsModalOpen(false)} className='bg-gray-400 text-white px-4 py-2 rounded-[10px] hover:bg-gray-800 '>Yopish</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Tables
