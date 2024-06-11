import {z} from 'zod'
// schema validation for verification
export const verifySchema = z.object({
    code:z.string().length(6,"verification code must be 6 digits")

})