"use client"
import Image from "next/image"
import logo from "@/assets/logo.png"
import Link from "next/link"

const Navbar = () => {
    return (
        <>
            <nav className="flex justify-between items-center py-4 px-4 bg-[#203239]">
                <div className="h-12 w-12">
                    <Image src={logo} alt="florident"></Image>
                </div>

                <div className="text-text_light">
                    <ul className="flex gap-4 items-center">
                        <Link href="/">
                            <li>Home</li>
                        </Link>
                        <Link href="/">
                            <li>About</li>
                        </Link>
                        <Link href="/">
                            <li>Log in</li>
                        </Link>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar