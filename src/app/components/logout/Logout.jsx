"use server"
import { cookies } from 'next/headers'

export const Logout = async(token) => {
 
         await cookies().delete(token)
       

  return null
}
