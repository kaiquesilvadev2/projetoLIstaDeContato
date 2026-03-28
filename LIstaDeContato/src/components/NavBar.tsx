import React from "react"
import TextLayout from "./textLayout"

interface INavBarProps extends React.ComponentProps<'aside'> { }

export default function NavBar({ className, ...props }: INavBarProps) {



    return (
        <aside className={` bg-gray-800 ${className}`} {...props}>

            <TextLayout as="h1" className="mb-4" size="textTituloNavBar" >Menu</TextLayout>


            <nav className="flex flex-col gap-2">
                <TextLayout as="a" className="rounded hover:bg-gray-700" size="textNavbar" spacing="paddingNavbar" >Home</TextLayout>
                <TextLayout as="a" className="rounded hover:bg-gray-700" size="textNavbar" spacing="paddingNavbar" >Home</TextLayout>
                <TextLayout as="a" className="rounded hover:bg-gray-700" size="textNavbar" spacing="paddingNavbar" >Perfil</TextLayout>
            </nav>
        </aside>
    )
}