import { useEffect, useState } from "react"
import { AddIconProject, ChekIcon, DeletIcon, EditIcon } from "../assets/icons"
import { Heading } from "../components"

const TabelsProject = () => {
    const [projects, setProjects] = useState([])
    const [editProjectId, setEditeProjectId] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [newProject, setNewProject] = useState({
        img: "",
        name: "",
        price: "",
        status: "Working",
        comp: "10%"
    })

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("projects")) || []
        setProjects(saved)
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target
        setNewProject(prev => ({ ...prev, [name]: value }))
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => setNewProject(prev => ({ ...prev, img: reader.result }))
            reader.readAsDataURL(file)
        }
    }

    // Add project 
    const addOrUpdateProject = () => {
        if (!newProject.img || !newProject.name.trim()) {
            alert("Iltimos teliq malumot kiriting")
            return
        }

        let updateProjects
        if (editProjectId) {
            updateProjects = projects.map(item =>
                item.id === editProjectId ? { ...newProject, id: editProjectId } : item
            )
            setEditeProjectId(null)
        } else {
            const projectToAdd = {
                ...newProject,
                id: projects.length ? projects[projects.length - 1].id + 1 : 1
            }
            updateProjects = [...projects, projectToAdd]
        }

        setProjects(updateProjects)
        localStorage.setItem("projects", JSON.stringify(updateProjects))
        setNewProject({
            img: "",
            name: "",
            price: "",
            status: "Working",
            comp: "10%"
        })
        setIsModalOpen(false)
    }

    // delete part 
    const deleteProject = (id) => {
        if (window.confirm("O'chirmoqchimisiz?")) {
            const updated = projects.filter(item => item.id !== id)
            setProjects(updated)
            localStorage.setItem("projects", JSON.stringify(updated))
        }
    }

    // update part 
    const editProject = (id) => {
        const project = projects.find(item => item.id === id)
        setNewProject(project)
        setEditeProjectId(id)
        setIsModalOpen(true)
    }

    return (
        <div className="pt-[24px]">
            <div className="bgg rounded-[20px] p-[15px]">
                <div className='flex justify-between items-center'>
                    <div>
                        <Heading extraClass={"!text-[18px]"} tag={"h2"} title={"Projects"} />
                        <div className="flex items-center gap-[4px]">
                            <ChekIcon />
                            <p className="text-[14px] text-[#A0AEC0] font-bold">30 done<span className="text-[14px] text-[#A0AEC0] font-bold"> this month</span> </p>
                        </div>
                    </div>
                    <button onClick={() => setIsModalOpen(true)} className='text-white cursor-pointer'><AddIconProject/></button>
                </div>
                <div className="overflow-x-auto pt-5">
                    <table className="min-w-full">
                        <thead>
                            <tr className="text-gray-400 text-[12px] border-b border-gray-700">
                                <th className="py-2 text-left">COMPANIES</th>
                                <th className="py-2 text-left">BUDGET</th>
                                <th className="py-2 text-left">STATUS</th>
                                <th className="py-2 text-left">COMPLETION</th>
                                <th className="py-2 text-left">ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {projects.length > 0 ? (
                                projects.map(project => (
                                    <tr key={project.id} className="border-b border-[#56577A]">
                                        <td>
                                            <div className="flex items-center gap-[10px]">
                                                <img className="py-2" src={project.img} alt="img" width={20} height={20} />
                                                <p className="text-[14px] text-[#FFFFFF]">{project.name}</p>
                                            </div>
                                        </td>
                                        <td className="py-2">
                                            <p className="text-[14px] font-bold text-[#FFFFFF]">{project.price}$</p>
                                        </td>
                                        <td>
                                            <p className="text-[14px] font-bold text-[#FFFFFF]">{project.status}</p>
                                        </td>
                                        <td>
                                            <div className="text-[14px] text-white font-bold w-[100px]">
                                                <span>{project.comp}</span>
                                                <div className="w-full h-[4px] bg-gray-400 rounded relative overflow-hidden mt-1">
                                                    <div
                                                        className={` h-[4px] bg-blue-500 absolute top-0 left-0 ${project.comp === "10%" ? "w-[10%]" : ""} ${project.comp === "25%" ? "w-[25%]" : ""} ${project.comp === "60%" ? "w-[60%]" : ""} ${project.comp === "100%" ? "w-full" : ""} `}
                                                    ></div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className='flex text-white items-center gap-[20px]'>
                                                <button onClick={() => editProject(project.id)} className='cursor-pointer'><EditIcon /></button>
                                                <button onClick={() => deleteProject(project.id)} className='cursor-pointer'><DeletIcon /></button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={5} className='py-3 text-white text-center'>Hech qanday loyiha yo‘q</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* modal  */}

                {isModalOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-100 flex justify-center items-center z-50">
                        <div className="bg-white p-6 rounded-[10px] w-[500px]">
                            <form autoComplete="off" onChange={handleChange} className="flex flex-col gap-3">
                                <div className="relative w-[100px] h-[100px] mx-auto rounded-full border overflow-hidden">
                                    <input type="file" name="img" onChange={handleFileChange} className="absolute inset-0 opacity-0 cursor-pointer" />
                                    {newProject.img && (
                                        <img src={newProject.img} alt="abvatar img" className="w-[100px] h-[100px] rounded-full object-cover" />
                                    )}
                                </div>
                                <input type="text" name="name" placeholder="Nom kiriting" value={newProject.name} className="border rounded-[10px] px-3 py-2 outline-none" />
                                <input type="number" name="price" placeholder="Narx kiriting" value={newProject.price} className="border rounded-[10px] px-3 py-2 outline-none" />
                                <select name="status" value={newProject.status} className="border rounded-[10px] px-3 py-2">
                                    <option value="Working">Working</option>
                                    <option value="Canceled">Canceled</option>
                                    <option value="Done">Done</option>
                                </select>
                                <select name="comp" value={newProject.comp} className="border rounded-[10px] px-3 py-2">
                                    <option value="10%">10%</option>
                                    <option value="25%">25%</option>
                                    <option value="60%">60%</option>
                                    <option value="100%">100%</option>
                                </select>
                                <div className="flex gap-2 justify-end">
                                    <button onClick={addOrUpdateProject} className='bg-blue-500 text-white px-4 py-2 rounded-[10px] hover:bg-blue-800'>
                                        {editProjectId ? "Update" : "Add"}
                                    </button>
                                    <button onClick={() => setIsModalOpen(false)} className='bg-gray-400 text-white px-4 py-2 rounded-[10px] hover:bg-gray-800'>Yopish</button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default TabelsProject
