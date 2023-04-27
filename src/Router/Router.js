import { Result } from "postcss";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AboutMe from "../Pages/About me/AboutMe";
import Blogs from "../Pages/Blogs/Blogs";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";
import ProjectDetails from "../Pages/Projects/ProjectDetails/ProjectDetails";
import Projects from "../Pages/Projects/Projects";
import Resume from "../Pages/Resume/Resume";
import Skills from "../Pages/Skills/Skills";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/skills', 
                element: <Skills></Skills>
            },
            {
                path:'/projects', 
                element: <Projects></Projects>
            },
            {
                path:'/projectDetails/:id',
                element:<ProjectDetails></ProjectDetails>,
                loader: async({params}) =>await fetch(`https://portfolio-server-three-psi.vercel.app/projectDetails/${params?.id}`)
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            },
            {
                path:'/resume',
                element:<Resume></Resume>
            },
            {
                path:'/blogs', 
                element:<Blogs></Blogs>
            },
            {
                path:'/aboutme',
                element:<AboutMe></AboutMe>
            }

        ]
    }
])

export default router;