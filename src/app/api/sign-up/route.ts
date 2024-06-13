// writing api // 

// db connection is needed / 
import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";
// import bcrypt // 

import bcrypt from 'bcryptjs'

// importing sendVerificationemail // 

import { sendVerificationEmail } from "@/helper/sendVerificationEmail";



export async function POST(request: Request){
    // lets connect the db first
    await dbConnect()

    try{

    }catch(error){
        /// console will show in terminal // 
        console.error("Error registering the user",error)

        // this return will be shown in frontend
        return Response.json(
            {
                success:false,
                message:"Error registering the user"
            }
        )
    }

}
