import {z} from 'zod'

export const SchemaLogin = z.object({
    email: z.string().min(1,{ message: 'need a email' }),
    password: z.string().min(8, { message: 'at least 8 characters long' })
    .regex(/[A-Za-z]/, { message: ' must contain at least one letter' })
    .regex(/[0-9]/, { message: ' must contain at least one digit' })
    .regex(/[!@#$%^&*(),.?":{}|<>]/, { message: '  at least one special character' }),
  });
  
  export const SchemaRegister = z.object({
    email: z.string().email().min(1,{ message: 'need a email' }),
    adress: z.string().min(1,{ message: 'need a adress' }),
    firstName: z.string().min(1,{ message: 'need a first name' }),
    lastName: z.string().min(1,{ message: 'need a last name' }),
    number: z.string().min(1,{ message: 'need a number' }),
    password: z.string().min(8, { message: 'at least 8 characters long' })
    .regex(/[A-Za-z]/, { message: ' must contain at least one letter' })
    .regex(/[0-9]/, { message: ' must contain at least one digit' })
    .regex(/[!@#$%^&*(),.?":{}|<>]/, { message: '  at least one special character' }),
  });