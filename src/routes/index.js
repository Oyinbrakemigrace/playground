import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from '../pages/Home'
import About from '../pages/About'
import ContactUs from '../pages/ContactUs'
import Form from "../pages/Form";
import Random from "../pages/Random";
import Learn from "../pages/Learn";
import Learn2 from "../pages/Learn2";




const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children:[
            {
                path: '',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <ContactUs />
            },
            {
                path: "/form",
                element: <Form />
            },
            {
                path: "/random",
                element: <Random />
            },
            {
                path: "/learn",
                element: <Learn />
            },
            {
                path: "/learn2",
                element: <Learn2 />
            }
        ]
    }
])

export default routes