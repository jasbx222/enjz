"use server"
export const loginAuth=async(prevState,formData)=>{

    const email=formData.get('email')
    const password=formData.get('password')
    console.log(
        email,
        password
    )

}