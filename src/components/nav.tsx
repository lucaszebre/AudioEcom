import React from 'react'
import Category from './category'
import { Link } from 'react-router-dom'
import '../styles/NavStyle.css'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from './ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
const Nav = (props:{color?:string}) => {
    const [menu, setMenu] = React.useState(false)

    function handleMenu() {
        setMenu(!menu)
    }
    return (
        <>
    <div className="NavContainer"
    style={
        {
            background:props.color

    }}
    >
        
            <nav>
                <div className="BlockNav">
                    <img onClick={handleMenu} className='NavHamburger1' src="/assets/shared/tablet/icon-hamburger.svg" alt="logo" />
                    <Link className='NavLink' to={"/"}><img className='NavLogo' src="/assets/shared/desktop/logo.svg" alt="logo" /></Link>
                </div>
                <Link className='NavLink' to={"/"}><img className='NavLogoMobile' src="/assets/shared/desktop/logo.svg" alt="logo" /></Link>
                <ul className='NavList'>
                    <li><Link className='NavLink' to={"/"}>Home</Link></li>
                    <li><Link className='NavLink' to={"/headphones"}>Headphones</Link></li>
                    <li><Link className='NavLink' to={"/speakers"}>Speakers</Link></li>
                    <li><Link className='NavLink' to={"/earsphones"}>Earphones</Link></li>
                </ul>
                <div className='flex items-center gap-4 cursor-pointer'>
                <img  
                // onClick={()=>(setModal(!Modal))} 
                className='CartNav' src="/assets/shared/desktop/icon-cart.svg" alt="cart" />

                {
                    <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                        <Avatar className="h-8 w-8">
                        <AvatarImage src="/avatars/01.png" alt="@shadcn" />
                        <AvatarFallback>SC</AvatarFallback>
                        </Avatar>
                    </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56" align="end" forceMount>
                    <DropdownMenuLabel className="font-normal">
                        <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">shadcn</p>
                        <p className="text-xs leading-none text-muted-foreground">
                            m@example.com
                        </p>
                        </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <DropdownMenuItem>
                        Profile
                        <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                        Billing
                        <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                        Settings
                        <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                        </DropdownMenuItem>
                        <DropdownMenuItem>New Team</DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        Log out
                        <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>||<Button>Login</Button>}
                    </div>
                
            </nav>
    </div>

    <div className="MenuBackGround"
    style={
        {
            display:menu ? 'block' : 'none'
    }}
    >
        <div className="MenuSection">
            <Category />
        </div>
    </div>
        </>

    )
}

export default Nav
