import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayouts.jsx";
import Home from "./pages/Home.jsx";
import Features from "./pages/Features.jsx";
import Notifications from "./pages/Notifications.jsx";
import Notfound from "./pages/Notfound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Notfound />,
    children: [
      { index: true, element: <Home /> },
      { path: "/features", element: <Features /> },
      { path: "/notifications", element: <Notifications /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
