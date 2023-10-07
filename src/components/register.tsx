import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { SchemaRegister } from "@/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Icons } from "./icons"
import { useRegister } from "@/utils/useRegister"
import { useState } from "react"


export function Register() {
    const [isLoading,setIsLoading] = useState(false)
    const form = useForm<z.infer<typeof SchemaRegister>>({
        resolver: zodResolver(SchemaRegister),
        defaultValues: {
          email: "",
          
        },
      })


      
      function onSubmit(values: z.infer<typeof SchemaRegister>) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
    const {isLoading}=    useRegister(values.email,
            values.password,
            values.firstName,
            values.lastName,
            parseInt(values.number),
            values.adress)
        setIsLoading(isLoading)
        console.log(values)
      }
  return (
        
            <Card className="p-2">
        <CardHeader className="space-y-1">
            <CardTitle className="text-2xl ">Register an account</CardTitle>
            <CardDescription >
            Enter your email below to register your account
            </CardDescription>
        </CardHeader>
        <Form {...form} >
        <form  onSubmit={form.handleSubmit(onSubmit)} className="p-3 content-start items-start flex-col space-y-8">
            <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
                <FormItem className="flex-col items-start content-start w-full">
                <FormLabel className="text-start w-full" >First name</FormLabel>
                <FormControl>
                    <Input placeholder="lucas" {...field} />
                </FormControl>
                
                <FormMessage />
                </FormItem>
            )}
            /> <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
                <FormItem className="flex-col items-start content-start w-full">
                <FormLabel className="text-start w-full" >Last name</FormLabel>
                <FormControl>
                    <Input placeholder="de belmont" {...field} />
                </FormControl>
                
                <FormMessage />
                </FormItem>
            )}
            /> <FormField
            control={form.control}
            name="adress"
            render={({ field }) => (
                <FormItem className="flex-col items-start content-start w-full">
                <FormLabel className="text-start w-full" >Adress</FormLabel>
                <FormControl>
                    <Input placeholder="2 Avenue foch 75016 Paris" {...field} />
                </FormControl>
                
                <FormMessage />
                </FormItem>
            )}
            /> <FormField
            control={form.control}
            name="number"
            render={({ field }) => (
                <FormItem className="flex-col items-start content-start w-full">
                <FormLabel className="text-start w-full" >Number</FormLabel>
                <FormControl>
                    <Input  placeholder="0763456789" {...field} />
                </FormControl>
                
                <FormMessage />
                </FormItem>
            )}
            /> <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
                <FormItem className="flex-col items-start content-start w-full">
                <FormLabel className="text-start w-full" >Email</FormLabel>
                <FormControl>
                    <Input placeholder="lucas1@gmail.com" {...field} />
                </FormControl>
                
                <FormMessage />
                </FormItem>
            )}
            /> 
            <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
                <FormItem className="w-full">
                <FormLabel className="text-start items-start w-full" >Password</FormLabel>
                <FormControl>
                    <Input placeholder="shadcn@dd11" {...field} />
                </FormControl>
                
                <FormMessage />
                </FormItem>
            )}
            />
            <Button className="w-full"> {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}Login</Button>
        </form>
        </Form>
        </Card>
        
    )
}