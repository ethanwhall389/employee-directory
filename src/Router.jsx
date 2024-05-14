import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home/Home";
import User from "./pages/User/User";
import AllGroups from "./pages/AllGroups/AllGroups";
import Group from "./pages/Group/Group";
import NotFound from "./pages/404/404";

export default function Router() {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <App/>,
            errorElement: <NotFound/>,
            children: [
                {index: true, element: <Home/>},
                {path: '/user/:userId', element: <User/>},
                {path: '/groups', element: <AllGroups/>,},
                {path: '/groups/:groupId', element: <Group/>}
            ]
        }
    ])
    return <RouterProvider router={router}/>
}