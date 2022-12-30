/* eslint-disable jsx-a11y/alt-text */
import {
  FeedContainer,
  FeedForm,
  FeedIcons,
  IconSingleImage,
  IconSingleSmile,
  IconSingleVideo,
} from './AppStyled';
import {
  FaVideo,
  FaImages,
  FaRegSmile
} from 'react-icons/fa';
import profile from './resources/profile.jpg';

export default function Feed(){
  return(
    <FeedContainer>
        <FeedForm>
          <img src={profile}/>
          <input type='text' placeholder='No que você esta pensando?'/>
        </FeedForm>
        <FeedIcons>
          <IconSingleVideo>
            <FaVideo />
            <span>Vídeo ao vivo</span>
          </IconSingleVideo>
          <IconSingleImage>
            <FaImages />
            <span>Foto/Vídeo</span>
          </IconSingleImage>
          <IconSingleSmile>
            <FaRegSmile />
            <span>Sentimento/atividade</span>
          </IconSingleSmile>
        </FeedIcons>
      </FeedContainer>
  )
}