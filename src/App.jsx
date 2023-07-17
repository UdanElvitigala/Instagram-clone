import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import Layout from "./components/Layout"
import HomePage from "./pages/HomePage"
import Notifications from "./pages/NotificationsPage"
import ProfilePage from "./pages/ProfilePage"
import ChatsPage from "./pages/ChatsPage"
import PageNotFound from "./pages/404"

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<HomePage />}/>
    <Route path="notifications" element={<Notifications/>} />
    <Route path="chats" element={<ChatsPage/>}/>
    {/* <Route path="profile"> */}
      <Route path=":name" element={<ProfilePage />}/>
    {/* </Route> */}
    <Route path="*" element={<PageNotFound />} />
  </Route>
))

export default function App() {
  return(
    <RouterProvider router={router} />
  )
}

