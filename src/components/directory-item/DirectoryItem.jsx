import { useNavigate } from 'react-router-dom';
import {BackgroundImage, DirectoryItemBody, DirectoryItemContainer, P, Title} from './DirectoryItem.styles'

const DirectoryItem = ({category}) => {
    const { id, title, imageUrl, route } = category;
    const navigate = useNavigate();
    const navigateHandler = () => {
      navigate(route);
    }
    return (
      <DirectoryItemContainer  key={id} onClick={navigateHandler}>
        <BackgroundImage 
          imageUrl={imageUrl} />
        <DirectoryItemBody>
          <Title>{title}</Title>
          <P>Shop now</P>
        </DirectoryItemBody>
      </DirectoryItemContainer>
    );
}

export default DirectoryItem;