import Cookies from 'js-cookie';
import { axiosInstance } from './instance';
import React, { SetStateAction } from 'react';
import {  useToast } from '@/components/ui/use-toast';

export const login = async (
  email: string, 
  password: string, 
  setIsLoading: React.Dispatch<SetStateAction<boolean>>
) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { toast } = useToast()

  try {
    setIsLoading(true);  // Set loading to true when starting to try to login
    
    const response = await axiosInstance.post('/login', {
      email,
      password,
    });
    
    if (response && response.data && response.data.token) {
      Cookies.set('key', response.data.token);
      // Authentication successful
      setIsLoading(false);  // Reset loading when login is successful
      return response.data;
    } else {
      // Authentication failed
      toast({
        variant: "destructive",
        title: "Uh oh! Authentication failed.",
      })
      setIsLoading(false);  // Reset loading when login fails
      return null;
    }
  } catch (error) {
    toast({
      variant: "destructive",
      title: "Uh oh! Authentication failed.",
    })
    console.error(error);
    setIsLoading(false);  // Ensure loading is reset even on error
    return null;
  }
};

    
  
    