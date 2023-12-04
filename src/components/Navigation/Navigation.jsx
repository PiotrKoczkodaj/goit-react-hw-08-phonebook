import { Link, Outlet } from "react-router-dom";

export const Navigation = () => {
    return (
        <>
            <h2>Welcome to phonebook aplication, please register</h2>
            <Link to='register'>Register</Link>
            <Link to='login'>Login</Link>
            <Outlet/>
        </>
        
    )
}