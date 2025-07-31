import { Outlet } from "react-router-dom"
import Navbar from "../../common/Header"
export default function Root(){
    return(
        <div>
            <Navbar />
            <Outlet />
        </div>
    )
}