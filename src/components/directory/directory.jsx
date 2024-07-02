import './directory.styles.scss';
import CategoryItem from '../category-item/categoryItem';

const Directory = ({categories}) => {
    return <div className="directory-container">
    {categories.map((cat) => <CategoryItem key={cat.id} category={cat} />)}
  </div>
}

export default Directory;
