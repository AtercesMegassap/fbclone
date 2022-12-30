import { StoriesCard, StoriesContainer } from "./AppStyled";
import pontes_bg from './resources/PontesDev.jpg';
import profile from './resources/profile.jpg';

export default function Stories() {
  return(
    <StoriesContainer>
        <StoriesCard style={{backgroundImage: `url(${profile})`}}>
          <p>Ryan Pontes</p>
        </StoriesCard>
        <StoriesCard style={{backgroundImage: `url(${pontes_bg})`}}>
          <p>Ryan Pontes</p>
        </StoriesCard>
        <StoriesCard style={{backgroundImage: `url(${pontes_bg})`}}>
          <p>Ryan Pontes</p>
        </StoriesCard>
        <StoriesCard style={{backgroundImage: `url(${pontes_bg})`}}>
          <p>Ryan Pontes</p>
        </StoriesCard>
        <StoriesCard style={{backgroundImage: `url(${pontes_bg})`}}>
          <p>Ryan Pontes</p>
        </StoriesCard>
      </StoriesContainer>
  )
}