import { useNavigate } from 'react-router-dom';
import './DirectoryItem.styles.scss'

const DirectoryItem = ({category}) => {
    const { id, title, imageUrl } = category;
    const navigate = useNavigate();
    const navigateHandler = () => {
      navigate(`/shop/${title}`);
    }
    return (
      <div className="directory-item-container"  key={id} onClick={navigateHandler}>
        <div className="background-image" style={{
          backgroundImage: `url(${imageUrl})`
        }}></div>
        <div className="directory-item-body">
          <h2>{title}</h2>
          <p>Shop now</p>
        </div>
      </div>
    );
}

export default DirectoryItem;