import {z} from 'zod'

// schema model validation for accepting messages // 

export const acceptMessageSchema = z.object({
    
    acceptMessage:z.boolean() 
 })