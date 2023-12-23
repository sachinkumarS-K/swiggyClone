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

const Resturant = lazy(() => import("./component/Resturant.jsx"));

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="*" element={<ErrorPage />}></Route>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About name={"sachinnnn"} />} />
      <Route path="contact" element={<Contact />} />
      <Route
        path="/Resturant/:id"
        element={
          <Suspense fallback = {<Shimmer/>}>
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