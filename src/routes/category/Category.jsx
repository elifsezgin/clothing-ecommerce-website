import { Fragment, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CategoriesContext } from "../../context/CategoriesContext";
import ProductCard from "../../components/product-card/ProductCard";

import {CategoryTitle, ProductsContainer} from './Category.styles';

const Category = () => {
    const {category} = useParams();
    const {categoriesMap} = useContext(CategoriesContext);
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