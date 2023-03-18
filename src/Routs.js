import Index from "./Pages/index"
import Login from "./Pages/Login/Login"
import Register from "./Pages/Register/Register"
import Courses from "./Pages/Courses/Courses"
import CourseInfo from "./Pages/CourseInfo/CourseInfo"
import About from "./Pages/About/About"
import Contact from "./Pages/Contact/Contact"
import PrivetPage from "./PrivetPage/PrivetPage"
import Category from "./Pages/Category/Category"
import Teacher from "./Pages/Teacher/Teacher"
import Teachers from "./Pages/TeachersPage/TeachersPage"
import Blogs from "./Pages/Blogs/Blogs"
import Article from "./Pages/Article/Article"


import AdminIndex from "./Pages/AdminPanel/index"
import AdminArticles from "./Pages/AdminPanel/Articles/Articles"
import AdminCourses from "./Pages/AdminPanel/Courses/Courses"
import AdminUsers from "./Pages/AdminPanel/Users/Users"
import AdminComments from "./Pages/AdminPanel/Comments/Comments"
import AdminMessages from "./Pages/AdminPanel/Messages/Messages"
import MainPage from "./Pages/AdminPanel/MainPage/MainPage"


import UserIndex from "./Pages/UserPanel/index"
import Dashboard from "./Pages/UserPanel/Dashboard/Dashboard"



const  Routs = [
    {path:"/" , element:<Index />},
    {path:"/*" , element:<Index />},
    {path:"/login" , element:<Login />},
    {path:"/register" , element:<Register />},
    {path:"/about" , element:<About />},
    {path:"/contact" , element:<Contact />},
    {path:"/teachers" , element:<Teachers />},
    {path:"/blogs" , element:<Blogs />},
    {path:"/article/:articleId" , element:<Article />},
    {path:"/courses/:page" , element:<Courses />},
    {path:"/course/:courseId" , element:<CourseInfo />},
    {path:"/category/:categoryId" , element:<Category />},
    {path:"/teacher/:teacherId" , element:<Teacher />},


    {path:"/p-admin" , element:<PrivetPage /> , children:[
        {path:"" , element:<AdminIndex/> ,children:[
        {path:"dashboard" , element:<MainPage/>},
        {path:"users" , element:<AdminUsers/>},
        {path:"courses" , element:<AdminCourses/>},
        {path:"articles" , element:<AdminArticles/>},
        {path:"comments" , element:<AdminComments/>},
        {path:"messages" , element:<AdminMessages/>},
        {path:"offs" , element:<h1>offs</h1>},
        
    ]}]},


    {path:"user-panel" , element:<UserIndex  /> , children:[
        {path:'' , element:<Dashboard />}
    ]},
]





export default Routs