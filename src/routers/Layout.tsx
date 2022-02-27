import { Outlet } from "react-router-dom"
import { FooterLayout } from "../layouts/footer/FooterLayout";
import { HeaderLayout } from '../layouts/header/HeaderLayout';


export const Layout = () => {
    return (
        <>
            <HeaderLayout/>
            <>
                <Outlet/>
            </>
            <FooterLayout/>
        </>
    )
}
