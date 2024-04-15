import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import User from "./pages/User";
import NotFound from "./pages/NotFound";

export default function Router() {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <App/>,
            errorElement: <NotFound/>,
            children: [
                {index: true, element: <Home/>},
                {path: '/user/:userId', element: <User/>}
            ]
        }
    ])
    return <RouterProvider router={router}/>
}