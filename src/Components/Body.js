import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Face from "./Face";
import Eyes from "./Eyes";
import Lips from "./Lips";
import SearchPage from "./SearchPage";


const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path : "/",
            element : <Home/>
        },
        {
            path : "/search",
            element : <SearchPage/>
        },
        {
            path : "/face",
            element : <Face/>
        },
        {
            path : "/eyes",
            element : <Eyes/>
        },
        {
            path : "/lips",
            element : <Lips/>
        }

    ])
    return(
        <div>
            <RouterProvider router = {appRouter}/>
        </div>
    )
}
export default Body