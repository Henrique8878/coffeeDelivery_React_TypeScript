import { Outlet } from "react-router-dom"
import { HeaderPage } from "../components/HeaderPage"

export function Default(){
    return(
        <>  
            <Outlet/>
        </>
    )
}