"use server"
import { cookies } from 'next/headers'
export const getToken =async (token) => {
   const tokenData = await cookies().get(token)
  return tokenData;
}




