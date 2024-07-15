import { useContext } from "react"
import { ProductsContext } from "../../context/ProductsContext"
import ProductCard from "../../components/product-card/ProductCard"

import './Shop.styles.scss'

const Shop = () => {
    const { products } = useContext(ProductsContext)
    return <div className="products-container">
        {products.map(data => 
    <ProductCard key={data.id} product={data} />)}
    </div>
}

export default Shop