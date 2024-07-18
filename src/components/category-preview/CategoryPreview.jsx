import { useNavigate } from 'react-router-dom';

import './CategoryPreview.styles.scss';
import ProductCard from '../product-card/ProductCard';

const CategoryPreview = ({title, products }) => {
    const navigate = useNavigate();

    const navigateHandler = () => {
        navigate(`/shop/${title.toLowerCase()}`);
    }
    return <div key={title} className='category-preview-container'>
    <h2 className='title' onClick={navigateHandler}><span>{title.toUpperCase()}</span></h2>
    <div className='preview'>
        {products.slice(0, 4).map(data => 
            <ProductCard key={data.id} product={data} />)}
    </div>

</div>
}

export default CategoryPreview;