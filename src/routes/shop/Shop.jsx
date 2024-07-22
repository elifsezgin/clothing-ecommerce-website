import { Route, Routes } from "react-router-dom"
import CategoriesPreview from "../../routes/categories-preview/CategoriesPreview"
import Category from "../category/Category";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCategoriesAsync, setCategories } from "../../store/categories/categoriesActions";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebaseUtils";

const Shop = () => {
    const dispatch = useDispatch();
   
    useEffect(() => {
        dispatch(fetchCategoriesAsync());
    }, [])
    
    return <Routes>
        <Route index element={<CategoriesPreview/>} />
        <Route path=":category" element={<Category /> } />
    </Routes>
}

export default Shop