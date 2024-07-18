import { useContext } from "react"
import { CategoriesContext } from "../../context/CategoriesContext"
import CategoryPreview from "../../components/category-preview/CategoryPreview"


const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CategoriesContext)
   
    return <>
    {Object.keys(categoriesMap).map(title => 
        <CategoryPreview title={title} key={title} products={categoriesMap[title]} /> 
    )}
    </>
}

export default CategoriesPreview;