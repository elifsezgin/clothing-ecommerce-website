import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/ProductCard";

import {CategoryTitle, ProductsContainer} from './Category.styles';
import { selectCategoriesMap } from "../../store/categories/categoriesSelectors";
import { useSelector } from "react-redux";

const Category = () => {
    const {category} = useParams();
    const categoriesMap = useSelector(selectCategoriesMap)
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [categoriesMap, category])
    
    return <Fragment>
        <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
        <ProductsContainer>
            {products && products.map(data => 
                <ProductCard key={data.id} product={data} />)}
        </ProductsContainer>
    </Fragment>

}

export default Category;