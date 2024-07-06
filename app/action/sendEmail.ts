'use server';
import { Resend } from "resend";
import EmailTemplate from "../components/email-template";
import {render} from '@react-email/render';



export const sendEmail = async (formData: FormData) => {
    

    const firstname =  formData.get('firstname') as string;
    const lastname =  formData.get('lastname') as string;
    const email =  formData.get('email') as string;
    const message =  formData.get('message') as String;

    console.log('First Name:', firstname);
    console.log('Last Name:', lastname);
    console.log('Email:', email);
    console.log('Message:', message);

    const resend = new Resend(process.env.RESEND_API_KEY);


       const {data} =  await resend.emails.send({
        from: 'Abel <abel@myfitgenius.com>',
        to: 'abejevilla55@gmail.com',
        subject: 'hello',
        html: render(EmailTemplate({ name: firstname, message: message, email: email } as any))
    });

        console.log(data)

        return { error: null,
            success: true
        }

    
}
