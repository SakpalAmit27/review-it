// importing our resend export from resend.ts // 


import {resend} from '@/lib/resend'
// importing our demo email // 

import VerificationEmail from '../../emails/VerificationEmail'
import { ApiResponse } from '@/types/ApiResponse'

export async function sendVerificationEmail(
    // below data we will take for user Verificaton /// 

    
    email:string,
    username:string,
    verifyCode:string,
):Promise<ApiResponse>{
    try{
        // source of code is from reat email // 
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: 'review it | verification code',
            react: VerificationEmail({username,otp:verifyCode}) // the demo email // and pass the prop method .. 
          });
        return {success:true , message:"verification email sent successfully"}

    }catch(emailError){
        console.log("Error sending verification email ",emailError)
        // to shut the Promise
        return {success:false , message:"Failed to send verification email"};
        }
    }
   
