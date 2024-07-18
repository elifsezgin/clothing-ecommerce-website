import './Directory.styles.scss';
import DirectoryItem from '../directory-item/DirectoryItem';

const Directory = ({categories}) => {
    return <div className="directory-container">
    {categories.map((cat) => <DirectoryItem key={cat.id} category={cat} />)}
  </div>
}

export default Directory;
