import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter , createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import Error from './component/Error.jsx'
import ErrorPage from './component/ErrorPage.jsx'
// import Resturant from './component/Resturant.jsx'
import About from './pages/About.jsx'
import Shimmer from './component/shimmer/Shimmer.jsx'
import Loader from './component/loader/Loader.jsx'
import ItemDetails from './pages/ItemDetails.jsx'
// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement : <Error/>,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "/contact",
//         element: <Contact />,
//       },
//     ],
//   },
// ]);

const Resturant = lazy(() => import("./component/ResturantMenu.jsx"));
const Cart = lazy(() => import("./pages/Cart.jsx"))
const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="*" element={<ErrorPage />}></Route>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About name={"sachinnnn"} />} />
      <Route path='cart' element = {<Suspense fallback = {<Loader />} > <Cart /> </Suspense>} />
      <Route path="contact" element={<Contact />} />
      <Route path="/item/:name/:id" element={<ItemDetails />} />
      <Route
        path="/Resturant/:id"
        element={
          <Suspense fallback = {<Loader/>}>
            <Resturant />
          </Suspense>
        }
      />
    </Route>
  )
);


ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter}  />
);
