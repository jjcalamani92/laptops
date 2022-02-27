import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import ScrollToTop from "../helpers/ScrollToTop";
import { HomePages } from "../pages/home/HomePages";
import { Layout } from "./Layout";


export const AppRouter = () => {
    return (
        <BrowserRouter>
            <ScrollToTop>
                <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<HomePages />} />

                    </Route>
                </Routes>
            </ScrollToTop>
        </BrowserRouter>
    )
}
