"use server"

import axios from "axios"
import { cookies } from "next/headers"

export const loginAuth=async(prevState,formData)=>{

    const email=formData.get('email')
    const password=formData.get('password')
    try {
      const res = await axios.post('https://back.kadrapp.com/admin/v1/auth/login', {
        email: email,
        password: password
      }, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      });
  
      if (res.status >= 200) {
       
        cookies().set('token', res.data.token);  // تعيين الكوكيز
     
       
      } 
    } catch (error) {
    console.log(error)
    }
     

}