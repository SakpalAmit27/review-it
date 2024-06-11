 import {z} from 'zod'
 // schema model validation after the user has logged  in // 
 

 export const signInSchema = z.object({
    // identifier stands for email // 

    identifier:z.string(),
    password:z.string()
 })