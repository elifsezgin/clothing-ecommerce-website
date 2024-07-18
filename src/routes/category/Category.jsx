import { Fragment, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CategoriesContext } from "../../context/CategoriesContext";
import ProductCard from "../../components/product-card/ProductCard";

import './Category.styles.scss';

const Category = () => {
    const {category} = useParams();
    const {categoriesMap} = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [categoriesMap, category])
    
    return <Fragment>
        <h2 className="category-title">{category.toUpperCase()}</h2>
        <div className="products-container">
            {products && products.map(data => 
                <ProductCard key={data.id} product={data} />)}
        </div>
    </Fragment>

}

export default Category;