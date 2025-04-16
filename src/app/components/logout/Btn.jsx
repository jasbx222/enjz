"use client"


import { redirect } from "next/navigation"
import { Logout } from "./Logout"
import { LogOut } from "lucide-react"

const Btn = () => {
    const hanDleSubmit=async()=>{
        await Logout('token')
        redirect('/login')

    }
  return (
    <button onClick={hanDleSubmit} className="px-4 h-[40px] py-2 font-semibold rounded-xl shadow-md transition duration-300">
<LogOut size={30} color="red"/>
  </button>
  )
}

export default Btn