import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayouts.jsx";
import Home from "./pages/Home.jsx";
// import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
 //   errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
