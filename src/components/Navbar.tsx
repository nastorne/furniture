import { IoCartOutline } from "react-icons/io5";

type NavbarProps = {
    numberOfCartItems: number
}

export default function Navbar({ numberOfCartItems }: NavbarProps) {
    return (
        <nav className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a href='#items'>Our Items</a></li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <a href='#hero' className="btn btn-ghost text-xl">Antique Furniture</a>
            </div>
            <div className="navbar-end">
                <label htmlFor="my_modal_6" className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <IoCartOutline className="text-2xl" />
                        {numberOfCartItems > 0 && <span className="badge badge-sm badge-primary indicator-item">{numberOfCartItems}</span>}
                    </div>
                </label>
            </div>
        </nav>
    )
}
