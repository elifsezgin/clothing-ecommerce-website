import { createContext, useEffect, useState } from "react";
// import SHOP_DATA from '../../src/shop-data';
import { getCategoriesAndDocuments } from "../utils/firebase/firebaseUtils";

export const CategoriesContext = createContext({
    categoriesMap: {}
})

export const CategoriesProvider = ({children}) => {
    const [categoriesMap, setCategoriesMap] = useState({})
    
    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            setCategoriesMap(categoryMap);
        }
        getCategoriesMap()
    }, [])
    
    const value = {categoriesMap}
    return <CategoriesContext.Provider value={value}>
        {children}
    </CategoriesContext.Provider>
}
