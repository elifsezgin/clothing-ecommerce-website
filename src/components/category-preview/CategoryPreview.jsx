import { useNavigate } from 'react-router-dom';

import { CategoryPreviewContainer, Preview, Title } from './CategoryPreview.styles';
import ProductCard from '../product-card/ProductCard';
import { useSelector } from 'react-redux';
import { selectCategoriesIsLoading } from '../../store/categories/categoriesSelectors';
import Spinner from '../spinner/Spinner';

const CategoryPreview = ({title, products }) => {
    const navigate = useNavigate();
    const isLoading = useSelector(selectCategoriesIsLoading);

    const navigateHandler = () => {
        navigate(`/shop/${title.toLowerCase()}`);
    }
    return <CategoryPreviewContainer>
        <Title onClick={navigateHandler}><span>{title.toUpperCase()}</span></Title>
        {isLoading ? <Spinner /> : <Preview>
            {products.slice(0, 4).map(data => 
                <ProductCard key={data.id} product={data} />)}
        </Preview>}
    </CategoryPreviewContainer>
}

export default CategoryPreview;