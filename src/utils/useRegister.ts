import { useQuery } from 'react-query';
import { axiosInstance } from './instance';

 const register = async (email:string, password:string,firstName:string,lastName:string,number:number,adress:string) => {
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
            return response.data;
        } else {
            // Authentication failed
            return response;
        }
        } catch (error) {
        console.error(error);
        return null;
        }
    };

    export const useRegister = (email:string, password:string,firstName:string,lastName:string,number:number,adress:string) => {
        const { data, isLoading, isError } = useQuery([ email, password,firstName,lastName,adress,number], 
            () => register( email, password,firstName,lastName,number,adress));
    
        return { data, isLoading, isError };
    };