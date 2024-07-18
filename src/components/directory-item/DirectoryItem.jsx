import { useNavigate } from 'react-router-dom';
import {BackgroundImage, DirectoryItemBody, DirectoryItemContainer, P, Title} from './DirectoryItem.styles'

const DirectoryItem = ({category}) => {
    const { id, title, imageUrl } = category;
    const navigate = useNavigate();
    const navigateHandler = () => {
      navigate(`/shop/${title}`);
    }
    return (
      <DirectoryItemContainer  key={id} onClick={navigateHandler}>
        <BackgroundImage style={{
          backgroundImage: `url(${imageUrl})`
        }}></BackgroundImage>
        <DirectoryItemBody>
          <Title>{title}</Title>
          <P>Shop now</P>
        </DirectoryItemBody>
      </DirectoryItemContainer>
    );
}

export default DirectoryItem;