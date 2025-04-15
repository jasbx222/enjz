export const loginAuth=(prevState,formData)=>{

    const email=formData.get('email')
    const password=formData.get('password')
    console.log(
        email,
        password
    )

}