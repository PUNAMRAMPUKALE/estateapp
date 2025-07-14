import { createBrowserRouter,
RouterProvider,
} from "react-router-dom";
import HomePage from './routes/homePage/HomePage.jsx';
import ListPage from './routes/listPage/ListPage.jsx';
import Layout from './routes/layout/Layout.jsx';
import SinglePage from './routes/singlePage/SinglePage.jsx';
import UserProfile from "./routes/userProfile/UserProfile.jsx";
function App() {

  const router = createBrowserRouter([
    {path:"/",
      element:<Layout/>,
      children:[
        {
      path:"/",
      element:<HomePage/>
    },
    {
      path:"/userprofile",
      element:<UserProfile/>
    },
    {
      path:"/list",
      element:<ListPage/>
    },
    {
      path:"/:id",
      element:<SinglePage/>
    }
    ],
    },
  ])
  return (
    <RouterProvider router={router}/>

  )
}

export default App
