import React from 'react';
import './App.css';
import { AppContext } from './context/AppContext'
import Home from './Pages/Home'
import TagPage from './Pages/TagPage'
import CategoryPage from './Pages/CategoryPage'
import { useContext ,useEffect } from 'react';
import { Route, Routes, useLocation, useSearchParams } from 'react-router-dom'
import Navbar from './components/Navbar';
import Login from './Pages/Login';
import Signup from './Pages/Signup'
import Generate from './Pages/Generate';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
function App() {
    const {fetchBlogPosts}=useContext(AppContext)
    const [searchParams,setSearchParams]=useSearchParams()
    const location =useLocation()
    useEffect(() => {
        const page =searchParams.get("topic") ?? "machinelearning"
        if (location.pathname.includes("tags")) {
            const tag =location.pathname.split("/").at(-1).replaceAll("-" ," ")
            fetchBlogPosts(tag)
        }
        else if(location.pathname.includes("categories")) {
            const category=location.pathname.split("/").at(-1).replaceAll("-"," ")
            fetchBlogPosts(category)

        }
        else{
            fetchBlogPosts(Number(page))
        }

    },[location.pathname,location.search])
    
    return (
        <div>
            <div className='bg-slate-900'>
            <Navbar/>
            
            </div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/tags/:tag" element={<TagPage/>}/>
                <Route path="/categories/:category" element={<CategoryPage/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/generate" element={<Generate/>}/>
            

             
            </Routes>
            <ToastContainer />
        </div>
        
    );
}

export default App;