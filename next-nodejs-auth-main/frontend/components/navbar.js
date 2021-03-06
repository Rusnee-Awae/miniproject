import Link from 'next/link'

const Navbar = () => (
    <div className="border flex w-4/5 justify-between p-2 px-4">
        <Link href="/"><a> Home </a></Link> 
        <Link href="/foo"><a> Review </a></Link>  
        <Link href="/register"><a> Register </a></Link>  
        <Link href="/login"><a> Login </a></Link> 
        <Link href="/profile"><a> Profile </a></Link> 
        <Link href="/logout"><a> Logout </a></Link> 
    </div>
)

export default Navbar