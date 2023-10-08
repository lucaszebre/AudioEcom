import { useQuery } from 'react-query';
import { axiosInstance } from './instance';
import {  useToast } from '@/components/ui/use-toast';

 const register = async (email:string, password:string,firstName:string,lastName:string,number:number,adress:string) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { toast } = useToast()

    try {
        const response = await axiosInstance.post('/register', {
            email,
            password,
            firstName,
            lastName,
            number,
            adress
        });
    
        if (response && response.data && response.data.token) {
            // Authentication successful
            toast({
                variant: "destructive",
                title: "Register successfuly .",
              })
            return response.data;
        } else {
            // Authentication failed
            toast({
                variant: "destructive",
                title: "Register failed .",
              })
            return response;
        }
        } catch (error) {
            toast({
                variant: "destructive",
                title: "Error with the server .",
              })
        console.error(error);
        return null;
        }
    };

    export const useRegister = (email:string, password:string,firstName:string,lastName:string,number:number,adress:string) => {
        const { data, isLoading, isError } = useQuery([ email, password,firstName,lastName,adress,number], 
            () => register( email, password,firstName,lastName,number,adress));
    
        return { data, isLoading, isError };
    };