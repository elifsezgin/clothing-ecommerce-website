import { useSelector } from "react-redux"
import CategoryPreview from "../../components/category-preview/CategoryPreview"
import { selectCategoriesMap } from "../../store/categories/categoriesSelectors"


const CategoriesPreview = () => {
    const categoriesMap = useSelector(selectCategoriesMap);
   
    return <>
    {Object.keys(categoriesMap).map(title => 
        <CategoryPreview title={title} key={title} products={categoriesMap[title]} /> 
    )}
    </>
}

export default CategoriesPreview;