import {DirectoryContainer} from './Directory.styles';
import DirectoryItem from '../directory-item/DirectoryItem';

const Directory = ({categories}) => {
    return <DirectoryContainer>
    {categories.map((cat) => <DirectoryItem key={cat.id} category={cat} />)}
  </DirectoryContainer>
}

export default Directory;
