'use server'; 

export const sendEmail = async (formData: FormData) => {
    const firstname =  formData.get('firstname') as string;
    const lastname =  formData.get('lastname');
    const email =  formData.get('email');
    const message =  formData.get('message')

    return console.log('firstname:' + firstname, 'lastname:' + lastname, 'email: ' + email, 'message: ' + message)
}
