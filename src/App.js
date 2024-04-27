import './App.css';
import {Routes, BrowserRouter, Route} from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import "react-toastify/dist/ReactToastify.css"
import {toast, ToastContainer} from "react-toastify";
import Header from "./components/Header";
import Footer from "./components/Footer";
import React, {useEffect, useState} from "react";
import axios from "axios";


function App() {

    const [blogs, setBlogs] = useState([]);
    const [categoryData, categorySetData] = useState({});
    const [searchField, setSearchField] = useState('');
    const [filteredBlogs, setFilterBlogs] = useState(blogs);

    useEffect(() => {
        loadBlogsData();
        loadCategoryData();
    }, []);

    useEffect(() => {
    const newFilteredBlog = blogs.filter((blog) => {
      return blog.name.toLocaleLowerCase().includes(searchField);
    });

    setFilterBlogs(newFilteredBlog);
  }, [blogs, searchField]);

    const loadBlogsData = async () => {
        const response = await axios.get("https://www.atmacacode.net/blog/api/tum-yazilar/")
        if (response.status === 200) {
            setBlogs(response.data.data)
        } else {
            toast.error("Bir hata meydana geldi.");
        }
    }

    const loadCategoryData = async (category) => {
        const response = await axios.get(`https://www.atmacacode.net/blog/api/kategoriler/`)
        if (response.status === 200) {
            categorySetData(response.data)
        } else {
            toast.error("Bir hata meydana geldi.");
        }
    }

    const onSearchChange = (event) => {
        const searchFieldString = event.target.value.toLocaleLowerCase();
        setSearchField(searchFieldString);
    };

    const handleCategory = async (category) => {
        const response = await axios.get(`https://www.atmacacode.net/blog/api/tum-yazilar/?kategori=${category}`)
        if(response.status === 200) {
            setFilterBlogs(response.data.data)
        }else {
            toast.error("Bir hata meydana geldi.");
        }
    }

    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <ToastContainer/>
                <Routes>
                    <Route path="/" element={<Home onChangeHandler={onSearchChange} handleCategory={handleCategory} data={filteredBlogs} categoryData={categoryData}/>}/>
                    <Route path="/:slug" element={<Blog/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
