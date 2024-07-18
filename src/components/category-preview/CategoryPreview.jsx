import { useNavigate } from 'react-router-dom';

import { CategoryPreviewContainer, Preview, Title } from './CategoryPreview.styles';
import ProductCard from '../product-card/ProductCard';

const CategoryPreview = ({title, products }) => {
    const navigate = useNavigate();

    const navigateHandler = () => {
        navigate(`/shop/${title.toLowerCase()}`);
    }
    return <CategoryPreviewContainer>
        <Title onClick={navigateHandler}><span>{title.toUpperCase()}</span></Title>
        <Preview>
            {products.slice(0, 4).map(data => 
                <ProductCard key={data.id} product={data} />)}
        </Preview>
    </CategoryPreviewContainer>
}

export default CategoryPreview;