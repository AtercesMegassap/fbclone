/* eslint-disable jsx-a11y/alt-text */
import {
  FeedPostContainer,
  FeedPostContent,
  FeedPostProfile,
  FeedPostSingle,
} from './AppStyled';
import profile from './resources/profile.jpg';
import pontes_bg from './resources/PontesDev.jpg';

export default function FeedPost(props) {
  return(
    <FeedPostContainer>
        <FeedPostSingle>
          <FeedPostProfile>
          <img src={profile}/>
          <h3>{props.name}<br/><span>{props.time}</span></h3>
          </FeedPostProfile>

          <FeedPostContent>
            <p>{props.content}</p>
            <img src={pontes_bg}/>
          </FeedPostContent>
        </FeedPostSingle>
      </FeedPostContainer>
  );
}