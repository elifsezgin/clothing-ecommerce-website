import { Route, Routes } from "react-router-dom"
import CategoriesPreview from "../../routes/categories-preview/CategoriesPreview"
import Category from "../category/Category";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCategoriesStart } from "../../store/categories/categoriesActions";

const Shop = () => {
    const dispatch = useDispatch();
   
    useEffect(() => {
        dispatch(fetchCategoriesStart());
    }, [])
    
    return <Routes>
        <Route index element={<CategoriesPreview/>} />
        <Route path=":category" element={<Category /> } />
    </Routes>
}

export default Shop