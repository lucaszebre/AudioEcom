// import { useState } from 'react'
import { useState } from 'react';
import './App.css'
import { Login } from './components/login'
import { Button, buttonVariants } from './components/ui/button'
import { cn } from './lib/utils'
import { Register } from './components/register';

function App() {
  const [login, setLogin] = useState(false)

  return (
    
    <>
    
    <div className="container relative  h-screen flex-col items-center justify-center md:grid  lg:grid-cols-2 lg:px-0">
      <Button variant={'ghost'}
        onClick={()=>{setLogin(prevLogin => !prevLogin)}}
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute right-4 top-4 md:right-8 md:top-8"
        )}
      >
        {login && 'Register' ||'Login'}
      </Button>
      <div className="relative  h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex hidden">
        <div className="absolute inset-0 bg-zinc-900 "  />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <img src="/assets/shared/desktop/logo.svg" alt="" />
          
        </div>
        
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          
         {login&& <Login /> || <Register />}
          
        </div>
      </div>
    </div>
  </>
    
  )
}

export default App
